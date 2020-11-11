---
title: "Image"
weight: 11
description: >
  Nesta seção, você encontra a descrição da classe ImagePath.
---
---
## O que é?

O widget de Imagem define uma imagem nativa usando informações server-driven recebidas por meio do Beagle.  

A sua estrutura é representada como mostrado abaixo: 

| **Atributo** | **Tipo** | Obrigatório | **Definição** |
| :--- | :--- | :---: | :--- |
| path | \*\*\*\*[**ImagePath**](imagepath-1.md) ****ou [**Binding**](../../../contexto.md#binding)\*\*\*\* | ✓ | Referência de uma imagem local ou url de uma imagem remota a ser exibida. |
| mode | [ImageContentMode](imagecontentmode.md) |   | É responsável por controlar como a imagem será controlada internamente. |

## Como usar?

{% tabs %}
{% tab title="JSON" %}
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
{% endtab %}

{% tab title="Kotlin DSL" %}
```kotlin
Image(
    path = ImagePath.Remote(
        url = "https://i.ibb.co/k9tYwtX/selo-do-exemplo-28420393.jpg",
        placeholder = ImagePath.Local(mobileId = "imagePath", webUrl = "/imagePath.png")
    ),
    mode = ImageContentMode.CENTER
)
```
{% endtab %}
{% endtabs %}

### 👉 [Teste esse exemplo no Web Playground](https://beagle-playground.netlify.app/#/cloud/447a8f52ebf84b779bbabc6cdb62b2e9/image.json)

