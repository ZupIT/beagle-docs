+++
title = "br.com.zup.beagle.core"
draft = false
toc = false
type = "reference"
linktitle = "br.com.zup.beagle.core"
[menu.docs]
  parent = "hw-security-reference"
  weight = 1
+++

[beagle]({{< relref "../_index.md" >}}) / [br.com.zup.beagle.core]({{< relref "_index.md" >}}) / 



# Package br.com.zup.beagle.core  


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

[Accessibility]({{< relref "-accessibility/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



The accessibility will enable a textual information to explain the view content in case a screen reader is used.

  
  
<b>data class [Accessibility]({{< relref "-accessibility/_index.md" >}})(**accessible**: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), **accessibilityLabel**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[AccessibilityComponent]({{< relref "-accessibility-component/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Component that hold the accessibility

  
  
<b>interface [AccessibilityComponent]({{< relref "-accessibility-component/_index.md" >}}) : [ServerDrivenComponent]({{< relref "-server-driven-component/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[CornerRadius]({{< relref "-corner-radius/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



The corner radius change the appearance of view

  
  
<b>data class [CornerRadius]({{< relref "-corner-radius/_index.md" >}})(**radius**: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Display]({{< relref "-display/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



This defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children.

  
  
<b>enum [Display]({{< relref "-display/_index.md" >}}) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)<[Display]({{< relref "-display/_index.md" >}})> </b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[GhostComponent]({{< relref "-ghost-component/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Component that hold the ghost view

  
  
<b>interface [GhostComponent]({{< relref "-ghost-component/_index.md" >}}) : [SingleChildComponent]({{< relref "-single-child-component/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[IdentifierComponent]({{< relref "-identifier-component/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Component that hold the identifier

  
  
<b>interface [IdentifierComponent]({{< relref "-identifier-component/_index.md" >}}) : [ServerDrivenComponent]({{< relref "-server-driven-component/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[MultiChildComponent]({{< relref "-multi-child-component/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Component that has children

  
  
<b>interface [MultiChildComponent]({{< relref "-multi-child-component/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[PositionType]({{< relref "-position-type/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



The position type of an element defines how it is positioned within its parent.

  
  
<b>enum [PositionType]({{< relref "-position-type/_index.md" >}}) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)<[PositionType]({{< relref "-position-type/_index.md" >}})> </b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ServerDrivenComponent]({{< relref "-server-driven-component/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Base of components

  
  
<b>interface [ServerDrivenComponent]({{< relref "-server-driven-component/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[SingleChildComponent]({{< relref "-single-child-component/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Component that has a single child

  
  
<b>interface [SingleChildComponent]({{< relref "-single-child-component/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Style]({{< relref "-style/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



The style class will enable a few visual options to be changed.

  
  
<b>data class [Style]({{< relref "-style/_index.md" >}})(**backgroundColor**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, **cornerRadius**: [CornerRadius]({{< relref "-corner-radius/_index.md" >}})?, **borderColor**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, **borderWidth**: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)?, **size**: [Size]({{< relref "../br.com.zup.beagle.widget.core/-size/_index.md" >}})?, **margin**: [EdgeValue]({{< relref "../br.com.zup.beagle.widget.core/-edge-value/_index.md" >}})?, **padding**: [EdgeValue]({{< relref "../br.com.zup.beagle.widget.core/-edge-value/_index.md" >}})?, **position**: [EdgeValue]({{< relref "../br.com.zup.beagle.widget.core/-edge-value/_index.md" >}})?, **flex**: [Flex]({{< relref "../br.com.zup.beagle.widget.core/-flex/_index.md" >}})?, **positionType**: [PositionType]({{< relref "-position-type/_index.md" >}})?, **display**: [Bind]({{< relref "../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Display]({{< relref "-display/_index.md" >}})>?)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[StyleComponent]({{< relref "-style-component/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Component that hold the style

  
  
<b>interface [StyleComponent]({{< relref "-style-component/_index.md" >}}) : [ServerDrivenComponent]({{< relref "-server-driven-component/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

</tbody>
</table>

