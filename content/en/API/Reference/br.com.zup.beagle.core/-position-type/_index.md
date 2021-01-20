+++
title = "PositionType"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.core]({{< relref "../_index.md" >}}) / [PositionType]({{< relref "_index.md" >}}) / 



# PositionType  
  

The position type of an element defines how it is positioned within its parent.

<b>enum [PositionType]({{< relref "_index.md" >}}) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)<[PositionType]({{< relref "_index.md" >}})> </b>   


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

[ABSOLUTE]({{< relref "-a-b-s-o-l-u-t-e/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

This means an element is positioned according to the normal flow of the layout, and then offset relative to that position based on the values of top, right, bottom, and left. The offset does not affect the position of any sibling or parent elements.

[ABSOLUTE]({{< relref "-a-b-s-o-l-u-t-e/_index.md" >}})()  
  
   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[RELATIVE]({{< relref "-r-e-l-a-t-i-v-e/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

When positioned absolutely an element doesn't take part in the normal layout flow. It is instead laid out independent of its siblings. The position is determined based on the top, right, bottom, and left values.

[RELATIVE]({{< relref "-r-e-l-a-t-i-v-e/_index.md" >}})()  
  
   

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

  
<b>operator override fun [compareTo](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/compare-to.html)(other: [PositionType]({{< relref "_index.md" >}})): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)</b>  



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

  
<b>override fun [getDeclaringClass](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/get-declaring-class.html)(): [Class](https://developer.android.com/reference/kotlin/java/lang/Class.html)<[PositionType]({{< relref "_index.md" >}})></b>  



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

[name]({{< relref "_index.md#br.com.zup.beagle.core/PositionType/name/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>override val [name]({{< relref "_index.md#br.com.zup.beagle.core/PositionType/name/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ordinal]({{< relref "_index.md#br.com.zup.beagle.core/PositionType/ordinal/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>override val [ordinal]({{< relref "_index.md#br.com.zup.beagle.core/PositionType/ordinal/#/PointingToDeclaration/" >}}): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

