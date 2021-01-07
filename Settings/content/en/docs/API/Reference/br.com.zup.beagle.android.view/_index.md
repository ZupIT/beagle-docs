+++
title = "br.com.zup.beagle.android.view"
draft = false
toc = false
type = "reference"
linktitle = "br.com.zup.beagle.android.view"
[menu.docs]
  parent = "hw-security-reference"
  weight = 1
+++

[beagle]({{< relref "../_index.md" >}}) / [br.com.zup.beagle.android.view]({{< relref "_index.md" >}}) / 



# Package br.com.zup.beagle.android.view  


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

[BeagleActivity]({{< relref "-beagle-activity/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>abstract class [BeagleActivity]({{< relref "-beagle-activity/_index.md" >}}) : [AppCompatActivity](https://developer.android.com/reference/kotlin/androidx/appcompat/app/AppCompatActivity.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[FragmentTransitionAnimation]({{< relref "-fragment-transition-animation/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>data class [FragmentTransitionAnimation]({{< relref "-fragment-transition-animation/_index.md" >}})(@[AnimatorRes](https://developer.android.com/reference/kotlin/androidx/annotation/AnimatorRes.html)()@[AnimRes](https://developer.android.com/reference/kotlin/androidx/annotation/AnimRes.html)()**enter**: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), @[AnimatorRes](https://developer.android.com/reference/kotlin/androidx/annotation/AnimatorRes.html)()@[AnimRes](https://developer.android.com/reference/kotlin/androidx/annotation/AnimRes.html)()**exit**: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), @[AnimatorRes](https://developer.android.com/reference/kotlin/androidx/annotation/AnimatorRes.html)()@[AnimRes](https://developer.android.com/reference/kotlin/androidx/annotation/AnimRes.html)()**popEnter**: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), @[AnimatorRes](https://developer.android.com/reference/kotlin/androidx/annotation/AnimatorRes.html)()@[AnimRes](https://developer.android.com/reference/kotlin/androidx/annotation/AnimRes.html)()**popExit**: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ScreenMethod]({{< relref "-screen-method/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Screen method to indicate the desired action to be performed for a given resource.

  
  
<b>enum [ScreenMethod]({{< relref "-screen-method/_index.md" >}}) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)<[ScreenMethod]({{< relref "-screen-method/_index.md" >}})> </b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ScreenRequest]({{< relref "-screen-request/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



ScreenRequest is used to do requests.

  
  
<b>data class [ScreenRequest]({{< relref "-screen-request/_index.md" >}})(**url**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), **method**: [ScreenMethod]({{< relref "-screen-method/_index.md" >}}), **headers**: [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>, **body**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?) : [Parcelable](https://developer.android.com/reference/kotlin/android/os/Parcelable.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ServerDrivenActivity]({{< relref "-server-driven-activity/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>class [ServerDrivenActivity]({{< relref "-server-driven-activity/_index.md" >}}) : [BeagleActivity]({{< relref "-beagle-activity/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ServerDrivenState]({{< relref "-server-driven-state/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>sealed class [ServerDrivenState]({{< relref "-server-driven-state/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[YogaLayout]({{< relref "-yoga-layout/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open class [YogaLayout]({{< relref "-yoga-layout/_index.md" >}}) : [ViewGroup](https://developer.android.com/reference/kotlin/android/view/ViewGroup.html)</b>  



{{% /md %}}
</td>
</tr>

</tbody>
</table>

