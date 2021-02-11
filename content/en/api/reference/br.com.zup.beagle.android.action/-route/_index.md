+++
title = "Route"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.action]({{< relref "../_index.md" >}}) / [Route]({{< relref "_index.md" >}}) / 



# Route  
  

This defines navigation type, it can be a navigation to a remote route in which Beagle will deserialize the content or to a local screen already built.

<b>sealed class [Route]({{< relref "_index.md" >}})</b>   


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

[Local]({{< relref "-local/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Class indicating navigation to a local screen.

  
  
<b>data class [Local]({{< relref "-local/_index.md" >}})(**screen**: [Screen]({{< relref "../../br.com.zup.beagle.android.components.layout/-screen/_index.md" >}})) : [Route]({{< relref "_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Remote]({{< relref "-remote/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Class that takes care of navigation to remote content.

  
  
<b>data class [Remote]({{< relref "-remote/_index.md" >}})(**url**: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>, **shouldPrefetch**: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), **fallback**: [Screen]({{< relref "../../br.com.zup.beagle.android.components.layout/-screen/_index.md" >}})?) : [Route]({{< relref "_index.md" >}})</b>  



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

[Route]({{< relref "-remote/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Route]({{< relref "-local/_index.md" >}})
{{% /md %}}
</td>
</tr>

</tbody>
</table>

