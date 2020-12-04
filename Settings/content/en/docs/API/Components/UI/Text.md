---
title: Text
weight: 288
description: Description of the component Text and its attributes
---

---

## What is it?

`Text` component defines the native text using the server driven information. 

The structure is represented by the attributes below:

| Attribute | Type | Required | Definition |
| :--- | :--- | :--- | :--- |
| text | String or [**Binding**](https://docs.usebeagle.io/v/v1.0-en/api/context#bindings) |   ✓ | Defines the content in text to be rendered. |
| styleId | String |  | Refers to a locally configured style that it will be applied on the text. |
| textColor | String |  | Defines the text color.  |
| alignment | [**TextAlignment**](text.md#textalignment) |  | Define the alignment of the text. |

### TextAlignment

| At**tributes** | Definition |
| :--- | :--- |
| LEFT | Content align to the **left** in the text viewer. |
| CENTER | Content align in the **center** in the text viewer. |
| RIGHT | Content align to the **right** in the text viewer. |

## How to use it?

{{< tabs name="T131" >}}
{{% tab name="JSON" %}}
```kotlin
{
    "_beagleComponent_": "beagle:text",
    "text": "Hello World!"
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Text(text = "Hello World!")
```
{{% /tab %}}
{{< /tabs >}}

### 👉 [Test this component in the Web Playground](https://beagle-playground.netlify.app/#/cloud/cac8ecb56fcf490d9e09ab7adc322f55/text.json)
