+++
title = "Text"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.components]({{< relref "../_index.md" >}}) / [Text]({{< relref "_index.md" >}}) / 



# Text  
  

A text widget will define a text view natively using the server driven information received through Beagle.

<b>data class [Text]({{< relref "_index.md" >}})(**text**: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>, **styleId**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, **textColor**: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?, **alignment**: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[TextAlignment]({{< relref "../../br.com.zup.beagle.widget.core/-text-alignment/_index.md" >}})>?) : [WidgetView]({{< relref "../../br.com.zup.beagle.android.widget/-widget-view/_index.md" >}})</b>   


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

alignment
{{% /md %}}
</td>
<td>
{{% md %}}



defines the text content alignment inside the text view.


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

```java
    will reference a style in your local styles file to be applied on this text view.
    This attribute can be set as null.
```

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



defines the text view content. This attribute must be declared and it cannot be null.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

textColor
{{% /md %}}
</td>
<td>
{{% md %}}



defines the text color natively.


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

[Text]({{< relref "-text.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>fun [Text]({{< relref "-text.md" >}})(text: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), styleId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, textColor: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, alignment: [TextAlignment]({{< relref "../../br.com.zup.beagle.widget.core/-text-alignment/_index.md" >}})?)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Text]({{< relref "-text.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

defines the text view content. This attribute must be declared and it cannot be null.

<b>fun [Text]({{< relref "-text.md" >}})(text: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>, styleId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, textColor: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?, alignment: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[TextAlignment]({{< relref "../../br.com.zup.beagle.widget.core/-text-alignment/_index.md" >}})>?)</b>   

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

  
<b>operator fun [component1]({{< relref "component1.md" >}})(): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)></b>  



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

  
<b>operator fun [component2]({{< relref "component2.md" >}})(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component3]({{< relref "component3.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component3]({{< relref "component3.md" >}})(): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component4]({{< relref "component4.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component4]({{< relref "component4.md" >}})(): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[TextAlignment]({{< relref "../../br.com.zup.beagle.widget.core/-text-alignment/_index.md" >}})>?</b>  



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

  
<b>fun [copy]({{< relref "copy.md" >}})(text: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>, styleId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, textColor: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?, alignment: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[TextAlignment]({{< relref "../../br.com.zup.beagle.widget.core/-text-alignment/_index.md" >}})>?): [Text]({{< relref "_index.md" >}})</b>  



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

[accessibility]({{< relref "_index.md#br.com.zup.beagle.android.components/Text/accessibility/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

attribute will enable a textual information to explain the view content in case a screen reader is use

<b>open override var [accessibility]({{< relref "_index.md#br.com.zup.beagle.android.components/Text/accessibility/#/PointingToDeclaration/" >}}): [Accessibility]({{< relref "../../br.com.zup.beagle.core/-accessibility/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[alignment]({{< relref "_index.md#br.com.zup.beagle.android.components/Text/alignment/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

defines the text content alignment inside the text view.

<b>val [alignment]({{< relref "_index.md#br.com.zup.beagle.android.components/Text/alignment/#/PointingToDeclaration/" >}}): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[TextAlignment]({{< relref "../../br.com.zup.beagle.widget.core/-text-alignment/_index.md" >}})>?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[id]({{< relref "_index.md#br.com.zup.beagle.android.components/Text/id/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

use to identifier the current view

<b>open override var [id]({{< relref "_index.md#br.com.zup.beagle.android.components/Text/id/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[style]({{< relref "_index.md#br.com.zup.beagle.android.components/Text/style/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

attribute will enable a few visual options to be changed.

<b>open override var [style]({{< relref "_index.md#br.com.zup.beagle.android.components/Text/style/#/PointingToDeclaration/" >}}): [Style]({{< relref "../../br.com.zup.beagle.core/-style/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[styleId]({{< relref "_index.md#br.com.zup.beagle.android.components/Text/styleId/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  ```java
    will reference a style in your local styles file to be applied on this text view.
    This attribute can be set as null.
```
<b>val [styleId]({{< relref "_index.md#br.com.zup.beagle.android.components/Text/styleId/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[text]({{< relref "_index.md#br.com.zup.beagle.android.components/Text/text/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

defines the text view content. This attribute must be declared and it cannot be null.

<b>val [text]({{< relref "_index.md#br.com.zup.beagle.android.components/Text/text/#/PointingToDeclaration/" >}}): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)></b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[textColor]({{< relref "_index.md#br.com.zup.beagle.android.components/Text/textColor/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

defines the text color natively.

<b>val [textColor]({{< relref "_index.md#br.com.zup.beagle.android.components/Text/textColor/#/PointingToDeclaration/" >}}): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

