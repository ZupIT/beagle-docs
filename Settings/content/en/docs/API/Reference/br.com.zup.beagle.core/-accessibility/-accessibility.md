+++
title = "Accessibility"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.core]({{< relref "../_index.md" >}}) / [Accessibility]({{< relref "_index.md" >}}) / [Accessibility]({{< relref "-accessibility.md" >}}) / 



# Accessibility  


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
  
  
<b><b>fun [Accessibility]({{< relref "-accessibility.md" >}})(accessible: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), accessibilityLabel: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?)</b></b>  



