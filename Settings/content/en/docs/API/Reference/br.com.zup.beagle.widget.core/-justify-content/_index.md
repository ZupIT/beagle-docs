+++
title = "JustifyContent"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.widget.core]({{< relref "../_index.md" >}}) / [JustifyContent]({{< relref "_index.md" >}}) / 



# JustifyContent  
  

Describes how to align children within the main axis of their container. For example, you can use this property to center a child horizontally within a container with flexDirection set to row or vertically within a container with flexDirection set to column.

<b>enum [JustifyContent]({{< relref "_index.md" >}}) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)<[JustifyContent]({{< relref "_index.md" >}})> </b>   


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

[FLEX_START]({{< relref "-f-l-e-x_-s-t-a-r-t/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Align children of a container to the start of the container's main axis.

[FLEX_START]({{< relref "-f-l-e-x_-s-t-a-r-t/_index.md" >}})()  
  
   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[CENTER]({{< relref "-c-e-n-t-e-r/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Align children of a container in the center of the container's main axis.

[CENTER]({{< relref "-c-e-n-t-e-r/_index.md" >}})()  
  
   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[FLEX_END]({{< relref "-f-l-e-x_-e-n-d/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Align children of a container to the end of the container's main axis.

[FLEX_END]({{< relref "-f-l-e-x_-e-n-d/_index.md" >}})()  
  
   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[SPACE_BETWEEN]({{< relref "-s-p-a-c-e_-b-e-t-w-e-e-n/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Evenly space off children across the container's main axis, distributing the remaining space between the children.

[SPACE_BETWEEN]({{< relref "-s-p-a-c-e_-b-e-t-w-e-e-n/_index.md" >}})()  
  
   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[SPACE_AROUND]({{< relref "-s-p-a-c-e_-a-r-o-u-n-d/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Evenly space off children across the container's main axis, distributing the remaining space around the children. Compared to space-between, using space-around will result in space being distributed to the beginning of the first child and end of the last child.

[SPACE_AROUND]({{< relref "-s-p-a-c-e_-a-r-o-u-n-d/_index.md" >}})()  
  
   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[SPACE_EVENLY]({{< relref "-s-p-a-c-e_-e-v-e-n-l-y/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

evenly distribute children within the alignment container along the main axis. The spacing between each pair of adjacent items, the main-start edge and the first item, and the main-end edge and the last item, are all exactly the same.

[SPACE_EVENLY]({{< relref "-s-p-a-c-e_-e-v-e-n-l-y/_index.md" >}})()  
  
   

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

  
<b>operator override fun [compareTo](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/compare-to.html)(other: [JustifyContent]({{< relref "_index.md" >}})): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)</b>  



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

  
<b>override fun [getDeclaringClass](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/get-declaring-class.html)(): [Class](https://developer.android.com/reference/kotlin/java/lang/Class.html)<[JustifyContent]({{< relref "_index.md" >}})></b>  



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

[name]({{< relref "_index.md#br.com.zup.beagle.widget.core/JustifyContent/name/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>override val [name]({{< relref "_index.md#br.com.zup.beagle.widget.core/JustifyContent/name/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ordinal]({{< relref "_index.md#br.com.zup.beagle.widget.core/JustifyContent/ordinal/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>override val [ordinal]({{< relref "_index.md#br.com.zup.beagle.widget.core/JustifyContent/ordinal/#/PointingToDeclaration/" >}}): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

