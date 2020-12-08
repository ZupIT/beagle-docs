---
title: Resetapplication
weight: 264
description: Here you'll find ResetApplication description and its attribute.
---

---

## What is it?

Opens a screen with an informed route and deletes all the navigation piles.

Your structure is represented by the attribute below: 

| **Attribute** | **Type** | Required | Definition |
| :--- | :--- | :--- | :--- |
| route | ​[**Route**](https://app.gitbook.com/@zup-products/s/beagle/~/drafts/-MBdG3IHjLPbo5GoxgEz/api/api-acoes/navigate/route)**​** |      ✓ | Navigation route. |

## How to use it?

On the example below, three screens were used: two first used PushView to add the screens to the piles, the last one use ResetApplication and reopens the first screen.

To test, you will need three endpoints: 

1. The first endpoint will be what your frontend will call to render the screen zero. 
2. The second endpoint must be mapped as **"/firstScreen",** because this will be the chose URL to the screen 0 button's navigation, and it must return to the screen 1. 
3. The third endpoint must be mapped as **"/secondScreen",** because this will be the chosen URL to the screen 1 button's navigation, and it must return to the screen 2. On the screen 2 the passed route must be the screen's endpoint that you want to return when the application starts. In this case, **"/home"** is the screen's 0 endpoint. 

#### How to call the screen zero <a id="como-chamar-a-tela-zero"></a>

{{< tabs name="T104" >}}
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

#### How to call the screen 1 <a id="como-chamar-a-tela-1"></a>

{{< tabs name="T105" >}}
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

#### How to call the screen  2 <a id="como-chamar-a-tela-2"></a>

{{< tabs name="T106" >}}
{{% tab name="JSON" %}}
```text
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:container",
    "children" : [ {
      "_beagleComponent_" : "beagle:text",
      "text" : "Third Screen on Stack"
    }, {
      "_beagleComponent_" : "beagle:button",
      "text" : "Click me to go to reset application",
      "onPress" : [ {
        "_beagleAction_" : "beagle:resetApplication",
        "route" : {
          "url" : "/home",
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
                "Third Screen on Stack"
            ),
            Button(
                text = "Click me  to reset application",
                onPress = listOf(
                    Navigate.ResetApplication(
                        route = Route.Remote("/home")
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
