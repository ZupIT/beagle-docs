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
| webUrl | String | Caminho absoluto ou relativo da imagem a ser baixada. |
| mobileId | String | Identificador da imagem que foi previamente cadastrada nas plataformas mobile. |

Irá referenciar uma imagem que já está nos assets locais.

{{< tabs name="T136" >}}
{{% tab name="JSON" %}}
```javascript
{
  "_beagleImagePath_": "local",
  "url": "/imagemlocal.png",
  "mobileId": "imagemlocal"
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```javascript
ImagePath.Local(
  webUrl = "/imagePath.png",
  mobileId = "imagePath"
)
```
{{% /tab %}}
{{< /tabs >}}

### ImagePath.Remote

A sua estrutura é representada como mostrado abaixo: 

| **Atributos** | **Tipo** | Obrigatório | **Definição** |
| :--- | :--- | :--- | :--- |
| remoteUrl | String |     ✓ | Caminho absoluto ou relativo da imagem a ser baixada. |
| placeholder | [**ImagePath.Local**](imagepath#imagepath-local) |  | É possível passar um asset local no aplicativo que será mostrado enquanto a URL remota é carregada. |

Irá referenciar uma imagem que esteja hospedada em outro host ou relativo no próprio server.

{{< tabs name="T137" >}}
{{% tab name="JSON" %}}
```javascript
{
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
```kotlin
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
