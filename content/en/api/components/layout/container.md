---
title: Container
weight: 313
description: You will find here the description of Container components and its attribute details
---

---

## What is it? 

`Container` is a component that contains other components inside it. 

See how the structure is represented:

| **Attribute** | **Type**  | Required | **Definition** |
| :--- | :--- | :--- | :--- |
| children | List &lt;[**ServerDriven Component**]({{< ref path="/api/widget" lang="en" >}})&gt; |    ✓ | Defines the component list that is part of the container.  |
| context | [**ContextData**]({{< ref path="/api/context" lang="en" >}}) |  | It is the [**context**]({{< ref path="/api/context" lang="en" >}}) in this widget.  |
| onInit | List&lt;[**Action**]({{< ref path="/api/actions" lang="en" >}})&gt; |  | It is a parameter that allows you to define a list of actions to be performed when the Widget is displayed. |
| styleId   | String                                              |          | Refers to a locally configured style that it will be applied on the container. |


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
