---
title: Camada de rede
weight: 113
description: >-
  Nesta seção, você encontra informações sobre a camada de rede do Beagle e como
  modificá-la.
---

---

## Introdução

A classe HTTPClient define como as solicitações de serviços são configuradas. Para usá-la, você precisa criar uma classe que implemente uma interface do tipo `HttpClient`. 

Aqui, você pode adicionar cabeçalhos às suas requisições, definir os métodos request, body response,  data response, executar criptografia, etc. 

### Criando a classe HttpClient

Para criar essa classe, siga os seguintes passos:

### Passo 1: Adicionar as dependências

Localize o arquivo `build.gradle(Module:app) ,` abra-o e role a página para baixo até encontrar o bloco de código **`dependencies { }`**.

1. Copie e cole a linha abaixo dentro das dependências:

   * _implementation 'com.squareup.okhttp3:okhttp:4.5.0'_

   \_\_

2. Aperte **Sync now** para sincronizar o Gradle novamente. 
3. Essa dependência é necessária, pois a classe que implementa `HttpClient` vai importar algumas configurações dela.

{% hint style="warning" %}
Se a sua aplicação utilizar serviços do tipo **Retrofit** é possível que aconteça algum conflito, porque esse serviço define a dependência **okhttp** internamente e com isso ela irá conflitar com a dependência do HttpClient. 

* Substitua a linha:

  _implementation 'com.squareup.okhttp3:okhttp:4.5.0'_

* Por essas duas outras linhas:

  _implementation 'com.squareup.retrofit2:retrofit:2.7.2'_

  _implementation 'com.squareup.retrofit2:converter-gson:2.7.2_ 
{% endhint %}

### Passo 2: Criar a classe

1. Crie a classe e escolha o nome que você desejar. Nesse exemplo, foi dado o nome de `ClientCustom`. Se o Android reclamar dos **imports**, é só checar  se as dependências não estão conflitantes.
2. Essa configuração é bem extensa, a sugestão é que você copie e cole a classe abaixo e modifique como achar necessário: 

{% code title="ClientCustom.kt" %}
```kotlin
import br.com.zup.beagle.android.annotation.BeagleComponent
import br.com.zup.beagle.android.networking.HttpClient
import br.com.zup.beagle.android.networking.HttpMethod
import br.com.zup.beagle.android.networking.RequestCall
import br.com.zup.beagle.android.networking.RequestData
import br.com.zup.beagle.android.networking.ResponseData
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
        onError: (responseData: ResponseData) -> Unit
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
                onError(createEmptyResponseData())
            }

            override fun onResponse(call: Call, response: Response) {
                if (response.isSuccessful 
                    || response.code == 304) { // Treatment for HttpURLConnection.HTTP_NOT_MODIFIED
                    onSuccess(createResponseData(response))
                } else {
                    onError(createResponseData(response))
                }
            }
        })

        return object: RequestCall {
            override fun cancel() {
                requestCall.cancel()
            }
        }
    }
    
    private fun createEmptyResponseData(): ResponseData {
        return ResponseData(statusCode = 0, data = byteArrayOf(), headers = mapOf())
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
{% endcode %}
