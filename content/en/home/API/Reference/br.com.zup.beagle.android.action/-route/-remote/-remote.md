+++
title = "Remote"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../../_index.md" >}}) / [br.com.zup.beagle.android.action]({{< relref "../../_index.md" >}}) / [Route]({{< relref "../_index.md" >}}) / [Remote]({{< relref "_index.md" >}}) / [Remote]({{< relref "-remote.md" >}}) / 



# Remote  
  
<b><b>fun [Remote]({{< relref "-remote.md" >}})(url: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), shouldPrefetch: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), fallback: [Screen]({{< relref "../../../br.com.zup.beagle.android.components.layout/-screen/_index.md" >}})?)</b></b>  




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

fallback
{{% /md %}}
</td>
<td>
{{% md %}}



screen that is rendered in case the request fails.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

shouldPrefetch
{{% /md %}}
</td>
<td>
{{% md %}}



tells Beagle if the navigation request should be previously loaded or not.


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



attribute that contains the navigation endpoint.


{{% /md %}}
</td>
</tr>

</tbody>
</table>
  
</table>
  
  
<b><b>fun [Remote]({{< relref "-remote.md" >}})(url: [Bind]({{< relref "../../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>, shouldPrefetch: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), fallback: [Screen]({{< relref "../../../br.com.zup.beagle.android.components.layout/-screen/_index.md" >}})?)</b></b>  



