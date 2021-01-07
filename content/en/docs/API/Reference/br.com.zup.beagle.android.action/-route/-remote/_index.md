+++
title = "Remote"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../../_index.md" >}}) / [br.com.zup.beagle.android.action]({{< relref "../../_index.md" >}}) / [Route]({{< relref "../_index.md" >}}) / [Remote]({{< relref "_index.md" >}}) / 



# Remote  
  

Class that takes care of navigation to remote content.

<b>data class [Remote]({{< relref "_index.md" >}})(**url**: [Bind]({{< relref "../../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>, **shouldPrefetch**: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), **fallback**: [Screen]({{< relref "../../../br.com.zup.beagle.android.components.layout/-screen/_index.md" >}})?) : [Route]({{< relref "../_index.md" >}})</b>   


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

fallback
{{% /md %}}
</td>
<td>
{{% md %}}



screen that is rendered in case the request fails.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

shouldPrefetch
{{% /md %}}
</td>
<td>
{{% md %}}



tells Beagle if the navigation request should be previously loaded or not.


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



attribute that contains the navigation endpoint.


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

  <b>fun [Remote]({{< relref "-remote.md" >}})(url: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), shouldPrefetch: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), fallback: [Screen]({{< relref "../../../br.com.zup.beagle.android.components.layout/-screen/_index.md" >}})?)</b>   

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

  

attribute that contains the navigation endpoint.

<b>fun [Remote]({{< relref "-remote.md" >}})(url: [Bind]({{< relref "../../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>, shouldPrefetch: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), fallback: [Screen]({{< relref "../../../br.com.zup.beagle.android.components.layout/-screen/_index.md" >}})?)</b>   

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

  
<b>operator fun [component2]({{< relref "component2.md" >}})(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)</b>  



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

  
<b>operator fun [component3]({{< relref "component3.md" >}})(): [Screen]({{< relref "../../../br.com.zup.beagle.android.components.layout/-screen/_index.md" >}})?</b>  



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

  
<b>fun [copy]({{< relref "copy.md" >}})(url: [Bind]({{< relref "../../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>, shouldPrefetch: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), fallback: [Screen]({{< relref "../../../br.com.zup.beagle.android.components.layout/-screen/_index.md" >}})?): [Route.Remote]({{< relref "_index.md" >}})</b>  



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

[fallback]({{< relref "_index.md#br.com.zup.beagle.android.action/Route.Remote/fallback/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

screen that is rendered in case the request fails.

<b>val [fallback]({{< relref "_index.md#br.com.zup.beagle.android.action/Route.Remote/fallback/#/PointingToDeclaration/" >}}): [Screen]({{< relref "../../../br.com.zup.beagle.android.components.layout/-screen/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[shouldPrefetch]({{< relref "_index.md#br.com.zup.beagle.android.action/Route.Remote/shouldPrefetch/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

tells Beagle if the navigation request should be previously loaded or not.

<b>val [shouldPrefetch]({{< relref "_index.md#br.com.zup.beagle.android.action/Route.Remote/shouldPrefetch/#/PointingToDeclaration/" >}}): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[url]({{< relref "_index.md#br.com.zup.beagle.android.action/Route.Remote/url/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

attribute that contains the navigation endpoint.

<b>val [url]({{< relref "_index.md#br.com.zup.beagle.android.action/Route.Remote/url/#/PointingToDeclaration/" >}}): [Bind]({{< relref "../../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)></b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

