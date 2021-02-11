---
title: Beagle's dependencies
weight: 141
description: You will find here information about Beagle's iOS dependencies and properties.
---

---

## Introduction

Your application can change Beagle's default behaviour with the properties customization of the `Beagle.dependencies` instantiation.

They have a specific role in Beagle's capacity, this is the reason you have to deal `Beagle.dependencies` as the main focus on your customization, so that other parts of your application  are able to see the changes you made in the dependencies.

You must rely on the default implementation, like the example below: 

```text
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

Beagle's dependencies must be registered in the `AppDelegate` class. Check out the example below:

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

It configures the base URL to your application, it's used when the navigation flow via Beagle are defined, you can use a relative URL. 

See how to use it below: 

```swift
dependencies.urlBuilder = UrlBuilder(baseUrl: URL(string: "YOUR BASE URL
```

## NetworkClient

It can run **network requests**. Your application must be customized here, because every project has a specific network layer. For that, the default implementation cannot work on your project. 

## Decoder

It transforms a JSON into Beagle's Component \(Elements Section\). It already has a logic to decode all the default components. If you have to work with customized components, you can register them in this instance.

See below how to register a component and a customized action: 

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

You can provide a package for your application in a way Beagle can access your resources, for example, images, fonts, colors, etc.

## Theme

It stores all your **styles** and it knows how to apply them in your components. Some widgets have a variable that allows you to define the style. Each name must be passed on the dependency of **theme**, so that style may be used in your component. 

To configure the customized styles, follow the next steps: 

{{% alert color="info" %}}
You will use `text` as a widget that has `UITextView` as your **UIKit** view. After that, you will apply your style changes to this view which will have `font` and `textColor` customization. 
{{% /alert %}}

**Step 1:** create a function that it will receive a `UIKit` widget representation of what you want to apply to the style.

```swift
static func blackTextNormalStyle() -> (UITextView?) -> Void {
    return {
        $0?.font = .systemFont(ofSize: 16)
        $0?.textColor = .black
    }
}
```

**Step  2**: create a concrete instance of `AppTheme` with the names of your style and its functions.

```swift
let theme = AppTheme(styles: [
    "myStyleName": blackTextNormalStyle
])
```

  **Step  3**: assign your Theme instance to Beagle's dependencies. 

```swift
Beagle.dependencies.theme = theme
```

  **Step  4**:  now, you can use **Text** with your **style** properties and then configure the name your defined for your customized style. 

```swift
Text("Some text", style: "myStyleName")
```

## ValidatorProvider

Validates the customization that it will be made when the **Form** widget will be used. 

## DeepLinkHandler

This handler is used for a [**deep link navigation**](/resources/customization/beagle-for-android/deep-link-handler/) action. The variable has a default value, you can add new screens or replace for other in the application. 

You will find how to add a screen with a possible deep linking routing using a default value below: 

```swift
let deepLinkHandler = DeeplinkScreenManager.shared
deepLinkHandler["MyDeepLinkScreen"] = MyDeepLinkScreenClass.self
Beagle.dependenciesdeepLinkHandler = deepLinkHandler
```

## LocalFormHandler

Your application can deal with form being send by the user using `FormLocalAction`.

LocalFormHandler defined on Beagle's dependencies will be used to run this. 

## Repository

It is responsible for three main operations on:

1. `fetchComponent`: orchestrate the request to search widgets on the server. 
2. `submitForm`:  submit forms on widget. 
3. `fetchImage`: search images for **networkImage.**

## Analytics

It is a protocol that can be implemented to track the appearence of the screen or its closing or a click event. 

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

## Navigation

`navigation` deals with the [**navigate**](/api/actions/navigate) types of action in your application. There is one implementation that it is used with default value, but that it can be replaced for a [**BeagleNavigation**](/resources/customization/beagle-for-ios/navigation-animation) class. 

On this same attribute is also possible to define a [**navigation animation**](/resources/customization/beagle-for-android/navigation-animation). 

## preFetchHelper

This component is used to search  [**`BeagleScreenViewControllers`**](/resources/customization/beagle-for-android/navigation-animation) and delivers a fluid experience to the user. It already has a value, it can be altered to fit what you need.

The pre search is used when there is a navigataion widget in a way you can download all the data possible in the next screen, avoiding navigation delays. This behaviour can be deactivated.  

## CacheManager

It is responsible to keep and manage the server-driven content cache of your application.

## FormDataStoreHandler

It is a way to persist the form data. 

## WindowManager

It is responsible to manage a window. 

## Opener

It is a protocol that has a method and opens an URL in case you need to navigate through an external link. 

## GlobalContext

Variable that defines a global scope context. 

## IsLoggingEnabled

It is a boolean variable that enables or disables the logs. It is enabled by default. 

## Logger

Logger is a variable type  `BeagleLoggerType` that organizes the application's logs. These logs follow a LogType protocol, which there are parameters:

* category:  log's matter;
* message: log's message;
* level: ranks the critical level. 

{{% alert color="info" %}}
It is possible to create a customized logger, which it has the application's specifics categories.
{{% /alert %}}
