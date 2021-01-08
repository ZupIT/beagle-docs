+++
title = "Style"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.core]({{< relref "../_index.md" >}}) / [Style]({{< relref "_index.md" >}}) / [Style]({{< relref "-style.md" >}}) / 



# Style  


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
  
  
<b><b>fun [Style]({{< relref "-style.md" >}})(backgroundColor: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, cornerRadius: [CornerRadius]({{< relref "../-corner-radius/_index.md" >}})?, borderColor: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, borderWidth: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)?, size: [Size]({{< relref "../../br.com.zup.beagle.widget.core/-size/_index.md" >}})?, margin: [EdgeValue]({{< relref "../../br.com.zup.beagle.widget.core/-edge-value/_index.md" >}})?, padding: [EdgeValue]({{< relref "../../br.com.zup.beagle.widget.core/-edge-value/_index.md" >}})?, position: [EdgeValue]({{< relref "../../br.com.zup.beagle.widget.core/-edge-value/_index.md" >}})?, flex: [Flex]({{< relref "../../br.com.zup.beagle.widget.core/-flex/_index.md" >}})?, positionType: [PositionType]({{< relref "../-position-type/_index.md" >}})?, display: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Display]({{< relref "../-display/_index.md" >}})>?)</b></b>  



