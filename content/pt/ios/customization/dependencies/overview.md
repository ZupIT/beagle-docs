---
title: Overview
weight: 1
type: overview
description: >-
  Esta seção descreve as dependências do Beagles e suas propriedades para ambientes iOS.
---

---

## O que é isso?

O arquivo `dependecies` é onde o comportamento padrão do Beagle pode ser alterado em sua aplicação.

## Como funciona?

O `BeagleConfigurator` chama o método estático `setup(dependencies: BeagleDependencies)` que recebe um objeto `BeagleDependencies`. Este objeto conterá as propriedades de todas as dependências. Abaixo temos um exemplo desse objeto:

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
    public var imageProvider: ImageProviderProtocol
    
    // MARK: Public Dependencies
    public var appBundle: BundleProtocol
    public let globalContext: GlobalContextProtocol
    public var navigator: NavigationProtocol
    public var operationsProvider: OperationsProviderProtocol
}
```

{{% alert color="success" %}}
Essa estrutura tem um construtor vazio que atribui as implementações padrão do Beagle:

* inicie-o e faça as personalizações necessárias.
{{% /alert %}}

{{% alert color="warning" %}}
O Beagle tem outra maneira de inicialização que suporta múltiplas configurações em sua aplicação, para maiores detalhes veja: [**Múltiplas configurações**]({{< ref path="/ios/customization/dependencies/multiple-configurations.md" lang="pt" >}})

{{% /alert %}}

É importante que se faça essa *configuração* das dependências durante o processo de inicialização da aplicação, ou seja, na função `AppDelegate` `didFinishLaunchingWithOptions` conforme mostrado abaixo:

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

{{% alert color="success" %}}
Para acessar essas dependências durante a execução do aplicativo, o Beagle fornece um wrapper de propriedade `@Injected` que resolve uma instância para o tipo da variável (valor encapsulado).
{{% /alert %}}

### Exemplos

Abaixo temos um exemplo de como limpar o conteúdo do contexto global em algum momento ao executar a aplicação:

```swift
@Injected var globalContext: GlobalContextProtocol
globalContext.clear()
```

{{% alert color="warning" %}}
Este wrapper de propriedade gera um `fatalError` se for usado para resolver uma dependência que não seja do Beagle ou que seja opcional e não tenha sido configurada, por exemplo:(logger, analyticsProvider, deepLinkHandler, networkClient), para contornar isso, basta usar `@OptionalInjected` que retornará nil se a dependência não for resolvida, conforme mostrado abaixo.
{{% /alert %}}

```swift
@OptionalInjected var logger: LoggerProtocol?
logger?.log(Log.network(.httpRequest(request: .init(url: urlRequest))))
```

## Dependências customizáveis

Aqui seguem algumas implementações de dependências padrão que podem ser personalizadas.

### CoderProtocol

Ele é responsável pela codificação e decodificação da lógica do Beagle. Ele expõe o método `register` para que seja possível registrar novos componentes e ações.

Abaixo você encontra um exemplo de como registrar um novo componente e uma ação personalizada:

```swift
dependencies.coder.register(component: CustomWidget.self)
dependencies.coder.register(action: CustomAction.self)
```

### UrlBuilderProtocol

Ele é responsável por criar uma URL de requisição do Beagle a partir de URLs relativas que são recebidas de um BFF (nos fluxos de navegação, por exemplo) e uma URL base configurada.

Este é um exemplo de como usar essa configuração:

```swift
dependencies.urlBuilder = UrlBuilder(baseUrl: URL(string: "SUA URL BASE"))
```

### ThemeProtocol

Ele armazena todos os seus **estilos** e sabe como aplicá-los aos seus componentes.

Alguns widgets possuem uma variável que permite definir o estilo. O nome de cada um deve ser passado para a dependência **Theme**, para que esse estilo possa ser utilizado em seu respectivo componente.

Para configurar estilos personalizados, siga estas etapas:

{{% alert color="info" %}}
Você usará `Text` como um widget que tem `UITextView` como sua **UIKit view**. Depois disso, você aplicará suas alterações de estilo a esta visualização, que também terá as personalizações `font` e `textColor`.
{{% /alert %}}

**Passo 1:** crie uma função que receba uma representação do `UIKit` do Widget ao qual você deseja aplicar estilos.

```swift
static func blackTextNormalStyle() -> (UITextView?) -> Void {
    return {
        $0?.font = .systemFont(ofSize: 16)
        $0?.textColor = .black
    }
}
```

**Passo 2**: Instancie AppTheme com uma matriz de valores de chave representando o nome do estilo e a função correspondente.

```swift
let theme = AppTheme(styles: [
    "myStyleName": blackTextNormalStyle
])
```

**Passo 3**: adicione a dependência de tema personalizado às dependências do Beagle

```swift
dependencies.theme = theme
```

### ViewClientProtocol

Ele é responsável por buscar telas do backend usando os métodos `fetch` e `prefetch`. Ele tem uma implementação interna que monta urls de um `urlBuilder` e faz uma requisição do `networkClient`.

{{% alert color="info" %}}
É possível implementar um mecanismo de cache de tela a partir desta implementação customizada de dependência.
{{% /alert %}}

### ImageDownloaderProtocol

Ele é responsável por fazer requisições de imagens remotas a partir do método `fetchImage`. O Beagle tem uma implementação padrão para essa dependência, que simplesmente chama o `networkClient` para buscar as imagens e não executa nenhum cache.

## Optional Dependencies

Estas são dependências que não estão no padrão e, portanto, devem ser implementadas antes de serem usadas.

### LoggerProtocol

Ele é responsável por acionar as mensagens de log produzidas ao executar streams do Beagle a partir do método `log`. Esses logs seguem o protocolo `LogType`, que possui os seguintes parâmetros:

* category: categoria do log;
* message: mensagem do log;
* level: classifica o nivel crítico do erro.

### NetworkClientProtocol

Ele é responsável por executar **network requests**. O Beagle não fornece uma implementação padrão para essa dependência, portanto, é **obrigatório** que seja fornecida uma implementação para essa dependência para que o Beagle possa se comunicar com o back-end.

### DeepLinkHandlerProtocol

Esse manipulador é usado para uma ação de [**deep link navigation**]({{< ref path="/ios/customization/dependencies/deeplink-handler.md" lang="en" >}}). A variável tem um valor padrão, você pode adicionar novas telas ou substituí-las por outras na aplicação.

Abaixo você pode ver um código de como adicionar uma tela com uma possível rota para um link direto usando um valor padrão:

```swift
let deepLinkHandler = DeeplinkScreenManager.shared
deepLinkHandler["MyDeepLinkScreen"] = MyDeepLinkScreenClass.self
dependencies.deepLinkHandler = deepLinkHandler
BeagleConfigurator.setup(dependencies: dependencies)
```

### AnalyticsProviderProtocol

É um protocolo que pode ser implementado para rastrear carregamentos de tela, ações e eventos de clique em componentes Beagle.

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

## Dependências públicas que não são customizáveis

Aqui listamos algumas dependências que não podem ser customizadas, mas possuem APIs públicas para configurar o Beagle.

### NavigationProtocol

O `navigator` lida com as ações [**navigate**]({{< ref path="/api/actions/navigate/" lang="en" >}}) em seu aplicativo.

Ele expõe métodos de registro de um `navigation controler` personalizado e uma [** animação de navegação**]({{< ref path="/ios/customization/navigation-animation" lang="en" >}}).

### GlobalContextProtocol

Ele é responsável por gerenciar o contexto global do Beagle, ele expõe as funções `get`, `set` e `clear`, para que seja possível acessar e alterar os atributos do contexto global fora do escopo do Beagle.

### OperationsProviderProtocol

Ele é responsável por fornecer operações de contexto, ele expõe a função `register` para que seja possível registrar operações personalizadas no OperationsProvider padrão do Beagle.

### BundleProtocol

Ele é responsável por fornecer o `Bundle` da aplicação para que o Beagle tenha acesso às imagens locais contidas, ele é inicializado com `Bundle.main` mas isso pode ser facilmente alterado:

```swift
dependencies.appBundle.bundle = Bundle(identifier: "myBundleId")
```
