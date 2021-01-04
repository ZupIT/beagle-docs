+++
title = "Image"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.components]({{< relref "../_index.md" >}}) / [Image]({{< relref "_index.md" >}}) / 



# Image  
  

Define an image view using the server driven information received through Beagle.

<b>data class [Image]({{< relref "_index.md" >}})(**path**: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[ImagePath]({{< relref "../-image-path/_index.md" >}})>, **mode**: [ImageContentMode]({{< relref "../../br.com.zup.beagle.widget.core/-image-content-mode/_index.md" >}})?) : [WidgetView]({{< relref "../../br.com.zup.beagle.android.widget/-widget-view/_index.md" >}})</b>   


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

mode
{{% /md %}}
</td>
<td>
{{% md %}}



defines how the declared image will fit the view.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

path
{{% /md %}}
</td>
<td>
{{% md %}}



defines where the source of the image is


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

[Image]({{< relref "-image.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>fun [Image]({{< relref "-image.md" >}})(path: [ImagePath]({{< relref "../-image-path/_index.md" >}}), mode: [ImageContentMode]({{< relref "../../br.com.zup.beagle.widget.core/-image-content-mode/_index.md" >}})?)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Image]({{< relref "-image.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

defines where the source of the image is

<b>fun [Image]({{< relref "-image.md" >}})(path: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[ImagePath]({{< relref "../-image-path/_index.md" >}})>, mode: [ImageContentMode]({{< relref "../../br.com.zup.beagle.widget.core/-image-content-mode/_index.md" >}})?)</b>   

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

  
  
<b>open override fun [buildView]({{< relref "build-view.md" >}})(rootView: [RootView]({{< relref "../../br.com.zup.beagle.android.widget/-root-view/_index.md" >}})): [View](https://developer.android.com/reference/kotlin/android/view/View.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component1]({{< relref "component1.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component1]({{< relref "component1.md" >}})(): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[ImagePath]({{< relref "../-image-path/_index.md" >}})></b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component2]({{< relref "component2.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component2]({{< relref "component2.md" >}})(): [ImageContentMode]({{< relref "../../br.com.zup.beagle.widget.core/-image-content-mode/_index.md" >}})?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[copy]({{< relref "copy.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>fun [copy]({{< relref "copy.md" >}})(path: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[ImagePath]({{< relref "../-image-path/_index.md" >}})>, mode: [ImageContentMode]({{< relref "../../br.com.zup.beagle.widget.core/-image-content-mode/_index.md" >}})?): [Image]({{< relref "_index.md" >}})</b>  



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

[accessibility]({{< relref "_index.md#br.com.zup.beagle.android.components/Image/accessibility/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

attribute will enable a textual information to explain the view content in case a screen reader is use

<b>open override var [accessibility]({{< relref "_index.md#br.com.zup.beagle.android.components/Image/accessibility/#/PointingToDeclaration/" >}}): [Accessibility]({{< relref "../../br.com.zup.beagle.core/-accessibility/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[id]({{< relref "_index.md#br.com.zup.beagle.android.components/Image/id/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

use to identifier the current view

<b>open override var [id]({{< relref "_index.md#br.com.zup.beagle.android.components/Image/id/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[mode]({{< relref "_index.md#br.com.zup.beagle.android.components/Image/mode/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

defines how the declared image will fit the view.

<b>val [mode]({{< relref "_index.md#br.com.zup.beagle.android.components/Image/mode/#/PointingToDeclaration/" >}}): [ImageContentMode]({{< relref "../../br.com.zup.beagle.widget.core/-image-content-mode/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[path]({{< relref "_index.md#br.com.zup.beagle.android.components/Image/path/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

defines where the source of the image is

<b>val [path]({{< relref "_index.md#br.com.zup.beagle.android.components/Image/path/#/PointingToDeclaration/" >}}): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[ImagePath]({{< relref "../-image-path/_index.md" >}})></b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[style]({{< relref "_index.md#br.com.zup.beagle.android.components/Image/style/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

attribute will enable a few visual options to be changed.

<b>open override var [style]({{< relref "_index.md#br.com.zup.beagle.android.components/Image/style/#/PointingToDeclaration/" >}}): [Style]({{< relref "../../br.com.zup.beagle.core/-style/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

