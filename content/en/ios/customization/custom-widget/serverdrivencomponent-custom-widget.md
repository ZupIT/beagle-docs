---
title: Custom widget with ServerDrivenComponent
weight: 2
description: Creating a custom component with ServerDrivenComponent
---

**Requirements:**
 - Have a project already set up with Beagle.
 - Read the example [**Custom Widget**]({{< ref path="/ios/customization/custom-widget/custom-widget" lang="en" >}}).

## Introduction

In this example we are going to teach how to create components that receive a `ServerDrivenComponent`.

**`ServerDrivenComponent:`** These are all beagle default components and beagle registered components.

{{% alert color="info" %}}
To learn more about creating a component see, [**Custom Widget**]({{< ref path="" lang="en" >}}).
{{% /alert %}}

### Step 1: Create the Custom component.

Below we have the definition of the ContainerTitle custom component class that receives the title and child parameters.

**Parameters:**

**`title`**: Parameter of type `String` that represents the title of the component.

**`child`**: Parameter of type `UIView` that represents the view that the component encapsulates.


```swift
import Foundation
import UIKit

class ContainerTitle: UIView {
    
    // Class initialization.
    public init(title: String, child: UIView) {
        super.init(frame: .zero)
        setupView(child: child, title: title)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    // Method to add component to hierarchy and position to superview.
    private func setupView(child: UIView, title: String) {
        addSubview(label)
        label.text = title
        label.topAnchor.constraint(equalTo: topAnchor).isActive = true
        label.leadingAnchor.constraint(equalTo: leadingAnchor, constant: 10).isActive = true
        label.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -10).isActive = true
        
        addSubview(child)
        child.topAnchor.constraint(equalTo: label.bottomAnchor).isActive = true
        child.leadingAnchor.constraint(equalTo: leadingAnchor, constant: 10).isActive = true
        child.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -10).isActive = true
        child.bottomAnchor.constraint(equalTo: bottomAnchor, constant: -10).isActive = true
        child.backgroundColor = .systemOrange
    }

    // Component `UILabel` created.
    private lazy var label: UILabel = {
        let label = UILabel()
        label.font = .systemFont(ofSize: 20, weight: .bold)
        label.backgroundColor = .orange
        label.textAlignment = .center
        label.textColor = .white
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
}
```


### Step 2: Create Widget.

Now we have the `ContainerTitle` component, to transform it to a Beagle component we have to adopt the `Widget` protocol, which is a protocol that conforms to `Decodable` and is responsible for decoding the properties that your widget exposes to the backend.

Create a struct ContainerTitleWidget adopting `Widget` protocol, the widget interface will add **widgetProperties** property and **toView** method.

 * **widgetProperties:** The property of applying style, id and accessibility.

 * **toView:** Método para retornar a view do componente criado.

We have the structure of the `ContainerTitleWidget` struct with the parameters `title`, `child` and `widgetProperties` and the component `ContainerTitle` created in the method `toView`.

To display the received component we use `BeagleView`, so it returns a `UIView`. To use in the middle of the autoLayout you need to disable the view's `translatesAutoresizingMaskIntoConstraints`.

```swift
import Foundation
import UIKit
import Beagle

struct ContainerTitleWidget: Widget {
    
    // Class parameter.
    let title: String
    var child: ServerDrivenComponent
    var widgetProperties: WidgetProperties
    
    // toView method of interface the  widget.
    func toView(renderer: BeagleRenderer) -> UIView {
        
        // BeagleView declaration.
        let child = BeagleView(child)
        child.translatesAutoresizingMaskIntoConstraints = false
        
         // Custom component declaration.
        let containerTitle = ContainerTitle(title: title, child: child)
        
    }
}
```

We have to create the initialization and decoding part of the component, there are two possible ways using the `sourcery` code generator for the Swift language, or doing it manually.

{{< tabs id="T0" >}}
{{% tab name="Manual decoding" %}}

To make manual you have to create the init and decode the `title`, `child` and `widgetProperties` parameters of the `ContainerTitleWidget` struct.

The widgetProperties has its own decoding part, so you just need to pass the decoder to the `WidgetProperties` object.

```swift

    // Initialization part of the class.
    init(
        title: String,
        child: ServerDrivenComponent,
        widgetProperties: WidgetProperties = WidgetProperties()
    ) {
        self.title = title
        self.child = child
        self.widgetProperties = widgetProperties
    }
    
    // Enum with parameters for decoding.
    enum CodingKeys: String, CodingKey {
        case title
        case child
    }

    // Initialization for decoding
    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)

        title = try container.decode(String.self, forKey: .title)
        child = try container.decode(forKey: .child)
        widgetProperties = try WidgetProperties(from: decoder)
    }
```

{{% /tab %}}
{{% tab name="Sourcery decoding" %}}

O [**Sourcery**](https://github.com/krzysztofzablocki/Sourcery) is a code generator that helps boilerplate code creation.

Installing this library **is optional**, although recommended. If you want to install, follow the instructions on how to install and configure in this [**link**]({{< ref path="" lang="en" >}})

{{% /tab %}}
{{< /tabs >}}

To integrate the component with the beagle you need to use `sizeThatFits` or `AutoLayoutWrapper`.

{{< tabs id="T1" >}}
{{% tab name="AutoLayoutWrapper" %}}


### AutoLayoutWrapper

**`AutoLayoutWrapper:`** The object calculates the size taking into account the component's contraints.
To do this, just add the component's view inside the `AutoLayoutWrapper`.

Making the settings with the `AutoLayoutWrapper`.

```swift 
    let beagleWrapper = AutoLayoutWrapper(view: containerTitle)
```

Below is the complete struct of the Widget with the steps:

* Adopt the `Widget` interface.
* Create BeagleView to add the child component.
* Instantiate the ContainerTitle component.
* Do the initialization and decoding part of the component.
* Use the `AutoLayoutWrapper` in the ContainerTitleWidget struct.


```swift
import Foundation
import UIKit
import Beagle

struct ContainerTitleWidget: Widget {
    
    // Class parameter.
    let title: String
    var child: ServerDrivenComponent
    var widgetProperties: WidgetProperties
    
    // Initialization part of the class.
    init(
        title: String,
        child: ServerDrivenComponent,
        widgetProperties: WidgetProperties = WidgetProperties()
    ) {
        self.title = title
        self.child = child
        self.widgetProperties = widgetProperties
    }
    
    // Enum with parameters for decoding.
    enum CodingKeys: String, CodingKey {
        case title
        case child
    }

    // Initialization for decoding
    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)

        title = try container.decode(String.self, forKey: .title)
        child = try container.decode(forKey: .child)
        widgetProperties = try WidgetProperties(from: decoder)
    }
    
    // toView method of interface the  widget.
    func toView(renderer: BeagleRenderer) -> UIView {

        // BeagleView declaration.
        let child = BeagleView(child)
        child.translatesAutoresizingMaskIntoConstraints = false
        
        // Custom component declaration.
        let containerTitle = ContainerTitle(title: title, child: child)
        
        // Setting the beagle wrapper.
        containerTitle.translatesAutoresizingMaskIntoConstraints = false
        let beagleWrapper = AutoLayoutWrapper(view: containerTitle)
        
        return beagleWrapper
    }
}
```

  {{% /tab %}}

{{% tab name="SizeThatFits" %}}

### SizeThatFits

**`sizeThatFits:`** Method to implement your size logic, used in custom component class.


```swift
override func sizeThatFits(_ size: CGSize) -> CGSize {
    systemLayoutSizeFitting(size)
}
```

The custom component class with the step:
* Use sizeThatFits.


```swift
import Foundation
import UIKit

class ContainerTitle: UIView {
    
    // Initialization part of the class.
    public init(title: String, child: UIView) {
        super.init(frame: .zero)
        setupView(child: child, title: title)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    // Implementation sizeThatFits
    override func sizeThatFits(_ size: CGSize) -> CGSize {
        systemLayoutSizeFitting(size)
    }

    // Method to add component to hierarchy and pass position.
    private func setupView(child: UIView, title: String) {
        addSubview(label)
        label.text = title
        label.topAnchor.constraint(equalTo: topAnchor).isActive = true
        label.leadingAnchor.constraint(equalTo: leadingAnchor, constant: 10).isActive = true
        label.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -10).isActive = true
        
        addSubview(child)
        child.topAnchor.constraint(equalTo: label.bottomAnchor).isActive = true
        child.leadingAnchor.constraint(equalTo: leadingAnchor, constant: 10).isActive = true
        child.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -10).isActive = true
        child.bottomAnchor.constraint(equalTo: bottomAnchor, constant: -10).isActive = true
        child.backgroundColor = .systemOrange
    }

    // Component `UILabel` created.
    private lazy var label: UILabel = {
        let label = UILabel()
        label.font = .systemFont(ofSize: 20, weight: .bold)
        label.backgroundColor = .orange
        label.textAlignment = .center
        label.textColor = .white
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
}
```
Widget complete class with steps.

* Adopt `Widget` interface.
* Create the BeagleView to add the child component.
* Instantiate the ContainerTitle component.
* Do the initialization and decoding part of the component.

```swift
import Foundation
import UIKit
import Beagle

struct ContainerTitleWidget: Widget {
    
    // Class parameter.
    let title: String
    var child: ServerDrivenComponent
    var widgetProperties: WidgetProperties
    
    // Initialization part of the class.
    init(
        title: String,
        child: ServerDrivenComponent,
        widgetProperties: WidgetProperties = WidgetProperties()
    ) {
        self.title = title
        self.child = child
        self.widgetProperties = widgetProperties
    }
    
    // Enum with parameters for decoding.
    enum CodingKeys: String, CodingKey {
        case title
        case child
    }

    // Initialization for decoding
    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)

        title = try container.decode(String.self, forKey: .title)
        child = try container.decode(forKey: .child)
        widgetProperties = try WidgetProperties(from: decoder)
    }
    
    // toView method of interface the  widget.
    func toView(renderer: BeagleRenderer) -> UIView {

        // BeagleView declaration.
        let child = BeagleView(child)
        child.translatesAutoresizingMaskIntoConstraints = false
        
        // Custom component declaration.
        let containerTitle = ContainerTitle(title: title, child: child)
        
        return beagleWcontainerTitlerapper
    }
}
```

{{% /tab %}}
  {{< /tabs >}}

### Step 3: Register Widget.

It is mandatory to **register it with Beagle.** Within the beagle configuration file use `dependencies` to register.

{{% alert color="info" %}}
To learn more about dependencies. [**Beagle Dependencies**]({{< ref path="" lang="en" >}}).
{{% /alert %}}

The `register` method has two constructors, the first passing just the `component` and the second receiving the `component` and `named`.

* **component:** Pass component's class.

* **named:** Parameter to set the component name. It is not mandatory to pass. One case is when the component name is registered differently than what you created in the backend. It will be used in deserializations to find your component.

**Ways Register**

```swift
// 1º manner
dependencies.decoder.register(component: ContainerTitleWidget.self)
```

```swift
// 2º manner
dependencies.decoder.register(component: ContainerTitleWidget.self, named: "ContainerTitleWidgetComponent")
```

{{% alert color="warning" %}}
After registering, don't forget that to use your component in the backend it also has to be registered in your BFF (Backend to Frontend).

If you want to understand about BFF [**click here**]({{< ref path="" lang="en" >}})
{{% /alert %}}

### Step 4: Component Declaration.

Below we have the definition of the component inside a `Container`, where the component **ContainerTitleWidget** has the parameter `title` that receives the value "Title" and the parameter `child` receives a container with two texts with the names ` Label 1` and `Label 2`.


```swift
 Container {
    ContainerTitleWidget(
        title: "Title",
        child: Container {
            Text("Label 1")
            Text("Label 2")
        }
    )
}
```

{{% alert color="info" %}}
To learn more about displaying the Component.[**How to display a screen**]({{< ref path="/ios/tutorials/adding-beagle-to-a-part-of-a-native-screen/adding-a-beagle-server-driven-component" lang="en" >}}).
{{% /alert %}}

Rendered example:

![](/shared/custom-component-servendrivencomponent.png)

If you use more complex components that are in `UIViews` or other components not mentioned, the process would be similar.
