+++
title = "AsyncAction"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.action]({{< relref "../_index.md" >}}) / [AsyncAction]({{< relref "_index.md" >}}) / 



# AsyncAction  
  

Interface that represents async actions in Beagle

<b>interface [AsyncAction]({{< relref "_index.md" >}})</b>   


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

[onActionFinished]({{< relref "on-action-finished.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Updates action status to finished

  
  
<b>abstract fun [onActionFinished]({{< relref "on-action-finished.md" >}})()</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onActionStarted]({{< relref "on-action-started.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Updates action status to started. It is not necessary to call this method for a custom async action. The initial state of the action is already updated automatically by ContextActionExecutor

  
  
<b>abstract fun [onActionStarted]({{< relref "on-action-started.md" >}})()</b>  



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

[status]({{< relref "_index.md#br.com.zup.beagle.android.action/AsyncAction/status/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

represents the current state of execution of the action

<b>abstract val [status]({{< relref "_index.md#br.com.zup.beagle.android.action/AsyncAction/status/#/PointingToDeclaration/" >}}): [LiveData](https://developer.android.com/reference/kotlin/androidx/lifecycle/LiveData.html)<[AsyncActionStatus]({{< relref "../-async-action-status/_index.md" >}})></b>   

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

[AsyncActionImpl]({{< relref "../-async-action-impl/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[FormLocalAction]({{< relref "../-form-local-action/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[FormRemoteAction]({{< relref "../-form-remote-action/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[SendRequest]({{< relref "../-send-request/_index.md" >}})
{{% /md %}}
</td>
</tr>

</tbody>
</table>

