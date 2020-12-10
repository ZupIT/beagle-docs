---
title: Widget
weight: 366
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
abstract class Widget : StyleComponent, 
                        AccessibilityComponent,
                        IdentifierComponent {

    override var id: String? = null
    override var style: Style? = null
    override var accessibility: Accessibility? = null
}
```

We list below all the attributes a widget can receive. But, if you want an use example and how to create a widget, see our section [**creating a component.** ](https://docs.usebeagle.io/v/v1.0-en/customization/beagle-for-android/how-to-make-custom-widgets)

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
      <td style="text-align:left"><b>id</b>
      </td>
      <td style="text-align:left"><code>string</code> parameter that identifies the visual component listed
        by a <code>widget</code>.</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p></p>
        <p><b>style</b>
        </p>
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
      <th style="text-align:left"><b>Attribute</b>
      </th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>backgroundColor</b>
      </td>
      <td style="text-align:left">It defines with a <code>string</code> parameter the background color of
        a visual component. It is important that the color is listed with hexadecimal
        format, starting with #. For example: white color in a background &quot;FFFFFF&quot;.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>cornerRadius</b>
      </td>
      <td style="text-align:left">Defines with a <code>double</code> value the rouding edge of this component.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>size</b>
      </td>
      <td style="text-align:left">
        <p>Defines a size of a component with a <code>whole</code> value. This value
          must be followed by a <code>.unitPercent()</code> notation to define a percentage
          size related to the application&apos;s screen, or using the <code>.unitReal()</code> notation
          to define a size in pixels. A <code>80.unitPercent()</code> value defines
          that a component will have a relative size of <b>80%</b> of a screen. And <code>80.unitReal()</code> defines
          a<b> 80 pixels</b> size.</p>
        <p></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>margin</b>
      </td>
      <td style="text-align:left">
        <p>It determines the <b>margin</b> that will affect the spacing around the
          element, it will help them move according the internal limits of its father
          and brothers elements.</p>
        <p>The margin element contributes to the total size of its father, for example,
          if the father element is automatically sized.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>padding</b>
      </td>
      <td style="text-align:left">Defines internal spaces of the component, it behaves like &apos;internal
        margin&apos; of the element. For example, a container has two visuals elements
        that defines a <b>padding </b>value, so that internal elements aren&apos;t
        glued to the internal margins.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>position</b>
      </td>
      <td style="text-align:left">Attribute that adds a padding to a position. For more details about how
        it works, check our documentation about <a href="https://docs.usebeagle.io/v/v1.0-en/exemplos-e-tutoriais/component-layout"><b>position attributes in  component&apos;s layout</b>. </a>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>flex</b>
      </td>
      <td style="text-align:left">Flex attribute positions the elements on a screen. For more details about
        it, check our documentation about<a href="https://docs.usebeagle.io/v/v1.0-en/exemplos-e-tutoriais/component-layout/flex"> <b>Flex</b></a><b>.</b> 
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>positionType</b>
      </td>
      <td style="text-align:left">&lt;b&gt;&lt;/b&gt;<a href="../resources/components-positioning/positiontype"><b>Position Type</b></a> attribute
        establishes a relation with the element&apos;s positioning and its brothers.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>display</b>
      </td>
      <td style="text-align:left">Attribute that defines if the element linked to this widget will be positioned
        by<b> </b><a href="https://docs.usebeagle.io/v/v1.0-en/exemplos-e-tutoriais/component-layout/positiontype"><b>Flex</b></a><b>. </b>
      </td>
    </tr>
  </tbody>
</table>

## Accessibility attributes

The main attributes are: 

| Attribute | Description |
| :--- | :--- |
| **accessible** | Enable a `boolean` value with accessibility information.  |
| **accessibilityLabel**  | Defines with a `string` message for accessibility. |

## How to use it?

On the example below, we used a Container to show the widgets attributes. The class defines a visual component that must extend the `widget` class. 

{{< tabs name="T159" >}}
{{% tab name="JSON" %}}
```markup
{
      "_beagleComponent_" : "beagle:container",
      "children" : [ {
        "_beagleComponent_" : "beagle:text",
        "text" : "Sou um texto Server-Driven"
      }, {
        "_beagleComponent_" : "beagle:text",
        "text" : "Sou outro texto Server-Driven"
      } ],
      "id" : "SouUmWidget",
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
        "accessibilityLabel" : "Sou acessível"
      }
    }
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Container(
    listOf(
        Text("Sou um texto Server-Driven"),
        Text("Sou outro texto Server-Driven")
    )
    
).applyStyle(
    Style(backgroundColor = "#ff8100",
        cornerRadius = CornerRadius(25.0),
        size = Size(width = 70.unitPercent(), height = 80.unitReal()),
        margin = EdgeValue(all = 20.unitReal()),
        padding = EdgeValue(all = 15.unitReal()),
        position = EdgeValue(0.unitReal()),
        flex = Flex(FlexDirection.ROW),
        positionType = PositionType.RELATIVE,
        display = Display.FLEX)
        
).applyAccessibility(accessibility = Accessibility(
    accessible = true,
    accessibilityLabel = "Sou acessível")
    
).setId("SouUmWidget")

```
{{% /tab %}}
{{< /tabs >}}

### 👇 Test this component in the Web Playground

{% embed url="https://beagle-playground.netlify.app/\#/demo/default-components/container.json" %}}
