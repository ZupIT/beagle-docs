---
title: "Lazy"
description: >
  Nesta seção, você encontra a descrição do componente Lazy e seus atributos.
---
---
## O que é?

O `Lazy Component` é usado para carregar de forma assíncrona algum componente do BFF.

A sua estrutura é representada como mostrado abaixo: 

| Atributo | Tipo | Obrigatório | Definição |
| :--- | :--- | :---: | :--- |
| path | String | ✓ | A URL que realiza a requisição. |
| initialState | [ServerDrivenComponent](./) | ✓ | Componente server driven que é apresentado enquanto uma requisição assíncrona está sendo feita. |

## Como usar?

{% tabs %}
{% tab title="JSON" %}
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
{% endtab %}

{% tab title="Kotlin DSL" %}
```kotlin
LazyComponent(
    path = "/listview.json",
    initialState = Text("Carregando conteúdo, aguarde...")
)
```
{% endtab %}
{% endtabs %}

### 👉 [Teste esse componente no Web Playground](https://beagle-playground.netlify.app/#/cloud/cce3015fbbcf49388dfb4ab3079f4f9f/lazy.json)

