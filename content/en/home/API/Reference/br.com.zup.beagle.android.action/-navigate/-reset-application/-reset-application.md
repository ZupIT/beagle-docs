+++
title = "ResetApplication"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../../_index.md" >}}) / [br.com.zup.beagle.android.action]({{< relref "../../_index.md" >}}) / [Navigate]({{< relref "../_index.md" >}}) / [ResetApplication]({{< relref "_index.md" >}}) / [ResetApplication]({{< relref "-reset-application.md" >}}) / 



# ResetApplication  


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

controllerId
{{% /md %}}
</td>
<td>
{{% md %}}



in this field passes the id created in the custom activity for beagle to create the flow, if not the beagle passes default activity.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

route
{{% /md %}}
</td>
<td>
{{% md %}}



this defines navigation type, it can be a navigation to a remote route in which Beagle will deserialize the content or to a local screen already built.


{{% /md %}}
</td>
</tr>

</tbody>
</table>
  
</table>
  
  
<b><b>fun [ResetApplication]({{< relref "-reset-application.md" >}})(route: [Route]({{< relref "../../-route/_index.md" >}}), controllerId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?)</b></b>  



