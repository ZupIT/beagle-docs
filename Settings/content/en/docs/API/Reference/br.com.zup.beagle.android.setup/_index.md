+++
title = "br.com.zup.beagle.android.setup"
draft = false
toc = false
type = "reference"
linktitle = "br.com.zup.beagle.android.setup"
[menu.docs]
  parent = "hw-security-reference"
  weight = 1
+++

[beagle]({{< relref "../_index.md" >}}) / [br.com.zup.beagle.android.setup]({{< relref "_index.md" >}}) / 



# Package br.com.zup.beagle.android.setup  


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

[BeagleConfig]({{< relref "-beagle-config/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Interface that provides initial beagle configuration attributes.

  
  
<b>interface [BeagleConfig]({{< relref "-beagle-config/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[BeagleSdk]({{< relref "-beagle-sdk/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>interface [BeagleSdk]({{< relref "-beagle-sdk/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Cache]({{< relref "-cache/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Object responsible for managing the cache of Beagle requests.

  
  
<b>data class [Cache]({{< relref "-cache/_index.md" >}})(**enabled**: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), **maxAge**: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), **memoryMaximumCapacity**: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), **size**: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[DesignSystem]({{< relref "-design-system/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open class [DesignSystem]({{< relref "-design-system/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Environment]({{< relref "-environment/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Enum responsible for informing Beagle about the current build status of the application.

  
  
<b>enum [Environment]({{< relref "-environment/_index.md" >}}) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)<[Environment]({{< relref "-environment/_index.md" >}})> </b>  



{{% /md %}}
</td>
</tr>

</tbody>
</table>

