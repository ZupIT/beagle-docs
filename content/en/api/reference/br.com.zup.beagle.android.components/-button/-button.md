+++
title = "Button"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.components]({{< relref "../_index.md" >}}) / [Button]({{< relref "_index.md" >}}) / [Button]({{< relref "-button.md" >}}) / 



# Button  
  
<b><b>fun [Button]({{< relref "-button.md" >}})(text: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), styleId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, onPress: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, clickAnalyticsEvent: [ClickEvent]({{< relref "../../br.com.zup.beagle.analytics/-click-event/_index.md" >}})?)</b></b>  




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

clickAnalyticsEvent
{{% /md %}}
</td>
<td>
{{% md %}}



attribute to define click event name


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

onPress
{{% /md %}}
</td>
<td>
{{% md %}}



attribute to define actions when this component is pressed


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

styleId
{{% /md %}}
</td>
<td>
{{% md %}}



reference a native style in your local styles file to be applied on this button.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

text
{{% /md %}}
</td>
<td>
{{% md %}}



define the button text content.


{{% /md %}}
</td>
</tr>

</tbody>
</table>
  
</table>
  
  
<b><b>fun [Button]({{< relref "-button.md" >}})(text: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>, styleId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, onPress: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, clickAnalyticsEvent: [ClickEvent]({{< relref "../../br.com.zup.beagle.analytics/-click-event/_index.md" >}})?)</b></b>  



