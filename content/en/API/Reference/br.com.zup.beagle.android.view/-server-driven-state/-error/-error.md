+++
title = "Error"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../../_index.md" >}}) / [br.com.zup.beagle.android.view]({{< relref "../../_index.md" >}}) / [ServerDrivenState]({{< relref "../_index.md" >}}) / [Error]({{< relref "_index.md" >}}) / [Error]({{< relref "-error.md" >}}) / 



# Error  


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

retry
{{% /md %}}
</td>
<td>
{{% md %}}



action to be performed when an error occurs


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

throwable
{{% /md %}}
</td>
<td>
{{% md %}}



error occurred. See {@link br.com.zup.beagle.android.exception.BeagleApiException}, See {@link br.com.zup.beagle.android.exception.BeagleException}


{{% /md %}}
</td>
</tr>

</tbody>
</table>
  
</table>
  
  
<b><b>fun [Error]({{< relref "-error.md" >}})(throwable: [Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html), retry: () -> [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html))</b></b>  



