---
title: GridView
weight: 90
description: "Here you will find the documentation about the GridView component, its attributes and constructors."
---

---

## What is it?

The GridView component defines how a group of items will place itself natively in a **recyclable** grid layout. The items in a GridView could be any server-driven component. The GridView use is more suitable for visual content and is recommended for situations where an item repeats itself but with different data, like a card with movies details for example.

This is how this component is structured:

### GridView

| Attribute         | Type                                                          | Required | Definition                                                                                                                           |
| :----------------- | :---------------------------------------------------------- | :---------: | :---------------------------------------------------------------------------------------------------------------------------------- |
| spanCount          |                                      Int            |  ✓ | Defines the number of columns or rows that the GridView will display.     |
| direction          | [GridViewDirection](#GridViewDirection)                           |             | Sets the direction in which items are displayed. |
| context            | [ContextData]({{< ref path="/api/context" lang="en" >}})                          |             | Defines the context of the component.                                                                                           |
| onInit             | List&lt;[Action]({{< ref path="/api/actions" lang="en" >}})&gt;                  |             | List of actions to be performed as soon as the component is displayed.                                                          |
| dataSource         | [Bind]({{< ref path="/api/context#bindings" lang="en" >}})&lt;List&lt;Any&gt;&gt; |      ✓      | Expression that points to a list of values used to populate the component.                                                      |
| templates          | List&lt;[ServerDrivenComponent]({{< ref path="/api/components" lang="en">}}) &gt;   |            | It represents a template array, where each template corresponds to a cell in the list through a`ServerDrivenComponent`.                                                          |
| isScrollIndicatorVisible | Bool | | Set the scroll bar visibility. |
| onScrollEnd        | List&lt;[Action]({{< ref path="/api/actions" lang="en" >}})&gt;                  |             | List of actions taken when the list ends.                                                                                       |
| scrollEndThreshold | Int                                                       |             | Defines the percentage scrolled from the list to trigger `onScrollEnd`.                                                         |
| iteratorName       | String                                                    |             | It is the context identifier for each cell. The default value is <code>item</code>.                                                                                      |
| indexName       | String                                                    |             | It is the index identifier for each cell. The default value is <code>index</code>.                                                                                      |
| key                | String                                                    |             | Points to a unique value present in each item of the `dataSource` to be used as a suffix in the ids of the template components. |
| itemAspectRatio    | Double                                                  |             | only valid for Flutter. This sets the aspect ratio of the items in the grid. If left in blank, the items will be squares (itemAspectRatio = 1). The Flutter GridView doesn't accept items with arbitrary size. |

{{% alert color="warning" %}}
The implicit context defined by _iteratorName_ represents an item in the datasource, so any `SetContext` using this context will update the datasource.
{{% /alert %}}

### GridViewDirection

It is an `ENUM`, the values are:

| **Values** | **Definition**                             |
| :--------- | :----------------------------------------- |
| VERTICAL   | When itens are displayed in **`COLUMNS`**.   |
| HORIZONTAL | When itens are displayed in **`ROWS`**. |

{{% alert color="info" %}}
Default value is GridViewDirection.VERTICAL
{{% /alert %}}

### Templates

{{% alert color="info" %}}
  `case` is expression that will return `true` or `false`.
{{% /alert %}}

  The template to use will be decided according to the property `case` of the template.  
{{% alert color="info" %}}
 The first template where `case` is `true` is the template chosen to render an item.
 If all are `false`, then the first template where `case` is omitted (default template) is used.
{{% /alert %}}

## How to use it?

### GridView

{{< tabs id="T146" >}}
{{% tab name="JSON" %}}

<!-- json-playground:gridView.json
{
  "_beagleComponent_": "beagle:gridView",
  "context": {
    "id": "characters",
    "value": [
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
      },
      {
        "name": "TenSoon",
        "race": "Kandra",
        "planet": "Scadrial",
        "isMistborn": false,
        "age": 40,
        "sex": "male"
      }
    ]
  },
  "dataSource": "@{characters}",
  "templates": [
    {
      "case": "@{eq(item.race, 'Half-skaa')}",
      "view": {
        "_beagleComponent_": "beagle:container",
        "children": [
          {
            "_beagleComponent_": "beagle:text",
            "text": "Index: @{index}"
          },
          {
            "_beagleComponent_": "beagle:text",
            "text": "Name: @{item.name}"
          },
          {
            "_beagleComponent_": "beagle:text",
            "text": "Race: @{item.race}"
          },
          {
            "_beagleComponent_": "beagle:text",
            "text": "Mistborn: @{item.isMistborn}"
          },
          {
            "_beagleComponent_": "beagle:text",
            "text": "Planet: @{item.planet}"
          },
          {
            "_beagleComponent_": "beagle:text",
            "text": "sex: @{item.sex}"
          },
          {
            "_beagleComponent_": "beagle:text",
            "text": "age: @{item.age}"
          }
        ],
        "style": {
          "cornerRadius": {},
          "size": {},
          "margin": {
            "bottom": {
              "value": 20,
              "type": "REAL"
            }
          },
          "flex": {}
        }
      }
    },
    {
      "case": "@{eq(item.race, 'Kandra')}",
      "view": {
        "_beagleComponent_": "beagle:container",
        "children": [
          {
            "_beagleComponent_": "beagle:text",
            "text": "Name: @{item.name}"
          },
          {
            "_beagleComponent_": "beagle:text",
            "text": "Race: @{item.race}"
          },
          {
            "_beagleComponent_": "beagle:text",
            "text": "Mistborn: @{item.isMistborn}"
          }
        ],
        "style": {
          "cornerRadius": {},
          "size": {},
          "margin": {
            "bottom": {
              "value": 20,
              "type": "REAL"
            }
          },
          "flex": {}
        }
      }
    },
    {
      "view": {
        "_beagleComponent_": "beagle:container",
        "children": [
          {
            "_beagleComponent_": "beagle:text",
            "text": "Planet: @{item.planet}"
          },
          {
            "_beagleComponent_": "beagle:text",
            "text": "sex: @{item.sex}"
          },
          {
            "_beagleComponent_": "beagle:text",
            "text": "age: @{item.age}"
          }
        ],
        "style": {
          "cornerRadius": {},
          "size": {},
          "margin": {
            "bottom": {
              "value": 20,
              "type": "REAL"
            }
          },
          "flex": {}
        }
      }
    }
  ],
  "isScrollIndicatorVisible": false,
  "iteratorName": "item",
  "indexName": "index",
  "spanCount": 2,
  "direction": "HORIZONTAL"
}
-->

{{% playground file="gridView.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
data class Person(
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
    Person(
        name = "TenSoon",
        race = "Kandra",
        planet = "Scadrial",
        isMistborn = false,
        age = 40,
        sex = "male"
    )
)

GridView(
    spanCount = 2,
    direction = GridViewDirection.HORIZONTAL,
    context = ContextData(id = "characters", value = characters),
    dataSource = expressionOf("@{characters}"),
    templates = listOf(
        Template(
            case = expressionOf("@{eq(item.race, 'Half-skaa')}"),
            view = Container(
                children = listOf(
                    Text("Index: @{index}"),
                    Text("Name: @{item.name}"),
                    Text("Race: @{item.race}"),
                    Text("Mistborn: @{item.isMistborn}"),
                    Text("Planet: @{item.planet}"),
                    Text("sex: @{item.sex}"),
                    Text("age: @{item.age}"),
                )
            ).setStyle {
                margin = EdgeValue.only(bottom = 20)
            }
        ),
        Template(
            case = expressionOf("@{eq(item.race, 'Kandra')}"),
            view = Container(
                children = listOf(
                    Text("Name: @{item.name}"),
                    Text("Race: @{item.race}"),
                    Text("Mistborn: @{item.isMistborn}"),
                )
            ).setStyle {
                margin = EdgeValue.only(bottom = 20)
            }
        ),
        Template(
            view = Container(
                children = listOf(
                    Text("Planet: @{item.planet}"),
                    Text("sex: @{item.sex}"),
                    Text("age: @{item.age}"),
                )
            ).setStyle {
                margin = EdgeValue.only(bottom = 20)
            }
        )
    )
)
```

{{% /tab %}}
{{< /tabs >}}
