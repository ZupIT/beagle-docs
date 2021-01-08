+++
title = "ListView"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.components]({{< relref "../_index.md" >}}) / [ListView]({{< relref "_index.md" >}}) / [ListView]({{< relref "-list-view.md" >}}) / 



# ListView  


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



define the items on the list view.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

direction
{{% /md %}}
</td>
<td>
{{% md %}}



define the list direction.


{{% /md %}}
</td>
</tr>

</tbody>
</table>
  
</table>
  
  
<b><b>~~fun~~ [~~ListView~~]({{< relref "-list-view.md" >}})~~(~~~~children~~~~:~~ [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})>~~,~~ ~~direction~~~~:~~ [ListDirection]({{< relref "../../br.com.zup.beagle.widget.core/-list-direction/_index.md" >}})~~)~~</b></b>  




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

context
{{% /md %}}
</td>
<td>
{{% md %}}



define the contextData that be set to component.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

dataSource
{{% /md %}}
</td>
<td>
{{% md %}}



it's an expression that points to a list of values used to populate the Widget.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

direction
{{% /md %}}
</td>
<td>
{{% md %}}



define the list direction.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

iteratorName
{{% /md %}}
</td>
<td>
{{% md %}}



is the context identifier of each cell.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

key
{{% /md %}}
</td>
<td>
{{% md %}}



points to a unique value present in each dataSource item used as a suffix in the component ids within the Widget.


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



allows to define a list of actions to be performed when the Widget is displayed.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

onScrollEnd
{{% /md %}}
</td>
<td>
{{% md %}}



list of actions performed when the list is scrolled to the end.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

scrollEndThreshold
{{% /md %}}
</td>
<td>
{{% md %}}



sets the scrolled percentage of the list to trigger onScrollEnd.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

template
{{% /md %}}
</td>
<td>
{{% md %}}



represents each cell in the list through a ServerDrivenComponent.


{{% /md %}}
</td>
</tr>

</tbody>
</table>
  
</table>
  
  
<b><b>fun [ListView]({{< relref "-list-view.md" >}})(direction: [ListDirection]({{< relref "../../br.com.zup.beagle.widget.core/-list-direction/_index.md" >}}), context: [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?, onInit: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, dataSource: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)>>, template: [ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}}), onScrollEnd: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, scrollEndThreshold: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)?, iteratorName: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), key: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?)</b></b>  


  
<b><b>~~fun~~ [~~ListView~~]({{< relref "-list-view.md" >}})~~(~~~~children~~~~:~~ [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})>?~~,~~ ~~direction~~~~:~~ [ListDirection]({{< relref "../../br.com.zup.beagle.widget.core/-list-direction/_index.md" >}})~~,~~ ~~context~~~~:~~ [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?~~,~~ ~~onInit~~~~:~~ [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?~~,~~ ~~dataSource~~~~:~~ [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)>>?~~,~~ ~~template~~~~:~~ [ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})?~~,~~ ~~onScrollEnd~~~~:~~ [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?~~,~~ ~~scrollEndThreshold~~~~:~~ [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)?~~,~~ ~~iteratorName~~~~:~~ [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)~~,~~ ~~key~~~~:~~ [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?~~)~~</b></b>  



