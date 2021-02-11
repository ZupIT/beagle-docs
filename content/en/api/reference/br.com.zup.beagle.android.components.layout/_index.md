+++
title = "br.com.zup.beagle.android.components.layout"
draft = false
toc = false
type = "reference"
linktitle = "br.com.zup.beagle.android.components.layout"
[menu.docs]
  parent = "hw-security-reference"
  weight = 1
+++

[beagle]({{< relref "../_index.md" >}}) / [br.com.zup.beagle.android.components.layout]({{< relref "_index.md" >}}) / 



# Package br.com.zup.beagle.android.components.layout  


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

[ComposeComponent]({{< relref "-compose-component/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



helps with organization,  maintenance and code reuse. It does not have its own functionality and is exclusive to the backend.

  
  
<b>abstract class [ComposeComponent]({{< relref "-compose-component/_index.md" >}}) : [WidgetView]({{< relref "../br.com.zup.beagle.android.widget/-widget-view/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Container]({{< relref "-container/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



The container component is a general container that can hold other components inside.

  
  
<b>data class [Container]({{< relref "-container/_index.md" >}})(**children**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})>, **context**: [ContextData]({{< relref "../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?, **onInit**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../br.com.zup.beagle.android.action/-action/_index.md" >}})>?) : [WidgetView]({{< relref "../br.com.zup.beagle.android.widget/-widget-view/_index.md" >}}), [OnInitiableComponent]({{< relref "../br.com.zup.beagle.android.components/-on-initiable-component/_index.md" >}}), [ContextComponent]({{< relref "../br.com.zup.beagle.android.context/-context-component/_index.md" >}}), [MultiChildComponent]({{< relref "../br.com.zup.beagle.core/-multi-child-component/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[NavigationBar]({{< relref "-navigation-bar/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Typically displayed at the top of the window, containing buttons for navigating within a hierarchy of screens

  
  
<b>data class [NavigationBar]({{< relref "-navigation-bar/_index.md" >}})(**title**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), **showBackButton**: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), **styleId**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, **navigationBarItems**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[NavigationBarItem]({{< relref "-navigation-bar-item/_index.md" >}})>?, **backButtonAccessibility**: [Accessibility]({{< relref "../br.com.zup.beagle.core/-accessibility/_index.md" >}})?)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[NavigationBarItem]({{< relref "-navigation-bar-item/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Defines a List of navigation bar items.

  
  
<b>data class [NavigationBarItem]({{< relref "-navigation-bar-item/_index.md" >}})(**text**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), **image**: [ImagePath.Local]({{< relref "../br.com.zup.beagle.android.components/-image-path/-local/_index.md" >}})?, **action**: [Action]({{< relref "../br.com.zup.beagle.android.action/-action/_index.md" >}}), **accessibility**: [Accessibility]({{< relref "../br.com.zup.beagle.core/-accessibility/_index.md" >}})?) : [IdentifierComponent]({{< relref "../br.com.zup.beagle.core/-identifier-component/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[SafeArea]({{< relref "-safe-area/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}





The SafeArea will enable Safe areas to help you place your views within the visible portion of the overall interface.



<p> Note: This class is only used to iOS SafeArea </p>



  
  
<b>data class [SafeArea]({{< relref "-safe-area/_index.md" >}})(**top**: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)?, **leading**: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)?, **bottom**: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)?, **trailing**: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)?)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Screen]({{< relref "-screen/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



The screen element will help you define the screen view structure. By using this component you can define configurations like whether or not you want to use safe areas or display a tool bar/navigation bar.

  
  
<b>data class [Screen]({{< relref "-screen/_index.md" >}}) : [ScreenAnalytics]({{< relref "../br.com.zup.beagle.analytics/-screen-analytics/_index.md" >}}), [ContextComponent]({{< relref "../br.com.zup.beagle.android.context/-context-component/_index.md" >}}), [SingleChildComponent]({{< relref "../br.com.zup.beagle.core/-single-child-component/_index.md" >}}), [IdentifierComponent]({{< relref "../br.com.zup.beagle.core/-identifier-component/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ScrollView]({{< relref "-scroll-view/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Component is a specialized container that will display its components in a Scroll

  
  
<b>data class [ScrollView]({{< relref "-scroll-view/_index.md" >}})(**children**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})>, **scrollDirection**: [ScrollAxis]({{< relref "../br.com.zup.beagle.widget.core/-scroll-axis/_index.md" >}})?, **scrollBarEnabled**: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)?, **context**: [ContextData]({{< relref "../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?) : [WidgetView]({{< relref "../br.com.zup.beagle.android.widget/-widget-view/_index.md" >}}), [ContextComponent]({{< relref "../br.com.zup.beagle.android.context/-context-component/_index.md" >}}), [MultiChildComponent]({{< relref "../br.com.zup.beagle.core/-multi-child-component/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

</tbody>
</table>

