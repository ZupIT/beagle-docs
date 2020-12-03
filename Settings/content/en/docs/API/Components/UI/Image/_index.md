---
title: Image
weight: 277
description: Here you'll find a Image description and its attributes details.
---

---

## What is it?

The Image widget defines a native image using server-driven data received through Beagle.  

Your structure is represented by the attributes below:

| **Attribute** | **Type** | Required | **Definition** |
| :--- | :--- | :--- | :--- |
| path | [**ImagePath**](imagepath.md) or [**Binding**](../../../context.md#bindings) |     ✓ | Refers to a local image or URL of a remote image to be exhibited. |
| mode | ImageContentMode |  | Responsible to control how the image will be internally controlled. |

## How to use it?



```javascript
{
  "_beagleComponent_": "beagle:image",
  "path": {
    "_beagleImagePath_": "remote",
    "url": "https://i.ibb.co/k9tYwtX/selo-do-exemplo-28420393.jpg",
    {
      "_beagleImagePath_": "remote",
      "url": "/imagePath.png",
      "placeholder": "imagePath"
    }
  },
  "mode": "CENTER"
}
```



```kotlin
Image(
    path = ImagePath.Remote(
        url = "https://i.ibb.co/k9tYwtX/selo-do-exemplo-28420393.jpg",
        placeholder = ImagePath.Local(mobileId = "imagePath", webUrl = "/imagePath.png")
    ),
    mode = ImageContentMode.CENTER
)
```



### 👉 [Test this example in the Web Playground](https://beagle-playground.netlify.app/#/cloud/447a8f52ebf84b779bbabc6cdb62b2e9/image.json)
