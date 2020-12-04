---
title: Button
weight: 275
description: Description of the component Button and its attributes
---

---

## What is it?

The button widget is responsible for defining a native button using a server-driven button through Beagle.

Check the example below to see how the structure works:

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
      <td style="text-align:left">text</td>
      <td style="text-align:left">
        <p>String or</p>
        <p><a href="../../context.md#bindings"><b>Binding</b></a>&lt;b&gt;&lt;/b&gt;</p>
      </td>
      <td style="text-align:left">&#x2713;</td>
      <td style="text-align:left">
        <p></p>
        <p>Defines the button text and what it must be declared and it cannot be
          null.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">styleId</td>
      <td style="text-align:left">
        <p>String or</p>
        <p>&lt;b&gt;&lt;/b&gt;<a href="../../context.md#bindings"><b>Binding</b></a>&lt;b&gt;&lt;/b&gt;</p>
      </td>
      <td style="text-align:left"></td>
      <td style="text-align:left">It refers to a native style to be applied in the button. This attribute
        is optional, meaning if it is not informed it will be used the style pattern
        of your application.</td>
    </tr>
    <tr>
      <td style="text-align:left">onPress</td>
      <td style="text-align:left">List &lt;<a href="../../actions/"><b>Action</b></a>&gt;</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Possible array actions that this button will go off when clicked. It is
        possible to adapt this action to be customized or an extension of any action
        already available in your interface. This attribute is optional.</td>
    </tr>
    <tr>
      <td style="text-align:left">clickAnalyticsEvent</td>
      <td style="text-align:left">&lt;b&gt;&lt;/b&gt;<a href="../../analytics.md"><b>ClickEvent</b></a>&lt;b&gt;&lt;/b&gt;</td>
      <td
      style="text-align:left"></td>
        <td style="text-align:left">Click event that will go off in case an analytics service has been implemented.
          For more information about analytics, click here.</td>
    </tr>
  </tbody>
</table>

## How to use it?

{{< tabs name="T125" >}}
{{% tab name="JSON" %}}
```javascript
{
  "_beagleComponent_": "beagle:button",
  "text": "Beagle Button",
  "styleId" : "DesignSystem.MyNativeStyle",
  "onPress": [
    {
      "_beagleAction_": "beagle:alert",
      "message": "Example button."
    }
  ]
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```
Button(
    text = "Click me!"
    styleId = "DesignSystem.MyNativeStyle",
    onPress = listOf(Alert(message="Example button."))
)
```
{{% /tab %}}
{{< /tabs >}}

### 👉 [Try it in the Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/button.json)
