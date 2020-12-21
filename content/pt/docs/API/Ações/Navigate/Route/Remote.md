---
title: Remote
weight: 293
description: Descrição da classe Remote e seus atributos
---

---

## O que é? <a id="definicao"></a>

Uma rota de navegação para um conteúdo remoto.

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
      <td style="text-align:left">url</td>
      <td style="text-align:left">
        <p>String ou</p>
        <p><a href="https://docs.usebeagle.io/v/v1.0-en/api/context#bindings"><b>Binding</b></a>&lt;b&gt;&lt;/b&gt;</p>
      </td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">Endere&#xE7;o para navega&#xE7;&#xE3;o.</td>
    </tr>
    <tr>
      <td style="text-align:left">shouldPrefetch</td>
      <td style="text-align:left">Boolean</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Carregar o endere&#xE7;o previamente.</td>
    </tr>
    <tr>
      <td style="text-align:left">fallback</td>
      <td style="text-align:left"><a href="../../../screen/">Screen</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Tela a ser retornada caso o carregamento falhe.</td>
    </tr>
  </tbody>
</table>

## Como usar?

{{< tabs name="T125" >}}
{{% tab name="JSON" %}}
```javascript
{
  "_beagleComponent_": "beagle:button",
  "text": "Click me!",
  "onPress": [
    {
      "_beagleAction_": "beagle:pushView",
      "route": {
        "url": "/present/view",
        "shouldPrefetch": false
      }
    }
  ]
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```
Button(
    onPress = listOf(
        Navigate.PushView(
            Route.Remote("/present/view")
         )
    ),
    text = "Click me!"
)
```
{{% /tab %}}
{{< /tabs >}}

### 👉 [Teste essa ação no Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/button.json)
