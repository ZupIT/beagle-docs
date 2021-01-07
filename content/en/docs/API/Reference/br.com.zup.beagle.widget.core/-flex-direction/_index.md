+++
title = "FlexDirection"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.widget.core]({{< relref "../_index.md" >}}) / [FlexDirection]({{< relref "_index.md" >}}) / 



# FlexDirection  
  

controls the direction in which the children of a node are laid out. This is also referred to as the main axis. The cross axis is the axis perpendicular to the main axis, or the axis which the wrapping lines are laid out in.

<b>enum [FlexDirection]({{< relref "_index.md" >}}) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)<[FlexDirection]({{< relref "_index.md" >}})> </b>   


## Entries  
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

[COLUMN]({{< relref "-c-o-l-u-m-n/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Align children from top to bottom. If wrapping is enabled, then the next line will start to the right of the first item on the top of the container

[COLUMN]({{< relref "-c-o-l-u-m-n/_index.md" >}})()  
  
   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ROW]({{< relref "-r-o-w/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Align children from left to right. If wrapping is enabled, then the next line will start under the first item on the left of the container.

[ROW]({{< relref "-r-o-w/_index.md" >}})()  
  
   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[COLUMN_REVERSE]({{< relref "-c-o-l-u-m-n_-r-e-v-e-r-s-e/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Align children from bottom to top. If wrapping is enabled, then the next line will start to the right of the first item on the bottom of the container.

[COLUMN_REVERSE]({{< relref "-c-o-l-u-m-n_-r-e-v-e-r-s-e/_index.md" >}})()  
  
   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ROW_REVERSE]({{< relref "-r-o-w_-r-e-v-e-r-s-e/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Align children from right to left. If wrapping is enabled, then the next line will start under the first item on the right of the container.

[ROW_REVERSE]({{< relref "-r-o-w_-r-e-v-e-r-s-e/_index.md" >}})()  
  
   

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

[compareTo](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/compare-to.html)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator override fun [compareTo](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/compare-to.html)(other: [FlexDirection]({{< relref "_index.md" >}})): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[equals](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/equals.html)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator override fun [equals](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/equals.html)(other: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)?): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[finalize](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/finalize.html)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>override fun [finalize](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/finalize.html)()</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[getDeclaringClass](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/get-declaring-class.html)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>override fun [getDeclaringClass](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/get-declaring-class.html)(): [Class](https://developer.android.com/reference/kotlin/java/lang/Class.html)<[FlexDirection]({{< relref "_index.md" >}})></b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[hashCode](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/hash-code.html)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>override fun [hashCode](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/hash-code.html)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[toString](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/to-string.html)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [toString](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/to-string.html)(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)</b>  



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

[name]({{< relref "_index.md#br.com.zup.beagle.widget.core/FlexDirection/name/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>override val [name]({{< relref "_index.md#br.com.zup.beagle.widget.core/FlexDirection/name/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ordinal]({{< relref "_index.md#br.com.zup.beagle.widget.core/FlexDirection/ordinal/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>override val [ordinal]({{< relref "_index.md#br.com.zup.beagle.widget.core/FlexDirection/ordinal/#/PointingToDeclaration/" >}}): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

