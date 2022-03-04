---
title: Style
weight: 200
description: 'This section of style lessons, its attributes and characteristics'
---

---
## What is it?

It is a class that defines the styling and positioning parameters of Beagle components.

| Attributes | Type | Required | Definition |
| :-------- | :--- | :---------: | :-------- |
| backgroundColor | Bind\<String\> | | Using a String parameter it sets the background color on this visual component. It must be listed as an Hexadecimal color format. For example, type in "#FFFFFF" for a WHITE background. |
| cornerRadius| [CornerRadius]({{< ref path="/api/style/corner-radius.md" >}}) | | Using Double parameters it sets the corner of your view to make it round. You could set a `radius` parameter that is applyed to all corners or you could a value to each of the corners, like `topLeft`, `bottomLeft`, `topRight` and `bottomRight`|
| borderColor | Bind\<String\> | |Sets the color of your view border. Supported formats:#RRGGBBAA and #RGBA.|
| borderWidth | Bind\<Double\> | |Sets the width of your view border.|
| [size]({{< ref path="resources/components-positioning/size.md" >}}) |[Size]({{< ref path="/api/style/size.md" >}}) | | adds a size number to a view. Click on the [size]({{< ref path="resources/components-positioning/size.md" >}}) parameter link to check it's details.
| [margin]({{< ref path="resources/components-positioning/margin.md" >}})| [EdgeValue]({{< ref path="/api/style/edge-value.md" >}}) | | Adds spacing around the outside of a view. A view with margin will offset itself from the bounds of its parent but also offset the location of any siblings. The margin of a view contributes to the total size of its parent if the parent is auto sized. Click on the [margin]({{< ref path="resources/components-positioning/margin.md" >}}) parameter link to check it's details. |
| [padding]({{< ref path="resources/components-positioning/padding.md" >}}) | [EdgeValue]({{< ref path="/api/style/edge-value.md" >}}) | | Adds to the view size it is applied to. Padding in Yoga acts as if box-sizing: border-box; was set. Padding will not add to the total size of an element if it has an explicit size set. For auto sized views, padding will increase the view size as well as offset the location of any children. Click on the [padding]({{< ref path="resources/components-positioning/padding.md" >}}) parameter link to check it's details.
| [position]({{< ref path="resources/components-positioning/position.md" >}}) | [EdgeValue]({{< ref path="/api/style/edge-value.md" >}}) | | Adds padding to a view position. Click on the [position]({{< ref path="resources/components-positioning/position.md" >}}) parameter link to check it's details.|
| [flex]({{< ref path="resources/components-positioning/flex.md" >}}) | Flex | | Defines a view flex property. Click on the [flex]({{< ref path="resources/components-positioning/flex.md" >}}) parameter link to check it's details. |
| [positionType]({{< ref path="resources/components-positioning/positiontype.md" >}}) | PositionType | | Sets the position type of an element to define how it is positioned within its parent. It could be set to either `relative` or `absolute`. Click on the [positionType]({{< ref path="resources/components-positioning/positiontype.md" >}}) parameter link to check it's details.|
| [display]({{< ref path="resources/components-positioning/display.md" >}}) | Bind\<Display\> | | Enables a view flex property for all its direct children. Click on the [display]({{< ref path="resources/components-positioning/display.md" >}}) parameter link to check it's details.

## How to use it?

The example below is a `Button` that has some styles parameters defined. Parameters listed above and not implemented below are listed on the [`Component positioning`]({{< ref path="resources/components-positioning" >}}) section.

{{< tabs id="T108" >}}
{{% tab name="JSON" %}}

<!-- json-playground:condition.json
{
  "_beagleComponent_":"beagle:screenComponent",
  "child":{
    "_beagleComponent_":"beagle:container",
    "children":[
      {
        "_beagleComponent_":"beagle:button",
        "text":"Click",
        "onPress":[
          {
            "_beagleAction_":"beagle:alert",
            "title":"Styled Button",
            "message":"This button has got the Style!"
          }
        ],
        "style":{
          "backgroundColor":"#3C7503",
          "cornerRadius":{
            "radius":20,
            "topLeft":0,
            "bottomRight":0
          },
          "borderColor":"#ff6681",
          "borderWidth":5,
          "size":{
            
          },
          "flex":{
            
          }
        }
      }
    ]
  }
}
-->

{{% playground file="condition.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```text
Container(
            children = listOf(
                Button(
                    text = "Click",
                    onPress = listOf(
                        Alert(
                            title = "Styled Button",
                            message = "This button has got the Style!"
                        )
                    )
                ).setStyle {
                    backgroundColor = "#3C7503"
                    borderColor = "#ff6681"
                    borderWidth = 5.0
                    cornerRadius = CornerRadius(
                        radius = 20.0,
                        topLeft = 0.0,
                        bottomRight = 0.0
                    )
                }
            )
)

```

{{% /tab %}}
{{< /tabs >}}

