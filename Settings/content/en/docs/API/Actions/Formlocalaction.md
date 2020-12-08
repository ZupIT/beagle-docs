---
title: Formlocalaction
weight: 240
description: >-
  You will find here the definition of FormLocalAction and details about its
  attributes.
---

---

{{% alert color="warning" %}}
This action has been **deprecated** alongside Form
{{% /alert %}}

## What is it? 

It defines the local action of a form, it doesn't make HTTP requests, like for example, an action that creates a customized dialogue box. 

FormLocalAction structure is: 

<table>
  <thead>
    <tr>
      <th style="text-align:left">Attribute</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:center">Required</th>
      <th style="text-align:left">Definition</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">
        <p></p>
        <p>name</p>
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">Defines the action name.</td>
    </tr>
    <tr>
      <td style="text-align:left">data</td>
      <td style="text-align:left">Map&lt;String, String&gt;</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Data that can be sent as an action parameter.</td>
    </tr>
  </tbody>
</table>
