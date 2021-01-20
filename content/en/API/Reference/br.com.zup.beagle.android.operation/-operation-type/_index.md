+++
title = "OperationType"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.operation]({{< relref "../_index.md" >}}) / [OperationType]({{< relref "_index.md" >}}) / 



# OperationType  
  <b>sealed class [OperationType]({{< relref "_index.md" >}})</b>   


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

[Null]({{< relref "-null/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>object [Null]({{< relref "-null/_index.md" >}}) : [OperationType]({{< relref "_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[TypeBoolean]({{< relref "-type-boolean/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>data class [TypeBoolean]({{< relref "-type-boolean/_index.md" >}})(**value**: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)) : [OperationType]({{< relref "_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[TypeJsonArray]({{< relref "-type-json-array/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>data class [TypeJsonArray]({{< relref "-type-json-array/_index.md" >}})(**value**: [JSONArray](https://developer.android.com/reference/kotlin/org/json/JSONArray.html)) : [OperationType]({{< relref "_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[TypeJsonObject]({{< relref "-type-json-object/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>data class [TypeJsonObject]({{< relref "-type-json-object/_index.md" >}})(**value**: [JSONObject](https://developer.android.com/reference/kotlin/org/json/JSONObject.html)) : [OperationType]({{< relref "_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[TypeNumber]({{< relref "-type-number/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>data class [TypeNumber]({{< relref "-type-number/_index.md" >}})(**value**: [Number](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-number/index.html)) : [OperationType]({{< relref "_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[TypeString]({{< relref "-type-string/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>data class [TypeString]({{< relref "-type-string/_index.md" >}})(**value**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) : [OperationType]({{< relref "_index.md" >}})</b>  



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

[value]({{< relref "_index.md#br.com.zup.beagle.android.operation/OperationType/value/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>open val [value]({{< relref "_index.md#br.com.zup.beagle.android.operation/OperationType/value/#/PointingToDeclaration/" >}}): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)?</b>   

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

[OperationType]({{< relref "-type-string/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[OperationType]({{< relref "-type-boolean/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[OperationType]({{< relref "-type-number/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[OperationType]({{< relref "-type-json-array/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[OperationType]({{< relref "-type-json-object/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[OperationType]({{< relref "-null/_index.md" >}})
{{% /md %}}
</td>
</tr>

</tbody>
</table>

