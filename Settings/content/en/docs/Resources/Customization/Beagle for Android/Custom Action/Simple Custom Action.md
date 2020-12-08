---
title: Simple Custom Action
weight: 104
description: Creating and executing a custom action
---

---

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
            rootView.getContext(), 
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
