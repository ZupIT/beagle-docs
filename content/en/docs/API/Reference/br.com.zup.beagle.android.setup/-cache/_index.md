+++
title = "Cache"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.setup]({{< relref "../_index.md" >}}) / [Cache]({{< relref "_index.md" >}}) / 



# Cache  
  

Object responsible for managing the cache of Beagle requests.

<b>data class [Cache]({{< relref "_index.md" >}})(**enabled**: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), **maxAge**: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), **memoryMaximumCapacity**: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), **size**: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))</b>   


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

enabled
{{% /md %}}
</td>
<td>
{{% md %}}



Enables or disables memory and disk caching.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

maxAge
{{% /md %}}
</td>
<td>
{{% md %}}



Time in seconds that memory cache will live.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

memoryMaximumCapacity
{{% /md %}}
</td>
<td>
{{% md %}}



Memory LRU cache size. It represents number of screens that will be in memory.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

size
{{% /md %}}
</td>
<td>
{{% md %}}



Memory LRU cache size.


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

[Cache]({{< relref "-cache.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>~~fun~~ [~~Cache~~]({{< relref "-cache.md" >}})~~(~~~~enabled~~~~:~~ [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)~~,~~ ~~maxAge~~~~:~~ [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)~~,~~ ~~memoryMaximumCapacity~~~~:~~ [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)~~)~~</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Cache]({{< relref "-cache.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Enables or disables memory and disk caching.

<b>fun [Cache]({{< relref "-cache.md" >}})(enabled: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), maxAge: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), memoryMaximumCapacity: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), size: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))</b>   

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

  
<b>operator fun [component1]({{< relref "component1.md" >}})(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)</b>  



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

  
<b>operator fun [component2]({{< relref "component2.md" >}})(): [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)</b>  



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

  
<b>operator fun [component3]({{< relref "component3.md" >}})(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)</b>  



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

  
<b>operator fun [component4]({{< relref "component4.md" >}})(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)</b>  



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

  
<b>fun [copy]({{< relref "copy.md" >}})(enabled: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), maxAge: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), memoryMaximumCapacity: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), size: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [Cache]({{< relref "_index.md" >}})</b>  



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

[enabled]({{< relref "_index.md#br.com.zup.beagle.android.setup/Cache/enabled/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Enables or disables memory and disk caching.

<b>val [enabled]({{< relref "_index.md#br.com.zup.beagle.android.setup/Cache/enabled/#/PointingToDeclaration/" >}}): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[maxAge]({{< relref "_index.md#br.com.zup.beagle.android.setup/Cache/maxAge/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Time in seconds that memory cache will live.

<b>val [maxAge]({{< relref "_index.md#br.com.zup.beagle.android.setup/Cache/maxAge/#/PointingToDeclaration/" >}}): [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[memoryMaximumCapacity]({{< relref "_index.md#br.com.zup.beagle.android.setup/Cache/memoryMaximumCapacity/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Memory LRU cache size. It represents number of screens that will be in memory.

<b>~~val~~ [~~memoryMaximumCapacity~~]({{< relref "_index.md#br.com.zup.beagle.android.setup/Cache/memoryMaximumCapacity/#/PointingToDeclaration/" >}})~~:~~ [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[size]({{< relref "_index.md#br.com.zup.beagle.android.setup/Cache/size/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Memory LRU cache size.

<b>val [size]({{< relref "_index.md#br.com.zup.beagle.android.setup/Cache/size/#/PointingToDeclaration/" >}}): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

