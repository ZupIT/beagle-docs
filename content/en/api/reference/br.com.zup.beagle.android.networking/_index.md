+++
title = "br.com.zup.beagle.android.networking"
draft = false
toc = false
type = "reference"
linktitle = "br.com.zup.beagle.android.networking"
[menu.docs]
  parent = "hw-security-reference"
  weight = 1
+++

[beagle]({{< relref "../_index.md" >}}) / [br.com.zup.beagle.android.networking]({{< relref "_index.md" >}}) / 



# Package br.com.zup.beagle.android.networking  


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

[HttpClient]({{< relref "-http-client/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>interface [HttpClient]({{< relref "-http-client/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[HttpMethod]({{< relref "-http-method/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Http method to indicate the desired action to be performed for a given resource.

  
  
<b>enum [HttpMethod]({{< relref "-http-method/_index.md" >}}) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)<[HttpMethod]({{< relref "-http-method/_index.md" >}})> </b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[RequestCall]({{< relref "-request-call/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>interface [RequestCall]({{< relref "-request-call/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[RequestData]({{< relref "-request-data/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



RequestData is used to do requests.

  
  
<b>data class [RequestData]({{< relref "-request-data/_index.md" >}})(**uri**: [URI](https://developer.android.com/reference/kotlin/java/net/URI.html), **method**: [HttpMethod]({{< relref "-http-method/_index.md" >}}), **headers**: [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>, **body**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ResponseData]({{< relref "-response-data/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



ResponseData is used to return data made by the request.

  
  
<b>data class [ResponseData]({{< relref "-response-data/_index.md" >}})(**statusCode**: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)?, **data**: [ByteArray](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html), **headers**: [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>, **statusText**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?)</b>  



{{% /md %}}
</td>
</tr>

</tbody>
</table>

