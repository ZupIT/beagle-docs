+++
title = "FormRemoteAction"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.action]({{< relref "../_index.md" >}}) / [FormRemoteAction]({{< relref "_index.md" >}}) / 



# FormRemoteAction  
  

Define remote action, when you want to do some request when submit the form.

<b>~~data~~ ~~class~~ [~~FormRemoteAction~~]({{< relref "_index.md" >}})~~(~~~~**path**~~~~:~~ [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)~~,~~ ~~**method**~~~~:~~ [FormMethodType]({{< relref "../-form-method-type/_index.md" >}})~~)~~ ~~:~~ [~~Action~~]({{< relref "../-action/_index.md" >}})~~,~~ [~~AsyncAction~~]({{< relref "../-async-action/_index.md" >}})</b>   


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

method
{{% /md %}}
</td>
<td>
{{% md %}}



defines the type of operation submitted by this form. It will map these values to Http methods.


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



defines the URL path to the back-end service which will receive this form inputs.


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

[FormRemoteAction]({{< relref "-form-remote-action.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

defines the URL path to the back-end service which will receive this form inputs.

<b>fun [FormRemoteAction]({{< relref "-form-remote-action.md" >}})(path: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), method: [FormMethodType]({{< relref "../-form-method-type/_index.md" >}}))</b>   

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

  
<b>operator fun [component1]({{< relref "component1.md" >}})(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)</b>  



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

  
<b>operator fun [component2]({{< relref "component2.md" >}})(): [FormMethodType]({{< relref "../-form-method-type/_index.md" >}})</b>  



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

  
<b>fun [copy]({{< relref "copy.md" >}})(path: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), method: [FormMethodType]({{< relref "../-form-method-type/_index.md" >}})): [FormRemoteAction]({{< relref "_index.md" >}})</b>  



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

[onActionFinished]({{< relref "../-async-action/on-action-finished.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Updates action status to finished

  
  
<b>open override fun [onActionFinished]({{< relref "../-async-action/on-action-finished.md" >}})()</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onActionStarted]({{< relref "../-async-action/on-action-started.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Updates action status to started. It is not necessary to call this method for a custom async action. The initial state of the action is already updated automatically by ContextActionExecutor

  
  
<b>open override fun [onActionStarted]({{< relref "../-async-action/on-action-started.md" >}})()</b>  



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

[method]({{< relref "_index.md#br.com.zup.beagle.android.action/FormRemoteAction/method/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

defines the type of operation submitted by this form. It will map these values to Http methods.

<b>val [method]({{< relref "_index.md#br.com.zup.beagle.android.action/FormRemoteAction/method/#/PointingToDeclaration/" >}}): [FormMethodType]({{< relref "../-form-method-type/_index.md" >}})</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[path]({{< relref "_index.md#br.com.zup.beagle.android.action/FormRemoteAction/path/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

defines the URL path to the back-end service which will receive this form inputs.

<b>val [path]({{< relref "_index.md#br.com.zup.beagle.android.action/FormRemoteAction/path/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[status]({{< relref "_index.md#br.com.zup.beagle.android.action/FormRemoteAction/status/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

represents the current state of execution of the action

<b>open override val [status]({{< relref "_index.md#br.com.zup.beagle.android.action/FormRemoteAction/status/#/PointingToDeclaration/" >}}): [LiveData](https://developer.android.com/reference/kotlin/androidx/lifecycle/LiveData.html)<[AsyncActionStatus]({{< relref "../-async-action-status/_index.md" >}})></b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

