---
title: Container
weight: 313
description: Container components description and its attribute details
---

---

## What is it? 

`Container` is a component that contains other components inside it. 

See how the structure is represented:

| **Attribute** | **Type**  | Required | **Definition** |
| :--- | :--- | :--- | :--- |
| children | List &lt;[**ServerDriven Component**](https://docs.usebeagle.io/api/widget)&gt; |    ✓ | Defines the component list that it is part of the container.  |
| context | [**ContextData**](https://docs.usebeagle.io/api/context) |  | It is the [**context**](https://docs.usebeagle.io/api/context) in this widget.  |
| onInit | List&lt;[**Action**](https://docs.usebeagle.io/api/actions)&gt; |  | It is a parameter that allows you to define a list of actions to be performed when the Widget is displayed.  |

## How to use it? 

{{< tabs name="T127" >}}
{{% tab name="JSON" %}}
```kotlin
{
    "_beagleComponent_": "beagle:container",
    "children": [
        {
          "_beagleComponent_": "beagle:text",
          "text": "@{myContext.value}"
        }
    ],
    "context": {
        "id": "myContext",
        "value": "Hello world!" 
    }
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Container(
    children = listOf(
        Text(text = "@{myContext.value}")
    ),
    context = ContextData(
        id = "myContext",
        value = "Hello World!"
    )
)
```
{{% /tab %}}
{{< /tabs >}}

### 👉 [ Test this component in the Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/container.json)
