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
      <td style="text-align:left">url</td>
      <td style="text-align:left">
        String ou
        <a href="https://docs.usebeagle.io/v/v1.0-en/api/context#bindings"><strong>Binding</strong></a>
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
    <tr>
      <td style="text-align:left">httpAdditionalData</td>
      <td style="text-align:left">HttpAdditionalData</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Pode ser usada em ações de navegações para passar dados HTTP adicionais em requisições acionadas pelo Beagle.</td>
    </tr>
  </tbody>
</table>

## Como usar?

{{< tabs id="T125" >}}
{{% tab name="JSON" %}}
<!-- json-playground:remote.json
{
  "_beagleComponent_": "beagle:button",
  "text": "Click me!",
  "onPress": [
    {
      "_beagleAction_": "beagle:pushView",
      "route": {
        "url": "confirm.json",
        "shouldPrefetch": false,
        "httpAdditionalData": {
            "headers": {
                "test": "test"
            }
        }
      }
    }
  ]
}
-->
{{% playground file="remote.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```
Button(
    onPress = listOf(
        Navigate.PushView(
            Route.Remote("confirm.json", httpAdditionalData = HttpAdditionalData(headers = mapOf("test" to "test")))
         )
    ),
    text = "Click me!"
)
```
{{% /tab %}}
{{< /tabs >}}
