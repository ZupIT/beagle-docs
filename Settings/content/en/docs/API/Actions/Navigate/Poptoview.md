---
title: Poptoview
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
```text
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
          "url" : "/firstScreen",
          "shouldPrefetch" : false
        }
      } ]
    } ]
  }
}
```
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
                            url = "/firstScreen"
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
```text
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
          "url" : "/secondScreen",
          "shouldPrefetch" : false
        }
      } ]
    } ]
  }
}
```
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
                            url = "/secondScreen"
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
```text
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
                        route = "/home"
                    )
                )
            )
        )
    )
)
```
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
                        route = "/home"
                    )
                )
            )
        )
    )
)
```
{{% /tab %}}
{{< /tabs >}}

### 👉 [Test this example on Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/button.json)
