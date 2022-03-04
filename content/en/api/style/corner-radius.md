---
title: CornerRadius
weight: 332
description: CornerRaius' description.
---

---

## What is it?

CornerRadius is responsible for setting the component's edge radius properties.

Its structure is as below:

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
      <td style="text-align:left">radius</td>
      <td style="text-align:left">Bind&lt;Double&gt;
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Defines the radius of all edges</td>
    </tr>
    <tr>
      <td style="text-align:left">topLeft</td>
      <td style="text-align:left">Bind&lt;Double&gt;
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Defines the radius of the top left edge.</td>
    </tr>
    <tr>
      <td style="text-align:left">topRight</td>
      <td style="text-align:left">Bind&lt;Double&gt;
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Defines the radius of the top right edge.</td>
    </tr>
    <tr>
      <td style="text-align:left">bottomLeft</td>
      <td style="text-align:left">Bind&lt;Double&gt;
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Defines the radius of the bottom left edge.</td>
    </tr>
    <tr>
      <td style="text-align:left">bottomRight</td>
      <td style="text-align:left">Bind&lt;Double&gt;
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Defines the radius of the bottom right edge.</td>
    </tr>
  </tbody>
</table>

## How to use it?

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