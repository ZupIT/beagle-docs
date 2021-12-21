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
      <th style="text-align:center">Obrigatório</th>
      <th style="text-align:left"><strong>Definição</strong>
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
<!-- json-playground:corner-radius.json
{
  "_beagleComponent_" : "beagle:container",
  "id" : "containerSample",
  "style" : {
    "size" : {
      "width" : {
        "value" : 100,
        "type" : "PERCENT"
      },
      "height" : {
        "value" : 100,
        "type" : "PERCENT"
      }
    },
    "backgroundColor" : "#0000FF50",
    "padding" : {
      "all" : {
        "value" : 4,
        "type" : "REAL"
      }
    },
    "cornerRadius" : {
      "bottomRight" : "@{context.bottomRight}",
      "topRight" : "@{context.topRight}",
      "topLeft" : "@{context.topLeft}",
      "bottomLeft" : "@{context.bottomLeft}",
      "radius" : "@{context.radius}"
    }
  },
  "context" : {
    "id" : "context",
    "value" : {
      "bottomRight" : 50,
      "topRight" : 35,
      "topLeft" : 15,
      "bottomLeft" : 25
    }
  },
  "children" : [
    {
      "_beagleComponent_" : "beagle:button",
      "text" : "SetContext",
      "onPress" : [
        {
          "contextId" : "context",
          "value" : {
            "radius" : 8
          },
          "_beagleAction_" : "beagle:setcontext"
        }
      ]
    }
  ]
}
-->
{{% playground file="touchable.json" language="pt" %}}
{{% /tab %}}

{{< /tabs >}}
