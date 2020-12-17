---
title: Camada de rede
weight: 113
description: >-
  Nesta seção, você encontra informações sobre a camada de rede do Beagle e como
  modificá-la.
---

---

## Introdução

A interface HTTPClient define como as solicitações de serviços são configuradas. Para usá-la, você precisa criar uma classe que implemente uma interface do tipo `HttpClient`.

Aqui, você pode adicionar cabeçalhos às suas requisições, definir os métodos request, body response,  data response, executar criptografia, etc.

```kotlin 
interface HttpClient {

    fun execute(
        request: RequestData,
        onSuccess: (responseData: ResponseData) -> Unit,
        onError: (responseData: ResponseData) -> Unit
    ): RequestCall
}
```

No método *execute*, você consegue criar as regras de sua camada de rede, fazendo com que e o beagle reconheça a sua regra.

| **Atributo** | **Tipo** | **Definição** |
| :--- | :--- | :---: | :--- |
| request | RequestData  | RequestData é a classe para fazer configuração solicitações http. |
| onSuccess | (responseData: ResponseData) -> Unit | Higher-Order Functions responsavel pelo retorno de sucesso |
| onError | (responseData: ResponseData) -> Unit | Higher-Order Functions responsavel pelo retorno de erro |


## Criando uma camada de rede customizada

To create a custom network layer, follow an example below with the following steps:

### Passo 1: Adicionar as dependências

Localize o arquivo `build.gradle(Module:app) ,` abra-o e role a página para baixo até encontrar o bloco de código **`dependencies { }`**.

1. Copie e cole a linha abaixo dentro das dependências:

   * implementation 'org.jetbrains.kotlinx:kotlinx-coroutines-android:1.3.9'  

2. Aperte **Sync now** para sincronizar o Gradle novamente. 

Essa dependência é necessária, pois a classe que implementa `HttpClient` vai importar algumas configurações dela.

### Passo 2: Criar a object CoroutineDispatchers

Crie um object e escolha o nome que você desejar. Nesse exemplo, foi dado o nome de `CoroutineDispatchers`. 

Esse object é responsavel por configurar os *CoroutineDispatchers*, que vai ditar em qual thread as tarefas será executado.

```kotlin
import kotlinx.coroutines.CoroutineDispatcher
import kotlinx.coroutines.Dispatchers

internal object CoroutineDispatchers {

    init {
        reset()
    }

    lateinit var IO: CoroutineDispatcher
    lateinit var Main: CoroutineDispatcher
    lateinit var Default: CoroutineDispatcher

    fun reset() {
        IO = Dispatchers.IO
        Main = Dispatchers.Main
        Default = Dispatchers.Default
    }
}
```

### Passo 3: Criar a um arquivo HttpURLConnectionExtensions

Crie um arquivo e escolha o nome que você desejar. Nesse exemplo, foi dado o nome de `HttpURLConnectionExtensions`.  

Esse arquivo é responsavel por conter métodos para retorno da regra do *HttpURLConnection*, assim usaremos esses métodos na classe HttpClientDefault.

```kotlin
import java.lang.Exception
import java.net.HttpURLConnection

internal fun HttpURLConnection.getSafeResponseCode(): Int? {
    return getMessageFormatted { this.responseCode }
}

internal fun HttpURLConnection.getSafeResponseMessage(): String? {
    return getMessageFormatted { this.responseMessage }
}

internal fun HttpURLConnection.getSafeError(): ByteArray? {
    return getMessageFormatted { this.errorStream.readBytes() }
}

internal typealias GetData<T> = () -> T

internal fun <T> getMessageFormatted(getData: GetData<T>): T? {
    return try {
        getData.invoke()
    } catch (exception: Exception) {
        null
    }
}
```

### Passo 4: Criar a classe HttpClientDefault

Crie a classe e escolha o nome que você desejar. Nesse exemplo, foi dado o nome de `HttpClientDefault`.  

A classe HTTPClientDefault define como as solicitações de serviços são configuradas. Para usá-la, você precisa criar uma classe que implemente uma interface do tipo `HttpClient`.

Essa configuração é bem extensa, a sugestão é que você copie e cole a classe abaixo e modifique como achar necessário: 


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
import kotlin.jvm.Throws

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
