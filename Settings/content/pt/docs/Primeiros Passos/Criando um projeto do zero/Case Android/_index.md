---
title: Case Android
weight: 33
description: >-
  Nesta seção, você encontra um passo a passo para iniciar um projeto Android
  com Beagle.
---

---

## Iniciando um projeto Android

Para este exemplo prático, utilizaremos o Android Studio IDE. Caso você ainda não o tenha instalado, basta acessar no [**site oficial do Android** ](https://developer.android.com/studio?hl=us-en)e seguir as instruções.   
  
Depois de ter instalado o programa, siga os passos abaixo:

**Passo 1:** Abra o Android Studio e clique em **Start a new Android Studio project**_._ 

![](https://lh4.googleusercontent.com/bAhbvEZUN_pBXavMOqCvkt2Z4NlYsxXXtmeGRKEUnyGfuIm7c-mskMhmmiMbSaCw_xonW8vceVI2C27q08-k5tV8EDD5ymvoaPwDDFGe_fN3bmoqCQEoAAKASKXOTiI3KUPI1GQ1)

**Passo 2:** Selecione a opção **Empty Activity** e clique em **next**. 

![](https://lh5.googleusercontent.com/nT0zkr0W_Ark0ZZDR2eWtCtfnjC_Fm98VSwU3DgBQzcgh_DoqkYNvhINztNL460p0U2hnygJ5K_DhrZMZis0mqHD69QJgKimruICs4MnBnPO9m-m_2T6E1nWIXiOfaIe0iiCjIN3)

   **Passo 3️:** Nesta página, devemos listar algumas informações importantes:

* Informe o nome do seu projeto. Neste exemplo, chamaremos de `BeagleApp`.
* Selecione qual linguagem utilizará. Para o Beagle, devemos utilizar o`Kotlin`.
* Selecione o **SDK mínimo 19**, já que qualquer SDK menor que este não será compatível. 
* Defina o **package** e a **Save location** de acordo com sua preferência. 
* Clique em **Next**.

![](https://lh3.googleusercontent.com/m5jnbs4K5AdwQbA7YVn7fSgtVzw5S68yCbGTj_7-CYa9CGvMR-qFO5EQ4SaNehXYRmI4WOOnqA6JQouzW2QC0YMTpBq7kJSbi54yl0Q2emL_y2FizY3LyloLjuh_uDyf8WyVbodP)

**Passo 4️:** Feitas as configurações anteriores, o Android levará um tempo pra construir o projeto porque estará sincronizando todas as dependências inicias para inicializar o projeto

Quando a inicialização for concluída, você verá esta página: 

![](/mainactivity.png)

{{% alert color="success" %}}
Parabéns, seu projeto foi criado no Android! Agora, você precisará configurar o Beagle, de acordo com os passos a seguir. 
{{% /alert %}}

## Configurando o Beagle

### **Passo 1:** Definir as dependências

Para começar, você precisa configurar as dependências do Beagle no seu repositório. Isso pode ser feito utilizando as configurações abaixo e fazendo o download da biblioteca do Beagle. 

* Abra o seu projeto no Android Studio.  
* Localize o arquivo `Graddle scripts` no projeto. 
* Nele existem dois arquivos do com o nome `gradle`. Abra o primeiro cujo nome é `build.graddle(project:Beagle)`
* Procure o bloco de código  `allprojects` e configure as credenciais do `Maven` como listadas abaixo.


```go
// Add it in your root build.gradle at the end of repositories:
allprojects {
    repositories {
        google()
        jcenter()
        // < 1.1.0
        maven {
            url 'https://dl.bintray.com/zupit/repo'
        }
        // >= 1.1.0
        mavenCentral()
    }
}
        
```


* Feche o arquivo `build.graddle(project:Beagle)`

Feito isso, devemos incluir o `kapt plugin` e o `Beagle` como dependências no `dependency manager`. Para isso, siga estas instruções:

* Abra o arquivo `build.graddle(Module:app)`

Perceba que alguns `plugins` já estão listados no começo desse arquivo como mostrado na figura abaixo

* Em seguida, adicione a linha_`apply plugin: 'kotlin-kapt'`_ 

![](/implementacaogradle.png)

Depois disso, você precisa adicionar algumas dependências. Para isso: 

* Procure neste arquivo que está mexendo o bloco de código `dependencies { }`:
* Adicione a variável `ext.beagle_version` logo acima \(no caso, fora\) do escopo das dependências
  * Versão atual do Beagle[![Maven Central](https://img.shields.io/maven-central/v/br.com.zup.beagle/android)](https://oss.sonatype.org/#nexus-search;gav~br.com.zup.beagle~android~~~~kw,versionexpand)

Copie e cole as linhas abaixo dentro das dependências :

* _implementation "br.com.zup.beagle:android:$beagle\_version"_ 
* _kapt "br.com.zup.beagle:android-processor:$beagle\_version"_


```go
// Add in your app level dependency
ext.beagle_version = "${beagle_version}"
 
dependencies {
    implementation "br.com.zup.beagle:android:$beagle_version"
    kapt "br.com.zup.beagle:android-processor:$beagle_version"
}
```


{{% alert color="info" %}}
Insira a versão de release do Beagle no lugar de `${beagle.version}`, ou seja, coloque a versão do Beagle destacada em azul da badge acima, mas sem o **caracter v** que antecede os números de versão.

Por exemplo: undefined-`ext.beagle.version = "0.2.8"`
{{% /alert %}}

Ao final destas configurações, o seu arquivo deverá estar assim:

![](/implementacaogradle2.png)

### 

### Passo 2: Configurar o Android Manifest

O próximo passo é atualizar o seu projeto no Android Manifest adicionando algumas linhas a este arquivo:

1. A permissão de INTERNET para que sua aplicação seja capaz de acessar a internet. `<uses-permission android:name="android.permission.INTERNET" />`

{{% alert color="info" %}}
Se você tiver dificuldade para encontrar este ou qualquer arquivo, basta usar a ferramenta de busca do Android Studio. 

Para habilitá-la, aperte o botão**`SHIFT`**do seu teclado duas vezes e a interface de busca aparecerá . Feito isso, é só digitar `AndroidManifest` e o Android Studio o localizará. 
{{% /alert %}}


```markup
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.beagleexamples">

    <uses-permission android:name="android.permission.INTERNET" />

    <application
        ...
        android:usesCleartextTraffic="true"
        ...
```


Uma dica é deixar este arquivo aberto porque vamos usá-lo de novo em outro momento.

{{% alert color="warning" %}}
* O**`usesCleartextTraffic:`** indica que o aplicativo pretende usar o tráfego de rede de texto não criptografado, HTTP. O valor padrão para aplicativos que visam o nível de API 27 ou inferior é **`true`**. Os aplicativos que têm como alvo o nível de API 28 ou superior são padronizados como **`false`**. 
* O atributo **`android: usesCleartextTraffic = "true"`** dentro da `tag`  **`<application>`** é usado para se comunicar com o BFF local.  Se você pretende `depurar` o projeto usando um BFF local, você pode usar essa configuração como uma etapa de configuração rápida.
* No entanto, se você planeja transformar este exemplo em um aplicativo para `release`, recomendamos que você use o `networkSecurityConfig`, que você pode configurar usando as instruções na [**página de desenvolvedores do Android**](https://developer.android.com/training/articles/security-config).
{{% /alert %}}

### Passo 3: Criar o AppBeagleConfig

Em um próximo passos, você deve criar uma classe chamada `AppBeagleConfig`. Ela faz parte das configurações iniciais do Beagle e é nela que vamos registrar algumas configurações importantes. 

Ao criá-la, devemos garantir que ela esteja configurada da seguinte forma: 

* Anotada com o `@BeagleComponent` 
* E deve `estender (extend)` da classe`BeagleConfig` 

Para criar o AppBeagleConfig, siga estes passos: 

1. Primeiro vamos criar o pacote que conterá nossos arquivos de configuração.  
2. Clique com botão direito do mouse no pacote principal do seu projeto e click em **new &gt; package** __conforme a figura abaixo: 

![](/newpackage.png)

Embora você possa nomeá-lo como preferir, sugerimos que para este tutorial você use o nome`beagle`

    3. Clique com o botão direito do mouse no pacote beagle e clique em **new&gt;Kotlin File/Class**

   __4. __Nomeie como `AppBeagleConfig` e pressione **`ENTER`**

   5. Copie e cole as configurações abaixo no arquivo `AppBeagleConfig` que acabou de criar. Perceba que ele implementará os atributos: `baseUrl, environment, isLoggingEnabled, cache.`

* O **`baseUrl`** retorna a URL base do seu ambiente.
* O **`environment`** retorna o _`current build state`_ da sua aplicação.
* O **`isLoggingEnabled`** retorna a visualização de log da aplicação.
* O **`cache`** configuração de gerenciamento de cache.


```kotlin
import br.com.zup.beagle.android.annotation.BeagleComponent
import br.com.zup.beagle.android.setup.BeagleConfig
import br.com.zup.beagle.android.setup.Cache
import br.com.zup.beagle.android.setup.Environment

@BeagleComponent
class AppBeagleConfig : BeagleConfig {
    override val baseUrl: String get() = "http://10.0.2.2:8080" // return the base url based on your environment
    override val environment: Environment get() = Environment.DEBUG // return the current build state of your app
    override val isLoggingEnabled: Boolean = true
    override val cache: Cache get() = Cache(
        enabled = true, // If true, we will cache data on disk and memory.
        maxAge = 300, // Time in seconds that memory cache will live.
        memoryMaximumCapacity = 15 // Memory LRU cache size. It represents number of screens that will be in memory.
    ) // Cache management configuration
}
```


{{% alert color="info" %}}
A partir deste ponto do tutorial, iremos testar nossas telas Server-Driven usando o local host. Por isso, é importante que nossa**`baseURL`** seja o seu local host.

Outro ponto de atenção é que, neste momento, o Beagle espera que classes anotadas com  `@BeagleComponent` tenham seus construtores vazios.
{{% /alert %}}

### **Passo 4: BeagleActivity**

O Beagle fornece uma `Activity` default para gerenciar as `Activities` geradas via server-driven. Porém você pode criar uma ou mais`Activities` que herdem de `BeagleActivity` com `@BeagleComponent` personalizadas de acordo com os fluxos server-driven da sua aplicação. 

{{% alert color="info" %}}
Você pode criar o BeagleActivity agora, mas neste momento é possível prosseguir com os próximos passos sem configurá-la. Para saber mais, confira a seção sobre [**Beagle Activity Customizada**](/pt/docs/recursos/customização/beagle-para-android/beagle-activity-customizada).
{{% /alert %}}

### **Passo 5: Criando uma camada de rede**

O Beagle não disponibiliza uma camada de rede, então é precisar configurar nos primeiros passos, `HttpClient` e uma interface que define como as requisições de serviços são configuradas, para usá-lo, você precisa criar uma classe que implemente uma interface `HttpClient` .

Aqui, você pode adicionar cabeçalhos às suas requisições, definir os métodos request, body response,  data response, executar criptografia, etc.

Segue abaixo um tutorial de camada de rede, utilizando a biblioteca coroutines.

#### Adicionar as dependências

Localize o arquivo `build.gradle(Module:app) ,` abra-o e role a página para baixo até encontrar o bloco de código **`dependencies { }`**.

1. Copie e cole a linha abaixo dentro das dependências:

   * implementation 'org.jetbrains.kotlinx:kotlinx-coroutines-android:1.3.9'  

2. Aperte **Sync now** para sincronizar o Gradle novamente. 

Essa dependência é necessária, pois a classe que implementa `HttpClient` vai importar algumas configurações dela.

#### Criar a object CoroutineDispatchers

Crie um objeto e escolha um nome para ele, por exemplo CoroutineDispatchers 

Esse object é responsável por configurar os CoroutineDispatchers, que irá ditar em qual thread as tarefas serão executadas

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

#### Criar um arquivo HttpURLConnectionExtensions

Crie um arquivo e escolha o nome que você desejar. Nesse exemplo, foi dado o nome de `HttpURLConnectionExtensions`.  

Este arquivo é responsável por conter métodos para retornar a regra * HttpURLConnection * , portanto, usaremos esses métodos na classe HttpClientDefault.

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

#### Criar a classe HttpClientDefault

A classe HTTPClientDefault define como as solicitações de serviços são configuradas.

Crie uma classe e escolha um nome para ela. Para o exemplo, `HttpClientDefault` foi escolhido. Após a criação da classe coloque a anotação `@BeagleComponent` e implemente com **Interface** `HttpClient`.

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

### Passo 6: Configuração de cache

O Beagle não disponibiliza uma configuração de cache, então é precisar configurar nos primeiros passos, a interface `StoreHandler` define um protocolo que permite personalizar a forma como o cache é manipulado no banco de dados e na memória.

Para usá-lo, você precisa criar uma classe que implemente uma interface `StoreHandler` .

Segue abaixo um tutorial de como fazer configuração do cache, utilizando a biblioteca coroutines.

#### Criar o object MemoryLocalStore

É necessário você criar duas classes que implementem a interface `LocalStore`: a MemoryLocalStore e a DatabaseLocalStore. 

Com essas interfaces, você pode mapear as ações de salvar, restaurar, deletar e selecionar tudo, como mostra o exemplo abaixo:


```kotlin
internal object MemoryLocalStore : LocalStore {

    private val cache = mutableMapOf<String, String>()

    override fun save(key: String, value: String) {
        cache[key] = value
    }

    override fun restore(key: String): String? {
        return cache[key]
    }

    override fun delete(key: String) {
        cache.remove(key)
    }

    override fun getAll(): Map<String, String> {
        return cache.toMap()
    }
}
```

#### Criar a classe DatabaseLocalStore

Agora, você deve criar uma segunda classe que, para isso, depende da criação do StoreHandler, que é a DatabaseLocalStore. Esse é o mesmo arquivo declarado com algumas classes adjacentes que servem para a classe DatabaseLocalStore, mas que poderiam estar em arquivos diferentes, se você quiser. 

Veja como funciona no exemplo a seguir:

O arquivo abaixo possui as configurações para o SQL Lite e também as definições de como as ações de manipulação de cache funcionarão, no caso da persistência do cache no banco de dados.

No atributo database da classe DatabaseLocalStore, a classe BeagleDatabaseManager é passada, chamando o método getDatabase e dentro do parâmetro você deve passar o contexto do aplicativo.

Siga o exemplo no atributo da classe DatabaseLocalStore abaixo:


```kotlin
internal object ScreenEntry : BaseColumns {
    const val TABLE_NAME = "KeyValueCache"
    const val KEY_COLUMN_NAME = "key"
    const val VALUE_COLUMN_NAME = "value"
}

internal class DatabaseLocalStore(
    private val contentValuesFactory: ContentValuesFactory = ContentValuesFactory(),
    private val database: SQLiteDatabase = BeagleDatabaseManager.getDatabase(
        BeagleUiSampleApplication.instance)
) : LocalStore {

    override fun save(key: String, value: String) {
        val values = contentValuesFactory.make().apply {
            put(ScreenEntry.KEY_COLUMN_NAME, key)
            put(ScreenEntry.VALUE_COLUMN_NAME, value)
        }


        val newRowId = database.insertWithOnConflict(ScreenEntry.TABLE_NAME, null, values,
            SQLiteDatabase.CONFLICT_REPLACE)
        if (newRowId == -1L) {
            BeagleMessageLogs.logDataNotInsertedOnDatabase(key, value)
        }
    }

    override fun restore(key: String): String? {
        return executeRestoreQueryForKey(key).use { cursor ->
            if (cursor.count > 0) {
                cursor.moveToFirst()
                cursor.getString(cursor.getColumnIndexOrThrow(ScreenEntry.VALUE_COLUMN_NAME))
            } else {
                null
            }
        }
    }

    override fun delete(key: String) {
        database.delete(ScreenEntry.TABLE_NAME, "${ScreenEntry.KEY_COLUMN_NAME}=?", arrayOf(key))
    }

    override fun getAll(): Map<String, String> {
        val columnsToReturn = arrayOf(ScreenEntry.KEY_COLUMN_NAME, ScreenEntry.VALUE_COLUMN_NAME)
        val columnsForWhereClause = ""
        val valuesForWhereClause = arrayOf<String>()
        val cursor = database.query(
            ScreenEntry.TABLE_NAME,
            columnsToReturn,
            columnsForWhereClause,
            valuesForWhereClause,
            null,
            null,
            null
        )

        val returnMap = mutableMapOf<String, String>()
        if (cursor.count > 0) {
            cursor.moveToFirst()
            while (!cursor.isAfterLast) {
                returnMap[cursor.getString(cursor.getColumnIndexOrThrow(ScreenEntry.KEY_COLUMN_NAME))] =
                    cursor.getString(cursor.getColumnIndexOrThrow(ScreenEntry.VALUE_COLUMN_NAME))

                cursor.moveToNext()
            }
        }
        cursor.close()

        return returnMap
    }

    private fun executeRestoreQueryForKey(key: String): Cursor {
        val columnsToReturn = arrayOf(ScreenEntry.VALUE_COLUMN_NAME)
        val columnsForWhereClause = "${ScreenEntry.KEY_COLUMN_NAME}=?"
        val valuesForWhereClause = arrayOf(key)
        return database.query(
            ScreenEntry.TABLE_NAME,
            columnsToReturn,
            columnsForWhereClause,
            valuesForWhereClause,
            null,
            null,
            null
        )
    }
}

internal class ContentValuesFactory {
    fun make(): ContentValues = ContentValues()
}

internal object BeagleDatabaseManager {

    private const val DATABASE_NAME = "BeagleDefaultStore.db"
    private const val DATABASE_VERSION = 2

    private lateinit var database: SQLiteDatabase

    fun getDatabase(context: Context): SQLiteDatabase {
        if (!::database.isInitialized) {
            database = BeagleSQLiteDatabase(
                context,
                DATABASE_NAME,
                DATABASE_VERSION
            ).writableDatabase
        }
        return database
    }
}

internal open class BeagleSQLiteDatabase(
    context: Context,
    databaseName: String,
    databaseVersion: Int
) : SQLiteOpenHelper(
    context,
    databaseName,
    null,
    databaseVersion
) {
    override fun onCreate(db: SQLiteDatabase?) {
        val createTableQuery = "CREATE TABLE ${ScreenEntry.TABLE_NAME} (" +
                "${BaseColumns._ID} INTEGER PRIMARY KEY," +
                "${ScreenEntry.KEY_COLUMN_NAME} TEXT NOT NULL UNIQUE," +
                "${ScreenEntry.VALUE_COLUMN_NAME} TEXT NOT NULL" +
                ")"
        db?.execSQL(createTableQuery)
    }

    override fun onUpgrade(db: SQLiteDatabase?, oldVersion: Int, newVersion: Int) {
        val deleteTableQuery = "DROP TABLE IF EXISTS ${ScreenEntry.TABLE_NAME}"
        db?.execSQL(deleteTableQuery)
        onCreate(db)
    }
}

internal object BeagleMessageLogs {

    fun logDataNotInsertedOnDatabase(key: String, value: String) {
        BeagleLoggerDefault().warning(
            "Error when trying to insert key=$key with value=$value on Beagle default database."
        )
    }
}
```

#### Criar a classe StoreHandlerDefault

A classe StoreHandler define um protocolo que permite personalizar a forma como o cache é manipulado no banco de dados e na memória. 

Após a definição das classes `MemoryLocalStore` e `DatabaseLocalStore`, você pode definir a `StoreHandler` com a criação de uma classe anotada com `@BeagleComponent` que implemente a **Interface** `StoreHandler`.

Veja o exemplo abaixo:


```kotlin
import br.com.zup.beagle.android.annotation.BeagleComponent
import br.com.zup.beagle.android.store.StoreHandler
import br.com.zup.beagle.android.store.StoreType

@BeagleComponent
internal class StoreHandlerDefault(
    private val memoryLocalStore: MemoryLocalStore = MemoryLocalStore,
    private val databaseLocalStore: DatabaseLocalStore = DatabaseLocalStore()
) : StoreHandler {

    override fun save(storeType: StoreType, data: Map<String, String>) {
        data.forEach {
            if (storeType == StoreType.DATABASE) {
                databaseLocalStore.save(it.key, it.value)
            } else {
                memoryLocalStore.save(it.key, it.value)
            }
        }
    }

    override fun restore(storeType: StoreType, vararg keys: String): Map<String, String?> {
        val values = mutableMapOf<String, String?>()
        keys.forEach {
            val value = if (storeType == StoreType.DATABASE) {
                databaseLocalStore.restore(it)
            } else {
                memoryLocalStore.restore(it)
            }
            values[it] = value
        }
        return values
    }

    override fun delete(storeType: StoreType, key: String) {
        if (storeType == StoreType.DATABASE) {
            databaseLocalStore.delete(key)
        } else {
            memoryLocalStore.delete(key)
        }
    }

    override fun getAll(storeType: StoreType): Map<String, String> {
        return if (storeType == StoreType.DATABASE) {
            databaseLocalStore.getAll()
        } else {
            memoryLocalStore.getAll()
        }
    }
}
```

### Passo 7: Configuração sistema de logs

Você precisa criar uma classe que implemente a interface BeagleLogger. 

Esse protocolo deverá ser definido para facilitar o monitoramento dos erros gerados no contexto server-driven de sua aplicação. Você pode implementar os métodos de acordo com a sua necessidade.

Para deixar o ambiente do Beagle aberto a modificações, a API de Logs padrão pode ser substituída por qualquer outra.

A configuração é com a criação de uma classe anotada com `@BeagleComponent` que implemente a **Interface** `BeagleLogger`. 

Essa interface precisa da implementação dos métodos de logs, você pode ver como funciona no exemplo abaixo:

```kotlin
import android.util.Log
import br.com.zup.beagle.android.annotation.BeagleComponent
import br.com.zup.beagle.android.logger.BeagleLogger

private const val BEAGLE_TAG = "BeagleSDK"

@BeagleComponent
class BeagleLoggerDefault : BeagleLogger {

    override fun warning(message: String) {
        Log.w(BEAGLE_TAG, message)
    }

    override fun error(message: String) {
        Log.e(BEAGLE_TAG, message)
    }

    override fun error(message: String, throwable: Throwable) {
        Log.e(BEAGLE_TAG, message, throwable)
    }

    override fun info(message: String) {
        Log.i(BEAGLE_TAG, message)
    }

}
```

### Passo 8: Inicializar o Beagle e o Design System

{{% alert color="info" %}}
Importante! O que é o Design System?

É o **design system** que guarda os registros dos componentes de estilo criados no frontend e é assim que sua aplicação Android “saberá” qual componente de estilo deve aplicar a cada elemento de uma tela Server-Driven. É na tela server driven que os elementos visuais \(views\) são utilizados na construção da sua tela.

Embora você possa criá-lo agora se quiser, não é necessário para as configurações iniciais, para que você possa testar logo o Beagle! Você pode prosseguir sem configurá-lo. Mas saiba que o Design System é o pulmão da aplicação server-driven! 

[**Design System no Beagle para Android**.](/pt/docs/primeiros-passos/criando-um-projeto-do-zero/case-android/design-system-com-beagle-android/) 
{{% /alert %}}

Agora, você deve inicializar sua `Application` para que o Beagle gere os outros arquivos de configuração que necessita. Para isso, basta clicar em`Make project` \(símbolo de MARTELO\) ou use o comando `CTRL + F9`.

![](/apppackage.png)

Ao ser inicializado, o Beagle irá criar automaticamente o arquivo `BeagleSetup`, que estará na pasta de arquivos gerados como mostrado na figura abaixo: 

![](/image%20%2843%29.png)

### Passo 9: Criar a classe AppApplication

Nesta etapa, você precisa criar uma classe`KOTLIN` que estenda da classe `Application`. Neste exemplo, vamos nomeá-la de `AppApplication`. 

É preciso realizar algumas configurações para que a pasta cumpra seu papel  de chamar a função `BeagleSetup().init(this)` em seu método `onCreate`. Siga os passos abaixo: 

1. Clique com o botão direito do mouse no pacote principal do seu projeto _\(_**beagleapp**_\)_ e selecione:
   * `new` &gt; `Kotlin file/class`
   * Nomeie o arquivo como `AppApplication` e aperte **`enter`**
   * Configure-a como no exemplo abaixo: 


```kotlin
class AppApplication: Application() {

    override fun onCreate() {
        super.onCreate()
        BeagleSetup().init(this)
    }
}
```


2. Para finalizar a implementação, você deve declarar a classe no **Android Manifest** que criamos no começo e que já está aberto. 

O nome da sua`application` agora é o nome desta classe que você criou. Faça o update do Android Manifest como indicado abaixo: 


```markup
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.beagleexamples">

    <uses-permission android:name="android.permission.INTERNET" />

    <application
        android:name=".beagle.AppApplication"
        
        ...
```


{{% alert color="success" %}}
Pronto, a sua aplicação Android está configurada e preparada para usar o Beagle! 
{{% /alert %}}

Tudo o que você precisa agora é [**configurar um backend** ](/pt/docs/primeiros-passos/criando-um-projeto-do-zero/case-backend)para responder as requisições da sua aplicação. Feita esta configuração, inicie a sua aplicação e você verá sua primeira tela server-driven! 

### Passo 10: Exibir sua Tela Server-Driven

É muito simples exibir uma tela Server-Driven. Agora que toda a configuração do Beagle está pronta, você precisa seguir estes passos: 

* Abra o arquivo `MainActivity.kt` 
* Declare o `intent` como listado abaixo. Ele vai definir o endereço que tem as informações da sua tela no backend que você configurou. 
* Copie e cole o `intent` listado abaixo no método `onCreate`.

```text
val intent = this.newServerDrivenIntent<AppBeagleActivity>(ScreenRequest("/screen"))
startActivity(intent)
finish()
```

* Sua`MainActivity.kt` deve ficar assim:

![](/print-intent%20%282%29.png)

Agora basta somente clicar em **`Run app`** e checar sua tela no emulador!   
Você verá esta tela: 

![](/captura-de-tela-2020-06-22-a-s-11.41.12.png)

{{% alert color="success" %}}
Parabéns, você criou sua primeira tela com Beagle! 🎉 
{{% /alert %}}
