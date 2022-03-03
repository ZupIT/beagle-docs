---
title: PopToView
weight: 70
description: PopToView action details and its attributes
---

---

## What is it? <a id="definition"></a>

The ``PopToView`` action navigates to a screen that was rendered before the current screen, which is on the same stack. For example, if the application displays a screen that is the ``third`` screen in a stack, when navigating to the ``first``, the ``second`` and ``third`` screens will be destroyed.

The structure of ``PopToView`` is:

| **Attribute** | **Type** | Required | **Definition** |
| :--- | :--- | :---: | :--- |
| route | String | ✓ | Route of a screen that is on the stack. |
| navigationContext | ​[NavigationContext]({{< ref path="/api/actions/navigate/navigationcontext" lang="en" >}})​ | | Context to be saved on the target screen. |

## How to use it?

To test, we will use three screens:

1. The first screen will be the home screen and the first in the stack. The endpoint for this screen should be **"/firstscreen"**. 
2. The second screen should have an endpoint as **"/secondscreen"**
3. The third should have an endpoint as **"/thirdscreen"**. It is on the third screen that the ``PopToView`` action will be triggered. The url listed in the ``PopToView`` action should be **"/firstscreen"**

Below we list the codes to test this action:
{{% alert color="success" %}}
  The examples below require you to create these screens on a local backend. However, it is possible to test them without a Backend. To do this, you just need to get the JSONS from the screens listed and use some online MOCK RESPONSE tool. If you do that, just change the URL addresses in the navigation actions to the "mocked" addresses
{{% /alert %}}

### Tela inicial

{{< tabs id="T116" >}}
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

{{% tab name="KotlinDSL" %}}

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
                            url = "/secondscreen"
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

#### Tela 2

{{< tabs id="T117" >}}
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

{{% tab name="KotlinDSL" %}}

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
                            url = "/thirdscreen"
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

#### Tela 3

{{< tabs id="T118" >}}
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
{{% tab name="KotlinDSL" %}}

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
                      route = "/firstscreen"
                    )
                )
            )
        )
    )
)
```

{{% /tab %}}
{{< /tabs >}}