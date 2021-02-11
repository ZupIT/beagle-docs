+++
title = "BeagleLogger"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.logger]({{< relref "../_index.md" >}}) / [BeagleLogger]({{< relref "_index.md" >}}) / 



# BeagleLogger  
  

API for sending log output.

<b>interface [BeagleLogger]({{< relref "_index.md" >}})</b>   


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

[error]({{< relref "error.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Function to pass error message.

  
  
<b>abstract fun [error]({{< relref "error.md" >}})(message: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))</b>  




Function to pass a throwable and error message.

  
  
<b>abstract fun [error]({{< relref "error.md" >}})(message: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), throwable: [Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html))</b>  



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

[info]({{< relref "info.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Function for passing an information message.

  
  
<b>abstract fun [info]({{< relref "info.md" >}})(message: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))</b>  



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

[warning]({{< relref "warning.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Function to pass warning message.

  
  
<b>abstract fun [warning]({{< relref "warning.md" >}})(message: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))</b>  



{{% /md %}}
</td>
</tr>

</tbody>
</table>

