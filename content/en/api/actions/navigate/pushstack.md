---
title: PushStack
weight: 30
description: Here you'll find PushStack description and its attribute.
---

---

### What is it?

Presents a new screen and puts it on the pile.

Your structure is represented by the attribute below:

| **Attribute** | **Type** | Required | **Definition**    |
| :------------ | :------- | :------- | :---------------- |
| route | [**Route**]({{< ref path="/api/actions/navigate/route/" lang="en" >}}) | ✓        | Navigation route. |
| controllerId | String |     | The navigation controller id to be used during the navigation action, If missing, the default navigation controller will be used instead. |

## How to use it?

On the example below there's a screen coming from BFF with a button that when clicked, open a new server-driven activity with a screen specified by BFF.

To test, your BFF's endpoint should return a the screen with the code below and call it in the frontend. You can pass a local route or a remote one that will pass the screen endpoint to the one it will navigate.

{{< tabs id="T94" >}}
{{% tab name="JSON" %}}

<!-- json-playground:pushStack.json
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:button",
    "text" : "Click me!",
    "onPress" : [ {
      "_beagleAction_" : "beagle:pushStack",
      "route" : {
        "screen" : {
          "_beagleComponent_" : "beagle:screenComponent",
          "child" : {
            "_beagleComponent_" : "beagle:text",
            "text" : "Hello second Screen"
          }
        }
      }
    } ]
  }
}
-->

{{% playground file="pushStack.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Screen(
    child = Button(
        text = "Click me!",
        onPress = listOf(
            Navigate.PushStack(
                Route.Local(
                    Screen(
                        child = Text("Hello second Screen")
                    )
                )
            )
        )
    )
)
```

{{% /tab %}}
{{< /tabs >}}
