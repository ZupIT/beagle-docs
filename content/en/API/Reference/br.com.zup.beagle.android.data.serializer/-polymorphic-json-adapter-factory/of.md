+++
title = "of"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.data.serializer]({{< relref "../_index.md" >}}) / [PolymorphicJsonAdapterFactory]({{< relref "_index.md" >}}) / [of]({{< relref "of.md" >}}) / 



# of  


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

baseType
{{% /md %}}
</td>
<td>
{{% md %}}



The base type for which this factory will create adapters. Cannot be Object.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

labelKey
{{% /md %}}
</td>
<td>
{{% md %}}



The key in the JSON object whose value determines the type to which to map the JSON object.


{{% /md %}}
</td>
</tr>

</tbody>
</table>
  
</table>
  
  
<b><b>open fun <[T]({{< relref "of.md" >}})> [of]({{< relref "of.md" >}})(baseType: [Class](https://developer.android.com/reference/kotlin/java/lang/Class.html)<[T]({{< relref "of.md" >}})>, labelKey: [String](https://developer.android.com/reference/kotlin/java/lang/String.html)): [PolymorphicJsonAdapterFactory]({{< relref "_index.md" >}})<[T]({{< relref "of.md" >}})></b></b>  



