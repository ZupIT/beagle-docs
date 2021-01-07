+++
title = "InputWidget"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.components.form]({{< relref "../_index.md" >}}) / [InputWidget]({{< relref "_index.md" >}}) / 



# InputWidget  
  

<p>It could be an EditText view in Android, a Radio button in HTML, an UITextField in iOS or any other type of view that can receive and store input from users. </p> 

<b>~~abstract~~ ~~class~~ [~~InputWidget~~]({{< relref "_index.md" >}}) ~~:~~ [~~Widget~~]({{< relref "../../br.com.zup.beagle.widget/-widget/_index.md" >}})~~,~~ [~~ViewConvertable~~]({{< relref "../../br.com.zup.beagle.android.widget/-view-convertable/_index.md" >}})~~,~~ [~~StateChangeable~~]({{< relref "../../br.com.zup.beagle.android.components.form.observer/-state-changeable/_index.md" >}})</b>   


## Constructors  
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

[InputWidget]({{< relref "-input-widget.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>fun [InputWidget]({{< relref "-input-widget.md" >}})()</b>   

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

[getState]({{< relref "get-state.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [getState]({{< relref "get-state.md" >}})(): [Observable]({{< relref "../../br.com.zup.beagle.android.components.form.observer/-observable/_index.md" >}})<[WidgetState]({{< relref "../../br.com.zup.beagle.android.components.form.observer/-widget-state/_index.md" >}})></b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[getValue]({{< relref "get-value.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>abstract fun [getValue]({{< relref "get-value.md" >}})(): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)</b>  



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

[notifyChanges]({{< relref "notify-changes.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Notify the view the value updated

  
  
<b>fun [notifyChanges]({{< relref "notify-changes.md" >}})()</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onErrorMessage]({{< relref "on-error-message.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>abstract fun [onErrorMessage]({{< relref "on-error-message.md" >}})(message: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))</b>  



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

[accessibility]({{< relref "_index.md#br.com.zup.beagle.android.components.form/InputWidget/accessibility/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

attribute will enable a textual information to explain the view content in case a screen reader is use

<b>open override var [accessibility]({{< relref "_index.md#br.com.zup.beagle.android.components.form/InputWidget/accessibility/#/PointingToDeclaration/" >}}): [Accessibility]({{< relref "../../br.com.zup.beagle.core/-accessibility/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[id]({{< relref "_index.md#br.com.zup.beagle.android.components.form/InputWidget/id/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

use to identifier the current view

<b>open override var [id]({{< relref "_index.md#br.com.zup.beagle.android.components.form/InputWidget/id/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[style]({{< relref "_index.md#br.com.zup.beagle.android.components.form/InputWidget/style/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

attribute will enable a few visual options to be changed.

<b>open override var [style]({{< relref "_index.md#br.com.zup.beagle.android.components.form/InputWidget/style/#/PointingToDeclaration/" >}}): [Style]({{< relref "../../br.com.zup.beagle.core/-style/_index.md" >}})?</b>   

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

[TextInput]({{< relref "../../br.com.zup.beagle.android.components/-text-input/_index.md" >}})
{{% /md %}}
</td>
</tr>

</tbody>
</table>

