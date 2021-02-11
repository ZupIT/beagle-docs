+++
title = "Style"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.core]({{< relref "../_index.md" >}}) / [Style]({{< relref "_index.md" >}}) / 



# Style  
  

The style class will enable a few visual options to be changed.

<b>data class [Style]({{< relref "_index.md" >}})(**backgroundColor**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, **cornerRadius**: [CornerRadius]({{< relref "../-corner-radius/_index.md" >}})?, **borderColor**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, **borderWidth**: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)?, **size**: [Size]({{< relref "../../br.com.zup.beagle.widget.core/-size/_index.md" >}})?, **margin**: [EdgeValue]({{< relref "../../br.com.zup.beagle.widget.core/-edge-value/_index.md" >}})?, **padding**: [EdgeValue]({{< relref "../../br.com.zup.beagle.widget.core/-edge-value/_index.md" >}})?, **position**: [EdgeValue]({{< relref "../../br.com.zup.beagle.widget.core/-edge-value/_index.md" >}})?, **flex**: [Flex]({{< relref "../../br.com.zup.beagle.widget.core/-flex/_index.md" >}})?, **positionType**: [PositionType]({{< relref "../-position-type/_index.md" >}})?, **display**: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Display]({{< relref "../-display/_index.md" >}})>?)</b>   


## See also  
<table>
  
  
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

[Flex]({{< relref "../../br.com.zup.beagle.widget.core/-flex/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}






{{% /md %}}
</td>
</tr>

</tbody>
</table>
  
</table>


## Parameters  
<table>
  
  
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

backgroundColor
{{% /md %}}
</td>
<td>
{{% md %}}

```java
    Using a String parameter it sets the background color on this visual component.
    It must be listed as an Hexadecimal color format without the "#".
    For example, for a WHITE background type in "FFFFFF".
```

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

borderColor
{{% /md %}}
</td>
<td>
{{% md %}}



Sets the color of your view border. Supported formats:#RRGGBBAA and #RGBA.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

borderWidth
{{% /md %}}
</td>
<td>
{{% md %}}



Sets the width of your view border.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

cornerRadius
{{% /md %}}
</td>
<td>
{{% md %}}



Using a Double parameters it sets the corner of your view to make it round.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

display
{{% /md %}}
</td>
<td>
{{% md %}}



enables a flex context for all its direct children.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

flex
{{% /md %}}
</td>
<td>
{{% md %}}






{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

margin
{{% /md %}}
</td>
<td>
{{% md %}}

```java
    effects the spacing around the outside of a node.
    A node with margin will offset itself from the bounds of its parent
    but also offset the location of any siblings.
    The margin of a node contributes to the total size of its parent if the parent is auto sized.
```

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

padding
{{% /md %}}
</td>
<td>
{{% md %}}

```java
    affects the size of the node it is applied to.
    Padding in Yoga acts as if box-sizing: border-box; was set.
    That is padding will not add to the total size of an element if it has an explicit size set.
    For auto sized nodes padding will increase the size of the
    node as well as offset the location of any children..
```

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

position
{{% /md %}}
</td>
<td>
{{% md %}}



add padding to position.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

positionType
{{% /md %}}
</td>
<td>
{{% md %}}



The position type of an element defines how it is positioned within its parent.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

size
{{% /md %}}
</td>
<td>
{{% md %}}



add size to current view applying the flex.


{{% /md %}}
</td>
</tr>

</tbody>
</table>
  
</table>


## Constructors  
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

[Style]({{< relref "-style.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  ```java
    Using a String parameter it sets the background color on this visual component.
    It must be listed as an Hexadecimal color format without the "#".
    For example, for a WHITE background type in "FFFFFF".
```
<b>fun [Style]({{< relref "-style.md" >}})(backgroundColor: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, cornerRadius: [CornerRadius]({{< relref "../-corner-radius/_index.md" >}})?, borderColor: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, borderWidth: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)?, size: [Size]({{< relref "../../br.com.zup.beagle.widget.core/-size/_index.md" >}})?, margin: [EdgeValue]({{< relref "../../br.com.zup.beagle.widget.core/-edge-value/_index.md" >}})?, padding: [EdgeValue]({{< relref "../../br.com.zup.beagle.widget.core/-edge-value/_index.md" >}})?, position: [EdgeValue]({{< relref "../../br.com.zup.beagle.widget.core/-edge-value/_index.md" >}})?, flex: [Flex]({{< relref "../../br.com.zup.beagle.widget.core/-flex/_index.md" >}})?, positionType: [PositionType]({{< relref "../-position-type/_index.md" >}})?, display: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Display]({{< relref "../-display/_index.md" >}})>?)</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>


## Functions  
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

[component1]({{< relref "component1.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component1]({{< relref "component1.md" >}})(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component10]({{< relref "component10.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component10]({{< relref "component10.md" >}})(): [PositionType]({{< relref "../-position-type/_index.md" >}})?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component11]({{< relref "component11.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component11]({{< relref "component11.md" >}})(): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Display]({{< relref "../-display/_index.md" >}})>?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component2]({{< relref "component2.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component2]({{< relref "component2.md" >}})(): [CornerRadius]({{< relref "../-corner-radius/_index.md" >}})?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component3]({{< relref "component3.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component3]({{< relref "component3.md" >}})(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component4]({{< relref "component4.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component4]({{< relref "component4.md" >}})(): [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component5]({{< relref "component5.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component5]({{< relref "component5.md" >}})(): [Size]({{< relref "../../br.com.zup.beagle.widget.core/-size/_index.md" >}})?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component6]({{< relref "component6.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component6]({{< relref "component6.md" >}})(): [EdgeValue]({{< relref "../../br.com.zup.beagle.widget.core/-edge-value/_index.md" >}})?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component7]({{< relref "component7.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component7]({{< relref "component7.md" >}})(): [EdgeValue]({{< relref "../../br.com.zup.beagle.widget.core/-edge-value/_index.md" >}})?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component8]({{< relref "component8.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component8]({{< relref "component8.md" >}})(): [EdgeValue]({{< relref "../../br.com.zup.beagle.widget.core/-edge-value/_index.md" >}})?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component9]({{< relref "component9.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component9]({{< relref "component9.md" >}})(): [Flex]({{< relref "../../br.com.zup.beagle.widget.core/-flex/_index.md" >}})?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[copy]({{< relref "copy.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>fun [copy]({{< relref "copy.md" >}})(backgroundColor: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, cornerRadius: [CornerRadius]({{< relref "../-corner-radius/_index.md" >}})?, borderColor: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, borderWidth: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)?, size: [Size]({{< relref "../../br.com.zup.beagle.widget.core/-size/_index.md" >}})?, margin: [EdgeValue]({{< relref "../../br.com.zup.beagle.widget.core/-edge-value/_index.md" >}})?, padding: [EdgeValue]({{< relref "../../br.com.zup.beagle.widget.core/-edge-value/_index.md" >}})?, position: [EdgeValue]({{< relref "../../br.com.zup.beagle.widget.core/-edge-value/_index.md" >}})?, flex: [Flex]({{< relref "../../br.com.zup.beagle.widget.core/-flex/_index.md" >}})?, positionType: [PositionType]({{< relref "../-position-type/_index.md" >}})?, display: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Display]({{< relref "../-display/_index.md" >}})>?): [Style]({{< relref "_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[equals](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/equals.html)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open operator override fun [equals](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/equals.html)(other: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)?): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[hashCode](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/hash-code.html)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [hashCode](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/hash-code.html)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[toString](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/to-string.html)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [toString](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/to-string.html)(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)</b>  



{{% /md %}}
</td>
</tr>

</tbody>
</table>


## Properties  
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

[backgroundColor]({{< relref "_index.md#br.com.zup.beagle.core/Style/backgroundColor/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  ```java
    Using a String parameter it sets the background color on this visual component.
    It must be listed as an Hexadecimal color format without the "#".
    For example, for a WHITE background type in "FFFFFF".
```
<b>val [backgroundColor]({{< relref "_index.md#br.com.zup.beagle.core/Style/backgroundColor/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[borderColor]({{< relref "_index.md#br.com.zup.beagle.core/Style/borderColor/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Sets the color of your view border. Supported formats:#RRGGBBAA and #RGBA.

<b>val [borderColor]({{< relref "_index.md#br.com.zup.beagle.core/Style/borderColor/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[borderWidth]({{< relref "_index.md#br.com.zup.beagle.core/Style/borderWidth/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Sets the width of your view border.

<b>val [borderWidth]({{< relref "_index.md#br.com.zup.beagle.core/Style/borderWidth/#/PointingToDeclaration/" >}}): [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[cornerRadius]({{< relref "_index.md#br.com.zup.beagle.core/Style/cornerRadius/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Using a Double parameters it sets the corner of your view to make it round.

<b>val [cornerRadius]({{< relref "_index.md#br.com.zup.beagle.core/Style/cornerRadius/#/PointingToDeclaration/" >}}): [CornerRadius]({{< relref "../-corner-radius/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[display]({{< relref "_index.md#br.com.zup.beagle.core/Style/display/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

enables a flex context for all its direct children.

<b>val [display]({{< relref "_index.md#br.com.zup.beagle.core/Style/display/#/PointingToDeclaration/" >}}): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Display]({{< relref "../-display/_index.md" >}})>?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[flex]({{< relref "_index.md#br.com.zup.beagle.core/Style/flex/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  



<b>val [flex]({{< relref "_index.md#br.com.zup.beagle.core/Style/flex/#/PointingToDeclaration/" >}}): [Flex]({{< relref "../../br.com.zup.beagle.widget.core/-flex/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[margin]({{< relref "_index.md#br.com.zup.beagle.core/Style/margin/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  ```java
    effects the spacing around the outside of a node.
    A node with margin will offset itself from the bounds of its parent
    but also offset the location of any siblings.
    The margin of a node contributes to the total size of its parent if the parent is auto sized.
```
<b>val [margin]({{< relref "_index.md#br.com.zup.beagle.core/Style/margin/#/PointingToDeclaration/" >}}): [EdgeValue]({{< relref "../../br.com.zup.beagle.widget.core/-edge-value/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[padding]({{< relref "_index.md#br.com.zup.beagle.core/Style/padding/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  ```java
    affects the size of the node it is applied to.
    Padding in Yoga acts as if box-sizing: border-box; was set.
    That is padding will not add to the total size of an element if it has an explicit size set.
    For auto sized nodes padding will increase the size of the
    node as well as offset the location of any children..
```
<b>val [padding]({{< relref "_index.md#br.com.zup.beagle.core/Style/padding/#/PointingToDeclaration/" >}}): [EdgeValue]({{< relref "../../br.com.zup.beagle.widget.core/-edge-value/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[position]({{< relref "_index.md#br.com.zup.beagle.core/Style/position/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

add padding to position.

<b>val [position]({{< relref "_index.md#br.com.zup.beagle.core/Style/position/#/PointingToDeclaration/" >}}): [EdgeValue]({{< relref "../../br.com.zup.beagle.widget.core/-edge-value/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[positionType]({{< relref "_index.md#br.com.zup.beagle.core/Style/positionType/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

The position type of an element defines how it is positioned within its parent.

<b>val [positionType]({{< relref "_index.md#br.com.zup.beagle.core/Style/positionType/#/PointingToDeclaration/" >}}): [PositionType]({{< relref "../-position-type/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[size]({{< relref "_index.md#br.com.zup.beagle.core/Style/size/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

add size to current view applying the flex.

<b>val [size]({{< relref "_index.md#br.com.zup.beagle.core/Style/size/#/PointingToDeclaration/" >}}): [Size]({{< relref "../../br.com.zup.beagle.widget.core/-size/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

