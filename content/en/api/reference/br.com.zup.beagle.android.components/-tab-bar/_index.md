+++
title = "TabBar"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.components]({{< relref "../_index.md" >}}) / [TabBar]({{< relref "_index.md" >}}) / 



# TabBar  
  

TabBar is a component responsible to display a tab layout. It works by displaying tabs that can change a context when clicked.

<b>data class [TabBar]({{< relref "_index.md" >}})(**items**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[TabBarItem]({{< relref "../-tab-bar-item/_index.md" >}})>, **styleId**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, **currentTab**: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)>?, **onTabSelection**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?) : [WidgetView]({{< relref "../../br.com.zup.beagle.android.widget/-widget-view/_index.md" >}})</b>   


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

currentTab
{{% /md %}}
</td>
<td>
{{% md %}}



define the expression that is observer to change the current tab selected


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

items
{{% /md %}}
</td>
<td>
{{% md %}}



define yours tabs title and icon


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

onTabSelection
{{% /md %}}
</td>
<td>
{{% md %}}



define a list of action that will be executed when a tab is selected


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

styleId
{{% /md %}}
</td>
<td>
{{% md %}}



reference a native style in your local styles file to be applied on this view.


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

[TabBar]({{< relref "-tab-bar.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>fun [TabBar]({{< relref "-tab-bar.md" >}})(items: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[TabBarItem]({{< relref "../-tab-bar-item/_index.md" >}})>, styleId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, currentTab: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), onTabSelection: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[TabBar]({{< relref "-tab-bar.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

define yours tabs title and icon

<b>fun [TabBar]({{< relref "-tab-bar.md" >}})(items: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[TabBarItem]({{< relref "../-tab-bar-item/_index.md" >}})>, styleId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, currentTab: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)>?, onTabSelection: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?)</b>   

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

  
<b>operator fun [component1]({{< relref "component1.md" >}})(): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[TabBarItem]({{< relref "../-tab-bar-item/_index.md" >}})></b>  



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

  
<b>operator fun [component2]({{< relref "component2.md" >}})(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>  



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

  
<b>operator fun [component3]({{< relref "component3.md" >}})(): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)>?</b>  



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

[copy]({{< relref "copy.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>fun [copy]({{< relref "copy.md" >}})(items: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[TabBarItem]({{< relref "../-tab-bar-item/_index.md" >}})>, styleId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, currentTab: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)>?, onTabSelection: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?): [TabBar]({{< relref "_index.md" >}})</b>  



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

[accessibility]({{< relref "_index.md#br.com.zup.beagle.android.components/TabBar/accessibility/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

attribute will enable a textual information to explain the view content in case a screen reader is use

<b>open override var [accessibility]({{< relref "_index.md#br.com.zup.beagle.android.components/TabBar/accessibility/#/PointingToDeclaration/" >}}): [Accessibility]({{< relref "../../br.com.zup.beagle.core/-accessibility/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[currentTab]({{< relref "_index.md#br.com.zup.beagle.android.components/TabBar/currentTab/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

define the expression that is observer to change the current tab selected

<b>val [currentTab]({{< relref "_index.md#br.com.zup.beagle.android.components/TabBar/currentTab/#/PointingToDeclaration/" >}}): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)>?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[id]({{< relref "_index.md#br.com.zup.beagle.android.components/TabBar/id/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

use to identifier the current view

<b>open override var [id]({{< relref "_index.md#br.com.zup.beagle.android.components/TabBar/id/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[items]({{< relref "_index.md#br.com.zup.beagle.android.components/TabBar/items/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

define yours tabs title and icon

<b>val [items]({{< relref "_index.md#br.com.zup.beagle.android.components/TabBar/items/#/PointingToDeclaration/" >}}): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[TabBarItem]({{< relref "../-tab-bar-item/_index.md" >}})></b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onTabSelection]({{< relref "_index.md#br.com.zup.beagle.android.components/TabBar/onTabSelection/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

define a list of action that will be executed when a tab is selected

<b>val [onTabSelection]({{< relref "_index.md#br.com.zup.beagle.android.components/TabBar/onTabSelection/#/PointingToDeclaration/" >}}): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[style]({{< relref "_index.md#br.com.zup.beagle.android.components/TabBar/style/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

attribute will enable a few visual options to be changed.

<b>open override var [style]({{< relref "_index.md#br.com.zup.beagle.android.components/TabBar/style/#/PointingToDeclaration/" >}}): [Style]({{< relref "../../br.com.zup.beagle.core/-style/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[styleId]({{< relref "_index.md#br.com.zup.beagle.android.components/TabBar/styleId/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

reference a native style in your local styles file to be applied on this view.

<b>val [styleId]({{< relref "_index.md#br.com.zup.beagle.android.components/TabBar/styleId/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

