---
title: Navigation Animation
weight: 155
description: You will find here information about Navigation.
---

---

## Introduction

On `BeagleNavigation` protocol there is a `defaultAnimation` variable that allows you to change the transition animation of your application and also another function that deals with the [**navigate actions**]({{< ref path="/api/actions/navigate" lang="en" >}}) types and define their behaviour.

Use the default implementation, but only if it is necessary. This implementation can be replaced by a class, according to the protocol above.

## Protocol and customization

On BeagleNavigation Protocol there is a defaultAnimation variable that determines how the view is animated onscreen when it is presented.

It allows you to change transitions for pushing and popping view controllers with `pushTransition` and `popTransition` variables. You can also change your `modalPresentationStyle` and `modalTransitionStyle`.

```swift
public struct BeagleNavigatorAnimation {
    var pushTransition: Transition?
    var popTransition: Transition?
    var modalPresentationStyle: UIModalPresentationStyle?
    var modalTransitionStyle: UIModalTransitionStyle
}
```

In the structure below, there are types of [**`CATransition`**](https://developer.apple.com/documentation/quartzcore/catransition) where you can transition between a layer's states by creating and adding a [**`CATransition`**](https://developer.apple.com/documentation/quartzcore/catransition) object to it.

```swift
public struct Transition {
   var type: CATransitionType
   var subtype: CATransitionSubtype?
   var duration: Double
}
```

### Example

In the example below, the default apps push transition and modalPresentationStyle were changed.

```swift
let animation = BeagleNavigatorAnimation(
                   pushTransition: .init(
                       type: .fade,
                       subtype: .fromRight,
                       duration: 1.0),
                   modalPresentationStyle: .formSheet)

let dependencies = BeagleDependencies()
dependencies.navigator.setDefaultAnimation(animation)
BeagleConfigurator.setup(dependencies: dependencies)

```

{{% alert color="warning" %}}
This configuration is applied to all of the navigations in your application.
{{% /alert %}}
