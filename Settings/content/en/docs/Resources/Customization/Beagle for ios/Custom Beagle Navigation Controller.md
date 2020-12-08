---
title: Custom Beagle Navigation Controller
weight: 145
description: >-
  You will find how to use Beagle Navigation Controller to handle the
  server-driven screen state.
---

---

## Introduction

Beagle Navigation Controller is a class like the `UINavigationController`, but more focused on handle the server-driven screen state when it starts or finishes.

The method `serverDrivenStateDidChange()` is the entry point to handle screen state changes. 

The default implementation shows an "ActivityIndicator" when the screen is loading and does nothing. When an error happens, you can override this method to handle errors properly. 

When overriding, if you want to preserve loading behavior, a "super" implementation should be called or you can customize a loading behavior by yourself.

##  Parameters

* **State:** New state that tells if screen is loading or any error happened
* **ScreenController:** Controller that triggered the state change

Check out below the Beagle Navigation Controller class: 

```swift
open class BeagleNavigationController: UINavigationController {


    open func serverDrivenStateDidChange(
        to state: ServerDrivenState,
        at screenController: BeagleController
    ) {
        switch state {
        case .started:
            view.showLoading(.whiteLarge)
        case .finished:
            view.hideLoading()
        case .success, .error:
            break
        }
    }
    
}

```

The ServerDrivenState is an enum that typifies the screen state. See its structure below:

```swift
public typealias BeagleRetry = () -> Void

public enum ServerDrivenState {
    case started
    case finished
    case success
    case error(ServerDrivenState.Error, BeagleRetry)
}

extension ServerDrivenState {
    public enum Error: Swift.Error {
        case remoteScreen(Request.Error)
        case action(Swift.Error)
        case lazyLoad(Request.Error)
        case submitForm(Request.Error)
        case webView(Swift.Error)
        case declarativeText
    }
}
```

## Example

```swift

class CustomBeagleNavigationController: BeagleNavigationController {
    
    private var errorView = ErrorView(message: nil) { }
    
    override func serverDrivenStateDidChange(
        to state: ServerDrivenState,
        at screenController: BeagleController
    ) {
        super.serverDrivenStateDidChange(to: state, at: screenController)
        guard case let .error(serverDrivenError, retry) = state else { return }
        let message: String
        switch serverDrivenError {
        case .remoteScreen(let error), .lazyLoad(let error), .submitForm(let error):
            switch error {
            case .networkError(let messageError):
                message = messageError.localizedDescription
            case .decoding(let messageError):
                message = messageError.localizedDescription
            case .loadFromTextError, .urlBuilderError:
                message = error.localizedDescription
            }
            
        case .action(let error):
            message = error.localizedDescription
            
        default:
            message = "Unknow Error."
        }
        
        if !view.subviews.contains(errorView) {
            errorView = ErrorView(message: message, retry: retry)
            errorView.present(in: view)
        } else {
            errorView.addRetry(retry)
        }
    }
}

```

{{% alert color="warning" %}}
You must register this class in [**Beagle's dependencies.**](beagledependencies.md)
{{% /alert %}}

```swift
let dependencies = BeagleDependencies()
dependencies.navigation.registerNavigationController(
    builder: CustomBeagleNavigationController.init, 
    forId: "CustomBeagleNavigation"
)
Beagle.dependencies = dependencies
```

{{% alert color="info" %}}
You can register as many **BeagleNavigationController** as you need.
{{% /alert %}}

Now when you instantiating the BeagleScreenViewController, you can pass the `controllerId` "CustomBeagleNavigation" so that your BeagleScreenViewController use your `CustomBeagleNavigationController`.

```swift
func screenController() -> UIViewController {
    let screen = Screen(
        child: Text()
    )

    return BeagleScreenViewController(
        .declarative(screen),
        controllerId: "CustomBeagleNavigation"
    )
}
```
