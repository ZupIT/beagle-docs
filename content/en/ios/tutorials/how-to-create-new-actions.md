---
title: How to create new actions
weight: 222
description: "In this section, you can see how to create Custom Actions to be used in events but being handled by the frontend application"
---

---

### Creating a frontend action on iOS

On Beagle, it's possible to create a customized [**action**]({{< ref path="/api/actions/" lang="en" >}}) from a `CustomAction`. 

1. You must create a class that implements an `Action`. This same class will request the implementation of execute's method and will dictate the actions o action. 

2. The listed `msg` attribute is only a parameter example that must be stated on this class constructor.

The following example shows an action with **`Alert`**:


```swift
class CustomAction: Action {
    let msg: String?
    
    init(msg: String? = nil) {
        self.msg = msg
    }
    
    func execute(controller: BeagleController, origin: UIView) {   
        let alert = UIAlertController(
        title: nil, 
        message: msg, 
        preferredStyle: .alert
        )
        
        controller.present(alert, animated: true)
    }

}
```


3. To register the action, just create a method with all your custom action and calls the `registerCustomAction` Beagle's method to make the registry.

4. Call the method created on BeagleConfig, that can be seen on this [**example**]({{< ref path="/get-started/creating-a-project-from-scratch/case-ios" lang="en" >}}).

```swift
private func registerCustomAction() {
   Beagle.registerCustomAction("CustomAction", actionType: CustomAction.self)
}
```

### Create an action on backend

To create this action, your code must be like: 


```kotlin
@RegisterAction
data class CustomAction(
val msg: String? = null
) : Action 
```

Below, see an example of an Action in a Button's type component:

{{< tabs id="T93" >}}
{{% tab name="JSON" %}}
```kotlin
{
  "_beagleComponent_": "beagle:button",
  "text": "Beagle Button",
  "onPress": [
    {
      "_beagleAction_": "custom:customAction",
      "msg": "I am a Toast."
    }
  ]
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Button(
   text = "Beagle Button",
   onPress = listOf(CustomAction("I am a Toast"))
)
```
{{% /tab %}}
{{< /tabs >}}
