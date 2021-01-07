---
title: PopView
weight: 258
description: Here you'll find PopView description.
---

---

## What is it?

Closes the current exhibition screen.

## How to use it?

On the example below there's a screen coming from BFF with a button that when clicked, removes the current fragment. 

To test, your BFF's endpoint should return the screen with the code below and call it in the frontend. 

{{< tabs id="T97" >}}
{{% tab name="JSON" %}}
<!-- json-playground:popView.json
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
-->
{{% playground file="popView.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
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
{{% /tab %}}
{{< /tabs >}}
