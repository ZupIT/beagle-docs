---
title: Networkclient
weight: 157
---

---

#### Added in Beagle 1.0.0

## Introduction 

Beagle makes all the web request from the **`networkClient`** dependency that it is in the BeagleDependencies, and its type is `NetworkClient`, because of that it is possible to replace a default implementation used in the framework to another.

You need to make the replacement in the following cases:

* It is necessary to **unify** the networking layer in the **module** system; 
* Modify some properties for example, like request headers, request methods, body response, data response,  run cryptography, etc. 

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

{{% alert color="info" %}}
The default implementation of the `NetworkClient` protocol used on Beagle has the **Foundation** resources to make the **URLSession** requests
{{% /alert %}}

## **Customization**

To customize your `NetworkClient` protocol, see the sections below:

### **Adding header fields**

To **add header fields**  on the requests created by the `NetworkClient` default, follow the steps:  

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

### Modifying URL base

To modify the URL base used on Beagle, follow the steps: 

1. On AppDelegate or in a Beagle's environment configuration class, **instantiate** an object with the **URLBuilder** type and pass the URL base in the initiator; 
2. **Assign** the created object to the **urlBuilder** attribute that it is on **BeagleDependencies:**  

```swift
let dependencies = BeagleDependencies()
let urlBuilder = UrlBuilder(baseUrl: URL(string: Constants.Server.baseURL))
dependencies.urlBuilder = urlBuilder
Beagle.dependencies = dependencies
```

## **Replacing the Networking layer**

To replace the class responsible for making Http request to Beagle, follow the next steps:

### **Step 1: implement `NetworkClient`**

Implement the `NetworkClient` protocol in the class you want to use to make requests, in this case, the `CustomNetworkClient` will be used, like the example below:

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

This protocol run the requests from the executeRequest function, it receives two parameters:

* **request**: request type value that contains the data necessary to make a request:
  * URL
  * Headers
  * RequestType
* **completion**:  block that must be called in the end of the function execution, passing the request result.

Besides that, the function can return the **RequestToken,** in order to make the request be able to be canceled internally by Beagle.

### **Step 2:**  assign the dependencies 

OnAppDelegate or on Beagle's environment, assing the instance `CustomNetworkClient`  to the `networkClient` attribute that it is on Beagle Dependencies:

```swift
let dependencies = BeagleDependencies()
let client = CustomNetworkClient()
dependencies.networkClient = client
Beagle.dependencies = dependencies
```

Done! Now, Beagle will use your class with all the changes and definition needed to make the http requests.
