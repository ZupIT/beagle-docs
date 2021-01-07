+++
title = "Condition"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.action]({{< relref "../_index.md" >}}) / [Condition]({{< relref "_index.md" >}}) / 



# Condition  
  

Action to resolve condition and call onTrue if return true and onFalse if return is false.

<b>data class [Condition]({{< relref "_index.md" >}})(**condition**: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)>, **onTrue**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?, **onFalse**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?) : [Action]({{< relref "../-action/_index.md" >}})</b>   


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

condition
{{% /md %}}
</td>
<td>
{{% md %}}



condition should represents a boolean.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

onFalse
{{% /md %}}
</td>
<td>
{{% md %}}



define action if the condition returns false.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

onTrue
{{% /md %}}
</td>
<td>
{{% md %}}



define action if the condition returns true.


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

[Condition]({{< relref "-condition.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>fun [Condition]({{< relref "-condition.md" >}})(condition: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), onTrue: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?, onFalse: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Condition]({{< relref "-condition.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

condition should represents a boolean.

<b>fun [Condition]({{< relref "-condition.md" >}})(condition: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)>, onTrue: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?, onFalse: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?)</b>   

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

[component1]({{< relref "component1.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component1]({{< relref "component1.md" >}})(): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)></b>  



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

  
<b>operator fun [component2]({{< relref "component2.md" >}})(): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?</b>  



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

  
<b>operator fun [component3]({{< relref "component3.md" >}})(): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?</b>  



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

  
<b>fun [copy]({{< relref "copy.md" >}})(condition: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)>, onTrue: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?, onFalse: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?): [Condition]({{< relref "_index.md" >}})</b>  



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

[execute]({{< relref "execute.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Method executed when the function is triggered

  
  
<b>open override fun [execute]({{< relref "execute.md" >}})(rootView: [RootView]({{< relref "../../br.com.zup.beagle.android.widget/-root-view/_index.md" >}}), origin: [View](https://developer.android.com/reference/kotlin/android/view/View.html))</b>  



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

[condition]({{< relref "_index.md#br.com.zup.beagle.android.action/Condition/condition/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

condition should represents a boolean.

<b>val [condition]({{< relref "_index.md#br.com.zup.beagle.android.action/Condition/condition/#/PointingToDeclaration/" >}}): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)></b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onFalse]({{< relref "_index.md#br.com.zup.beagle.android.action/Condition/onFalse/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

define action if the condition returns false.

<b>val [onFalse]({{< relref "_index.md#br.com.zup.beagle.android.action/Condition/onFalse/#/PointingToDeclaration/" >}}): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onTrue]({{< relref "_index.md#br.com.zup.beagle.android.action/Condition/onTrue/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

define action if the condition returns true.

<b>val [onTrue]({{< relref "_index.md#br.com.zup.beagle.android.action/Condition/onTrue/#/PointingToDeclaration/" >}}): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

