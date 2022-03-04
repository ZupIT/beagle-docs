---
title: widget
weight: 300
description: Widget description and attributes
---

---

## What is it?

Widget is an abstract class that allows a visual component to be referenced in Beagle. When a visual component extends from the `widget` class, it inherits 3 properties that enable some attributes and functionality in the visualized elements.

{{% alert color="warning" %}}
  It is important to remember that, by default, these structures are set to null.
{{% /alert %}}

```kotlin
abstract class Widget : StyleComponent, AccessibilityComponent, IdentifierComponent {

    override var id: String? = null
    override var style: Style? = null
    override var accessibility: Accessibility? = null
}
```

Below we list all the attributes that a widget can receive. 

## What are your attributes?

### Widget Attributes

The main attributes of this class are:
| **Attribute** | **Type** | Required | **Definition** |
| :------------ | :---------------------------------------------- | :---------: | :------------------ |
| id | String | | identifies the visual component that the widget references |
| style | ​[Style]({{< ref path="/api/style/overview.md" lang="en" >}})​ | | defines some visual properties. |
| accessibility | [Accessibility]({{< ref path="/api/components/accessibility.md" lang="en" >}})​ | defines a message for the screen reader. |

## How to use?

In the example below, we use a Container (a standard Beagle component) to demonstrate the attributes exposed by the widget.

{{% alert color="success" %}}
  Custom components need to extend the `widget.` class from their constructor classes.
{{% /alert %}}

{{< tabs id="T177" >}}
{{% tab name="JSON" %}}

<!-- json-playground:widget.json
{
      "_beagleComponent_" : "beagle:container",
      "children" : [ {
        "_beagleComponent_" : "beagle:text",
        "text" : "I'am a Server-Driven text"
      }, {
        "_beagleComponent_" : "beagle:text",
        "text" : "I'am another Server-Driven text"
      } ],
      "id" : "WidgetID",
      "style" : {
        "backgroundColor" : "#ff8100",
        "cornerRadius" : {
          "radius" : 25.0
        },
        "size" : {
          "width" : {
            "value" : 70.0,
            "type" : "PERCENT"
          },
          "height" : {
            "value" : 80.0,
            "type" : "REAL"
          }
        },
        "margin" : {
          "all" : {
            "value" : 20.0,
            "type" : "REAL"
          }
        },
        "padding" : {
          "all" : {
            "value" : 15.0,
            "type" : "REAL"
          }
        },
        "position" : {
          "left" : {
            "value" : 0.0,
            "type" : "REAL"
          }
        },
        "flex" : {
          "flexDirection" : "ROW"
        },
        "positionType" : "RELATIVE",
        "display" : "FLEX"
      },
      "accessibility" : {
        "accessible" : true,
        "accessibilityLabel" : "I have acessibility"
      }
    }
-->

{{% playground file="widget.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Container(
    listOf(
        Text("I'am a Server-Driven text"),
        Text("I'am another Server-Driven text")
    )

).setStyle {
            backgroundColor = "#ff8100"
            cornerRadius = CornerRadius(constant(25.0))
            size = Size.box(width = 70, height = 80)
            margin = EdgeValue.all(20)
            padding = EdgeValue.all(15)
            position = EdgeValue.only(0)
            flex = Flex(FlexDirection.ROW)
            positionType = PositionType.RELATIVE
            display = Bind.value(Display.FLEX)
        }.setAccessibility {
            accessible = true
            accessibilityLabel = "I have acessibility"
        }.setId("WidgetID")
```

{{% /tab %}}
{{< /tabs >}}
