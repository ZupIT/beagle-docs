+++
title = "SendRequest"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.action]({{< relref "../_index.md" >}}) / [SendRequest]({{< relref "_index.md" >}}) / [SendRequest]({{< relref "-send-request.md" >}}) / 



# SendRequest  
  
<b><b>fun [SendRequest]({{< relref "-send-request.md" >}})(url: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), method: [RequestActionMethod]({{< relref "../-request-action-method/_index.md" >}}), headers: [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?, data: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)?, onSuccess: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?, onError: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?, onFinish: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?)</b></b>  




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
  
  
<b><b>fun [SendRequest]({{< relref "-send-request.md" >}})(url: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>, method: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[RequestActionMethod]({{< relref "../-request-action-method/_index.md" >}})>, headers: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>>?, data: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)?, onSuccess: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?, onError: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?, onFinish: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../-action/_index.md" >}})>?)</b></b>  



