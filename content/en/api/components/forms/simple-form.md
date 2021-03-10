---
title: Simple Form
weight: 330
description: Simple Form for web components description and its attributes
---

---

## What is it?

The `simpleForm` is responsible for rendering a form on the screen.

Its structure is represented as shown below:

| Attribute | Type                                                          | Required | Definition                                                     |
| :-------- | :------------------------------------------------------------ | :------- | :------------------------------------------------------------- |
| ​onSubmit | List &lt;[**Action**]({{< ref path="/api/actions" lang="en" >}})&gt;                  | ✓        | Array of Actions that will be triggered when a valid form is sent. |
| onValidationError | List &lt;[**Action**]({{< ref path="/api/actions" lang="en" >}})&gt;                  | ✓        | Array of Actions that will be triggered when a form is invalid. |
| children  | List&lt;[**ServerDrivenComponent**]({{< ref path="/api/components" lang="en" >}})&gt; | ✓        | Defines the visual components list \(server driven\).          |
| context   | **​**[**ContextData**]({{< ref path="/api/context" lang="en" >}})**​**                | ​        | Adds a context to the simple form                              |

## How to use it?

When creating a form it is important to understand two steps respectively

- The relationship and update between fields
- And what happens when the Submit button is pressed.

### Updating the fields

The TextInput component is the field in which the user or the system will fill in some information, and it is important to know its attributes in order to better use it. Here we will use one of its elements, which is the **onChange** function.

{{% alert color="info" %}}
For more information on this component go to the details of [TextInput]({{< ref path="/api/components/ui/textinput" lang="en" >}}).
{{% /alert %}}

#### OnChange

This function is part of the TextInput and it observes the changes made within its field, that is, whenever the value is modified, something is typed, deleted, etc, this function is called and activates a list of other [**actions**]({{< ref path="/api/actions/" lang="en" >}}) to happen whenever the value changes. It is in this list that we add a [**SetContext**]({{< ref path="/api/actions/setcontext" lang="en" >}}) action to set the [**Context**]({{< ref path="/api/context/" lang="en" >}}) value of the form and update the values ​​that are shown in the field.

Check out the example below on how its implemented a `SimpleForm`

{{< tabs id="T132" >}}
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

```kotlin
SimpleForm(
  context = ContextData(id = "myContext", value = ""),
  children = listOf(
    TextInput(
      value = "@{myContext}",
      placeholder = "Type in your password",
      onChange = listOf(
        SetContext(contextId = "myContext", value = "@{onChange.value}")
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

It is a function of a simple form that performs a list of actions. It is **called when a valid form is submitted**.

To submit a form, you must use the SubmitForm action and call it, just implement it in a [**Button**]({{< ref path="/api/components/ui/button" lang="en" >}}) that is part of a simple form, that is, that is in your list of children.

When you click this button, the onSubmit is activated and the list of actions will be performed. It is this list of actions that will define what should happen with the information in this form, if they will be sent to a backend \(through the [**sendRequest** ]({{< ref path="/api/actions/sendrequest" lang="en" >}})action\), etc.

### onValidationError

It is a function of a simple form that performs a list of actions. It is **called when an invalid form is submitted**. This validation occurs in the `TextInput` component through the attributes **error** and **showError**.