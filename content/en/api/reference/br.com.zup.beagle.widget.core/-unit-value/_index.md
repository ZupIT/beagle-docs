+++
title = "UnitValue"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.widget.core]({{< relref "../_index.md" >}}) / [UnitValue]({{< relref "_index.md" >}}) / 



# UnitValue  
  

Represents measurement values that contain both the numeric magnitude and the unit of measurement.

<b>data class [UnitValue]({{< relref "_index.md" >}})(**value**: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html), **type**: [UnitType]({{< relref "../-unit-type/_index.md" >}}))</b>   


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

[UnitValue]({{< relref "-unit-value.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>fun [UnitValue]({{< relref "-unit-value.md" >}})(value: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html), type: [UnitType]({{< relref "../-unit-type/_index.md" >}}))</b>   

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

  
<b>operator fun [component1]({{< relref "component1.md" >}})(): [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)</b>  



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

  
<b>operator fun [component2]({{< relref "component2.md" >}})(): [UnitType]({{< relref "../-unit-type/_index.md" >}})</b>  



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

  
<b>fun [copy]({{< relref "copy.md" >}})(value: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html), type: [UnitType]({{< relref "../-unit-type/_index.md" >}})): [UnitValue]({{< relref "_index.md" >}})</b>  



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

[type]({{< relref "_index.md#br.com.zup.beagle.widget.core/UnitValue/type/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

the unit of measurement.

<b>val [type]({{< relref "_index.md#br.com.zup.beagle.widget.core/UnitValue/type/#/PointingToDeclaration/" >}}): [UnitType]({{< relref "../-unit-type/_index.md" >}})</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[value]({{< relref "_index.md#br.com.zup.beagle.widget.core/UnitValue/value/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

the numeric measurement value.

<b>val [value]({{< relref "_index.md#br.com.zup.beagle.widget.core/UnitValue/value/#/PointingToDeclaration/" >}}): [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

