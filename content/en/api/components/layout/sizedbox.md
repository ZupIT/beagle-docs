---
title: SizedBox
weight: 338
description: You will find here the description of the SizedBox function and its attributes details
---

---


## What is it?

`SizedBox` is a function that applies a size to your component.

See how the structure is represented:

| **Attribute** | **Type**  | Required | **Definition** |
| :----------- | :------------------------------------------------------------- | :---------: | :---------------------------------------------------------------------------------------------------------------- |
| self   | StyleComponent                                                |      ✓       | Component to be applied the style. |
| width   | Int / Double / UnitValue                                                |      ✓       | Width value. |
| height   | Int / Double / UnitValue                                                 |      ✓       | Height value. |


## How to use it?

{{< tabs id="T145" >}}
{{% tab name="JSON" %}}

<!-- json-playground:sizedbox.json
{
  "_beagleComponent_" : "beagle:text",
  "text" : "simple text",
  "style" : {
    "size" : {
      "width" : {
        "value" : 150.0,
        "type" : "REAL"
      },
      "height" : {
        "value" : 150.0,
        "type" : "REAL"
      }
    }
  }
}
-->

{{% playground file="sizedbox.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
SizedBox(
  width = 150,
  height = 150,
  self = Text("simple text")
    )
```

{{% /tab %}}
{{< /tabs >}}
