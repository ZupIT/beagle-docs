+++
title = "Form"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.components.form]({{< relref "../_index.md" >}}) / [Form]({{< relref "_index.md" >}}) / [Form]({{< relref "-form.md" >}}) / 



# Form  


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

additionalData
{{% /md %}}
</td>
<td>
{{% md %}}



values without validation that the user does not input.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

child
{{% /md %}}
</td>
<td>
{{% md %}}



you should provide an hierarchy of visual components on which form will act upon. It's important to have somewhere in your component hierarchy input components FormInput and a submit component FormSubmit.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

group
{{% /md %}}
</td>
<td>
{{% md %}}



only used in multi step form which reference key to manipulate data.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

onSubmit
{{% /md %}}
</td>
<td>
{{% md %}}



define the actions you want to be when click in the form.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

shouldStoreFields
{{% /md %}}
</td>
<td>
{{% md %}}



allows saving the additionalData.


{{% /md %}}
</td>
</tr>

</tbody>
</table>
  
</table>
  
  
<b><b>fun [Form]({{< relref "-form.md" >}})(child: [ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}}), onSubmit: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, group: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, additionalData: [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?, shouldStoreFields: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))</b></b>  



