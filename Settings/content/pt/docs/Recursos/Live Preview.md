---
title: Live Preview
weight: 199
description: >-
  Nesta seção, você encontra informações sobre a funcionalidade do Live Preview
  e como configura-lo
---

---

## **Introdução** 

O Live Preview é um recurso de visualização que auxilia no desenvolvimento de `layouts`.  Ele permite que as telas em desenvolvimento sejam renderizadas sem a necessidade de subir seu servidor backend para as alterações de _layout_ feitas, reduzindo, assim, o tempo de desenvolvimento de uma tela. 

Em outras palavras, o Live Preview dá a opção de editar um código que define a tela e, assim, o desenvolvedor pode utilizar o plugin para que as atualizações sejam comunicadas ao cliente e ele as renderize.

Desta forma, é possível visualizar as mudanças sem precisar subir um servidor backend.

{{% alert color="info" %}}
Esta conexão entre frontend e backend é feita via `WebSocket` utilizando a porta :`9721`
{{% /alert %}}

## Requisitos

Para usar o `Live Preview` você deve: 

* Usar o [**Beagle SDK**](../get-started/installing-beagle/beagle-backend.md) em seu BFF**;**
* Instalar o `BeaglePreview` plugin;

### Configuração do BFF

Você precisa que seu BFF esteja configurado com o Beagle para utilizar o Live Preview. Caso ainda não o tenha, faça o [**download de um projeto inicial pronto**](https://github.com/ZupIT/beagle-examples/tree/master/BeagleSampleBackend). Outra possibilidade que você pode fazer, é o nosso tutorial de [**como implementar um backend**](../get-started/new-project/exemplo-de-projeto-backend-com-beagle.md) com o Beagle configurado.

### Instalação **do plugin IntelliJ**

Para instalar o `BeaglePreview` entre no link abaixo e clique na opção instalar na IDE:

{% embed url="https://plugins.jetbrains.com/plugin/14575-beagle-sdk-live-preview" caption="Plugin do Live Preview para IntelliJ" %}}

## Uso do Live Preview

{{% alert color="info" %}}
Você **deve configurar** tanto o backend quanto o frontend para esse Live Preview. O frontend pode ser cliente Android ou iOS.
{{% /alert %}}

### Passo 1: Configurar o Backend

Os passos a seguir nos permitirão visualizar uma tela definida no `backend` usando o Live Preview:

1. Vamos criar uma tela declarativa para teste. O código mais adiante trará uma tela bem simples como exemplo. 
2. Iremos criar uma função que retorna a tela a ser visualizada pelo plugin. 
3. Por fim, vamos anotar essa função com `@BeaglePreview`.

Feito isso, o Live Preview já será capaz de receber a tela em desenvolvimento a ser renderizada. 

Alguns pontos interessantes de se notar do exemplo abaixo:

* Perceba que a tela em si está definida na classe `ScreenBeagleBuilder.`
* A função `buildPreview` está anotada com `@BeaglePreview`, com isso o plugin consegue utilizar ela para renderizar a tela.


```kotlin
@BeaglePreview
fun buildPreview() = ScreenBeagleBuilder()

class ScreenBeagleBuilder: ScreenBuilder {
    override fun build() = Screen(
        child = Container(
            children = listOf(
                Text("Live Preview!!!")
            )
        )
    )
}
```


Se sua função for reconhecida pelo plugin, o símbolo do Beagle aparecerá como um botão à esquerda da função. Clicando neste botão, o `BeaglePreview` faz um push do layout para o cliente \(aplicação frontend\), permitindo que ele atualize seu layout instantaneamente. 

Veja como no exemplo abaixo: 

![](/docs-beagle/livepreviewpluginintellijidea.gif)

Depois de acionar o plugin para alguma função, basta você salvar as modificações realizadas no seu layout para que o Live Preview atualize a tela sendo renderizada pelo frontend. 

O Live Preview faz isso ao compilar seu código modificado e verificar se existe alguma alteração a ser feita. Se for o caso, ele faz o push de seu novo layout para o cliente.

### Passo 2: Configurar o frontend iOS e Android 

Uma vez configurado o seu backend, o próximo passo é configurar o emulador no frontend da sua aplicação com um projeto Beagle Android ou  Beagle iOS. 



### Passo 1: Instalar o submódulo

Para realizar a instalação, seu arquivo de `gradle` deve conter o fragmento abaixo:   
  
A versão atual do Beagle :[![https://img.shields.io/bintray/v/zupit/repo/beagle](https://img.shields.io/bintray/v/zupit/repo/beagle](https://raster.shields.io/bintray/v/zupit/repo/beagle)]()


```kotlin
// Add in your plugins
apply plugin: 'kotlin-kapt'

// Add in your app level dependency
ext.beagle_version = "${beagle_version}"
 
dependencies {
    implementation "br.com.zup.beagle:android:$beagle_version"
    kapt "br.com.zup.beagle:android-processor:$beagle_version"
    
    debugImplementation "br.com.zup.beagle:android-preview:$beagle_version"
}
```


Em `ext.beagle_version = "${beagle_version}"`, insira a versão de release do Beagle no lugar de `${beagle.version}`. Ou seja, coloque a versão do Beagle destacada em azul da badge acima, mas sem o **caracter v** que antecede os números de versão.

Por exemplo:undefined-`ext.beagle.version = "0.2.8"`

Feito isso, você pode atualizar suas dependências.

### Passo 2: Criar uma Preview Activity

Antes de tudo, é necessário declarar uma `PreviewActivity` no manifesto da aplicação para mostrar a pré-visualização:

{{% alert color="warning" %}}
Aqui não é necessário criar uma Activity de fato, pois ela já está criada internamente no Beagle. Você deve somente referência-la no manifesto indicando que ela faz parte do hall de Activities acessíveis nessa aplicação
{{% /alert %}}

Copie e cole a Activity abaixo em seu **`AndroidManifest`**:


```markup
...
    <application>
        ...
        <activity
            android:exported="true"
            android:name="br.com.zup.beagle.android.preview.PreviewActivity"
            android:theme="@style/AppTheme.NoToolbar"/>
    </application>
</manifest>
```


Assim como o`BeagleActivity`**,** você deve informar na declaração do `PreviewActivity` que o tema que não tem `ActionBar,` pois o Beagle já coordena esse componente.

{{% alert color="warning" %}}
Outro ponto importante é que você precisa habilitar a flag exportada que poderá começar via `ADB` 
{{% /alert %}}

## Visualizando telas no Emulador do Android Studio

Após realizar estas configurações, é só **começar o plugin no IntelliJ** clicando no simbolo do Beagle ao lado da função que anota `@BeaglePreview` e abrir o `PreviewActivity` para receber as atualizações do enviadas pelo `BFF` para renderizá-los automaticamente.

* Para começar uma `PreviewActivity` via `intent`, basta fazer a chamada com `intent` abaixo para visualizar a tela no emulador: 

```kotlin
startActivity(PreviewActivity.newIntent(this))
```

No entanto, se você preferir começá-la por meio por meio da **ADB**, é só chamar o método: 

```bash
adb shell am start -n applicationpackagename/br.com.zup.beagle.android.preview.PreviewActivity
```

{{% alert color="info" %}}
Para mais informações sobre o seu pacote, acesse seu pacote de atributo no seu arquivo `AndroidManifest`**.**
{{% /alert %}}

## Visualizando telas no Device Android

Você também pode visualizar a tela que esta criando utilizando um `device` Android. Para isso é necessário informar o `IP` da sua rede no `intent` que chama  tela de Live Preview. 

{{% alert color="info" %}}
A Activity de Live Preview se conecta a tela no `Backend` via uma conexão `websocket` do `client` \(emulador ou dispositivo físico\) utilizando o `BFF` através do plugin `BeaglePreview`. Dessa forma, o `client` precisa saber qual `IP` deve utilizar para estabelecer a conexão. 
{{% /alert %}}

* Para começar uma `PreviewActivity` via `device`, basta fazer a chamada com o `intent` abaixo para visualizar a tela no dispositivo: 

```kotlin
startActivity(
    PreviewActivity
        .newIntent(
            this, 
            endpoint = "http://seuIP:9721"
    )
)
```



### Passo 1: Instalar o submódulo

Para realizar a instalação, é necessário primeiro já ter seguido os [**passos de instalação do Beagle para iOS**](../get-started/installing-beagle/ios.md). Assim os passos seguintes variam de acordo com o método utilizado.

#### Utilizando via CocoaPods

 Adicione a dependência do LivePreview no seu arquivo Podfile:

```bash
...
pod 'Beagle/Preview'
...
```

Depois disso, você pode instalar essa nova dependência:

```bash
$ pod install
```

#### Utilizando via Carthage

Junto com o `Beagle.framework` gerado, haverá também o `BeaglePreview.framework`. Basta então adicioná-lo como mais uma dependência no seu projeto.

### Passo 2: Usar

Depois de instalado, é necessário agora apresentar o `UIViewController` do BeaglePreview utilizando o seguinte código **BeaglePreview.present\(in:self\)**. 

Uma vez que você fizer isso, ele irá se conectar ao plugin e começar a escutar as mensagens recebidas de mudança de layout. 

Abaixo, você encontra um exemplo hipotético de como fazer essa inicialização:

```swift
import Beagle

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
    }

    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)

        BeaglePreview.present(in: self)
    }

}
```



## Limitações 

Durante o uso do Live Preview, existem dois pontos importantes de ter em mente: 

1. O cliente do Live Preview pode renderizar qualquer alteração usando os elementos disponíveis quando o recurso foi iniciado. Os elementos personalizados que forem adicionados posteriormente requerem uma reconstrução e reinicialização do cliente. 
2. A anotação `@BeaglePreview` funciona com métodos públicos sem parâmetros, fora de qualquer classe ou em uma classe pública e que possui um construtor sem parâmetros, permitindo que ele  retorne um widget. Veja como nos trechos abaixo: 

```kotlin
class UnsupportedConstructor(thing: Any) {
    @BeaglePreview
    fun preview() = Text(":(")
}

class SupportedPrimaryConstructor {
    @BeaglePreview
    fun preview() = Text(":)")
}

class SupportedBySecondaryConstructor(thing: Any) {
    constructor() : this("solved")

    @BeaglePreview
    fun preview() = Text(":)")
}

class MethodSupport {
    @BeaglePreview
    fun supportedMethod() = Text(":)")
    
    @BeaglePreview
    fun unsupportedMethod(thing: Any) = Text(":(")
}

@BeaglePreview
fun unsupportedFunction(thing: Any) = Text(":(")

@BeaglePreview
fun supportedFunction() = Text(":)")
```
