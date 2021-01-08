---
title: Image
weight: 289
description: Here you'll find a Image description and its attributes details.
---

---

## What is it?

The Image widget defines a native image using server-driven data received through Beagle.

Your structure is represented by the attributes below:

| **Attribute** | **Type**                                                                                                     | Required | **Definition**                                                      |
| :------------ | :----------------------------------------------------------------------------------------------------------- | :------- | :------------------------------------------------------------------ |
| path          | [**ImagePath**](/pt/home/api/components/ui/image/imagepath) or [**Binding**](/pt/home/api/context/#bindings) | ✓        | Refers to a local image or URL of a remote image to be exhibited.   |
| mode          | ImageContentMode                                                                                             |          | Responsible to control how the image will be internally controlled. |

## How to use it?

{{< tabs id="T116" >}}
{{% tab name="JSON" %}}

<!-- json-playground:imagePath.json
{
   "_beagleComponent_":"beagle:image",
   "path":{
      "_beagleImagePath_":"remote",
      "url":"https://i.ibb.co/k9tYwtX/selo-do-exemplo-28420393.jpg",
      "placeholder":{
        "mobileId": "imagePath",
        "webUrl": "/imagePath.png"
      }
   },
   "mode":"CENTER"
}
-->

{{% playground file="imagePath.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Image(
    path = ImagePath.Remote(
        url = "https://i.ibb.co/k9tYwtX/selo-do-exemplo-28420393.jpg",
        placeholder = ImagePath.Local(mobileId = "imagePath", webUrl = "/imagePath.png")
    ),
    mode = ImageContentMode.CENTER
)
```

{{% /tab %}}
{{< /tabs >}}
