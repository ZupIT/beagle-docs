---
title: Widget
weight: 300
description: >-
  In this section, you will find more about widget's components and its
  attributes details.
---

---

## What is it?

A Widget is an abstract class that allows a visual component to be referenced on Beagle. When a visual component extends from a `widget`, it gets 3 attributes that enables some them, with its functions in the viewed elements.

{{% alert color="warning" %}}
It is important to remember that, by default, these structures have null value.
{{% /alert %}}

```kotlin
abstract class Widget : StyleComponent, AccessibilityComponent, IdentifierComponent {

    override var id: String? = null
    override var style: Style? = null
    override var accessibility: Accessibility? = null
}
```

We list below all the attributes a widget can receive. But, if you want an use example and how to create a widget, see our section [**creating a component.** ]({{< ref path="/android/customization/widgets/overview.md" lang="en" >}})

## Which are the attributes?

### Widget's attributes

The main attributes of this class are:

<table>
  <thead>
    <tr>
      <th style="text-align:left">Attribute</th>
      <th style="text-align:left">Definition</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><strong>id</strong>
      </td>
      <td style="text-align:left"><code>string</code> parameter that identifies the visual component listed
        by a <code>widget</code>.</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <strong>style</strong>
      </td>
      <td style="text-align:left">This attribute is defined by a <code>Style</code> class that is configured
        to define a series of visual properties.</td>
    </tr>
  </tbody>
</table>

```kotlin
data class Style (
    val backgroundColor: String? = null,
    val cornerRadius: CornerRadius? = null,
    val size: Size? = null,
    val margin: EdgeValue? = null,
    val padding: EdgeValue? = null,
    val position: EdgeValue? = null,
    val flex: Flex? = null,
    val positionType: PositionType? = null,
    val display: Display? = null)
```

## Style attributes

The main attributes are:

<table>
  <thead>
    <tr>
      <th style="text-align:left"><strong>Attribute</strong>
      </th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><strong>backgroundColor</strong>
      </td>
      <td style="text-align:left">It defines with a <code>string</code> parameter the background color of
        a visual component. It is important that the color is listed with hexadecimal
        format, starting with #. For example: white color in a background &quot;FFFFFF&quot;.</td>
    </tr>
    <tr>
      <td style="text-align:left"><strong>cornerRadius</strong>
      </td>
      <td style="text-align:left">Defines with a <code>double</code> value the rouding edge of this component.</td>
    </tr>
    <tr>
      <td style="text-align:left"><strong>size</strong>
      </td>
      <td style="text-align:left">
        Defines a size of a component with a <code>whole</code> value. This value
          must be followed by a <code>.unitPercent()</code> notation to define a percentage
          size related to the application&apos;s screen, or using the <code>.unitReal()</code> notation
          to define a size in pixels. A <code>80.unitPercent()</code> value defines
          that a component will have a relative size of <strong>80%</strong> of a screen. And <code>80.unitReal()</code> defines
          a<strong> 80 pixels</strong> size.
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><strong>margin</strong>
      </td>
      <td style="text-align:left">
        It determines the <strong>margin</strong> that will affect the spacing around the
          element, it will help them move according the internal limits of its father
          and brothers elements.
        The margin element contributes to the total size of its father, for example,
          if the father element is automatically sized.
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><strong>padding</strong>
      </td>
      <td style="text-align:left">Defines internal spaces of the component, it behaves like &apos;internal
        margin&apos; of the element. For example, a container has two visuals elements
        that defines a <strong>padding </strong>value, so that internal elements aren&apos;t
        glued to the internal margins.</td>
    </tr>
    <tr>
      <td style="text-align:left"><strong>position</strong>
      </td>
      <td style="text-align:left">Attribute that adds a padding to a position. For more details about how
        it works, check our documentation about <a href="https://docs.usebeagle.io/v/v1.0-en/exemplos-e-tutoriais/component-layout"><strong>position attributes in  component&apos;s layout</strong>. </a>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><strong>flex</strong>
      </td>
      <td style="text-align:left">Flex attribute positions the elements on a screen. For more details about
        it, check our documentation about<a href="https://docs.usebeagle.io/v/v1.0-en/exemplos-e-tutoriais/component-layout/flex"> <strong>Flex</strong></a><strong>.</strong> 
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><strong>positionType</strong>
      </td>
      <td style="text-align:left"><a href="../resources/components-positioning/positiontype"><strong>Position Type</strong></a> attribute
        establishes a relation with the element&apos;s positioning and its brothers.</td>
    </tr>
    <tr>
      <td style="text-align:left"><strong>display</strong>
      </td>
      <td style="text-align:left">Attribute that defines if the element linked to this widget will be positioned
        by<strong> </strong><a href="https://docs.usebeagle.io/v/v1.0-en/exemplos-e-tutoriais/component-layout/positiontype"><strong>Flex</strong></a><strong>. </strong>
      </td>
    </tr>
  </tbody>
</table>

## Accessibility attributes

The main attributes are:

| Attribute              | Description                                              |
| :--------------------- | :------------------------------------------------------- |
| **accessible**         | Enable a `boolean` value with accessibility information. |
| **accessibilityLabel** | Defines with a `string` message for accessibility.       |

## How to use it?

On the example below, we used a Container to show the widgets attributes. The class defines a visual component that must extend the `widget` class.

{{< tabs id="T159" >}}
{{% tab name="JSON" %}}

<!-- json-playground:widget.json
{
      "_beagleComponent_" : "beagle:container",
      "children" : [ {
        "_beagleComponent_" : "beagle:text",
        "text" : "I'm a Server-Driven text"
      }, {
        "_beagleComponent_" : "beagle:text",
        "text" : "I'm another Server-Driven text"
      } ],
      "id" : "widget",
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
        Text("I'm a Server-Driven text "),
        Text(" I'm another Server-Driven text")
    )

).setStyle {
            backgroundColor = "#ff8100"
            cornerRadius = CornerRadius(25.0)
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
