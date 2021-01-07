+++
title = "getDeepLinkIntent"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.navigation]({{< relref "../_index.md" >}}) / [DeepLinkHandler]({{< relref "_index.md" >}}) / [getDeepLinkIntent]({{< relref "get-deep-link-intent.md" >}}) / 



# getDeepLinkIntent  


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

data
{{% /md %}}
</td>
<td>
{{% md %}}



Content that will be deliver with the navigation.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

path
{{% /md %}}
</td>
<td>
{{% md %}}



route-defined value.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

rootView
{{% /md %}}
</td>
<td>
{{% md %}}



holder the reference of activity or fragment.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

shouldResetApplication
{{% /md %}}
</td>
<td>
{{% md %}}



Opens a screen with the route informed from a new flow and clears the view stack for the entire application.


{{% /md %}}
</td>
</tr>

</tbody>
</table>
  
</table>
  
  
<b><b>abstract fun [getDeepLinkIntent]({{< relref "get-deep-link-intent.md" >}})(rootView: [RootView]({{< relref "../../br.com.zup.beagle.android.widget/-root-view/_index.md" >}}), path: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), data: [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?, shouldResetApplication: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)): [Intent](https://developer.android.com/reference/kotlin/android/content/Intent.html)</b></b>  



