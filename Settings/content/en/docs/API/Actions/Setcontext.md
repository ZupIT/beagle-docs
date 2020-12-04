---
title: Setcontext
weight: 264
description: Here you'll find a definition for SetContext and its attributes details
---

---

## What is it?

The `SetContext` action is responsible for changing the value of a context.

The setContext structure is:

| **Attribute** | **Type** | Required | **Definition** |
| :--- | :--- | :---: | :--- |
| contextId | String  | ✓ | Context identifier |
| value | Any | ✓ | New value to apply in the context |
| path | String |   |  Specific context point for changing value in case of arrays and maps &lt;key, value&gt;. |

{{% alert color="info" %}}
Get to know more about [**Beagle context**](../context.md). 
{{% /alert %}}

## How to use it?

See below an example of a text that is set by context and have an initial value "Set Context Example". The click event have a `SetContext` action that change the context value to "Context has changed".

{{< tabs name="T120" >}}
{{% tab name="JSON" %}}
```kotlin
{
  "_beagleComponent_": "beagle:container",
  "context":{
    "id": "myContext",
    "value":"Set Context Example"
  },
  "children": [
    {
      "_beagleComponent_": "beagle:text",
      "text":"@{myContext}"
    },
    {
      "_beagleComponent_": "beagle:button",
      "text": "Open Modal",
      "onPress": [
        {
          "_beagleAction_": "beagle:setContext",
          "contextId": "myContext",
          "value": "Context has changed"
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
        Text(text = "@{myContext}"),
        Button(
             text = "Open Modal",
             onPress = listOf(
                  SetContext(
                       contextId = "myContext",
                       value = "Context has changed"
                  )
             )
        )
     ),
     context = ContextData(
          id = "myContext",
          value = "Set Context Example"
     )
)
```
{{% /tab %}}
{{< /tabs >}}

### 👉 [Test this action in the Web Playground](https://beagle-playground.netlify.app/#/cloud/701b73771594478795b9c0dc6e088c0b/setContext.json)
