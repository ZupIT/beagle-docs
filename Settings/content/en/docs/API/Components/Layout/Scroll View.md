---
title: Scroll View
weight: 309
description: Scroll View component description and its attributes details
---

---

## What is it?

Scroll View is a container that shows the preview components by layout scroll.

See how the structure is represented:

<table>
  <thead>
    <tr>
      <th style="text-align:left"><b>Attribute</b>
      </th>
      <th style="text-align:left"><b>Type</b>
      </th>
      <th style="text-align:left">Required</th>
      <th style="text-align:left"><b>Definition</b>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">children</td>
      <td style="text-align:left">
        <p>List
          <br />&lt;<a href="../../widget.md"><b>ServerDriven</b></a>&lt;b&gt;&lt;/b&gt;</p>
        <p>&lt;b&gt;&lt;/b&gt;<a href="../../widget.md"><b>Component</b></a>&gt;</p>
      </td>
      <td style="text-align:left">&#x2713;</td>
      <td style="text-align:left">
        <p>Defines the attributes list to be displayed in the layout view.</p>
        <p><b><br /></b>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">scrollDirection</td>
      <td style="text-align:left">ScrollAxis</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Defines the scroll direction on the screen. It can be modify according
        to the <code>ScrollAxis</code> class. By default, it has the <code>VERTICAL</code> value.</td>
    </tr>
    <tr>
      <td style="text-align:left">scrollBarEnabled</td>
      <td style="text-align:left">Boolean</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Sets if the scroll bar will be displayed or not. This configuration is
        true by default.</td>
    </tr>
    <tr>
      <td style="text-align:left">context</td>
      <td style="text-align:left">&lt;b&gt;&lt;/b&gt;<a href="../../context.md"><b>ContextData</b></a>&lt;b&gt;&lt;/b&gt;</td>
      <td
      style="text-align:left"></td>
        <td style="text-align:left">Sets a context to scroll view.</td>
    </tr>
  </tbody>
</table>

### ScrollAxis

It is an `ENUM`, the values are:

| Values | Definition |
| :--- | :--- |
| VERTICAL | Defines the scroll as vertical.  |
| HORIZONTAL | Defines the scroll as horizontal.  |

## How to use it?

{{< tabs name="T141" >}}
{{% tab name="JSON" %}}
```kotlin
{
  "_beagleComponent_": "beagle:container",
  "style": {
    "flex": {
      "alignItems": "CENTER",
      "justifyContent": "CENTER"
    }
  },
  "children": [
    {
      "_beagleComponent_": "beagle:scrollView",
      "children": [
        {
          "_beagleComponent_": "beagle:image",
          "path": {
            "_beagleImagePath_": "remote",
            "url": "https://i.ibb.co/k9tYwtX/selo-do-exemplo-28420393.jpg"
          }
        },
        {
          "_beagleComponent_": "beagle:image",
          "path": {
            "_beagleImagePath_": "remote",
            "url": "https://i.ibb.co/LCKYdCT/742px-Example-en-svg.png"
          }
        }
      ]
    }
  ]
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
ScrollView(scrollDirection = ScrollAxis.VERTICAL,
           children = listOf(
                Text("Vertical ScrollView"),
                Text("Vertical ScrollView"),
                Text("Vertical ScrollView")
            )
        )
```
{{% /tab %}}
{{< /tabs >}}

### 👉 [Test this component in the Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/container.json)​
