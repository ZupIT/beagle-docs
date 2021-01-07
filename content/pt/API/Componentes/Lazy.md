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
| initialState | [ServerDrivenComponent](/pt/api/componentes/) | ✓ | Componente server driven que é apresentado enquanto uma requisição assíncrona está sendo feita. |

## Como usar?

{{< tabs id="T144" >}}
{{% tab name="JSON" %}}
<!-- json-playground:lazy.json
{
  "_beagleComponent_": "beagle:lazycomponent",
  "path": "lazy.json",
  "initialState": {
    "_beagleComponent_": "beagle:text",
    "text": "Loading the screen, please wait",
    "alignment": "CENTER"
  }
}
-->
{{% playground file="lazy.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
LazyComponent(
    path = "lazy.json",
    initialState = Text("Loading the screen, please wait", alignment = TextAlignment.CENTER)
)
```
{{% /tab %}}
{{< /tabs >}}
