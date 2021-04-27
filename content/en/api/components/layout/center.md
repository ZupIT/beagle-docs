---
title: Center
weight: 338
description: You will find here the description of the Center function and its attributes details
---

---


## What is it?

`Center` is a function to help you organize the layout of your view. It centers the component passed as parameter by setting `justifyContent`, `alignItems`, `alignSelf` and `alignContent` to `CENTER`.

See how the structure is represented:

| **Attribute** | **Type**  | Required | **Definition** |
| :----------- | :------------------------------------------------------------- | :---------: | :---------------------------------------------------------------------------------------------------------------- |
| self   | StyleComponent                                                |      ✓       | Component to be applied the style. |


## How to use it?

{{< tabs id="T145" >}}
{{% tab name="JSON" %}}

<!-- json-playground:center.json
{
  "_beagleComponent_" : "beagle:text",
  "text" : "simple text",
  "style" : {
    "flex" : {
      "justifyContent" : "CENTER",
      "alignItems" : "CENTER",
      "alignSelf" : "CENTER",
      "alignContent" : "CENTER"
    }
  }
}
-->

{{% playground file="center.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Center(
    self = Text(text = "simple text")
)
```

{{% /tab %}}
{{< /tabs >}}
