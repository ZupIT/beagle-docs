---
title: Camada de rede
weight: 151
description: >-
  Nesta seção, você encontra informações sobre a camada de rede do Beagle e como
  modificá-la.
---

---

## **Introdução**

O Beagle realiza todas requisições web a partir da dependência **`networkClient`** presente no BeagleDependencies do tipo `NetworkClient`, sendo assim é possível criar a sua própria implementação de camada de rede para ser utilizada no framework.

Com isso você pode:

* **Unificar** a camada de networking do sistema em um **módulo;**
* Modificar propriedades como, por exemplo, cabeçalhos de requisições, métodos request, body response, data response, executar criptografia, etc.

```swift
public protocol NetworkClient {
    typealias Error = NetworkError
    typealias NetworkResult = Result<NetworkResponse, NetworkError>
    typealias RequestCompletion = (NetworkResult) -> Void
 
    @discardableResult
    func executeRequest(
        _ request: Request,
        completion: @escaping RequestCompletion
    ) -> RequestToken?
}
```

| **Atributo** | **Tipo** | **Obrigatório** | **Definição** |
| :--- | :--- | :---: | :---: |
| request | Request  | ✓ | Contém os dados necessários para a requisição. |
| completion | RequestCompletion | ✓ | Bloco que deve ser chamado ao final da execução da função passando o resultado da requisição. |

Além disso a função pode retornar o **RequestToken,** para que a requisição possa ser cancelada internamente pelo Beagle.

### **Request**

| **Atributo** | **Tipo** | **Obrigatório** | **Definição** |
| :--- | :--- | :---: | :---: |
| url | URL | ✓ | Contém a url da requisição. |
| type | RequestType | ✓ | Contém o tipo da requisição. |
| additionalData | RemoteScreenAdditionalData |  | Contém os dados adicionais para uma requisição. (ex: headers) |

### **RequestType**

É um `Enum`, cujo os valores são:

| Valor | Definição |
| :--- | :--- |
| fetchComponent | Requisição de componente |
| submitForm(FormData) | Envio de formulários |
| fetchImage | Requisição de imagem |
| rawRequest(RequestData) | Outros tipos de requisição |

#### **FormData**

| **Atributo** | **Tipo** | **Obrigatório** | **Definição** |
| :--- | :--- | :---: | :---: |
| method | FormRemoteAction.Method | ✓ | Contém o tipo da requisição (get, post, put, delete). |
| values | [String: String] | ✓ | Contém o valor dos dados do formulário. |

#### **RequestData**

| **Atributo** | **Tipo** | **Obrigatório** | **Definição** |
| :--- | :--- | :---: | :---: |
| method | String |  | Parâmetro que recebe o tipo da requisição, têm-se como default o tipo "GET". |
| headers | [String: String] |  | Parâmetro que vai conter o cabeçalho das requisições. |
| body | Any |  | Contém o body da requisição. |

## **Criando uma camada de Networking**

Para substituir a classe responsável por realizar as requisições Http para o Beagle, siga os passos a seguir:

### **Passo 1: Implementar a `NetworkClient`**

Implemente o protocolo `NetworkClient` na classe que deseja utilizar para realizar as requisições, neste caso o `NetworkClientDefault` será usado como exemplo:

```swift
class NetworkClientDefault: NetworkClient {
    func executeRequest(
        _ request: Request, 
        completion: @escaping RequestCompletion
    ) -> RequestToken? {
        let url: URL = request.url
        let requestType = request.type
        let headers = request.additionalData
        //Implementacao de Requisicoes
    }
    
    //Implementacao Network Client...
}
```

### **Passo 2: Atribuir as dependências**

No AppDelegate ou na classe de configurações do ambiente do Beagle, atribua a instância de `NetworkClientDefault` ao atributo `networkClient` presente no Beagle Dependencies:

```swift
let dependencies = BeagleDependencies()
let client = NetworkClientDefault()
dependencies.networkClient = client
BeagleConfigurator.setup(dependencies: dependencies)
```

Pronto! Agora o Beagle utilizará a sua classe com todas as modificações e definições necessárias para realizar as requisições Http.

### **Exemplo completo**

O exemplo abaixo possui a mesma implementação utilizada nas bibliotecas BeagleScaffold e BeagleDefault.

#### **`NetworkClientDefault`**

Crie um novo arquivo chamado `NetworkClientDefault`, que terá uma classe conformando com o protocolo `NetworkClient`. 

A implementação que iremos criar utiliza recursos do **Foundation** para realizar as requisições, como por exemplo o **URLSession**.

```swift

public class NetworkClientDefault: NetworkClient {

    public typealias Dependencies = DependencyLogger

    public var session = URLSession.shared
    let dependencies: Dependencies

    public var httpRequestBuilder = HttpRequestBuilder()
    
    public init(dependencies: DependencyLogger) {
        self.dependencies = dependencies
    }

    enum ClientError: Swift.Error {
        case invalidHttpResponse
        case invalidHttpRequest
    }

    public func executeRequest(
        _ request: Request,
        completion: @escaping RequestCompletion
    ) -> RequestToken? {
        return doRequest(request, completion: completion)
    }

    @discardableResult
    private func doRequest(
        _ request: Request,
        completion: @escaping RequestCompletion
    ) -> RequestToken? {
        
        let build = httpRequestBuilder.build(
            url: request.url,
            requestType: request.type,
            additionalData: request.additionalData as? HttpAdditionalData
        )
        let urlRequest = build.toUrlRequest()

        let task = session.dataTask(with: urlRequest) { [weak self] data, response, error in
            guard let self = self else { return }
            self.dependencies.logger.log(Log.network(.httpResponse(response: .init(data: data, response: response))))
            completion(self.handleResponse(data: data, request: urlRequest, response: response, error: error))
        }
        
        dependencies.logger.log(Log.network(.httpRequest(request: .init(url: urlRequest))))
        task.resume()
        return task
    }

    private func handleResponse(
        data: Data?,
        request: URLRequest,
        response: URLResponse?,
        error: Swift.Error?
    ) -> NetworkClient.NetworkResult {
        if let error = error {
            return .failure(NetworkError(error: error, request: request))
        }

        guard
            let httpResponse = response as? HTTPURLResponse,
            (200...299).contains(httpResponse.statusCode),
            let responseData = data
        else {
            return .failure(NetworkError(
                error: ClientError.invalidHttpResponse,
                data: data,
                request: request,
                response: response
            ))
        }

        return .success(.init(data: responseData, response: httpResponse))
    }
}

```

#### **`HttpRequestBuilder`**

Crie um novo arquivo chamado `HttpRequestBuilder`. Essa classe será utilizada para fazer as configurações das requisições http.

No exemplo abaixo, construímos a requisição (url, método, headers e body) de acordo com o tipo de `Request.RequestType` passado.

```swift
public class HttpRequestBuilder {

    public var additionalHeaders = [String: String]()
    
    public init() { }

    public func build(
        url: URL,
        requestType: Request.RequestType,
        additionalData: HttpAdditionalData?
    ) -> Result {
        
        if case .rawRequest(let requestData) = requestType {
            return Result(url, requestData)
        }
        
        var newUrl = url
        var body = additionalData?.httpData?.body

        let headers = makeHeaders(additionalData: additionalData)

        setupParametersFor(requestType: requestType, url: &newUrl, body: &body)

        return Result(
            url: newUrl,
            method: httpMethod(type: requestType, data: additionalData),
            headers: headers,
            body: body
        )
    }
    
    public struct Result {
        var url: URL
        var method: String
        var headers: [String: String]
        var body: Data?
        
        init(url: URL, method: String, headers: [String: String], body: Data?) {
            self.url = url
            self.method = method
            self.headers = headers
            self.body = body
        }
        
        init(_ url: URL, _ requestData: Request.RequestData) {
            let method = requestData.method ?? "GET"
            var body: Data?
            if method != "GET" {
                body = try? JSONSerialization.data(withJSONObject: requestData.body ?? [:], options: [.fragmentsAllowed])
            }
            self.init(url: url, method: method, headers: requestData.headers ?? [:], body: body)
        }

        func toUrlRequest() -> URLRequest {
            var request = URLRequest(url: url, cachePolicy: .reloadIgnoringLocalAndRemoteCacheData, timeoutInterval: 100)
            request.httpMethod = method
            request.httpBody = body
            headers.forEach {
                request.addValue($0.value, forHTTPHeaderField: $0.key)
            }
            return request
        }
    }

    private func makeHeaders(additionalData: HttpAdditionalData?) -> [String: String] {
        var headers = [
            "Content-Type": "application/json",
            "beagle-platform": "IOS"
        ]
        additionalData?.headers.forEach {
            headers.updateValue($0.value, forKey: $0.key)
        }
        additionalHeaders.forEach {
            headers.updateValue($0.value, forKey: $0.key)
        }
        return headers
    }

    private func httpMethod(type: Request.RequestType, data: HttpAdditionalData?) -> String {
        switch (type, data) {

        case (.submitForm(let form), _):
            return form.method.rawValue
            
        case (.rawRequest(let requestData), _):
            return requestData.method ?? "GET"

        case (_, nil):
            return "GET"

        case (_, let data?):
            return data.httpData?.method.rawValue ?? "GET"
        }
    }

    private func setupParametersFor(
        requestType: Request.RequestType,
        url: inout URL,
        body: inout Data?
    ) {
        guard case .submitForm(let form) = requestType else { return }

        switch form.method {
        case .post, .put:
            configureBodyParameters(form.values, in: &body)

        case .get, .delete:
            configureURLParameters(form.values, in: &url)
        }
    }

    private func configureBodyParameters(
        _ parameters: [String: Any],
        in body: inout Data?
    ) {
        body = try? JSONSerialization.data(withJSONObject: parameters, options: [])
    }

    private func configureURLParameters(
        _ parameters: [String: String],
        in url: inout URL
    ) {
        guard var components = URLComponents(url: url, resolvingAgainstBaseURL: true) else { return }

        components.queryItems = parameters
            .filter { !$0.value.isEmpty }
            .map { URLQueryItem(name: $0.key, value: $0.value) }

        if let newUrl = components.url {
            url = newUrl
        }
    }
}
```
