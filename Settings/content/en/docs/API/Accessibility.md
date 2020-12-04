---
title: Accessibility
weight: 216
description: Here you'll find a description of accessibility attributes
---

---

## What is it?

For now, there are two common accessibility attribute types in all platforms Beagle supports. 

| **Attributes** | **Type** | **Definition** |
| :--- | :--- | :--- |
| accessible | Boolean | **Required.** Indicates whether the component will be interpreted as accessible. Default is `true`. |
| accessibilityLabel | String | `string` containing a message that will be spoken by programs, like VoiceOver. |

{{% alert color="warning" %}}
If backend does not specify accessibility, the default values ​​for each platform will be used.
{{% /alert %}}

## How to use it?

{{< tabs name="T97" >}}
{{% tab name="JSON" %}}
```text
{
  "_beagleComponent_": "beagle:container",
  "children": [
    {
      "_beagleComponent_": "beagle:image",
          "path": {
            "_beagleImagePath_": "remote",
            "url": "https://i.ibb.co/rvRN9kv/logo.png"
          },
          "accessibility": {
            "accessibilityLabel": "Image Label",
            "accessible": true
          }
    }
  ]
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```
iner(
        children = listOf(
            Image(
                path = ImagePath.Remote("https://i.ibb.co/rvRN9kv/logo.png")
            ).applyAccessibility(
                accessibility = Accessibility(true, "Image Label")
            )
        )
    )
```
{{% /tab %}}
{{< /tabs >}}

### 👉 [Test this example on Web Playground](https://beagle-playground.netlify.app/#/cloud/984d1316f43146f9a1341c478783d536/accessibility.json)
