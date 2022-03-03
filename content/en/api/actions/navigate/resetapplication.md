---
title: ResetApplication
weight: 100
description: ResetApplication action details and its attributes
---

---

## What is it? <a id="definition"></a>

This action creates a new canvas in a new stack and destroys all previous stacks.

The structure of ``ResetApplication`` is:

| **Attribute** | **Type** | Required | **Definition** |
| :------------ | :----------------------------------------------- | :---------: | :------------------ |
| route | ​[Route]({{< ref path="/api/actions/navigate/route/" lang="en" >}})​ | ✓ | Navigation route. |
| controllerId | String | | The navigation controller id to use during the navigation action. If empty, the default navigation controller will be used. |
| navigationContext | ​[NavigationContext]({{< ref path="/api/actions/navigate/navigationcontext" lang="en" >}})​ | | Context to be saved on the target screen. |

## How to use it?

Below is an example of a simple screen with a button that performs the ResetApplication action when clicked. To test it, just list the URL of the screen you want to create and click the button. The screen will be created in a new stack.

{{< tabs id="T112" >}}
{{% tab name="JSON" %}}

<!-- json-playground:resetApplication.json
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:button",
    "text" : "Click me!",
    "onPress" : [ {
      "_beagleAction_" : "beagle:resetApplication",
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
            Navigate.ResetApplication(
                Route.Remote(NEW_SCREEN_ENDPOINT)
            )
        )
    )
)
```

{{% /tab %}}
{{< /tabs >}}
