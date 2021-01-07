---
title: Network Layer
weight: 157
description: >-
  You will find here information about Beagles's network layer and how to modify it.
---

---

## Introduction

Beagle makes all the web request from the **`networkClient`** dependency that is in the BeagleDependencies, and its type is `NetworkClient`, because of that it is possible to replace a default implementation used in the framework for another.

With that in mind, you can:

* **Unify** the network layer in one **module**;
* Modify some properties like request headers, request methods, body response, data response,  run cryptography, etc.

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

| **Attribute** | **Type** | **Required** | **Definition** |
| :--- | :--- | :---: | :---: |
| request | Request  | ✓ | Contains the data necessary to make a request. |
| completion | RequestCompletion | ✓ | block that must be called in the end of the function execution, passing the request result. |

Besides that, the function can return the **RequestToken,** in order to make the request be able to be canceled internally by Beagle.

### **Request**

| **Attribute** | **Type** | **Required** | **Definition** |
| :--- | :--- | :---: | :---: |
| url | URL | ✓ | Contains the url of the request. |
| type | RequestType | ✓ | Contains the type of the request. |
| additionalData | RemoteScreenAdditionalData |  | Contains the additional data for a request. (ex: headers) |

### **RequestType**

It is an `ENUM` and the values are:

| Value | Definition |
| :--- | :--- |
| fetchComponent | Component requests |
| submitForm(FormData) | Submit forms |
| fetchImage | Image requests |
| rawRequest(RequestData) | Other types of requests |

#### **FormData**

| **Attribute** | **Type** | **Required** | **Definition** |
| :--- | :--- | :---: | :---: |
| method | FormRemoteAction.Method | ✓ | Contains the type of the request (get, post, put, delete). |
| values | [String: String] | ✓ | Contains the data of the form. |

#### **RequestData**

| **Attribute** | **Type** | **Required** | **Definition** |
| :--- | :--- | :---: | :---: |
| method | String |  | Receives the type of the request, the default is "GET". |
| headers | [String: String] |  | Contains the headers for the requests. |
| body | Any |  | Contains the body of the request. |

## **Creating a Network layer**

To customize your `NetworkClient` protocol, see the sections below:

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
        //Requests implementation
    }
    
    //Network client implementation...
}
```

### **Step 2:  assign the dependencies**

OnAppDelegate or on Beagle's environment, assing the instance `CustomNetworkClient`  to the `networkClient` attribute that it is on Beagle Dependencies:

```swift
let dependencies = BeagleDependencies()
let client = CustomNetworkClient()
dependencies.networkClient = client
Beagle.dependencies = dependencies
```

Done! Now, Beagle will use your class with all the changes and definition needed to make the http requests.

### **Example**

The example below has the same implementation used in the BeagleScaffold and BeagleDefault dependencies.

#### **`NetworkClientDefault`**

Create a new file called `NetworkClientDefault`, which will have a class conforming to the `NetworkClient` protocol.

This implementation uses **Foundation** resources to make requests, such as **URLSession**.

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

Create a new file called `HttpRequestBuilder`. This class will be used to configure http request configurations.

In the example below, we build the request (url, method, headers and body) according to the type of `Request.RequestType` passed.

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
