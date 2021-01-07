---
title: PopToView
weight: 260
description: Here you'll find PopToView description and its attribute.
---

---

## What is it?

Returns to a specific screen and cleans the navigation that was generated from that screen.

Your structure is represented by the attribute below: 

| **Attribute** | Type | Required | Definition |
| :--- | :--- | :--- | :--- |
| route | ​String |     ✓ | Route of a screen that it's on the pile. |

## How to use it?

On the example below, three screens were used: two first used PushView to add the screens to the piles, the last one use **PopToView** to return to the first. 

To test, you will need three endpoints:

1. The first endpoint will be what your frontend will call to render the screen zero.
2. The second endpoint should be mapped as **"/firstScreen",** because this will be the chosen URL to the navigation of the button on the screen 0 and for that, this endpoint must return the screen 1. 
3. The third endpoint must be mapped  **"/secondScreen",** because this will be the chose URL to the navigation of the button on the screen 1, for that, this endpoint must return the screen 2. It is through the screen 2 that it pass a route where the endpoint of the screen must return. in this case, it is "/home" that it is the endpoint of the zero screen.

#### How to call the screen 0  <a id="como-chamar-pela-tela-zero"></a>

{{< tabs id="T98" >}}
{{% tab name="JSON" %}}
<!-- json-playground:firstScreenNavigate.json
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:container",
    "children" : [ {
      "_beagleComponent_" : "beagle:text",
      "text" : "First Screen on Stack"
    }, {
      "_beagleComponent_" : "beagle:button",
      "text" : "Click me!",
      "onPress" : [ {
        "_beagleAction_" : "beagle:pushView",
        "route" : {
          "url" : "secondScreenNavigate.json",
          "shouldPrefetch" : false
        }
      } ]
    } ]
  }
}
-->
{{% playground file="firstScreenNavigate.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Screen(
    child = Container(
        children = listOf(
            Text(
                "First Screen on Stack"
            ),
            Button(
                text = "Click me!",
                onPress = listOf(
                    Navigate.PushView(
                        Route.Remote(
                            url = "secondScreenNavigate.json"
                        )
                    )
                )
            )
        )
    )
)
```
{{% /tab %}}
{{< /tabs >}}

#### How to call the screen 1  <a id="como-chamar-a-tela-1"></a>

{{< tabs id="T99" >}}
{{% tab name="JSON" %}}
<!-- json-playground:secondScreenNavigate.json
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:container",
    "children" : [ {
      "_beagleComponent_" : "beagle:text",
      "text" : "Second Screen on Stack"
    }, {
      "_beagleComponent_" : "beagle:button",
      "text" : "Click me!",
      "onPress" : [ {
        "_beagleAction_" : "beagle:pushView",
        "route" : {
          "url" : "popToView.json",
          "shouldPrefetch" : false
        }
      } ]
    } ]
  }
}
-->
{{% playground file="secondScreenNavigate.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Screen(
    child = Container(
        children = listOf(
            Text(
                "Second Screen on Stack"
            ),
            Button(
                text = "Click me!",
                onPress = listOf(
                    Navigate.PushView(
                        Route.Remote(
                            url = "popToView.json"
                        )
                    )
                )
            )
        )
    )
)
```
{{% /tab %}}
{{< /tabs >}}

#### How to call the screen 2 <a id="como-chamar-a-tela-2"></a>

{{< tabs id="T100" >}}
{{% tab name="JSON" %}}
<!-- json-playground:popToView.json
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:container",
    "children" : [ {
      "_beagleComponent_" : "beagle:text",
      "text" : "Third Screen on Stack"
    }, {
      "_beagleComponent_" : "beagle:button",
      "text" : "Click me to go to first screen",
      "onPress" : [ {
        "_beagleAction_" : "beagle:popToView",
        "route" : "firstScreenNavigate.json"
      } ]
    } ]
  }
}
-->
{{% playground file="popToView.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Screen(
    child = Container(
        children = listOf(
            Text(
                "Third Screen on Stack"
            ),
            Button(
                text = "Click me to go to first screen",
                onPress = listOf(
                    Navigate.PopToView(
                        route = "firstScreenNavigate.json"
                    )
                )
            )
        )
    )
)
```
{{% /tab %}}
{{< /tabs >}}
