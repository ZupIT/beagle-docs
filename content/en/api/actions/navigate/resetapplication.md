---
title: ResetApplication
weight: 264
description: Here you'll find ResetApplication description and its attribute.
---

---

## What is it?
What is it?
Opens a screen with an informed route and deletes all the navigation piles.

Your structure is represented by the attribute below:

| **Attribute** | **Type**                                            | Required | Definition        |
| :------------ | :-------------------------------------------------- | :------- | :---------------- |
| route         | ​[**Route**](/api/actions/navigate/route)**​** | ✓        | Navigation route. |

## How to use it?

On the example below, three screens were used. The two first used PushView to add the screens to the piles and the last one uses ResetApplication and reopens the first screen.

You will need three endpoints to test:

1. The first endpoint will be what your frontend will call to render the screen zero.
2. The second endpoint must be mapped as **"/firstScreen",** because this will be the chose URL to the screen 0 button's navigation, and it must return to the screen 1.
3. The third endpoint must be mapped as **"/secondScreen",** because this will be the chosen URL to the screen 1 button's navigation, and it must return to the screen 2. On the screen 2 the passed route must be the screen's endpoint that you want to return when the application starts. In this case, **"/home"** is the screen's 0 endpoint.

#### How to call the screen zero <a id="como-chamar-a-tela-zero"></a>

{{< tabs id="T104" >}}
{{% tab name="JSON" %}}

<!-- json-playground:firstScreenonStack.json
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
          "url" : "secondScreenonStack.json",
          "shouldPrefetch" : false
        }
      } ]
    } ]
  }
}
-->

{{% playground file="firstScreenonStack.json" language="en" %}}
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
                            url = "secondScreenonStack.json"
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

{{< tabs id="T105" >}}
{{% tab name="JSON" %}}

<!-- json-playground:secondScreenonStack.json
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
          "url" : "resetApplication.json",
          "shouldPrefetch" : false
        }
      } ]
    } ]
  }
}
-->

{{% playground file="secondScreenonStack.json" language="en" %}}
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
                            url = "resetApplication.json"
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

{{< tabs id="T106" >}}
{{% tab name="JSON" %}}

<!-- json-playground:resetApplication.json
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
          "url" : "firstScreenonStack.json",
          "shouldPrefetch" : false
        }
      } ]
    } ]
  }
}
-->

{{% playground file="resetApplication.json" language="en" %}}
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
                        route = Route.Remote("firstScreenonStack.json")
                    )
                )
            )
        )
    )
)
```

{{% /tab %}}
{{< /tabs >}}
