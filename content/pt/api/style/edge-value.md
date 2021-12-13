---
title: EdgeValue
weight: 332
description: Descrição do EdgeValue.
---

---

## O que é?

O EdgeValue é responsável por definir um valor de offset em relação ao seu irmão mais próximo ou pai. É utilizado nas propriedades margin, padding e position.

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
      <td style="text-align:left">left</td>
      <td style="text-align:left"><a href="/api/resources/style/unit-value">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">top</td>
      <td style="text-align:left"><a href="unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">right</td>
      <td style="text-align:left"><a href="unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">bottom</td>
      <td style="text-align:left"><a href="unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">horizontal</td>
      <td style="text-align:left"><a href="unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">vertical</td>
      <td style="text-align:left"><a href="unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">all</td>
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
