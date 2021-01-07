+++
title = "TextInput"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.components]({{< relref "../_index.md" >}}) / [TextInput]({{< relref "_index.md" >}}) / [TextInput]({{< relref "-text-input.md" >}}) / 



# TextInput  
  
<b><b>fun [TextInput]({{< relref "-text-input.md" >}})(value: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, placeholder: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, disabled: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)?, readOnly: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)?, type: [TextInputType]({{< relref "../../br.com.zup.beagle.widget.core/-text-input-type/_index.md" >}})?, hidden: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)?, styleId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, onChange: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, onFocus: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, onBlur: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?)</b></b>  




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

disabled
{{% /md %}}
</td>
<td>
{{% md %}}



Enables or disables the field.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

hidden
{{% /md %}}
</td>
<td>
{{% md %}}



Enables the component to be visible or not.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

onBlur
{{% /md %}}
</td>
<td>
{{% md %}}



Action array that this field can trigger when its focus is removed


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

onChange
{{% /md %}}
</td>
<td>
{{% md %}}



Actions array that this field can trigger when its value is altered.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

onFocus
{{% /md %}}
</td>
<td>
{{% md %}}



Actions array that this field can trigger when this field is on focus.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

placeholder
{{% /md %}}
</td>
<td>
{{% md %}}



The Placeholder is a text that is displayed when nothing has been entered in the editable text field.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

readOnly
{{% /md %}}
</td>
<td>
{{% md %}}



Check if the Input will be editable or read only.


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



This attribute receives a key that is registered in the Design System of each platform that customizes the component.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

type
{{% /md %}}
</td>
<td>
{{% md %}}



This attribute identifies the type of text that we will receive in the editable text area. On Android and iOS, this field also assigns the type of keyboard that will be displayed to the us.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

value
{{% /md %}}
</td>
<td>
{{% md %}}



Required. Item referring to the input value that will be entered in the editable text area of the Text Input component.


{{% /md %}}
</td>
</tr>

</tbody>
</table>
  
</table>
  
  
<b><b>fun [TextInput]({{< relref "-text-input.md" >}})(value: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?, placeholder: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?, disabled: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)>?, readOnly: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)>?, type: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[TextInputType]({{< relref "../../br.com.zup.beagle.widget.core/-text-input-type/_index.md" >}})>?, hidden: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)>?, styleId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, onChange: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, onFocus: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, onBlur: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?)</b></b>  



