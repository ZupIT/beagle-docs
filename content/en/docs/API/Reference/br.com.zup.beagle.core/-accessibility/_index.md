+++
title = "Accessibility"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.core]({{< relref "../_index.md" >}}) / [Accessibility]({{< relref "_index.md" >}}) / 



# Accessibility  
  

The accessibility will enable a textual information to explain the view content in case a screen reader is used.

<b>data class [Accessibility]({{< relref "_index.md" >}})(**accessible**: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), **accessibilityLabel**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?)</b>   


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

accessibilityLabel
{{% /md %}}
</td>
<td>
{{% md %}}

```java
    that will hold the textual information to be read by VoiceOver programs.
    By enabling this, the VoiceOver will read this if a user selects this view,
    them he will now where he is on the app.
```

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

accessible
{{% /md %}}
</td>
<td>
{{% md %}}

```java
    that will inform when the accessibilityLabel is available.
    By default is kept as true and it indicates that the view is an accessibility element.
```

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

[Accessibility]({{< relref "-accessibility.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  ```java
    that will inform when the accessibilityLabel is available.
    By default is kept as true and it indicates that the view is an accessibility element.
```
<b>fun [Accessibility]({{< relref "-accessibility.md" >}})(accessible: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), accessibilityLabel: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?)</b>   

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

  
<b>operator fun [component2]({{< relref "component2.md" >}})(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>  



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

  
<b>fun [copy]({{< relref "copy.md" >}})(accessible: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), accessibilityLabel: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?): [Accessibility]({{< relref "_index.md" >}})</b>  



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

[accessibilityLabel]({{< relref "_index.md#br.com.zup.beagle.core/Accessibility/accessibilityLabel/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  ```java
    that will hold the textual information to be read by VoiceOver programs.
    By enabling this, the VoiceOver will read this if a user selects this view,
    them he will now where he is on the app.
```
<b>val [accessibilityLabel]({{< relref "_index.md#br.com.zup.beagle.core/Accessibility/accessibilityLabel/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[accessible]({{< relref "_index.md#br.com.zup.beagle.core/Accessibility/accessible/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  ```java
    that will inform when the accessibilityLabel is available.
    By default is kept as true and it indicates that the view is an accessibility element.
```
<b>val [accessible]({{< relref "_index.md#br.com.zup.beagle.core/Accessibility/accessible/#/PointingToDeclaration/" >}}): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

