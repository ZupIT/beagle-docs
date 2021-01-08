+++
title = "OpenNativeRoute"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../../_index.md" >}}) / [br.com.zup.beagle.android.action]({{< relref "../../_index.md" >}}) / [Navigate]({{< relref "../_index.md" >}}) / [OpenNativeRoute]({{< relref "_index.md" >}}) / 



# OpenNativeRoute  
  

This action opens the route to execute the action declared in the deeplink that was defined for the application.

<b>class [OpenNativeRoute]({{< relref "_index.md" >}})(**route**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), **shouldResetApplication**: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), **data**: [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?) : [Navigate]({{< relref "../_index.md" >}})</b>   


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



pass information between screens.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

route
{{% /md %}}
</td>
<td>
{{% md %}}



deeplink identifier


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



attribute that allows customization of the behavior of restarting the application view stack.


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

[OpenNativeRoute]({{< relref "-open-native-route.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

deeplink identifier

<b>fun [OpenNativeRoute]({{< relref "-open-native-route.md" >}})(route: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), shouldResetApplication: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), data: [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?)</b>   

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

[execute]({{< relref "execute.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Method executed when the function is triggered

  
  
<b>open override fun [execute]({{< relref "execute.md" >}})(rootView: [RootView]({{< relref "../../../br.com.zup.beagle.android.widget/-root-view/_index.md" >}}), origin: [View](https://developer.android.com/reference/kotlin/android/view/View.html))</b>  



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

[data]({{< relref "_index.md#br.com.zup.beagle.android.action/Navigate.OpenNativeRoute/data/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

pass information between screens.

<b>val [data]({{< relref "_index.md#br.com.zup.beagle.android.action/Navigate.OpenNativeRoute/data/#/PointingToDeclaration/" >}}): [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[route]({{< relref "_index.md#br.com.zup.beagle.android.action/Navigate.OpenNativeRoute/route/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

deeplink identifier

<b>val [route]({{< relref "_index.md#br.com.zup.beagle.android.action/Navigate.OpenNativeRoute/route/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[shouldResetApplication]({{< relref "_index.md#br.com.zup.beagle.android.action/Navigate.OpenNativeRoute/shouldResetApplication/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

attribute that allows customization of the behavior of restarting the application view stack.

<b>val [shouldResetApplication]({{< relref "_index.md#br.com.zup.beagle.android.action/Navigate.OpenNativeRoute/shouldResetApplication/#/PointingToDeclaration/" >}}): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

