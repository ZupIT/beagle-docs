---
title: "Text"
description: >
    Nesta seção, você encontra a descrição do componente do componente Text e seus atributos
---

## O que é?

O componente `Text` é responsável por definir o texto nativamente usando informações server-driven. 

A estrutura é representada como mostrado abaixo:

| Atributo | Tipo | Obrigatório | Definição |
| :--- | :--- | :---: | :--- |
| text | String ou [**Binding**](https://docs.usebeagle.io/api/contexto#bindings)\*\*\*\* | ✓ | Define o conteúdo em texto a ser exibido. |
| styleId | String |   | Referencia o estilo configurado localmente a ser aplicado no texto. |
| textColor | String |   | Define a cor do texto em hexadecimal. |
| alignment | \*\*\*\*[**TextAlignment**](text.md#textalignment)\*\*\*\* |   | Define o alinhamento do conteúdo do texto. |

### TextAlignment

| Atributo | Definição |
| :--- | :--- |
| LEFT | conteúdo alinhado à **esquerda** dentro do visualizador de texto.  |
| CENTER | conteúdo alinhado no **centro** dentro do visualizador de texto.  |
| RIGHT | conteúdo alinhado à **direita** dentro do visualizador de texto.  |

## Como usar?

{% tabs %}
{% tab title="JSON" %}
```kotlin
{
    "_beagleComponent_": "beagle:text",
    "text": "Hello World!"
}
```
{% endtab %}

{% tab title="Kotlin DSL" %}
```kotlin
Text(text = "Hello World!")
```
{% endtab %}
{% endtabs %}

### 👉 [Teste esse componente no Web Playground](https://beagle-playground.netlify.app/#/cloud/cac8ecb56fcf490d9e09ab7adc322f55/text.json)

