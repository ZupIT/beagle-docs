---
title: Accessibility
weight: 160
description: You will find here the description of the Accessibility function and its attributes details
---

---


## What is it?

`Accessibility` is a function that applies accessibility to your component.

See how the structure is represented:

| **Attribute** | **Type**  | Required | **Definition** |
| :----------- | :------------------------------------------------------------- | :---------: | :---------------------------------------------------------------------------------------------------------------- |
| self   | StyleComponent                                                |      ✓       | Component the receive the accessibility properties. |
| accessible | Boolean | ✓ | Indicates whether the component will be interpreted as accessible. Default is `true`. |
| accessibilityLabel | String |   | Contains a message that will be spoken by programs like `VoiceOver.` |
| isHeader | Boolean |  | Indicates whether the component is a header. Default is `false`. |



## How to use it?

{{< tabs id="T145" >}}
{{% tab name="JSON" %}}

<!-- json-playground:accessibility.json
{
  "_beagleComponent_" : "beagle:text",
  "text" : "simple text",
  "accessibility" : {
    "accessible" : true,
    "accessibilityLabel" : "text",
    "isHeader" : false
  }
}
-->

{{% playground file="accessibility.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Accessibility(
  self = Text("simple text"),
  accessibilityLabel = "text"
    )
```

{{% /tab %}}
{{< /tabs >}}
