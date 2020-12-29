+++
title = "GlobalContext"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.context]({{< relref "../_index.md" >}}) / [GlobalContext]({{< relref "_index.md" >}}) / 



# GlobalContext  
  



A Global Context is a object that can assume as value of any type of variable, like a map defines a subset of key/value or complex JSONs objects that defines object trees.



It works exactly like the Context, however in a global scope, meaning that it will exists while the application is still running (even on the background), which allows it to be accessed from any application point, being a component or an action linked to a component or even programmatically.



<b>object [GlobalContext]({{< relref "_index.md" >}})</b>   


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

[clear]({{< relref "clear.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Clear content has in the context

  
  
<b>fun [clear]({{< relref "clear.md" >}})(path: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?)</b>  



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

[get]({{< relref "get.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Get the content in context.

  
  
<b>fun [get]({{< relref "get.md" >}})(path: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)?</b>  



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

[set]({{< relref "set.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Set the content in context.

  
  
<b>fun [set]({{< relref "set.md" >}})(value: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html), path: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?)</b>  



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

