---
title: Screen View Controller
weight: 159
description: You will find here information about Screen View Controlle
---

---

#### Introduction

`BeagleScreenViewController` is a class that manages the display hierarchy in the application and it works like a `UIViewController`.

## How to implement this class?

You have to create an object  `BeagleScreenViewController`  with a set of attributes and parameters. 

This process can be done following the next steps:

1. Create an object `BeagleScreenViewModel` with **screenType** remote that have to send a URL, a optional fallback or a declarative that changes the screen to a declarative mode. 

You can find the commands below: 

```swift
 public class BeagleScreenViewModel {
 
  public enum ScreenType {
       case remote(String, fallback: Beagle.Screen?)
       case declarative(BeagleUI.Screen)
    }
    public init(screenType: 
       BeagleUI.BeagleScreenViewModel.ScreenType, 
       delegate: BeagleUI.BeagleScreenDelegate? = nil)
}

let viewController = BeagleScreenViewController(
      viewModel: viewModel)

```

There are other boot examples using declarative and remote:

```swift
//1 
let viewModel = BeagleScreenViewModel(screenType:
              .declarative(content: Home().screen))
                         
//2
let viewModel = BeagleScreenViewModel(screenType:
          .remote("/cash-withdrawal/home"),
                                 fallback: nil))
                                   
//3
let viewModel = BeagleScreenViewModel(
   screenType:.remote(
    "http://localhost:8090/cash-withdrawal/home"),
                            fallback: Home().screen))

```

You can instantiate `BeagleScreenViewModel` with a declarative type, screenType changing your created screen to the declarative mode. 

In this example, `BeagleScreenViewModel`i was instantiated with a remote type screenType where there's a relative URL and a null fallback. To use this URL you must put a base URL in the `BeagleDependencies` of your projects.  
  
The second `BeagleScreenViewModel` was instantiated with a remote type screenType where there's an absolute URL and a screen with a declarative fallback.

### Screen states

To follow the screen states, there is the  `enum` state:

```swift
 public enum State {
        //1
        case loading
        //2
        case success
        //3
        case failure(BeagleUI.Request.Error)
        //4
        case rendered
    }
```

1.  **Loading** state happens when a request was not received or the screen was not rendered, when the information are received the state changes to success, if not it changes to failure. 
2. **Success state** happens right after the request verification is finished and the screen rendered. 
3.  **Failure** happens when something is wrong in the request or screen render, `BeagleUI.Request.Error` informs what was the error. 
4. **Rendered** is used right after the success, when the screen is rendered. 

When everything runs `BeagleScreenViewModel` with declarative screenType, the state goes straight to success, skipping loading. 

`BeagleScreenViewModel` has a variable delegate, it is related to `BeagleScreenDelegate`. When this protocol is extended, in case of any request error to implement remote screenType, it will fall into the error function of this protocol, where the user may complement the function with the error. 

```swift
public protocol BeagleScreenDelegate : AnyObject {

 typealias ViewModel = Beagle.BeagleScreenViewModel

    func beagleScreen(viewModel: Self.ViewModel,
                     didFailToLoadWithError error:
                              Beagle.Request.Error)
}
```

### Example to implement the  `BeagleScreenDelegate` protocol:

```swift
//1
let viewModel = BeagleScreenViewModel(screenType:
          .remote("/cash-withdrawal/home"),
                                 fallback: nil))
viewModel.delegate = self

//2
extension ViewController: BeagleScreenDelegate {
    func beagleScreen(viewModel: 
        ViewController.ViewModel, 
                didFailToLoadWithError error:  
                            Beagle.Request.Error) {
        print("didFailToLoadWithError: \(error)")
    }
}
```

1. Reuse the instantiate `BeagleScreenViewModel` example, you can add the **viewModel.delegate = self.** 
2. When implementing the `BeagleScreenViewModel` protocol you may complete this function, it will show the error. 

 `BeagleScreenViewController`  works with components customization in the view: 

```swift
extension BeagleScreenViewController:
                    Beagle.BeagleContext {
    //1                
    public func register(action: Beagle.Action, 
                                 inView view: UIView)
    //2
    public func register(form: BeagleSchema.Form, 
                        formView: UIView, 
                        submitView: UIView, 
                        validatorHandler: 
                        Beagle.ValidatorProvider?)
    //3
    public func lazyLoad(url: String, 
                              initialState: UIView)
    //4
    public func doAction(_ action: Beagle.Action,
                                          sender: Any)
}
```
