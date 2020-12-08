---
title: Custom Widgets
weight: 149
description: 'You will find here, how to create a component and a Custom widgets class'
---

---

## Introduction

Beagle already have basic widgets, that can be used to alter your UI application through backend. However you can add new components to make the views  of your applications visible to Beagle and also make them be used in the backend. 

## How to create components \(custom views\) and widgets?

### Passo 1: Create a Widget

See below an example of a customized component that represents UILabel:

```swift
struct MyCustomComponent: ServerDrivenComponent {
    let text: String

    func toView(renderer: BeagleRenderer) -> UIView {
        let label = UILabel(frame: .zero)
        label.text = text
        label.numberOfLines = 0
        return label
    }
}
```

You can see in the example `MyCustomComponent` is a `ServerDrivenComponent`, it is a protocol  that conforms to `Decodable` which is responsible to decode the properties your widgets exposes to the backend.

### Step 2: Register the Widget

It is required you register to Beagle. Inside the configure file use the **`registerCustomComponent().`** method.  The first parameter is a string tha refers as your BFF will call it and the second parameter is the component's class. 

```swift
Beagle.registerCustomComponent(
    "MyCustomComponent",
    componentType: MyCustomComponent.self
)
```

After you register your customized component, you can use via server-driven. 

### Step 3: Display the component

You can use your component declaratively or put it in an instance until `BeagleScreenViewController` or call it with the `toView()` method and present the `UIView` that appears in your own view controller.

```swift
let beagleScreenViewController = Beagle.screen(
    .declarative(
        .init(child:
            MyCustomComponent(text: "Hello Beagle!")
        )
    )
)
```

Even if you have a more complex component in your `UIViews`, the process will be very similar, you just have to provide an `ServerDrivenComponent` or a `Widget` type.
