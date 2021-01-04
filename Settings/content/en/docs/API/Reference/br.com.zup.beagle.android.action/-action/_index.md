+++
title = "Action"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.action]({{< relref "../_index.md" >}}) / [Action]({{< relref "_index.md" >}}) / 



# Action  
  

Interface that represents actions in Beagle

<b>interface [Action]({{< relref "_index.md" >}})</b>   


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

[execute]({{< relref "execute.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Method executed when the function is triggered

  
  
<b>abstract fun [execute]({{< relref "execute.md" >}})(rootView: [RootView]({{< relref "../../br.com.zup.beagle.android.widget/-root-view/_index.md" >}}), origin: [View](https://developer.android.com/reference/kotlin/android/view/View.html))</b>  



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

[AddChildren]({{< relref "../-add-children/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Alert]({{< relref "../-alert/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Condition]({{< relref "../-condition/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Confirm]({{< relref "../-confirm/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[FormLocalAction]({{< relref "../-form-local-action/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[FormRemoteAction]({{< relref "../-form-remote-action/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Navigate]({{< relref "../-navigate/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[SendRequest]({{< relref "../-send-request/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[SetContext]({{< relref "../-set-context/_index.md" >}})
{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[SubmitForm]({{< relref "../-submit-form/_index.md" >}})
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

[evaluateExpression]({{< relref "../../br.com.zup.beagle.android.utils/evaluate-expression.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Evaluate the expression to a value

  
  
<b>fun <[T]({{< relref "../../br.com.zup.beagle.android.utils/evaluate-expression.md" >}})> [Action]({{< relref "_index.md" >}}).[evaluateExpression]({{< relref "../../br.com.zup.beagle.android.utils/evaluate-expression.md" >}})(rootView: [RootView]({{< relref "../../br.com.zup.beagle.android.widget/-root-view/_index.md" >}}), origin: [View](https://developer.android.com/reference/kotlin/android/view/View.html), bind: [Bind]({{< relref "../../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[T]({{< relref "../../br.com.zup.beagle.android.utils/evaluate-expression.md" >}})>): [T]({{< relref "../../br.com.zup.beagle.android.utils/evaluate-expression.md" >}})?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[handleEvent]({{< relref "../../br.com.zup.beagle.android.utils/handle-event.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Execute a list of actions and create the implicit context with eventName and eventValue (optional).

  
  
<b>fun [Action]({{< relref "_index.md" >}}).[handleEvent]({{< relref "../../br.com.zup.beagle.android.utils/handle-event.md" >}})(rootView: [RootView]({{< relref "../../br.com.zup.beagle.android.widget/-root-view/_index.md" >}}), origin: [View](https://developer.android.com/reference/kotlin/android/view/View.html), actions: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "_index.md" >}})>, context: [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?)</b>  
<b>~~fun~~ [Action]({{< relref "_index.md" >}})~~.~~[~~handleEvent~~]({{< relref "../../br.com.zup.beagle.android.utils/handle-event.md" >}})~~(~~~~rootView~~~~:~~ [RootView]({{< relref "../../br.com.zup.beagle.android.widget/-root-view/_index.md" >}})~~,~~ ~~origin~~~~:~~ [View](https://developer.android.com/reference/kotlin/android/view/View.html)~~,~~ ~~actions~~~~:~~ [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "_index.md" >}})>~~,~~ ~~eventName~~~~:~~ [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)~~,~~ ~~eventValue~~~~:~~ [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)?~~)~~</b>  




Execute an action and create the implicit context with eventName and eventValue (optional).

  
  
<b>fun [Action]({{< relref "_index.md" >}}).[handleEvent]({{< relref "../../br.com.zup.beagle.android.utils/handle-event.md" >}})(rootView: [RootView]({{< relref "../../br.com.zup.beagle.android.widget/-root-view/_index.md" >}}), origin: [View](https://developer.android.com/reference/kotlin/android/view/View.html), action: [Action]({{< relref "_index.md" >}}), context: [ContextData]({{< relref "../../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?)</b>  
<b>~~fun~~ [Action]({{< relref "_index.md" >}})~~.~~[~~handleEvent~~]({{< relref "../../br.com.zup.beagle.android.utils/handle-event.md" >}})~~(~~~~rootView~~~~:~~ [RootView]({{< relref "../../br.com.zup.beagle.android.widget/-root-view/_index.md" >}})~~,~~ ~~origin~~~~:~~ [View](https://developer.android.com/reference/kotlin/android/view/View.html)~~,~~ ~~action~~~~:~~ [Action]({{< relref "_index.md" >}})~~,~~ ~~eventName~~~~:~~ [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)~~,~~ ~~eventValue~~~~:~~ [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)?~~)~~</b>  



{{% /md %}}
</td>
</tr>

</tbody>
</table>

