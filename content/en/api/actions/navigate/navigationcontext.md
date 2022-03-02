---
title: NavigationContext
weight: 15
description: Describes the NavigationContext functions
---

---

## What is it?

It is a structure present in most navigation actions. It defines a special context, called `"navigationContext"`, which is created on the target screen only.

See its structure below:

| **Attribute** | **Type** | Required | **Definition** |
| :----------- | :------- | :---------: | :---------------------------- |
| value | Any | ✓ | Value to be set at the ``NavigationContext`` |
| path | String |   | Path on the ``NavigationContext`` structure |

{{% alert color="success" %}}
  `NavigationContext` is not present in `openExternalUrl` and `openNativeRoute` actions
{{% /alert %}}

## How to use it?

The Navigation Context is better used when you want to send information from one screen into another. Next, we have a screen with a button, that when clicked, loads a new ``view`` (which represents another screen). The information contained in the "navigationContext" `value` attribute will be saved in the scope of this new screen. This information can be accessed through the expression *"@{navigationContext.text}"* in the new screen only.

See the example below:

{{< tabs id="T178" >}}
{{% tab name="JSON" %}}

<!-- json-playground:navigationcontext.json
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
            "text" : "@{navigationContext.text}"
          }
        }
      },
      "navigationContext": {
        "path": "text",
        "value": "textFromNavigation"
      }
    } ]
  }
}
-->

{{% playground file="navigationcontext.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```Kotlin
Screen(
    child = Button(
        text = "Click me!",
        onPress = listOf(
            Navigate.PushView(
                route = Route.Local(
                    Screen(
                        child = Text(expressionOf("@{navigationContext.text}"))
                    )
                ),
                navigationContext = NavigationContext(
                    value = "textFromNavigation",
                    path = "text"
                )
            )
        )
    )
)
```

{{% /tab %}}
{{< /tabs >}}

{{% alert color="success" %}}
  Notice that the new screen will list the expression `"@{navigationContext.text}"` value as the ``Text`` component value
{{% /alert %}}
