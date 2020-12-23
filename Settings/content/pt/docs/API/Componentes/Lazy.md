---
title: Lazy
weight: 334
description: Descrição do componente Lazy e seus atributos
---

---

## O que é?

O `Lazy Component` é usado para carregar de forma assíncrona algum componente do BFF.

A sua estrutura é representada como mostrado abaixo: 

| Atributo | Tipo | Obrigatório | Definição |
| :--- | :--- | :---: | :--- |
| path | String | ✓ | A URL que realiza a requisição. |
| initialState | [ServerDrivenComponent](.././) | ✓ | Componente server driven que é apresentado enquanto uma requisição assíncrona está sendo feita. |

## Como usar?

{{< tabs id="T144" >}}
{{% tab name="JSON" %}}
```kotlin
{
  "_beagleComponent_": "beagle:lazycomponent",
  "path": "/listview.json",
  "initialState": {
    "_beagleComponent_": "beagle:text",
    "text": "Carregando conteúdo, aguarde..."
  }
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
LazyComponent(
    path = "/listview.json",
    initialState = Text("Carregando conteúdo, aguarde...")
)
```
{{% /tab %}}
{{< /tabs >}}

### 👉 [Teste esse componente no Web Playground](https://beagle-playground.netlify.app/#/cloud/cce3015fbbcf49388dfb4ab3079f4f9f/lazy.json)
