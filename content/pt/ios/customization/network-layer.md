---
title: Camada de rede
weight: 151
description: >-
  Nesta seção, você encontra informações sobre a camada de rede do Beagle e como
  modificá-la.
---

---

## **Introdução**

O Beagle realiza todas requisições web a partir da dependência **`networkClient`** presente no BeagleDependencies do tipo `NetworkClientProtocol`, sendo assim é possível criar a sua própria implementação de camada de rede para ser utilizada no framework.

Com isso você pode:

* **Unificar** a camada de networking do sistema em um **módulo;**
* Modificar propriedades como, por exemplo, cabeçalhos de requisições, métodos request, body response, data response, executar criptografia, etc.

```swift
public protocol NetworkClientProtocol {
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
| additionalData | HttpAdditionalData |  | Contém os dados adicionais para uma requisição. |

### **HttpAdditionalData**

| **Atributo** | **Tipo** | **Obrigatório** | **Definição** |
| :--- | :--- | :---: | :---: |
| method | String |  | Parâmetro que recebe o tipo da requisição, têm-se como default o tipo "GET". |
| headers | [String: String] |  | Parâmetro que vai conter o cabeçalho das requisições. |
| body | DynamicObject |  | Contém o body da requisição. |

## **Criando uma camada de Networking**

Para substituir a classe responsável por realizar as requisições Http para o Beagle, siga os passos a seguir:

### **Passo 1: Criar uma implementação para NetworkClientProtocol**

Implemente o protocolo `NetworkClient` na classe que deseja utilizar para realizar as requisições, neste caso o `NetworkClientDefault` será usado como exemplo:

```swift
class NetworkClient: NetworkClientProtocol {
    func executeRequest(
        _ request: Request, 
        completion: @escaping RequestCompletion
    ) -> RequestToken? {
        let url: URL = request.url
        let headers = request.additionalData?.headers
        let method = request.additionalData?.method
        var body: Data?
        if let additionalDataBody = request.additionalData?.body {
            body = try? JSONEncoder().encode(additionalDataBody)
        }
        //Implementacao de Requisicoes
    }
    
    //Implementacao Network Client...
}
```

### **Passo 2: Atribuir as dependências**

No AppDelegate ou na classe de configurações do ambiente do Beagle, atribua a instância de `NetworkClientDefault` ao atributo `networkClient` presente no Beagle Dependencies:

```swift
let dependencies = BeagleDependencies()
let client = NetworkClient()
dependencies.networkClient = client
BeagleConfigurator.setup(dependencies: dependencies)
```

Pronto! Agora o Beagle utilizará a sua classe com todas as modificações e definições necessárias para realizar as requisições Http.

## **Criando uma camada de Networking**

Caso queira entrar mais a fundo na implementação da camada de rede temos um exemplo [aqui](https://github.com/Orangestack-com/beagle-ios/blob/main/Example/BeagleDemo/BeagleDemo/BeagleConfig/Network/NetworkClientDefault.swift)