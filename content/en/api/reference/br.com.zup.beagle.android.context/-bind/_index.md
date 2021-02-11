+++
title = "Bind"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.context]({{< relref "../_index.md" >}}) / [Bind]({{< relref "_index.md" >}}) / 



# Bind  
  <b>sealed class [Bind]({{< relref "_index.md" >}})<[T]({{< relref "_index.md" >}})></b>   


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

[Expression]({{< relref "-expression/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>data class [Expression]({{< relref "-expression/_index.md" >}})<[T]({{< relref "-expression/_index.md" >}})>(**expressions**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ExpressionToken]({{< relref "../../br.com.zup.beagle.android.context.tokenizer/-expression-token/_index.md" >}})>, **value**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), **type**: [Type](https://developer.android.com/reference/kotlin/java/lang/reflect/Type.html)) : [Bind]({{< relref "_index.md" >}})<[T]({{< relref "-expression/_index.md" >}})> </b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Value]({{< relref "-value/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>data class [Value]({{< relref "-value/_index.md" >}})<[T]({{< relref "-value/_index.md" >}}) : [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)>(**value**: [T]({{< relref "-value/_index.md" >}})) : [Bind]({{< relref "_index.md" >}})<[T]({{< relref "-value/_index.md" >}})> </b>  



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

[type]({{< relref "_index.md#br.com.zup.beagle.android.context/Bind/type/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>abstract val [type]({{< relref "_index.md#br.com.zup.beagle.android.context/Bind/type/#/PointingToDeclaration/" >}}): [Type](https://developer.android.com/reference/kotlin/java/lang/reflect/Type.html)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[value]({{< relref "_index.md#br.com.zup.beagle.android.context/Bind/value/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>abstract val [value]({{< relref "_index.md#br.com.zup.beagle.android.context/Bind/value/#/PointingToDeclaration/" >}}): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>


## Inheritors  
<table>
  
<thead>
<tr>
<th>
Name  
</th>
  
</tr>
</thead>
<tbody>
<tr>
<td>
{{% md %}}

[Bind]({{< relref "-expression/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Bind]({{< relref "-value/_index.md" >}})
{{% /md %}}
</td>
</tr>

</tbody>
</table>

