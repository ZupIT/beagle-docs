---
title: Popview
weight: 246
description: Here you'll find PopView description.
---

---

## What is it?

Closes the current exhibition screen.

## How to use it?

On the example below there's a screen coming from BFF with a button that when clicked, removes the current fragment. 

To test, your BFF's endpoint should return the screen with the code below and call it in the frontend. 



```text
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:button",
    "text" : "Click me!",
    "onPress" : [ {
      "_beagleAction_" : "beagle:popView"
    } ]
  }
}
```



```kotlin
Screen(
    child = Button(
        text = "Click me!",
        onPress = listOf(
            Navigate.PopView()
        )
    )
)
```



### 👉 [Test this example on Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/button.json)
