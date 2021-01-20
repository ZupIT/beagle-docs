+++
title = "ScreenRequest"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.view]({{< relref "../_index.md" >}}) / [ScreenRequest]({{< relref "_index.md" >}}) / 



# ScreenRequest  
  

ScreenRequest is used to do requests.

<b>data class [ScreenRequest]({{< relref "_index.md" >}})(**url**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), **method**: [ScreenMethod]({{< relref "../-screen-method/_index.md" >}}), **headers**: [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>, **body**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?) : [Parcelable](https://developer.android.com/reference/kotlin/android/os/Parcelable.html)</b>   


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

body
{{% /md %}}
</td>
<td>
{{% md %}}



Content that will be deliver with the request.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

headers
{{% /md %}}
</td>
<td>
{{% md %}}



Header items for the request.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

method
{{% /md %}}
</td>
<td>
{{% md %}}



HTTP method.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

url
{{% /md %}}
</td>
<td>
{{% md %}}



Server URL.


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

[ScreenRequest]({{< relref "-screen-request.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Server URL.

<b>fun [ScreenRequest]({{< relref "-screen-request.md" >}})(url: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), method: [ScreenMethod]({{< relref "../-screen-method/_index.md" >}}), headers: [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>, body: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?)</b>   

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

[component1]({{< relref "component1.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component1]({{< relref "component1.md" >}})(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)</b>  



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

  
<b>operator fun [component2]({{< relref "component2.md" >}})(): [ScreenMethod]({{< relref "../-screen-method/_index.md" >}})</b>  



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

  
<b>operator fun [component3]({{< relref "component3.md" >}})(): [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)></b>  



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

  
<b>operator fun [component4]({{< relref "component4.md" >}})(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>  



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

  
<b>fun [copy]({{< relref "copy.md" >}})(url: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), method: [ScreenMethod]({{< relref "../-screen-method/_index.md" >}}), headers: [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>, body: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?): [ScreenRequest]({{< relref "_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[describeContents](https://developer.android.com/reference/kotlin/android/os/Parcelable.html#describecontents)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>abstract override fun [describeContents](https://developer.android.com/reference/kotlin/android/os/Parcelable.html#describecontents)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)</b>  



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

<tr>
<td>
{{% md %}}

[writeToParcel](https://developer.android.com/reference/kotlin/android/os/Parcelable.html#writetoparcel)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>abstract override fun [writeToParcel](https://developer.android.com/reference/kotlin/android/os/Parcelable.html#writetoparcel)(p0: [Parcel](https://developer.android.com/reference/kotlin/android/os/Parcel.html), p1: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))</b>  



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

[body]({{< relref "_index.md#br.com.zup.beagle.android.view/ScreenRequest/body/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Content that will be deliver with the request.

<b>val [body]({{< relref "_index.md#br.com.zup.beagle.android.view/ScreenRequest/body/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[headers]({{< relref "_index.md#br.com.zup.beagle.android.view/ScreenRequest/headers/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Header items for the request.

<b>val [headers]({{< relref "_index.md#br.com.zup.beagle.android.view/ScreenRequest/headers/#/PointingToDeclaration/" >}}): [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)></b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[method]({{< relref "_index.md#br.com.zup.beagle.android.view/ScreenRequest/method/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

HTTP method.

<b>val [method]({{< relref "_index.md#br.com.zup.beagle.android.view/ScreenRequest/method/#/PointingToDeclaration/" >}}): [ScreenMethod]({{< relref "../-screen-method/_index.md" >}})</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[url]({{< relref "_index.md#br.com.zup.beagle.android.view/ScreenRequest/url/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Server URL.

<b>val [url]({{< relref "_index.md#br.com.zup.beagle.android.view/ScreenRequest/url/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

