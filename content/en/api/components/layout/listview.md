---
title: Listview
weight: 315
description: "You will find here the description of the ListView component, its attributes and constructors"
---

---

## What is it?

The ListView component is responsible for defining a list of recyclable items natively. These items can be any server-driven components. The use of ListView is recommended for situations where there is repetition of components, but with different data.

{{% alert color="danger" %}}
From version 1.5.0, we started to support the use of context and cell recycling in ListView, with that we provide two ways to build the component. The depreciated version was maintained only to keep backward compatibility, upgrade to the new version of the component if possible for better performance.
{{% /alert %}}

See how the structure is represented:

### ListView

| Attribute           | Type                                                      | Required	 | Definition                                                                                                                       |
| :----------------- | :-------------------------------------------------------- | :---------: | :------------------------------------------------------------------------------------------------------------------------------ |
| direction          | [ListDirection](#listdirection)                           |             | Sets the direction in which list items are displayed.                                                                           |
| context            | [ContextData]({{< ref path="/api/context" lang="en" >}})                          |             | Defines the context of the component.                                                                                           |
| onInit             | List&lt;[Action]({{< ref path="/api/actions" lang="en" >}})&gt;                   |             | List of actions to be performed as soon as the component is displayed.                                                          |
| dataSource         | [Bind]({{< ref path="/api/context#bindings" lang="en" >}})&lt;List&lt;Any&gt;&gt; |      ✓      | Expression that points to a list of values used to populate the component.                                                      |
| templates           | List&lt;[ServerDrivenComponent]({{< ref path="/api/components" lang="en" >}}) &gt;  |            | It represents a template array, where each template corresponds to a cell in the list through a`ServerDrivenComponent`.                                                          |
| isScrollIndicatorVisible | Bool | | Set the scroll bar visibility. |
| onScrollEnd        | List&lt;[Action]({{< ref path="/api/actions" lang="en" >}})&gt;                   |             | List of actions taken when the list ends.                                                                                       |
| scrollEndThreshold | Int                                                       |             | Defines the percentage scrolled from the list to trigger `onScrollEnd`.                                                         |
| iteratorName       | String                                                    |             | It is the context identifier for each cell.                                                                                     |
| key                | String                                                    |             | Points to a unique value present in each item of the `dataSource` to be used as a suffix in the ids of the template components. |

### ListDirection

It is an `ENUM`, the values are:

| **Values** | **Definition**                             |
| :--------- | :----------------------------------------- |
| VERTICAL   | When itens are displayed in **`LINES`**.   |
| HORIZONTAL | When itens are displayed in **`COLUMNS`**. |

{{% alert color="info" %}}
Default value is ListDirection.VERTICAL
{{% /alert %}}

### Templates

  The template to use will be decided according to the property `case` of the template.  
{{% alert color="info" %}}
 The first template where `case` is `true` is the template chosen to render an item.
 If all are `false`, then, the first template where `case` is omitted (default template) is used.
{{% /alert %}}

### Deprecated ListView

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
      <td style="text-align:left">List&lt;<a href="../"><strong>ServerDrivenComponent</strong></a>&gt;</td>
      <td style="text-align:left">&#x2713;</td>
      <td style="text-align:left">
        Defines the item list view. They can be configured like a <code>ServerDrivenComponents </code>or
          like <code>views.</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">direction</td>
      <td style="text-align:left"><a href="https://docs.usebeagle.io/api/components/layout/listview"><strong>ListDirection</strong></a></td>
      <td
      style="text-align:left"></td>
        <td style="text-align:left">Defines the preview list direction.</td>
    </tr>
  </tbody>
</table>

## How to use it?

### ListView

{{< tabs id="T128" >}}
{{% tab name="JSON" %}}

<!-- json-playground:listView.json
{
  "_beagleComponent_": "beagle:listView",
  "direction": "VERTICAL",
  "dataSource": [
    {
      "name": "Kelsier",
      "race": "Half-skaa",
      "planet": "Scadrial",
      "isMistborn": true,
      "age": 38,
      "sex": "male"
    },
    {
      "name": "Vin",
      "race": "Half-skaa",
      "planet": "Scadrial",
      "isMistborn": true,
      "age": 20,
      "sex": "female"
    },
    {
      "name": "TenSoon",
      "race": "Kandra",
      "planet": "Scadrial",
      "isMistborn": false,
      "age": 40,
      "sex": "male"
    }
  ],
"templates":[
   {
      "case":"@{eq(item.race, 'Half-skaa')}",
      "view":{
         "_beagleComponent_":"beagle:container",
         "style":{
            "margin":{
               "bottom":{
                  "value":20,
                  "type":"REAL"
               }
            }
         },
         "children":[
            {
               "_beagleComponent_":"beagle:text",
               "text":"Name: @{item.name}"
            },
            {
               "_beagleComponent_":"beagle:text",
               "text":"Race: @{item.race}"
            },
            {
               "_beagleComponent_":"beagle:text",
               "text":"Mistborn: @{item.isMistborn}"
            },
            {
               "_beagleComponent_":"beagle:text",
               "text":"Planet: @{item.planet}"
            },
            {
               "_beagleComponent_":"beagle:text",
               "text":"sex: @{item.sex}"
            },
            {
               "_beagleComponent_":"beagle:text",
               "text":"age: @{item.age}"
            }
         ]
      }
   },
   {
      "case":"@{eq(item.race, 'Kandra')}",
      "view":{
         "_beagleComponent_":"beagle:container",
         "style":{
            "margin":{
               "bottom":{
                  "value":20,
                  "type":"REAL"
               }
            }
         },
         "children":[
            {
               "_beagleComponent_":"beagle:text",
               "text":"Name: @{item.name}"
            },
            {
               "_beagleComponent_":"beagle:text",
               "text":"Race: @{item.race}"
            },
            {
               "_beagleComponent_":"beagle:text",
               "text":"Mistborn: @{item.isMistborn}"
            },
            {
               "_beagleComponent_":"beagle:text",
               "text":"Planet: @{item.planet}"
            },
            {
               "_beagleComponent_":"beagle:text",
               "text":"sex: @{item.sex}"
            },
            {
               "_beagleComponent_":"beagle:text",
               "text":"age: @{item.age}"
            }
         ]
      }
   }
 ]
}
-->

{{% playground file="listView.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
{
    data class Person (
            val name: String,
            val race: String,
            val planet: String,
            val isMistborn: Boolean,
            val age: Int,
            val sex: String
    )
    
    val characters = listOf(
        Person(
            name = "Kelsier",
            race = "Half-skaa",
            planet = "Scadrial",
            isMistborn = true,
            age = 38,
            sex = "male"
        ),
        Person(
            name = "Vin",
            race = "Half-skaa",
            planet = "Scadrial",
            isMistborn = true,
            age = 20,
            sex = "female"
        ),
        Person(
            name = "TenSoon",
            race = "Kandra",
            planet = "Scadrial",
            isMistborn = false,
            age = 40,
            sex = "male"
        ),
    )
    
    ListView(
        context = ContextData(id = "characters", value = characters),
        dataSource = expressionOf("@{characters}"),
        templates =  Case("@{eq(item.race, 'Half-skaa')}"),
        view = Container(
            children = listOf(
                Text("Name: @{item.name}"),
                Text("Race: @{item.race}"),
                Text("Mistborn: @{item.isMistborn}"),
                Text("Planet: @{item.planet}"),
                Text("sex: @{item.sex}"),
                Text("age: @{item.age}"),
            )
        ).setStyle{
                margin = EdgeValue.only(bottom = 20)
        }
        Case("@{eq(item.race, 'Kandra')}"),
         view =  Container(
            children = listOf(
                Text("Name: @{item.name}"),
                Text("Race: @{item.race}"),
                Text("Mistborn: @{item.isMistborn}"),
                Text("Planet: @{item.planet}"),
                Text("sex: @{item.sex}"),
                Text("age: @{item.age}"),
            )
        ).setStyle{
                margin = EdgeValue.only(bottom = 20)
        }
    )
}
```

{{% /tab %}}
{{< /tabs >}}

### Deprecated ListView

{{< tabs id="T129" >}}
{{% tab name="JSON" %}}

<!-- json-playground:listViewDepreciado.json
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
-->

{{% playground file="listViewDepreciado.json" language="en" %}}
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
