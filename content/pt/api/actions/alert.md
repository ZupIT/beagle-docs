---
title: Alert
weight: 259
description: 'Nesta seção, você encontra a definição do Alert e detalhes de seus atributos'
---

---

## O que é?

A ação `Alert` é responsável por criar um elemento de confirmação

A estrutura do Alert é:

<table>
  <thead>
    <tr>
      <th style="text-align:left"><strong>Atributo</strong>
      </th>
      <th style="text-align:left"><strong>Tipo</strong>
      </th>
      <th style="text-align:center">Obrigat&#xF3;rio</th>
      <th style="text-align:left"><strong>Defini&#xE7;&#xE3;o</strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">title</td>
      <td style="text-align:left">
        String ou
        <a href="../contexto/#bindings"><strong>Binding</strong></a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Título da caixa de alerta.</td>
    </tr>
    <tr>
      <td style="text-align:left">message</td>
      <td style="text-align:left">
        String ou
        <a href="../contexto/#bindings"><strong>Binding</strong></a>
      </td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">Mensagem da caixa de alerta.</td>
    </tr>
    <tr>
      <td style="text-align:left">onPressOk</td>
      <td style="text-align:left"><a href="https://docs.usebeagle.io/api/api-acoes"><strong>Action</strong></a></td>
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

{{< tabs id="T107" >}}
{{% tab name="JSON" %}}
<!-- json-playground:alert.json
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
-->
{{% playground file="alert.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
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
{{% /tab %}}
{{< /tabs >}}
