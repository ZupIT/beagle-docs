---
title: Imagepath
weight: 318
description: 'Nesta seção, você encontra a descrição da classe ImagePath'
---

---

## O que é?

O ImagePath permite que você defina como uma imagem será carregada, podendo ser local ou remote.

## Como usar?

### ImagePath.Local

A sua estrutura é representada como mostrado abaixo: 

| **Atributo** | **Tipo** | **Definição** |
| :--- | :--- | :--- |
| url | String ou [**Binding**]({{< ref path="/api/context#binding" lang="pt" >}}) | Caminho absoluto ou relativo da imagem a ser baixada. |
| mobileId | String ou [**Binding**]({{< ref path="/api/context#binding" lang="pt" >}}) | Identificador da imagem que foi previamente cadastrada nas plataformas mobile. |

Irá referenciar uma imagem que já está nos assets locais.

{{< tabs id="T136" >}}
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
{{% playground file="imagePathLocal.json" language="pt" %}}
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

A sua estrutura é representada como mostrado abaixo: 

| **Atributos** | **Tipo** | Obrigatório | **Definição** |
| :--- | :--- | :--- | :--- |
| url | String |     ✓ | Caminho absoluto ou relativo da imagem a ser baixada. |
| placeholder | [**ImagePath.Local**](#imagepathlocal) |  | É possível passar um asset local no aplicativo que será mostrado enquanto a URL remota é carregada. |

Irá referenciar uma imagem que esteja hospedada em outro host ou relativo no próprio server.

{{< tabs id="T137" >}}
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
{{% playground file="imagePathRemote.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Image(
  ImagePath.Remote("https://mcdn.wallpapersafari.com/medium/8/37/zlwnoM.jpg")
)
```
{{% /tab %}}
{{< /tabs >}}
