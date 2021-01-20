+++
title = "PageView"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.components.page]({{< relref "../_index.md" >}}) / [PageView]({{< relref "_index.md" >}}) / 



# PageView  
  

The PageView component is a specialized container to hold pages (views) that will be displayed horizontally.

<b>data class [PageView]({{< relref "_index.md" >}})(**children**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})>, **pageIndicator**: [PageIndicatorComponent]({{< relref "../-page-indicator-component/_index.md" >}})?, **context**: [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?, **onPageChange**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, **currentPage**: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)>?) : [WidgetView]({{< relref "../../br.com.zup.beagle.android.widget/-widget-view/_index.md" >}}), [ContextComponent]({{< relref "../../br.com.zup.beagle.android.context/-context-component/_index.md" >}}), [MultiChildComponent]({{< relref "../../br.com.zup.beagle.core/-multi-child-component/_index.md" >}})</b>   


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



define a List of components (views) that are contained on this PageView. Consider the


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



define the contextData that be set to pageView.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

currentPage
{{% /md %}}
</td>
<td>
{{% md %}}



Integer number that identifies that selected.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

onPageChange
{{% /md %}}
</td>
<td>
{{% md %}}



List of actions that are performed when you are on the selected page.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

pageIndicator
{{% /md %}}
</td>
<td>
{{% md %}}



defines in what page the PageView is currently on.


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

[PageView]({{< relref "-page-view.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>fun [PageView]({{< relref "-page-view.md" >}})(children: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})>, context: [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?, onPageChange: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, currentPage: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[PageView]({{< relref "-page-view.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>~~fun~~ [~~PageView~~]({{< relref "-page-view.md" >}})~~(~~~~children~~~~:~~ [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})>~~,~~ ~~pageIndicator~~~~:~~ [PageIndicatorComponent]({{< relref "../-page-indicator-component/_index.md" >}})?~~,~~ ~~context~~~~:~~ [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?~~)~~</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[PageView]({{< relref "-page-view.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>fun [PageView]({{< relref "-page-view.md" >}})(children: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})>, context: [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?, onPageChange: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, currentPage: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)>?)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[PageView]({{< relref "-page-view.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

define a List of components (views) that are contained on this PageView. Consider the

<b>fun [PageView]({{< relref "-page-view.md" >}})(children: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})>, pageIndicator: [PageIndicatorComponent]({{< relref "../-page-indicator-component/_index.md" >}})?, context: [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?, onPageChange: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, currentPage: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)>?)</b>   

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

  
<b>operator fun [component2]({{< relref "component2.md" >}})(): [PageIndicatorComponent]({{< relref "../-page-indicator-component/_index.md" >}})?</b>  



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

  
<b>operator fun [component5]({{< relref "component5.md" >}})(): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)>?</b>  



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

  
<b>fun [copy]({{< relref "copy.md" >}})(children: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})>, pageIndicator: [PageIndicatorComponent]({{< relref "../-page-indicator-component/_index.md" >}})?, context: [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?, onPageChange: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, currentPage: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)>?): [PageView]({{< relref "_index.md" >}})</b>  



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

[accessibility]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageView/accessibility/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

attribute will enable a textual information to explain the view content in case a screen reader is use

<b>open override var [accessibility]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageView/accessibility/#/PointingToDeclaration/" >}}): [Accessibility]({{< relref "../../br.com.zup.beagle.core/-accessibility/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[children]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageView/children/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

define a List of components (views) that are contained on this PageView. Consider the

<b>open override val [children]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageView/children/#/PointingToDeclaration/" >}}): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})></b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[context]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageView/context/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

define the contextData that be set to pageView.

<b>open override val [context]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageView/context/#/PointingToDeclaration/" >}}): [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[currentPage]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageView/currentPage/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Integer number that identifies that selected.

<b>val [currentPage]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageView/currentPage/#/PointingToDeclaration/" >}}): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)>?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[id]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageView/id/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

use to identifier the current view

<b>open override var [id]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageView/id/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onPageChange]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageView/onPageChange/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

List of actions that are performed when you are on the selected page.

<b>val [onPageChange]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageView/onPageChange/#/PointingToDeclaration/" >}}): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[pageIndicator]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageView/pageIndicator/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

defines in what page the PageView is currently on.

<b>~~val~~ [~~pageIndicator~~]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageView/pageIndicator/#/PointingToDeclaration/" >}})~~:~~ [PageIndicatorComponent]({{< relref "../-page-indicator-component/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[style]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageView/style/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

attribute will enable a few visual options to be changed.

<b>open override var [style]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageView/style/#/PointingToDeclaration/" >}}): [Style]({{< relref "../../br.com.zup.beagle.core/-style/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

