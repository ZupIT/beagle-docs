---
title: Imagepath
weight: 293
description: Here you'll find ImagePath description
---

---

## What is it?

The ImagePath allows you to define how the image will be loaded, which **can be locally or remotely.** 

## How to use it?

### ImagePath.Local

It will reference a image that is on locais.JSONKotlin DSL assets. Your structure is represented by the attributes below:

| **Attribute** | **Type** | **Definition** |
| :--- | :--- | :--- |
| webUrl | String | Absolute or relative image path to be downloaded. |
| mobileId | String | Image's identifier that was previously registered on mobile platforms. |

It will refer an image that it is already in the local assets. 

{{< tabs id="T118" >}}
{{% tab name="JSON" %}}
```javascript
  "_beagleImagePath_": "local",
  "url": "/imagemlocal.png",
  "mobileId": "imagemlocal"
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```
ImagePath.Local(
  webUrl = "/imagePath.png",
  mobileId = "imagePath"
)
```
{{% /tab %}}
{{< /tabs >}}



### ImagePath.Remote

It will reference an image that its hosted on another host or it's related to its own server.JSONKotlin DSL. Your structure is represented by the attributes below:

| **Attribute** | **Type** | Required | **Definition** |
| :--- | :--- | :--- | :--- |
| remoteUrl | String |     ✓ | Absolute or relative image path to be downloaded. |
| placeholder | **​**[**ImagePath.Local**](https://docs.usebeagle.io/api/componentes/ui/image/imagepath-1#imagepath-local)**​** |  | It's possible to pass a local asset on the app that will be shown meanwhile the remote URL is loaded. |

It will refer to an image that is hosted in another host or a relative one in the own server. 



{{< tabs id="T119" >}}
{{% tab name="JSON" %}}
```javascript
 "_beagleImagePath_": "remote",
  "url": "https://i.ibb.co/k9tYwtX/selo-do-exemplo-28420393.jpg",
  "placeholder": {
    "_beagleImagePath_": "local",
    "url": "/imagemlocal.png",
    "mobileId": "imagemlocal"
  }
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```
ImagePath.Remote(
  remoteUrl = "https://i.ibb.co/k9tYwtX/selo-do-exemplo-28420393.jpg",
  placeHolder = ImagePath.Local(
      webUrl = "/imagePath.png",
      mobileId = "imagePath"
  )
)
```
{{% /tab %}}
{{< /tabs >}}
