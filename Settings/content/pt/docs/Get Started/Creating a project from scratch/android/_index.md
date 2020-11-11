---
title: "Android"
description: >
  Nesta seção, você encontra um passo a passo para iniciar um projeto Android
  com Beagle.
---

---

## Iniciando um projeto Android

Para este exemplo prático, utilizaremos o Android Studio IDE. Caso você ainda não o tenha instalado, basta acessar no [**site oficial do Android** ](https://developer.android.com/studio?hl=us-en)e seguir as instruções.   
  
Depois de ter instalado o programa, siga os passos abaixo:

**Passo 1:** Abra o Android Studio e clique em **Start a new Android Studio project**_._ 

![](https://lh4.googleusercontent.com/bAhbvEZUN_pBXavMOqCvkt2Z4NlYsxXXtmeGRKEUnyGfuIm7c-mskMhmmiMbSaCw_xonW8vceVI2C27q08-k5tV8EDD5ymvoaPwDDFGe_fN3bmoqCQEoAAKASKXOTiI3KUPI1GQ1)

**Passo 2:** Selecione a opção **Empty Activity** e clique em **next**. ****

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

![](../../../.gitbook/assets/mainactivity.png)

{% hint style="success" %}
Parabéns, seu projeto foi criado no Android! Agora, você precisará configurar o Beagle, de acordo com os passos a seguir. 
{% endhint %}

## Configurando o Beagle

### **Passo 1:** Definir as dependências

Para começar, você precisa configurar as dependências do Beagle no seu repositório. Isso pode ser feito utilizando as configurações abaixo e fazendo o download da biblioteca do Beagle. 

* Abra o seu projeto no Android Studio.  
* Localize o arquivo `Graddle scripts` no projeto. 
* Nele existem dois arquivos do com o nome `gradle`. Abra o primeiro cujo nome é `build.graddle(project:Beagle)`
* Procure o bloco de código  `allprojects` e configure as credenciais do `Maven` como listadas abaixo.

{% code title="build.gradle \(project:Beagle\)" %}
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
{% endcode %}

* Feche o arquivo `build.graddle(project:Beagle)`

Feito isso, devemos incluir o `kapt plugin` e o `Beagle` como dependências no `dependency manager`. Para isso, siga estas instruções:

* Abra o arquivo `build.graddle(Module:app)`

Perceba que alguns `plugins` já estão listados no começo desse arquivo como mostrado na figura abaixo

* Em seguida, adicione a linha_`apply plugin: 'kotlin-kapt'`_ 

![](../../../.gitbook/assets/implementacaogradle.png)

Depois disso, você precisa adicionar algumas dependências. Para isso: 

* Procure neste arquivo que está mexendo o bloco de código `dependencies { }`:
* Adicione a variável `ext.beagle_version` logo acima \(no caso, fora\) do escopo das dependências
  * Versão atual do Beagle[![Maven Central](https://img.shields.io/maven-central/v/br.com.zup.beagle/android)](https://oss.sonatype.org/#nexus-search;gav~br.com.zup.beagle~android~~~~kw,versionexpand)

Copie e cole as linhas abaixo dentro das dependências :

* _implementation "br.com.zup.beagle:android:$beagle\_version"_ 
* _kapt "br.com.zup.beagle:android-processor:$beagle\_version"_

{% code title="build.gradle \(module project\)" %}
```go
// Add in your app level dependency
ext.beagle_version = "${beagle_version}"
 
dependencies {
    implementation "br.com.zup.beagle:android:$beagle_version"
    kapt "br.com.zup.beagle:android-processor:$beagle_version"
}
```
{% endcode %}

{% hint style="info" %}
Insira a versão de release do Beagle no lugar de `${beagle.version}`, ou seja, coloque a versão do Beagle destacada em azul da badge acima, mas sem o **caracter v** que antecede os números de versão.

Por exemplo: ****![ex](http://img.shields.io/badge/release-v0.2.8-important)-`ext.beagle.version = "0.2.8"`
{% endhint %}

Ao final destas configurações, o seu arquivo deverá estar assim:

![](../../../.gitbook/assets/implementacaogradle2.png)

### 

### Passo 2: Configurar o Android Manifest

O próximo passo é atualizar o seu projeto no Android Manifest adicionando algumas linhas a este arquivo:

1. A permissão de INTERNET para que sua aplicação seja capaz de acessar a internet. `<uses-permission android:name="android.permission.INTERNET" />`

{% hint style="info" %}
Se você tiver dificuldade para encontrar este ou qualquer arquivo, basta usar a ferramenta de busca do Android Studio. 

Para habilitá-la, aperte o botão**`SHIFT`**do seu teclado duas vezes e a interface de busca aparecerá . Feito isso, é só digitar `AndroidManifest` e o Android Studio o localizará. 
{% endhint %}

{% code title="AndroidManifest.xml" %}
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
{% endcode %}

Uma dica é deixar este arquivo aberto porque vamos usá-lo de novo em outro momento.

{% hint style="warning" %}
* O**`usesCleartextTraffic:`** indica que o aplicativo pretende usar o tráfego de rede de texto não criptografado, HTTP. O valor padrão para aplicativos que visam o nível de API 27 ou inferior é **`true`**. Os aplicativos que têm como alvo o nível de API 28 ou superior são padronizados como **`false`**. 
* O atributo **`android: usesCleartextTraffic = "true"`** dentro da `tag`  **`<application>`** é usado para se comunicar com o BFF local.  Se você pretende `depurar` o projeto usando um BFF local, você pode usar essa configuração como uma etapa de configuração rápida.
* No entanto, se você planeja transformar este exemplo em um aplicativo para `release`, recomendamos que você use o `networkSecurityConfig`, que você pode configurar usando as instruções na [**página de desenvolvedores do Android**](https://developer.android.com/training/articles/security-config).
{% endhint %}

### Passo 3: Criar o AppBeagleConfig

Em um próximo passos, você deve criar uma classe chamada `AppBeagleConfig`. Ela faz parte das configurações iniciais do Beagle e é nela que vamos registrar algumas configurações importantes. 

Ao criá-la, devemos garantir que ela esteja configurada da seguinte forma: 

* Anotada com o `@BeagleComponent` 
* E deve `estender (extend)` da classe`BeagleConfig`**.** 

Para criar o AppBeagleConfig, siga estes passos: 

1. Primeiro vamos criar o pacote que conterá nossos arquivos de configuração.  
2. Clique com botão direito do mouse no pacote principal do seu projeto e click em **new &gt; package** __conforme a figura abaixo: 

![](../../../.gitbook/assets/newpackage.png)

Embora você possa nomeá-lo como preferir, sugerimos que para este tutorial você use o nome`beagle`

    3. Clique com o botão direito do mouse no pacote beagle e clique em **new&gt;Kotlin File/Class**

   __4. __Nomeie como `AppBeagleConfig` e pressione **`ENTER`**

   5. Copie e cole as configurações abaixo no arquivo `AppBeagleConfig` que acabou de criar. Perceba que ele implementará os atributos: `baseUrl, environment, isLoggingEnabled, cache.`

* O **`baseUrl`** retorna a URL base do seu ambiente.
* O**`environment`** retorna o _`current build state`_ da sua aplicação.
* O **`isLoggingEnabled`**retorna a visualização de log da aplicação.
* O **`cache`** configuração de gerenciamento de cache.

{% code title="AppBeagleConfig.kt" %}
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
{% endcode %}

{% hint style="info" %}
A partir deste ponto do tutorial, iremos testar nossas telas Server-Driven usando o local host. Por isso, é importante que nossa**`baseURL`** seja o seu local host.

Outro ponto de atenção é que, neste momento, o Beagle espera que classes anotadas com  `@BeagleComponent` tenham seus construtores vazios.
{% endhint %}

### **Passo 4: Criar o AppBeagleActivity**

Você precisará lidar com as `activities` que serão geradas via server-driven. Por isso, é necessário **implementar uma Activity** para gerenciá-las. Para este exemplo, vamos nomeá-la `AppBeagleActivity`.

Este arquivo faz parte da configuração de uso do Beagle ****e deve ser implementado pelo menos uma vez para que ela opere normalmente. 

Quando for criar o AppBeagleActivity, lembre-se de anotá-la com `BeagleComponent` e estendê-la para classe`BeagleActivity`. 

{% hint style="info" %}
Vale lembrar que é muito importante garantir que essa `activity` esteja registrada no Android Manifest. Faça isso assim que criá-la. 
{% endhint %}

Siga os passos abaixo para criar o AppBeagleActivity, incluindo o arquivo `.xml`:

1. Clique com o botão direito do mouse no pacote Beagle e clique em **New&gt;Activity&gt;Empty Activity** 

![](../../../.gitbook/assets/newactivity.png)

   2. Dê o nome de `AppBeagleActivity` para a `Activity` e clique em **`finish`**.

{% hint style="info" %}
A partir daí, o Beagle irá utilizar esta `activity` sempre que carregar as informações das tela recebidas do backend no frontend da sua aplicação.
{% endhint %}

Deixamos um exemplo abaixo já configurado para você copiar e colar.  

* Primeiro localize o layout dessa `activity`. Ela provavelmente estará em`RES` &gt; `LAYOUT` &gt; com o nome de `activity_app_beagle.xml`  
* Copie e cole o conteúdo abaixo `.xml` removendo qualquer conteúdo anterior: 

{% code title="activity\_app\_beagle.xml" %}
```markup
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/root_layout"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">

    <androidx.appcompat.widget.Toolbar
        android:id="@+id/custom_toolbar"
        android:layout_width="match_parent"
        android:layout_height="wrap_content" />
    <FrameLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent">

        <FrameLayout
            android:id="@+id/server_driven_container"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        <ProgressBar
            android:id="@+id/progress_bar"
            android:layout_width="42dp"
            android:layout_height="42dp"
            android:layout_gravity="center"
            android:visibility="gone"/>
    </FrameLayout>
</LinearLayout>
```
{% endcode %}

* Agora abra o arquivo `AppBeagleActitivity.kt` e configure como definido abaixo: 

{% code title="AppBeagleActivity.kt" %}
```kotlin
@BeagleComponent
class AppBeagleActivity : BeagleActivity() {

    private val progressBar: ProgressBar by lazy { findViewById<ProgressBar>(R.id.progress_bar) }
    private val mToolbar: Toolbar by lazy { findViewById<Toolbar>(R.id.custom_toolbar) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_app_beagle)
    }

    override fun getServerDrivenContainerId(): Int = R.id.server_driven_container

    override fun getToolbar(): Toolbar = mToolbar

    override fun onServerDrivenContainerStateChanged(state: ServerDrivenState) {
        when (state) {
            is ServerDrivenState.Started -> {
                progressBar.visibility =  View.VISIBLE
            }
            is ServerDrivenState.Finished -> {
                progressBar.visibility =  View.GONE
            }
            is ServerDrivenState.Error -> {
                Toast.makeText(this, "Error", Toast.LENGTH_LONG).show()
            }
        }
    }
}
```
{% endcode %}

{% hint style="warning" %}
Neste ponto do tutorial, é essencial que você remova a`ActionBar` padrão dessa `activity` porque, a partir deste momento, será o Beagle que irá gerenciar `ActionBar/Toolbar`. 
{% endhint %}

Para realizar esta configuração, você deve mudar o seu `BeagleActivity's theme`. Vá até a pasta `Resources` na sua aplicação do Android Studio e abra o arquivo `STYLE` . Depois, é só Modificar o seu `AppTheme` como no exemplo abaixo:  

{% code title="styles.xml" %}
```markup
<resources>
    <!-- Beagle Activity theme. -->
    <style name="MyTheme" parent="Theme.AppCompat.NoActionBar">
```
{% endcode %}

### Passo 5: Inicializar o Beagle e o Design System

{% hint style="info" %}
Importante! O que é o Design System?

É o **design system** que guarda os registros dos componentes de estilo criados no frontend e é assim que sua aplicação Android “saberá” qual componente de estilo deve aplicar a cada elemento de uma tela Server-Driven. É na tela server driven que os elementos visuais \(views\) são utilizados na construção da sua tela.

Embora você possa criá-lo agora se quiser, não é necessário para as configurações iniciais, para que você possa testar logo o Beagle! Você pode prosseguir sem configurá-lo. Mas saiba que o Design System é o pulmão da aplicação server-driven! 

[**Design System no Beagle para Android**.](design-system-beagle-com-android.md) 
{% endhint %}

Agora, você deve inicializar sua `Application` para que o Beagle gere os outros arquivos de configuração que necessita. Para isso, basta clicar em`Make project` \(símbolo de MARTELO\) ou use o comando `CTRL + F9`.

![](../../../.gitbook/assets/apppackage.png)

Ao ser inicializado, o Beagle irá criar automaticamente o arquivo `BeagleSetup`, que estará na pasta de arquivos gerados como mostrado na figura abaixo: 

![](../../../.gitbook/assets/image%20%2843%29.png)

### Passo 6: Criar a classe AppApplication

Nesta etapa, você precisa criar uma classe`KOTLIN` que estenda da classe `Application`. Neste exemplo, vamos nomeá-la de `AppApplication`. 

É preciso realizar algumas configurações para que a pasta cumpra seu papel  de chamar a função `BeagleSetup().init(this)` em seu método `onCreate`. Siga os passos abaixo: 

1. Clique com o botão direito do mouse no pacote principal do seu projeto _\(_**beagleapp**_\)_ e selecione:
   * `new` &gt; `Kotlin file/class`
   * Nomeie o arquivo como `AppApplication` e aperte **`enter`**
   * Configure-a como no exemplo abaixo: 

{% code title="AppApplication.kt" %}
```kotlin
class AppApplication: Application() {

    override fun onCreate() {
        super.onCreate()
        BeagleSetup().init(this)
    }
}
```
{% endcode %}

2. Para finalizar a implementação, você deve declarar a classe no **Android Manifest** que criamos no começo e que já está aberto. 

O nome da sua`application` agora é o nome desta classe que você criou. Faça o update do Android Manifest como indicado abaixo: 

{% code title="AndroidManifest.xml" %}
```markup
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.beagleexamples">

    <uses-permission android:name="android.permission.INTERNET" />

    <application
        android:name=".beagle.AppApplication"
        
        ...
```
{% endcode %}

{% hint style="success" %}
Pronto, a sua aplicação Android está configurada e preparada para usar o Beagle! 
{% endhint %}

Tudo o que você precisa agora é [**configurar um backend** ](../exemplo-de-projeto-backend-com-beagle.md)para responder as requisições da sua aplicação. Feita esta configuração, inicie a sua aplicação e você verá sua primeira tela server-driven! 

### Passo 7: Exibir sua Tela Server-Driven

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

![](../../../.gitbook/assets/print-intent%20%282%29.png)

Agora basta somente clicar em **`Run app`** e checar sua tela no emulador!   
Você verá esta tela: 

![](../../../.gitbook/assets/captura-de-tela-2020-06-22-a-s-11.41.12.png)

{% hint style="success" %}
Parabéns, você criou sua primeira tela com Beagle! 🎉 
{% endhint %}
