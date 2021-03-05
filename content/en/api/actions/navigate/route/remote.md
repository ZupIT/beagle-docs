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
      <td style="text-align:left">url</td>
      <td style="text-align:left">
        String or
        <a href="https://docs.usebeagle.io/v/v1.0-en/api/context#bindings"><strong>Binding</strong></a>
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
      <td style="text-align:left"><a href="https://docs.usebeagle.io/v/v1.0-en/api/screen"><strong>Screen</strong></a></td>
      <td
      style="text-align:left"></td>
        <td style="text-align:left">Screen to be returned in case the loading fails.</td>
    </tr>
  </tbody>
</table>

## How to use it?

{{< tabs id="T107" >}}
{{% tab name="JSON" %}}
<!-- json-playground:remote.json
{
  "_beagleComponent_": "beagle:button",
  "text": "Click me!",
  "onPress": [
    {
      "_beagleAction_": "beagle:pushView",
      "route": {
        "url": "confirm.json",
        "shouldPrefetch": false
      }
    }
  ]
}
-->
{{% playground file="remote.json" language="en" %}}
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