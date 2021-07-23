---
title: Confirm
weight: 40
description: You will find here Confirm definition and its attributes details
---

---

## What is it? 

 `confirm` class is responsible for creating a confirmation modal element. 

Confirm structure is:

<table>
  <thead>
    <tr>
      <th style="text-align:left"><strong>Attribute</strong>
      </th>
      <th style="text-align:left"><strong>Type</strong>
      </th>
      <th style="text-align:left">Required</th>
      <th style="text-align:left"><strong>Definition</strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">title</td>
      <td style="text-align:left">
        String or
        <a href="https://docs.usebeagle.io/v/v1.0-en/api/context#bindings"><strong>Binding</strong></a>
      </td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Title of the confirmation box.</td>
    </tr>
    <tr>
      <td style="text-align:left">message</td>
      <td style="text-align:left">
        String or
        <a href="https://docs.usebeagle.io/v/v1.0-en/api/context#bindings"><strong>Binding</strong></a>
      </td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">Confirmation box message.</td>
    </tr>
    <tr>
      <td style="text-align:left">onPressOk</td>
      <td style="text-align:left"><a href="https://docs.usebeagle.io/v/v1.0-en/api/actions"><strong>Action</strong></a>
      <td
      style="text-align:left"></td>
        <td style="text-align:left">Confirm button action.</td>
    </tr>
    <tr>
      <td style="text-align:left">onPressCancel</td>
      <td style="text-align:left"><a href="https://docs.usebeagle.io/v/v1.0-en/api/actions"><strong>Action</strong></a></td>
      <td
      style="text-align:left"></td>
        <td style="text-align:left">Cancel button action.</td>
    </tr>
    <tr>
      <td style="text-align:left">labelOk</td>
      <td style="text-align:left">String</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Confirmation button message.</td>
    </tr>
    <tr>
      <td style="text-align:left">labelCancel</td>
      <td style="text-align:left">String</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Cancel button message.</td>
    </tr>
  </tbody>
</table>

## How to use it?

{{< tabs id="T91" >}}
{{% tab name="JSON" %}}
<!-- json-playground:confirm.json
{
  "_beagleComponent_": "beagle:container",
  "children": [
    {
      "_beagleComponent_": "beagle:button",
      "text": "Confirm Example",
      "onPress": [
        {
          "_beagleAction_": "beagle:confirm",
          "title": "Confirm Title",
          "message": "Confirm Message",
          "onPressOk": {
            "_beagleAction_":"beagle:alert",
            "message": "Confirmed"
          }
        }
      ]
    }
  ]
}
-->
{{% playground file="confirm.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Button(text = "Confirm Example",
       onPress = listOf(
            Confirm(title = "Confirm Title",
                    message = "Confirm Message",
                    onPressOk = Alert(
                                    title = "Ok", 
                                    message = "Confirmed"),
                    onPressCancel = Alert(
                                    title = "Cancel", 
                                    message = "Cancelled"),
                    labelOk = "Accept",
                    labelCancel = "Deny"
                )
            )
        )
```
{{% /tab %}}
{{< /tabs >}}

### 👉 [Test this action in the Web Playground](https://beagle-playground.netlify.app/#/cloud/fb8268dcdbf24f89a8367cc76dea9d99/confirm.json)
