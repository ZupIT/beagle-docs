---
title: Expanded
weight: 70
description: You will find here the description of the Expanded function and its attributes details
---

---


## What is it?

`Expanded` is a function to help you organize the layout of your view. It makes the component passed as parameter expand its size to all the available space. This is achieved by setting `width` to 100%, `height` to 100%, `alignSelf` to `STRETCH` and `grow` to 1.0.

See how the structure is represented:

| **Attribute** | **Type**  | Required | **Definition** |
| :----------- | :------------------------------------------------------------- | :---------: | :---------------------------------------------------------------------------------------------------------------- |
| self   | StyleComponent                                                |      ✓       | Component to receive the style. |


## How to use it?

{{< tabs id="T145" >}}
{{% tab name="JSON" %}}

<!-- json-playground:expanded.json
{
  "_beagleComponent_" : "beagle:text",
  "text" : "simple text",
  "style" : {
    "size" : {
      "width" : {
        "value" : 100.0,
        "type" : "PERCENT"
      },
      "height" : {
        "value" : 100.0,
        "type" : "PERCENT"
      }
    },
    "flex" : {
      "alignSelf" : "STRETCH",
      "grow" : 1.0
    }
  }
}
-->

{{% playground file="expanded.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Expanded(
    self = Text(text = "simple text")
)
```

{{% /tab %}}
{{< /tabs >}}
