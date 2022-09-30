---
title: Multiple configurations
weight: 2
description: >-
  On this section, you'll find the step by step on how to work with multiple configurations
---

---
### What is it? 

The **Beagle Multiple Configurations** is a way to start a beagle instance for the current server driven flow using a unique beagle configuration. So you can hold several instances (configurations) across your application.

## Configuring Multiple Instances of Beagle

You will see below how to configure your application for this feature.

### Defining a configuration

To define a new configuration you need to create a `BeagleDependenciesFactory` object and customize the dependencies you want.

In this step you can configure all dependencies that is also supported in [BeagleDependencies]({{< ref path="/ios/customization/dependencies/overview.md" lang="en" >}})

The properties in `BeagleDependenciesFactory` receive a Factory of the type needed:

```swift
public struct Factory<T> {
    var create: (DependenciesContainerResolving) -> T
    
    public init(_ createBlock: @escaping (DependenciesContainerResolving) -> T) {
        self.create = createBlock
    }
}
```

This factory has a closure `create` that will be used in dependencies configurations. This closure receives the `DependenciesContainerResolving` for inner dependencies resolving.

As a example we can see bellow configuring networkClient, analyticsProvider and logger:

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
Note that NetworkClientDefault receives the resolver through init. This is necessary on all dependencies that has inner dependencies is resolved with `@Injected` or `@OptionalInjected`.
{{% /alert %}}

For the NetworkClientDefault implementation we have:

```swift
public class NetworkClientDefault: NetworkClientProtocol {

    @OptionalInjected var logger: LoggerProtocol?
    
    init(_ resolver: DependenciesContainerResolving) {
        _logger = OptionalInjected(resolver)
    }

    // your implementation here
}
```

### Acessing dependencies

To access the new dependencies created you can instantiate a `BeagleConfiguration` and access the dependencies through the `dependencies` property:

```swift
public class BeagleConfiguration {
    public init(dependencies: BeagleDependenciesFactory)
    
    public var dependencies: BeagleEnviromentProtocol
}

public protocol BeagleEnviromentProtocol {
    var coder: CoderProtocol { get }
    var navigator: NavigationProtocol { get }
    var operationsProvider: OperationsProviderProtocol { get }
    var logger: LoggerProtocol { get }
    var globalContext: GlobalContextProtocol { get }
}
```

You can register new components, operations, actions, navigationController:

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

### Configuring a beagle entry point to use the new configuration

For create a new entry-point with configuration you can pass the config via initalizer:

- `BeagleScreenViewController(_:controllerId:config:)`
- `BeagleView(_:config:beagleViewStateObserver:)`

Example of a full configuration:

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
