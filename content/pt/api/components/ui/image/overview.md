---
title: Visão Geral
weight: 1
type: overview
description: Descrição do componente Image e seus atributos
---

---

## O que é?

O widget de Imagem define uma imagem nativa usando informações server-driven recebidas por meio do Beagle.

A sua estrutura é representada como mostrado abaixo:

| **Atributo** | **Tipo**                                                                                                   | Obrigatório | **Definição**                                                             |
| :----------- | :--------------------------------------------------------------------------------------------------------- | :---------: | :------------------------------------------------------------------------ |
| path         | [**ImagePath**]({{< ref path="/api/components/ui/image/imagepath" lang="pt" >}}) ou [**Binding**]({{< ref path="/api/context#binding" lang="pt" >}}) |      ✓      | Referência de uma imagem local ou url de uma imagem remota a ser exibida. |
| mode         | [ImageContentMode]({{< ref path="/api/components/ui/image/imagecontentmode" lang="pt" >}})                                      |             | É responsável por controlar como a imagem será controlada internamente.   |

## Como usar?

{{< tabs id="T134" >}}
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

{{% playground file="imagePath.json" language="pt" %}}
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
