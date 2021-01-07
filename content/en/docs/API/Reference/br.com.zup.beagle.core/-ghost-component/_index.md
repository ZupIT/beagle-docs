+++
title = "GhostComponent"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.core]({{< relref "../_index.md" >}}) / [GhostComponent]({{< relref "_index.md" >}}) / 



# GhostComponent  
  

Component that hold the ghost view

<b>interface [GhostComponent]({{< relref "_index.md" >}}) : [SingleChildComponent]({{< relref "../-single-child-component/_index.md" >}})</b>   


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

[child]({{< relref "_index.md#br.com.zup.beagle.core/GhostComponent/child/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

show the current view

<b>abstract override val [child]({{< relref "_index.md#br.com.zup.beagle.core/GhostComponent/child/#/PointingToDeclaration/" >}}): [ServerDrivenComponent]({{< relref "../-server-driven-component/_index.md" >}})</b>   

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

[Touchable]({{< relref "../../br.com.zup.beagle.android.components/-touchable/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[FormInput]({{< relref "../../br.com.zup.beagle.android.components.form/-form-input/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[FormSubmit]({{< relref "../../br.com.zup.beagle.android.components.form/-form-submit/_index.md" >}})
{{% /md %}}
</td>
</tr>

</tbody>
</table>

