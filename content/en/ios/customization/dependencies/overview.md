---
title: Overview
weight: 1
type: overview
description: >-
  In this section you will learn about Beagles' dependencies and their properties for iOS environment.
---

---

## Introduction

Your application can change Beagle's default behavior by customizing its dependencies.

From the `BeagleConfigurator` we can call the static method `setup(dependencies: BeagleDependencies)` which receives an object of type `BeagleDependencies`, where the customization of the Beagle dependencies can be done.

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

This structure has an empty constructor that assigns the default Beagle implementations, so just start it and make the customizations that are convenient.

Therefore, it is appropriate to make this initial configuration of Beagle during the application startup process, that is, in the `didFinishLaunchingWithOptions` of the `AppDelegate`:


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

To access these dependencies during application execution, Beagle provides a `@Injected` property wrapper that resolves an instance to the type of the variable (wrapped value). So suppose we want to clear the global context content at some point during application execution:

```swift
@Injected var globalContext: GlobalContextProtocol
globalContext.clear()
```

{{% alert color="warning" %}}
This property wrapper raises a `fatalError` if it is used to resolve a dependency that is not Beagles' or that is optional and has not been configured e.g:(logger, analyticsProvider, deepLinkHandler, networkClient), to work around that, simply use `@OptionalInjected` which will return nil if the dependency is not resolved.
{{% /alert %}}

```swift
@OptionalInjected var logger: LoggerProtocol?
logger?.log(Log.network(.httpRequest(request: .init(url: urlRequest))))
```

## Customizable Dependencies

Default dependencies implementation that can be customized.

### CoderProtocol

It is responsible for the encoding and decoding logic of the Beagle. Exposes the `register` method so that it is possible to register new components and actions.

Below there is an example of how to register a new component and a custom action:

```swift
dependencies.coder.register(component: CustomWidget.self)
dependencies.coder.register(action: CustomAction.self)
```

### UrlBuilderProtocol

It is responsible for creating a URL for a Beagle request from relative URLs that can be sent through BFF (in navigation flows for example) and a configured base URL.

See next an example on how to use it:

```swift
dependencies.urlBuilder = UrlBuilder(baseUrl: URL(string: "SUA URL BASE"))
```

### ThemeProtocol

Stores all your **styles** and knows how to apply them to your components.

Some widgets have a variable that allows you to define the style. The name of each one must be passed to the **Theme** dependency, so that that style can be used in its respective component.

To configure custom styles, follow these steps:

{{% alert color="info" %}}
You will use `Text` as a widget that has `UITextView` as its **UIKit view**. After that, you will apply your style changes to this view which will also have `font` and `textColor` customizations.
{{% /alert %}}

**Step 1:** Create a function that receives a representation of the `UIKit` of the Widget you want to apply styles at.

```swift
static func blackTextNormalStyle() -> (UITextView?) -> Void {
    return {
        $0?.font = .systemFont(ofSize: 16)
        $0?.textColor = .black
    }
}
```

**Step 2**: Instantiate AppTheme with an array of key values representing the style name and the corresponding function.

```swift
let theme = AppTheme(styles: [
    "myStyleName": blackTextNormalStyle
])
```

**Step 3**: Add the custom theme dependency to Beagles' dependencies

```swift
dependencies.theme = theme
```

### ViewClientProtocol

It is responsible for fetching screens from the backend using the `fetch` and `prefetch` methods. It has an internal implementation that simply assembles urls from `urlBuilder` and makes requests from `networkClient`.

{{% alert color="info" %}}
It is possible to implement a screen caching mechanism from the custom implementation of this dependency.
{{% /alert %}}

### ImageDownloaderProtocol

It is responsible for making remote image requests from the `fetchImage` method. Beagle has a default implementation for this dependency, which simply calls the `networkClient` to fetch the images and does not perform any caching.

## Optional Dependencies

Dependencies which are not default and therefore should be implemented before used.

### LoggerProtocol

It is responsible for triggering the log messages produced when running Beagle streams from the `log` method. These logs follow the `LogType` protocol, which has the following parameters:

- category: log subject;
- message: log message;
- level: classifies the criticity level.

### NetworkClientProtocol

It is responsible for executing **network requests**. Beagle does not provide a default implementation for this dependency, so it is **mandatory** that an implementation be provided for this dependency so that Beagle can communicate with the backend.

### DeepLinkHandlerProtocol

This handler is used for a [**deep link navigation**]({{< ref path="/ios/customization/dependencies/deeplink-handler.md" lang="en" >}}) action. The variable has a default value, you can add new screens or replace them with others in the application.

Below you can see a snippet on how to add a screen with a possible route for deep linking using a default value:

```swift
let deepLinkHandler = DeeplinkScreenManager.shared
deepLinkHandler["MyDeepLinkScreen"] = MyDeepLinkScreenClass.self
dependencies.deepLinkHandler = deepLinkHandler
BeagleConfigurator.setup(dependencies: dependencies)
```

### AnalyticsProviderProtocol

It is a protocol that can be implemented to track screen appearance or completion actions and click events.

See the example below:

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


Dependencies that are not customizable but have public APIs for configuring Beagle.

### NavigationProtocol

The `navigator` handles actions type of [**navigate**]({{< ref path="/api/actions/navigate/" lang="en" >}}) of your application.

Exposes custom navigation controller registration methods and [**navigation animation**]({{< ref path="/ios/customization/navigation-animation" lang="en" >}}).

### GlobalContextProtocol

It is responsible for managing the global context of Beagle, exposes `get`, `set` and `clear` functions, so that it is possible to access and change its attributes outside the scope of Beagle.

### OperationsProviderProtocol

It is responsible for providing context operations, exposes the `register` function so that it is possible to register custom operations in Beagle's default OperationsProvider.

### BundleProtocol

It is responsible for providing the application's `Bundle` so that Beagle has access to local images contained, it is initialized with `Bundle.main` but this can be easily changed:

```swift
dependencies.appBundle.bundle = Bundle(identifier: "myBundleId")
```