---
title: Size
weight: 332
description: Descrição do Size.
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
      <td style="text-align:left">width</td>
      <td style="text-align:left"><a href="unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">height</td>
      <td style="text-align:left"><a href="unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">maxWidth</td>
      <td style="text-align:left"><a href="unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">maxHeight</td>
      <td style="text-align:left"><a href="unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">minWidth</td>
      <td style="text-align:left"><a href="unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">minHeight</td>
      <td style="text-align:left"><a href="unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left"></td>
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
