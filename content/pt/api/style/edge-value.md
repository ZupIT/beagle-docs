---
title: EdgeValue
weight: 332
description: Descrição do EdgeValue.
---

---

## O que é?

O EdgeValue é responsável por definir um valor de offset em relação ao seu irmão mais próximo ou pai. É utilizado nas propriedades margin, padding e position do [Style]({{< ref path="/api/style/overview.md" >}}).

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
      <td style="text-align:left"><a href="../unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Define um valor de offset a esquerda em relação ao seu irmão mais próximo ou pai.</td>
    </tr>
    <tr>
      <td style="text-align:left">top</td>
      <td style="text-align:left"><a href="../unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Define um valor de offset superior em relação ao seu irmão mais próximo ou pai.</td>
    </tr>
    <tr>
      <td style="text-align:left">right</td>
      <td style="text-align:left"><a href="../unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Define um valor de offset a direita em relação ao seu irmão mais próximo ou pai.</td>
    </tr>
    <tr>
      <td style="text-align:left">bottom</td>
      <td style="text-align:left"><a href="../unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Define um valor de offset inferior em relação ao seu irmão mais próximo ou pai.</td>
    </tr>
    <tr>
      <td style="text-align:left">horizontal</td>
      <td style="text-align:left"><a href="../unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Define um valor de offset a esquerda e direita em relação ao seu irmão mais próximo ou pai.</td>
    </tr>
    <tr>
      <td style="text-align:left">vertical</td>
      <td style="text-align:left"><a href="../unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Define um valor de offset superior e inferior em relação ao seu irmão mais próximo ou pai.</td>
    </tr>
    <tr>
      <td style="text-align:left">all</td>
      <td style="text-align:left"><a href="../unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Define um valor de offset em todas as direções em relação ao seu irmão mais próximo ou pai.</td>
    </tr>
  </tbody>
</table>

## Como usar?

{{< tabs id="T143" >}}
{{% tab name="JSON" %}}
<!-- json-playground:edge-value.json
{
  "_beagleComponent_" : "beagle:container",
  "id" : "containerSample",
  "style" : {
    "flex" : {
      "grow" : 1
    },
    "backgroundColor" : "#0000FF50",
    "padding" : {
      "all" : {
        "value" : "@{context.padding}",
        "type" : "REAL"
      }
    },
    "margin" : {
      "bottom" : {
        "value" : "@{context.marginBottom}",
        "type" : "REAL"
      },
      "top" : {
        "value" : "@{context.marginTop}",
        "type" : "REAL"
      },
      "right" : {
        "value" : "@{context.marginRight}",
        "type" : "REAL"
      },
      "left" : {
        "value" : "@{context.marginLeft}",
        "type" : "REAL"
      }
    },
    "cornerRadius" : {
      "radius" : 6
    }
  },
  "context" : {
    "id" : "context",
    "value" : {
      "marginLeft" : 2,
      "marginTop" : 4,
      "marginBottom" : 4,
      "padding" : 2,
      "marginRight" : 2
    }
  },
  "children" : [
    {
      "_beagleComponent_" : "beagle:button",
      "style" : {
        "backgroundColor" : "#00FF0050",
        "flex" : {
          "grow" : 1
        }
      },
      "onPress" : [
        {
          "contextId" : "context",
          "value" : {
            "marginLeft" : 20,
            "marginTop" : 20,
            "marginBottom" : 20,
            "padding" : 20,
            "marginRight" : 20
          },
          "_beagleAction_" : "beagle:setcontext"
        }
      ],
      "text" : "SetContext"
    }
  ]
}
-->
{{% playground file="edge-value.json" language="pt" %}}
{{% /tab %}}

{{< /tabs >}}
