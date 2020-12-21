---
title: Pushstack
weight: 252
description: Here you'll find PushStack description and its attribute.
---

---

### What is it?

Presents a new screen and puts it on the pile.

Your structure is represented by the attribute below: 

| **Attribute** | **Type** | Required | **Definition** |
| :--- | :--- | :--- | :--- |
| route | [**Route**](route/) |         ✓ | Navigation route. |

## How to use it?

On the example below there's a screen coming from BFF with a button that when clicked, open a new server-driven activity with a screen specified by BFF.

To test, your BFF's endpoint should return a the screen with the code below and call it in the frontend. You can pass a local route or a remote one that will pass the screen endpoint to the one it will navigate. 

{{< tabs id="T94" >}}
{{% tab name="JSON" %}}
```text
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
```
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

### 👉 [Test this example on Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/button.json)

###
