+++
title = "Observable"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.components.form.observer]({{< relref "../_index.md" >}}) / [Observable]({{< relref "_index.md" >}}) / 



# Observable  
  <b>~~class~~ [~~Observable~~]({{< relref "_index.md" >}})~~<~~[T]({{< relref "_index.md" >}})~~>~~</b>   


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

[addObserver]({{< relref "add-observer.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>@[Synchronized](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-synchronized/index.html)()  
  
fun [addObserver]({{< relref "add-observer.md" >}})(o: [Observer]({{< relref "../-observer/_index.md" >}})<[T]({{< relref "_index.md" >}})>)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[countObservers]({{< relref "count-observers.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>@[Synchronized](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-synchronized/index.html)()  
  
fun [countObservers]({{< relref "count-observers.md" >}})(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[deleteObserver]({{< relref "delete-observer.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>@[Synchronized](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-synchronized/index.html)()  
  
fun [deleteObserver]({{< relref "delete-observer.md" >}})(o: [Observer]({{< relref "../-observer/_index.md" >}})<[T]({{< relref "_index.md" >}})>)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[deleteObservers]({{< relref "delete-observers.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>@[Synchronized](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-synchronized/index.html)()  
  
fun [deleteObservers]({{< relref "delete-observers.md" >}})()</b>  



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

[getCurrentValue]({{< relref "get-current-value.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>@[Synchronized](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-synchronized/index.html)()  
  
fun [getCurrentValue]({{< relref "get-current-value.md" >}})(): [T]({{< relref "_index.md" >}})?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[hasChanged]({{< relref "has-changed.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>@[Synchronized](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-synchronized/index.html)()  
  
fun [hasChanged]({{< relref "has-changed.md" >}})(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)</b>  



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

[notifyObservers]({{< relref "notify-observers.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>fun [notifyObservers]({{< relref "notify-observers.md" >}})(arg: [T]({{< relref "_index.md" >}}))</b>  



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

