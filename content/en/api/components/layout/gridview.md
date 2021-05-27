---
title: Gridview
weight: 340
description: "You will find here the description of the GridView component, its attributes and constructors"
---

---

## What is it?

O componente GridViewcomponent is responsible for defining a list in grid of items **recyclable** natively. These items can be any server-driven components. The use of GridView is more suitable for visual content, recommended for situations where there is repetition of components, but with different data.

See how the structure is represented:

### GridView

| Attribute         | Type                                                      | Required	 | Definition                                                                                                                           |
| :----------------- | :---------------------------------------------------------- | :---------: | :---------------------------------------------------------------------------------------------------------------------------------- |
| numColumns          |                                      Int            |   | Defines the number of columns that the GridView will display.     


| context            | [ContextData]({{< ref path="/api/context" lang="en" >}})                          |             | Defines the context of the component.                                                                                           |
| onInit             | List&lt;[Action]({{< ref path="/api/actions" lang="en" >}})&gt;                   |             | List of actions to be performed as soon as the component is displayed.                                                          |
| dataSource         | [Bind]({{< ref path="/api/context#bindings" lang="en" >}})&lt;List&lt;Any&gt;&gt; |      ✓      | Expression that points to a list of values used to populate the component.                                                      |
| template           | [ServerDrivenComponent]({{< ref path="/api/components" lang="en" >}})             |      ✓      | It represents each cell in the list through a `ServerDrivenComponent`.                                                          |
| isScrollIndicatorVisible | Bool | | Set the scroll bar visibility. |
| onScrollEnd        | List&lt;[Action]({{< ref path="/api/actions" lang="en" >}})&gt;                   |             | List of actions taken when the list ends.                                                                                       |
| scrollEndThreshold | Int                                                       |             | Defines the percentage scrolled from the list to trigger `onScrollEnd`.                                                         |
| iteratorName       | String                                                    |             | It is the context identifier for each cell.                                                                                     |
| key                | String                                                    |             | Points to a unique value present in each item of the `dataSource` to be used as a suffix in the ids of the template components. |

## How to use it?

### GridView

{{< tabs id="T146" >}}
{{% tab name="JSON" %}}

<!-- json-playground:listView.json
{
  "_beagleComponent_": "beagle:container",
  "style": {
    "size": {
      "maxWidth": {
        "value": 560,
        "type": "REAL"
      }
    }
  },
  "children": [
    {
      "_beagleComponent_": "beagle:gridview",
      "numColumns": 2,
      "useParentScroll": true,
      "children": [
        {
          "_beagleComponent_": "beagle:image",
          "path": {
            "_beagleImagePath_": "remote",
            "url": "https://i.ibb.co/rvRN9kv/logo.png"
          },
          "style": {
            "size": {
              "width": {
                "value": 242,
                "type": "REAL"
              },
              "height": {
                "value": 225,
                "type": "REAL"
              }
            }
          }
        },
        {
          "_beagleComponent_": "beagle:image",
          "path": {
            "_beagleImagePath_": "remote",
            "url": "https://i.ibb.co/rvRN9kv/logo.png"
          },
          "style": {
            "size": {
              "width": {
                "value": 242,
                "type": "REAL"
              },
              "height": {
                "value": 225,
                "type": "REAL"
              }
            }
          }
        },
        {
          "_beagleComponent_": "beagle:image",
          "path": {
            "_beagleImagePath_": "remote",
            "url": "https://i.ibb.co/rvRN9kv/logo.png"
          },
          "style": {
            "size": {
              "width": {
                "value": 242,
                "type": "REAL"
              },
              "height": {
                "value": 225,
                "type": "REAL"
              }
            }
          }
        },
        {
          "_beagleComponent_": "beagle:image",
          "path": {
            "_beagleImagePath_": "remote",
            "url": "https://i.ibb.co/rvRN9kv/logo.png"
          },
          "style": {
            "size": {
              "width": {
                "value": 242,
                "type": "REAL"
              },
              "height": {
                "value": 225,
                "type": "REAL"
              }
            }
          }
        }
      ]
    }
  ]
}
-->

{{% playground file="gridView.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
{
     Container(
        children = listOf(
          GridView(
            numColumns = "2",
            useParentScroll = "true",
            children = listOf(
              Image(
                path = ImagePath.Remote(
                  url = "https://i.ibb.co/k9tYwtX/selo-do-exemplo-28420393.jpg",
                  placeholder = ImagePath.Local(mobileId = "imagePath", webUrl = "/imagePath.png")
                ),
              ).applyStyle(
                Style(
                  size = size
                  { width(242.unitReal()); height(225.unitReal()) },
                )
              ),
              Image(
                path = ImagePath.Remote(
                  url = "https://i.ibb.co/k9tYwtX/selo-do-exemplo-28420393.jpg",
                  placeholder = ImagePath.Local(mobileId = "imagePath", webUrl = "/imagePath.png")
                ),
              ).applyStyle(
                Style(
                  size = size
                  { width(242.unitReal()); height(225.unitReal()) },
                )
              ),
              Image(
                path = ImagePath.Remote(
                  url = "https://i.ibb.co/k9tYwtX/selo-do-exemplo-28420393.jpg",
                  placeholder = ImagePath.Local(mobileId = "imagePath", webUrl = "/imagePath.png")
                ),
              ).applyStyle(
                Style(
                  size = size
                  { width(242.unitReal()); height(225.unitReal()) },
                )
              ),
              Image(
                path = ImagePath.Remote(
                  url = "https://i.ibb.co/k9tYwtX/selo-do-exemplo-28420393.jpg",
                  placeholder = ImagePath.Local(mobileId = "imagePath", webUrl = "/imagePath.png")
                ),
              ).applyStyle(
                Style(
                  size = size
                  { width(242.unitReal()); height(225.unitReal()) },
                )
              ),
            )
          )
        )
      ).applyStyle(
        Style(
          size = size
          { maxWidth(560.unitReal()) },
        )
      ),
}
```

{{% /tab %}}
{{< /tabs >}}


