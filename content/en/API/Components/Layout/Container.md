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
| children | List &lt;[**ServerDriven Component**](/api/widget)&gt; |    ✓ | Defines the component list that it is part of the container.  |
| context | [**ContextData**](/api/context) |  | It is the [**context**](/api/context) in this widget.  |
| onInit | List&lt;[**Action**](/api/actions)&gt; |  | It is a parameter that allows you to define a list of actions to be performed when the Widget is displayed.  |

## How to use it? 

{{< tabs id="T127" >}}
{{% tab name="JSON" %}}
<!-- json-playground:container.json
{
    "_beagleComponent_": "beagle:container",
    "children": [
        {
          "_beagleComponent_": "beagle:text",
          "text": "@{myContext}"
        }
    ],
    "context": {
        "id": "myContext",
        "value": "Hello world!" 
    }
}
-->
{{% playground file="container.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Container(
    children = listOf(
        Text(text = "@{myContext}")
    ),
    context = ContextData(
        id = "myContext",
        value = "Hello World!"
    )
)
```
{{% /tab %}}
{{< /tabs >}}
