+++
title = "Text"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.components]({{< relref "../_index.md" >}}) / [Text]({{< relref "_index.md" >}}) / [Text]({{< relref "-text.md" >}}) / 



# Text  
  
<b><b>fun [Text]({{< relref "-text.md" >}})(text: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), styleId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, textColor: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, alignment: [TextAlignment]({{< relref "../../br.com.zup.beagle.widget.core/-text-alignment/_index.md" >}})?)</b></b>  




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

alignment
{{% /md %}}
</td>
<td>
{{% md %}}



defines the text content alignment inside the text view.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

styleId
{{% /md %}}
</td>
<td>
{{% md %}}

```java
    will reference a style in your local styles file to be applied on this text view.
    This attribute can be set as null.
```

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

text
{{% /md %}}
</td>
<td>
{{% md %}}



defines the text view content. This attribute must be declared and it cannot be null.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

textColor
{{% /md %}}
</td>
<td>
{{% md %}}



defines the text color natively.


{{% /md %}}
</td>
</tr>

</tbody>
</table>
  
</table>
  
  
<b><b>fun [Text]({{< relref "-text.md" >}})(text: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>, styleId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, textColor: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?, alignment: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[TextAlignment]({{< relref "../../br.com.zup.beagle.widget.core/-text-alignment/_index.md" >}})>?)</b></b>  



