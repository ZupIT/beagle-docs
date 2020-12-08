---
title: Navigation
weight: 155
description: You will find here information about Navigation.
---

---

#### Added in Beagle 1.0.0

## Protocol

```swift
public protocol BeagleNavigation {
    var defaultAnimation: BeagleNavigatorAnimation? { get set }
    
    func navigate(action: Navigate, controller: BeagleController, animated: Bool)
}
```

On `BeagleNavigation` protocol we have a `defaultAnimation` variable that allows you to change the transition animation of your application, and also another function that deals with the [**navigate actions**](https://docs.usebeagle.io/v/v1.0-en/api/actions/navigate) types and define their behaviours.

We suggest that you use the default implementation, but if it is necessary, it is allowed that this implementation is replaced by a class according to the protocol above.  

## Default implementation

There is a implementation for this protocol used as a default value on [**BeagleDependencies**](beagledependencies.md)**.** It will treat the action with a more intuitive way. 

### OpenExternalURL

This action opens an  available browser on the device from a informed URL. 

### OpenNativeRoute

This action opens a locally defined screen. It can be or not defined in the backend. It also allows you to add a `ViewController` to the stack with a push operation. 

See the code below: 

```swift
case openNativeRoute(String, data: [String: String]? = nil, shouldResetApplication: Bool = false)
```

The attributes from the example above are: 

* **Route:** represents the registered route for a native screen.
* **ShouldResetAplication:** indicates the stack view restart of the application. 
* **Data:** passes the information between screens. 

### PushStack

It is responsible for preseting a new `ViewController` with a default animation system, that can change the `defaultAnimation` variable provided in the `BeagleNavigation` protocol above. 

{{% alert color="info" %}}
On this case, this action presents a`ViewController` to a stack with a present operation. 
{{% /alert %}}

### PopStack

This action dismisses the presented `ViewController` . 

### PushView

Opens a new screen in the same stack using a route.

{{% alert color="info" %}}
This `ViewController` is added with a`pushViewController` operation. 
{{% /alert %}}

### popView

It closes the current screen and remove it from the stack.  

{{% alert color="info" %}}
This `ViewController` is removed from the stack with a é retirada da stack `popViewController` operation.
{{% /alert %}}

### PopToView

Returns a specific `ViewController` stack. 

{{% alert color="info" %}}
This operation returns to a specific`ViewController`using a `popToViewController` operation.
{{% /alert %}}

### ResetApplication

Opens a informed route of a new flow and erases the views stacks of the whole application. 

### ResetStack

Open a screen with an informed route of a new flow and cleans the loaded screen stacks. 

## Transition Animation

On BeagleNavigation Protocol we provide a defaultAnimation variable that determines how the view is animated onscreen when it is presented. 

We allow you to change transitions for pushing and popping view controllers with `pushTransition` and `popTransition` variables and you can also change your `modalPresentationStyle` and `modalTransitionStyle`. 

```swift
public struct BeagleNavigatorAnimation {
    var pushTransition: Transition?
    var popTransition: Transition?
    var modalPresentationStyle: UIModalPresentationStyle?
    var modalTransitionStyle: UIModalTransitionStyle   
}
```

In the structure below, we provide you the types of [**`CATransition`**](https://developer.apple.com/documentation/quartzcore/catransition) , where you can transition between a layer's states by creating and adding a [**`CATransition`**](https://developer.apple.com/documentation/quartzcore/catransition) object to it. 

```swift
public struct Transition {
   var type: CATransitionType
   var subtype: CATransitionSubtype?
   var duration: Double
}
```

In the example below, we changed the apps default push transition and modalPresentationStyle.

```swift
let animation = BeagleNavigatorAnimation(
                   pushTransition: .init(
                       type: .fade, 
                       subtype: .fromRight, 
                       duration: 1.0), 
                   modalPresentationStyle: .formSheet)

let dependencies = BeagleDependencies()
dependencies.navigation.defaultAnimation = animation

```

{{% alert color="warning" %}}
This configuration is applied to all of the navigations in your application.
{{% /alert %}}
