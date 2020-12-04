---
title: Listview
weight: 303
description: ListView components description and its attributes details
---

---

## What is it? 

ListView component defines a list of native items. These items can be any server-driven component. 

See how the structure is represented:

<table>
  <thead>
    <tr>
      <th style="text-align:left">Attribute</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Required</th>
      <th style="text-align:left">Descriptioon</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">children</td>
      <td style="text-align:left">List&lt;<a href="../"><b>ServerDrivenComponent</b></a>&gt;</td>
      <td style="text-align:left">&#x2713;</td>
      <td style="text-align:left">
        <p></p>
        <p>Defines the item list view. They can be configured like a <code>ServerDrivenComponents </code>or
          like <code>views.</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">direction</td>
      <td style="text-align:left">&lt;b&gt;&lt;/b&gt;<a href="https://docs.usebeagle.io/api/components/layout/listview"><b>ListDirection</b></a>&lt;b&gt;&lt;/b&gt;</td>
      <td
      style="text-align:left"></td>
        <td style="text-align:left">Defines the preview list direction.</td>
    </tr>
  </tbody>
</table>

### ListDirection

It is an `ENUM`, the values are:

| **Values** | **Definition** |
| :--- | :--- |
| VERTICAL | When itens are displayed in **`LINES`**. |
| HORIZONTAL | When itens are displayed in **`COLUMNS`**. |

## How to use it?  

{{< tabs name="T138" >}}
{{% tab name="JSON" %}}
```kotlin
{
  "_beagleComponent_": "beagle:listView",
  "children": [
    {
      "_beagleComponent_": "beagle:text",
      "text": "Beagle Text list",
      "textColor": "#FF0000",
      "alignment": "CENTER"
    },
    {
      "_beagleComponent_": "beagle:text",
      "text": "Beagle Text list",
      "textColor": "#00FF00",
      "alignment": "CENTER"
    },
    {
      "_beagleComponent_": "beagle:text",
      "text": "Beagle Text list",
      "textColor": "#0000FF",
      "alignment": "CENTER"
    }
  ],
  "direction": "HORIZONTAL"
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
ListView(
    direction = ListDirection.HORIZONTAL,
    children = listOf(
        Text(
            text = "Beagle Text list",
            textColor = "#FF0000",
            alignment = TextAlignment.CENTER
        ),
        Text(
            text = "Beagle Text list",
            textColor = "#00FF00",
            alignment = TextAlignment.CENTER
        ),
        Text(
            text = "Beagle Text list",
            textColor = "#0000FF",
            alignment = TextAlignment.CENTER
        )
    )
)
```
{{% /tab %}}
{{< /tabs >}}

### 👉 [Test this component in the Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/listview.json)​
