---
title: Navigation Animation
weight: 155
description: You will find here information about Navigation.
---

---

## Introduction

On `BeagleNavigation` protocol we have a `defaultAnimation` variable that allows you to change the transition animation of your application, and also another function that deals with the [**navigate actions**](/api/actions/navigate) types and define their behaviours.

We suggest that you use the default implementation, but if it is necessary, it is allowed that this implementation is replaced by a class according to the protocol above.

## Protocol and customization

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

### Example

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
