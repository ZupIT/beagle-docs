---
title: FormRemoteAction
weight: 242
description: >-
  You will find here the definition of FormRemoteAction and details about its
  attributes.
---

---

{{% alert color="warning" %}}
This action has been **deprecated** alongside Form.
{{% /alert %}}

## What is it?

It is an action to make the request to submit a form. 

FormRemoteAction structure is: 

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
        <p>path</p>
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">Defines the URL service path that it will receive the form&apos;s data.</td>
    </tr>
    <tr>
      <td style="text-align:left">method</td>
      <td style="text-align:left">FormMethodType</td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">Defines the type of operation to submit a form.</td>
    </tr>
  </tbody>
</table>

### FormMethodType

`ENUM` to define the  `HTTP` method that it will use to submit a form. 

See the values below: 

| Type | Definition |
| :--- | :--- |
| GET | It is used for methods that only receive data.  |
| POST | It is used for methods that submit data.  |
| PUT | It is used for methods that replace the data.  |
| DELETE | It is used for method that remove data.  |




