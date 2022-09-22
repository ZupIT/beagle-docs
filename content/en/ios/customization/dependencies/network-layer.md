---
title: Network Layer
weight: 157
description: >-
  You will find here information about Beagles's network layer and how to modify it.
---

---

## Introduction

Beagle makes all the web request from the **`networkClient`** dependency that is present in BeagleDependencies of the type `NetworkClientProtocol`, so it is possible to create your own network layer implementation to be used in the framework.

Now you can:

* **Unify** the network layer in one **module**;
* Modify some properties like request headers, request methods, body response, data response,  run cryptography, etc.

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

| **Attribute** | **Type** | **Required** | **Definition** |
| :--- | :--- | :---: | :---: |
| request | Request  | ✓ | Contains the data necessary to make a request. |
| completion | RequestCompletion | ✓ | block that must be called in the end of the function execution, passing the request result. |

Besides that, the function can return the **RequestToken,** in order to make the request be able to be canceled internally by Beagle.

### **Request**

| **Attribute** | **Type** | **Required** | **Definition** |
| :--- | :--- | :---: | :---: |
| url | URL | ✓ | Contains the url of the request. |
| additionalData | HttpAdditionalData |  | Contains the additional data for a request. (ex: headers) |

#### **RequestData**

| **Attribute** | **Type** | **Required** | **Definition** |
| :--- | :--- | :---: | :---: |
| method | String |  | Receives the type of the request, the default is "GET". |
| headers | [String: String] |  | Contains the headers for the requests. |
| body | DynamicObject |  | Contains the body of the request. |

## **Creating a Network layer**

To customize your `NetworkClient` protocol, see the steps below:

### **Step 1: Implement the `NetworkClientProtocol`**

Implement the `NetworkClientProtocol` in the class you want to use to make requests, in this case, the `CustomNetworkClient` will be used, like the example below:

```swift
class CustomNetworkClient: NetworkClient {
    func executeRequest(
        _ request: Request, 
        completion: @escaping RequestCompletion
    ) -> RequestToken? {
        let url: URL = request.url
        let requestType = request.type
        let headers = request.additionalData
        //Requests implementation
    }
    
    //Network client implementation...
}
```

### **Step 2: Assign the dependencies**

On AppDelegate or on Beagle's environment, assign the instance of `CustomNetworkClient` to the `networkClient` attribute from `BeagleDependencies`:

```swift
let dependencies = BeagleDependencies()
dependencies.networkClient = CustomNetworkClient()
BeagleConfigurator.setup(dependencies: dependencies)
```

Done! Now, Beagle will use your class with all the changes and definition needed to make the http requests.

### **Example**

The example below has the same implementation used in the BeagleScaffold and BeagleDefault libraries.

#### **`NetworkClientDefault`**

Create a new file called `NetworkClientDefault`, which will have a class conforming to the `NetworkClientProtocol`.

This implementation uses **Foundation** resources to make requests, such as **URLSession**.

```swift

import Foundation
import Beagle

public class NetworkClientDefault: NetworkClientProtocol {

    public var session = URLSession.shared

    public var httpRequestBuilder = HttpRequestBuilder()
    
    @OptionalInjected var logger: LoggerProtocol?

    enum ClientError: Swift.Error {
        case invalidHttpResponse
        case invalidHttpRequest
    }
    
    init(_ resolver: DependenciesContainerResolving) {
        _logger = OptionalInjected(resolver)
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
            additionalData: request.additionalData
        )
        let urlRequest = build.toUrlRequest()

        let task = session.dataTask(with: urlRequest) { [weak self] data, response, error in
            guard let self = self else { return }
            self.logger?.log(Log.network(.httpResponse(response: .init(data: data, response: response))))
            completion(self.handleResponse(data: data, request: urlRequest, response: response, error: error))
        }
        
        logger?.log(Log.network(.httpRequest(request: .init(url: urlRequest))))
        task.resume()
        return task
    }

    private func handleResponse(
        data: Data?,
        request: URLRequest,
        response: URLResponse?,
        error: Swift.Error?
    ) -> NetworkClientProtocol.NetworkResult {
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

Create a new file called `HttpRequestBuilder`. This class will be used to configure http request configurations.

In the example below, build the request (url, method, headers and body).

```swift

import Foundation
import Beagle

public class HttpRequestBuilder {

    public var additionalHeaders = [String: String]()
    
    public init() { }

    public func build(
        url: URL,
        additionalData: HttpAdditionalData?
    ) -> Result {

        let headers = makeHeaders(additionalData: additionalData)
        var body: Data?
        if let additionalDataBody = additionalData?.body {
            body = try? JSONEncoder().encode(additionalDataBody)
        }
        return Result(
            url: url,
            method: additionalData?.method?.rawValue ?? "GET",
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
        additionalData?.headers?.forEach {
            headers.updateValue($0.value, forKey: $0.key)
        }
        additionalHeaders.forEach {
            headers.updateValue($0.value, forKey: $0.key)
        }
        return headers
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
