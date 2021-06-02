---
title: Gridview
weight: 340
description: "You will find here the GridView component description, it's attributes and constructors"
---

---

## What is it?

The GridView component defines how a group of itens will position itself in a **recyclable** grid layout natively. The items in a gridview could be any server-driven component. The GridView use is more suitable for visual content and is recommended for situations where an item repeats itself but with diferent data, like for example, a card with movies details.

This is how this component is structured:

### GridView

| Attribute         | Type                                                          | Required | Definition                                                                                                                           |
| :----------------- | :---------------------------------------------------------- | :---------: | :---------------------------------------------------------------------------------------------------------------------------------- |
| numColumns          |                                      Int            |   | Defines the number of columns that the GridView will display.     |
| context            | [ContextData]({{< ref path="/api/context" lang="en" >}})                          |             | Defines the context of the component.                                                                                           |
| onInit             | List&lt;[Action]({{< ref path="/api/actions" lang="en" >}})&gt;                  |             | List of actions to be performed as soon as the component is displayed.                                                          |
| dataSource         | [Bind]({{< ref path="/api/context#bindings" lang="en" >}})&lt;List&lt;Any&gt;&gt; |      ✓      | Expression that points to a list of values used to populate the component.                                                      |
| templates          | List&lt;[ServerDrivenComponent]({{< ref path="/api/components" lang="en">}}) &gt;   |            | It represents a template array, where each template corresponds to a cell in the list through a`ServerDrivenComponent`.                                                          |
| isScrollIndicatorVisible | Bool | | Set the scroll bar visibility. |
| onScrollEnd        | List&lt;[Action]({{< ref path="/api/actions" lang="en" >}})&gt;                  |             | List of actions taken when the list ends.                                                                                       |
| scrollEndThreshold | Int                                                       |             | Defines the percentage scrolled from the list to trigger `onScrollEnd`.                                                         |
| iteratorName       | String                                                    |             | It is the context identifier for each cell.                                                                                     |
| key                | String                                                    |             | Points to a unique value present in each item of the `dataSource` to be used as a suffix in the ids of the template components. |

### Templates

{{% alert color="info" %}}
  `case` is expression that will return `true` or `false`.
{{% /alert %}}

  The template to use will be decided according to the property `case` of the template.  
{{% alert color="info" %}}
 The first template where `case` is `true` is the template chosen to render an item.
 If all are `false`, then, the first template where `case` is omitted (default template) is used.
{{% /alert %}}

## How to use it?

### GridView

{{< tabs id="T146" >}}
{{% tab name="JSON" %}}

<!-- json-playground:gridView.json
{
  "_beagleComponent_": "beagle:screenComponent",
  "child": {
    "_beagleComponent_": "beagle:gridView",
    "context": {
      "id": "images",
      "value": [
        {
          "url": "https://i.ibb.co/k9tYwtX/selo-do-exemplo-28420393.jpg"
        }
      ]
    },
    "dataSource": "@{images}",
    "templates": [
      {
        "view": {
          "_beagleComponent_": "beagle:container",
          "children": [
            {
              "_beagleComponent_": "beagle:image",
              "path": {
                "_beagleImagePath_": "remote",
                "url": "@{item.url}"
              },
              "style": {
                "cornerRadius": {},
                "size": {
                  "width": {
                    "value": 242,
                    "type": "REAL"
                  },
                  "height": {
                    "value": 225,
                    "type": "REAL"
                  }
                },
                "flex": {}
              }
            },
            {
              "_beagleComponent_": "beagle:image",
              "path": {
                "_beagleImagePath_": "remote",
                "url": "@{item.url}"
              },
              "style": {
                "cornerRadius": {},
                "size": {
                  "width": {
                    "value": 242,
                    "type": "REAL"
                  },
                  "height": {
                    "value": 225,
                    "type": "REAL"
                  }
                },
                "flex": {}
              }
            },
            {
              "_beagleComponent_": "beagle:image",
              "path": {
                "_beagleImagePath_": "remote",
                "url": "@{item.url}"
              },
              "style": {
                "cornerRadius": {},
                "size": {
                  "width": {
                    "value": 242,
                    "type": "REAL"
                  },
                  "height": {
                    "value": 225,
                    "type": "REAL"
                  }
                },
                "flex": {}
              }
            },
            {
              "_beagleComponent_": "beagle:image",
              "path": {
                "_beagleImagePath_": "remote",
                "url": "@{item.url}"
              },
              "style": {
                "cornerRadius": {},
                "size": {
                  "width": {
                    "value": 242,
                    "type": "REAL"
                  },
                  "height": {
                    "value": 225,
                    "type": "REAL"
                  }
                },
                "flex": {}
              }
            }
          ]
        }
      }
    ],
    "isScrollIndicatorVisible": false,
    "iteratorName": "item",
    "numColumns": 2
  }
}
-->

{{% playground file="gridView.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
{
  data class Image(
    val url: String,
  )

  val images = listOf(
    Image(
      url = "https://i.ibb.co/k9tYwtX/selo-do-exemplo-28420393.jpg",
    ),
  )

 Container(
      children = listOf(
        GridView(
          context = ContextData(id = "images", value = images),
          dataSource = expressionOf("@{images}"),
          numColumns = 2,
          templates = listOf(
            Template(
              view = Container(
                children = listOf(
                  Image(
                    path = ImagePath.Remote(
                      "@{item.url}",
                    ),
                  ).setStyle {
                    size = Size.box(width = 242, height = 225)
                  },
                  Image(
                    path = ImagePath.Remote(
                      "@{item.url}",
                    ),
                  ).setStyle {
                    size = Size.box(width = 242, height = 225)
                  },
                  Image(
                    path = ImagePath.Remote(
                      "@{item.url}",
                    ),
                  ).setStyle {
                    size = Size.box(width = 242, height = 225)
                  },
                  Image(
                    path = ImagePath.Remote(
                      "@{item.url}",
                    ),
                  ).setStyle {
                    size = Size.box(width = 242, height = 225)
                  },
                )
              )
            )
          )
        )
      )
    )
}
```

{{% /tab %}}
{{< /tabs >}}
