---
title: "Button"
linkTitle: "Button"
description: >
  Nesta seção, você encontra a descrição do componente Botão e seus atributos.
---

## O que é?

O widget Button é responsável por definir um botão nativo usando informações server driven por meio do Beagle. 

A sua estrutura é representada como mostrado abaixo: 

<table>
  <thead>
    <tr>
      <th style="text-align:left"><b>Atributos</b>
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
      <td style="text-align:left">text</td>
      <td style="text-align:left">
        <p>String ou</p>
        <p><a href="../../contexto.md#bindings">Binding</a>
        </p>
      </td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">Texto no bot&#xE3;o. T&#xED;tulo do bot&#xE3;o</td>
    </tr>
    <tr>
      <td style="text-align:left">styleId</td>
      <td style="text-align:left">
        <p>String ou</p>
        <p><a href="../../contexto.md#bindings">Binding</a>
        </p>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Este atributo referencia um estilo nativo a ser aplicado no bot&#xE3;o.
        Se n&#xE3;o for informado, o estilo padr&#xE3;o de bot&#xE3;o da sua aplica&#xE7;&#xE3;o
        ser&#xE1; aplicado ao bot&#xE3;o.</td>
    </tr>
    <tr>
      <td style="text-align:left">onPress</td>
      <td style="text-align:left">List &lt;<a href="../../api-acoes/">Action</a>&gt;</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Array de a&#xE7;&#xF5;es que esse bot&#xE3;o pode disparar quando clicado.
        &#xC9; poss&#xED;vel definir uma A&#xE7;&#xE3;o customizada ou qualquer
        a&#xE7;&#xE3;o j&#xE1; dispon&#xED;vel na interface, como por exemplo uma
        a&#xE7;&#xE3;o que mostra uma mensagem de alerta(<a href="../../api-acoes/alert.md">Alert</a>).
        Este atributo &#xE9; opcional, mas se uma a&#xE7;&#xE3;o for definida aqui
        ela precisa estar configurada no frontend. Para criar uma a&#xE7;&#xE3;o
        no frontend veja o exemplo: <a href="../../../features/criando-sua-acao-customizada.md">Criando uma a&#xE7;&#xE3;o customizada</a>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">clickAnalyticsEvent</td>
      <td style="text-align:left"><a href="../../analytics.md">ClickEvent</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Evento de clique que ser&#xE1; disparado caso tenha sido implementado
        um servi&#xE7;o de analytics. Para saber mais sobre analytics e os eventos
        suportados, veja o exemplo: <a href="../../analytics.md">Analytics</a>.</td>
    </tr>
  </tbody>
</table>

## Como usar?

{% tabs %}
{% tab title="JSON" %}
```javascript
{
  "_beagleComponent_" : "beagle:button",
  "text" : "Faz um Alert",
  "styleId" : "DesignSystem.MeuEstiloDeBotãoNativo",
  "onPress" : [ 
    {
      "_beagleAction_" : "beagle:alert",
      "message" : "Eu sou a mensagem de um Alerta" 
    }
  ]
}
```
{% endtab %}

{% tab title="Kotlin DSL" %}
```kotlin
Button(
  text = "Faz um Alert",
  styleId = "DesignSystem.MeuEstiloDeBotãoNativo",
  onPress = listOf(
    Alert(
      message = "Eu sou a mensagem de um Alerta"
    )
  )
)
```
{% endtab %}
{% endtabs %}

### 👉 [Teste esse componente no Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/button.json)

