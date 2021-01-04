+++
title = "br.com.zup.beagle.android.widget"
draft = false
toc = false
type = "reference"
linktitle = "br.com.zup.beagle.android.widget"
[menu.docs]
  parent = "hw-security-reference"
  weight = 1
+++

[beagle]({{< relref "../_index.md" >}}) / [br.com.zup.beagle.android.widget]({{< relref "_index.md" >}}) / 



# Package br.com.zup.beagle.android.widget  


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

[RootView]({{< relref "-root-view/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Interface RootView holder the reference of activity or fragment.

  
  
<b>interface [RootView]({{< relref "-root-view/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ViewConvertable]({{< relref "-view-convertable/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



This interface is responsible to convert any server-driven component to a View in Android

  
  
<b>interface [ViewConvertable]({{< relref "-view-convertable/_index.md" >}}) : [ServerDrivenComponent]({{< relref "../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[WidgetView]({{< relref "-widget-view/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Interface where components inherit to have access attributes of id, style and accessibility and override buildView method.

  
  
<b>abstract class [WidgetView]({{< relref "-widget-view/_index.md" >}}) : [Widget]({{< relref "../br.com.zup.beagle.widget/-widget/_index.md" >}}), [ViewConvertable]({{< relref "-view-convertable/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

</tbody>
</table>

