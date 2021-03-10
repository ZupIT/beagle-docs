+++
title = "FormInput"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.components.form]({{< relref "../_index.md" >}}) / [FormInput]({{< relref "_index.md" >}}) / [FormInput]({{< relref "-form-input.md" >}}) / 



# FormInput  


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

child
{{% /md %}}
</td>
<td>
{{% md %}}



```java
    Any Widget that conforms to InputWidget will do here.
    It could be an EditText view in Android, a Radio button in HTML,
    an UITextField in iOS or any other type of view that can receive and store input from users.
```



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

errorMessage
{{% /md %}}
</td>
<td>
{{% md %}}



that is showed to the user if the validation fails.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

name
{{% /md %}}
</td>
<td>
{{% md %}}

```java
    attribute will define the input name tag on this item.
    This is the tag name used when a request is made using a form component.
```

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

required
{{% /md %}}
</td>
<td>
{{% md %}}



defines if it is required to fill this field.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

validator
{{% /md %}}
</td>
<td>
{{% md %}}

```java
    define a string value set in your local pre-configured Validators
    to check if the form input is valid.
```

{{% /md %}}
</td>
</tr>

</tbody>
</table>
  
</table>
  
  
<b><b>fun [FormInput]({{< relref "-form-input.md" >}})(name: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), required: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)?, validator: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, errorMessage: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, child: [InputWidget]({{< relref "../-input-widget/_index.md" >}}))</b></b>  



