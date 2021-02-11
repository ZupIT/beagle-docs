+++
title = "Screen"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.components.layout]({{< relref "../_index.md" >}}) / [Screen]({{< relref "_index.md" >}}) / 



# Screen  
  

The screen element will help you define the screen view structure. By using this component you can define configurations like whether or not you want to use safe areas or display a tool bar/navigation bar.

<b>data class [Screen]({{< relref "_index.md" >}}) : [ScreenAnalytics]({{< relref "../../br.com.zup.beagle.analytics/-screen-analytics/_index.md" >}}), [ContextComponent]({{< relref "../../br.com.zup.beagle.android.context/-context-component/_index.md" >}}), [SingleChildComponent]({{< relref "../../br.com.zup.beagle.core/-single-child-component/_index.md" >}}), [IdentifierComponent]({{< relref "../../br.com.zup.beagle.core/-identifier-component/_index.md" >}})</b>   


## See also  
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

[NavigationBar]({{< relref "../-navigation-bar/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}






{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ScreenEvent]({{< relref "../../br.com.zup.beagle.analytics/-screen-event/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}






{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}






{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Style]({{< relref "../../br.com.zup.beagle.core/-style/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}






{{% /md %}}
</td>
</tr>

</tbody>
</table>
  
</table>


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
    define the child elements on this screen.
    It could be any visual component that extends the ServerDrivenComponent.1
```

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

context
{{% /md %}}
</td>
<td>
{{% md %}}



define the contextData that be set to screen.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

identifier
{{% /md %}}
</td>
<td>
{{% md %}}

```java
    identifies your screen globally inside your
    application so that it could have actions set on itself.
```

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

navigationBar
{{% /md %}}
</td>
<td>
{{% md %}}



enable a action bar/navigation bar into your view. By default it is set as null.


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

safeArea
{{% /md %}}
</td>
<td>
{{% md %}}

```java
    enable Safe areas to help you place your views within the visible
    portion of the overall interface.
    By default it is not enabled and it wont constrain considering any safe area.
```

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

screenAnalyticsEvent
{{% /md %}}
</td>
<td>
{{% md %}}



send event when screen appear/disappear


{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

style
{{% /md %}}
</td>
<td>
{{% md %}}



enable a few visual options to be changed.


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

[Screen]({{< relref "-screen.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>~~fun~~ [~~Screen~~]({{< relref "-screen.md" >}})~~(~~~~identifier~~~~:~~ [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?~~,~~ ~~safeArea~~~~:~~ [SafeArea]({{< relref "../-safe-area/_index.md" >}})?~~,~~ ~~navigationBar~~~~:~~ [NavigationBar]({{< relref "../-navigation-bar/_index.md" >}})?~~,~~ ~~child~~~~:~~ [ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})~~,~~ ~~style~~~~:~~ [Style]({{< relref "../../br.com.zup.beagle.core/-style/_index.md" >}})?~~,~~ ~~screenAnalyticsEvent~~~~:~~ [ScreenEvent]({{< relref "../../br.com.zup.beagle.analytics/-screen-event/_index.md" >}})?~~,~~ ~~context~~~~:~~ [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?~~)~~</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Screen]({{< relref "-screen.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>fun [Screen]({{< relref "-screen.md" >}})(safeArea: [SafeArea]({{< relref "../-safe-area/_index.md" >}})?, navigationBar: [NavigationBar]({{< relref "../-navigation-bar/_index.md" >}})?, child: [ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}}), style: [Style]({{< relref "../../br.com.zup.beagle.core/-style/_index.md" >}})?, screenAnalyticsEvent: [ScreenEvent]({{< relref "../../br.com.zup.beagle.analytics/-screen-event/_index.md" >}})?, context: [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?, id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?)</b>   

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

  
<b>operator fun [component1]({{< relref "component1.md" >}})(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>  



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

  
<b>operator fun [component2]({{< relref "component2.md" >}})(): [SafeArea]({{< relref "../-safe-area/_index.md" >}})?</b>  



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

  
<b>operator fun [component3]({{< relref "component3.md" >}})(): [NavigationBar]({{< relref "../-navigation-bar/_index.md" >}})?</b>  



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

  
<b>operator fun [component4]({{< relref "component4.md" >}})(): [ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})</b>  



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

  
<b>operator fun [component5]({{< relref "component5.md" >}})(): [Style]({{< relref "../../br.com.zup.beagle.core/-style/_index.md" >}})?</b>  



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

  
<b>operator fun [component6]({{< relref "component6.md" >}})(): [ScreenEvent]({{< relref "../../br.com.zup.beagle.analytics/-screen-event/_index.md" >}})?</b>  



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

  
<b>operator fun [component7]({{< relref "component7.md" >}})(): [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?</b>  



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

  
<b>operator fun [component8]({{< relref "component8.md" >}})(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>  



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

  
<b>fun [copy]({{< relref "copy.md" >}})(identifier: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, safeArea: [SafeArea]({{< relref "../-safe-area/_index.md" >}})?, navigationBar: [NavigationBar]({{< relref "../-navigation-bar/_index.md" >}})?, child: [ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}}), style: [Style]({{< relref "../../br.com.zup.beagle.core/-style/_index.md" >}})?, screenAnalyticsEvent: [ScreenEvent]({{< relref "../../br.com.zup.beagle.analytics/-screen-event/_index.md" >}})?, context: [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?, id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?): [Screen]({{< relref "_index.md" >}})</b>  



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

[child]({{< relref "_index.md#br.com.zup.beagle.android.components.layout/Screen/child/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  ```java
    define the child elements on this screen.
    It could be any visual component that extends the ServerDrivenComponent.1
```
<b>open override val [child]({{< relref "_index.md#br.com.zup.beagle.android.components.layout/Screen/child/#/PointingToDeclaration/" >}}): [ServerDrivenComponent]({{< relref "../../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[context]({{< relref "_index.md#br.com.zup.beagle.android.components.layout/Screen/context/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

define the contextData that be set to screen.

<b>open override val [context]({{< relref "_index.md#br.com.zup.beagle.android.components.layout/Screen/context/#/PointingToDeclaration/" >}}): [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[id]({{< relref "_index.md#br.com.zup.beagle.android.components.layout/Screen/id/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

use to identifier the current view

<b>open override val [id]({{< relref "_index.md#br.com.zup.beagle.android.components.layout/Screen/id/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[identifier]({{< relref "_index.md#br.com.zup.beagle.android.components.layout/Screen/identifier/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  ```java
    identifies your screen globally inside your
    application so that it could have actions set on itself.
```
<b>val [identifier]({{< relref "_index.md#br.com.zup.beagle.android.components.layout/Screen/identifier/#/PointingToDeclaration/" >}}): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[navigationBar]({{< relref "_index.md#br.com.zup.beagle.android.components.layout/Screen/navigationBar/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

enable a action bar/navigation bar into your view. By default it is set as null.

<b>val [navigationBar]({{< relref "_index.md#br.com.zup.beagle.android.components.layout/Screen/navigationBar/#/PointingToDeclaration/" >}}): [NavigationBar]({{< relref "../-navigation-bar/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[safeArea]({{< relref "_index.md#br.com.zup.beagle.android.components.layout/Screen/safeArea/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  ```java
    enable Safe areas to help you place your views within the visible
    portion of the overall interface.
    By default it is not enabled and it wont constrain considering any safe area.
```
<b>val [safeArea]({{< relref "_index.md#br.com.zup.beagle.android.components.layout/Screen/safeArea/#/PointingToDeclaration/" >}}): [SafeArea]({{< relref "../-safe-area/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[screenAnalyticsEvent]({{< relref "_index.md#br.com.zup.beagle.android.components.layout/Screen/screenAnalyticsEvent/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

send event when screen appear/disappear

<b>open override val [screenAnalyticsEvent]({{< relref "_index.md#br.com.zup.beagle.android.components.layout/Screen/screenAnalyticsEvent/#/PointingToDeclaration/" >}}): [ScreenEvent]({{< relref "../../br.com.zup.beagle.analytics/-screen-event/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[style]({{< relref "_index.md#br.com.zup.beagle.android.components.layout/Screen/style/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  

enable a few visual options to be changed.

<b>val [style]({{< relref "_index.md#br.com.zup.beagle.android.components.layout/Screen/style/#/PointingToDeclaration/" >}}): [Style]({{< relref "../../br.com.zup.beagle.core/-style/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>


## Extensions  
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

[toView]({{< relref "../../br.com.zup.beagle.android.utils/to-view.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>fun [Screen]({{< relref "_index.md" >}}).[toView]({{< relref "../../br.com.zup.beagle.android.utils/to-view.md" >}})(activity: [AppCompatActivity](https://developer.android.com/reference/kotlin/androidx/appcompat/app/AppCompatActivity.html)): [View](https://developer.android.com/reference/kotlin/android/view/View.html)</b>  
<b>fun [Screen]({{< relref "_index.md" >}}).[toView]({{< relref "../../br.com.zup.beagle.android.utils/to-view.md" >}})(fragment: [Fragment](https://developer.android.com/reference/kotlin/androidx/fragment/app/Fragment.html)): [View](https://developer.android.com/reference/kotlin/android/view/View.html)</b>  



{{% /md %}}
</td>
</tr>

</tbody>
</table>

