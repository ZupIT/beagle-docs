---
title: Network Client
weight: 114
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
 If your application uses Retrofit services, it is possible some conflict may occur, because it internally defines a okhttp dependency and then it will conflict with the HttpClient. 

* Replace this line:

  _implementation 'com.squareup.okhttp3:okhttp:4.5.0'_

* For these two lines:

  _implementation 'com.squareup.retrofit2:retrofit:2.7.2'_

  _implementation 'com.squareup.retrofit2:converter-gson:2.7.2_ 
{{% /alert %}}

### Step 2: Create a class

1. Create a class and choose a name for it. For the example, 

   `ClientCustom` was chosen. If Android complain about imports, just check if the dependencies are not conflicting. 

2. This configuration is long, so copy and paste the class below. You may modify it later.


```kotlin
import br.com.zup.beagle.annotation.BeagleComponent
import br.com.zup.beagle.networking.HttpClient
import br.com.zup.beagle.networking.HttpMethod
import br.com.zup.beagle.networking.RequestCall
import br.com.zup.beagle.networking.RequestData
import br.com.zup.beagle.networking.ResponseData
import okhttp3.Call
import okhttp3.Callback
import okhttp3.Interceptor
import okhttp3.MediaType.Companion.toMediaTypeOrNull
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody
import okhttp3.RequestBody.Companion.toRequestBody
import okhttp3.Response
import java.io.IOException

@BeagleComponent
class ClientCustom : HttpClient {

    override fun execute(
        request: RequestData,
        onSuccess: (responseData: ResponseData) -> Unit,
        onError: (throwable: Throwable) -> Unit
    ): RequestCall {
        val requestBuilder = Request.Builder().url(request.uri.toString())

        addMethod(request, requestBuilder)
        addHeaders(request.headers, requestBuilder)

        val httpClient = OkHttpClient.Builder()

        httpClient.addInterceptor(object : Interceptor {
            override fun intercept(chain: Interceptor.Chain): Response {
                val newRequest = chain.request().newBuilder()
                    .header("KEY", "VALUE")
                    .build()

                return chain.proceed(newRequest)
            }
        })

        val requestCall = httpClient.build().newCall(requestBuilder.build())
        requestCall.enqueue(object: Callback {
            override fun onFailure(call: Call, e: IOException) {
                onError(e)
            }

            override fun onResponse(call: Call, response: Response) {
                if (response.isSuccessful 
                    || response.code == 304) { // Treatment for HttpURLConnection.HTTP_NOT_MODIFIED
                    onSuccess(createResponseData(response))
                } else {
                    onError(IOException("Unexpected error with status code ${response.code}"))
                }
            }
        })

        return object: RequestCall {
            override fun cancel() {
                requestCall.cancel()
            }
        }
    }

    private fun createResponseData(response: Response): ResponseData {
        val body = response.body?.bytes() ?: byteArrayOf()
        val headers = mutableMapOf<String, String>()
        (0 until response.headers.size).forEach {
            val headerName = response.headers.name(it)
            val headerValue = response.headers.value(it)
            headers[headerName] = headerValue
        }
        return ResponseData(response.code, body, headers)
    }

    private fun addHeaders(headers: Map<String, String>, requestBuilder: Request.Builder) {
        headers.forEach {
            requestBuilder.addHeader(it.key, it.value)
        }
    }

    private fun addMethod(requestData: RequestData, requestBuilder: Request.Builder) {
        when (requestData.method) {
            HttpMethod.GET -> requestBuilder.get()
            HttpMethod.POST -> requestBuilder.post(createRequestBody(requestData.body))
            HttpMethod.DELETE -> requestBuilder.delete()
            HttpMethod.PUT -> requestBuilder.put(createRequestBody(requestData.body))
            HttpMethod.PATCH -> requestBuilder.patch(createRequestBody(requestData.body))
            HttpMethod.HEAD -> requestBuilder.head()
        }
    }

    private fun createRequestBody(body: String?): RequestBody {
        val contentType = "application/json; charset=utf-8".toMediaTypeOrNull()
        val bodyValue = body ?: ""
        return bodyValue.toRequestBody(contentType)
    }
}
```
