+++
title = "PageIndicator"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.components.page]({{< relref "../_index.md" >}}) / [PageIndicator]({{< relref "_index.md" >}}) / 



# PageIndicator  
  

The PageView component is a specialized container to hold pages (views) that will be displayed horizontally.

<b>class [PageIndicator]({{< relref "_index.md" >}})(**selectedColor**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), **unselectedColor**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), **numberOfPages**: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)?, **currentPage**: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)>?) : [WidgetView]({{< relref "../../br.com.zup.beagle.android.widget/-widget-view/_index.md" >}}), [PageIndicatorComponent]({{< relref "../-page-indicator-component/_index.md" >}})</b>   


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

currentPage
{{% /md %}}
</td>
<td>
{{% md %}}



Integer number that identifies that selected


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

numberOfPages
{{% /md %}}
</td>
<td>
{{% md %}}



Numbers of pages that will contain.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

selectedColor
{{% /md %}}
</td>
<td>
{{% md %}}



this is a string value and it must be filled as HEX (Hexadecimal)


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

unselectedColor
{{% /md %}}
</td>
<td>
{{% md %}}



this is a string value and it must be filled as HEX (Hexadecimal)


{{% /md %}}
</td>
</tr>

</tbody>
</table>
  
</table>


## Constructors  
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

[PageIndicator]({{< relref "-page-indicator.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>fun [PageIndicator]({{< relref "-page-indicator.md" >}})(selectedColor: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), unselectedColor: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), numberOfPages: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)?, currentPage: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[PageIndicator]({{< relref "-page-indicator.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

this is a string value and it must be filled as HEX (Hexadecimal)

<b>fun [PageIndicator]({{< relref "-page-indicator.md" >}})(selectedColor: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), unselectedColor: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), numberOfPages: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)?, currentPage: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)>?)</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>


## Functions  
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

[buildView]({{< relref "build-view.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



This function is called to convert your server-driven component to a UI View in Android

  
  
<b>open override fun [buildView]({{< relref "build-view.md" >}})(rootView: [RootView]({{< relref "../../br.com.zup.beagle.android.widget/-root-view/_index.md" >}})): [BeaglePageIndicatorView]({{< relref "../../br.com.zup.beagle.android.view.custom/-beagle-page-indicator-view/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[equals](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/equals.html)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open operator override fun [equals](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/equals.html)(other: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)?): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[hashCode](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/hash-code.html)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [hashCode](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/hash-code.html)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[initPageView]({{< relref "init-page-view.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [initPageView]({{< relref "init-page-view.md" >}})(pageIndicatorOutput: [PageIndicatorOutput]({{< relref "../-page-indicator-output/_index.md" >}}))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onItemUpdated]({{< relref "on-item-updated.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [onItemUpdated]({{< relref "on-item-updated.md" >}})(newIndex: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[setCount]({{< relref "set-count.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [setCount]({{< relref "set-count.md" >}})(pages: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[toString](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/to-string.html)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [toString](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/to-string.html)(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)</b>  



{{% /md %}}
</td>
</tr>

</tbody>
</table>


## Properties  
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

[accessibility]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageIndicator/accessibility/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

attribute will enable a textual information to explain the view content in case a screen reader is use

<b>open override var [accessibility]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageIndicator/accessibility/#/PointingToDeclaration/" >}}): [Accessibility]({{< relref "../../br.com.zup.beagle.core/-accessibility/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[currentPage]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageIndicator/currentPage/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Integer number that identifies that selected

<b>var [currentPage]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageIndicator/currentPage/#/PointingToDeclaration/" >}}): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)>?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[id]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageIndicator/id/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

use to identifier the current view

<b>open override var [id]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageIndicator/id/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[numberOfPages]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageIndicator/numberOfPages/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Numbers of pages that will contain.

<b>var [numberOfPages]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageIndicator/numberOfPages/#/PointingToDeclaration/" >}}): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[selectedColor]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageIndicator/selectedColor/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

this is a string value and it must be filled as HEX (Hexadecimal)

<b>val [selectedColor]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageIndicator/selectedColor/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[style]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageIndicator/style/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

attribute will enable a few visual options to be changed.

<b>open override var [style]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageIndicator/style/#/PointingToDeclaration/" >}}): [Style]({{< relref "../../br.com.zup.beagle.core/-style/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[unselectedColor]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageIndicator/unselectedColor/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

this is a string value and it must be filled as HEX (Hexadecimal)

<b>val [unselectedColor]({{< relref "_index.md#br.com.zup.beagle.android.components.page/PageIndicator/unselectedColor/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

