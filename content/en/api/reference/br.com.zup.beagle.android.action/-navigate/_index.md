+++
title = "Navigate"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.action]({{< relref "../_index.md" >}}) / [Navigate]({{< relref "_index.md" >}}) / 



# Navigate  
  

Class handles transition actions between screens in the application. Its structure is the following:.

<b>sealed class [Navigate]({{< relref "_index.md" >}}) : [Action]({{< relref "../-action/_index.md" >}})</b>   


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

[OpenExternalURL]({{< relref "-open-external-u-r-l/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Opens one of the browsers available on the device with the passed url.

  
  
<b>data class [OpenExternalURL]({{< relref "-open-external-u-r-l/_index.md" >}})(**url**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) : [Navigate]({{< relref "_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[OpenNativeRoute]({{< relref "-open-native-route/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



This action opens the route to execute the action declared in the deeplink that was defined for the application.

  
  
<b>class [OpenNativeRoute]({{< relref "-open-native-route/_index.md" >}})(**route**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), **shouldResetApplication**: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), **data**: [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?) : [Navigate]({{< relref "_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[PopStack]({{< relref "-pop-stack/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



This action closes the current view stack.

  
  
<b>class [PopStack]({{< relref "-pop-stack/_index.md" >}}) : [Navigate]({{< relref "_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[PopToView]({{< relref "-pop-to-view/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



It is responsible for returning the stack of screens in the application flow to a specific screen.

  
  
<b>data class [PopToView]({{< relref "-pop-to-view/_index.md" >}})(**route**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) : [Navigate]({{< relref "_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[PopView]({{< relref "-pop-view/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Action that closes the current view.

  
  
<b>class [PopView]({{< relref "-pop-view/_index.md" >}}) : [Navigate]({{< relref "_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[PushStack]({{< relref "-push-stack/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Present a new screen with the link declared in the route attribute. This attribute basically has the same functionality as PushView but starting a new flow instead.

  
  
<b>data class [PushStack]({{< relref "-push-stack/_index.md" >}})(**route**: [Route]({{< relref "../-route/_index.md" >}}), **controllerId**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?) : [Navigate]({{< relref "_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[PushView]({{< relref "-push-view/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



This type means the action to be performed is the opening of a new screen using the route passed. This screen will also be stacked at the top of the hierarchy of views in the application flow.

  
  
<b>data class [PushView]({{< relref "-push-view/_index.md" >}})(**route**: [Route]({{< relref "../-route/_index.md" >}})) : [Navigate]({{< relref "_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ResetApplication]({{< relref "-reset-application/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



This attribute, when selected, opens a screen with the route informed from a new flow and clears clears the view stack for the entire application.

  
  
<b>data class [ResetApplication]({{< relref "-reset-application/_index.md" >}})(**route**: [Route]({{< relref "../-route/_index.md" >}}), **controllerId**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?) : [Navigate]({{< relref "_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ResetStack]({{< relref "-reset-stack/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



This attribute, when selected, opens a screen with the route informed from a new flow and clears the stack of previously loaded screens.

  
  
<b>data class [ResetStack]({{< relref "-reset-stack/_index.md" >}})(**route**: [Route]({{< relref "../-route/_index.md" >}}), **controllerId**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?) : [Navigate]({{< relref "_index.md" >}})</b>  



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

[execute]({{< relref "../-action/execute.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Method executed when the function is triggered

  
  
<b>abstract override fun [execute]({{< relref "../-action/execute.md" >}})(rootView: [RootView]({{< relref "../../br.com.zup.beagle.android.widget/-root-view/_index.md" >}}), origin: [View](https://developer.android.com/reference/kotlin/android/view/View.html))</b>  



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

[Navigate]({{< relref "-open-external-u-r-l/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Navigate]({{< relref "-open-native-route/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Navigate]({{< relref "-pop-stack/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Navigate]({{< relref "-pop-view/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Navigate]({{< relref "-pop-to-view/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Navigate]({{< relref "-push-view/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Navigate]({{< relref "-push-stack/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Navigate]({{< relref "-reset-application/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Navigate]({{< relref "-reset-stack/_index.md" >}})
{{% /md %}}
</td>
</tr>

</tbody>
</table>

