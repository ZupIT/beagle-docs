---
title: Pageview
weight: 317
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
      <td style="text-align:left">List&lt;<a href="https://docs.usebeagle.io/v/v1.0-en/api/components"><b>ServerDrivenComponent</b></a>&gt;</td>
      <td
      style="text-align:left">&#x2713;</td>
        <td style="text-align:left">
          <p></p>
          <p>Defines the visual components list (server-driven) in the <code>PageView</code>.</p>
        </td>
    </tr>
    <tr>
      <td style="text-align:left">context</td>
      <td style="text-align:left"><a href="https://docs.usebeagle.io/v/v1.0-en/api/context"><b>ContextData</b></a>&lt;b&gt;&lt;/b&gt;</td>
      <td
      style="text-align:left"></td>
        <td style="text-align:left">It is the <a href="https://docs.usebeagle.io/api/context"><b>context</b></a><b> </b>contained
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
      <td style="text-align:left"><b>This attribute is specific for the web platform. </b>It enables arrows
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
   "_beagleComponent_":"beagle:container",
   "children":[
      {
         "_beagleComponent_":"beagle:pageView",
         "children":[
            {
               "_beagleComponent_":"beagle:text",
               "text":"Page 1",
               "alignment":"CENTER"
            },
            {
               "_beagleComponent_":"beagle:text",
               "text":"Page 2",
               "alignment":"CENTER"
            },
            {
               "_beagleComponent_":"beagle:text",
               "text":"Page 3",
               "alignment":"CENTER"
            }
         ],
         "onPageChange":[
            {
               "_beagleAction_":"beagle:setContext",
               "contextId":"context",
               "value":"@{onPageChange}"
            }
         ],
         "currentPage":"@{context}"
      },
      {
         "_beagleComponent_":"beagle:pageIndicator",
         "selectedColor":"#000000",
         "unselectedColor":"#888888",
         "numberOfPages":3,
         "currentPage":"@{context}"
      }
   ],
   "context":{
      "id":"context",
      "value":0
   }
}
-->

{{% playground file="pageView.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Container(
    children = listOf(
        PageView(
            children = (1..3).map {
                Text(
                    text = "Page $it",
                    alignment = TextAlignment.CENTER
                )
            },
            onPageChange = listOf(SetContext("context", "@{onPageChange}")),
            currentPage = expressionOf("@{context}")
        ),
        PageIndicator(
            numberOfPages = 3,
            selectedColor = BLACK,
            unselectedColor = LIGHT_GREY,
            currentPage = expressionOf("@{context}")
        )
    ),
    context = ContextData(
        id = "context",
        value = 0
    )
)
```

{{% /tab %}}
{{< /tabs >}}
