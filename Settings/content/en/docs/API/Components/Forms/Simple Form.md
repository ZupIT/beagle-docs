---
title: Simple Form
weight: 330
description: Simple Form for web components description and its attributes
---

---

## What is it?

The `simpleForm` is responsible for rendering a form on the screen. 

Its structure is represented as shown below:

| Attribute | Type | Required | Definition |
| :--- | :--- | :--- | :--- |
| ​onSubmit | List &lt;[**Action**](https://app.gitbook.com/@zup-products/s/beagle/~/drafts/-MJgKhvyrHFMgUm8zhug/v/v1.0-en/api/actions)&gt; |  ✓ | Action array that this button can trigger when a form is sent. |
| children | List&lt;[**ServerDrivenComponent**](https://app.gitbook.com/@zup-products/s/beagle/~/drafts/-MJgKhvyrHFMgUm8zhug/v/v1.0-en/api/components)&gt; |  ✓ | Defines the visual components list \(server driven\). |
| context | **​**[**ContextData**](https://docs.usebeagle.io/api/contexto)**​** | ​ | Adds a context to the simple form |

## How to use? 

When creating a form it is important to understand two steps respectively 

* The relationship and update between fields 
* And what happens when the Submit button is pressed. 

### Updating the fields 

The TextInput component is the field in which the user or the system will fill in some information, and it is important to know its attributes in order to better use it. Here we will use one of its elements, which is the **onChange** function. 

{{% alert color="info" %}}
For more information on this component go to the details of [TextInput](../../../../../ui/textinput). 
{{% /alert %}}

#### OnChange 

This function is part of the TextInput and it observes the changes made within its field, that is, whenever the value is modified, something is typed, deleted, etc, this function is called and activates a **list of other** [actions](../../../../../actions/) to happen whenever the value changes. It is in this list that we add a [SetContext](../../../../../actions/setcontext) action to set the [Context](../../../../../context/) value of the form and update the values ​​that are shown in the field. 

Check our example below on how we implemented a `SimpleForm` 

{{< tabs name="T132" >}}
{{% tab name="JSON" %}}
<!-- json-playground:simpleform.json
 {
  "_beagleComponent_":"beagle:simpleForm",
  "context":{
    "id":"myContext",
    "value":""
  },
  "onSubmit":[
    {
      "_beagleAction_":"beagle:alert",
      "title":"Data submited",
      "message":"The password is @{myContext}"
    }
  ],
  "children":[
    {
      "_beagleComponent_":"beagle:textInput",
      "value":"@{myContext}",
      "placeholder":"Type in your password",
      "onChange":[
        {
          "_beagleAction_":"beagle:setContext",
          "contextId":"myContext",
          "value":"@{onChange.value}"
        }
      ]
    },
    {
      "_beagleComponent_":"beagle:button",
      "text":"Click to Submit",
      "onPress":[
        {
          "_beagleAction_":"beagle:submitForm"
        }
      ]
    }
  ]
}
-->
{{% playground file="simpleform.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```javascript
SimpleForm(
    context = ContextData(id = "myContext", value = ""),
    children = listOf(
        TextInput(
            value = "@{myContext}",
            placeholder = "Type in your password",
            onChange = listOf(
                SetContext(
                    contextId = "myContext",
                    value = "@{onChange.value}"
                )
            )
        ),
        Button(text = "Click to Submit", onPress = listOf(SubmitForm()))
    ),
    onSubmit = listOf(
        Alert(
            title = "Data submited", 
            message = "The password is " + "@{myContext}" 
        )
    )
)

```
{{% /tab %}}
{{< /tabs >}}

### onSubmit 

It is a function of a simple form that performs a list of actions. It is called when the form is submitted. 

To submit a form, you must use the SubmitForm action and call it, just implement it in a [Button](../../../ui/button) that is part of a simple form, that is, that is in your list of children. 

When you click this button, the onSubmit is activated and the list of actions will be performed. It is this list of actions that will define what should happen with the information in this form, if they will be sent to a backend \(through the [sendRequest ](../../../actions/sendrequest)action\), etc.

