---
title: PullToRefresh
weight: 290
description: Description of the component PullToRefresh and its attributes
---

---

## What is it?

The PullToRefresh component configures a native "pull to refresh" behavior for the **child** component.

The structure is represented by the attributes below:

| Attribute | Type                                                | Required | Definition                                                                                          |
| :-------- | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------- |
| context   | [**ContextData**]({{< ref path="/api/context" lang="en" >}}) |          | Defines a **context** for the component. |
| onPull    | List<[**Action**]({{< ref path="/api/actions" lang="en" >}})> |          | List of actions that are performed when the **child** component is pulled. |
| isRefreshing | Boolean or [**Binding**]({{< ref path="/api/context#bindings" lang="en" >}}) |          | Expression that controls when the loading indicator is shown. |
| color     | String or [**Binding**]({{< ref path="/api/context#bindings" lang="en" >}}) |          | Defines the color of the loading indicator. |
| child     | [**ServerDrivenComponent**]({{< ref path="/api/components" lang="en" >}}) | ✓        | Defines the component that will be configured with the **PullToRefresh**. |

{{% alert color="warning" %}}
**On iOS**, this component configures an `UIRefreshControl` on the child if it is a [**ListView**]({{< ref path="/api/components/layout/listview" lang="en" >}}), [**GridView**]({{< ref path="/api/components/layout/gridview" lang="en" >}}) or [**ScrollView**]({{< ref path="/api/components/layout/scrollview" lang="en" >}}), otherwise it creates a `ScrollView` that contains the child and configures an `UIRefreshControl` for it.
{{% /alert %}}

## How to use it?

{{< tabs id="T124" >}}
{{% tab name="JSON" %}}

<!-- json-playground:pullToRefresh.json
{
    "_beagleComponent_": "beagle:container",
    "children": [
        {
            "_beagleComponent_": "beagle:pullToRefresh",
            "context": {
                "id": "isRefreshing",
                "value": false
            },
            "onPull": [
                {
                    "_beagleAction_": "beagle:setContext",
                    "contextId": "isRefreshing",
                    "value": true
                },
                {
                    "_beagleAction_": "beagle:alert",
                    "title": "Alert title",
                    "message": "Alert message",
                    "onPressOk": {
                        "_beagleAction_": "beagle:setContext",
                        "contextId": "isRefreshing",
                        "value": false
                    },
                    "labelOk": "Alert OK button"
                }
            ],
            "isRefreshing": "@{isRefreshing}",
            "color": "#0000FF",
            "child": {
                "_beagleComponent_": "beagle:text",
                "text": "PullToRefresh"
            }
        }
    ],
    "style" : {
        "flex" : {
            "grow": 1
        }
    }
}
-->

{{% playground file="pullToRefresh.json" language="en" platform="ios" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Container(
    children = listOf(
        PullToRefresh(
            context = ContextData("isRefreshing", false),
            onPull = listOf(
                SetContext(
                    contextId = "isRefreshing",
                    value = true
                ),
                Alert(
                    title = "Alert title",
                    message = "Alert message",
                    onPressOk =
                        SetContext(
                            contextId = "isRefreshing",
                            value = false
                        ),
                    labelOk = "Alert OK button"
                )
            ),
            isRefreshing = expressionOf("@{isRefreshing}"),
            color = "#0000FF",
            child = Text("PullToRefresh")
        )
    )
).applyFlex(
    Flex(
        grow = 1.0
    )
)
```

{{% /tab %}}
{{< /tabs >}}
