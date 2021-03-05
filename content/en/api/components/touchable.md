---
title: Touchable
weight: 307
description: Description of components that enable click actions in another components
---

---

## What is Touchable?

Touchable defines clickable areas in your application in widgets that are not clickable by default.

See how the structure is represented: 

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
      <td style="text-align:left">onPress</td>
      <td style="text-align:left"><a href="https://docs.usebeagle.io/api/actions"><strong>Action</strong></a></td>
      <td
      style="text-align:center">&#x2713;</td>
        <td style="text-align:left">
          Defines one or more<strong> </strong><a href="https://docs.usebeagle.io/api/actions"><strong>actions </strong></a>to
            be performed when a <code>child</code> component is clicked.
        </td>
    </tr>
    <tr>
      <td style="text-align:left">
        click Analytic Event
      </td>
      <td style="text-align:left">
       <a href="https://docs.usebeagle.io/api/analytics#click-option"><strong>Analytics</strong></a>
       <a href="https://docs.usebeagle.io/api/analytics#click-option"><strong>Click</strong></a>
      </td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Click event that will be triggered if an analytics service was implemented.</td>
    </tr>
    <tr>
      <td style="text-align:left">child</td>
      <td style="text-align:left">
       <a href="../widget"><strong>Server</strong></a>
       <a href="https://docs.usebeagle.io/api/widget"><strong>DrivenComponent</strong></a>
      </td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">Defines a widget that will trigger the<a href="https://docs.usebeagle.io/v/v1.0-en/api/actions"><strong> </strong></a>onPress
        attribute.</td>
    </tr>
  </tbody>
</table>

## How to use it?

{{< tabs id="T125" >}}
{{% tab name="JSON" %}}
<!-- json-playground:touchable.json
{
  "_beagleComponent_": "beagle:touchable",
  "onPress": [
    {
      "_beagleAction_": "beagle:alert",
      "message": "This is a touchable!"
    }
  ],
  "child":
  {
  "_beagleComponent_": "beagle:text",
  "text": "Text with action"
}
}
-->
{{% playground file="touchable.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Touchable(onPress = listOf(
			         Alert(title = "Image", 
                     message = "Clicked on Message")),
          child = Text("Text with action")
)
```
{{% /tab %}}
{{< /tabs >}}
