+++
title = "ListView"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.components]({{< relref "../_index.md" >}}) / [ListView]({{< relref "_index.md" >}}) / 



# ListView  
  

ListView is a Layout component that will define a list of views natively. These views could be any Server Driven Component.

<b>data class [ListView]({{< relref "_index.md" >}})constructor(**children**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})>?, **direction**: [ListDirection]({{< relref "../../br.com.zup.beagle.widget.core/-list-direction/_index.md" >}}), **context**: [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?, **onInit**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, **dataSource**: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)>>?, **template**: [ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})?, **onScrollEnd**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, **scrollEndThreshold**: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)?, **iteratorName**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), **key**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?) : [WidgetView]({{< relref "../../br.com.zup.beagle.android.widget/-widget-view/_index.md" >}}), [ContextComponent]({{< relref "../../br.com.zup.beagle.android.context/-context-component/_index.md" >}}), [OnInitiableComponent]({{< relref "../-on-initiable-component/_index.md" >}})</b>   


## See also  
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

[ContextComponent]({{< relref "../../br.com.zup.beagle.android.context/-context-component/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}






{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[OnInitiableComponent]({{< relref "../-on-initiable-component/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}






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

[ListView]({{< relref "-list-view.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  



<b>~~fun~~ [~~ListView~~]({{< relref "-list-view.md" >}})~~(~~~~children~~~~:~~ [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})>~~,~~ ~~direction~~~~:~~ [ListDirection]({{< relref "../../br.com.zup.beagle.widget.core/-list-direction/_index.md" >}})~~)~~</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ListView]({{< relref "-list-view.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  



<b>fun [ListView]({{< relref "-list-view.md" >}})(direction: [ListDirection]({{< relref "../../br.com.zup.beagle.widget.core/-list-direction/_index.md" >}}), context: [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?, onInit: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, dataSource: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)>>, template: [ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}}), onScrollEnd: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, scrollEndThreshold: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)?, iteratorName: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), key: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ListView]({{< relref "-list-view.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>~~fun~~ [~~ListView~~]({{< relref "-list-view.md" >}})~~(~~~~children~~~~:~~ [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})>?~~,~~ ~~direction~~~~:~~ [ListDirection]({{< relref "../../br.com.zup.beagle.widget.core/-list-direction/_index.md" >}})~~,~~ ~~context~~~~:~~ [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?~~,~~ ~~onInit~~~~:~~ [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?~~,~~ ~~dataSource~~~~:~~ [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)>>?~~,~~ ~~template~~~~:~~ [ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})?~~,~~ ~~onScrollEnd~~~~:~~ [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?~~,~~ ~~scrollEndThreshold~~~~:~~ [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)?~~,~~ ~~iteratorName~~~~:~~ [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)~~,~~ ~~key~~~~:~~ [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?~~)~~</b>   

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

  
<b>operator fun [component1]({{< relref "component1.md" >}})(): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})>?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component10]({{< relref "component10.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component10]({{< relref "component10.md" >}})(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>  



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

  
<b>operator fun [component2]({{< relref "component2.md" >}})(): [ListDirection]({{< relref "../../br.com.zup.beagle.widget.core/-list-direction/_index.md" >}})</b>  



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

  
<b>operator fun [component3]({{< relref "component3.md" >}})(): [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component4]({{< relref "component4.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component4]({{< relref "component4.md" >}})(): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component5]({{< relref "component5.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component5]({{< relref "component5.md" >}})(): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)>>?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component6]({{< relref "component6.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component6]({{< relref "component6.md" >}})(): [ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component7]({{< relref "component7.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component7]({{< relref "component7.md" >}})(): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component8]({{< relref "component8.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component8]({{< relref "component8.md" >}})(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component9]({{< relref "component9.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component9]({{< relref "component9.md" >}})(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)</b>  



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

  
<b>fun [copy]({{< relref "copy.md" >}})(children: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})>?, direction: [ListDirection]({{< relref "../../br.com.zup.beagle.widget.core/-list-direction/_index.md" >}}), context: [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?, onInit: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, dataSource: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)>>?, template: [ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})?, onScrollEnd: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, scrollEndThreshold: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)?, iteratorName: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), key: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?): [ListView]({{< relref "_index.md" >}})</b>  



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

[handleOnInit]({{< relref "../-on-initiable-component/handle-on-init.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Method responsible for executing all actions present in the onInit property once the component is rendered. It is recommended to call this method within the buildView.

  
  
<b>open override fun [handleOnInit]({{< relref "../-on-initiable-component/handle-on-init.md" >}})(rootView: [RootView]({{< relref "../../br.com.zup.beagle.android.widget/-root-view/_index.md" >}}), origin: [View](https://developer.android.com/reference/kotlin/android/view/View.html))</b>  



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

[markToRerunOnInit]({{< relref "../-on-initiable-component/mark-to-rerun-on-init.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Method responsible for releasing the execution of all actions present in the onInit property regardless of whether they have already been executed. It is rarely appropriate to use this method.

  
  
<b>open override fun [markToRerunOnInit]({{< relref "../-on-initiable-component/mark-to-rerun-on-init.md" >}})()</b>  



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

[accessibility]({{< relref "_index.md#br.com.zup.beagle.android.components/ListView/accessibility/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

attribute will enable a textual information to explain the view content in case a screen reader is use

<b>open override var [accessibility]({{< relref "_index.md#br.com.zup.beagle.android.components/ListView/accessibility/#/PointingToDeclaration/" >}}): [Accessibility]({{< relref "../../br.com.zup.beagle.core/-accessibility/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[children]({{< relref "_index.md#br.com.zup.beagle.android.components/ListView/children/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>val [children]({{< relref "_index.md#br.com.zup.beagle.android.components/ListView/children/#/PointingToDeclaration/" >}}): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})>?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[context]({{< relref "_index.md#br.com.zup.beagle.android.components/ListView/context/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Creates a context.

<b>open override val [context]({{< relref "_index.md#br.com.zup.beagle.android.components/ListView/context/#/PointingToDeclaration/" >}}): [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[dataSource]({{< relref "_index.md#br.com.zup.beagle.android.components/ListView/dataSource/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>val [dataSource]({{< relref "_index.md#br.com.zup.beagle.android.components/ListView/dataSource/#/PointingToDeclaration/" >}}): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)>>?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[direction]({{< relref "_index.md#br.com.zup.beagle.android.components/ListView/direction/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>val [direction]({{< relref "_index.md#br.com.zup.beagle.android.components/ListView/direction/#/PointingToDeclaration/" >}}): [ListDirection]({{< relref "../../br.com.zup.beagle.widget.core/-list-direction/_index.md" >}})</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[id]({{< relref "_index.md#br.com.zup.beagle.android.components/ListView/id/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

use to identifier the current view

<b>open override var [id]({{< relref "_index.md#br.com.zup.beagle.android.components/ListView/id/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[iteratorName]({{< relref "_index.md#br.com.zup.beagle.android.components/ListView/iteratorName/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>val [iteratorName]({{< relref "_index.md#br.com.zup.beagle.android.components/ListView/iteratorName/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[key]({{< relref "_index.md#br.com.zup.beagle.android.components/ListView/key/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>val [key]({{< relref "_index.md#br.com.zup.beagle.android.components/ListView/key/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onInit]({{< relref "_index.md#br.com.zup.beagle.android.components/ListView/onInit/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

list of actions performed as soon as the component is rendered

<b>open override val [onInit]({{< relref "_index.md#br.com.zup.beagle.android.components/ListView/onInit/#/PointingToDeclaration/" >}}): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onScrollEnd]({{< relref "_index.md#br.com.zup.beagle.android.components/ListView/onScrollEnd/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>val [onScrollEnd]({{< relref "_index.md#br.com.zup.beagle.android.components/ListView/onScrollEnd/#/PointingToDeclaration/" >}}): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[scrollEndThreshold]({{< relref "_index.md#br.com.zup.beagle.android.components/ListView/scrollEndThreshold/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>val [scrollEndThreshold]({{< relref "_index.md#br.com.zup.beagle.android.components/ListView/scrollEndThreshold/#/PointingToDeclaration/" >}}): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[style]({{< relref "_index.md#br.com.zup.beagle.android.components/ListView/style/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

attribute will enable a few visual options to be changed.

<b>open override var [style]({{< relref "_index.md#br.com.zup.beagle.android.components/ListView/style/#/PointingToDeclaration/" >}}): [Style]({{< relref "../../br.com.zup.beagle.core/-style/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[template]({{< relref "_index.md#br.com.zup.beagle.android.components/ListView/template/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>val [template]({{< relref "_index.md#br.com.zup.beagle.android.components/ListView/template/#/PointingToDeclaration/" >}}): [ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

