---
title: Touchable
weight: 332
description: Descrição do componente que habilita ação em outros componentes.
---

---

## O que é?

O Touchable é responsável por definir as áreas clicáveis dentro da aplicação em componentes que não são clicáveis nativamente.

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
      <td style="text-align:left">onPress</td>
      <td style="text-align:left"><a href="../acoes/">Action</a>
      </td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">Define uma ou mais <a href="https://app.gitbook.com/@zup-products/s/beagle/~/drafts/-MAl4cryxfmV2ZeK3BVb/api/api-acoes">a&#xE7;&#xF5;es</a> a
        serem executadas quando um componente <code>child</code> &#xE9; clicado.</td>
    </tr>
    <tr>
      <td style="text-align:left">
        click Analytics Event
      </td>
      <td style="text-align:left">
        <a href="../analytics#opcao-click">Analytics</a>
        <a href="../analytics#opcao-click">Click</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">
        Evento do clique que ser&#xE1; disparado caso tenha sido implementado
          um servi&#xE7;o de analytics.
      </td>
    </tr>
    <tr>
      <td style="text-align:left">child</td>
      <td style="text-align:left">
        <a href="../widget">Server</a>
        <a href="../widget">DrivenComponent</a>
      </td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">Define o widget que ser&#xE1; o gatilho do atributo onPress.<strong></strong>
      </td>
    </tr>
  </tbody>
</table>

## Como usar?

{{< tabs id="T143" >}}
{{% tab name="JSON" %}}
<!-- json-playground:touchable.json
{
  "_beagleComponent_": "beagle:touchable",
  "onPress": [
    {
      "_beagleAction_": "beagle:alert",
      "message": "This is a touchable!"
    }
  ],
  "child":
  {
  "_beagleComponent_": "beagle:text",
  "text": "Text with action"
}
}
-->
{{% playground file="touchable.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Touchable(onPress = listOf(
			         Alert(title = "Image", 
                     message = "Clicked on Message")),
          child = Text("Text with action")
)
```
{{% /tab %}}
{{< /tabs >}}
