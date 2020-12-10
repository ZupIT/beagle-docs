---
title: Form
weight: 326
description: You can find description of Form and its attributes.
---

---

{{% alert color="warning" %}}
This component is **deprecated**! It is recomended to use [**Simple Form**](simple-form).
{{% /alert %}}

The component represents a way to build user input and send these values to your backend. 

The structured is represented below:

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
        <p>onSubmit</p>
      </td>
      <td style="text-align:left">List &lt;<a href="../../actions/"><b>Action</b></a>&gt;</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Array of actions that this button can trigger when a form is sent.</td>
    </tr>
    <tr>
      <td style="text-align:left">child</td>
      <td style="text-align:left"><a href="../"><b>ServerDrivenComponent</b></a>
      </td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">Defines the visual components list (server-driven).</td>
    </tr>
    <tr>
      <td style="text-align:left">group</td>
      <td style="text-align:left">String</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Only used to forms with multiple pages, which is an identifier to manipulate
        data.</td>
    </tr>
    <tr>
      <td style="text-align:left">additionalData</td>
      <td style="text-align:left">Map&lt;String, String&gt;</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Values without validation that the user doesn&apos;t insert.</td>
    </tr>
    <tr>
      <td style="text-align:left">shouldStoreFields</td>
      <td style="text-align:left">Boolean</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Indicates if must save the<code>additionalData</code>.</td>
    </tr>
  </tbody>
</table>
