+++
title = "br.com.zup.beagle.android.context"
draft = false
toc = false
type = "reference"
linktitle = "br.com.zup.beagle.android.context"
[menu.docs]
  parent = "hw-security-reference"
  weight = 1
+++

[beagle]({{< relref "../_index.md" >}}) / [br.com.zup.beagle.android.context]({{< relref "_index.md" >}}) / 



# Package br.com.zup.beagle.android.context  


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

[Bind]({{< relref "-bind/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>sealed class [Bind]({{< relref "-bind/_index.md" >}})<[T]({{< relref "-bind/_index.md" >}})></b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ContextComponent]({{< relref "-context-component/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Interface has context attribute, the components that inherit from that interface have access to create a context.

  
  
<b>interface [ContextComponent]({{< relref "-context-component/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ContextData]({{< relref "-context-data/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Context is a variable of any type, including a map that defines a set of key/value pairs. Through bindings, the value of a context can be accessed by any component or action on your scope.

  
  
<b>data class [ContextData]({{< relref "-context-data/_index.md" >}})(**id**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), **value**: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ContextExpressionReplacer]({{< relref "-context-expression-replacer/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>class [ContextExpressionReplacer]({{< relref "-context-expression-replacer/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[GlobalContext]({{< relref "-global-context/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}





A Global Context is a object that can assume as value of any type of variable, like a map defines a subset of key/value or complex JSONs objects that defines object trees.



It works exactly like the Context, however in a global scope, meaning that it will exists while the application is still running (even on the background), which allows it to be accessed from any application point, being a component or an action linked to a component or even programmatically.



  
  
<b>object [GlobalContext]({{< relref "-global-context/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

GlobalContextObserver
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>typealias GlobalContextObserver = ([ContextData]({{< relref "-context-data/_index.md" >}})) -> [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)</b>  



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

[expressionOf]({{< relref "expression-of.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>inline fun <[T]({{< relref "expression-of.md" >}})> [expressionOf]({{< relref "expression-of.md" >}})(expressionText: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Bind.Expression]({{< relref "-bind/-expression/_index.md" >}})<[T]({{< relref "expression-of.md" >}})></b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[valueOf]({{< relref "value-of.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>inline fun <[T]({{< relref "value-of.md" >}}) : [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)> [valueOf]({{< relref "value-of.md" >}})(value: [T]({{< relref "value-of.md" >}})): [Bind.Value]({{< relref "-bind/-value/_index.md" >}})<[T]({{< relref "value-of.md" >}})></b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[valueOfNullable]({{< relref "value-of-nullable.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>inline fun <[T]({{< relref "value-of-nullable.md" >}}) : [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)> [valueOfNullable]({{< relref "value-of-nullable.md" >}})(value: [T]({{< relref "value-of-nullable.md" >}})?): [Bind]({{< relref "-bind/_index.md" >}})<[T]({{< relref "value-of-nullable.md" >}})>?</b>  



{{% /md %}}
</td>
</tr>

</tbody>
</table>

