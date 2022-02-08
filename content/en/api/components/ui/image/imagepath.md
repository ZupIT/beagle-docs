---
title: Imagepath
weight: 293
description: You will find here a description of ImagePath.
---

---

## What is it?

The ImagePath allows you to define how the image will be loaded, which **can be locally or remotely.**

## How to use it?

### ImagePath.Local

It will reference a image that is on locais.JSONKotlin DSL assets. Your structure is represented by the attributes below:

| **Attribute** | **Type** | **Definition**                                                         |
| :------------ | :------- | :--------------------------------------------------------------------- |
| url        | String or [**Binding**]({{< ref path="/api/context/#bindings" lang="en" >}}) | Absolute or relative image path to be downloaded.                      |
| mobileId      | String or [**Binding**]({{< ref path="/api/context/#bindings" lang="en" >}}) | Image's identifier that was previously registered on mobile platforms. |

It will refer an image that it is already in the local assets.

{{< tabs id="T118" >}}
{{% tab name="JSON" %}}

<!-- json-playground:imagePathLocal.json
{
  "_beagleComponent_": "beagle:image",
      "path": {
        "_beagleImagePath_": "local",
        "url": "public/web-illustration.png",
        "mobileId": "mobileIllustration"
      }
}
-->

{{% playground file="imagePathLocal.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Image(
    ImagePath.Local.both(
        "public/web-illustration.png",
        "mobileIllustration"
    )
)
```

{{% /tab %}}
{{< /tabs >}}

### ImagePath.Remote

It will reference an image that its hosted on another host or it's related to its own server.JSONKotlin DSL. Your structure is represented by the attributes below:

| **Attribute** | **Type**                                                                                 | Required | **Definition**                                                                                        |
| :------------ | :--------------------------------------------------------------------------------------- | :------- | :---------------------------------------------------------------------------------------------------- |
| url     | String or [**Binding**]({{< ref path="/api/context/#bindings" lang="en" >}})              | ✓        | Absolute or relative image path to be downloaded.                                                     |
| placeholder   | **​**[**ImagePath.Local**]({{< ref path="/api/components/ui/image/imagepath#imagepathlocal" lang="en" >}})**​** |          | It's possible to pass a local asset on the app that will be shown meanwhile the remote URL is loaded. |

It will refer to an image that is hosted in another host or a relative one in the own server.

{{< tabs id="T119" >}}
{{% tab name="JSON" %}}

<!-- json-playground:imagePathRemote.json
{
  "_beagleComponent_": "beagle:image",
"path": {
"_beagleImagePath_": "remote",
"url": "https://mcdn.wallpapersafari.com/medium/8/37/zlwnoM.jpg"
}
}
-->

{{% playground file="imagePathRemote.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Image(
  ImagePath.Remote("https://mcdn.wallpapersafari.com/medium/8/37/zlwnoM.jpg")
)
```

{{% /tab %}}
{{< /tabs >}}
