+++
title = "Remote"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../../_index.md" >}}) / [br.com.zup.beagle.android.components]({{< relref "../../_index.md" >}}) / [ImagePath]({{< relref "../_index.md" >}}) / [Remote]({{< relref "_index.md" >}}) / 



# Remote  
  

Define an image whose data needs to be downloaded from a source external to the client app.

<b>data class [Remote]({{< relref "_index.md" >}})(**url**: [Bind]({{< relref "../../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>, **placeholder**: [ImagePath.Local]({{< relref "../-local/_index.md" >}})?) : [ImagePath]({{< relref "../_index.md" >}})</b>   


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

placeholder
{{% /md %}}
</td>
<td>
{{% md %}}



reference an image natively in your mobile app local styles file to be used as placeholder.


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



reference the path where the image should be fetched from.


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

[Remote]({{< relref "-remote.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>fun [Remote]({{< relref "-remote.md" >}})(url: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), placeholder: [ImagePath.Local]({{< relref "../-local/_index.md" >}})?)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Remote]({{< relref "-remote.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

reference the path where the image should be fetched from.

<b>fun [Remote]({{< relref "-remote.md" >}})(url: [Bind]({{< relref "../../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>, placeholder: [ImagePath.Local]({{< relref "../-local/_index.md" >}})?)</b>   

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

  
<b>operator fun [component1]({{< relref "component1.md" >}})(): [Bind]({{< relref "../../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)></b>  



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

  
<b>operator fun [component2]({{< relref "component2.md" >}})(): [ImagePath.Local]({{< relref "../-local/_index.md" >}})?</b>  



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

  
<b>fun [copy]({{< relref "copy.md" >}})(url: [Bind]({{< relref "../../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>, placeholder: [ImagePath.Local]({{< relref "../-local/_index.md" >}})?): [ImagePath.Remote]({{< relref "_index.md" >}})</b>  



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

[placeholder]({{< relref "_index.md#br.com.zup.beagle.android.components/ImagePath.Remote/placeholder/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

reference an image natively in your mobile app local styles file to be used as placeholder.

<b>val [placeholder]({{< relref "_index.md#br.com.zup.beagle.android.components/ImagePath.Remote/placeholder/#/PointingToDeclaration/" >}}): [ImagePath.Local]({{< relref "../-local/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[url]({{< relref "_index.md#br.com.zup.beagle.android.components/ImagePath.Remote/url/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

reference the path where the image should be fetched from.

<b>val [url]({{< relref "_index.md#br.com.zup.beagle.android.components/ImagePath.Remote/url/#/PointingToDeclaration/" >}}): [Bind]({{< relref "../../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)></b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

