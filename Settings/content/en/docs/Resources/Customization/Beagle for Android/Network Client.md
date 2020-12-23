---
title: Network Client
weight: 126
description: >-
  You will find here, information about Beagle's network client and how to
  modify it
---

---

## Introduction 

This class defines how the services requests are configured, to use it, you need to create a class that implements a `HttpClient` interface.

You can add headers to your requests, define method request, body response, data response, run cryptography, etc. 

### Creating a `HttpClient` class

To create this class, follow the next steps: 

### Step 1: Add the dependencies 

Locate the file `build.gradle(Module:app) ,` open it and scroll the page until you find the code block  **`dependencies { }`**.

1. Copy and paste the line below inside the dependencies:

   * _implementation 'com.squareup.okhttp3:okhttp:4.5.0'_

   \_\_

2. Press **Sync now** to synchronize the Gradle again. 
3. This dependency is necessary, because the class that implements `HttpClient` will import some of its configuration.

{{% alert color="warning" %}}
 If your application uses **Retrofit** services, it is possible some conflict may occur, because it internally defines a **okhttp** dependency and then it will conflict with the HttpClient. 

* Replace this line:

  _implementation 'com.squareup.okhttp3:okhttp:4.5.0'_

* For these two lines:

  _implementation 'com.squareup.retrofit2:retrofit:2.7.2'_

  _implementation 'com.squareup.retrofit2:converter-gson:2.7.2_ 
{{% /alert %}}

### Step 2: Create a class

1. Create a class and choose a name for it. For the example, `HttpClientDefault` was chosen. 
2. If Android complain about **imports**, just check if the dependencies are not conflicting. 
3. This configuration is long, so copy and paste the class below. You may modify it later.


```kotlin
import br.com.zup.beagle.android.annotation.BeagleComponent
import br.com.zup.beagle.android.exception.BeagleApiException
import br.com.zup.beagle.android.networking.HttpClient
import br.com.zup.beagle.android.networking.HttpMethod
import br.com.zup.beagle.android.networking.RequestCall
import br.com.zup.beagle.android.networking.RequestData
import br.com.zup.beagle.android.networking.ResponseData
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Job
import kotlinx.coroutines.cancel
import kotlinx.coroutines.launch
import java.io.EOFException
import java.net.HttpURLConnection

typealias OnSuccess = (responseData: ResponseData) -> Unit
typealias OnError = (responseData: ResponseData) -> Unit

@BeagleComponent
class HttpClientDefault : HttpClient, CoroutineScope {

    private val job = Job()
    override val coroutineContext = job + CoroutineDispatchers.IO

    override fun execute(
        request: RequestData,
        onSuccess: OnSuccess,
        onError: OnError
    ): RequestCall {
        if (getOrDeleteOrHeadHasData(request)) {
            onError(ResponseData(-1, data = byteArrayOf()))
            return createRequestCall()
        }

        launch {
            try {
                val responseData = doHttpRequest(request)
                onSuccess(responseData)
            } catch (ex: BeagleApiException) {
                onError(ex.responseData)
            }
        }

        return createRequestCall()
    }

    private fun getOrDeleteOrHeadHasData(request: RequestData): Boolean {
        return (request.method == HttpMethod.GET ||
            request.method == HttpMethod.DELETE ||
            request.method == HttpMethod.HEAD) &&
            request.body != null
    }

    @Throws(BeagleApiException::class)
    private fun doHttpRequest(
        request: RequestData
    ): ResponseData {
        val urlConnection: HttpURLConnection

        try {
            urlConnection = request.uri.toURL().openConnection() as HttpURLConnection
        } catch (e: Exception) {
            throw BeagleApiException(ResponseData(-1, data = byteArrayOf()), request)
        }

        request.headers.forEach {
            urlConnection.setRequestProperty(it.key, it.value)
        }

        addRequestMethod(urlConnection, request.method)

        if (request.body != null) {
            setRequestBody(urlConnection, request)
        }

        try {
            return createResponseData(urlConnection)
        } catch (e: Exception) {
            throw tryFormatException(urlConnection, request)
        } finally {
            urlConnection.disconnect()
        }
    }

    private fun tryFormatException(urlConnection: HttpURLConnection, request: RequestData): BeagleApiException {
        val response = urlConnection.getSafeError() ?: byteArrayOf()
        val statusCode = urlConnection.getSafeResponseCode()
        val statusText = urlConnection.getSafeResponseMessage()
        val responseData = ResponseData(statusCode = statusCode,
            data = response, statusText = statusText)

        return BeagleApiException(responseData, request)
    }

    private fun addRequestMethod(urlConnection: HttpURLConnection, method: HttpMethod) {
        val methodValue = method.toString()

        if (method == HttpMethod.PATCH || method == HttpMethod.HEAD) {
            urlConnection.setRequestProperty("X-HTTP-Method-Override", methodValue)
            urlConnection.requestMethod = "POST"
        } else {
            urlConnection.requestMethod = methodValue
        }
    }

    private fun setRequestBody(urlConnection: HttpURLConnection, request: RequestData) {
        urlConnection.setRequestProperty("Content-Length", request.body?.length.toString())
        try {
            urlConnection.outputStream.write(request.body?.toByteArray())
        } catch (e: Exception) {
            throw BeagleApiException(ResponseData(-1, data = byteArrayOf()), request)
        }
    }

    private fun createResponseData(urlConnection: HttpURLConnection): ResponseData {
        return ResponseData(
            statusCode = urlConnection.responseCode,
            statusText = urlConnection.responseMessage,
            headers = urlConnection.headerFields.filter { it.key != null }.map {
                val headerValue = it.value.toString()
                    .replace("[", "")
                    .replace("]", "")
                it.key to headerValue
            }.toMap(),
            data = try {
                urlConnection.inputStream.readBytes()
            } catch (e: EOFException) {
                byteArrayOf()
            }
        )
    }

    private fun createRequestCall() = object : RequestCall {
        override fun cancel() {
            this@HttpClientDefault.cancel()
        }
    }
}
```
