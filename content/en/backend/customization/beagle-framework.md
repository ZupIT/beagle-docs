---
title: Beagle Framework
weight: 195
description: Here you'll understand how to use this framework.
---

---

This section explains how to create a backend without using frameworks such as Spring or Micronaut. You will find the tools to create a BFF for your project.

It's important to mention: 
- Beagle was created to be independent, you don't need a specific backend structure.
- `starters` of the initial configuration already does all the processes described on this page and automatically add the configuration below:

{{% alert color="danger" %}}
The initial configuration customization does not apply to this module.
{{% /alert %}}

Follow the next steps to configure your BFF manually:

### Step 1: Add dependencies

```markup
<dependency>
	<groupId>br.com.zup.beagle</groupId>
	<artifactId>framework</artifactId>
	<version>${beagle_version}</version>
</dependency>
```

### Step 2: Configure the Jackson's `ObjectMapper`

It is necessary to set up Jackson's `ObjectMapper` for Beagle. 
There are two ways to do this:

1. You can register `BeagleModule` in your `ObjectMapper`:

```kotlin
val mapper = // however your ObjectMapper is initialized
mapper.registerModule(BeagleModule)

### Step 3: Configure the `BeagleCacheHandler`

In order to use the cache mechanism, Beagle offers a class called `BeagleCacheHandler` and an interface `RestCacheHandler`. You should use them as a response filter in your project.

`BeagleCacheHandler` class contains an implementation template of the protocol. It doesn't depend on the HTTP and REST structure and uses a `handleCache` method. However, it needs to interact with the HTTP response details and after that, the `RestCacheHandler` is used.

#### Using the `javax.servlet`

See below a demostration of this class, it was implemented using a `javax.servlet` class.

- A `javax.servlet.Filter` filter was created. It applies to the cache protocol for every response given by the backend.
- To focus on the cache managers, the `javax.servlet.HttpServletResponse` was left out, this omission is addressed in the codes with comments.

### Step 4: Implement the `RestCacheHandler`

You have to implement a `RestCacheHandler` interface with four transformations that a manipulator needs to run in your response object. It is generic and it must be specified for what kind of response is used in your HTTP structure. Your methods must behave like described below:

| Method                            | Behaviour                                                                                                   |
| :-------------------------------- | :---------------------------------------------------------------------------------------------------------- |
| `addHashHeader(response, header)` | Returns a response with a`header` adding their `headers` to the `BeagleCacheHandler.CACHE_HEADER` key       |
| `addStatus(response, status)`     | Returns a response with a status                                                                            |
| `callController(response)`        | Returns a response resulting from the calling of the controller _\(generally following the filter chain\)._ |
| `getBody(response)`               | Returns a body of the response with a `String`                                                              |

```kotlin
class MyCacheHandler(
    private val request: HttpServletRequest,
    private val chain: FilterChain
) : RestCacheHandler<HttpServletResponse> {
    override fun addHashHeader(
        response: HttpServletResponse,
        header: String
    ): HttpServletResponse {
        response.setHeader(BeagleCacheHandler.CACHE_HEADER, header)
        return response
    }

    override fun addStatus(
        response: HttpServletResponse,
        status: Int
    ): HttpServletResponse {
        response.status = status
        return response
    }

    override fun callController(response: HttpServletResponse): HttpServletResponse {
        this.chain.doFilter(this.request, response)
        return response
    }

    // There is no direct way to access an HttpServletResponse's content,
    // this is only to demonstrate the idea
    override fun getBody(response: HttpServletResponse) = response.content
}
```

### Step 5: Create a `Filter` that uses the `BeagleCacheHandler`

Now, you need to create an `BeagleCacheHandler` instance and call the `handleCache method` for it. This instance can accept a string list that represents a regex's endpoint to not be stored in cache.

They must be a valid `java.util.regex.Pattern`. The handleCache parameters are described below. This filter returns a transformed response:

| Parameter          | Description                                                         |
| :----------------- | :------------------------------------------------------------------ |
| `endpoint`         | endpoint requested.                                                 |
| `receivedHash`     | `BeagleCacheHandler.CACHE_HEADER` value that came with the request. |
| `initialResponse`  | A type of response to be transformed.                               |
| `restCacheHandler` | your implementation instance of the `RestCacheHandler`.             |

```kotlin
class MyFilter : Filter {
    private val beagleCacheHandler = BeagleCacheHandler()

    override fun doFilter(
        request: ServletRequest?,
        response: ServletResponse?,
        chain: FilterChain?
    ) {
        if (request is HttpServletRequest
        && response is HttpServletResponse
        && chain != null) {
            this.beagleCacheHandler.handleCache(
                request.requestURI,
                request.getHeader(BeagleCacheHandler.CACHE_HEADER),
                response,
                MyCacheHandler(request, chain)
            )
        }
    }
}
```

### Step 6: Configure the platform's specification mechanism

In order to have the element's platform filter working, it is necessary to configure a filter. It is recommended to register a filter that verifies your BFF's response and filters the sent elements according to the specified platform on your customized `beagle-platform` header.

The `BeaglePlatformUtil` class was created to provide some tools to make the configuration easier to be used in your filter. See below:

| Constant                 | Description                                                                               |
| :----------------------- | :---------------------------------------------------------------------------------------- |
| `BEAGLE_PLATFORM_HEADER` | Name of the header field used by Beagle to verify which platform BFF is interacting with. |

| Method                                           | Description                                                                                                                             |
| :----------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| `treatBeaglePlatform(currentPlatform, jsonNode)` | Returns a JsonNode as a parameter jsonNode with elements that the platform does not correspond to the parameter currentPlatform removed |

An example of a Spring interceptor:

```kotlin
class BeaglePlatformInterceptor(private val objectMapper: ObjectMapper) : HandlerInterceptor {

    override fun preHandle(request: HttpServletRequest, response: HttpServletResponse, handler: Any): Boolean {
        request.setAttribute(
            BeaglePlatformUtil.BEAGLE_PLATFORM_HEADER,
            request.getHeader(BeaglePlatformUtil.BEAGLE_PLATFORM_HEADER)
        )
        return true
    }

    override fun postHandle(
        request: HttpServletRequest,
        response: HttpServletResponse,
        handler: Any,
        modelAndView: ModelAndView?
    ) {
        val responseWrapper = (response as ContentCachingResponseWrapper)
        val jsonTree = this.objectMapper.readTree(responseWrapper.contentAsByteArray)
        BeaglePlatformUtil.treatBeaglePlatform(
            request.getHeader(BeaglePlatformUtil.BEAGLE_PLATFORM_HEADER),
            jsonTree
        )
        val jsonData = jsonTree.toPrettyString()
        responseWrapper.resetBuffer()
        responseWrapper.outputStream.write(jsonData.toByteArray())
        responseWrapper.setContentLength(jsonData.length)
    }
}
```

The example above, `preHandle` passed the information from the platform the request was made as an attribute, so that it can be accessed after by BFF and then it will make the platform's identification easier. We also have `postHandle` that filters the elements according to the targeted platform in your BFF's response.
