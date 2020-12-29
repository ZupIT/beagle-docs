+++
title = "br.com.zup.beagle.android.utils"
draft = false
toc = false
type = "reference"
linktitle = "br.com.zup.beagle.android.utils"
[menu.docs]
  parent = "hw-security-reference"
  weight = 1
+++

[beagle]({{< relref "../_index.md" >}}) / [br.com.zup.beagle.android.utils]({{< relref "_index.md" >}}) / 



# Package br.com.zup.beagle.android.utils  


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

BeagleRetry
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>typealias BeagleRetry = () -> [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

Observer
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>typealias Observer<T> = (T) -> [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[StyleManager]({{< relref "-style-manager/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>class [StyleManager]({{< relref "-style-manager/_index.md" >}})(**designSystem**: [DesignSystem]({{< relref "../br.com.zup.beagle.android.setup/-design-system/_index.md" >}})?, **typedValue**: [TypedValue](https://developer.android.com/reference/kotlin/android/util/TypedValue.html))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ToolbarTextManager]({{< relref "-toolbar-text-manager/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>object [ToolbarTextManager]({{< relref "-toolbar-text-manager/_index.md" >}})</b>  



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

[dp]({{< relref "dp.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>fun [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html).[dp]({{< relref "dp.md" >}})(): [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)</b>  
<b>fun [Float](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-float/index.html).[dp]({{< relref "dp.md" >}})(): [Float](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-float/index.html)</b>  
<b>fun [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html).[dp]({{< relref "dp.md" >}})(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[evaluateExpression]({{< relref "evaluate-expression.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Evaluate the expression to a value

  
  
<b>fun <[T]({{< relref "evaluate-expression.md" >}})> [Action]({{< relref "../br.com.zup.beagle.android.action/-action/_index.md" >}}).[evaluateExpression]({{< relref "evaluate-expression.md" >}})(rootView: [RootView]({{< relref "../br.com.zup.beagle.android.widget/-root-view/_index.md" >}}), origin: [View](https://developer.android.com/reference/kotlin/android/view/View.html), bind: [Bind]({{< relref "../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[T]({{< relref "evaluate-expression.md" >}})>): [T]({{< relref "evaluate-expression.md" >}})?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[getExpressions]({{< relref "get-expressions.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>fun [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html).[getExpressions]({{< relref "get-expressions.md" >}})(): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)></b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[handleEvent]({{< relref "handle-event.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Execute an action and create the implicit context with eventName and eventValue (optional).

  
  
<b>fun [Action]({{< relref "../br.com.zup.beagle.android.action/-action/_index.md" >}}).[handleEvent]({{< relref "handle-event.md" >}})(rootView: [RootView]({{< relref "../br.com.zup.beagle.android.widget/-root-view/_index.md" >}}), origin: [View](https://developer.android.com/reference/kotlin/android/view/View.html), action: [Action]({{< relref "../br.com.zup.beagle.android.action/-action/_index.md" >}}), context: [ContextData]({{< relref "../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?)</b>  
<b>fun [ServerDrivenComponent]({{< relref "../br.com.zup.beagle.core/-server-driven-component/_index.md" >}}).[handleEvent]({{< relref "handle-event.md" >}})(rootView: [RootView]({{< relref "../br.com.zup.beagle.android.widget/-root-view/_index.md" >}}), origin: [View](https://developer.android.com/reference/kotlin/android/view/View.html), action: [Action]({{< relref "../br.com.zup.beagle.android.action/-action/_index.md" >}}), context: [ContextData]({{< relref "../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?)</b>  
<b>~~fun~~ [Action]({{< relref "../br.com.zup.beagle.android.action/-action/_index.md" >}})~~.~~[~~handleEvent~~]({{< relref "handle-event.md" >}})~~(~~~~rootView~~~~:~~ [RootView]({{< relref "../br.com.zup.beagle.android.widget/-root-view/_index.md" >}})~~,~~ ~~origin~~~~:~~ [View](https://developer.android.com/reference/kotlin/android/view/View.html)~~,~~ ~~action~~~~:~~ [Action]({{< relref "../br.com.zup.beagle.android.action/-action/_index.md" >}})~~,~~ ~~eventName~~~~:~~ [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)~~,~~ ~~eventValue~~~~:~~ [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)?~~)~~</b>  
<b>~~fun~~ [ServerDrivenComponent]({{< relref "../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})~~.~~[~~handleEvent~~]({{< relref "handle-event.md" >}})~~(~~~~rootView~~~~:~~ [RootView]({{< relref "../br.com.zup.beagle.android.widget/-root-view/_index.md" >}})~~,~~ ~~origin~~~~:~~ [View](https://developer.android.com/reference/kotlin/android/view/View.html)~~,~~ ~~action~~~~:~~ [Action]({{< relref "../br.com.zup.beagle.android.action/-action/_index.md" >}})~~,~~ ~~eventName~~~~:~~ [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)~~,~~ ~~eventValue~~~~:~~ [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)?~~)~~</b>  




Execute a list of actions and create the implicit context with eventName and eventValue (optional).

  
  
<b>fun [Action]({{< relref "../br.com.zup.beagle.android.action/-action/_index.md" >}}).[handleEvent]({{< relref "handle-event.md" >}})(rootView: [RootView]({{< relref "../br.com.zup.beagle.android.widget/-root-view/_index.md" >}}), origin: [View](https://developer.android.com/reference/kotlin/android/view/View.html), actions: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../br.com.zup.beagle.android.action/-action/_index.md" >}})>, context: [ContextData]({{< relref "../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?)</b>  
<b>~~fun~~ [Action]({{< relref "../br.com.zup.beagle.android.action/-action/_index.md" >}})~~.~~[~~handleEvent~~]({{< relref "handle-event.md" >}})~~(~~~~rootView~~~~:~~ [RootView]({{< relref "../br.com.zup.beagle.android.widget/-root-view/_index.md" >}})~~,~~ ~~origin~~~~:~~ [View](https://developer.android.com/reference/kotlin/android/view/View.html)~~,~~ ~~actions~~~~:~~ [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../br.com.zup.beagle.android.action/-action/_index.md" >}})>~~,~~ ~~eventName~~~~:~~ [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)~~,~~ ~~eventValue~~~~:~~ [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)?~~)~~</b>  




Execute a list of actions and create an implicit context with eventName and eventValue.

  
  
<b>fun [ServerDrivenComponent]({{< relref "../br.com.zup.beagle.core/-server-driven-component/_index.md" >}}).[handleEvent]({{< relref "handle-event.md" >}})(rootView: [RootView]({{< relref "../br.com.zup.beagle.android.widget/-root-view/_index.md" >}}), origin: [View](https://developer.android.com/reference/kotlin/android/view/View.html), actions: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../br.com.zup.beagle.android.action/-action/_index.md" >}})>, context: [ContextData]({{< relref "../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?)</b>  
<b>~~fun~~ [ServerDrivenComponent]({{< relref "../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})~~.~~[~~handleEvent~~]({{< relref "handle-event.md" >}})~~(~~~~rootView~~~~:~~ [RootView]({{< relref "../br.com.zup.beagle.android.widget/-root-view/_index.md" >}})~~,~~ ~~origin~~~~:~~ [View](https://developer.android.com/reference/kotlin/android/view/View.html)~~,~~ ~~actions~~~~:~~ [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../br.com.zup.beagle.android.action/-action/_index.md" >}})>~~,~~ ~~eventName~~~~:~~ [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)~~,~~ ~~eventValue~~~~:~~ [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)?~~)~~</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[implementsGenericTypeOf]({{< relref "implements-generic-type-of.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>fun <[I]({{< relref "implements-generic-type-of.md" >}}), [G]({{< relref "implements-generic-type-of.md" >}})> [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html).[implementsGenericTypeOf]({{< relref "implements-generic-type-of.md" >}})(interfaceClazz: [Class](https://developer.android.com/reference/kotlin/java/lang/Class.html)<[I]({{< relref "implements-generic-type-of.md" >}})>, genericType: [Class](https://developer.android.com/reference/kotlin/java/lang/Class.html)<[G]({{< relref "implements-generic-type-of.md" >}})>): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[loadView]({{< relref "load-view.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Load a ServerDrivenComponent into this ViewGroup

  
  
<b>fun [ViewGroup](https://developer.android.com/reference/kotlin/android/view/ViewGroup.html).[loadView]({{< relref "load-view.md" >}})(activity: [AppCompatActivity](https://developer.android.com/reference/kotlin/androidx/appcompat/app/AppCompatActivity.html), screenRequest: [ScreenRequest]({{< relref "../br.com.zup.beagle.android.view/-screen-request/_index.md" >}}))</b>  
<b>fun [ViewGroup](https://developer.android.com/reference/kotlin/android/view/ViewGroup.html).[loadView]({{< relref "load-view.md" >}})(fragment: [Fragment](https://developer.android.com/reference/kotlin/androidx/fragment/app/Fragment.html), screenRequest: [ScreenRequest]({{< relref "../br.com.zup.beagle.android.view/-screen-request/_index.md" >}}))</b>  
<b>@[JvmName](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-name/index.html)(name = "loadView2")  
  
fun [ViewGroup](https://developer.android.com/reference/kotlin/android/view/ViewGroup.html).[loadView]({{< relref "load-view.md" >}})(activity: [AppCompatActivity](https://developer.android.com/reference/kotlin/androidx/appcompat/app/AppCompatActivity.html), screenRequest: [ScreenRequest]({{< relref "../br.com.zup.beagle.android.view/-screen-request/_index.md" >}}), listener: ([ServerDrivenState]({{< relref "../br.com.zup.beagle.android.view/-server-driven-state/_index.md" >}})) -> [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)?)</b>  
<b>~~fun~~ [ViewGroup](https://developer.android.com/reference/kotlin/android/view/ViewGroup.html)~~.~~[~~loadView~~]({{< relref "load-view.md" >}})~~(~~~~activity~~~~:~~ [AppCompatActivity](https://developer.android.com/reference/kotlin/androidx/appcompat/app/AppCompatActivity.html)~~,~~ ~~screenRequest~~~~:~~ [ScreenRequest]({{< relref "../br.com.zup.beagle.android.view/-screen-request/_index.md" >}})~~,~~ ~~listener~~~~:~~ ([BeagleViewState]({{< relref "../br.com.zup.beagle.android.view.custom/-beagle-view-state/_index.md" >}})) -> [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)?~~)~~</b>  
<b>@[JvmName](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-name/index.html)(name = "loadView2")  
  
fun [ViewGroup](https://developer.android.com/reference/kotlin/android/view/ViewGroup.html).[loadView]({{< relref "load-view.md" >}})(fragment: [Fragment](https://developer.android.com/reference/kotlin/androidx/fragment/app/Fragment.html), screenRequest: [ScreenRequest]({{< relref "../br.com.zup.beagle.android.view/-screen-request/_index.md" >}}), listener: ([ServerDrivenState]({{< relref "../br.com.zup.beagle.android.view/-server-driven-state/_index.md" >}})) -> [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)?)</b>  
<b>~~fun~~ [ViewGroup](https://developer.android.com/reference/kotlin/android/view/ViewGroup.html)~~.~~[~~loadView~~]({{< relref "load-view.md" >}})~~(~~~~fragment~~~~:~~ [Fragment](https://developer.android.com/reference/kotlin/androidx/fragment/app/Fragment.html)~~,~~ ~~screenRequest~~~~:~~ [ScreenRequest]({{< relref "../br.com.zup.beagle.android.view/-screen-request/_index.md" >}})~~,~~ ~~listener~~~~:~~ ([BeagleViewState]({{< relref "../br.com.zup.beagle.android.view.custom/-beagle-view-state/_index.md" >}})) -> [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)?~~)~~</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[newServerDrivenIntent]({{< relref "new-server-driven-intent.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Create a intent to start BeagleActivity's sub-classes.

  
  
<b>inline fun <[T]({{< relref "new-server-driven-intent.md" >}}) : [BeagleActivity]({{< relref "../br.com.zup.beagle.android.view/-beagle-activity/_index.md" >}})> [Context](https://developer.android.com/reference/kotlin/android/content/Context.html).[newServerDrivenIntent]({{< relref "new-server-driven-intent.md" >}})(screen: [Screen]({{< relref "../br.com.zup.beagle.android.components.layout/-screen/_index.md" >}})): [Intent](https://developer.android.com/reference/kotlin/android/content/Intent.html)</b>  
<b>inline fun <[T]({{< relref "new-server-driven-intent.md" >}}) : [BeagleActivity]({{< relref "../br.com.zup.beagle.android.view/-beagle-activity/_index.md" >}})> [Context](https://developer.android.com/reference/kotlin/android/content/Context.html).[newServerDrivenIntent]({{< relref "new-server-driven-intent.md" >}})(screenRequest: [ScreenRequest]({{< relref "../br.com.zup.beagle.android.view/-screen-request/_index.md" >}})): [Intent](https://developer.android.com/reference/kotlin/android/content/Intent.html)</b>  
<b>inline fun <[T]({{< relref "new-server-driven-intent.md" >}}) : [BeagleActivity]({{< relref "../br.com.zup.beagle.android.view/-beagle-activity/_index.md" >}})> [Context](https://developer.android.com/reference/kotlin/android/content/Context.html).[newServerDrivenIntent]({{< relref "new-server-driven-intent.md" >}})(screenJson: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Intent](https://developer.android.com/reference/kotlin/android/content/Intent.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[observeBindChanges]({{< relref "observe-bind-changes.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Observe a specific Bind to changes. If the Bind is type of Value, then the actual value will be returned. But if the value is an Expression, then the evaluation will be make.

  
  
<b>fun <[T]({{< relref "observe-bind-changes.md" >}})> [ServerDrivenComponent]({{< relref "../br.com.zup.beagle.core/-server-driven-component/_index.md" >}}).[observeBindChanges]({{< relref "observe-bind-changes.md" >}})(rootView: [RootView]({{< relref "../br.com.zup.beagle.android.widget/-root-view/_index.md" >}}), view: [View](https://developer.android.com/reference/kotlin/android/view/View.html), bind: [Bind]({{< relref "../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[T]({{< relref "observe-bind-changes.md" >}})>, observes: ([T]({{< relref "observe-bind-changes.md" >}})?) -> [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[px]({{< relref "px.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>fun [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html).[px]({{< relref "px.md" >}})(): [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)</b>  
<b>fun [Float](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-float/index.html).[px]({{< relref "px.md" >}})(): [Float](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-float/index.html)</b>  
<b>fun [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html).[px]({{< relref "px.md" >}})(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[renderScreen]({{< relref "render-screen.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Render a ServerDrivenComponent into this ViewGroup

  
  
<b>fun [ViewGroup](https://developer.android.com/reference/kotlin/android/view/ViewGroup.html).[renderScreen]({{< relref "render-screen.md" >}})(activity: [AppCompatActivity](https://developer.android.com/reference/kotlin/androidx/appcompat/app/AppCompatActivity.html), screenJson: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))</b>  
<b>fun [ViewGroup](https://developer.android.com/reference/kotlin/android/view/ViewGroup.html).[renderScreen]({{< relref "render-screen.md" >}})(fragment: [Fragment](https://developer.android.com/reference/kotlin/androidx/fragment/app/Fragment.html), screenJson: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[toAndroidId]({{< relref "to-android-id.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>fun [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html).[toAndroidId]({{< relref "to-android-id.md" >}})(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[toLowerKeys]({{< relref "to-lower-keys.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>fun <[K]({{< relref "to-lower-keys.md" >}})> [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [K]({{< relref "to-lower-keys.md" >}})>.[toLowerKeys]({{< relref "to-lower-keys.md" >}})(): [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [K]({{< relref "to-lower-keys.md" >}})></b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[toView]({{< relref "to-view.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>fun [Screen]({{< relref "../br.com.zup.beagle.android.components.layout/-screen/_index.md" >}}).[toView]({{< relref "to-view.md" >}})(activity: [AppCompatActivity](https://developer.android.com/reference/kotlin/androidx/appcompat/app/AppCompatActivity.html)): [View](https://developer.android.com/reference/kotlin/android/view/View.html)</b>  
<b>fun [Screen]({{< relref "../br.com.zup.beagle.android.components.layout/-screen/_index.md" >}}).[toView]({{< relref "to-view.md" >}})(fragment: [Fragment](https://developer.android.com/reference/kotlin/androidx/fragment/app/Fragment.html)): [View](https://developer.android.com/reference/kotlin/android/view/View.html)</b>  




Transform your Component to a view.

  
  
<b>fun [ServerDrivenComponent]({{< relref "../br.com.zup.beagle.core/-server-driven-component/_index.md" >}}).[toView]({{< relref "to-view.md" >}})(activity: [AppCompatActivity](https://developer.android.com/reference/kotlin/androidx/appcompat/app/AppCompatActivity.html), idView: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [View](https://developer.android.com/reference/kotlin/android/view/View.html)</b>  
<b>fun [ServerDrivenComponent]({{< relref "../br.com.zup.beagle.core/-server-driven-component/_index.md" >}}).[toView]({{< relref "to-view.md" >}})(fragment: [Fragment](https://developer.android.com/reference/kotlin/androidx/fragment/app/Fragment.html), idView: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [View](https://developer.android.com/reference/kotlin/android/view/View.html)</b>  



{{% /md %}}
</td>
</tr>

</tbody>
</table>

