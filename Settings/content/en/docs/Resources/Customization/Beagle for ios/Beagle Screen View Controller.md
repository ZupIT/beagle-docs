---
title: Beagle Screen View Controller
weight: 142
description: 'This section shows information on how to create the Beagle Screen View Controller class'
---

---

## Introduction

The `BeagleScreenViewController` is a class that **controls** how views will be presented at the application. It works exactly as a `UIViewController`.

## how to use it?

Create an object with a BeagleScreenViewController type listing a screenType on its initialization, that could be done in three ways:

* **1. Remote:** Receives an URL with a server-driven component. If there was an error when loading your server-driven screen, an optional fallback view can be configured, which would be a screen build on the frontend.
You can also configure a header through `additionalData` parameter.

* **2. Declarative:** Receives a declarative screen (created on your frontend side on Swift).

* **3. DeclarativeText:** Receives a screen in a JSON format.

## Class constructor: 

```swift
class BeagleScreenViewController {

    public convenience init(
        _ screenType: ScreenType,
          controllerId: String? = nil
         ) {
        self.init(
            viewModel: .init(screenType: screenType), controllerId: controllerId
        )
        self.navigationControllerId = controllerId
    }
}

public enum ScreenType {
    case remote(Remote)
    case declarative(Screen)
    case declarativeText(String)
}

```

 ### Initialization examples:  

```swift
// Declarative 
let viewController = BeagleScreenViewController(
    .declarative(Home.screen())
    )
                         
// Remote with relative URL
let viewController = BeagleScreenViewController(
    .remote( .init(
        url: "/home", 
        fallback: nil))
    )
                                   
// Remote with a absolute URL
let viewController = BeagleScreenViewController(
    .remote(.init(
        url: "http://localhost:8080/home",
        fallback: Home().screen))
    )

// DeclarativeText
let viewController = BeagleScreenViewController(
        .declarativeText(
            """
            {
                "_beagleComponent_": "beagle:text",
                "text": "Hello World!"
            }
            """
        )
    )

```

* The first example instantiate a `BeagleScreenViewController` with a declarative screenType that will receive a declarative screen.

* The second example instantiate a `BeagleScreenViewController` with a remote screenType using a relative URL. You must have implemented a base URL to use a relative path.
  
* The third example instantiate a `BeagleScreenViewController` also with a remote screenType using an absolute URL and listing a fallback view.

* The last example instantiate a `BeagleScreenViewController` with a declarativeText screenType that receives a screen on a JSON format.

{{% alert color="success" %}}
## Custom Beagle Navigation Controller

The `BeagleNavigationController` is a `UINavigationController class` focused on observing server-driven screen states to know when it starts or ends.

[**Click here to know more about this component!**](/docs/resources/customization/beagle-for-ios/custom-beagle-navigation-controller/)

{{% /alert %}}
