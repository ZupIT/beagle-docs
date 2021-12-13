---
title: CornerRadius
weight: 332
description: Descrição do CornerRadius.
---

---

## O que é?

O CornerRadius é responsável por definir as propriedades de raio da borda do componente.

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
      <td style="text-align:left">radius</td>
      <td style="text-align:left">Bind&lt;Double&gt;
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Define o raio da borda de todos os cantos.</td>
    </tr>
    <tr>
      <td style="text-align:left">topLeft</td>
      <td style="text-align:left">Bind&lt;Double&gt;
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Define o raio da borda do canto esquerdo superior.</td>
    </tr>
    <tr>
      <td style="text-align:left">topRight</td>
      <td style="text-align:left">Bind&lt;Double&gt;
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Define o raio da borda do canto direito superior.</td>
    </tr>
    <tr>
      <td style="text-align:left">bottomLeft</td>
      <td style="text-align:left">Bind&lt;Double&gt;
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Define o raio da borda do canto esquerdo inferior.</td>
    </tr>
    <tr>
      <td style="text-align:left">bottomRight</td>
      <td style="text-align:left">Bind&lt;Double&gt;
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Define o raio da borda do canto direito inferior.</td>
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
