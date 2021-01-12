+++
title = "br.com.zup.beagle.analytics"
draft = false
toc = false
type = "reference"
linktitle = "br.com.zup.beagle.analytics"
[menu.docs]
  parent = "hw-security-reference"
  weight = 1
+++

[beagle]({{< relref "../_index.md" >}}) / [br.com.zup.beagle.analytics]({{< relref "_index.md" >}}) / 



# Package br.com.zup.beagle.analytics  


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

[Analytics]({{< relref "-analytics/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Beagle analytics is used to track click events.

  
  
<b>interface [Analytics]({{< relref "-analytics/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ClickEvent]({{< relref "-click-event/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Define click event

  
  
<b>data class [ClickEvent]({{< relref "-click-event/_index.md" >}})(**category**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), **label**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, **value**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ScreenAnalytics]({{< relref "-screen-analytics/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Component that hold the screen analytics

  
  
<b>interface [ScreenAnalytics]({{< relref "-screen-analytics/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ScreenEvent]({{< relref "-screen-event/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Beagle analytics is used to track screen.

  
  
<b>data class [ScreenEvent]({{< relref "-screen-event/_index.md" >}})(**screenName**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[TouchableAnalytics]({{< relref "-touchable-analytics/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Component that hold the click analytics

  
  
<b>interface [TouchableAnalytics]({{< relref "-touchable-analytics/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

</tbody>
</table>

