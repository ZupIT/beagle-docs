---
title: "ScrollView"
linkTitle: "ScrollView"
description: >
  Nesta seção, você encontra a descrição do componente Scroll View e seus atributos.
---

## O que é?

O componente Scroll View é um container especializado que exibe os componentes em visualização por scroll no layout. 

A sua estrutura é representada como mostrado abaixo: 

<table>
  <thead>
    <tr>
      <th style="text-align:left"><b>Atributo</b>
      </th>
      <th style="text-align:left"><b>Tipo</b>
      </th>
      <th style="text-align:center">Obrigat&#xF3;rio</th>
      <th style="text-align:left"><b>Defini&#xE7;&#xE3;o</b>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">children</td>
      <td style="text-align:left">
        <p>List
          <br />&lt;<a href="../../widget.md">ServerDriven</a>
        </p>
        <p><a href="../../widget.md">Component</a>&gt;</p>
      </td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">Define a lista de atributos a ser exibida na visualiza&#xE7;&#xE3;o do
        layout. <b><br /></b>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">scrollDirection</td>
      <td style="text-align:left">ScrollAxis</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">
        <p>Define a dire&#xE7;&#xE3;o da rolagem em scroll na tela.</p>
        <p>A dire&#xE7;&#xE3;o do scroll pode ser modificada de acordo com a classe <code>ScrollAxis</code> definida
          logo abaixo. Por default, tem o valor de<code>VERTICAL</code>.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">scrollBarEnabled</td>
      <td style="text-align:left">Boolean</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Determina se a barra de rolagem vai ser exibida ou n&#xE3;o. Essa configura&#xE7;&#xE3;o
        &#xE9; verdadeira por default.</td>
    </tr>
    <tr>
      <td style="text-align:left">context</td>
      <td style="text-align:left"><a href="../../contexto.md">ContextData</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Dita um contexto para a scroll view.</td>
    </tr>
  </tbody>
</table>

### ScrollAxis

É um `ENUM`, cujos valores são:

| Valor | Definição |
| :--- | :--- |
| VERTICAL | Para definir o scroll como vertical. |
| HORIZONTAL | Para definir o scroll como horizontal. |

## Como usar?

{% tabs %}
{% tab title="JSON" %}
```kotlin
{
  "_beagleComponent_": "beagle:container",
  "style": {
    "flex": {
      "alignItems": "CENTER",
      "justifyContent": "CENTER"
    }
  },
  "children": [
    {
      "_beagleComponent_": "beagle:scrollView",
      "children": [
        {
          "_beagleComponent_": "beagle:image",
          "path": {
            "_beagleImagePath_": "remote",
            "url": "https://i.ibb.co/k9tYwtX/selo-do-exemplo-28420393.jpg"
          }
        },
        {
          "_beagleComponent_": "beagle:image",
          "path": {
            "_beagleImagePath_": "remote",
            "url": "https://i.ibb.co/LCKYdCT/742px-Example-en-svg.png"
          }
        }
      ]
    }
  ]
}
```
{% endtab %}

{% tab title="Kotlin DSL" %}
```kotlin
ScrollView(scrollDirection = ScrollAxis.VERTICAL,
           children = listOf(
                Text("Vertical ScrollView"),
                Text("Vertical ScrollView"),
                Text("Vertical ScrollView")))
```
{% endtab %}
{% endtabs %}

### 👉 [Teste esse componente no Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/container.json)​

