---
title: Local
weight: 258
---

---

## What is it? <a id="definicao"></a>

Navigation for a local content.

The structure is represented by the attributes below:

| **Attribute** | **Type** | Required | **Definition** |
| :--- | :--- | :--- | :--- |
| screen | [**Screen**](https://docs.usebeagle.io/v/v1.0-en/api/screen) |  | Screen to be loaded |

## How to use it?

{{< tabs name="T118" >}}
{{% tab name="JSON" %}}
```javascript
{
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
```
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

### 👉 [Test this action in the Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/button.json)
