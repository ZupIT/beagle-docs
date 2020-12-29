+++
title = "br.com.zup.beagle.android.exception"
draft = false
toc = false
type = "reference"
linktitle = "br.com.zup.beagle.android.exception"
[menu.docs]
  parent = "hw-security-reference"
  weight = 1
+++

[beagle]({{< relref "../_index.md" >}}) / [br.com.zup.beagle.android.exception]({{< relref "_index.md" >}}) / 



# Package br.com.zup.beagle.android.exception  


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

[BeagleApiException]({{< relref "-beagle-api-exception/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Exception throw when the request fails.

  
  
<b>data class [BeagleApiException]({{< relref "-beagle-api-exception/_index.md" >}})(**responseData**: [ResponseData]({{< relref "../br.com.zup.beagle.android.networking/-response-data/_index.md" >}}), **requestData**: [RequestData]({{< relref "../br.com.zup.beagle.android.networking/-request-data/_index.md" >}}), **message**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) : [BeagleException]({{< relref "-beagle-exception/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[BeagleException]({{< relref "-beagle-exception/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



An exception class, thrown when an error something happens in the Beagle.

  
  
<b>open class [BeagleException]({{< relref "-beagle-exception/_index.md" >}})(**message**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), **cause**: [Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)?) : [Exception](https://developer.android.com/reference/kotlin/java/lang/Exception.html)</b>  



{{% /md %}}
</td>
</tr>

</tbody>
</table>

