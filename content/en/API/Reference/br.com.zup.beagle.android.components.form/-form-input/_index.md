+++
title = "FormInput"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.components.form]({{< relref "../_index.md" >}}) / [FormInput]({{< relref "_index.md" >}}) / 



# FormInput  
  

this class works like a regular input type in HTML. It will handle data input by the user on a screen to submit, for example, a user name in a login screen.

<b>~~data~~ ~~class~~ [~~FormInput~~]({{< relref "_index.md" >}})~~(~~~~**name**~~~~:~~ [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)~~,~~ ~~**required**~~~~:~~ [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)?~~,~~ ~~**validator**~~~~:~~ [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?~~,~~ ~~**errorMessage**~~~~:~~ [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?~~,~~ ~~**child**~~~~:~~ [InputWidget]({{< relref "../-input-widget/_index.md" >}})~~)~~ ~~:~~ [~~ViewConvertable~~]({{< relref "../../br.com.zup.beagle.android.widget/-view-convertable/_index.md" >}})~~,~~ [~~GhostComponent~~]({{< relref "../../br.com.zup.beagle.core/-ghost-component/_index.md" >}})</b>   


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

[FormInput]({{< relref "-form-input.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  ```java
    attribute will define the input name tag on this item.
    This is the tag name used when a request is made using a form component.
```
<b>fun [FormInput]({{< relref "-form-input.md" >}})(name: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), required: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)?, validator: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, errorMessage: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, child: [InputWidget]({{< relref "../-input-widget/_index.md" >}}))</b>   

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

[buildView]({{< relref "build-view.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



This function is called to convert your server-driven component to a UI View in Android

  
  
<b>open override fun [buildView]({{< relref "build-view.md" >}})(rootView: [RootView]({{< relref "../../br.com.zup.beagle.android.widget/-root-view/_index.md" >}})): [View](https://developer.android.com/reference/kotlin/android/view/View.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component1]({{< relref "component1.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component1]({{< relref "component1.md" >}})(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)</b>  



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

  
<b>operator fun [component2]({{< relref "component2.md" >}})(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)?</b>  



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

  
<b>operator fun [component3]({{< relref "component3.md" >}})(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component4]({{< relref "component4.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component4]({{< relref "component4.md" >}})(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component5]({{< relref "component5.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component5]({{< relref "component5.md" >}})(): [InputWidget]({{< relref "../-input-widget/_index.md" >}})</b>  



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

  
<b>fun [copy]({{< relref "copy.md" >}})(name: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), required: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)?, validator: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, errorMessage: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, child: [InputWidget]({{< relref "../-input-widget/_index.md" >}})): [FormInput]({{< relref "_index.md" >}})</b>  



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

[child]({{< relref "_index.md#br.com.zup.beagle.android.components.form/FormInput/child/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

```java
    Any Widget that conforms to InputWidget will do here.
    It could be an EditText view in Android, a Radio button in HTML,
    an UITextField in iOS or any other type of view that can receive and store input from users.
```


<b>open override val [child]({{< relref "_index.md#br.com.zup.beagle.android.components.form/FormInput/child/#/PointingToDeclaration/" >}}): [InputWidget]({{< relref "../-input-widget/_index.md" >}})</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[errorMessage]({{< relref "_index.md#br.com.zup.beagle.android.components.form/FormInput/errorMessage/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

that is showed to the user if the validation fails.

<b>val [errorMessage]({{< relref "_index.md#br.com.zup.beagle.android.components.form/FormInput/errorMessage/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[name]({{< relref "_index.md#br.com.zup.beagle.android.components.form/FormInput/name/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  ```java
    attribute will define the input name tag on this item.
    This is the tag name used when a request is made using a form component.
```
<b>val [name]({{< relref "_index.md#br.com.zup.beagle.android.components.form/FormInput/name/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[required]({{< relref "_index.md#br.com.zup.beagle.android.components.form/FormInput/required/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

defines if it is required to fill this field.

<b>val [required]({{< relref "_index.md#br.com.zup.beagle.android.components.form/FormInput/required/#/PointingToDeclaration/" >}}): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[validator]({{< relref "_index.md#br.com.zup.beagle.android.components.form/FormInput/validator/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  ```java
    define a string value set in your local pre-configured Validators
    to check if the form input is valid.
```
<b>val [validator]({{< relref "_index.md#br.com.zup.beagle.android.components.form/FormInput/validator/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

