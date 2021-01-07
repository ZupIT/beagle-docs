+++
title = "TabBar"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.components]({{< relref "../_index.md" >}}) / [TabBar]({{< relref "_index.md" >}}) / [TabBar]({{< relref "-tab-bar.md" >}}) / 



# TabBar  
  
<b><b>fun [TabBar]({{< relref "-tab-bar.md" >}})(items: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[TabBarItem]({{< relref "../-tab-bar-item/_index.md" >}})>, styleId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, currentTab: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), onTabSelection: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?)</b></b>  




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
  
  
<b><b>fun [TabBar]({{< relref "-tab-bar.md" >}})(items: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[TabBarItem]({{< relref "../-tab-bar-item/_index.md" >}})>, styleId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, currentTab: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)>?, onTabSelection: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?)</b></b>  



