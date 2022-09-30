---
title: Múltiplas
weight: 2
description: >-
  Nesta seção, você encontrará um passo a passo em como trabalhar com múltiplas configurações
---

---
## O que é isso?

O **Beagle Múltiplas Configurações** é uma maneira de inicializar uma instância do Beagle para o fluxo server driven corrente usando uma configuração única. Desta forma você pode manter várias instâncias (configurações) na sua aplicação.

## Configurando múltiplas instâncias do Beagle

Você verá abaixo como configurar sua aplicação para usar esta funcionalidade.

### Definindo uma configuração

Para definir uma nova configuração você precisa ciar um objeto `BeagleDependenciesFactory` e customizar as dependências que desejar.

Neste passo você pode configurar todas as dependências também suportadas pelo [BeagleDependencies]({{< ref path="/ios/customization/dependencies/overview.md" lang="pt" >}})

As propriedades no `BeagleDependenciesFactory` recebem uma `Factory` do tipo necessário:

```swift
public struct Factory<T> {
    var create: (DependenciesContainerResolving) -> T
    
    public init(_ createBlock: @escaping (DependenciesContainerResolving) -> T) {
        self.create = createBlock
    }
}
```

Esta factory tem uma closure `create` que será usada na configuração das dependências. Esta closure recebe o `DependenciesContainerResolving` para resolução de dependências internas.

Como um exemplo podemos ver abaixo como configurar o networkClient, analyticsProvider e logger:

```swift
var dependencies = BeagleDependenciesFactory()
dependencies.networkClient = Factory { resolver in
    NetworkClientDefault(resolver)
}
dependencies.theme = Factory { _ in
    AppTheme.theme
}
dependencies.urlBuilder = Factory { _ in
    UrlBuilder(baseUrl: URL(string: .baseURL))
}
dependencies.analyticsProvider = Factory { _ in
    AnalyticsProviderDemo()
}
dependencies.logger = Factory { _ in
    BeagleLoggerDefault()
}
```

{{% alert color="warning" %}}
Note que o `NetworkClientDefault` recebe um resolver no init. Into é necessário em todas as dependências que possuem dependências internas e usam `@Injected` ou `@OptionalInjected`.
{{% /alert %}}

Para a implementação do NetworkClientDefault temos:

```swift
public class NetworkClientDefault: NetworkClientProtocol {

    @OptionalInjected var logger: LoggerProtocol?
    
    init(_ resolver: DependenciesContainerResolving) {
        _logger = OptionalInjected(resolver)
    }

    // sua implementação aqui
}
```

### Acessando as dependências

Para acessar as novas dependências criadas você poderá instanciar um `BeagleConfiguration` e acessar suas dependências por meio da propriedade `dependencies`:

```swift
public protocol BeagleEnviromentProtocol {
    var coder: CoderProtocol { get }
    var navigator: NavigationProtocol { get }
    var operationsProvider: OperationsProviderProtocol { get }
    var logger: LoggerProtocol { get }
    var globalContext: GlobalContextProtocol { get }
}
```

Você poderá registrar novos componentes, operações, ações, navigationController:

```swift
let configuration = BeagleConfiguration(dependencies: dependencies)

// custom components and actions
configuration.dependencies.coder.register(type: CustomText.self, named: "custom-text")
configuration.dependencies.coder.register(type: CustomAction.self, named: "custom-action")

// custom operation
configuration.dependencies.operationsProvider.register(operationId: "sum", handler: sumHandler)

// custom navigation
configuration.dependencies.navigator.registerNavigationController(builder: CustomBeagleNavigationController.init, forId: "CustomBeagleNavigation")
```

### Configurando um ponto de entrada para utilizar a nova configuração

Para configurar um novo ponto de estrada usando uma configuração específica você poderá passar a configuração via inicializador:

- `BeagleScreenViewController(_:controllerId:config:)`
- `BeagleView(_:config:beagleViewStateObserver:)`

Exemplo de uma configuração completa:

```swift
// in you AppDelegate

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        
    window = UIWindow(frame: UIScreen.main.bounds)

    // Defining a configuration
    var dependencies = BeagleDependenciesFactory()
    dependencies.networkClient = Factory { resolver in
        NetworkClientDefault(resolver)
    }
    dependencies.logger = Factory { _ in
        BeagleLoggerDefault()
    }
    
    // Acessing dependencies
    let configuration = BeagleConfiguration(dependencies: dependencies)
    configuration.dependencies.coder.register(type: CustomText.self, named: "custom-text")

    // Configuring a beagle entry point
    window?.rootViewController = BeagleScreenViewController(ScreenType.Remote(url: "endpoint"), config: configuration)
    window?.makeKeyAndVisible()

    // you can define other configurations and instantiate other BeagleSreenViewController
    
    return true
}
```
