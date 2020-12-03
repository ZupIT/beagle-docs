---
title: Lazy
<<<<<<< HEAD
weight: 320
description: Descrição do componente Lazy e seus atributos
=======
weight: 337
description: >-
  This a example for a description
>>>>>>> c5badf6233a50a40ff4638a92338d6a7f613e625
---

---

<<<<<<< HEAD
## O que é?

O `Lazy Component` é usado para carregar de forma assíncrona algum componente do BFF.

A sua estrutura é representada como mostrado abaixo: 

| Atributo | Tipo | Obrigatório | Definição |
| :--- | :--- | :---: | :--- |
| path | String | ✓ | A URL que realiza a requisição. |
| initialState | [ServerDrivenComponent](./) | ✓ | Componente server driven que é apresentado enquanto uma requisição assíncrona está sendo feita. |

## Como usar?



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



```kotlin
LazyComponent(
    path = "/listview.json",
    initialState = Text("Carregando conteúdo, aguarde...")
)
```



### 👉 [Teste esse componente no Web Playground](https://beagle-playground.netlify.app/#/cloud/cce3015fbbcf49388dfb4ab3079f4f9f/lazy.json)
=======
undefined
>>>>>>> c5badf6233a50a40ff4638a92338d6a7f613e625
