---
title: Textinput
weight: 302
description: Text Input component description and its attributes
---

---

## What is it? 

Input is a component that displays an editable text area for the user. These text fields are used to collect inputs that the user insert using the keyboard. 

See how the structure is represented by the attributes below:

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
      <td style="text-align:left">value</td>
      <td style="text-align:left">
        String or
        <a href="https://docs.usebeagle.io/v/v1.0-en/api/context#bindings"><strong>Binding</strong></a>
      </td>
      <td style="text-align:left">&#x2713;</td>
      <td style="text-align:left">Item referring to the input value that will be entered in the editable
        text area of the Text Input component.</td>
    </tr>
    <tr>
      <td style="text-align:left">placeholder</td>
      <td style="text-align:left">
        String or
        <a href="https://docs.usebeagle.io/v/v1.0-en/api/context#bindings"><strong>Binding</strong></a>
      </td>
      <td style="text-align:left"></td>
      <td style="text-align:left">The Placeholder is a text that is displayed when nothing has been entered
        in the editable text field.</td>
    </tr>
    <tr>
      <td style="text-align:left">disabled</td>
      <td style="text-align:left">Boolean</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Enables or disables the field.</td>
    </tr>
    <tr>
      <td style="text-align:left">readOnly</td>
      <td style="text-align:left">Boolean</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Check if the Input will be editable or read only.</td>
    </tr>
    <tr>
      <td style="text-align:left">hidden</td>
      <td style="text-align:left">Boolean</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Enables the component to be visible or not.</td>
    </tr>
    <tr>
      <td style="text-align:left">type</td>
      <td style="text-align:left">TextInputType or <a href="../../context/#bindings"><strong>Binding</strong></a></td>
      <td
      style="text-align:left"></td>
        <td style="text-align:left">This attribute identifies the text type that it will receive in the editable
          field area. On Android and iOS, this field also attributes the type of
          keyboard that will be shown to the user.</td>
    </tr>
    <tr>
      <td style="text-align:left">styleId</td>
      <td style="text-align:left">String</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">This attribute receives a key that is registered in the Design System
        of each platform that customizes the component.</td>
    </tr>
    <tr>
      <td style="text-align:left">onChange</td>
      <td style="text-align:left">List &lt;<a href="../../actions/"><strong>Action</strong></a>&gt;</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">
        Actions array that this field can trigger when its value is altered. It
          is possible to define a <a href="https://docs.usebeagle.io/v/v1.0-en/resources/customization/beagle-para-web/customized-actions"><strong>customized action</strong></a><strong> </strong>or
          any available action in the interface, for example, an action that shows
          an Alert message. <strong><br /><br /></strong>This attribute is optional, but if
          an action is defined here it needs to be configured in the fronted.
      </td>
    </tr>
    <tr>
      <td style="text-align:left">onBlur</td>
      <td style="text-align:left">List &lt;<a href="https://docs.usebeagle.io/v/v1.0-en/api/actions"><strong>Action</strong></a>&gt;</td>
      <td
      style="text-align:left"></td>
        <td style="text-align:left">
          Action array that this field can trigger when its focus is removed. It
            is possible to defined a <a href="https://docs.usebeagle.io/v/v1.0-en/resources/customization/beagle-para-web/customized-actions"><strong>customized action</strong></a><strong> </strong>or
            any available action in the interface, for example, an action that shows
            an alert message (<a href="../../actions/alert"><strong>Alert</strong></a>).
          This attribute is optional, but if an action is defined here it needs
            to be configured in the fronted.
        </td>
    </tr>
    <tr>
      <td style="text-align:left">onFocus</td>
      <td style="text-align:left">List &lt;<a href="https://docs.usebeagle.io/v/v1.0-en/api/actions"><strong>Action</strong></a>&gt;</td>
      <td
      style="text-align:left"></td>
        <td style="text-align:left">
          Actions array that this field can trigger when this field is on focus.
            It is possible to defined a <a href="https://docs.usebeagle.io/v/v1.0-en/resources/customization/beagle-para-web/customized-actions"><strong>customized action</strong></a><strong> </strong>or
            any available action in the interface, for example, an action that shows
            an alert message (<a href="../../actions/alert"><strong>Alert</strong></a><strong>). </strong>
          This attribute is optional, but if an action is defined here it needs
            to be configured in the fronted.
        </td>
    </tr>
  </tbody>
</table>

### TextInputType

It is an `ENUM` responsible to define which type of text input. 

| Type | Definition |
| :--- | :--- |
| DATE | Data input is a date.  |
| EMAIL | Data input is an email.  |
| PASSWORD | Data input is a password.  |
| NUMBER | Data input only with numbers. |
| TEXT | Data input is a text. |

## How to use it? 

See below an example of text input with the password type: 

{{< tabs id="T123" >}}
{{% tab name="JSON" %}}
<!-- json-playground:textInput.json
{
 "_beagleComponent_": "beagle:textInput",
 "value": "my value",
 "placeholder": "user@test.com.br",
 "type": "email",
 "onChange": [
    {
      "_beagleAction_": "beagle:alert",
      "message": "Changing input"
      }
  ]
}
-->
{{% playground file="textInput.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
TextInput(
    value = "my value", 
    placeholder = "password", 
    type = TextInputType.PASSWORD, 
    styleId = "test.input.style",
    onChange = listOf(
        Alert(
            message = "Text value changed."
        )
    )
)
```
{{% /tab %}}
{{< /tabs >}}
