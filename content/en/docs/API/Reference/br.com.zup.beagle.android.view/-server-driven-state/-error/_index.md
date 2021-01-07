+++
title = "Error"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../../_index.md" >}}) / [br.com.zup.beagle.android.view]({{< relref "../../_index.md" >}}) / [ServerDrivenState]({{< relref "../_index.md" >}}) / [Error]({{< relref "_index.md" >}}) / 



# Error  
  

indicates an error state while fetching a server-driven component

<b>open class [Error]({{< relref "_index.md" >}})(**throwable**: [Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html), **retry**: () -> [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)) : [ServerDrivenState]({{< relref "../_index.md" >}})</b>   


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

retry
{{% /md %}}
</td>
<td>
{{% md %}}



action to be performed when an error occurs


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

throwable
{{% /md %}}
</td>
<td>
{{% md %}}



error occurred. See {@link br.com.zup.beagle.android.exception.BeagleApiException}, See {@link br.com.zup.beagle.android.exception.BeagleException}


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

[Error]({{< relref "-error.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

error occurred. See {@link br.com.zup.beagle.android.exception.BeagleApiException}, See {@link br.com.zup.beagle.android.exception.BeagleException}

<b>fun [Error]({{< relref "-error.md" >}})(throwable: [Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html), retry: () -> [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html))</b>   

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

[retry]({{< relref "_index.md#br.com.zup.beagle.android.view/ServerDrivenState.Error/retry/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

action to be performed when an error occurs

<b>val [retry]({{< relref "_index.md#br.com.zup.beagle.android.view/ServerDrivenState.Error/retry/#/PointingToDeclaration/" >}}): () -> [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[throwable]({{< relref "_index.md#br.com.zup.beagle.android.view/ServerDrivenState.Error/throwable/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

error occurred. See {@link br.com.zup.beagle.android.exception.BeagleApiException}, See {@link br.com.zup.beagle.android.exception.BeagleException}

<b>val [throwable]({{< relref "_index.md#br.com.zup.beagle.android.view/ServerDrivenState.Error/throwable/#/PointingToDeclaration/" >}}): [Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>


## Inheritors  
<table>
  
<thead>
<tr>
<th>
Name  
</th>
  
</tr>
</thead>
<tbody>
<tr>
<td>
{{% md %}}

[ServerDrivenState]({{< relref "../-form-error/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ServerDrivenState]({{< relref "../-web-view-error/_index.md" >}})
{{% /md %}}
</td>
</tr>

</tbody>
</table>

