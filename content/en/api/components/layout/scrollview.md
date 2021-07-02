---
title: ScrollView
weight: 100
description: ScrollView component description and its attributes details
---

---

## What is it?

Scroll View is a container that shows the preview components by layout scroll.

See how the structure is represented:

<table>
  <thead>
    <tr>
      <th style="text-align:left"><strong>Attribute</strong>
      </th>
      <th style="text-align:left"><strong>Type</strong>
      </th>
      <th style="text-align:left">Required</th>
      <th style="text-align:left"><strong>Definition</strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">children</td>
      <td style="text-align:left">
        List
          <br />&lt;<a href="../../widget"><strong>ServerDriven</strong></a>
       <a href="../../widget"><strong>Component</strong></a>&gt;
      </td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">
        Defines the attributes list to be displayed in the layout view.
        <strong><br /></strong>
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
      <td style="text-align:left"><a href="../../context/"><strong>ContextData</strong></a></td>
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

{{< tabs id="T131" >}}
{{% tab name="JSON" %}}
<!-- json-playground:scrollView.json
{
   "_beagleComponent_":"beagle:scrollview",
   "children":[
      {
         "_beagleComponent_":"beagle:text",
         "text":"Vertical ScrollView"
      },
      {
         "_beagleComponent_":"beagle:text",
         "text":"Vertical ScrollView"
      },
      {
         "_beagleComponent_":"beagle:text",
         "text":"Vertical ScrollView"
      }
   ],
   "scrollDirection":"VERTICAL"
}

-->
{{% playground file="scrollView.json" language="en" %}}
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
{{< /tabs >}}​
