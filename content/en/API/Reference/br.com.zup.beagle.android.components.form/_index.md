+++
title = "br.com.zup.beagle.android.components.form"
draft = false
toc = false
type = "reference"
linktitle = "br.com.zup.beagle.android.components.form"
[menu.docs]
  parent = "hw-security-reference"
  weight = 1
+++

[beagle]({{< relref "../_index.md" >}}) / [br.com.zup.beagle.android.components.form]({{< relref "_index.md" >}}) / 



# Package br.com.zup.beagle.android.components.form  


## Types  
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

[Form]({{< relref "-form/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Component represents a way to compose user inputs and submit  those values to your backend.

  
  
<b>~~data~~ ~~class~~ [~~Form~~]({{< relref "-form/_index.md" >}})~~(~~~~**child**~~~~:~~ [ServerDrivenComponent]({{< relref "../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})~~,~~ ~~**onSubmit**~~~~:~~ [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../br.com.zup.beagle.android.action/-action/_index.md" >}})>?~~,~~ ~~**group**~~~~:~~ [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?~~,~~ ~~**additionalData**~~~~:~~ [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?~~,~~ ~~**shouldStoreFields**~~~~:~~ [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)~~)~~ ~~:~~ [~~WidgetView~~]({{< relref "../br.com.zup.beagle.android.widget/-widget-view/_index.md" >}})~~,~~ [~~SingleChildComponent~~]({{< relref "../br.com.zup.beagle.core/-single-child-component/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[FormInput]({{< relref "-form-input/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



this class works like a regular input type in HTML. It will handle data input by the user on a screen to submit, for example, a user name in a login screen.

  
  
<b>~~data~~ ~~class~~ [~~FormInput~~]({{< relref "-form-input/_index.md" >}})~~(~~~~**name**~~~~:~~ [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)~~,~~ ~~**required**~~~~:~~ [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)?~~,~~ ~~**validator**~~~~:~~ [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?~~,~~ ~~**errorMessage**~~~~:~~ [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?~~,~~ ~~**child**~~~~:~~ [InputWidget]({{< relref "-input-widget/_index.md" >}})~~)~~ ~~:~~ [~~ViewConvertable~~]({{< relref "../br.com.zup.beagle.android.widget/-view-convertable/_index.md" >}})~~,~~ [~~GhostComponent~~]({{< relref "../br.com.zup.beagle.core/-ghost-component/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[FormSubmit]({{< relref "-form-submit/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Component will define a submit handler for a form.

  
  
<b>~~data~~ ~~class~~ [~~FormSubmit~~]({{< relref "-form-submit/_index.md" >}})~~(~~~~**child**~~~~:~~ [ServerDrivenComponent]({{< relref "../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})~~,~~ ~~**enabled**~~~~:~~ [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)~~)~~ ~~:~~ [~~ViewConvertable~~]({{< relref "../br.com.zup.beagle.android.widget/-view-convertable/_index.md" >}})~~,~~ [~~GhostComponent~~]({{< relref "../br.com.zup.beagle.core/-ghost-component/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[InputWidget]({{< relref "-input-widget/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



<p>It could be an EditText view in Android, a Radio button in HTML, an UITextField in iOS or any other type of view that can receive and store input from users. </p> 

  
  
<b>~~abstract~~ ~~class~~ [~~InputWidget~~]({{< relref "-input-widget/_index.md" >}}) ~~:~~ [~~Widget~~]({{< relref "../br.com.zup.beagle.widget/-widget/_index.md" >}})~~,~~ [~~ViewConvertable~~]({{< relref "../br.com.zup.beagle.android.widget/-view-convertable/_index.md" >}})~~,~~ [~~StateChangeable~~]({{< relref "../br.com.zup.beagle.android.components.form.observer/-state-changeable/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[SimpleForm]({{< relref "-simple-form/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Component will define a submit handler for a SimpleForm.

  
  
<b>data class [SimpleForm]({{< relref "-simple-form/_index.md" >}})(**context**: [ContextData]({{< relref "../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?, **onSubmit**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../br.com.zup.beagle.android.action/-action/_index.md" >}})>, **children**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})>) : [WidgetView]({{< relref "../br.com.zup.beagle.android.widget/-widget-view/_index.md" >}}), [ContextComponent]({{< relref "../br.com.zup.beagle.android.context/-context-component/_index.md" >}}), [MultiChildComponent]({{< relref "../br.com.zup.beagle.core/-multi-child-component/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

</tbody>
</table>

