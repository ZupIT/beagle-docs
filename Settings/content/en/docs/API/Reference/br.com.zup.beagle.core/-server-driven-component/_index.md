+++
title = "ServerDrivenComponent"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.core]({{< relref "../_index.md" >}}) / [ServerDrivenComponent]({{< relref "_index.md" >}}) / 



# ServerDrivenComponent  
  

Base of components

<b>interface [ServerDrivenComponent]({{< relref "_index.md" >}})</b>   


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


## Inheritors  
<table>
  
<thead>
<tr>
<th>
Name  
</th>
  
</tr>
</thead>
<tbody>
<tr>
<td>
{{% md %}}

[PageIndicatorComponent]({{< relref "../../br.com.zup.beagle.android.components.page/-page-indicator-component/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ViewConvertable]({{< relref "../../br.com.zup.beagle.android.widget/-view-convertable/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[AccessibilityComponent]({{< relref "../-accessibility-component/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[IdentifierComponent]({{< relref "../-identifier-component/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[StyleComponent]({{< relref "../-style-component/_index.md" >}})
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

[handleEvent]({{< relref "../../br.com.zup.beagle.android.utils/handle-event.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Execute a list of actions and create an implicit context with eventName and eventValue.

  
  
<b>fun [ServerDrivenComponent]({{< relref "_index.md" >}}).[handleEvent]({{< relref "../../br.com.zup.beagle.android.utils/handle-event.md" >}})(rootView: [RootView]({{< relref "../../br.com.zup.beagle.android.widget/-root-view/_index.md" >}}), origin: [View](https://developer.android.com/reference/kotlin/android/view/View.html), actions: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>, context: [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?)</b>  
<b>~~fun~~ [ServerDrivenComponent]({{< relref "_index.md" >}})~~.~~[~~handleEvent~~]({{< relref "../../br.com.zup.beagle.android.utils/handle-event.md" >}})~~(~~~~rootView~~~~:~~ [RootView]({{< relref "../../br.com.zup.beagle.android.widget/-root-view/_index.md" >}})~~,~~ ~~origin~~~~:~~ [View](https://developer.android.com/reference/kotlin/android/view/View.html)~~,~~ ~~actions~~~~:~~ [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>~~,~~ ~~eventName~~~~:~~ [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)~~,~~ ~~eventValue~~~~:~~ [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)?~~)~~</b>  




Execute an action and create the implicit context with eventName and eventValue (optional).

  
  
<b>fun [ServerDrivenComponent]({{< relref "_index.md" >}}).[handleEvent]({{< relref "../../br.com.zup.beagle.android.utils/handle-event.md" >}})(rootView: [RootView]({{< relref "../../br.com.zup.beagle.android.widget/-root-view/_index.md" >}}), origin: [View](https://developer.android.com/reference/kotlin/android/view/View.html), action: [Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}}), context: [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?)</b>  
<b>~~fun~~ [ServerDrivenComponent]({{< relref "_index.md" >}})~~.~~[~~handleEvent~~]({{< relref "../../br.com.zup.beagle.android.utils/handle-event.md" >}})~~(~~~~rootView~~~~:~~ [RootView]({{< relref "../../br.com.zup.beagle.android.widget/-root-view/_index.md" >}})~~,~~ ~~origin~~~~:~~ [View](https://developer.android.com/reference/kotlin/android/view/View.html)~~,~~ ~~action~~~~:~~ [Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})~~,~~ ~~eventName~~~~:~~ [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)~~,~~ ~~eventValue~~~~:~~ [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)?~~)~~</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[observeBindChanges]({{< relref "../../br.com.zup.beagle.android.utils/observe-bind-changes.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Observe a specific Bind to changes. If the Bind is type of Value, then the actual value will be returned. But if the value is an Expression, then the evaluation will be make.

  
  
<b>fun <[T]({{< relref "../../br.com.zup.beagle.android.utils/observe-bind-changes.md" >}})> [ServerDrivenComponent]({{< relref "_index.md" >}}).[observeBindChanges]({{< relref "../../br.com.zup.beagle.android.utils/observe-bind-changes.md" >}})(rootView: [RootView]({{< relref "../../br.com.zup.beagle.android.widget/-root-view/_index.md" >}}), view: [View](https://developer.android.com/reference/kotlin/android/view/View.html), bind: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[T]({{< relref "../../br.com.zup.beagle.android.utils/observe-bind-changes.md" >}})>, observes: ([T]({{< relref "../../br.com.zup.beagle.android.utils/observe-bind-changes.md" >}})?) -> [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[toView]({{< relref "../../br.com.zup.beagle.android.utils/to-view.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Transform your Component to a view.

  
  
<b>fun [ServerDrivenComponent]({{< relref "_index.md" >}}).[toView]({{< relref "../../br.com.zup.beagle.android.utils/to-view.md" >}})(activity: [AppCompatActivity](https://developer.android.com/reference/kotlin/androidx/appcompat/app/AppCompatActivity.html), idView: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [View](https://developer.android.com/reference/kotlin/android/view/View.html)</b>  
<b>fun [ServerDrivenComponent]({{< relref "_index.md" >}}).[toView]({{< relref "../../br.com.zup.beagle.android.utils/to-view.md" >}})(fragment: [Fragment](https://developer.android.com/reference/kotlin/androidx/fragment/app/Fragment.html), idView: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [View](https://developer.android.com/reference/kotlin/android/view/View.html)</b>  



{{% /md %}}
</td>
</tr>

</tbody>
</table>

