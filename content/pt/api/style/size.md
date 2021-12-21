---
title: Size
weight: 332
description: Descrição do Size.
---

---

## O que é?

O Size é o objeto responsável por definir as propriedades de tamanho do componente.

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
      <td style="text-align:left">width</td>
      <td style="text-align:left"><a href="../unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Define a largura.</td>
    </tr>
    <tr>
      <td style="text-align:left">height</td>
      <td style="text-align:left"><a href="../unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Define a altura.</td>
    </tr>
    <tr>
      <td style="text-align:left">maxWidth</td>
      <td style="text-align:left"><a href="../unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Define a largura máxima.</td>
    </tr>
    <tr>
      <td style="text-align:left">maxHeight</td>
      <td style="text-align:left"><a href="../unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Define a altura máxima.</td>
    </tr>
    <tr>
      <td style="text-align:left">minWidth</td>
      <td style="text-align:left"><a href="../unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Define a largura mínima.</td>
    </tr>
    <tr>
      <td style="text-align:left">minHeight</td>
      <td style="text-align:left"><a href="../unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Define a altura mínima.</td>
    </tr>
  </tbody>
</table>

## Como usar?

{{< tabs id="T143" >}}
{{% tab name="JSON" %}}
<!-- json-playground:size.json
{
  "_beagleComponent_" : "beagle:container",
  "id" : "containerSample",
  "style" : {
    "size" : {
      "width" : {
        "value" : "@{context.width}",
        "type" : "REAL"
      },
      "maxHeight" : {
        "value" : "@{context.maxHeight}",
        "type" : "REAL"
      }
    },
    "backgroundColor" : "#0000FF50",
    "cornerRadius" : {
      "radius" : 6
    },
    "flex" : {
      "grow" : 1
    }
  },
  "context" : {
    "id" : "context",
    "value" : {
      "width" : 50,
      "maxHeight" : 50
    }
  },
  "children" : [
    {
      "_beagleComponent_" : "beagle:button",
      "text" : "Set",
      "onPress" : [
        {
          "contextId" : "context",
          "value" : {
            "maxHeight" : 90,
            "width" : 90
          },
          "_beagleAction_" : "beagle:setcontext"
        }
      ]
    }
  ]
}
-->
{{% playground file="size.json" language="pt" %}}
{{% /tab %}}

{{< /tabs >}}
