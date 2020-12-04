---
title: Alert
weight: 222
description: You will find here Alert definition and its attributes details
---

---

## What is it?

`Alert` class creates a confirmation element.  


Alert structure is:

| Attribute | Type | Required | Definition |
| :--- | :--- | :--- | :--- |
| title | String or [**Binding**](https://docs.usebeagle.io/v/v1.0-en/api/context#bindings) |  | Box alert title. |
| message | String or [**Binding**](https://docs.usebeagle.io/v/v1.0-en/api/context#bindings) |        ✓ | Box alert message. |
| onPressOk | [**Action**](https://docs.usebeagle.io/v/v1.0-en/api/actions) |  | Confirmation button action.  |
| labelOk | String |  | Confirmation button label. |

## How to use it?

{{< tabs name="T100" >}}
{{% tab name="JSON" %}}
```javascript
{
    "_beagleComponent_": "beagle:container",
    "children": [
      {
        "_beagleComponent_": "beagle:button",
        "text": "Alert Example",
        "onPress": [
          {
            "_beagleAction_": "beagle:alert",
            "title": "My Title",
            "message": "Alert message",
            "labelOk": "Close"
              }
            ]
          }
        ]
      }
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Container(
          children = listOf(
          Button(
                  text = "Alert Example",
                  onPress = listOf(
                    Alert(
                         title = "My Title",
                         message = "Alert message",
                         labelOk = "Close"
                    )
                 )
              )
           )
        )
```
{{% /tab %}}
{{< /tabs >}}

###  👉 [Test this example in the Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/button.json)​
