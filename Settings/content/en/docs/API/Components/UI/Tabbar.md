---
title: Tabbar
weight: 284
description: >-
  In this section, you will find a description of the Tab Bar component and its
  attributes
---

---

## What is it? 

The Tab Bar component is responsible for defining a table that allows navigation between views. It displays tabs corresponding to different views that can be accessed through it.

 The structure is represented as shown below:

| **Attribute** | **Type** | Required | **Definition** |
| :--- | :--- | :--- | :--- |
| items | TabBarItem |       ✓ | Receive a list of `TabBarItems` that will define the `Tabs` in the `TabBar` |
| styleId | String |  | Style ID that identifies an style to be applied on the TabBar |
| currentTab | Bind&lt;Int&gt; |  | Integer number that identifies that selected [`TabBarItem`](tabview.md#tabitem-definition)\`\` |
| onTabSelection | List&lt;Action&gt; |  | List of [**Actions**](../../actions/) that are performed when a TabBarItem is selected. It can be used to load views according to the selected `TabBarItem`. |

## What is Tab Bar **Item?**

This component represents the `TabBarItem` presented on a Tab Bar.  

| **Attributes** | **Type** | Required | **Definition** |
| :--- | :--- | :--- | :--- |
| title | String |  | Displays the text in the `Tab Bar item` **Title**. If it is not declared or if it is set to null, it will not appear on the screen. The tab wont be displayed. |
| icon | Path |  | Displays a local image as an icon in the `Tab Bar Item`. If it is not declared or is set to null, it will not appear on the screen. |

{{% alert color="warning" %}}
If a title or icon is not declared in the `TabBarItem`, the empty space will remain. If you need navigation between viewers without the Tab interface, it is recommended that you use the [**navigation components**](../../actions/navigate/)**.**
{{% /alert %}}

## How to use it? 

On the following example, it will be used two componentes to explain TabBar: [**PageView**](../layout/pageview.md) and [**Context**](../../context.md). 

**Page View** is used to render the pages you want to display, that is, it will create the view on each selected tab. This is where you will define the components you want to display by clicking on each tab. 

The components will be rendered according to their position in the list of componentes defined at the Page View Component.It means that, if we have 2 text components  in our list, TAB 1 and TAB 2. The first has a position of ZERO = 0, and the second has ONE = 1. The **currentTab** attribute is the one that defines which component is displayed according to the value defined in it. 

The **Context** is used to save the indicator \(position\) of the selected tab, and inform it to PageView, which coordinates which element will be displayed.

### Example



```kotlin
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
```



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



| Tab Bar |
| :---: |
| ![](/docs-beagle/beagle-tab-view.gif) |

### 👉 [Test this component on the Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/analytics.json)

{{% alert color="warning" %}}
This example does not exist on the playground, but you can copy and paste the JSON code above and test it on the playground. The section bellow contains more information about this example
{{% /alert %}}
