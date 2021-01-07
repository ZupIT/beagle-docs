+++
title = "BeagleApiException"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.exception]({{< relref "../_index.md" >}}) / [BeagleApiException]({{< relref "_index.md" >}}) / 



# BeagleApiException  
  

Exception throw when the request fails.

<b>data class [BeagleApiException]({{< relref "_index.md" >}})(**responseData**: [ResponseData]({{< relref "../../br.com.zup.beagle.android.networking/-response-data/_index.md" >}}), **requestData**: [RequestData]({{< relref "../../br.com.zup.beagle.android.networking/-request-data/_index.md" >}}), **message**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) : [BeagleException]({{< relref "../-beagle-exception/_index.md" >}})</b>   


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

message
{{% /md %}}
</td>
<td>
{{% md %}}



get a message from the exception thrown.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

requestData
{{% /md %}}
</td>
<td>
{{% md %}}



is used to make HTTP requests.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

responseData
{{% /md %}}
</td>
<td>
{{% md %}}



is used to return data made by the request.


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

[BeagleApiException]({{< relref "-beagle-api-exception.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

is used to return data made by the request.

<b>fun [BeagleApiException]({{< relref "-beagle-api-exception.md" >}})(responseData: [ResponseData]({{< relref "../../br.com.zup.beagle.android.networking/-response-data/_index.md" >}}), requestData: [RequestData]({{< relref "../../br.com.zup.beagle.android.networking/-request-data/_index.md" >}}), message: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))</b>   

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

[addSuppressed](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/add-suppressed.html)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>override fun [addSuppressed](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/add-suppressed.html)(p0: [Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component1]({{< relref "component1.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component1]({{< relref "component1.md" >}})(): [ResponseData]({{< relref "../../br.com.zup.beagle.android.networking/-response-data/_index.md" >}})</b>  



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

  
<b>operator fun [component2]({{< relref "component2.md" >}})(): [RequestData]({{< relref "../../br.com.zup.beagle.android.networking/-request-data/_index.md" >}})</b>  



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

  
<b>operator fun [component3]({{< relref "component3.md" >}})(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)</b>  



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

  
<b>fun [copy]({{< relref "copy.md" >}})(responseData: [ResponseData]({{< relref "../../br.com.zup.beagle.android.networking/-response-data/_index.md" >}}), requestData: [RequestData]({{< relref "../../br.com.zup.beagle.android.networking/-request-data/_index.md" >}}), message: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [BeagleApiException]({{< relref "_index.md" >}})</b>  



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

[fillInStackTrace](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/fill-in-stack-trace.html)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [fillInStackTrace](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/fill-in-stack-trace.html)(): [Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[getLocalizedMessage](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/get-localized-message.html)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [getLocalizedMessage](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/get-localized-message.html)(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[getStackTrace](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/get-stack-trace.html)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [getStackTrace](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/get-stack-trace.html)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)<[StackTraceElement](https://developer.android.com/reference/kotlin/java/lang/StackTraceElement.html)></b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[getSuppressed](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/get-suppressed.html)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>override fun [getSuppressed](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/get-suppressed.html)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)<[Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)></b>  



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

[initCause](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/init-cause.html)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [initCause](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/init-cause.html)(p0: [Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)): [Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[printStackTrace](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/print-stack-trace.html)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [printStackTrace](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/print-stack-trace.html)()</b>  
<b>open override fun [printStackTrace](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/print-stack-trace.html)(p0: [PrintStream](https://developer.android.com/reference/kotlin/java/io/PrintStream.html))</b>  
<b>open override fun [printStackTrace](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/print-stack-trace.html)(p0: [PrintWriter](https://developer.android.com/reference/kotlin/java/io/PrintWriter.html))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[setStackTrace](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/set-stack-trace.html)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [setStackTrace](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/set-stack-trace.html)(p0: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)<[StackTraceElement](https://developer.android.com/reference/kotlin/java/lang/StackTraceElement.html)>)</b>  



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

[cause]({{< relref "_index.md#br.com.zup.beagle.android.exception/BeagleApiException/cause/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

get the cause of the exception

<b>open override val [cause]({{< relref "_index.md#br.com.zup.beagle.android.exception/BeagleApiException/cause/#/PointingToDeclaration/" >}}): [Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[message]({{< relref "_index.md#br.com.zup.beagle.android.exception/BeagleApiException/message/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

get a message from the exception thrown.

<b>open override val [message]({{< relref "_index.md#br.com.zup.beagle.android.exception/BeagleApiException/message/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[requestData]({{< relref "_index.md#br.com.zup.beagle.android.exception/BeagleApiException/requestData/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

is used to make HTTP requests.

<b>val [requestData]({{< relref "_index.md#br.com.zup.beagle.android.exception/BeagleApiException/requestData/#/PointingToDeclaration/" >}}): [RequestData]({{< relref "../../br.com.zup.beagle.android.networking/-request-data/_index.md" >}})</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[responseData]({{< relref "_index.md#br.com.zup.beagle.android.exception/BeagleApiException/responseData/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

is used to return data made by the request.

<b>val [responseData]({{< relref "_index.md#br.com.zup.beagle.android.exception/BeagleApiException/responseData/#/PointingToDeclaration/" >}}): [ResponseData]({{< relref "../../br.com.zup.beagle.android.networking/-response-data/_index.md" >}})</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

