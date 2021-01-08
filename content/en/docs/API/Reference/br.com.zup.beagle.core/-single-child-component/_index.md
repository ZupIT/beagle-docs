+++
title = "SingleChildComponent"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.core]({{< relref "../_index.md" >}}) / [SingleChildComponent]({{< relref "_index.md" >}}) / 



# SingleChildComponent  
  

Component that has a single child

<b>interface [SingleChildComponent]({{< relref "_index.md" >}})</b>   


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

[child]({{< relref "_index.md#br.com.zup.beagle.core/SingleChildComponent/child/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

only view that the component has in its hierarchy

<b>abstract val [child]({{< relref "_index.md#br.com.zup.beagle.core/SingleChildComponent/child/#/PointingToDeclaration/" >}}): [ServerDrivenComponent]({{< relref "../-server-driven-component/_index.md" >}})</b>   

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

[TabItem]({{< relref "../../br.com.zup.beagle.android.components/-tab-item/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Form]({{< relref "../../br.com.zup.beagle.android.components.form/-form/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Screen]({{< relref "../../br.com.zup.beagle.android.components.layout/-screen/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[GhostComponent]({{< relref "../-ghost-component/_index.md" >}})
{{% /md %}}
</td>
</tr>

</tbody>
</table>

