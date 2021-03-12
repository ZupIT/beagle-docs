---
title: Button
weight: 287
description: Description of the component Button and its attributes
---

---

## What is it?

This component is a server-driven button responsible for setting a native button through Beagle.

Check the example below to see how the structure works:

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
      <td style="text-align:left">text</td>
      <td style="text-align:left">
        String or
        <a href="../../context/#bindings"><strong>Binding</strong></a>
      </td>
      <td style="text-align:left">&#x2713;</td>
      <td style="text-align:left">
        Defines the button text and what it must be declared and it cannot be
          null.
      </td>
    </tr>
    <tr>
      <td style="text-align:left">styleId</td>
      <td style="text-align:left">
        String or
        <a href="../../context/#bindings"><strong>Binding</strong></a>
      </td>
      <td style="text-align:left"></td>
      <td style="text-align:left">It refers to a native style to be applied in the button. This attribute
         is optional, when it's not informed, your application's default style will be used.</td>
    </tr>
    <tr>
      <td style="text-align:left">onPress</td>
      <td style="text-align:left">List &lt;<a href="../../actions/"><strong>Action</strong></a>&gt;</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Possible array actions that this button will go off when clicked. It is
        possible to adapt this action to be customized or an extension of any action
        already available in your interface. This attribute is optional, but if
        an action is defined here, it must be configured in the frontend. To
        create an action in the frontend, <a href="../../../resources/customization/"><strong>see the example here</strong></a>.</td>
    </tr>
      <tr>
      <td style="text-align:left">enabled</td>
      <td style="text-align:left">Bind&lt;Boolean&gt;</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Enables or disables the field.</td>
    </tr>
    <tr>
      <td style="text-align:left">clickAnalyticsEvent</td>
      <td style="text-align:left"><a href="../../analytics"><strong>ClickEvent</strong></a></td>
      <td
      style="text-align:left"></td>
        <td style="text-align:left">Click event that will go off in case an analytics service has been implemented.
          Check <a href="../../analytics"><strong>here fore more information about analytics.</strong></a></td>
    </tr>
  </tbody>
</table>

## How to use it?

{{< tabs id="T115" >}}
{{% tab name="JSON" %}}
<!-- json-playground:button.json
{
  "_beagleComponent_": "beagle:button",
  "text": "Click me!",
  "styleId": "DesignSystem.MyNativeStyle",
  "onPress": [
    {
      "_beagleAction_": "beagle:alert",
      "message": "Button example"
    }
  ]
}
-->
{{% playground file="button.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Button(
    text = "Click me!",
    styleId = "DesignSystem.MyNativeStyle",
    onPress = listOf(Alert(message="Button example"))
)
```
{{% /tab %}}
{{< /tabs >}}

### 👉 [Try it in the Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/button.json)
