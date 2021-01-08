+++
title = "BeagleConfig"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.setup]({{< relref "../_index.md" >}}) / [BeagleConfig]({{< relref "_index.md" >}}) / 



# BeagleConfig  
  

Interface that provides initial beagle configuration attributes.

<b>interface [BeagleConfig]({{< relref "_index.md" >}})</b>   


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

[baseUrl]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleConfig/baseUrl/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Informs the base URL used in Beagle in the application.

<b>abstract val [baseUrl]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleConfig/baseUrl/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[cache]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleConfig/cache/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Object responsible for managing the cache of Beagle requests.

<b>abstract val [cache]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleConfig/cache/#/PointingToDeclaration/" >}}): [Cache]({{< relref "../-cache/_index.md" >}})</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[environment]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleConfig/environment/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Attribute responsible for informing Beagle about the current build status of the application.

<b>abstract val [environment]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleConfig/environment/#/PointingToDeclaration/" >}}): [Environment]({{< relref "../-environment/_index.md" >}})</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[isLoggingEnabled]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleConfig/isLoggingEnabled/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Attribute that enables or disables all logs that Beagle generates.

<b>abstract val [isLoggingEnabled]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleConfig/isLoggingEnabled/#/PointingToDeclaration/" >}}): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

