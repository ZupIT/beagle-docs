---
title: PushStack
weight: 30
description: PushStack action details and its attributes
---

---

## What is it?

This action creates a new screen on a new stack.

The structure of ``PushStack`` is:

| **Attribute** | **Type** | Required | **Definition** |
| :------------ | :-------------------------------------------- | :---------: | :------------------ |
| route | [Route]({{< ref path="/api/actions/navigate/route/" lang="en" >}}) | ✓ | Navigation route. |
| controllerId | String | | The navigation controller id to use during the navigation action. If empty, the default navigation controller will be used instead. |
| navigationContext | ​[NavigationContext]({{< ref path="/api/actions/navigate/navigationcontext" lang="en" >}})​ | | Context to be saved on the target screen. |

## How to use?

This is an example of a simple screen with a button that performs the PushStack action when clicked. To test it, just list the URL of the screen you want to create (in the URL property on the PushStack action ) and click on the button. The new screen will be created in a new stack.

{{< tabs id="T112" >}}
{{% tab name="JSON" %}}

<!-- json-playground:pushStack.json
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:button",
    "text" : "Click me!",
    "onPress" : [ {
      "_beagleAction_" : "beagle:pushStack",
        route: {
          url: NEW_SCREEN_ENDPOINT
        }
    } ]
  }
}
-->

{{% playground file="pushStack.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Screen(
    child = Button(
        text = "Click me!",
        onPress = listOf(
            Navigate.PushStack(
                Route.Remote(NEW_SCREEN_ENDPOINT)
            )
        )
    )
)
```

{{% /tab %}}
{{< /tabs >}}
