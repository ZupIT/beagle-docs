+++
title = "ViewConvertable"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.widget]({{< relref "../_index.md" >}}) / [ViewConvertable]({{< relref "_index.md" >}}) / 



# ViewConvertable  
  

This interface is responsible to convert any server-driven component to a View in Android

<b>interface [ViewConvertable]({{< relref "_index.md" >}}) : [ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})</b>   


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

[buildView]({{< relref "build-view.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



This function is called to convert your server-driven component to a UI View in Android

  
  
<b>abstract fun [buildView]({{< relref "build-view.md" >}})(rootView: [RootView]({{< relref "../-root-view/_index.md" >}})): [View](https://developer.android.com/reference/kotlin/android/view/View.html)</b>  



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

<tr>
<td>
{{% md %}}

[InputWidget]({{< relref "../../br.com.zup.beagle.android.components.form/-input-widget/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[PageIndicatorComponent]({{< relref "../../br.com.zup.beagle.android.components.page/-page-indicator-component/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[WidgetView]({{< relref "../-widget-view/_index.md" >}})
{{% /md %}}
</td>
</tr>

</tbody>
</table>

