+++
title = "br.com.zup.beagle.android.components.page"
draft = false
toc = false
type = "reference"
linktitle = "br.com.zup.beagle.android.components.page"
[menu.docs]
  parent = "hw-security-reference"
  weight = 1
+++

[beagle]({{< relref "../_index.md" >}}) / [br.com.zup.beagle.android.components.page]({{< relref "_index.md" >}}) / 



# Package br.com.zup.beagle.android.components.page  


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

[PageIndicator]({{< relref "-page-indicator/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



The PageView component is a specialized container to hold pages (views) that will be displayed horizontally.

  
  
<b>class [PageIndicator]({{< relref "-page-indicator/_index.md" >}})(**selectedColor**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), **unselectedColor**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), **numberOfPages**: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)?, **currentPage**: [Bind]({{< relref "../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)>?) : [WidgetView]({{< relref "../br.com.zup.beagle.android.widget/-widget-view/_index.md" >}}), [PageIndicatorComponent]({{< relref "-page-indicator-component/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[PageIndicatorComponent]({{< relref "-page-indicator-component/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Base of page indicator component.

  
  
<b>~~interface~~ [~~PageIndicatorComponent~~]({{< relref "-page-indicator-component/_index.md" >}}) ~~:~~ [~~ServerDrivenComponent~~]({{< relref "../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})~~,~~ [~~ViewConvertable~~]({{< relref "../br.com.zup.beagle.android.widget/-view-convertable/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[PageIndicatorOutput]({{< relref "-page-indicator-output/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>interface [PageIndicatorOutput]({{< relref "-page-indicator-output/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[PageView]({{< relref "-page-view/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



The PageView component is a specialized container to hold pages (views) that will be displayed horizontally.

  
  
<b>data class [PageView]({{< relref "-page-view/_index.md" >}})(**children**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})>, **pageIndicator**: [PageIndicatorComponent]({{< relref "-page-indicator-component/_index.md" >}})?, **context**: [ContextData]({{< relref "../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?, **onPageChange**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, **currentPage**: [Bind]({{< relref "../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)>?) : [WidgetView]({{< relref "../br.com.zup.beagle.android.widget/-widget-view/_index.md" >}}), [ContextComponent]({{< relref "../br.com.zup.beagle.android.context/-context-component/_index.md" >}}), [MultiChildComponent]({{< relref "../br.com.zup.beagle.core/-multi-child-component/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

</tbody>
</table>

