+++
title = "FlexWrap"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.widget.core]({{< relref "../_index.md" >}}) / [FlexWrap]({{< relref "_index.md" >}}) / 



# FlexWrap  
  

FlexWrap is set on containers and it controls what happens when children overflow the size of the container along the main axis. By default, children are forced into a single line (which can shrink elements). If wrapping is allowed, items are wrapped into multiple lines along the main axis if needed.

<b>enum [FlexWrap]({{< relref "_index.md" >}}) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)<[FlexWrap]({{< relref "_index.md" >}})> </b>   


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

[NO_WRAP]({{< relref "-n-o_-w-r-a-p/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

The flex items are laid out in a single line which may cause the flex container to overflow. The cross-start is either equivalent to start or before depending flex-direction value. This is the default value.

[NO_WRAP]({{< relref "-n-o_-w-r-a-p/_index.md" >}})()  
  
   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[WRAP]({{< relref "-w-r-a-p/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

The flex items break into multiple lines. The cross-start is either equivalent to start or before depending flex-direction value and the cross-end is the opposite of the specified cross-start.

[WRAP]({{< relref "-w-r-a-p/_index.md" >}})()  
  
   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[WRAP_REVERSE]({{< relref "-w-r-a-p_-r-e-v-e-r-s-e/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Behaves the same as wrap but cross-start and cross-end are permuted.

[WRAP_REVERSE]({{< relref "-w-r-a-p_-r-e-v-e-r-s-e/_index.md" >}})()  
  
   

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

  
<b>operator override fun [compareTo](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/compare-to.html)(other: [FlexWrap]({{< relref "_index.md" >}})): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)</b>  



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

  
<b>override fun [getDeclaringClass](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/get-declaring-class.html)(): [Class](https://developer.android.com/reference/kotlin/java/lang/Class.html)<[FlexWrap]({{< relref "_index.md" >}})></b>  



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

[name]({{< relref "_index.md#br.com.zup.beagle.widget.core/FlexWrap/name/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>override val [name]({{< relref "_index.md#br.com.zup.beagle.widget.core/FlexWrap/name/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ordinal]({{< relref "_index.md#br.com.zup.beagle.widget.core/FlexWrap/ordinal/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>override val [ordinal]({{< relref "_index.md#br.com.zup.beagle.widget.core/FlexWrap/ordinal/#/PointingToDeclaration/" >}}): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

