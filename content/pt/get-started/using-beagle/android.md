---
title: Android
weight: 17
description: >-
  Nesta seção, você encontra o passo a passo para fazer as configurações para o
  uso do Beagle em projetos Android.
---

---

Atualmente, existem dois tipos de abordagens para a renderização de telas com o Beagle: **remota** e **local.**

Neste tutorial abaixo, vamos fazer a configuração e construir uma tela local. Para aprender como configurar e construir uma tela remota, siga no tutorial [**criando um projeto do zero**]({{< ref path="/get-started/creating-a-project-from-scratch/case-android" lang="pt" >}})

## **Configuração de uso**

Depois que você terminar a instalação, é preciso **configurar o Beagle para o uso**. Para facilitar a nossa explicação, vamos usar um **exemplo de** **como renderizar uma tela com um título "Hello Beagle!**" e uma pequena descrição.

### **Passo 1: Criar uma classe BeagleConfig**

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

| Atributos        | Tipo        | Definição                                                                                                                                                                                                               |
| :--------------- | :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| environment      | Environment | Atributo responsável por informar ao Beagle qual o estado de build atual da aplicação.                                                                                                                                  |
| baseUrl          | String      | Informa a url base usada no Beagle na aplicação. Se estiver usando emulador, consulte essa [**página para definir esse atributo**](https://developer.android.com/studio/run/emulator-networking.html#networkaddresses). |
| isLoggingEnabled | Boolean     | Atributo que habilita ou desabilita todos os logs que o Beagle gera.                                                                                                                                                    |
| cache            | Cache       | Objeto responsável por gerenciar o cache das requisições do Beagle.                                                                                                                                                     |

{{% alert color="warning" %}}
Faça a configuração das classes com bastante atenção, pois se você anotá-las com `BeagleComponent`, o Beagle espera que elas tenham construtores vazios.
{{% /alert %}}

### **Passo 2: Iniciar o Beagle e o Design System**

Agora é o momento de iniciar o Beagle na classe da sua aplicação. Porém, antes confira se a versão mínima da sua aplicação em SKD está 19 ou superior, como indicado abaixo:

```text
defaultConfig {
    minSdkVersion 19 //or higher
}
```

{{% alert color="info" %}}
Você pode criar o Design System agora, mas neste momento é possível prosseguir com os próximos passos sem configurá-lo. Para saber mais, confira a seção sobre [**Design System com Beagle para Android**]({{< ref path="/get-started/creating-a-project-from-scratch/case-android/design-system-with-beagle-android" lang="pt" >}}).
{{% /alert %}}

### **Passo 3: Criar o BeagleSetup**

Agora você deve inicializar sua `Application` para que o Beagle gere os outros arquivos de configuração que necessita. Ao ser iniciado pela primeira vez o Beagle irá criar automaticamente uma classe de `BeagleSetup` class, como mostra a figura abaixo:

![BeagleSetup file](/beaglesetup.png)

### **Passo 4: Criar a classe Application**

Neste momento, você deve criar uma `classe Kotlin` que estenda a classe `Application` que, para este exemplo, nomeamos como `AppApplication`.

Esta classe deve chamar o `BeagleSetup().init(this)` no método `onCreate`, conforme listado abaixo:

```kotlin
class AppApplication: Application() {

    override fun onCreate() {
        super.onCreate()

        BeagleSetup().init(this)
    }
}
```

{{% alert color="danger" %}}
Assim que você criar essa classe, aperte CTRL + F9 para que as classes autogeradas do Beagle sejam criadas.
{{% /alert %}}

### **Passo 5: Atualizar seu Android Manifest.xml**

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

Agora você está pronto para começar a usar o Beagle! E para verificar se a configuração está correta simule uma tela Server-Driven fazendo o teste a seguir.

## Exemplo prático

### Como exibir uma tela Declarativa

Para você testar nossa aplicação, vamos simular uma tela server-driven criando um JSON que represente uma tela na sua aplicação Android.

Siga os passos abaixo para fazer a exibição:

1. Abra o arquivo `MainActivity.kt`;
2. Declare a linha abaixo na função `onCreate`;
3. Adicione a linha de comando `test_content.addView(testScreen().toView(this))`
4. Perceba que o **test_content** ainda não existe, pois ainda vamos nomear esta referência.

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

![](/shared/captura-de-tela-2020-06-22-a-s-11.41.12.png)

{{% alert color="success" %}}
Parabéns, você criou sua primeira tela com Beagle!
{{% /alert %}}

Neste tutorial, focamos em uma configuração de tela simples para você entender o processo, na prática, sem se preocupar com uma hierarquia de telas complexas. Mas, claro, você pode fazer bem mais no seu projeto com o Beagle!

## Informação adicional

Antes de usar o Beagle, fique atento a **configuração da build de release e o ProGuard.**

Mesmo não sendo necessário neste momento, é bom ter em mente que você precisará [**configurar o ProGuard**]({{< ref path="/resources/customization/beagle-for-android/proguard-configuration" lang="pt" >}}) para ativar o ofuscamento do seu código quando estiver publicando releases.

{{% alert color="info" %}}
As classes anotadas como `BeagleComponent` e `RegisterValidator`não podem implementar parâmetros nos seus construtores, pois no caso do Beagle esses construtores precisam estar vazios.
{{% /alert %}}
