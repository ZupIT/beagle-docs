---
title: View client
weight: 109
description: >-
  In this section, you will find information on how to setup a ViewClient in Beagle Android.
---

---

# Introduction
Similar to the HttpClient, but more specific. While the HttpClient is responsible for managing every request (views, json data, images, etc), the ViewClient is only responsible for fetching views, i.e. server driven pages.
The ViewClient interface has to functions `fetch` and `prefetch`.

The default implementation of `fetch` does two things:
1. search for a response data in a local cache, if exists, remove it from cache and return;
2. if there is no response data in cache, it calls HttpClient and make the request for the ResponseData.

The default implementation of `prefech` does two:
1. search for a response data in a local cache, and return it if exists;
2. if there is no response data in cache, it calls HttpClient and make the request for the ResponseData and store it in cache (memory).

Note that `fetch` just search for responses that may have been prefetched earlier, and `prefetch` just store responses. It does nothing other than this, and this might be enough for most applications. But some applications may need extra behavior when fetching views, and this is the place where it should be implemented.

# Creating a new ViewClient

A good example is caching. Let's say we want to locally store a response so when Beagle calls `viewClient.fetch` again, it returns the cached result instead of calling the HttpClient. To do this, we can create a new ViewClient class that implement ViewClient, has storage and is annotated with `@BeagleComponent` as follows:

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

Above we implemented a very simple logic to `fetch` and `prefetch` that will store every fetch result in memory using a MutableMap `cachedResponses` using the request url as key, and search for a ResponseData in it every time `fetch` or `prefetch` its called. This is a very dumb implementation, because this cache would never expire, but the objective here is just to show how such feature could be implemented using the ViewClient.