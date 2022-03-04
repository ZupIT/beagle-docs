---
title: ResetStack
weight: 90
description: ResetStack action details and its attributes
---

---

## What is it? <a id="definition"></a>

The ``ResetStack`` action creates a new screen with the given route and destroys the previous stack.

The structure of ``ResetStack`` is:

| **Attribute** | **Type** | Required | **Definition** |
| :------------ | :---------------------------------------------- | :---------: | :------------------ |
| route | ​[Route]({{< ref path="/api/actions/navigate/route" lang="en" >}})​ | ✓ | Navigation route. |
| controllerId | String | | The id of the navigation controller to use during the navigation action. If absent, the default navigation controller will be used instead. |
| navigationContext | ​[NavigationContext]({{< ref path="/api/actions/navigate/navigationcontext" lang="en" >}})​ | | Context to be saved on the target screen. |

## How to use?

This is an example of a simple screen with a button that performs the ResetStack action when clicked. To test it, just add the screen URL you want to create and click on the button. The new screen will be created on a new stack, and the previous stack will be destroyed (any other existing stack will not be affected).

{{< tabs id="T112" >}}
{{% tab name="JSON" %}}

<!-- json-playground:resetStack.json
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:button",
    "text" : "Click me!",
    "onPress" : [ {
      "_beagleAction_" : "beagle:resetStack",
        route: {
          url: NEW_SCREEN_ENDPOINT
        }
    } ]
  }
}
-->

{{% playground file="resetStack.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Screen(
    child = Button(
        text = "Click me!",
        onPress = listOf(
            Navigate.ResetApplication(
                Route.Remote(NEW_SCREEN_ENDPOINT)
            )
        )
    )
)
```

{{% /tab %}}
{{< /tabs >}}
