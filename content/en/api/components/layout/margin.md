---
title: Margin
weight: 338
description: You will find here the description of the Margin function and its attributes details
---

---


## What is it?

`Margin` is a function that applies an empty space that surrounds the component.

See how the structure is represented:

| **Attribute** | **Type**  | Required | **Definition** |
| :----------- | :------------------------------------------------------------- | :---------: | :---------------------------------------------------------------------------------------------------------------- |
| self   | StyleComponent                                                |      ✓       | Component to be applied the style. |
| margin   | EdgeValue                                                |      ✓       | Value and position to be applied to the component. |


## How to use it?

{{< tabs id="T145" >}}
{{% tab name="JSON" %}}

<!-- json-playground:margin.json
{
  "_beagleComponent_" : "beagle:text",
  "text" : "simple text",
  "style" : {
    "margin" : {
      "all" : {
        "value" : 40.0,
        "type" : "REAL"
      }
    }
  }
}
-->

{{% playground file="margin.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Margin(
  margin = EdgeValue.all(40),
  self = Text("simple text")
    )
```

{{% /tab %}}
{{< /tabs >}}
