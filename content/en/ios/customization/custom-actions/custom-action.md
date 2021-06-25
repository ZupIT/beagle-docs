---
title: Custom Action
weight: 2
description: This sections lists how to create and trigger a custom action
---

---

**Topics covered:**
- What is an action?
- How to create a custom action
- How to Register an Action
- How to use an action?
 
**Requirements:**
 - Have a project already set up with Beagle.

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

### **Step 3: How to Register an Action.**

It is mandatory to register actions on Beagle. Inside the beagle config file use dependencies to register.

{{% alert color="info" %}} To learn more about dependencies. [Beagle Dependencies]({{< ref path="" lang="en" >}}). {{% /alert %}}

The register method has two constructors; the first receives just the `action` param and the second receives the `action` and `named` params.

**action:** Pass the struct of the action.

**named:** Parameter to set the action name. It is not mandatory to pass. One case is when the action name is registered differently than what you created in the backend. It will be used in deserializations to find your action.

Ways to Register

1º The first way to register.
```swift
dependencies.decoder.register(action: CustomAction.self)
```

2º The second way to register.
```swift 
dependencies.decoder.register(action: CustomAction.self, named: "CustomAction")
```

After registering your customization component, you can use it via server-driven.

### **Step 3: How to use an action**

To use the Beagle's actions, the component you are going to use just needs a parameter of the type `Action`.

Below is an example of how to use it on a button that performs the custom action on the click event:

```swift
Button(
    text: "do request",
    onPress: [
        CustomAction( mensagem: "I am an Alet")
    ]
)
```
