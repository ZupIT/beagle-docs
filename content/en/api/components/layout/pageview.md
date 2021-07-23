---
title: Pageview
weight: 120
description: Page View components description and its attributes details
---

---

## What is it?

`PageView` component is a container that present pages that it will be horizontally displayed. They can be any server-driven object.

{{% alert color="info" %}}
The Page View refers to its view size on mobile devices \(Android or iOS\). This size is determined by the father that it is in, which means that the width and the height will also be defined by the component father.

For example, a Page View can be declared inside of a [**Container**]({{< ref path="/api/components/layout/container" lang="en" >}}) and the width and the height will define the page view size.
{{% /alert %}}

See how the structure is represented:

<table>
  <thead>
    <tr>
      <th style="text-align:left">Attribute</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Required</th>
      <th style="text-align:left">Definition</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">children</td>
      <td style="text-align:left">List&lt;<a href="https://docs.usebeagle.io/v/v1.0-en/api/components"><strong>ServerDrivenComponent</strong></a>&gt;</td>
      <td
      style="text-align:left">&#x2713;</td>
        <td style="text-align:left">
          Defines the visual components list (server-driven) in the <code>PageView</code>.
        </td>
    </tr>
    <tr>
      <td style="text-align:left">context</td>
      <td style="text-align:left"><a href="https://docs.usebeagle.io/v/v1.0-en/api/context"><strong>ContextData</strong></a></td>
      <td
      style="text-align:left"></td>
        <td style="text-align:left">It is the <a href="https://docs.usebeagle.io/api/context"><strong>context</strong></a><strong> </strong>contained
          by this Widget.</td>
    </tr>
    <tr>
      <td style="text-align:left">onPageChange</td>
      <td style="text-align:left">List&lt;Action&gt;</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Action list that runs when the selected page is altered.</td>
    </tr>
    <tr>
      <td style="text-align:left">currentPage</td>
      <td style="text-align:left">Int</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Identifier where the page is seletected.</td>
    </tr>
    <tr>
      <td style="text-align:left">showArrow</td>
      <td style="text-align:left">Boolean</td>
      <td style="text-align:left"></td>
      <td style="text-align:left"><strong>This attribute is specific for the web platform. </strong>It enables arrows
        to change pages.</td>
    </tr>
  </tbody>
</table>

## How to use it?

On the example below, you will see a PageView that contains three pages that each one of them has a Text defined by the Context. Every time there is a change the context page is redefined:

{{< tabs id="T130" >}}
{{% tab name="JSON" %}}

<!-- json-playground:pageView.json
{
    "_beagleComponent_" : "beagle:screenComponent",
    "navigationBar" : {
      "title" : "Beagle Button",
      "showBackButton" : true,
      "navigationBarItems" : [ {
        "_beagleComponent_" : "beagle:navigationBarItem",
        "text" : "",
        "image" : {
          "_beagleImagePath_" : "local",
          "mobileId" : "informationImage"
        },
        "action" : {
          "_beagleAction_" : "beagle:alert",
          "title" : "Button",
          "message" : "This is a widget that will define a button natively using the server driven information received through Beagle.",
          "labelOk" : "OK"
        }
      } ]
    },
    "child" : {
      "_beagleComponent_" : "beagle:container",
      "children" : [ {
        "_beagleComponent_" : "beagle:tabBar",
        "items" : [ {
          "title" : "Tab 1"
        }, {
          "title" : "Tab 2"
        } ],
        "styleId" : "TabBarStyle",
        "onTabSelection" : [ {
          "_beagleAction_" : "beagle:setContext",
          "contextId" : "contestTabId",
          "value" : "@{onTabSelection}"
        } ]
      }, {
        "_beagleComponent_" : "beagle:pageView",
        "children" : [ {
          "_beagleComponent_" : "beagle:text",
          "text" : "Tab 1"
        }, {
          "_beagleComponent_" : "beagle:text",
          "text" : "Tab 2"
        } ],
        "currentPage" : "@{contestTabid}"
      } ],
      "context" : {
        "id" : "contestTabid",
        "value" : 0
      }
    }
  }
-->

{{% playground file="pageView.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Screen(
        child = Container(
            context = ContextData("currentTab", 0),
            children = listOf(
                TabBar(
                    onTabSelection = listOf(
                        SetContext(
                            "currentTab",
                            "@{onTabSelection}"
                        )
                    ),
                    currentTab = expressionOf("@{currentTab}"),
                    items = listOf(
                        TabBarItem("Tab 1"),
                        TabBarItem("Tab 2")
                    ),
                    styleId = "TabBarStyle"
                ),
                PageView(
                    currentPage = expressionOf("@{currentTab}"),
                    onPageChange = listOf(SetContext(
                        "currentTab",
                        "@{onPageChange}"
                    )),
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
