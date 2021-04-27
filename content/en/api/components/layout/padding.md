---
title: Padding
weight: 338
description: You will find here the description of the Padding function and its attributes details
---

---


## What is it?

`Padding` is a function to help you organize the layout of your view. It creates a space between the component passed as parameter and its content by setting its padding (style property) to the given value.

See how the structure is represented:

| **Attribute** | **Type**  | Required | **Definition** |
| :----------- | :------------------------------------------------------------- | :---------: | :---------------------------------------------------------------------------------------------------------------- |
| self   | StyleComponent                                                |      ✓       | Component to receive the style. |
| padding   | EdgeValue                                                |      ✓       | Value and position to be applied to the component. |


## How to use it?

{{< tabs id="T145" >}}
{{% tab name="JSON" %}}

<!-- json-playground:padding.json
{
  "_beagleComponent_" : "beagle:text",
  "text" : "simple text",
  "style" : {
    "padding" : {
      "all" : {
        "value" : 40.0,
        "type" : "REAL"
      }
    }
  }
}
-->

{{% playground file="padding.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Padding(
  padding = EdgeValue.all(40),
  self = Text("simple text")
    )
```

{{% /tab %}}
{{< /tabs >}}
