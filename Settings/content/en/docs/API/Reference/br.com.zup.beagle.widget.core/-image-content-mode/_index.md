+++
title = "ImageContentMode"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.widget.core]({{< relref "../_index.md" >}}) / [ImageContentMode]({{< relref "_index.md" >}}) / 



# ImageContentMode  
  

defines how the image fits the view it's in

<b>enum [ImageContentMode]({{< relref "_index.md" >}}) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)<[ImageContentMode]({{< relref "_index.md" >}})> </b>   


## Entries  
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

[FIT_XY]({{< relref "-f-i-t_-x-y/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Compute a scale that will maintain the original aspect ratio, but will also ensure that it fits entirely inside the destination view. At least one axis (X or Y) will fit exactly. The result is centered inside the destination.

[FIT_XY]({{< relref "-f-i-t_-x-y/_index.md" >}})()  
  
   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[FIT_CENTER]({{< relref "-f-i-t_-c-e-n-t-e-r/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Compute a scale that will maintain the original aspect ratio, but will also ensure that it fits entirely inside the destination view. At least one axis (X or Y) will fit exactly. The result is centered inside the destination.

[FIT_CENTER]({{< relref "-f-i-t_-c-e-n-t-e-r/_index.md" >}})()  
  
   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[CENTER_CROP]({{< relref "-c-e-n-t-e-r_-c-r-o-p/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or larger than the corresponding dimension of the view (minus padding).

[CENTER_CROP]({{< relref "-c-e-n-t-e-r_-c-r-o-p/_index.md" >}})()  
  
   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[CENTER]({{< relref "-c-e-n-t-e-r/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Center the image in the view but perform no scaling.

[CENTER]({{< relref "-c-e-n-t-e-r/_index.md" >}})()  
  
   

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

[compareTo](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/compare-to.html)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator override fun [compareTo](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/compare-to.html)(other: [ImageContentMode]({{< relref "_index.md" >}})): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[equals](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/equals.html)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator override fun [equals](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/equals.html)(other: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)?): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[finalize](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/finalize.html)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>override fun [finalize](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/finalize.html)()</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[getDeclaringClass](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/get-declaring-class.html)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>override fun [getDeclaringClass](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/get-declaring-class.html)(): [Class](https://developer.android.com/reference/kotlin/java/lang/Class.html)<[ImageContentMode]({{< relref "_index.md" >}})></b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[hashCode](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/hash-code.html)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>override fun [hashCode](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/hash-code.html)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[toString](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/to-string.html)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [toString](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/to-string.html)(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)</b>  



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

[name]({{< relref "_index.md#br.com.zup.beagle.widget.core/ImageContentMode/name/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>override val [name]({{< relref "_index.md#br.com.zup.beagle.widget.core/ImageContentMode/name/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ordinal]({{< relref "_index.md#br.com.zup.beagle.widget.core/ImageContentMode/ordinal/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>override val [ordinal]({{< relref "_index.md#br.com.zup.beagle.widget.core/ImageContentMode/ordinal/#/PointingToDeclaration/" >}}): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

