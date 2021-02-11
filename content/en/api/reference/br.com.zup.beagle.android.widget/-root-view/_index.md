+++
title = "RootView"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.widget]({{< relref "../_index.md" >}}) / [RootView]({{< relref "_index.md" >}}) / 



# RootView  
  

Interface RootView holder the reference of activity or fragment.

<b>interface [RootView]({{< relref "_index.md" >}})</b>   


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

[getContext]({{< relref "get-context.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Returns the application context.

  
  
<b>abstract fun [getContext]({{< relref "get-context.md" >}})(): [Context](https://developer.android.com/reference/kotlin/android/content/Context.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[getLifecycleOwner]({{< relref "get-lifecycle-owner.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Returns A class that has an Android lifecycle.

  
  
<b>abstract fun [getLifecycleOwner]({{< relref "get-lifecycle-owner.md" >}})(): [LifecycleOwner](https://developer.android.com/reference/kotlin/androidx/lifecycle/LifecycleOwner.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[getParentId]({{< relref "get-parent-id.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Returns the parent id of View that encapsulates all the content rendered by server-driven.

  
  
<b>abstract fun [getParentId]({{< relref "get-parent-id.md" >}})(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[getViewModelStoreOwner]({{< relref "get-view-model-store-owner.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Retrieve a ViewModelStore for activities and fragments.

  
  
<b>abstract fun [getViewModelStoreOwner]({{< relref "get-view-model-store-owner.md" >}})(): [ViewModelStoreOwner](https://developer.android.com/reference/kotlin/androidx/lifecycle/ViewModelStoreOwner.html)</b>  



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


## Inheritors  
<table>
  
<thead>
<tr>
<th>
Name  
</th>
  
</tr>
</thead>
<tbody>
<tr>
<td>
{{% md %}}

[FragmentRootView]({{< relref "../../br.com.zup.beagle.android.engine.renderer/-fragment-root-view/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ActivityRootView]({{< relref "../../br.com.zup.beagle.android.engine.renderer/-activity-root-view/_index.md" >}})
{{% /md %}}
</td>
</tr>

</tbody>
</table>

