+++
title = "StoreHandler"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.store]({{< relref "../_index.md" >}}) / [StoreHandler]({{< relref "_index.md" >}}) / 



# StoreHandler  
  <b>interface [StoreHandler]({{< relref "_index.md" >}})</b>   


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

[delete]({{< relref "delete.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Delete content has in store.

  
  
<b>abstract fun [delete]({{< relref "delete.md" >}})(storeType: [StoreType]({{< relref "../-store-type/_index.md" >}}), key: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))</b>  



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

[getAll]({{< relref "get-all.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Responsible to get all content

  
  
<b>abstract fun [getAll]({{< relref "get-all.md" >}})(storeType: [StoreType]({{< relref "../-store-type/_index.md" >}})): [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)></b>  



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

[restore]({{< relref "restore.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Get content by keys

  
  
<b>abstract fun [restore]({{< relref "restore.md" >}})(storeType: [StoreType]({{< relref "../-store-type/_index.md" >}}), vararg keys: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)<Out [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>): [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?></b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[save]({{< relref "save.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Save the content in store.

  
  
<b>abstract fun [save]({{< relref "save.md" >}})(storeType: [StoreType]({{< relref "../-store-type/_index.md" >}}), data: [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>)</b>  



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

