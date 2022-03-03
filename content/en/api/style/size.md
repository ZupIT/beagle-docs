---
title: Size
weight: 332
description: Descriptions of the Size property.
---

---

## What is it?

The Size is the object responsible for defining the component's size properties.

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
      <td style="text-align:left">width</td>
      <td style="text-align:left"><a href="../unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Sets a width.</td>
    </tr>
    <tr>
      <td style="text-align:left">height</td>
      <td style="text-align:left"><a href="../unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Sets a height.</td>
    </tr>
    <tr>
      <td style="text-align:left">maxWidth</td>
      <td style="text-align:left"><a href="../unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Sets the maximum width.</td>
    </tr>
    <tr>
      <td style="text-align:left">maxHeight</td>
      <td style="text-align:left"><a href="../unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Sets the maximum height</td>
    </tr>
    <tr>
      <td style="text-align:left">minWidth</td>
      <td style="text-align:left"><a href="../unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Sets the minimum height</td>
    </tr>
    <tr>
      <td style="text-align:left">minHeight</td>
      <td style="text-align:left"><a href="../unit-value/">UnitValue</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Sets the minimum height</td>
    </tr>
  </tbody>
</table>

## How to use it?

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