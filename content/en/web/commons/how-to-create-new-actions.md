---
title: How to create new actions
weight: 222
description: "In this section, you can see how to create Custom Actions to be used in events but being handled by the frontend application"
---

---

### Creating a frontend action 

On Beagle, it's possible to create a customized [**action**]({{< ref path="/api/actions/" lang="en" >}}) from a `CustomAction`. 

Each platform has its own way to make this implementation on frontend. Below is an example on how to do it for Web projects


1. You must create an interface with `_beagleAction_` as a mandatory propriety and with the necessary parameters to your action. For this example, you will create a `msg` attribute `string` type.

2. On `_beagleAction_`,  put the customized action name following the snippet 'custom:nameOfAction'.

```javascript
interface CustomAction {
  _beagleAction_: 'custom:CustomAction',
  msg: string
}
```

3. Once done, create a function of type `ActionHandler` where the generic type is the interface you have just created:
 

```javascript
import { ActionHandler } from '@zup-it/beagle-web'


export const customHandler: ActionHandler<CustomAction> = ({ action }) => {
    /*
       We can access our parameter defined on the interface, for example, action.msg brings us the msg value.
    */
    alert(action.msg)
}
```

4. Finally, add the action's name on the association files according to each framework: 

**For Angular:** add on beagle.module.ts:

```javascript
@BeagleModule({
  ...
  customActions:{
    "custom:CustomAction": customHandler //action handler name
  }
})
export class Beagle {}
```

**For React:** add to your Beagle's configurations file: 

```javascript
export default createBeagleUIService<any>({
    ...
    customActions:{
        "custom:CustomAction": customHandler //action handler name
      }
})

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
