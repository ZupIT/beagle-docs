---
title: How to create new actions
weight: 222
---

---

### Creating a frontend action

On Beagle, it's possible to create a customized [**action**](/pt/home/api/actions/) from a `CustomAction`.

Each platform has its own way to make this implementation on frontend. You can see examples below with "how to's" for each of them:

{{< tabs id="T92" >}}
{{% tab name="Android" %}}

1. Create a class noted with `@RegisterAction` that implements an `Action` interface. This interface will request the implementation of execute's method and you will state the result of the action

2. The listed `msg` attribute is only a parameter example that must be stated on this class constructor.

The following example shows an action with **Toast**:

```kotlin
@RegisterAction
data class CustomAction(
val msg: String? = null
) : Action {
    override fun execute(rootView: RootView) {
        Toast.makeText(
            rootView.getContext(),
            msg,
            Toast.LENGTH_LONG).show()
    }
}
```

{{% /tab %}}

{{% tab name="iOS" %}}

1. You must create a class that implements an `Action`. This same class will request the implementation of execute's method and will dictate the actions o action.

2. The listed `msg` attribute is only a parameter example that must be stated on this class constructor.

The following example shows an action with **`Alert`**:

```swift
class CustomAction: Action {
    let msg: String?

    init(msg: String? = nil) {
        self.msg = msg
    }

    func execute(controller: BeagleController, sender: Any) {
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

4. Call the method created on BeagleConfig, that can be seen on this [**example**](/pt/home/get-started/creating-a-project-from-scratch/case-ios).

```kotlin
private func registerCustomAction() {
   Beagle.registerCustomAction("CustomAction", actionType: CustomAction.self)
}
```

{{% /tab %}}

{{% tab name="Web" %}}

1. You must create an interface with `_beagleAction_` as a mandatory propriety and with the necessary parameters to your action. For this example, we'll create a `msg` attribute `string` type.

2. On `_beagleAction_`, put the customized action name following the pattern 'custom:nameOfAction'.

```javascript
interface CustomAction {
  _beagleAction_: "custom:CustomAction";
  msg: string;
}
```

3. Once you made it, state the function `ActionHandler` type with the interface you just created:

```javascript
import { ActionHandler } from "@zup-it/beagle-web";

export const customHandler: ActionHandler<CustomAction> = ({ action }) => {
  /*
       We can access our parameter defined on the interface, for example, action.msg brings us the msg value.
    */
  alert(action.msg);
};
```

4. Finally, add the action's name on the association files according to each framework:

**For Angular:** add on beagle.module.ts:

```javascript
@BeagleModule({
  ...
  customActions:{
    "custom:CustomAction": customHandler //nome do action handler
  }
})
export class Beagle {}
```

**For React:** add to your Beagle's configurations file:

```javascript
export default createBeagleUIService<any>({
    ...
    customActions:{
        "custom:CustomAction": customHandler //nome do action handler
      }
})

```

{{% /tab %}}
{{< /tabs >}}

### Creating an action refer on backend

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
      "msg": "Eu sou um Toast."
    }
  ]
}
```

{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Button(
   text = "Beagle Button",
   onPress = listOf(CustomAction("Eu sou um Toast"))
)
```

{{% /tab %}}
{{< /tabs >}}
