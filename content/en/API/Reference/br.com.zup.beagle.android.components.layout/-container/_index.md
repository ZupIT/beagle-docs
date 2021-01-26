+++
title = "Container"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.components.layout]({{< relref "../_index.md" >}}) / [Container]({{< relref "_index.md" >}}) / 



# Container  
  

The container component is a general container that can hold other components inside.

<b>data class [Container]({{< relref "_index.md" >}})(**children**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})>, **context**: [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?, **onInit**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?) : [WidgetView]({{< relref "../../br.com.zup.beagle.android.widget/-widget-view/_index.md" >}}), [OnInitiableComponent]({{< relref "../../br.com.zup.beagle.android.components/-on-initiable-component/_index.md" >}}), [ContextComponent]({{< relref "../../br.com.zup.beagle.android.context/-context-component/_index.md" >}}), [MultiChildComponent]({{< relref "../../br.com.zup.beagle.core/-multi-child-component/_index.md" >}})</b>   


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

children
{{% /md %}}
</td>
<td>
{{% md %}}



define a list of components that are part of the container.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

context
{{% /md %}}
</td>
<td>
{{% md %}}



define the contextData that be set to container.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

onInit
{{% /md %}}
</td>
<td>
{{% md %}}



it is a parameter that allows you to define a list of actions to be performed when the Widget is displayed.


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

[Container]({{< relref "-container.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

define a list of components that are part of the container.

<b>fun [Container]({{< relref "-container.md" >}})(children: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})>, context: [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?, onInit: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?)</b>   

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

  
<b>operator fun [component1]({{< relref "component1.md" >}})(): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})></b>  



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

  
<b>operator fun [component2]({{< relref "component2.md" >}})(): [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?</b>  



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

  
<b>operator fun [component3]({{< relref "component3.md" >}})(): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?</b>  



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

  
<b>fun [copy]({{< relref "copy.md" >}})(children: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})>, context: [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?, onInit: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?): [Container]({{< relref "_index.md" >}})</b>  



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

[handleOnInit]({{< relref "../../br.com.zup.beagle.android.components/-on-initiable-component/handle-on-init.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Method responsible for executing all actions present in the onInit property once the component is rendered. It is recommended to call this method within the buildView.

  
  
<b>open override fun [handleOnInit]({{< relref "../../br.com.zup.beagle.android.components/-on-initiable-component/handle-on-init.md" >}})(rootView: [RootView]({{< relref "../../br.com.zup.beagle.android.widget/-root-view/_index.md" >}}), origin: [View](https://developer.android.com/reference/kotlin/android/view/View.html))</b>  



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

[markToRerunOnInit]({{< relref "../../br.com.zup.beagle.android.components/-on-initiable-component/mark-to-rerun-on-init.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Method responsible for releasing the execution of all actions present in the onInit property regardless of whether they have already been executed. It is rarely appropriate to use this method.

  
  
<b>open override fun [markToRerunOnInit]({{< relref "../../br.com.zup.beagle.android.components/-on-initiable-component/mark-to-rerun-on-init.md" >}})()</b>  



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

[accessibility]({{< relref "_index.md#br.com.zup.beagle.android.components.layout/Container/accessibility/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

attribute will enable a textual information to explain the view content in case a screen reader is use

<b>open override var [accessibility]({{< relref "_index.md#br.com.zup.beagle.android.components.layout/Container/accessibility/#/PointingToDeclaration/" >}}): [Accessibility]({{< relref "../../br.com.zup.beagle.core/-accessibility/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[children]({{< relref "_index.md#br.com.zup.beagle.android.components.layout/Container/children/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

define a list of components that are part of the container.

<b>open override val [children]({{< relref "_index.md#br.com.zup.beagle.android.components.layout/Container/children/#/PointingToDeclaration/" >}}): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})></b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[context]({{< relref "_index.md#br.com.zup.beagle.android.components.layout/Container/context/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

define the contextData that be set to container.

<b>open override val [context]({{< relref "_index.md#br.com.zup.beagle.android.components.layout/Container/context/#/PointingToDeclaration/" >}}): [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[id]({{< relref "_index.md#br.com.zup.beagle.android.components.layout/Container/id/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

use to identifier the current view

<b>open override var [id]({{< relref "_index.md#br.com.zup.beagle.android.components.layout/Container/id/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onInit]({{< relref "_index.md#br.com.zup.beagle.android.components.layout/Container/onInit/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

it is a parameter that allows you to define a list of actions to be performed when the Widget is displayed.

<b>open override val [onInit]({{< relref "_index.md#br.com.zup.beagle.android.components.layout/Container/onInit/#/PointingToDeclaration/" >}}): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[style]({{< relref "_index.md#br.com.zup.beagle.android.components.layout/Container/style/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

attribute will enable a few visual options to be changed.

<b>open override var [style]({{< relref "_index.md#br.com.zup.beagle.android.components.layout/Container/style/#/PointingToDeclaration/" >}}): [Style]({{< relref "../../br.com.zup.beagle.core/-style/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

