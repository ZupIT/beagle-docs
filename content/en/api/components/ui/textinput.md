---
title: Textinput
weight: 302
description: Text Input component description and its attributes
---

---

## What is it? 

The Text Input is a component that displays an editable text area for the user. These text inputs are used to collect data inputs from users using a keyboard. 

This component has the following attributes:

|Attribute|Type|Required|Definition|
|:-----|:-----|:-----:|:-----|
|value|String or [Binding]({{< ref path="/api/context#bindings" lang="en" >}})|&#x2713;|Item referring to the input value that will be entered in the Text Input component editable text field area.|
|placeholder|String or [Binding]({{< ref path="/api/context#bindings" lang="en" >}})||The Placeholder is a text that is displayed when nothing has been entered in the editable text field.|
|enabled|Boolean||Enables or disables a text field|
|readOnly|Boolean||Set the text field to be read only when set to `true`.|
|type|TextInputType or [Binding]({{< ref path="/api/context#bindings" lang="en" >}})||This attribute identifies the text type that it will feed the text field area. On Android and iOS, this field also attributes the type of keyboard that will shown.|
|styleId|String||This attribute sets a String key to map this component in a Design System on the front end and set an style to it.|
|error|String or [Binding]({{< ref path="/api/context#bindings" lang="en" >}})||This attribute defines the TextInput error message.|
|showError|Boolean or [Binding]({{< ref path="/api/context#bindings" lang="en" >}})||Enables the error message to be visible when set to `true`.|
|onFocus|List&lt;Action&gt;||Sets a List of [Actions]({{< ref path="/api/actions" lang="en" >}}) that are triggered when the text field **gains focus**|
|onChange|List&lt;Action&gt;||Sets a List of [Actions]({{< ref path="/api/actions" lang="en" >}}) that are triggered when the text field **value changes**|
|onBlur|List&lt;Action&gt;||Sets a List of [Actions]({{< ref path="/api/actions" lang="en" >}}) that are triggered when the text field **looses focus**| 

{{% alert color="warning" %}}
Important! Beagle offers support for customized actions and if you list any of those on the attributes above you will need to have them mapped in your front end as well. You dont have to do this for the Beagle default actions. Check our [Customization]({{< ref path="/resources/customization" lang="en" >}}) section to know how to map `Custom Actions` in the front end. Select the front end you wish (Android, iOS or WEB) and check the Custom Action section in each segment.
{{% /alert %}}
>>>>>>> a1e8cf44... updates the text input info, attribute details and table structure

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
