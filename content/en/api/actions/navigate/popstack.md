---
title: PopStack
weight: 60
description: Describes the PopStack action and its atributes
---

---

## What is it?

The ``PopStack`` is an navigation action that removes the stack of screens where the currently screen is displayed on.

The ``PopStack`` structure is:

| **Attribute** | **Type** | Required | **Definition** |
| :----------- | :-------------------------------------------- | :---------: | :----------------- |
| navigationContext | ​[NavigationContext]({{< ref path="/api/actions/navigate/navigationcontext" lang="pt" >}})​ | | Navigation Context sent from the previous screen. |

## How to use it?

In this example, we have a screen with a button that, when clicked, "kills" the stack of screens where the current screen is on.

To test this you need to navigate to this screen example, in a stack already built, and click on the button. This will destroy the entire stack

{{< tabs id="T114" >}}
{{% tab name="JSON" %}}
<!-- json-playground:popStack.json
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
-->
{{% playground file="popStack.json" language="pt" %}}
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
