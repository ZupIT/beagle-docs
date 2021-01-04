+++
title = "SendRequest"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.action]({{< relref "../_index.md" >}}) / [SendRequest]({{< relref "_index.md" >}}) / 



# SendRequest  
  

SendRequest is used to make HTTP requests.

<b>data class [SendRequest]({{< relref "_index.md" >}})(**url**: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>, **method**: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[RequestActionMethod]({{< relref "../-request-action-method/_index.md" >}})>, **headers**: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>>?, **data**: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)?, **onSuccess**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?, **onError**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?, **onFinish**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?) : [Action]({{< relref "../-action/_index.md" >}}), [AsyncAction]({{< relref "../-async-action/_index.md" >}})</b>   


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



Content that will be deliver with the request.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

headers
{{% /md %}}
</td>
<td>
{{% md %}}



Header items for the request.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

method
{{% /md %}}
</td>
<td>
{{% md %}}



HTTP method.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

onError
{{% /md %}}
</td>
<td>
{{% md %}}



Error action.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

onFinish
{{% /md %}}
</td>
<td>
{{% md %}}



Finish action.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

onSuccess
{{% /md %}}
</td>
<td>
{{% md %}}



Success action.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

url
{{% /md %}}
</td>
<td>
{{% md %}}



Required. Server URL.


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

[SendRequest]({{< relref "-send-request.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>fun [SendRequest]({{< relref "-send-request.md" >}})(url: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), method: [RequestActionMethod]({{< relref "../-request-action-method/_index.md" >}}), headers: [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?, data: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)?, onSuccess: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?, onError: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?, onFinish: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[SendRequest]({{< relref "-send-request.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Required. Server URL.

<b>fun [SendRequest]({{< relref "-send-request.md" >}})(url: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>, method: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[RequestActionMethod]({{< relref "../-request-action-method/_index.md" >}})>, headers: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>>?, data: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)?, onSuccess: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?, onError: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?, onFinish: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?)</b>   

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

  
<b>operator fun [component1]({{< relref "component1.md" >}})(): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)></b>  



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

  
<b>operator fun [component2]({{< relref "component2.md" >}})(): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[RequestActionMethod]({{< relref "../-request-action-method/_index.md" >}})></b>  



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

  
<b>operator fun [component3]({{< relref "component3.md" >}})(): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>>?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component4]({{< relref "component4.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component4]({{< relref "component4.md" >}})(): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component5]({{< relref "component5.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component5]({{< relref "component5.md" >}})(): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component6]({{< relref "component6.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component6]({{< relref "component6.md" >}})(): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component7]({{< relref "component7.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component7]({{< relref "component7.md" >}})(): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?</b>  



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

  
<b>fun [copy]({{< relref "copy.md" >}})(url: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>, method: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[RequestActionMethod]({{< relref "../-request-action-method/_index.md" >}})>, headers: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>>?, data: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)?, onSuccess: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?, onError: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?, onFinish: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?): [SendRequest]({{< relref "_index.md" >}})</b>  



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

[data]({{< relref "_index.md#br.com.zup.beagle.android.action/SendRequest/data/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Content that will be deliver with the request.

<b>val [data]({{< relref "_index.md#br.com.zup.beagle.android.action/SendRequest/data/#/PointingToDeclaration/" >}}): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[headers]({{< relref "_index.md#br.com.zup.beagle.android.action/SendRequest/headers/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Header items for the request.

<b>val [headers]({{< relref "_index.md#br.com.zup.beagle.android.action/SendRequest/headers/#/PointingToDeclaration/" >}}): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>>?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[method]({{< relref "_index.md#br.com.zup.beagle.android.action/SendRequest/method/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

HTTP method.

<b>val [method]({{< relref "_index.md#br.com.zup.beagle.android.action/SendRequest/method/#/PointingToDeclaration/" >}}): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[RequestActionMethod]({{< relref "../-request-action-method/_index.md" >}})></b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onError]({{< relref "_index.md#br.com.zup.beagle.android.action/SendRequest/onError/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Error action.

<b>val [onError]({{< relref "_index.md#br.com.zup.beagle.android.action/SendRequest/onError/#/PointingToDeclaration/" >}}): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onFinish]({{< relref "_index.md#br.com.zup.beagle.android.action/SendRequest/onFinish/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Finish action.

<b>val [onFinish]({{< relref "_index.md#br.com.zup.beagle.android.action/SendRequest/onFinish/#/PointingToDeclaration/" >}}): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onSuccess]({{< relref "_index.md#br.com.zup.beagle.android.action/SendRequest/onSuccess/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Success action.

<b>val [onSuccess]({{< relref "_index.md#br.com.zup.beagle.android.action/SendRequest/onSuccess/#/PointingToDeclaration/" >}}): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[status]({{< relref "_index.md#br.com.zup.beagle.android.action/SendRequest/status/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

represents the current state of execution of the action

<b>open override val [status]({{< relref "_index.md#br.com.zup.beagle.android.action/SendRequest/status/#/PointingToDeclaration/" >}}): [LiveData](https://developer.android.com/reference/kotlin/androidx/lifecycle/LiveData.html)<[AsyncActionStatus]({{< relref "../-async-action-status/_index.md" >}})></b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[url]({{< relref "_index.md#br.com.zup.beagle.android.action/SendRequest/url/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Required. Server URL.

<b>val [url]({{< relref "_index.md#br.com.zup.beagle.android.action/SendRequest/url/#/PointingToDeclaration/" >}}): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)></b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

