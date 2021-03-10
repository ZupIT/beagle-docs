+++
title = "Analytics"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.analytics]({{< relref "../_index.md" >}}) / [Analytics]({{< relref "_index.md" >}}) / 



# Analytics  
  

Beagle analytics is used to track click events.

<b>interface [Analytics]({{< relref "_index.md" >}})</b>   


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

<tr>
<td>
{{% md %}}

[trackEventOnClick]({{< relref "track-event-on-click.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



sends the click event had in the view

  
  
<b>abstract fun [trackEventOnClick]({{< relref "track-event-on-click.md" >}})(event: [ClickEvent]({{< relref "../-click-event/_index.md" >}}))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[trackEventOnScreenAppeared]({{< relref "track-event-on-screen-appeared.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



sends the event when view appear

  
  
<b>abstract fun [trackEventOnScreenAppeared]({{< relref "track-event-on-screen-appeared.md" >}})(event: [ScreenEvent]({{< relref "../-screen-event/_index.md" >}}))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[trackEventOnScreenDisappeared]({{< relref "track-event-on-screen-disappeared.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



sends the event when view disappear

  
  
<b>abstract fun [trackEventOnScreenDisappeared]({{< relref "track-event-on-screen-disappeared.md" >}})(event: [ScreenEvent]({{< relref "../-screen-event/_index.md" >}}))</b>  



{{% /md %}}
</td>
</tr>

</tbody>
</table>

