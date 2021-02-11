---
title: Tabbar
weight: 296
description: >-
  In this section, you will find a description of the Tab Bar component and its
  attributes
---

---

## What is it?

The Tab Bar component is responsible for defining a table that allows navigation between views. It displays tabs corresponding to different views that can be accessed through it.

Your structure is represented by the attributes below:

| **Attribute**  | **Type**           | Required | **Definition**                                                                                                                                                   |
| :------------- | :----------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| items          | TabBarItem         | ✓        | Receive a list of `TabBarItems` that will define the `Tabs` in the `TabBar`                                                                                      |
| styleId        | String             |          | Style ID that identifies an style to be applied on the TabBar                                                                                                    |
| currentTab     | Bind&lt;Int&gt;    |          | Integer number that identifies the selected [`TabBarItem`]({{< ref path="/api/components/ui/tabview#what-is-tabitem" lang="en" >}})                                                      |
| onTabSelection | List&lt;Action&gt; |          | List of [**Actions**]({{< ref path="/api/actions/" lang="en" >}}) that are performed when a TabBarItem is selected. It can be used to load views according to the selected `TabBarItem`. |

## What is Tab Bar **Item?**

This component represents the `TabBarItem` presented on a Tab Bar.

| **Attributes** | **Type** | Required | **Definition**                                                                                                                                                 |
| :------------- | :------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title          | String   |          | Displays the text in the `Tab Bar item` **Title**. If it is not declared or if it is set to null, it will not appear on the screen. The tab won't be displayed. |
| icon           | Path     |          | Displays a local image as an icon in the `Tab Bar Item`. If it is not declared or is set to null, it will not appear on the screen.                            |

{{% alert color="warning" %}}
If a title or icon is not declared in the `TabBarItem`, the empty space will remain. If you need navigation between viewers without the Tab interface, it is recommended that you use the [**navigation actions**]({{< ref path="/api/actions/navigate/" lang="en" >}})
{{% /alert %}}

## How to use it?

On the following example, it will be used two componentes to explain TabBar: [**PageView**]({{< ref path="/api/components/layout/pageview" lang="en" >}}) and [**Context**]({{< ref path="/api/context/" lang="en" >}}).

**Page View** is used to render the pages you want to display, that is, it will create the view on each selected tab. This is where you will define the components you want to display by clicking on each tab.

The components will be rendered according to their position in the list of componentes defined at the Page View Component.

It means that, if we have 2 text components in our list - TAB 1 and TAB 2 -, The first has a position of ZERO = 0, and the second has ONE = 1. 

The **currentTab** attribute is the one that defines which component is displayed according to the value defined in it.

The **Context** is used to save the indicator \(position\) of the selected tab, and inform it to PageView, which coordinates which element will be displayed.

### Example

{{< tabs id="T120" >}}
{{% tab name="JSON" %}}

<!-- json-playground:tabBar.json
{
    "_beagleComponent_": "beagle:screenComponent",
    "child": {
        "_beagleComponent_": "beagle:container",
        "children": [
            {
                "_beagleComponent_": "beagle:tabBar",
                "items": [
                    {"title": "Tab 1"},
                    {"title": "Tab 2"}
                ],
                "styleId": "TabBarStyle",
                "onTabSelection": [
                    {
                        "_beagleAction_": "beagle:setContext",
                        "contextId": "contestTabId",
                        "value": "@{onTabSelection}"
                    }
                ]
            },
            {
                "_beagleComponent_": "beagle:pageView",
                "children": [
                    {
                        "_beagleComponent_": "beagle:text",
                        "text": "Tab 1"
                    },
                    {
                        "_beagleComponent_": "beagle:text",
                        "text": "Tab 2"
                    }
                ],
                "currentPage": "@{contestTabid}"
            }
        ],
        "context": {
            "id": "contestTabid",
            "value": 0
        }
    }
}
-->

{{% playground file="tabBar.json" language="en" %}}
{{% /tab %}}

{{% tab name="kotlin DSL" %}}

```kotlin
Screen(
    child = Container(
        context = ContextData("contestTabid", 0),
        children = listOf(
            TabBar(
                onTabSelection = listOf(
                    SetContext(
                        "contestTabId",
                        "@{onTabSelection}"
                    )
                ),
                items = listOf(
                    TabBarItem("Tab 1"),
                    TabBarItem("Tab 2")
                ),
                styleId = "TabBarStyle"
            ),
            PageView(
                currentPage = expressionOf("@{contestTabid}"),
                children = listOf(
                    Text(
                        "Tab 1"
                    ),
                    Text(
                        "Tab 2"
                    )
                )
            )
        )
    )
)
```

{{% /tab %}}
{{< /tabs >}}

|          Tab Bar          |
| :-----------------------: |
| ![](/shared/beagle-tab-view.gif) |

### 👉 [Test this component on the Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/analytics.json)

{{% alert color="warning" %}}
This example does not exist on the playground, but you can copy and paste the JSON code above and test it on the playground. The section bellow contains more information about this example
{{% /alert %}}
