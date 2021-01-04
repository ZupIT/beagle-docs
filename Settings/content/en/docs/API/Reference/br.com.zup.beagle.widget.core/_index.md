+++
title = "br.com.zup.beagle.widget.core"
draft = false
toc = false
type = "reference"
linktitle = "br.com.zup.beagle.widget.core"
[menu.docs]
  parent = "hw-security-reference"
  weight = 1
+++

[beagle]({{< relref "../_index.md" >}}) / [br.com.zup.beagle.widget.core]({{< relref "_index.md" >}}) / 



# Package br.com.zup.beagle.widget.core  


## Types  
<table>
  
<thead>
<tr>
<th>
Name  
</th>
<th>
Summary  
</th>
  
</tr>
</thead>
<tbody>
<tr>
<td>
{{% md %}}

[AlignContent]({{< relref "-align-content/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Describes how to align distribution of lines along the transverse axis of the container. For example, you can use this property to center child lines horizontally inside a container with flexDirection defined as a column or vertically inside a container with flexDirection defined as a row.

  
  
<b>enum [AlignContent]({{< relref "-align-content/_index.md" >}}) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)<[AlignContent]({{< relref "-align-content/_index.md" >}})> </b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[AlignItems]({{< relref "-align-items/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Describes how to align the children on the cross axis of the container. For example, you can use this property to center a child horizontally inside a container with flexDirection set to column or vertically inside a container with flexDirection set to row.

  
  
<b>enum [AlignItems]({{< relref "-align-items/_index.md" >}}) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)<[AlignItems]({{< relref "-align-items/_index.md" >}})> </b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[AlignSelf]({{< relref "-align-self/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Describes how to align the children on the container's cross axis. Align self replaces any parent-defined options with align items. For example, you can use this property to center a child horizontally inside a container with flexDirection set to column or vertically inside a container with flexDirection set to row.

  
  
<b>enum [AlignSelf]({{< relref "-align-self/_index.md" >}}) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)<[AlignSelf]({{< relref "-align-self/_index.md" >}})> </b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[EdgeValue]({{< relref "-edge-value/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



specify the offset the edge of the item should have from it’s closest sibling (item) or parent (container)

  
  
<b>data class [EdgeValue]({{< relref "-edge-value/_index.md" >}})(**left**: [UnitValue]({{< relref "-unit-value/_index.md" >}})?, **top**: [UnitValue]({{< relref "-unit-value/_index.md" >}})?, **right**: [UnitValue]({{< relref "-unit-value/_index.md" >}})?, **bottom**: [UnitValue]({{< relref "-unit-value/_index.md" >}})?, **horizontal**: [UnitValue]({{< relref "-unit-value/_index.md" >}})?, **vertical**: [UnitValue]({{< relref "-unit-value/_index.md" >}})?, **all**: [UnitValue]({{< relref "-unit-value/_index.md" >}})?)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Flex]({{< relref "-flex/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



The flex is a Layout component that will handle your visual component positioning at the screen. Internally Beagle uses a Layout engine called Yoga Layout to position elements on screen. In fact it will use the HTML Flexbox properties applied on the visual components and its children.

  
  
<b>data class [Flex]({{< relref "-flex/_index.md" >}})(**flexDirection**: [FlexDirection]({{< relref "-flex-direction/_index.md" >}})?, **flexWrap**: [FlexWrap]({{< relref "-flex-wrap/_index.md" >}})?, **justifyContent**: [JustifyContent]({{< relref "-justify-content/_index.md" >}})?, **alignItems**: [AlignItems]({{< relref "-align-items/_index.md" >}})?, **alignSelf**: [AlignSelf]({{< relref "-align-self/_index.md" >}})?, **alignContent**: [AlignContent]({{< relref "-align-content/_index.md" >}})?, **basis**: [UnitValue]({{< relref "-unit-value/_index.md" >}})?, **flex**: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)?, **grow**: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)?, **shrink**: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)?)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[FlexDirection]({{< relref "-flex-direction/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



controls the direction in which the children of a node are laid out. This is also referred to as the main axis. The cross axis is the axis perpendicular to the main axis, or the axis which the wrapping lines are laid out in.

  
  
<b>enum [FlexDirection]({{< relref "-flex-direction/_index.md" >}}) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)<[FlexDirection]({{< relref "-flex-direction/_index.md" >}})> </b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[FlexWrap]({{< relref "-flex-wrap/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



FlexWrap is set on containers and it controls what happens when children overflow the size of the container along the main axis. By default, children are forced into a single line (which can shrink elements). If wrapping is allowed, items are wrapped into multiple lines along the main axis if needed.

  
  
<b>enum [FlexWrap]({{< relref "-flex-wrap/_index.md" >}}) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)<[FlexWrap]({{< relref "-flex-wrap/_index.md" >}})> </b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ImageContentMode]({{< relref "-image-content-mode/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



defines how the image fits the view it's in

  
  
<b>enum [ImageContentMode]({{< relref "-image-content-mode/_index.md" >}}) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)<[ImageContentMode]({{< relref "-image-content-mode/_index.md" >}})> </b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[JustifyContent]({{< relref "-justify-content/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Describes how to align children within the main axis of their container. For example, you can use this property to center a child horizontally within a container with flexDirection set to row or vertically within a container with flexDirection set to column.

  
  
<b>enum [JustifyContent]({{< relref "-justify-content/_index.md" >}}) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)<[JustifyContent]({{< relref "-justify-content/_index.md" >}})> </b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ListDirection]({{< relref "-list-direction/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



The direction attribute will define the list direction.

  
  
<b>enum [ListDirection]({{< relref "-list-direction/_index.md" >}}) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)<[ListDirection]({{< relref "-list-direction/_index.md" >}})> </b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ScrollAxis]({{< relref "-scroll-axis/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Enum define the scroll roll direction on screen.

  
  
<b>enum [ScrollAxis]({{< relref "-scroll-axis/_index.md" >}}) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)<[ScrollAxis]({{< relref "-scroll-axis/_index.md" >}})> </b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Size]({{< relref "-size/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Size handles the size of the item

  
  
<b>data class [Size]({{< relref "-size/_index.md" >}})(**width**: [UnitValue]({{< relref "-unit-value/_index.md" >}})?, **height**: [UnitValue]({{< relref "-unit-value/_index.md" >}})?, **maxWidth**: [UnitValue]({{< relref "-unit-value/_index.md" >}})?, **maxHeight**: [UnitValue]({{< relref "-unit-value/_index.md" >}})?, **minWidth**: [UnitValue]({{< relref "-unit-value/_index.md" >}})?, **minHeight**: [UnitValue]({{< relref "-unit-value/_index.md" >}})?, **aspectRatio**: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)?)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[TextAlignment]({{< relref "-text-alignment/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Defines the text content alignment inside the text view

  
  
<b>enum [TextAlignment]({{< relref "-text-alignment/_index.md" >}}) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)<[TextAlignment]({{< relref "-text-alignment/_index.md" >}})> </b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[TextInputType]({{< relref "-text-input-type/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Enum define text support.

  
  
<b>enum [TextInputType]({{< relref "-text-input-type/_index.md" >}}) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)<[TextInputType]({{< relref "-text-input-type/_index.md" >}})> </b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[UnitType]({{< relref "-unit-type/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



This defines of a unit type;

  
  
<b>enum [UnitType]({{< relref "-unit-type/_index.md" >}}) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)<[UnitType]({{< relref "-unit-type/_index.md" >}})> </b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[UnitValue]({{< relref "-unit-value/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Represents measurement values that contain both the numeric magnitude and the unit of measurement.

  
  
<b>data class [UnitValue]({{< relref "-unit-value/_index.md" >}})(**value**: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html), **type**: [UnitType]({{< relref "-unit-type/_index.md" >}}))</b>  



{{% /md %}}
</td>
</tr>

</tbody>
</table>

