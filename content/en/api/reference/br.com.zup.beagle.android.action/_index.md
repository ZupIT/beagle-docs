+++
title = "br.com.zup.beagle.android.action"
draft = false
toc = false
type = "reference"
linktitle = "br.com.zup.beagle.android.action"
[menu.docs]
  parent = "hw-security-reference"
  weight = 1
+++

[beagle]({{< relref "../_index.md" >}}) / [br.com.zup.beagle.android.action]({{< relref "_index.md" >}}) / 



# Package br.com.zup.beagle.android.action  


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

[Action]({{< relref "-action/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Interface that represents actions in Beagle

  
  
<b>interface [Action]({{< relref "-action/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ActionListener]({{< relref "-action-listener/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>~~interface~~ [~~ActionListener~~]({{< relref "-action-listener/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[AddChildren]({{< relref "-add-children/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



The AddChildren class is responsible for adding - at the beginning or in the end - or changing all views that inherit from  Widget  and who accept children.

  
  
<b>data class [AddChildren]({{< relref "-add-children/_index.md" >}})(**componentId**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), **value**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})>, **mode**: [Mode]({{< relref "-mode/_index.md" >}})?) : [Action]({{< relref "-action/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Alert]({{< relref "-alert/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



This action will show dialogues natively, such as an error alert indicating alternative flows, business system errors and others.

  
  
<b>data class [Alert]({{< relref "-alert/_index.md" >}})(**title**: [Bind]({{< relref "../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?, **message**: [Bind]({{< relref "../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>, **onPressOk**: [Action]({{< relref "-action/_index.md" >}})?, **labelOk**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?) : [Action]({{< relref "-action/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[AsyncAction]({{< relref "-async-action/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Interface that represents async actions in Beagle

  
  
<b>interface [AsyncAction]({{< relref "-async-action/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[AsyncActionImpl]({{< relref "-async-action-impl/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>class [AsyncActionImpl]({{< relref "-async-action-impl/_index.md" >}}) : [AsyncAction]({{< relref "-async-action/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[AsyncActionStatus]({{< relref "-async-action-status/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Status of asynchronous actions

  
  
<b>enum [AsyncActionStatus]({{< relref "-async-action-status/_index.md" >}}) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)<[AsyncActionStatus]({{< relref "-async-action-status/_index.md" >}})> </b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Condition]({{< relref "-condition/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Action to resolve condition and call onTrue if return true and onFalse if return is false.

  
  
<b>data class [Condition]({{< relref "-condition/_index.md" >}})(**condition**: [Bind]({{< relref "../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)>, **onTrue**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "-action/_index.md" >}})>?, **onFalse**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "-action/_index.md" >}})>?) : [Action]({{< relref "-action/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Confirm]({{< relref "-confirm/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



This action will show dialogues natively, such as an error alert indicating alternative flows, business system errors and others.

  
  
<b>data class [Confirm]({{< relref "-confirm/_index.md" >}})(**title**: [Bind]({{< relref "../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?, **message**: [Bind]({{< relref "../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>, **onPressOk**: [Action]({{< relref "-action/_index.md" >}})?, **onPressCancel**: [Action]({{< relref "-action/_index.md" >}})?, **labelOk**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, **labelCancel**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?) : [Action]({{< relref "-action/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[FieldError]({{< relref "-field-error/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Class to define error.

  
  
<b>data class [FieldError]({{< relref "-field-error/_index.md" >}})(**inputName**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), **message**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[FormLocalAction]({{< relref "-form-local-action/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Defines form local actions, that is, that do not make http requests, such as an action that creates a customized Dialog.

  
  
<b>~~data~~ ~~class~~ [~~FormLocalAction~~]({{< relref "-form-local-action/_index.md" >}})~~(~~~~**name**~~~~:~~ [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)~~,~~ ~~**data**~~~~:~~ [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>~~)~~ ~~:~~ [~~Action~~]({{< relref "-action/_index.md" >}})~~,~~ [~~AsyncAction~~]({{< relref "-async-action/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[FormLocalActionHandler]({{< relref "-form-local-action-handler/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>~~interface~~ [~~FormLocalActionHandler~~]({{< relref "-form-local-action-handler/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[FormMethodType]({{< relref "-form-method-type/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Defines the type of operation submitted by this form. It will map these values to Http methods.

  
  
<b>~~enum~~ [~~FormMethodType~~]({{< relref "-form-method-type/_index.md" >}}) ~~:~~ [~~Enum~~](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)~~<~~[FormMethodType]({{< relref "-form-method-type/_index.md" >}})~~>~~ </b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[FormRemoteAction]({{< relref "-form-remote-action/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Define remote action, when you want to do some request when submit the form.

  
  
<b>~~data~~ ~~class~~ [~~FormRemoteAction~~]({{< relref "-form-remote-action/_index.md" >}})~~(~~~~**path**~~~~:~~ [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)~~,~~ ~~**method**~~~~:~~ [FormMethodType]({{< relref "-form-method-type/_index.md" >}})~~)~~ ~~:~~ [~~Action~~]({{< relref "-action/_index.md" >}})~~,~~ [~~AsyncAction~~]({{< relref "-async-action/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Mode]({{< relref "-mode/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Defines the placement of where the children will be inserted in the list or if the contents of the list will be replaced.

  
  
<b>enum [Mode]({{< relref "-mode/_index.md" >}}) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)<[Mode]({{< relref "-mode/_index.md" >}})> </b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Navigate]({{< relref "-navigate/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Class handles transition actions between screens in the application. Its structure is the following:.

  
  
<b>sealed class [Navigate]({{< relref "-navigate/_index.md" >}}) : [Action]({{< relref "-action/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[RequestActionMethod]({{< relref "-request-action-method/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Enum with HTTP methods.

  
  
<b>enum [RequestActionMethod]({{< relref "-request-action-method/_index.md" >}}) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)<[RequestActionMethod]({{< relref "-request-action-method/_index.md" >}})> </b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

ResultListener
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>internal typealias ResultListener = (FormResult) -> [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Route]({{< relref "-route/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



This defines navigation type, it can be a navigation to a remote route in which Beagle will deserialize the content or to a local screen already built.

  
  
<b>sealed class [Route]({{< relref "-route/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[SendRequest]({{< relref "-send-request/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



SendRequest is used to make HTTP requests.

  
  
<b>data class [SendRequest]({{< relref "-send-request/_index.md" >}})(**url**: [Bind]({{< relref "../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>, **method**: [Bind]({{< relref "../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[RequestActionMethod]({{< relref "-request-action-method/_index.md" >}})>, **headers**: [Bind]({{< relref "../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>>?, **data**: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)?, **onSuccess**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "-action/_index.md" >}})>?, **onError**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "-action/_index.md" >}})>?, **onFinish**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "-action/_index.md" >}})>?) : [Action]({{< relref "-action/_index.md" >}}), [AsyncAction]({{< relref "-async-action/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[SetContext]({{< relref "-set-context/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



The setContext class is responsible for changing the value of a context.

  
  
<b>data class [SetContext]({{< relref "-set-context/_index.md" >}})(**contextId**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), **value**: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html), **path**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?) : [Action]({{< relref "-action/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[SubmitForm]({{< relref "-submit-form/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



SubmitForm and a specific action of the SimpleForm component when executing it calls SimpleForm's onSubmit attribute.

  
  
<b>class [SubmitForm]({{< relref "-submit-form/_index.md" >}}) : [Action]({{< relref "-action/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

</tbody>
</table>

