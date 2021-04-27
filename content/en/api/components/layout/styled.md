---
title: Styled
weight: 338
description: You will find here the description of the Styled function and its attributes details
---

---


## What is it?

`Styled` is a function to help you organize the layout and style of your view. It is a simple way of setting various style properties at once.

See how the structure is represented:

| **Attribute** | **Type**  | Required | **Definition** |
| :----------- | :------------------------------------------------------------- | :---------: | :---------------------------------------------------------------------------------------------------------------- |
| self   | StyleComponent                                                |      ✓       | Component to be applied the style. |
| block   | Style.() -> Unit                                                |      ✓       | Function to apply styling. |


## How to use it?

{{< tabs id="T145" >}}
{{% tab name="JSON" %}}

<!-- json-playground:styled.json
{
  "_beagleComponent_" : "beagle:text",
  "text" : "simple text",
  "style" : {
    "backgroundColor" : "#f1f1f1",
    "flex" : {
      "alignSelf" : "CENTER"
    }
  }
}
-->

{{% playground file="styled.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Styled(
        self = Text("simple text")
    ) {
        backgroundColor = "#f1f1f1"
        flex.alignSelf = AlignSelf.CENTER
    }
```

{{% /tab %}}
{{< /tabs >}}
