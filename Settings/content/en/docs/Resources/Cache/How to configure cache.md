---
title: How to configure cache
weight: 51
description: >-
  Details on how cache works and configuration for each platform (Android, iOS,
  Backend, WEB)
---

---

## How does cache work? 

As in other platforms the pattern cache is controlled by the backend with the tag `cache-control` and `beagle-hash`, they are information that must be provided through request header, where `beagle-hash` is responsible for providing this hash related to the screen that has been downloaded and `cache-control` for the life time of this cache as reliable. 

### Reliable cache

A reliable cache is when its life time has not expired yet. 

In this case, when verifying if there is a cache in the front and it is reliable, the screen is rendered without confirming with the server. This saves time, bandwidth and provides a fluid experience to the user.

Reliable cache its saved in the memory.

### Unreliable cache

We also have the unreliable cache, that means its life time has already expired. 

A unreliable cache means that when it is identified it needs to be validaded with a backend to the route with its hash. 

This moment it stops being saved in the memory and it is saved in a persistent way in the disk. 

### Life time

The cache's life time can have a parameter through the application's configuration. In the standard cache implementation the life time is 300 seconds. This time can be altered if the backend sends a different time through the `cache-control` header, because it has priority in this configuration. 

### Cache re validation 

When an unreliable cache is found, it must be validated with the backend. That means when searching a screen, it sends a request in the header the hash it has. 

When receiving the request, the server understands that already has a version of this screen saved in the application and compares the hash value sent with the current one saved by the backend. In case they are the same, a response is sent with 304 status and without a body, indicating that the screen remains the same and that cache is reliable again. 

If the hash sent by the front it is different from the one saved in the backend, a response will be sent normally with a new hash value that it must be updated in the application. 

### Memory and disk occupation 

To avoid a memory and disk overload, both caches apply a replacement policity Least [**Recently Used \(LRU\)**](https://pt.wikipedia.org/wiki/Algoritmo_de_troca_de_p%C3%A1gina) where the maximum quantity of the records can be also configured through the base cache class by the application. The standard values for memory and disk are 15 and 150, respectively. 

## Configuring and customizing the cache

There are allowed customization allowed by pattern class that exists in the cache, like life time and maximum quantity of records in memory and disk. 

In case the pattern approach does not solve the problem, the applicantion is free to replace the pattern implementation to another one that fits better. For that, the class responsible for the cache management needs to be in accordance with the `CacheManagerProtocol` protocol.

Every platform has different specifications to configure the cache.

We listed below, see: 

{{< tabs name="T12" >}}
{{% tab name="Android" %}}
In Android, the cache is configured when you implement the first Beagle's configuration. 

This implementation happens inside the class named [**AppBeagleConfig**](../../../../get-started/using-beagle/android#passo-2-criar-uma-classe-beagleconfig), meaning that it is inside the Beagle's configuration class. 

The  cache, is a Beagle's internal class where we can define 3 properties, represented by the attributes below:

1. `enable`
2. `maxAge`
3. `memoryMaximumCapacity`


```kotlin
@BeagleComponent
class AppBeagleConfig : BeagleConfig {
    override val isLoggingEnabled: Boolean = true
    override val baseUrl: String get() = "https://myapp.server.com/"
    override val environment: Environment get() = Environment.DEBUG
    override val cache: Cache = Cache(
        enabled = true,
        maxAge = 300,
        memoryMaximumCapacity = 15 // 
    )
}
```


### Cache's attributes

| Attribute | Definition |
| :--- | :--- |
| **enable** | `boolean` value that enables or disables the cache in disk and memory. |
| **maxAge** | `int` value of time in seconds that a memory cache will be active. |
| **memoryMaximumCapacity** | Int value that represents the memory cache LRU size. It is the number of screens that will be in the memory, for example, if you define a number 15, it means 15 pages that will be in cache. |
{{% /tab %}}

{{% tab name="iOS" %}}
In iOS, the cache is configured when you first configure Beagle's dependencies. 

We allow you to change the default configuration of cache by creating a instance of a class named `CacheManagerDefault`. Inside this class you can define the value of 3 properties:

1. `memoryMaximumCapacity`
2. `diskMaximumCapacity`
3. `cacheMaxAge`

```swift
let dependencies = BeagleDependencies()
let cacheManager = CacheManagerDefault(
                            dependencies: dependencies,
                            config: .init(memoryMaximumCapacity: 15,
                                          diskMaximumCapacity: 300,
                                          cacheMaxAge: 300))
dependencies.cacheManager = cacheManager
Beagle.dependencies = dependencies
```

It is also possible to create your own cache manager and set it to `BeagleDependencies` if you conform to the protocol `CacheManagerProtocol`. 

```text
public protocol CacheManagerProtocol {
    func addToCache(_ reference: CacheReference)
    func getReference(identifiedBy id: String) -> CacheReference?
    func isValid(reference: CacheReference) -> Bool
}
```

### Cache's attributes

| Attribute | Definition |
| :--- | :--- |
| **memoryMaximumCapacity** | `whole` value that represents the mamory cache LRU size. It is the number of screens that will be in memory. For example, if you define a number 15, it means 15 pages that will be in cache. |
| **diskMaximumCapacity** | Whole value that represents the memory cache LRU size. It is the number of screens that will be in the memory. For example, if you define a number 15, it means 15 pages that will be in cache. |
| **cacheMaxAge** |  `whole` time value in seconds that the memory cache is active. |
{{% /tab %}}

{{% tab name="Backend" %}}
In the backend this functionality is only supported if you use the [**started library**](https://app.gitbook.com/@zup-products/s/beagle/~/drafts/-MCCc1YL7zK2ENGVKXB6/v/v1.0-en/get-started/installing-beagle/beagle-backend#passo-3-incluindo-requerimentos-adicionais)

The cache was created to optimize the response of a request in terms of size and BFF's time, when the return is the same as the previous one. The input in this cache last until the server is redeployed or the client installed again. 

To make this configuration: 

1. Search inside the ‌`src/main/resources` folder for the file`application.properties`
2. If you don't have it, you can install now.

In case the key is not listed in your file, it means that the standard configuration will be applied automatically. 

```text
beagle.cache.endpoint.exclude=/imagebeagle.cache.enabled=false​
```

In the list below, you will find what are the available properties and which configuration can be altered.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Key</th>
      <th style="text-align:left">Description</th>
      <th style="text-align:left">Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><code>beagle.cache.enabled</code>
      </td>
      <td style="text-align:left">Flag indicating if the cache mechanism is enabled or not.</td>
      <td style="text-align:left"><code>true</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>beagle.cache.endpoint.include</code>
      </td>
      <td style="text-align:left">Endpoints list to be cached. It accepts regular expressions according
        to <code>java.util.regex.Pattern</code> through<code>kotlin.text.Regex</code>.</td>
      <td
      style="text-align:left">
        <p>All (&lt;=1.0.2)</p>
        <p>None (&gt;=1.1.0)</p>
        </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>beagle.cache.endpoint.exclude</code>
      </td>
      <td style="text-align:left">Endpoints list to not be cached. It accepts regular expressions according
        to<code>java.util.regex.Pattern</code>. through <code>kotlin.text.Regex.</code> The
        exclusion is a priority.</td>
      <td style="text-align:left">None</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p><code>beagle.cache.endpoint.ttl</code>
        </p>
        <p>(&gt;=1.1.0)</p>
      </td>
      <td style="text-align:left">
        <p>Key values pair, where the key is an endpoint like a <code>string</code> and
          a value is the duration.</p>
        <p></p>
        <p>The duration is a number following the abbreviated unit (s, m, h, etc)
          to populate the header value<code>Cache-control: max-age</code> to this
          endpoint.</p>
        <p></p>
        <p>The endpoint needs to be included. Included enpoints have a 30s duration
          by default.</p>
        <p>Durations shorter than a second will be zero, by the</p>
        <p><code>Cache-control: max-age </code>definition.</p>
      </td>
      <td style="text-align:left">None</td>
    </tr>
  </tbody>
</table>
{{% /tab %}}

{{% tab name="Web" %}}
On web, the cache is configured when it's defined the initials configurations of Beagle Web on the `strategy` parameter, which is one of `BeagleModule` parametes \(if you're using Angular\) or`createBeagleUIService`\(if you're using React\). 

By default, the cache comes enabled with**`beagle-with-fallback-to-cache`** strategy, however the `beagle-cache-only` strategy can also be used to implement [**Beagle's cache protocol**](../../customization/beagle-para-web/).

{{% alert color="warning" %}}
Remember to set CORS enabled for backend when you want to use cache's strategy for Beagle on Web.
{{% /alert %}}

Below, you can see examples on how to change`beagle-with-fallback-to-cache`, which is default for`beagle-cache-only.`

Example of configuration for **Angula**r:

```text
@BeagleModule({
  baseUrl: 'http://localhost:4200/assets',
  module: {
    path: './beagle-components.module',
    name: 'BeagleComponentsModule',
  },
  components: {
    // Associate every beagle component to your angular component. 
  },
  strategy: 'beagle-cache-only'
})
export class Beagle { }
```

Example of configuration for **React**:

```text
export default createBeagleUIService({
  baseUrl: "",
  components: {},
  strategy: 'beagle-cache-only'
})
```
{{% /tab %}}
{{< /tabs >}}
