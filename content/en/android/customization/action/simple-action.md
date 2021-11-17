---
title: Simple Action
weight: 104
description: Creating and trigerring a custom action
---

**Topics covered:**

- What is a custom action
- How to create a custom action
- How to Register a Custom Action
- How to use a custom action

**Requirements:**

- A project with Beagle Configured (FRONT and BACKEND)

## What is a custom action?

A custom action is an action with a specific behavior created by the developer. Beagle has a number of default actions, however, there may be a situation that requires A new functionality, such as opening a camera interface on a cell phone.

If you want to know more about Default Beagle actions you can check the session with the [**action-types.**]({{<ref path="/api/actions/overview#action-types" lang="en">}}).

## How to create a custom action

To create a custom action you need to:

Step 1. Create a class annotated with `@RegisterAction`, and implement the `Action` interface, in your application FRONTEND and BACKEND enviroments;
Step 2. Set the action name by annotation parameter to avoid possible problems with Proguard and make sure that the action has the same name in the BACKEND and FRONTEND;
Step 3. After that, the interface will ask for the `execute` method to be implemented (only in FRONTEND);

The `value` attribute is an example of a parameter that can be declared in the Action class constructor, you can set as many as you need.
The following example shows a custom action that will execute a **Toast** receiving a text as the `value` parameter:

### Class that represents an action in FRONTEND (Android)

```kotlin
@RegisterAction("customActionAndroid")
data class CustomActionAndroid(
    val value: String
) : Action {
    override fun execute(rootView: RootView) {
        Toast.makeText(
            rootView.getContext(),
            value,
            Toast.LENGTH_SHORT
        ).show()
    }
}
```

### Class representing the action in the BACKEND

```kotlin
@RegisterAction("customActionAndroid")
data class CustomActionAndroid(
    val value: String
) : Action
```

{{% alert color="warning" %}}
  Note that here the class only needs to register the parameter you want to declare in the BACKEND and use it in the FRONTEND. In this action we declare only a `value` that will store the message to be used in TOAST.
{{% /alert %}}

Below we have the JSON that represents this action being called from the click of a button:

```json
{
  "_beagleComponent_": "beagle:button",
  "text": "Beagle Button",
  "onPress": [
    {
      "_beagleAction_": "custom:myCustomAction",
      "value": "ParameterForAction."
    }
  ]
}
```

## How to use a custom action

As with default actions, to use a custom action, just declare it in a component that performs actions, such as a `Button`.
In the example below, the action is declared in the button's `onPress` attribute:

```kotlin
Button(
   text = text,
   styleId = styleId,
   onPress = listOf(
      CustomActionAndroid("I am a custom action")
   )
)
```
