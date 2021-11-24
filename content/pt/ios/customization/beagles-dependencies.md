---
title: Dependências do Beagle
weight: 155
description: >-
  Nesta seção, você encontra informações sobre as dependências do Beagle e suas
  propriedades para iOS.
---

---

## Introdução

A sua aplicação pode mudar o comportamento default do Beagle, a partir da customização das dependencias dele.

A partir do `BeagleConfigurator` podemos chamar o método estático `setup(dependencies: BeagleDependencies)` que recebe um objeto do tipo `BeagleDependencies`, onde pode ser feito a customização das dependencias do Beagle.

```swift
public struct BeagleDependencies {
    
    // MARK: Custom Dependencies
    public var coder: CoderProtocol
    public var urlBuilder: UrlBuilderProtocol
    public var theme: ThemeProtocol
    public var viewClient: ViewClientProtocol
    public var imageDownloader: ImageDownloaderProtocol
    public var logger: LoggerProtocol?
    public var analyticsProvider: AnalyticsProviderProtocol?
    public var deepLinkHandler: DeepLinkScreenManagerProtocol?
    public var networkClient: NetworkClientProtocol?
    
    // MARK: Public Dependencies
    public var appBundle: BundleProtocol
    public let globalContext: GlobalContextProtocol
    public var navigator: NavigationProtocol
    public var operationsProvider: OperationsProviderProtocol
}
```

Essa estrutura possui um construtor vazio que atribui as implementações default do Beagle, então basta iniciá-lo e fazer as customizações que forem convenientes.

Dessa forma, é adequado fazer essa configuração inicial do Beagle durante o processo de inicialização da aplicação, isto é, no `didFinishLaunchingWithOptions` do `AppDelegate`:

```swift
@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication,
        didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

        var dependencies = BeagleDependencies()
        dependencies.theme = AppTheme.theme
        dependencies.urlBuilder = UrlBuilder(baseUrl: URL(string: .baseURL))
        dependencies.navigator.setDefaultAnimation(.init(
            pushTransition: .init(type: .fade, subtype: .fromRight, duration: 0.1),
            modalPresentationStyle: .formSheet
        ))
        dependencies.coder.register(type: CustomComponent.self)
        dependencies.coder.register(type: CustomAction.self)

        BeagleConfigurator.setup(dependencies: dependencies)

        let rootViewController = MainScreen().screenController()
        window?.rootViewController = rootViewController

        return true
    }
}

```

## Dependencias Customizáveis

Dependencias que apresentam uma implementação default mas podem ser customizadas.

### CoderProtocol

É responsável pela parte de codificação e decodificação do Beagle. Expõe o método `register` para que seja possível registrar novos componentes e ações no Beagle.

Veja abaixo um exemplo de como registrar um novo componente e uma action customizada:

```swift
dependencies.coder.register(component: CustomWidget.self)

dependencies.coder.register(action: CustomAction.self)
```

### UrlBuilderProtocol

É responsavel por criar uma URL para uma requisição do Beagle a partir de URLs relativas que podem ser enviadas pelo BFF (em fluxos de navegação por exemplo) e uma URL base configurada.

Veja abaixo um exemplo de como usar:

```swift
dependencies.urlBuilder = UrlBuilder(baseUrl: URL(string: "SUA URL BASE"))
```

### ThemeProtocol

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
dependencies.theme = theme
```

### ViewClientProtocol

É responsável por realizar a busca de telas no backend a partir do método `fetch` e `prefetch`. Possui uma implementação interna que simplesmente monta as urls a partir do `urlBuilder` e faz a requisições a partir do `networkClient`.

{{% alert color="info" %}}
É possível implementar um mecanismo de cache de telas a partir da implementação customizada dessa dependencia.
{{% /alert %}}

### ImageDownloaderProtocol

É responsável por fazer requisições de imagens remotas a partir do método `fetchImage`. O Beagle possui uma implementação default para essa dependencia, que simplesmente chama o `networkClient` para buscar as imagens e não realiza nenhum tipo de cache.

## Dependencias Opcionais

Dependencias que não possuem uma implementação default e portanto devem ser implementadas para o funcionamento correto do Beagle.

### LoggerProtocol

É responsável por disparar as menssagens de log produzidas durante a execução de fluxos do Beagle a partir do método `log`. Esses logs seguem o protocolo LogType, o qual tem os parâmetros:

- category: assunto do log;
- message: mensagem do log;
- level: classifica o nível crítico.

### NetworkClientProtocol

É responsável por executar **network requests**. O Beagle não fornece uma implementação default para essa dependencia, logo, é **obrigatório** que seja fornecida uma implementação para essa dependencia para que o Beagle consiga se comunicar com o backend.

### DeepLinkHandlerProtocol

Este handler é usado para uma ação de [**deep link navigation**]({{< ref path="/android/customization/deep-link-handler.md" lang="pt" >}}). A variável possui um valor default, você pode adicionar novas telas ou substituir por outras na aplicação.

Abaixo, você encontra um comando de como adicionar uma tela com um possível roteamento para deep linking usando um valor default:

```swift
let deepLinkHandler = DeeplinkScreenManager.shared
deepLinkHandler["MyDeepLinkScreen"] = MyDeepLinkScreenClass.self
dependencies.deepLinkHandler = deepLinkHandler
BeagleConfigurator.setup(dependencies: dependencies)
```

### AnalyticsProviderProtocol

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

## Dependencias publicas não customizáveis

Dependencias que não são customizáveis mas apresentam APIs públicas para configuração do Beagle.

### NavigationProtocol

O `navigator` lida com tipo de ações de [**navigate**]({{< ref path="/api/actions/navigate/" lang="pt" >}}) da sua aplicação.

Expõe métodos de registro de navigation controller customizadas e de [**animação de navegação**]({{< ref path="/ios/customization/navigation-animation" lang="pt" >}}).

### GlobalContextProtocol

É reponsavel por gerenciar o contexto global do Beagle, expõe funções de `get`, `set` e `clear`, para que seja possível acessar e alterar atributos dele fora do escopo do Beagle.

### OperationsProviderProtocol

É responsavel por prover as operações de contexto, expõe a função `register` para que seja possível registrar operações customizadas no OperationsProvider default do Beagle.

### BundleProtocol

É responsavel por prover o `Bundle` da aplicação para que o Beagle tenha acesso a imagens locais contidas, é inicializado com o `Bundle.main` mas esse pode ser facilmente alterado:

```swift
dependencies.appBundle.bundle = Bundle(identifier: "myBundleId")
```