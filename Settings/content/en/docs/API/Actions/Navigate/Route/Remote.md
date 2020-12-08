---
title: Remote
weight: 268
---

---

## What is it?

Navigation for remote content. 

The structure is represented by the attributes below:

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
      <td style="text-align:left">url</td>
      <td style="text-align:left">
        <p>String or</p>
        <p><a href="https://docs.usebeagle.io/v/v1.0-en/api/context#bindings"><b>Binding</b></a>&lt;b&gt;&lt;/b&gt;</p>
      </td>
      <td style="text-align:left">&#x2713;</td>
      <td style="text-align:left">Navigation address.</td>
    </tr>
    <tr>
      <td style="text-align:left">shouldPrefetch</td>
      <td style="text-align:left">Boolean</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Load the address previously.</td>
    </tr>
    <tr>
      <td style="text-align:left">fallback</td>
      <td style="text-align:left"><a href="https://docs.usebeagle.io/v/v1.0-en/api/screen"><b>Screen</b></a>&lt;b&gt;&lt;/b&gt;</td>
      <td
      style="text-align:left"></td>
        <td style="text-align:left">Screen to be returned in case the loading fails.</td>
    </tr>
  </tbody>
</table>

## How to use it?

{{< tabs name="T107" >}}
{{% tab name="JSON" %}}
```javascript
{
  "_beagleComponent_": "beagle:button",
  "text": "Click me!",
  "onPress": [
    {
      "_beagleAction_": "beagle:pushView",
      "route": {
        "url": "/present/view",
        "shouldPrefetch": false
      }
    }
  ]
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```
Button(
    onPress = listOf(
        Navigate.PushView(
            Route.Remote("/present/view")
         )
    ),
    text = "Click me!"
)
```
{{% /tab %}}
{{< /tabs >}}

### 👉 [Teste this action in the Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/button.json)
