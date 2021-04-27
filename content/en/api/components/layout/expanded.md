---
title: Expanded
weight: 338
description: You will find here the description of the Expanded function and its attributes details
---

---


## What is it?

`Expanded` is a function that applies the expansion attributes of flex, occupies the available space.

See how the structure is represented:

| **Attribute** | **Type**  | Required | **Definition** |
| :----------- | :------------------------------------------------------------- | :---------: | :---------------------------------------------------------------------------------------------------------------- |
| self   | StyleComponent                                                |      ✓       | Component to be applied the style. |


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
