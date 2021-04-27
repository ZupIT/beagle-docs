---
title: Column
weight: 338
description: You will find here the description of the Column function and its attributes details
---

---


## What is it?

`Column` is a function that displays your children in a vertical matrix.

See how the structure is represented:

| **Attribute** | **Type**  | Required | **Definition** |
| :----------- | :------------------------------------------------------------- | :---------: | :---------------------------------------------------------------------------------------------------------------- |
| children     | List &lt;[ServerDriven Component]({{< ref path="/api/components" lang="pt" >}})&gt; |            | The components below this component in the tree.
| context      | [ContextData]({{< ref path="/api/context/" lang="pt" >}})                           |             | It is the [**context**]({{< ref path="/api/context" lang="en" >}}) in this widget.                                                    |
| onInit       | List&lt;[**Action**]({{< ref path="/api/actions" lang="en" >}})&gt; |  | It is a parameter that allows you to define a list of actions to be performed when the Widget is displayed. |
| styleId   | String                                                |             | Refers to a locally configured style that it will be applied on the container. |
| reverse   | Boolean                                                |             | Changes the order of items. Default is `false`. |


## Como usar?

{{< tabs id="T145" >}}
{{% tab name="JSON" %}}

<!-- json-playground:column.json
{
  "_beagleComponent_" : "beagle:container",
  "children" : [ {
    "_beagleComponent_" : "beagle:text",
    "text" : "simple text"
  } ],
  "style" : {
    "flex" : {
      "flexDirection" : "COLUMN"
    }
  }
}
-->

{{% playground file="column.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Column(
    children = listOf(
        Text(text = "simple text")
    )
)
```

{{% /tab %}}
{{< /tabs >}}
