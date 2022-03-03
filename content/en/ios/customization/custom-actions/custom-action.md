---
title: Custom Action
weight: 2
description: This sections lists how to create and trigger a custom action
---

---

**Requirements:**
 -You need a project already set up with Beagle.

### **Step 1: What is an action** 

In Beagle, an action deals with the behaviors (functions) that will be executed in your application as soon as a certain event is triggered. These actions can be Beagle's own standard or custom actions.

Standard beagle actions: [**Action types.**]({{< ref path="/api/actions/overview#action-types" lang="en">}})


### **Step 2: How to create a custom action:**

To create a custom action, follow these steps:

1. Create a struct that implements the **interface** `Action`.

2. After that, the interface will ask for the `execute` method to be implemented. It is in this method that the code block that your action will execute must be implemented.

```swift
struct CustomAction: Action {
    func execute(controller: BeagleController, origin: UIView) {
            print("Logic of your action.")
    }
}
```

As an action logic, let's create an alert. Below is an example of the alert.

```swift
let alert = UIAlertController(
        title: nil,
        message: "",
        preferredStyle: .alert
        )

controller.present(alert, animated: true)
```

Now we add the action logic inside the `execute` method.
Finally, just create the parameter to receive the alert message, and the init of the struct.

```swift
struct CustomAction: Action {

    var message: String

    init(message: String? = nil) {
        self.message = message
    }

    func execute(controller: BeagleController, origin: UIView) {
        let alert = UIAlertController(
        title: nil,
        message: message
        preferredStyle: .alert 
        )

        controller.present(alert, animated: true)
    }
}
```
{{% alert color="warning" %}}
Use the `@AutoCodable` annotation for `Action` or `ServerDrivenComponent` properties type (whether they are lists or optional) if your action receives whether a component or action, so that swift can synthesize the `init(from decoder: Decoder)` initializer.

In tecnical terms, the `AutoCodable` is a property wrapper that implements the polymorphic serialization and deserialization logic of Beagle's generic types, so we don't need to implement the `init(from decoder: Decoder)`, insofar as now Swift can synthesize it, and considering that all the properties of our widget comply to Codable.
{{% /alert %}}

### **Step 3: How to Register an Action.**

Finally, we need to register our custom action on Beagle.

Therefore, to **register it on Beagle**, just call the `register` function from `Coder` (a Beagle's public dependency) into the Beagle environment configuration process.

{{% alert color="info" %}} To learn more about dependencies: [Beagle Dependencies]({{< ref path="" lang="en" >}}). {{% /alert %}}

The `register` method is overloaded by two different arguments (`action` and `named`). You can call it to receives just the `action` param or to receives the `action` and `named` params.

**action:** Action type.

**named:** Parameter to set the action name. It is not mandatory to inform it, however, you might need it when the component name is registered differently than what you created in the backend. In this case, the parameter will be used in deserializations to find your action.

Ways to Register

1º The first way to register.
```swift
coder.register(action: CustomAction.self)
```

2º The second way to register.
```swift 
coder.register(action: CustomAction.self, named: "CustomAction")
```

After registering your customization component, you can use it via server-driven.
