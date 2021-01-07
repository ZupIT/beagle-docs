+++
title = "Condition"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.action]({{< relref "../_index.md" >}}) / [Condition]({{< relref "_index.md" >}}) / [Condition]({{< relref "-condition.md" >}}) / 



# Condition  
  
<b><b>fun [Condition]({{< relref "-condition.md" >}})(condition: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), onTrue: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?, onFalse: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?)</b></b>  




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
  
  
<b><b>fun [Condition]({{< relref "-condition.md" >}})(condition: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)>, onTrue: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?, onFalse: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?)</b></b>  



