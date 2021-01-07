+++
title = "ServerDrivenState"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.view]({{< relref "../_index.md" >}}) / [ServerDrivenState]({{< relref "_index.md" >}}) / 



# ServerDrivenState  
  <b>sealed class [ServerDrivenState]({{< relref "_index.md" >}})</b>   


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

[Canceled]({{< relref "-canceled/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



indicates that a server-driven component fetch has cancel

  
  
<b>object [Canceled]({{< relref "-canceled/_index.md" >}}) : [ServerDrivenState]({{< relref "_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Error]({{< relref "-error/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



indicates an error state while fetching a server-driven component

  
  
<b>open class [Error]({{< relref "-error/_index.md" >}})(**throwable**: [Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html), **retry**: () -> [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)) : [ServerDrivenState]({{< relref "_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Finished]({{< relref "-finished/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



indicates that a server-driven component fetch has finished

  
  
<b>object [Finished]({{< relref "-finished/_index.md" >}}) : [ServerDrivenState]({{< relref "_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[FormError]({{< relref "-form-error/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>class [FormError]({{< relref "-form-error/_index.md" >}})(**throwable**: [Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html), **retry**: () -> [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)) : [ServerDrivenState.Error]({{< relref "-error/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Loading]({{< relref "-loading/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>~~data~~ ~~class~~ [~~Loading~~]({{< relref "-loading/_index.md" >}})~~(~~~~**loading**~~~~:~~ [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)~~)~~ ~~:~~ [~~ServerDrivenState~~]({{< relref "_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Started]({{< relref "-started/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



indicates that a server-driven component fetch has begun

  
  
<b>object [Started]({{< relref "-started/_index.md" >}}) : [ServerDrivenState]({{< relref "_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Success]({{< relref "-success/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



indicates a success state while fetching a server-driven component

  
  
<b>object [Success]({{< relref "-success/_index.md" >}}) : [ServerDrivenState]({{< relref "_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[WebViewError]({{< relref "-web-view-error/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>class [WebViewError]({{< relref "-web-view-error/_index.md" >}})(**throwable**: [Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html), **retry**: () -> [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)) : [ServerDrivenState.Error]({{< relref "-error/_index.md" >}})</b>  



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

[ServerDrivenState]({{< relref "-loading/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ServerDrivenState]({{< relref "-started/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ServerDrivenState]({{< relref "-finished/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ServerDrivenState]({{< relref "-success/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ServerDrivenState]({{< relref "-canceled/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ServerDrivenState]({{< relref "-error/_index.md" >}})
{{% /md %}}
</td>
</tr>

</tbody>
</table>

