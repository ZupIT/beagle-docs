+++
title = "PageIndicatorComponent"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.components.page]({{< relref "../_index.md" >}}) / [PageIndicatorComponent]({{< relref "_index.md" >}}) / 



# PageIndicatorComponent  
  

Base of page indicator component.

<b>~~interface~~ [~~PageIndicatorComponent~~]({{< relref "_index.md" >}}) ~~:~~ [~~ServerDrivenComponent~~]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})~~,~~ [~~ViewConvertable~~]({{< relref "../../br.com.zup.beagle.android.widget/-view-convertable/_index.md" >}})</b>   


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

[buildView]({{< relref "../../br.com.zup.beagle.android.widget/-view-convertable/build-view.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



This function is called to convert your server-driven component to a UI View in Android

  
  
<b>abstract override fun [buildView]({{< relref "../../br.com.zup.beagle.android.widget/-view-convertable/build-view.md" >}})(rootView: [RootView]({{< relref "../../br.com.zup.beagle.android.widget/-root-view/_index.md" >}})): [View](https://developer.android.com/reference/kotlin/android/view/View.html)</b>  



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

[initPageView]({{< relref "init-page-view.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>abstract fun [initPageView]({{< relref "init-page-view.md" >}})(pageIndicatorOutput: [PageIndicatorOutput]({{< relref "../-page-indicator-output/_index.md" >}}))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onItemUpdated]({{< relref "on-item-updated.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>abstract fun [onItemUpdated]({{< relref "on-item-updated.md" >}})(newIndex: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[setCount]({{< relref "set-count.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>abstract fun [setCount]({{< relref "set-count.md" >}})(pages: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))</b>  



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

[PageIndicator]({{< relref "../-page-indicator/_index.md" >}})
{{% /md %}}
</td>
</tr>

</tbody>
</table>

