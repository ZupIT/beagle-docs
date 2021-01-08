+++
title = "Touchable"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.components]({{< relref "../_index.md" >}}) / [Touchable]({{< relref "_index.md" >}}) / 



# Touchable  
  

The Touchable component defines a click listener.

<b>data class [Touchable]({{< relref "_index.md" >}})(**onPress**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>, **child**: [ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}}), **clickAnalyticsEvent**: [ClickEvent]({{< relref "../../br.com.zup.beagle.analytics/-click-event/_index.md" >}})?) : [ViewConvertable]({{< relref "../../br.com.zup.beagle.android.widget/-view-convertable/_index.md" >}}), [GhostComponent]({{< relref "../../br.com.zup.beagle.core/-ghost-component/_index.md" >}})</b>   


## Parameters  
<table>
  
  
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

child
{{% /md %}}
</td>
<td>
{{% md %}}



define the widget that will trigger the Action.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

clickAnalyticsEvent
{{% /md %}}
</td>
<td>
{{% md %}}



define the event will triggered when click


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

onPress
{{% /md %}}
</td>
<td>
{{% md %}}



define an Action to be executed when the child component is clicked.


{{% /md %}}
</td>
</tr>

</tbody>
</table>
  
</table>


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

[Touchable]({{< relref "-touchable.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

define an Action to be executed when the child component is clicked.

<b>fun [Touchable]({{< relref "-touchable.md" >}})(onPress: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>, child: [ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}}), clickAnalyticsEvent: [ClickEvent]({{< relref "../../br.com.zup.beagle.analytics/-click-event/_index.md" >}})?)</b>   

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

[buildView]({{< relref "build-view.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



This function is called to convert your server-driven component to a UI View in Android

  
  
<b>open override fun [buildView]({{< relref "build-view.md" >}})(rootView: [RootView]({{< relref "../../br.com.zup.beagle.android.widget/-root-view/_index.md" >}})): [View](https://developer.android.com/reference/kotlin/android/view/View.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component1]({{< relref "component1.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component1]({{< relref "component1.md" >}})(): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})></b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component2]({{< relref "component2.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component2]({{< relref "component2.md" >}})(): [ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component3]({{< relref "component3.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component3]({{< relref "component3.md" >}})(): [ClickEvent]({{< relref "../../br.com.zup.beagle.analytics/-click-event/_index.md" >}})?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[copy]({{< relref "copy.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>fun [copy]({{< relref "copy.md" >}})(onPress: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>, child: [ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}}), clickAnalyticsEvent: [ClickEvent]({{< relref "../../br.com.zup.beagle.analytics/-click-event/_index.md" >}})?): [Touchable]({{< relref "_index.md" >}})</b>  



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

[child]({{< relref "_index.md#br.com.zup.beagle.android.components/Touchable/child/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

define the widget that will trigger the Action.

<b>open override val [child]({{< relref "_index.md#br.com.zup.beagle.android.components/Touchable/child/#/PointingToDeclaration/" >}}): [ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[clickAnalyticsEvent]({{< relref "_index.md#br.com.zup.beagle.android.components/Touchable/clickAnalyticsEvent/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

define the event will triggered when click

<b>val [clickAnalyticsEvent]({{< relref "_index.md#br.com.zup.beagle.android.components/Touchable/clickAnalyticsEvent/#/PointingToDeclaration/" >}}): [ClickEvent]({{< relref "../../br.com.zup.beagle.analytics/-click-event/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onPress]({{< relref "_index.md#br.com.zup.beagle.android.components/Touchable/onPress/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

define an Action to be executed when the child component is clicked.

<b>val [onPress]({{< relref "_index.md#br.com.zup.beagle.android.components/Touchable/onPress/#/PointingToDeclaration/" >}}): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})></b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

