---
title: Android
weight: 17
description: >-
  Nesta seção, você encontra o passo a passo para fazer as configurações para o
  uso do Beagle em projetos Android.
---

---

## **Configuração de uso** 

Depois que você terminar a instalação, é preciso **configurar o Beagle para o uso**. Para facilitar a nossa explicação, vamos usar um **exemplo de** **como renderizar uma tela com um título "Hello Beagle!**" e uma pequena descrição. 

### **Passo 1: Atualizar Android Manifest**

Nesse passo você deve atualizar o`AndroidManifest` e adicionar duas linhas a este arquivo:

1. A permissão de INTERNET para que sua aplicação seja capaz de acessar a internet. 
2. O atributo`android:usesCleartextTraffic="true"` dentro da tag `<application>` para comunicação com o BFF local.

{{% alert color="info" %}}
Para este exemplo não iremos utilizar um BFF, consequentemente essa configuração não é necessária. Porém, para todo e qualquer **teste** que seja feito usando o Beagle Android com um BFF, esse passo é **necessário**.
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


{{% alert color="warning" %}}
* O`usesCleartextTraffic:` indica que o aplicativo pretende usar o tráfego de rede de texto não criptografado, HTTP. O valor padrão para aplicativos que visam o nível de API 27 ou inferior é **`true`**. Os aplicativos que têm como alvo o nível de API 28 ou superior são padronizados como **`false`**.  
* O atributo `android: usesCleartextTraffic = "true"` dentro da `tag<application>`

  é usado para se comunicar com o BFF local.  Se você pretende `depurar` o projeto usando um BFF local, você pode usar essa configuração como uma etapa de configuração rápida.  

* No entanto, se você planeja transformar este exemplo em um aplicativo para `release`, recomendamos que você use o `networkSecurityConfig`, que você pode configurar usando as instruções na página de [**desenvolvedores do Android**](https://developer.android.com/training/articles/security-config).
{{% /alert %}}

### **Passo 2: Criar uma classe BeagleConfig**

Feita a atualização, você precisa criar uma classe `BeagleConfig` e configurar seus todos os atributos, como mostra o exemplo abaixo:


```kotlin
@BeagleComponent
class AppBeagleConfig : BeagleConfig {
    override val environment: Environment get() = Environment.DEBUG
    override val baseUrl: String get() = "https://myapp.server.com/"
    override val isLoggingEnabled: Boolean = true
    override val cache: Cache = Cache(
        enabled = false,
        maxAge = 300,
        size = 15
    )
}
```


| Atributos | Tipo | Definição |
| :--- | :--- | :--- |
| environment | Environment | Atributo responsável por informar ao Beagle qual o estado de build atual da aplicação. |
| baseUrl | String | Informa a url base usada no Beagle na aplicação. Se estiver usando emulador, consulte essa [**página para definir esse atributo**](https://developer.android.com/studio/run/emulator-networking.html#networkaddresses). |
| isLoggingEnabled | Boolean | Atributo que habilita ou desabilita todos os logs que o Beagle gera. |
| cache | Cache | Objeto responsável por gerenciar o cache das requisições do Beagle. |

{{% alert color="warning" %}}
Faça a configuração das classes com bastante atenção, pois se você anotá-las com`BeagleComponent`, o Beagle espera que elas tenham construtores vazios.
{{% /alert %}}

### **Passo 3: BeagleActivity**

O Beagle fornece uma `Activity` default para gerenciar as `Activities` geradas via server-driven. Porém você pode criar uma ou mais`Activities` que herdem de `BeagleActivity` com `@BeagleComponent` personalizadas de acordo com os fluxos server-driven da sua aplicação. 

{{% alert color="info" %}}
Você pode criar o BeagleActivity agora, mas neste momento é possível prosseguir com os próximos passos sem configurá-la. Para saber mais, confira a seção sobre[ **Beagle Activity Customizada**](../../features/customizacao/beagle-para-android/custom-beagle-activity.md).
{{% /alert %}}

### **Passo 4: Iniciar o Beagle e o Design System**

Agora é o momento de iniciar o Beagle na classe da sua aplicação. Porém, antes confira se a versão mínima da sua aplicação em SKD está  19 ou superior, como indicado abaixo: 


```text
defaultConfig {
    minSdkVersion 19 //or higher
}
```


{{% alert color="info" %}}
Você pode criar o Design System agora, mas neste momento é possível prosseguir com os próximos passos sem configurá-lo. Para saber mais, confira a seção sobre [**Design System com Beagle para Android**](../new-project/case-android/design-system-beagle-com-android.md).
{{% /alert %}}

### **Passo 5: Criar o BeagleSetup**

Agora você deve inicializar sua `Application` para que o Beagle gere os outros arquivos de configuração que necessita. Ao ser iniciado pela primeira vez o Beagle irá criar automaticamente uma classe de  `BeagleSetup` class, como mostra a figura abaixo:

![BeagleSetup file](/docs-beagle/beaglesetup.png)

### **Passo 6: Criar a classe Application** 

Neste momento, você deve criar uma `classe Kotlin` que estenda a classe `Application` que, para este exemplo, nomeamos como `AppApplication`. 

Esta classe deve chamar o `BeagleSetup().init(this)` no método `onCreate`, conforme listado abaixo:


```kotlin
class AppApplication: Application() {

    companion object {
        var APPLICATION: Application? = null
    }

    override fun onCreate() {
        super.onCreate()
        
        APPLICATION = this

        BeagleSetup().init(APPLICATION!!)
    }
}
```


{{% alert color="danger" %}}
Assim que você criar essa classe, aperte CTRL + F9 para que as classes autogeradas do Beagle sejam criadas.
{{% /alert %}}

### **Passo 7: Atualizar seu Android Manifest.xml**

Por fim, você deve atualizar novamente o seu `AndroidManifest.xml` e definir a `AppApplication` que foi criada como o arquivo de inicialização da aplicação, como no exemplo abaixo: 


```markup
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.beagleexamples">

    <uses-permission android:name="android.permission.INTERNET" />

    <application
        android:name=".AppApplication"
        
        ..
```


### **Passo 8: Gerenciar os Logs**

Você precisa criar uma classe que implementa a interface `BeagleLogger`. Esse protocolo deverá ser definido para facilitar o monitoramento dos erros gerados no contexto server driven de sua aplicação.  E você deve implementar os métodos da forma mais apropriada para sua necessidade. Veja um exemplo:


```kotlin
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


### **Passo 9: Gerenciar os caches**

Aqui, você deve implementar o `StoreHandler`, um protocolo que permite personalizar a forma como o cache é manipulado no banco de dados e na memória.  

Para isso, é preciso criar duas classes que implementarão a  interface `LocalStore`. Essa interface permite mapear as ações de salvar, restaurar, deletar e pegar tudo. Veja o exemplo abaixo:


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


Agora criaremos uma segunda classe a qual dependeremos para criação do `StoreHandler`, que é a `DatabaseLocalStore`. Note que neste mesmo arquivo foram declaradas algumas classes adjacentes que servem a essa classe `DatabaseLocalStore` mas poderiam estar em arquivos diferentes, caso prefira. Veja um exemplo:


```kotlin
internal object ScreenEntry : BaseColumns {
    const val TABLE_NAME = "KeyValueCache"
    const val KEY_COLUMN_NAME = "key"
    const val VALUE_COLUMN_NAME = "value"
}

internal class DatabaseLocalStore(
    private val contentValuesFactory: ContentValuesFactory = ContentValuesFactory(),
    private val database: SQLiteDatabase = BeagleDatabaseManager.getDatabase(
        BeagleUiSampleApplication.APPLICATION!!)
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


O arquivo acima possui as configurações para o SQL Lite e também as definições de como as ações de manipulação de cache funcionarão, no caso da persistência do cache no banco de dados.

Após a definição das classes `MemoryLocalStore` e `DatabaseLocalStore` você pode definir a `StoreHandler`. Veja o exemplo abaixo:


```kotlin
import br.com.zup.beagle.android.annotation.BeagleComponent
import br.com.zup.beagle.android.store.StoreHandler
import br.com.zup.beagle.android.store.StoreType

@BeagleComponent
internal class StoreHandler(
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


Agora você está pronto para começar a usar o Beagle! E para verificar se a configuração está correta simule uma tela Server-Driven fazendo o teste a seguir.

## Exemplo prático

### Como exibir uma tela Server-Driven 

Para você testar nossa aplicação, vamos simular uma tela server-driven criando um JSON que represente uma tela na sua aplicação Android. 

Siga os passos abaixo para fazer a exibição: 

1. Abra o arquivo `MainActivity.kt`;
2. Declare a linha abaixo na função `onCreate`;
3. Adicione a linha de comando `test_content.addView(testScreen().toView(this))`
4. Perceba que o **test\_content** ainda não existe, pois ainda vamos nomear esta referência.


```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)
    test_content.addView(testScreen().toView(this))
}
```


{{% alert color="info" %}}
Para acessar a view `test_content` como no exemplo acima, é necessário a instalar o plugin:


```text
plugins {
    id 'kotlin-android-extensions'
}
```

{{% /alert %}}

5. Abra o arquivo de layout `.xml` da Main Activity e crie um frame layout. 

Por padrão, o Android costuma criar os arquivos `.xml` com o `constraint layout`. Você não precisa removê-lo, apenas adicione o frame layout dentro dele e confira se as configurações estão como no exemplo abaixo:


```markup
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:id="@+id/test_content" />
```


6. Agora, é só retornar a página **MainActivity.kt** e declarar a função abaixo. Ela é a responsável por listar o JSON para testarmos a tela.


```kotlin
private fun testScreen() = Screen(
    child = Container(
      children = listOf(
        Text(
          text = "Hello Beagle!"
        ).applyStyle(
          Style(margin = EdgeValue(top = 16.unitReal()),
            flex = Flex(alignSelf = AlignSelf.CENTER)
          )
              ),
        Text(
          text = "Beagle is a cross-platform framework which provides usage of the " +
                      "Server-Driven UI concept, natively in iOS, Android and Web applications. " +
                      "By using Beagle, your team could easily change application's layout and" +
                      " data by just changing backend code."
        ).applyStyle(
          Style(margin = EdgeValue(
            left = 16.unitReal(),
            right = 16.unitReal(),
            top = 20.unitReal()
          )
          )
        )
      )
    )
  )
```


A função acima cria a estrutura JSON abaixo, que vai ser interpretada pelo Beagle:

```kotlin
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:container",
    "children" : [ {
      "_beagleComponent_" : "beagle:text",
      "text" : "Hello Beagle!",
      "style" : {
        "margin" : {
          "top" : {
            "value" : 16.0,
            "type" : "REAL"
          }
        },
        "flex" : {
          "alignSelf" : "CENTER"
        }
      }
    }, {
      "_beagleComponent_" : "beagle:text",
      "text" : "Beagle is a cross-platform framework which provides usage of the Server-Driven UI concept, natively in iOS, Android and Web applications. By using Beagle, your team could easily change application's layout and data by just changing backend code.",
      "style" : {
        "margin" : {
          "left" : {
            "value" : 16.0,
            "type" : "REAL"
          },
          "top" : {
            "value" : 20.0,
            "type" : "REAL"
          },
          "right" : {
            "value" : 16.0,
            "type" : "REAL"
          }
        }
      }
    } ]
  }
}
```

7. Clique em **`Run app`** e cheque a tela do emulador!  
Você verá a tela a seguir:

![](/docs-beagle/captura-de-tela-2020-06-22-a-s-11.41.12.png)

{{% alert color="success" %}}
Parabéns, você criou sua primeira tela com Beagle!
{{% /alert %}}

Neste tutorial, focamos em uma configuração de tela simples para você entender o processo, na prática, sem se preocupar com uma hierarquia de telas complexas. Mas, claro, você pode fazer bem mais no seu projeto com o Beagle! 

## Informação adicional  

Antes de usar o Beagle, fique atento a **configuração da build de release e o ProGuard.** 

Mesmo não sendo necessário neste momento, é bom ter em mente que você precisará [**configurar o ProGuard**](../../features/customizacao/beagle-para-android/proguard.md) para ativar o ofuscamento do seu código quando estiver publicando releases. 

{{% alert color="info" %}}
As classes anotadas como `BeagleComponent` e `RegisterValidator`não podem implementar parâmetros nos seus construtores, pois no caso do Beagle esses construtores precisam estar vazios.
{{% /alert %}}
