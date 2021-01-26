---
title: PushView
weight: 254
description: Here you'll find PushView description and its attribute.
---

---

### What is it?
What is it?
Presents a new screen and puts it on the pile.

Your structure is represented by the attribute below:

| **Attribute** | **Type**                                       | Required | **Definition**    |
| :------------ | :--------------------------------------------- | :------- | :---------------- |
| route         | [**Route**](/api/actions/navigate/route/) | ✓        | Navigation route. |

## How to use it?

On the example below, there is a screen coming from BFF with a button that, when is clicked, opens a new server-drive fragment with a specific BFF screen.

You need an endpoint to return with the code below from you BFF to test it and the frontend will call it. You can pass a local \ or a remote route will pass the endpoint of the screen, which it will be navigate.

{{< tabs id="T95" >}}
{{% tab name="JSON" %}}

<!-- json-playground:pushView.json
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:button",
    "text" : "Click me!",
    "onPress" : [ {
      "_beagleAction_" : "beagle:pushView",
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

{{% playground file="pushView.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Screen(
    child = Button(
        text = "Click me!",
        onPress = listOf(
            Navigate.PushView(
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
