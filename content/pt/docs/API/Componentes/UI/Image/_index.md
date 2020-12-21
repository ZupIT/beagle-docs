---
title: Image
weight: 314
description: Descrição do componente Image e seus atributos
---

---

## O que é?

O widget de Imagem define uma imagem nativa usando informações server-driven recebidas por meio do Beagle.  

A sua estrutura é representada como mostrado abaixo: 

| **Atributo** | **Tipo** | Obrigatório | **Definição** |
| :--- | :--- | :---: | :--- |
| path | [**ImagePath**](imagepath) ou [**Binding**](../../../../contexto/#binding) | ✓ | Referência de uma imagem local ou url de uma imagem remota a ser exibida. |
| mode | [ImageContentMode](imagecontentmode) |   | É responsável por controlar como a imagem será controlada internamente. |

## Como usar?

{{< tabs name="T134" >}}
{{% tab name="JSON" %}}
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

### 👉 [Teste esse exemplo no Web Playground](https://beagle-playground.netlify.app/#/cloud/447a8f52ebf84b779bbabc6cdb62b2e9/image.json)
