---
title: ListView
weight: 80
description: "You will find here the description of the ListView component, its attributes and constructors"
---

---

## What is it?

The ListView component is responsible for defining a list of recyclable items natively. These items can be any server-driven components. The use of ListView is recommended for situations where there is repetition of components, but with different data.

See how the structure is represented:

### ListView

| Attribute           | Type                                                      | Required	 | Definition                                                                                                                       |
| :----------------- | :-------------------------------------------------------- | :---------: | :------------------------------------------------------------------------------------------------------------------------------ |
| direction          | [ListDirection](#listdirection)                           |             | Sets the direction in which list items are displayed.                                                                           |
| context            | [ContextData]({{< ref path="/api/context" lang="en" >}})                          |             | Defines the context of the component.                                                                                           |
| onInit             | List&lt;[Action]({{< ref path="/api/actions" lang="en" >}})&gt;                   |             | List of actions to be performed as soon as the component is displayed.                                                          |
| dataSource         | [Bind]({{< ref path="/api/context#bindings" lang="en" >}})&lt;List&lt;Any&gt;&gt; |      ✓      | Expression that points to a list of values used to populate the component.                                                      |
| templates           | List&lt;[ServerDrivenComponent]({{< ref path="/api/components" lang="en" >}}) &gt;  |    ✓        | It represents a template array, where each template corresponds to a cell in the list through a`ServerDrivenComponent`.                                                          |
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

{{% alert color="info" %}}
  `case` is expression that will return `true` or `false`.
{{% /alert %}}

  The template to use will be decided according to the property `case` of the template.  
{{% alert color="info" %}}
 The first template where `case` is `true` is the template chosen to render an item.
 If all are `false`, then the first template where `case` is omitted (default template) is used.
{{% /alert %}}

## How to use it?

{{< tabs id="T128" >}}
{{% tab name="JSON" %}}

<!-- json-playground:listView.json
{
  "_beagleComponent_": "beagle:listView",
  "direction": "VERTICAL",
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
  "iteratorName": "item",
  "isScrollIndicatorVisible": false,
  "templates": [
    {
      "case": "@{eq(item.race, 'Half-skaa')}",
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
  ]
}
-->

{{% playground file="listView.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
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
          templates = listOf(
            Template(
              case = expressionOf("@{eq(item.race, 'Half-skaa')}"),
              view = Container(
                children = listOf(
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
