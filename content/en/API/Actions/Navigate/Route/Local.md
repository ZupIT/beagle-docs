---
title: Local
weight: 270
---

---

## What is it? <a id="definicao"></a>

Navigation for a local content.

The structure is represented by the attributes below:

| **Attribute** | **Type** | Required | **Definition** |
| :--- | :--- | :--- | :--- |
| screen | [**Screen**](/api/screen) |  | Screen to be loaded |

## How to use it?

{{< tabs id="T108" >}}
{{% tab name="JSON" %}}
<!-- json-playground:local.json{
  "_beagleComponent_": "beagle:button",
  "text": "Click me!",
  "onPress": [
    {
      "_beagleAction_": "beagle:pushView",
      "route": {
        "screen": {
          "_beagleComponent_": "beagle:screenComponent",
          "child": {
            "_beagleComponent_": "beagle:text",
            "text": "Hello Screen from Navigate"
          }
        }
      }
    }
  ]
}
-->
{{% playground file="local.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```
Button(
    onPress = listOf(
         Navigate.PushView(
            Route.Local(
                Screen(
                    child = Text("Hello Screen from Navigate")
                )
            )
     )),
    text = "Click me!"
)
```
{{% /tab %}}
{{< /tabs >}}
