---
title: Confirm
weight: 226
description: You will find here Confirm definition and its attributes details
---

---

## What is it? 

 `confirm` class is responsible for creating a confirmation modal element. 

Confirm structure is:

<table>
  <thead>
    <tr>
      <th style="text-align:left"><b>Attribute</b>
      </th>
      <th style="text-align:left"><b>Type</b>
      </th>
      <th style="text-align:left">Required</th>
      <th style="text-align:left"><b>Definition</b>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">title</td>
      <td style="text-align:left">
        <p>String or</p>
        <p><a href="https://docs.usebeagle.io/v/v1.0-en/api/context#bindings"><b>Binding</b></a>&lt;b&gt;&lt;/b&gt;</p>
      </td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Title of the confirmation box.</td>
    </tr>
    <tr>
      <td style="text-align:left">message</td>
      <td style="text-align:left">
        <p>String or</p>
        <p>&lt;b&gt;&lt;/b&gt;<a href="https://docs.usebeagle.io/v/v1.0-en/api/context#bindings"><b>Binding</b></a>&lt;b&gt;&lt;/b&gt;</p>
      </td>
      <td style="text-align:left">&#x2713;</td>
      <td style="text-align:left">Confirmation box message.</td>
    </tr>
    <tr>
      <td style="text-align:left">onPressOk</td>
      <td style="text-align:left">&lt;b&gt;&lt;/b&gt;<a href="https://docs.usebeagle.io/v/v1.0-en/api/actions"><b>Action</b></a>&lt;b&gt;&lt;/b&gt;</td>
      <td
      style="text-align:left"></td>
        <td style="text-align:left">Confirm button action.</td>
    </tr>
    <tr>
      <td style="text-align:left">onPressCancel</td>
      <td style="text-align:left">&lt;b&gt;&lt;/b&gt;<a href="https://docs.usebeagle.io/v/v1.0-en/api/actions"><b>Action</b></a>&lt;b&gt;&lt;/b&gt;</td>
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



```javascript
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
```



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



### 👉 [Test this action in the Web Playground](https://beagle-playground.netlify.app/#/cloud/fb8268dcdbf24f89a8367cc76dea9d99/confirm.json)
