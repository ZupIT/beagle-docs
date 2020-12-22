---
title: Popstack
weight: 256
description: Here you'll find PopStack description.
---

---

## What is it?

Removes the current exhibition pile. 

## How to use it?

On the example below there's a screen coming from BFF with a button that when clicked, closes the current activity. 

To test, your BFF's endpoint should return the screen with the code below and call it in the frontend. 

{{< tabs id="T96" >}}
{{% tab name="JSON" %}}
```text
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:button",
    "text" : "Click me!",
    "onPress" : [ {
      "_beagleAction_" : "beagle:popStack"
    } ]
  }
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Screen(
    child = Button(
        text = "Click me!",
        onPress = listOf(
            Navigate.PopStack()
        )
    )
)
```
{{% /tab %}}
{{< /tabs >}}

### 👉 [Test this example on Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/button.json)
