---
title: EdgeValue
weight: 332
description: Description of the EdgeValue property.
---

---

## O que é?

The EdgeValue is responsible for setting an offset value relative to its closest sibling or parent. It is used in the margin, padding and position properties of [Style]({{< ref path="/api/style/overview.md" >}}).

Its structure is represented as shown below:

<table>
  <thead>
    <tr>
      <th style="text-align:left"><strong>Attribute</strong>
      </th>
      <th style="text-align:left"><strong>Type</strong>
      </th>
      <th style="text-align:center">Mandatory</th>
      <th style="text-align:left"><strong>Definition</strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">left</td>
      <td style="text-align:left"><a href="../unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Sets a left offset value relative to its closest sibling or parent.</td>
    </tr>
    <tr>
      <td style="text-align:left">top</td>
      <td style="text-align:left"><a href="../unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Sets a top offset value relative to its closest sibling or parent.</td>
    </tr>
    <tr>
      <td style="text-align:left">right</td>
      <td style="text-align:left"><a href="../unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Sets a right offset value relative to its closest sibling or parent.</td>
    </tr>
    <tr>
      <td style="text-align:left">bottom</td>
      <td style="text-align:left"><a href="../unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Sets a bottom offset value relative to its closest sibling or parent.</td>
    </tr>
    <tr>
      <td style="text-align:left">horizontal</td>
      <td style="text-align:left"><a href="../unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Sets a left and right offset value relative to its closest sibling or parent.</td>
    </tr>
    <tr>
      <td style="text-align:left">vertical</td>
      <td style="text-align:left"><a href="../unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">DSets a top and bottom offset value relative to its closest sibling or parent.</td>
    </tr>
    <tr>
      <td style="text-align:left">all</td>
      <td style="text-align:left"><a href="../unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Sets offset value to all directions relative to its closest sibling or parent.</td>
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