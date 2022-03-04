---
title: UnitValue
weight: 332
description: Description of UnitValue property.
---

---

## What is it?

UnitValue is an object that defines the percentage or absolute value of a field. It is used in the structures: [Size]({{< ref path="/api/style/size.md" >}}), [EdgeValue]({{< ref path="/api/style/edge-value. md" >}}) and in the Flex basis field.

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
      <td style="text-align:left">value</td>
      <td style="text-align:left">Bind&lt;Double&gt;
      </td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">Value of the attribute</td>
    </tr>
    <tr>
      <td style="text-align:left">type</td>
      <td style="text-align:left">UnitType
      </td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">Type of the defined value. eg: REAL, PERCENT or AUTO.</td>
    </tr>
  </tbody>
</table>
