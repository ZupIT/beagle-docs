---
title: View Client
weight: 151
description: >-
  This section describes the ViewClient e and how to modify it.
---

---

## What is it?

The View Client is a dependency that is called by Beagle's internal classes to search for components in the backend. It is a `middleware` between the `networkClient` layer and Beagle. In this way, this protocol exposes the methods: `fetch` and `prefetch` to do these functionalities:

```swift
public protocol ViewClientProtocol {
    @discardableResult
    func fetch(
        url: String,
        additionalData: HttpAdditionalData?,
        completion: @escaping (Result<ServerDrivenComponent, Request.Error>) -> Void
    ) -> RequestToken?
    
    func prefetch(url: String, additionalData: HttpAdditionalData?)
}
```

## How to use?

### Implementing `fetch`

The default `fetch` implementation follows these steps:

**Step 1:** Checks if there is no cached component for the given url

**Step 2:** If a cache exists, it returns the cached component in the completion block.

**Step 3:** assemble the URL from `urlBuilder`

**Step 4:** make the request from the `networkClient`

**Step 5:** decodes the response data from the `coder`

**Step 6:** returns the ServerDrivenComponent in the completion block.

### Implementing `prefetch`

The default implementation of `prefetch` follows these steps:

**Step 1:** Follows the same logic as steps 3, 4 and 5 of `fetch`

**Step 2:** Cache (NSCache) the component and assign the url as the search key

{{% alert color="warning" %}}
This cache logic is only used to implement prefetch functionality, ie screens are not cached by default.
{{% /alert %}}

## **Creating a Custom ViewClient**

Therefore, it is possible to implement the View Client in a customized way so that we can adopt a **cache** logic.

### Dependency definition

To implement a custom ViewClient, we can use the standard Beagle `ViewClient` as a base. In this way, we define 3 base dependencies that will be used by our implementation:

1. NetworkClient: Execute requests

2. URLBuilder: Mount the urls

3. Coder: Decodes the result of requests

In addition, we can define a *fourth dependency* that will be responsible for managing the components cache, for this example we will name it `CacheManager`.

{{% alert color="info" %}}
We will not address the implementation of this dependency, since each application may have its own standard and unique way of performing data caching.
{{% /alert %}}

### Implementing ViewClientProtocol

Now we need to implement the ViewClientProtocol's `fetch` and `prefetch` methods, and from there we can adopt our custom component cache policy.

In this example, we will fetch the component in cache every time the `fetch` method is called and if it is not found, we will make the request normally (implemented in the `fetchComponent` method) and cache the result, for that we will assign the url of the request as a search key:

```swift
func fetch(
        url: String,
        additionalData: HttpAdditionalData?,
        completion: @escaping (Result<ServerDrivenComponent, Request.Error>) -> Void
    ) -> RequestToken? {
        // cache custom logic
        if let component = cacheManager.getComponent(for: url) {
            completion(.success(component))
            return nil
        } else {
            return fetchComponent(url: url, additionalData: additionalData, completion: completion)
        }
    }
```

So the `fetchComponent` method will have the following implementation:

```swift
@discardableResult
    private func fetchComponent(
        url: String, 
        additionalData: HttpAdditionalData?, 
        completion: @escaping (Result<ServerDrivenComponent, Request.Error>) -> Void
    ) -> RequestToken? {
        guard let fullURL = urlBuilder.build(path: url) else {
            completion(.failure(.urlBuilderError))
            return nil
        }
        guard let networkClient = networkClient else {
            completion(.failure(.networkClientWasNotConfigured))
            return nil
        }
        let request = Request(url: fullURL, additionalData: additionalData)
        
        return networkClient.executeRequest(request) { result in
            switch result {
            case .success(let response):
                // cache custom logic
                let decodeResult = self.decodeComponent(from: response.data)
                if case .success(let component) = decodeResult {
                    self.cacheManager.insert(component: component, url: url)
                }
                completion(self.decodeComponent(from: response.data))
            case .failure(let networkError):
                completion(.failure(.networkError(networkError)))
            }
        }
    }
```

We can see that five steps are performed:

**Step 1:** Mount url from `urlBuilder`

**Step 2:** Execute the request from the `networkClient`

**Step 3:** Decode the response into a component from the `coder`

**Step 4:** Insert the cached component from the `cacheManager`

**Step 5:** Returns the component from the `completion` block

For the `prefetch` method we can simply follow the same behavior as the `fetchComponent` method, so just call it with the completion block being an empty closure:

```swift
func prefetch(url: String, additionalData: HttpAdditionalData?) {
    fetchComponent(url: url, additionalData: additionalData, completion: { _ in })
}
```

### Final result

Finally, we have this implementation as a result:

```swift
class ViewClientCustom: ViewClientProtocol {

    // MARK: Beagle Dependencies
    
    @OptionalInjected var networkClient: NetworkClientProtocol?
    @Injected var urlBuilder: UrlBuilderProtocol
    @Injected var coder: CoderProtocol

    init() {}

    init(_ resolver: DependenciesContainerResolving) {
        _coder = Injected(resolver)
        _urlBuilder = Injected(resolver)
        _networkClient = OptionalInjected(resolver)
    }

    // MARK: Inner Dependencies
    
    // Cache manager
    var cacheManager: CacheManagerProtocol!
    
    // MARK: ViewClientProtocol
    
    func fetch(
        url: String,
        additionalData: HttpAdditionalData?,
        completion: @escaping (Result<ServerDrivenComponent, Request.Error>) -> Void
    ) -> RequestToken? {
        // cache custom logic
        if let component = cacheManager.getComponent(for: url) {
            completion(.success(component))
            return nil
        } else {
            return fetchComponent(url: url, additionalData: additionalData, completion: completion)
        }
    }
    
    func prefetch(url: String, additionalData: HttpAdditionalData?) {
        fetchComponent(url: url, additionalData: additionalData, completion: { _ in })
    }
    
    // MARK: Private Functions
    
    @discardableResult
    private func fetchComponent(
        url: String, 
        additionalData: HttpAdditionalData?, 
        completion: @escaping (Result<ServerDrivenComponent, Request.Error>) -> Void
    ) -> RequestToken? {
        guard let fullURL = urlBuilder.build(path: url) else {
            completion(.failure(.urlBuilderError))
            return nil
        }
        guard let networkClient = networkClient else {
            completion(.failure(.networkClientWasNotConfigured))
            return nil
        }
        let request = Request(url: fullURL, additionalData: additionalData)
        
        return networkClient.executeRequest(request) { result in
            switch result {
            case .success(let response):
                // cache custom logic
                let decodeResult = self.decodeComponent(from: response.data)
                if case .success(let component) = decodeResult {
                    self.cacheManager.insert(component: component, url: url)
                }
                completion(self.decodeComponent(from: response.data))
            case .failure(let networkError):
                completion(.failure(.networkError(networkError)))
            }
        }
    }
    
    private func decodeComponent(from data: Data) -> Swift.Result<ServerDrivenComponent, Request.Error> {
        do {
            return .success(try coder.decode(from: data))
        } catch {
            return .failure(.decoding(error))
        }
    }
}
```
