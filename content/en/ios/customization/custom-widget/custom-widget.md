---
title: Custom Widget
weight: 3
description: Here you will learn how to create and use a widget on Beagle
---

**Requirements:**
 - Have a project already set up with Beagle.

## Introduction

Beagle already has some basic widgets that can be used to change your application UI through the backend. However, you can add new components to make your application's views "visible" to Beagle and can also be used in the backend.

{{% alert color="info" %}}

To know more [**Beagle default widgets**]({{< ref path="/api/components/overview" lang="en" >}}).
{{% /alert %}}

### Step 1: Create custom component.

Below we have the definition of the Box component class. Created with view code in Swift and has a title parameter, as same as a tap event.

```swift
import UIKit

class Box: UIView {
    
    // Class parameter.
    private var title: String
    
    // Initialization part of the class.
    public init(title: String) {
        self.title = title
        super.init(frame: .zero)
        setupView()
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    // Method to add component to hierarchy and pass position.
    private func setupView() {
        addSubview(label)
        
        label.text = title
        label.topAnchor.constraint(equalTo: topAnchor).isActive = true
        label.leadingAnchor.constraint(equalTo: leadingAnchor).isActive = true
        label.trailingAnchor.constraint(equalTo: trailingAnchor).isActive = true
        label.bottomAnchor.constraint(equalTo: bottomAnchor).isActive = true
    }
    
    // Component `UILabel` created.
    private lazy var label: UILabel = {
        let label = UILabel()
        label.font = .systemFont(ofSize: 20, weight: .bold)
        label.backgroundColor = .red
        label.textAlignment = .center
        label.textColor = .white
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
}
```


### Step 2: Create Widget.

To make your component works with Beagle just create a struct and extend the `Widget` interface which is a protocol that conforms to `Codable` and is responsible for (de)coding the properties that your widget exposes to the backend. Futhermore, for `Widget` compliance you should add `id: String?`, `style: Style?`, and `accessibility: Accessibility?` properties, and you also have to implement the **toView** method.

For the `Box` component you have to create a struct BoxWidget adopting the `Widget` protocol.

 * **id:** Component ID.

 * **style:** Component style attribute.

 * **accessibility:** Component accebility definition.

 * **toView:** Method that returns the view of the created component.

We have the structure of the struct `BoxWidget` with the parameters `title`, `id`, `style`, and `accessibility`, on the method **toView** the component `Box` is instantiated passing the parameter `title`.

```swift
import Foundation
import UIKit
import Beagle

struct BoxWidget: Widget {

    // Class parameter.
    let title: String

    public var id: String?
    public var style: Style?
    public var accessibility: Accessibility?
    
    // toView method of interface the  widget.
    func toView(renderer: BeagleRenderer) -> UIView {
        let boxComponent = Box(title: title)

        return boxComponent
    }
}
```

To embed the component with the Beagle you need to use `AutoLayoutWrapper` or `sizeThatFits`.

{{< tabs id="T1" >}}
{{% tab name="AutoLayoutWrapper" %}}

### AutoLayoutWrapper

**`AutoLayoutWrapper:`** The object calculates the size taking into account the component's contraints.
To do this, just add the component's view inside the `AutoLayoutWrapper`.

Making the settings with the `AutoLayoutWrapper`.

```swift 
let beagleWrapper = AutoLayoutWrapper(view: boxComponent)
```

Below is the complete struct of the Widget and the steps:

* Adopt the `Widget` interface.
* Instantiate the Box component.
* Use the `AutoLayoutWrapper` in the BoxWidget struct.

```swift
import Foundation
import UIKit
import Beagle

struct BoxWidget: Widget {

    // Class parameter.
    let title: String

    public var id: String?
    public var style: Style?
    public var accessibility: Accessibility?
    
    func toView(renderer: BeagleRenderer) -> UIView {

        // Native component declaration.
        let boxComponent = Box(title: title)

        // Setting the beagle wrapper.
        boxComponent.translatesAutoresizingMaskIntoConstraints = false
        let beagleWrapper = AutoLayoutWrapper(view: boxComponent)
        
        // Returning BeagleWrapper and component.
        return beagleWrapper
    }
}
```

{{% /tab %}}
{{% tab name="SizeThatFits" %}}

### SizeThatFits

**`sizeThatFits:`** Method to implement your size logic, used in the custom component class.

```swift
override func sizeThatFits(_ size: CGSize) -> CGSize {
    systemLayoutSizeFitting(size)
}
```

{{% /tab %}}
{{< /tabs >}}

### Step 3: Register Widget.

Finally, we need to register our custom widget on Beagle

So to **register it on Beagle** just call the register function from Coder (a Beagle public dependency) during the settings process of the Beagle environment.

{{% alert color="info" %}}
To learn more about dependencies. [**Beagle Dependencies**]({{< ref path="" lang="en" >}}).
{{% /alert %}}

The `register` method has two constructors, the first passing just the `component` and the second receiving the `component` and `named`.

* **type:** Pass component's type.

* **named:** Parameter to set the component name. It is not mandatory to pass. One case is when the component name is registered differently than what you created in the backend. It will be used in deserializations to find your component.

**Ways Register**

```swift
// 1º manner
coder.register(type: BoxWidget.self)
```

```swift
// 2º manner
coder.register(type: BoxWidget.self, named: "BoxWidgetComponent")
```

{{% alert color="warning" %}}
After registering, don't forget that to use your component in the backend it also has to be registered in your BFF (Backend to Frontend).

If you want to understand about BFF [**click here**]({{< ref path="" lang="en" >}})
{{% /alert %}}

## Particular cases

### Components that exposes events

In cases where the custom component contains user interaction events, it is enough to expose these events in the component's Widget. So suppose the BoxComponent now has to handle a touch event:

```swift
import Foundation
import UIKit
import Beagle

struct BoxWidget: Widget {

    let title: String
    @AutoCodable
    let onTouch: [Action]?
    
    public var id: String?
    public var style: Style?
    public var accessibility: Accessibility?
    
    func toView(renderer: BeagleRenderer) -> UIView {
        let boxComponent = Box(title: title)
        boxComponent.onTouch = {
            renderer.controller?.execute(actions: onTouch, event: "onTouch", origin: boxComponent)
        }

        return boxComponent
    }
}
```

Step 1: add the attribute `let onTouch: [Action]?` que consiste em uma lista de ações que serão executadas a partir do evento de touch.

Step 2: assuming the native component use closures to handle events, then we assign a closure on `onTouch` event that calls the `execute` method passing this actions list: `renderer.controller?.execute(actions: onTouch, event: "onTouch", origin: boxComponent)`

{{% alert color="warning" %}}
Use `@AutoCodable` annotation on `Action` properties type or use `ServerDrivenComponent` in cases that your component receives other component or action, in order to Swift can synthesize the `init(from decoder: Decoder)` initializer.

In thecnical terms, the `AutoCodable` is a property wrapper that implements both polymorphic serialization and deserialization logics of Beagle's generic types. In this way, we do not need to implement `init(from decoder: Decoder)` since now Swift can synthesize it, and all the properties of our widget is abide to Codable.
{{% /alert %}}

### Components that encapsulate other components

In cases where our custom component receives another component to be added as subview, just add an attribute on our widget that relates to this child component.

Assuming that our component Box receives a `UIView` that will be added on your views hierarchy:

```swift
struct BoxWidget: Widget {

    // Class parameter.
    let title: String
    @AutoCodable
    let child: ServerDrivenComponent
    
    public var id: String?
    public var style: Style?
    public var accessibility: Accessibility?
    
    // toView method of interface the widget.
    func toView(renderer: BeagleRenderer) -> UIView {
        let child: UIView = BeagleView(child)
        child.translatesAutoresizingMaskIntoConstraints = false

        let boxComponent = Box(title: title, child: child)

        return boxComponent
    }
}
```

Step 1: add `let child: ServerDrivenComponent` attribute which will be the Server Driven component.

Step 2: transform the server driven component into a UIView, as of the BeagleView class, e.g.: `let child: UIView = BeagleView(child)`

Step 3: pass the just created UIView into the Box component, e.g.: `Box(title: title, child: child)`
