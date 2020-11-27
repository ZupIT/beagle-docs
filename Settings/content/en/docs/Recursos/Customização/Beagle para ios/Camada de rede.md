---
title: Camada de rede
weight: 151
description: >-
  Nesta seção, você encontra informações sobre a camada de rede do Beagle e como
  modificá-la.
---

---

## Introdução

O Beagle realiza todas requisições web a partir da dependência **`networkClient`** presente no BeagleDependencies, ela é do tipo `NetworkClient`, sendo assim é possível substituir a implementação default utilizada no framework por outra. 

Você precisa fazer a substituição nos casos em que:

* É preciso **unificar** a camada de networking do sistema em um **módulo;**
* Modificar algumas propriedades como, por exemplo, cabeçalhos de requisições, métodos request, body response,  data response, executar criptografia, etc. 

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

{% hint style="info" %}
A implementação default do protocolo `NetworkClient` usada pelo Beagle utiliza recursos do **Foundation** para realizar as requisições como o **URLSession**.
{% endhint %}

## **Customizações**

Para customizar o seu protocolo `NetworkClient`, veja as seções abaixo: 

### **Adicione header fields**

Para **adicionar header fields** nas requisições criadas pelo NetworkClient default basta seguir os seguintes passos:

1. No AppDelegate ou na classe de configurações do ambiente do beagle **instancie** o **NetworkClientDefault** passando as dependências recém criadas no inicializador;
2. **Adicione** os headers desejados no atributo **additionalHeaders** presente no objeto **HttpRequestBuilder.** Ele é uma dependência do NetworkClientDefault responsável por criar as URLRequest que são passadas para a dataTask do URLSession;
3. **Atribuia** o NetworkClient instanciado e modificado como o networkClient das dependências:

```swift
let dependencies = BeagleDependencies()
let client = NetworkClientDefault(dependencies: dependencies)
client.httpRequestBuilder.additionalHeaders = [
        "X-Frame-Options": "deny", 
        "client-Identification":"123123123"
]
dependencies.networkClient = client
Beagle.dependencies = dependencies
```

### Modifique URL base

Para modificar a URL base utilizada pelo Beagle, siga os passos:

1. No AppDelegate ou na classe de configurações do ambiente do Beagle, **instancie** um objeto do tipo **URLBuilder** e passe a URL base no inicializador;
2. **Atribua** o objeto criado ao atributo **urlBuilder** presente no **BeagleDependencies**:

```swift
let dependencies = BeagleDependencies()
let urlBuilder = UrlBuilder(baseUrl: URL(string: Constants.Server.baseURL))
dependencies.urlBuilder = urlBuilder
Beagle.dependencies = dependencies
```

## **Substituindo a camada de Networking**

Para substituir a classe responsável por realizar as requisições Http para o Beagle, siga os passos a seguir:

### **Passo 1: implementar a `NetworkClient`**

Implemente o protocolo `NetworkClient` na classe que deseja utilizar para realizar as requisições, neste caso o `CustomNetworkClient` será usado como exemplo:

```swift
class CustomNetworkClient: NetworkClient {
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

Esse protocolo tem a responsabilidade de executar as requisições a partir da função executeRequest que recebe 2 parâmetros:

* **request**: valor do tipo Request que contém os dados necessários para a requisição:
  * URL
  * Headers
  * RequestType
* **completion**: bloco que deve ser chamado ao final da execução da função passando o resultado da requisição.

Além disso a função pode retornar o **RequestToken,** para que a requisição possa ser cancelada internamente pelo Beagle.

### **Passo 2:**  a**tribuir as dependências**

No AppDelegate ou na classe de configurações do ambiente do Beagle, atribua a instância de `CustomNetworkClient` ao atributo `networkClient` presente no Beagle Dependencies:

```swift
let dependencies = BeagleDependencies()
let client = CustomNetworkClient()
dependencies.networkClient = client
Beagle.dependencies = dependencies
```

Pronto! Agora o Beagle utilizará a sua classe com todas as modificações e definições necessárias para realizar as requisições Http.
