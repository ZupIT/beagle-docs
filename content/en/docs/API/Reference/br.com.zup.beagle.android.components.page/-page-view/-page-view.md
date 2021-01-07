+++
title = "PageView"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.components.page]({{< relref "../_index.md" >}}) / [PageView]({{< relref "_index.md" >}}) / [PageView]({{< relref "-page-view.md" >}}) / 



# PageView  
  
<b><b>fun [PageView]({{< relref "-page-view.md" >}})(children: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})>, context: [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?, onPageChange: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, currentPage: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))</b></b>  
<b><b>~~fun~~ [~~PageView~~]({{< relref "-page-view.md" >}})~~(~~~~children~~~~:~~ [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})>~~,~~ ~~pageIndicator~~~~:~~ [PageIndicatorComponent]({{< relref "../-page-indicator-component/_index.md" >}})?~~,~~ ~~context~~~~:~~ [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?~~)~~</b></b>  
<b><b>fun [PageView]({{< relref "-page-view.md" >}})(children: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})>, context: [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?, onPageChange: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, currentPage: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)>?)</b></b>  




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
  
  
<b><b>fun [PageView]({{< relref "-page-view.md" >}})(children: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})>, pageIndicator: [PageIndicatorComponent]({{< relref "../-page-indicator-component/_index.md" >}})?, context: [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?, onPageChange: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, currentPage: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)>?)</b></b>  



