---
title: PushView
weight: 20
description: PushView action details and its attributes
---

---

## What is it? <a id="definition"></a>

The ``PushView`` action opens a new screen on the same stack as the current screen.

The structure of ``PushView`` is:

| **Attribute** | **Type** | Required | **Definition** |
| :------------ | :---------------------------------------------- | :---------: | :------------------ |
| route | ​[Route]({{< ref path="/api/actions/navigate/route" lang="en" >}})​ | ✓ | Navigation route (endpoint that returns the new screen). |
| navigationContext | ​[NavigationContext]({{< ref path="/api/actions/navigate/navigationcontext" lang="en" >}})​ | | Context to be saved on the target screen. |

## How to use?

In the example below, we have a screen with a button, which, when clicked, opens a new screen loaded from the endpoint specified in the `PushView` action.

{{% alert color="success" %}}
  It is important to understand how the ``Route`` property works. It receives the endpoint of a new screen or server driven component. When this is done, a JSON with the screen or component is obtained as a response. This information is handled by the route attribute. Therefore, it is also possible to list a component directly in the route (which was done in the example below), so, instead of fetching the information from the screen (or component) in the endpoint, it gets it directly from the code implemented in the route.
{{% /alert %}}

To test it, just load the code screen below on the frontend.

{{< tabs id="T113" >}}
{{% tab name="JSON" %}}

<!-- json-playground:pushView.json
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:button",
    "text" : "Click me!",
    "onPress" : [ {
      "_beagleAction_" : "beagle:pushView",
      "route" : {
        "screen" : {
          "_beagleComponent_" : "beagle:screenComponent",
          "child" : {
            "_beagleComponent_" : "beagle:text",
            "text" : "Hello second Screen"
          }
        }
      }
    } ]
  }
}
-->

{{% playground file="pushView.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Screen(
    child = Button(
        text = "Click me!",
        onPress = listOf(
            Navigate.PushView(
                Route.Local(
                    Screen(
                        child = Text("Hello second Screen")
                    )
                )
            )
        )
    )
)
```

{{% /tab %}}
{{< /tabs >}}
