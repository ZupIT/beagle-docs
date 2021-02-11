---
title: Dependências do Beagle
weight: 155
description: >-
  Nesta seção, você encontra informações sobre as dependências do Beagle e suas
  propriedades para iOS.
---

---

## Introdução

A sua aplicação pode mudar o comportamento default do Beagle, a partir da customização de propriedades da instância do `Beagle.dependencies`.

Elas possuem um papel específico na capacidade do Beagle, esta é a razão pela qual você deve tratar o `Beagle.dependencies`como principal foco de customização para que as outras partes de sua aplicação possa ver as modificações feitas nas dependências.

Você deve confiar nas implementações padrão, como nos exemplos abaixo:

```swift
class BeagleDependencies: BeagleDependenciesProtocol {

    var urlBuilder: UrlBuilderProtocol
    var networkClient: NetworkClient
    var decoder: ComponentDecoding
    var appBundle: Bundle
    var theme: Theme
    var validatorProvider: ValidatorProvider?
    var deepLinkHandler: DeepLinkScreenManaging?
    var localFormHandler: LocalFormHandler?
    var repository: Repository
    var analytics: Analytics?
    var navigation: BeagleNavigation
    var preFetchHelper: BeaglePrefetchHelping
    var cacheManager: CacheManagerProtocol?
    var formDataStoreHandler: FormDataStoreHandling
    var windowManager: WindowManager
    var opener: URLOpener
    var globalContext: GlobalContext
    var isLoggingEnabled: Bool
    var logger: BeagleLoggerType
}

```

As dependências do Beagle deverão ser registradas no AppDelegate, veja o exemplo abaixo:

```swift
@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication,
        didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

        let dependencies = BeagleDependencies()
        dependencies.theme = AppTheme.theme
        dependencies.urlBuilder = UrlBuilder(baseUrl: URL(string: .baseURL))
        dependencies.navigation.defaultAnimation = .init(
            pushTransition: .init(
                type: .fade,
                subtype: .fromRight, duration: 0.1
            ),
            modalPresentationStyle: .formSheet
        )
        dependencies.isLoggingEnabled = true
        dependencies.decoder.register(
            component: CustomComponent.self,
            named: "CustomComponent"
        )
        dependencies.decoder.register(
            action: CustomAction.self,
            named: "CustomAction")

        Beagle.dependencies = dependencies

        let rootViewController = MainScreen().screenController()
        window?.rootViewController = rootViewController

        return true
    }
}

```

## UrlBuilder

Configura uma URL base para sua aplicação, é usada quando os fluxos de navegação via Beagle serão definidos, você pode usar uma URL relativa.

Veja abaixo um exemplo de como usar:

```swift
dependencies.urlBuilder = UrlBuilder(baseUrl: URL(string: "SUA URL BASE"))
```

## NetworkClient

É responsável por executar **network requests**. A sua aplicação deverá ser customizada nesta parte porque cada projeto possui uma demanda específica para **network layer**_._ Por isso, a implementação padrão pode não servir dependendo das necessidades do seu negócio.

## Decoder

Transforma um JSON em **Componentes do Beagle \(Seção Elementos\)**. Ele já possui uma lógica para decodificar todos os componentes default. Se você precisar trabalhar com componentes customizáveis, você pode registrá-los nesta instância.

Veja abaixo um exemplo de como registrar um componente e uma action customizada:

```swift
Beagle.dependencies.decoder.register(
    component: CustomWidget.self,
    named: "CustomWidget"
)

Beagle.dependencies.decoder.register(
    action: CustomAction.self,
    named: "CustomAction"
)
```

## AppBundle

Você pode fornecer um pacote para sua aplicação de modo que o Beagle possa acessar seus recursos, como por exemplo, imagens, fontes, cores, etc.

## Theme

Armazena todos os seus **styles** e sabe como aplicá-los em seus componentes.

Alguns widgets possuem uma variável que permite você definir o estilo. O nome de cada uma deverá ser repassada à dependência do **Theme**, de modo que aquele estilo possa ser usado no seu respectivo componente.

Para configurar os estilos customizados, siga os seguintes passos:

{{% alert color="info" %}}
Você irá usar o `Text` como um widget que possui o `UITextView` como seu **UIKit view**. Depois disso, você irá aplicar suas mudanças de estilo para esse view nos quais terão também customizações de `font` e `textColor`.
{{% /alert %}}

**Passo 1:** crie uma função que irá receber a representação o `UIKit` com a representação do widget que você quer aplicar o estilo.

```swift
static func blackTextNormalStyle() -> (UITextView?) -> Void {
    return {
        $0?.font = .systemFont(ofSize: 16)
        $0?.textColor = .black
    }
}
```

**Passo 2**: crie uma instância concreta do `AppTheme` com os nomes dos seus estilos e as funções correspondentes.

```swift
let theme = AppTheme(styles: [
    "myStyleName": blackTextNormalStyle
])
```

**Passo 3**: atribua sua instância Theme às dependências do Beagle.

```swift
Beagle.dependencies.theme = theme
```

**Passo 4**: agora, você pode usar o **Text** com sua propriedade de **style** definida e assim configurar o nome que você definiu para o seu style customizado.

```swift
Text("Some text", style: "myStyleName")
```

## ValidatorProvider

Valida a customização que será realizada quando o widget **Form** for utilizado.

## DeepLinkHandler

Este handler é usado para uma ação de [**deep link navigation**]({{< ref path="/resources/customization/beagle-for-android/deep-link-handler" lang="pt" >}}). A variável possui um valor default, você pode adicionar novas telas ou substituir por outras na aplicação.

Abaixo, você encontra um comando de como adicionar uma tela com um possível roteamento para deep linking usando um valor default:

```swift
let deepLinkHandler = DeeplinkScreenManager.shared
deepLinkHandler["MyDeepLinkScreen"] = MyDeepLinkScreenClass.self
Beagle.dependenciesdeepLinkHandler = deepLinkHandler
```

## LocalFormHandler

Sua aplicação pode lidar com o envio de formulário por conta própria usando o `FormLocalAction`.

O LocalFormHandler definido nas dependências do Beagle será usado para executar isso.

## Repository

É responsável pelas três principais operações no:

1. `fetchComponent`: Orquestra a requisição para buscar widgets no servidor.
2. `submitForm`: Submete forms no widget.
3. `fetchImage`: Busca imagens para o **networkImage**;

## Analytics

É um protocolo que pode ser implementado para rastrear ações de aparecimento da tela ou sua finalização e eventos de clique.

Veja o exemplo abaixo:

```swift
class AnalyticsSample: Analytics {
    func trackEventOnScreenAppeared(_ event: AnalyticsScreen) {
        print("Screen \(event.screenName) appeared")
    }

    func trackEventOnScreenDisappeared(_ event: AnalyticsScreen) {
        print("Screen \(event.screenName) disappeared")
    }

    func trackEventOnClick(_ event: AnalyticsClick) {
        print("Button touch with:\ncategory = \(event.category)\nlabel = \(event.label ?? "empty")\nvalue = \(event.value ?? "empty")")
    }
}
```

## Navigation

O `navigation` lida com tipo de ações de [**navigate**]({{< ref path="/api/actions/navigate/" lang="pt" >}}) da sua aplicação. Existe uma implementação que é usada como valor default, mas que também pode ser substituída por uma classe que está de acordo com BeagleNavigation

Nesse mesmo atributo também é possível definir uma [**animação de navegação**]({{< ref path="/resources/customization/beagle-for-ios/navigation-animation" lang="pt" >}}).

## PreFetchHelper

Este componente é usado como pré-busca do [**`BeagleScreenViewControllers`**]({{< ref path="/resources/customization/beagle-for-ios/beagle-screen-view-controller" lang="pt" >}}) e entrega uma experiência para o usuário mais fluida. Ela já possui um valor e pode ser alterado para se adequar em que você precisa.

A pré-busca é acionada quando há um **navigation widget** de modo que você possa fazer um pré carregamento dos dados das possíveis próximas telas, evitando delays na navegação. Este comportamento pode ser desativado.

## CacheManager

É responsável por manter e gerenciar o cache do conteúdo server-driven da aplicação.

## FormDataStoreHandler

É uma forma de persistir os dados de um formulário.

## WindowManager

É responsável por gerenciar uma janela.

## Opener

É um protocolo que tem um método que abre URL caso necessite navegar para um link externo.

## GlobalContext

Variável para definir um contexto de escopo global.

## IsLoggingEnabled

É uma variável boolean para habilitar ou desabilitar os logs e já vem habilitada por padrão.

## Logger

O logger é uma variável do tipo BeagleLoggerType que organiza os logs da aplicação. Esses logs seguem o protocolo LogType, o qual tem os parâmetros:

- category: assunto do log;
- message: mensagem do log;
- level: classifica o nível crítico.

{{% alert color="info" %}}
É possível criar um logger customizado, o qual possuí categorias especificas da aplicação.
{{% /alert %}}
