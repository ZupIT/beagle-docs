---
title: View client
weight: 109
description: >-
  In this section, you will find information on how to setup a ViewClient in Beagle Android.
---

---

## What is it?

The `View Client` is very similar to the HttpClient. While the HttpClient is responsible for handling requests (views, json data, images, etc), the ``ViewClient`` is only responsible for fetching views (Server Driven Views).

The ViewClient interface has two functions **`fetch`** and **`prefetch`**.

The **`fetch`** default implementation has 2 functionalities:

1. It searches for a response data in a local cache, and if a cache exists, this function removes it from cache and return its contents;
2. If there is no response data in cache, this function calls the `HttpClient` and makes a request which returns a ResponseData.

The **`prefetch`** default implementation has 2 functionalities:

1. It searches for a response data in a local cache, and it returns this cache if it exists;
2. If there is no response data in cache, this function calls the `HttpClient` and make the request for a ResponseData and store it in cache (memory).

{{% alert color="success" %}}
Please note that `fetch` just search for responses that may have been *prefetched* earlier, and `prefetch` just store responses. It just do this, and that is enough for most applications. But some other applications may need an extra behavior when fetching views, and this is when a customized ViewClient must be made.
{{% /alert %}}

## Creating a new ViewClient

A good example is caching. Let's say we want to locally store a view in a way that when Beagle calls `viewClient.fetch` again, it returns the cached result, instead of calling the HttpClient.

To do this, we can create a ``**MyViewClient**`` class that implements ``ViewClient``, has a storage and is annotated with `@BeagleComponent` as follows:

```kotlin
@BeagleComponent
class MyViewClient(
    private val httpClient: HttpClient? = BeagleEnvironment.beagleSdk.httpClientFactory?.create(),
    private val cachedResponses: MutableMap<String, ResponseData> = mutableMapOf()
) : ViewClient {

    override fun fetch(requestData: RequestData, onSuccess: OnSuccess, onError: OnError): RequestCall? {
        val cachedResponse = cachedResponses[requestData.url]
        return if (cachedResponse != null) {
            onSuccess(cachedResponse)
            null
        } else {
            requestData.doRequest(httpClient, onSuccess = { response ->
                onSuccess(response)
                cachedResponses[requestData.url] = response
            }, onError)
        }
    }

    override fun prefetch(requestData: RequestData, onSuccess: OnSuccess, onError: OnError): RequestCall? {
        val cachedResponse = cachedResponses[requestData.url]
        return if (cachedResponse != null) {
            onSuccess(cachedResponse)
            null
        } else {
            requestData.doRequest(httpClient, onSuccess = { response ->
                onSuccess(response)
                cachedResponses[requestData.url] = response
            }, onError)
        }
    }

    companion object {
        internal val instance = MyViewClient()
    }
}

```

Above we have implemented a logic to `fetch` and `prefetch` that will store every fetch result in memory using a MutableMap called `cachedResponses`. It uses the *request url* as key, and search for a ``ResponseData`` in it every time `fetch` or `prefetch` is called. This is a simple implementation, since this cache would never expire, and the objective here is to show how this feature could be implemented using the ViewClient.
