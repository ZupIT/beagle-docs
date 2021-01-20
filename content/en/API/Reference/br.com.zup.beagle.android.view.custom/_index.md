+++
title = "br.com.zup.beagle.android.view.custom"
draft = false
toc = false
type = "reference"
linktitle = "br.com.zup.beagle.android.view.custom"
[menu.docs]
  parent = "hw-security-reference"
  weight = 1
+++

[beagle]({{< relref "../_index.md" >}}) / [br.com.zup.beagle.android.view.custom]({{< relref "_index.md" >}}) / 



# Package br.com.zup.beagle.android.view.custom  


## Types  
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

[BeaglePageIndicatorView]({{< relref "-beagle-page-indicator-view/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>class [BeaglePageIndicatorView]({{< relref "-beagle-page-indicator-view/_index.md" >}})(**context**: [Context](https://developer.android.com/reference/kotlin/android/content/Context.html)) : [View](https://developer.android.com/reference/kotlin/android/view/View.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[BeaglePageView]({{< relref "-beagle-page-view/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>class [BeaglePageView]({{< relref "-beagle-page-view/_index.md" >}})(**context**: [Context](https://developer.android.com/reference/kotlin/android/content/Context.html)) : [ViewPager](https://developer.android.com/reference/kotlin/androidx/viewpager/widget/ViewPager.html), [PageIndicatorOutput]({{< relref "../br.com.zup.beagle.android.components.page/-page-indicator-output/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[BeagleViewState]({{< relref "-beagle-view-state/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>sealed class [BeagleViewState]({{< relref "-beagle-view-state/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

OnLoadCompleted
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>typealias OnLoadCompleted = () -> [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

OnServerStateChanged
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>typealias OnServerStateChanged = ([ServerDrivenState]({{< relref "../br.com.zup.beagle.android.view/-server-driven-state/_index.md" >}})) -> [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

OnStateChanged
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>typealias OnStateChanged = ([BeagleViewState]({{< relref "-beagle-view-state/_index.md" >}})) -> [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)</b>  



{{% /md %}}
</td>
</tr>

</tbody>
</table>

