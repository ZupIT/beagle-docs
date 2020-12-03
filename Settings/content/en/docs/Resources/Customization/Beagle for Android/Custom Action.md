---
title: Custom Action
weight: 102
description: >-
  You will find here the description on how to create a Custom Action and
  details about its methods.
---

---

## Introduction

`CustomAction` is a Beagle's component that can be called through events triggered by other components, including`actions.`

Beagle already has some predefined actions, however it is possible to create custom actions. 

## Example

To create your custom action, follow the next steps:

1. Create an annotated class with `@RegisterAction` that implements an `Action` interface;
2. After that, the interface will request to implement the `execute` method;
3. Now, declare the `action` result.

The `value` attribute is a parameter example that can be declared in this class constructor. The following example shows an action with **Toast** receiving a text with a parameter: 


```kotlin
@RegisterAction
data class CustomActionAndroid(
val value: String
) : Action {
    override fun execute(rootView: RootView) {
        Toast.makeText(
            applicationContext, 
            value, 
            Toast.LENGTH_LONG).show()
    }
}    
```


* See below an action example in a button type component: 

```kotlin
Button(
   text = text,
   styleId = styleId,
   onPress = listOf(CustomActionAndroid("I'm a customized action"))
)
```
