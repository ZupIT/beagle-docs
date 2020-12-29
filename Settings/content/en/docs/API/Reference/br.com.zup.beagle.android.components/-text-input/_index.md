+++
title = "TextInput"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.components]({{< relref "../_index.md" >}}) / [TextInput]({{< relref "_index.md" >}}) / 



# TextInput  
  

Input is a component that displays an editable text area for the user. These text fields are used to collect inputs that the user insert using the keyboard.

<b>data class [TextInput]({{< relref "_index.md" >}})(**value**: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?, **placeholder**: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?, **disabled**: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)>?, **readOnly**: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)>?, **type**: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[TextInputType]({{< relref "../../br.com.zup.beagle.widget.core/-text-input-type/_index.md" >}})>?, **hidden**: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)>?, **styleId**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, **onChange**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, **onFocus**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, **onBlur**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?) : [InputWidget]({{< relref "../../br.com.zup.beagle.android.components.form/-input-widget/_index.md" >}})</b>   


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

[TextInput]({{< relref "-text-input.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>fun [TextInput]({{< relref "-text-input.md" >}})(value: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, placeholder: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, disabled: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)?, readOnly: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)?, type: [TextInputType]({{< relref "../../br.com.zup.beagle.widget.core/-text-input-type/_index.md" >}})?, hidden: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)?, styleId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, onChange: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, onFocus: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, onBlur: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?)</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[TextInput]({{< relref "-text-input.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Required. Item referring to the input value that will be entered in the editable text area of the Text Input component.

<b>fun [TextInput]({{< relref "-text-input.md" >}})(value: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?, placeholder: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?, disabled: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)>?, readOnly: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)>?, type: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[TextInputType]({{< relref "../../br.com.zup.beagle.widget.core/-text-input-type/_index.md" >}})>?, hidden: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)>?, styleId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, onChange: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, onFocus: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, onBlur: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?)</b>   

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

  
<b>operator fun [component1]({{< relref "component1.md" >}})(): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component10]({{< relref "component10.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component10]({{< relref "component10.md" >}})(): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?</b>  



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

  
<b>operator fun [component2]({{< relref "component2.md" >}})(): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?</b>  



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

  
<b>operator fun [component3]({{< relref "component3.md" >}})(): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)>?</b>  



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

  
<b>operator fun [component4]({{< relref "component4.md" >}})(): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)>?</b>  



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

  
<b>operator fun [component5]({{< relref "component5.md" >}})(): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[TextInputType]({{< relref "../../br.com.zup.beagle.widget.core/-text-input-type/_index.md" >}})>?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component6]({{< relref "component6.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component6]({{< relref "component6.md" >}})(): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)>?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component7]({{< relref "component7.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component7]({{< relref "component7.md" >}})(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component8]({{< relref "component8.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component8]({{< relref "component8.md" >}})(): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[component9]({{< relref "component9.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>operator fun [component9]({{< relref "component9.md" >}})(): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?</b>  



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

  
<b>fun [copy]({{< relref "copy.md" >}})(value: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?, placeholder: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?, disabled: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)>?, readOnly: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)>?, type: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[TextInputType]({{< relref "../../br.com.zup.beagle.widget.core/-text-input-type/_index.md" >}})>?, hidden: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)>?, styleId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, onChange: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, onFocus: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, onBlur: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?): [TextInput]({{< relref "_index.md" >}})</b>  



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

[getState]({{< relref "../../br.com.zup.beagle.android.components.form/-input-widget/get-state.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [getState]({{< relref "../../br.com.zup.beagle.android.components.form/-input-widget/get-state.md" >}})(): [Observable]({{< relref "../../br.com.zup.beagle.android.components.form.observer/-observable/_index.md" >}})<[WidgetState]({{< relref "../../br.com.zup.beagle.android.components.form.observer/-widget-state/_index.md" >}})></b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[getValue]({{< relref "get-value.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [getValue]({{< relref "get-value.md" >}})(): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)</b>  



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

[notifyChanges]({{< relref "../../br.com.zup.beagle.android.components.form/-input-widget/notify-changes.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Notify the view the value updated

  
  
<b>override fun [notifyChanges]({{< relref "../../br.com.zup.beagle.android.components.form/-input-widget/notify-changes.md" >}})()</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onErrorMessage]({{< relref "on-error-message.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [onErrorMessage]({{< relref "on-error-message.md" >}})(message: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))</b>  



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

[accessibility]({{< relref "_index.md#br.com.zup.beagle.android.components/TextInput/accessibility/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

attribute will enable a textual information to explain the view content in case a screen reader is use

<b>open override var [accessibility]({{< relref "_index.md#br.com.zup.beagle.android.components/TextInput/accessibility/#/PointingToDeclaration/" >}}): [Accessibility]({{< relref "../../br.com.zup.beagle.core/-accessibility/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[disabled]({{< relref "_index.md#br.com.zup.beagle.android.components/TextInput/disabled/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Enables or disables the field.

<b>val [disabled]({{< relref "_index.md#br.com.zup.beagle.android.components/TextInput/disabled/#/PointingToDeclaration/" >}}): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)>?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[hidden]({{< relref "_index.md#br.com.zup.beagle.android.components/TextInput/hidden/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Enables the component to be visible or not.

<b>val [hidden]({{< relref "_index.md#br.com.zup.beagle.android.components/TextInput/hidden/#/PointingToDeclaration/" >}}): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)>?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[id]({{< relref "_index.md#br.com.zup.beagle.android.components/TextInput/id/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

use to identifier the current view

<b>open override var [id]({{< relref "_index.md#br.com.zup.beagle.android.components/TextInput/id/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onBlur]({{< relref "_index.md#br.com.zup.beagle.android.components/TextInput/onBlur/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Action array that this field can trigger when its focus is removed

<b>val [onBlur]({{< relref "_index.md#br.com.zup.beagle.android.components/TextInput/onBlur/#/PointingToDeclaration/" >}}): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onChange]({{< relref "_index.md#br.com.zup.beagle.android.components/TextInput/onChange/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Actions array that this field can trigger when its value is altered.

<b>val [onChange]({{< relref "_index.md#br.com.zup.beagle.android.components/TextInput/onChange/#/PointingToDeclaration/" >}}): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onFocus]({{< relref "_index.md#br.com.zup.beagle.android.components/TextInput/onFocus/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Actions array that this field can trigger when this field is on focus.

<b>val [onFocus]({{< relref "_index.md#br.com.zup.beagle.android.components/TextInput/onFocus/#/PointingToDeclaration/" >}}): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[placeholder]({{< relref "_index.md#br.com.zup.beagle.android.components/TextInput/placeholder/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

The Placeholder is a text that is displayed when nothing has been entered in the editable text field.

<b>val [placeholder]({{< relref "_index.md#br.com.zup.beagle.android.components/TextInput/placeholder/#/PointingToDeclaration/" >}}): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[readOnly]({{< relref "_index.md#br.com.zup.beagle.android.components/TextInput/readOnly/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Check if the Input will be editable or read only.

<b>val [readOnly]({{< relref "_index.md#br.com.zup.beagle.android.components/TextInput/readOnly/#/PointingToDeclaration/" >}}): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)>?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[stateObservable]({{< relref "_index.md#br.com.zup.beagle.android.components/TextInput/stateObservable/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>@[Transient](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-transient/index.html)()  
  
override val [stateObservable]({{< relref "_index.md#br.com.zup.beagle.android.components/TextInput/stateObservable/#/PointingToDeclaration/" >}}): [Observable]({{< relref "../../br.com.zup.beagle.android.components.form.observer/-observable/_index.md" >}})<[WidgetState]({{< relref "../../br.com.zup.beagle.android.components.form.observer/-widget-state/_index.md" >}})></b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[style]({{< relref "_index.md#br.com.zup.beagle.android.components/TextInput/style/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

attribute will enable a few visual options to be changed.

<b>open override var [style]({{< relref "_index.md#br.com.zup.beagle.android.components/TextInput/style/#/PointingToDeclaration/" >}}): [Style]({{< relref "../../br.com.zup.beagle.core/-style/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[styleId]({{< relref "_index.md#br.com.zup.beagle.android.components/TextInput/styleId/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

This attribute receives a key that is registered in the Design System of each platform that customizes the component.

<b>val [styleId]({{< relref "_index.md#br.com.zup.beagle.android.components/TextInput/styleId/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[type]({{< relref "_index.md#br.com.zup.beagle.android.components/TextInput/type/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

This attribute identifies the type of text that we will receive in the editable text area. On Android and iOS, this field also assigns the type of keyboard that will be displayed to the us.

<b>val [type]({{< relref "_index.md#br.com.zup.beagle.android.components/TextInput/type/#/PointingToDeclaration/" >}}): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[TextInputType]({{< relref "../../br.com.zup.beagle.widget.core/-text-input-type/_index.md" >}})>?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[value]({{< relref "_index.md#br.com.zup.beagle.android.components/TextInput/value/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

Required. Item referring to the input value that will be entered in the editable text area of the Text Input component.

<b>val [value]({{< relref "_index.md#br.com.zup.beagle.android.components/TextInput/value/#/PointingToDeclaration/" >}}): [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

