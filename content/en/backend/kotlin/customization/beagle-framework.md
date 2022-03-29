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
To do this, follow the instructions:

- Register `BeagleModule` in your `ObjectMapper`:

```kotlin
val mapper = // however your ObjectMapper is initialized
mapper.registerModule(BeagleModule)
```

### Step 3: Configure the platform's specification mechanism

You have to configure a filter if you want the element's platform filter to work. You should register a filter that verifies your BFF's response and filters the sent elements according to the specified platform on your customized `beagle-platform` header.

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

In the example above, `preHandle` passed the information from the platform and the request was made as an attribute so that it can be accessed by the BFF later. This will make the platform's identification easier. There is also a `postHandle` that filters the elements according to the targeted platform in your BFF's response.
