---
title: "Alert"
linkTitle: "Alert"
description: >
  Nesta seção, você encontra a definição do Alert e detalhes de seus atributos.
---

## O que é?

A ação `Alert` é responsável por criar um elemento de confirmação

A estrutura do Alert é:

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
      <td style="text-align:left">title</td>
      <td style="text-align:left">
        <p>String ou</p>
        <p><a href="../contexto.md#bindings"><b>Binding</b></a>&lt;b&gt;&lt;/b&gt;</p>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">T&#xED;tulo da caixa de alerta.</td>
    </tr>
    <tr>
      <td style="text-align:left">message</td>
      <td style="text-align:left">
        <p>String ou</p>
        <p>&lt;b&gt;&lt;/b&gt;<a href="../contexto.md#bindings"><b>Binding</b></a>&lt;b&gt;&lt;/b&gt;</p>
      </td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">Mensagem da caixa de alerta.</td>
    </tr>
    <tr>
      <td style="text-align:left">onPressOk</td>
      <td style="text-align:left">&lt;b&gt;&lt;/b&gt;<a href="https://docs.usebeagle.io/api/api-acoes"><b>Action</b></a>&lt;b&gt;&lt;/b&gt;</td>
      <td
      style="text-align:center"></td>
        <td style="text-align:left">A&#xE7;&#xE3;o do bot&#xE3;o de confirma&#xE7;&#xE3;o.</td>
    </tr>
    <tr>
      <td style="text-align:left">labelOk</td>
      <td style="text-align:left">String</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Label do bot&#xE3;o de confirma&#xE7;&#xE3;o.</td>
    </tr>
  </tbody>
</table>

## Como usar?

Abaixo segue um exemplo de um botão que ao clicado mostra um Alert:

{% tabs %}
{% tab title="JSON" %}
```javascript
{
    "_beagleComponent_": "beagle:container",
    "children": [
      {
        "_beagleComponent_": "beagle:button",
        "text": "Alert Example",
        "onPress": [
          {
            "_beagleAction_": "beagle:alert",
            "title": "My Title",
            "message": "Alert message",
            "labelOk": "Close"
              }
            ]
          }
        ]
      }
```
{% endtab %}

{% tab title="Kotlin DSL" %}
```kotlin
Container(
    children = listOf(
        Button(
            text = "Alert Example",
            onPress = listOf(
                Alert(
                    title = "My Title",
                    message = "Alert message",
                    labelOk = "Close"
                )
            )
        )
    )
)
```
{% endtab %}
{% endtabs %}

###  👉 [Teste essa ação no Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/button.json)​

