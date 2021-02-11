+++
title = "br.com.zup.beagle.android.components"
draft = false
toc = false
type = "reference"
linktitle = "br.com.zup.beagle.android.components"
[menu.docs]
  parent = "hw-security-reference"
  weight = 1
+++

[beagle]({{< relref "../_index.md" >}}) / [br.com.zup.beagle.android.components]({{< relref "_index.md" >}}) / 



# Package br.com.zup.beagle.android.components  


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

[BeagleRecyclerView]({{< relref "-beagle-recycler-view/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>class [BeagleRecyclerView]({{< relref "-beagle-recycler-view/_index.md" >}})(**context**: [Context](https://developer.android.com/reference/kotlin/android/content/Context.html)) : [RecyclerView](https://developer.android.com/reference/kotlin/androidx/recyclerview/widget/RecyclerView.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Button]({{< relref "-button/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Define a button natively using the server driven information received through Beagle

  
  
<b>data class [Button]({{< relref "-button/_index.md" >}})(**text**: [Bind]({{< relref "../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>, **styleId**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, **onPress**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, **clickAnalyticsEvent**: [ClickEvent]({{< relref "../br.com.zup.beagle.analytics/-click-event/_index.md" >}})?) : [WidgetView]({{< relref "../br.com.zup.beagle.android.widget/-widget-view/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Image]({{< relref "-image/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Define an image view using the server driven information received through Beagle.

  
  
<b>data class [Image]({{< relref "-image/_index.md" >}})(**path**: [Bind]({{< relref "../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[ImagePath]({{< relref "-image-path/_index.md" >}})>, **mode**: [ImageContentMode]({{< relref "../br.com.zup.beagle.widget.core/-image-content-mode/_index.md" >}})?) : [WidgetView]({{< relref "../br.com.zup.beagle.android.widget/-widget-view/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ImagePath]({{< relref "-image-path/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Define the source of image data to populate the image view.

  
  
<b>sealed class [ImagePath]({{< relref "-image-path/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[LazyComponent]({{< relref "-lazy-component/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



The LazyComponent is used when an asynchronous BFF request is made. An initialState view is set on this component. It works like a loading component or a default picture that is set until the request is fulfilled.

  
  
<b>data class [LazyComponent]({{< relref "-lazy-component/_index.md" >}})(**path**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), **initialState**: [ServerDrivenComponent]({{< relref "../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})) : [WidgetView]({{< relref "../br.com.zup.beagle.android.widget/-widget-view/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[ListView]({{< relref "-list-view/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



ListView is a Layout component that will define a list of views natively. These views could be any Server Driven Component.

  
  
<b>data class [ListView]({{< relref "-list-view/_index.md" >}})constructor(**children**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[ServerDrivenComponent]({{< relref "../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})>?, **direction**: [ListDirection]({{< relref "../br.com.zup.beagle.widget.core/-list-direction/_index.md" >}}), **context**: [ContextData]({{< relref "../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?, **onInit**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, **dataSource**: [Bind]({{< relref "../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)>>?, **template**: [ServerDrivenComponent]({{< relref "../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})?, **onScrollEnd**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, **scrollEndThreshold**: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)?, **iteratorName**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), **key**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?) : [WidgetView]({{< relref "../br.com.zup.beagle.android.widget/-widget-view/_index.md" >}}), [ContextComponent]({{< relref "../br.com.zup.beagle.android.context/-context-component/_index.md" >}}), [OnInitiableComponent]({{< relref "-on-initiable-component/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[OnInitiableComponent]({{< relref "-on-initiable-component/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Class that has onInit property

  
  
<b>interface [OnInitiableComponent]({{< relref "-on-initiable-component/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[OnInitiableComponentImpl]({{< relref "-on-initiable-component-impl/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Class that implements onInitiableComponent behavior

  
  
<b>class [OnInitiableComponentImpl]({{< relref "-on-initiable-component-impl/_index.md" >}})(**onInit**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../br.com.zup.beagle.android.action/-action/_index.md" >}})>?) : [OnInitiableComponent]({{< relref "-on-initiable-component/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[TabBar]({{< relref "-tab-bar/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



TabBar is a component responsible to display a tab layout. It works by displaying tabs that can change a context when clicked.

  
  
<b>data class [TabBar]({{< relref "-tab-bar/_index.md" >}})(**items**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[TabBarItem]({{< relref "-tab-bar-item/_index.md" >}})>, **styleId**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, **currentTab**: [Bind]({{< relref "../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)>?, **onTabSelection**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../br.com.zup.beagle.android.action/-action/_index.md" >}})>?) : [WidgetView]({{< relref "../br.com.zup.beagle.android.widget/-widget-view/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[TabBarItem]({{< relref "-tab-bar-item/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Define the view has in the tab view

  
  
<b>data class [TabBarItem]({{< relref "-tab-bar-item/_index.md" >}})(**title**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, **icon**: [ImagePath.Local]({{< relref "-image-path/-local/_index.md" >}})?)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[TabItem]({{< relref "-tab-item/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Define the view has in the tab view

  
  
<b>~~data~~ ~~class~~ [~~TabItem~~]({{< relref "-tab-item/_index.md" >}})~~(~~~~**title**~~~~:~~ [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?~~,~~ ~~**child**~~~~:~~ [ServerDrivenComponent]({{< relref "../br.com.zup.beagle.core/-server-driven-component/_index.md" >}})~~,~~ ~~**icon**~~~~:~~ [ImagePath.Local]({{< relref "-image-path/-local/_index.md" >}})?~~)~~ ~~:~~ [~~WidgetView~~]({{< relref "../br.com.zup.beagle.android.widget/-widget-view/_index.md" >}})~~,~~ [~~SingleChildComponent~~]({{< relref "../br.com.zup.beagle.core/-single-child-component/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[TabView]({{< relref "-tab-view/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



TabView is a component responsible for the navigation between views. It works by displaying tabs corresponding to the different views that can be accessed.

  
  
<b>~~data~~ ~~class~~ [~~TabView~~]({{< relref "-tab-view/_index.md" >}})~~(~~~~**children**~~~~:~~ [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[TabItem]({{< relref "-tab-item/_index.md" >}})>~~,~~ ~~**styleId**~~~~:~~ [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?~~,~~ ~~**context**~~~~:~~ [ContextData]({{< relref "../br.com.zup.beagle.android.context/-context-data/_index.md" >}})?~~)~~ ~~:~~ [~~WidgetView~~]({{< relref "../br.com.zup.beagle.android.widget/-widget-view/_index.md" >}})~~,~~ [~~ContextComponent~~]({{< relref "../br.com.zup.beagle.android.context/-context-component/_index.md" >}})~~,~~ [~~MultiChildComponent~~]({{< relref "../br.com.zup.beagle.core/-multi-child-component/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Text]({{< relref "-text/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



A text widget will define a text view natively using the server driven information received through Beagle.

  
  
<b>data class [Text]({{< relref "-text/_index.md" >}})(**text**: [Bind]({{< relref "../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>, **styleId**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, **textColor**: [Bind]({{< relref "../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?, **alignment**: [Bind]({{< relref "../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[TextAlignment]({{< relref "../br.com.zup.beagle.widget.core/-text-alignment/_index.md" >}})>?) : [WidgetView]({{< relref "../br.com.zup.beagle.android.widget/-widget-view/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[TextInput]({{< relref "-text-input/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



Input is a component that displays an editable text area for the user. These text fields are used to collect inputs that the user insert using the keyboard.

  
  
<b>data class [TextInput]({{< relref "-text-input/_index.md" >}})(**value**: [Bind]({{< relref "../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?, **placeholder**: [Bind]({{< relref "../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>?, **disabled**: [Bind]({{< relref "../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)>?, **readOnly**: [Bind]({{< relref "../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)>?, **type**: [Bind]({{< relref "../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[TextInputType]({{< relref "../br.com.zup.beagle.widget.core/-text-input-type/_index.md" >}})>?, **hidden**: [Bind]({{< relref "../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)>?, **styleId**: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, **onChange**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, **onFocus**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../br.com.zup.beagle.android.action/-action/_index.md" >}})>?, **onBlur**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../br.com.zup.beagle.android.action/-action/_index.md" >}})>?) : [InputWidget]({{< relref "../br.com.zup.beagle.android.components.form/-input-widget/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[Touchable]({{< relref "-touchable/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



The Touchable component defines a click listener.

  
  
<b>data class [Touchable]({{< relref "-touchable/_index.md" >}})(**onPress**: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Action]({{< relref "../br.com.zup.beagle.android.action/-action/_index.md" >}})>, **child**: [ServerDrivenComponent]({{< relref "../br.com.zup.beagle.core/-server-driven-component/_index.md" >}}), **clickAnalyticsEvent**: [ClickEvent]({{< relref "../br.com.zup.beagle.analytics/-click-event/_index.md" >}})?) : [ViewConvertable]({{< relref "../br.com.zup.beagle.android.widget/-view-convertable/_index.md" >}}), [GhostComponent]({{< relref "../br.com.zup.beagle.core/-ghost-component/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[WebView]({{< relref "-web-view/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}



A WebView widget will define a WebView natively using the server driven information received through Beagle.

  
  
<b>data class [WebView]({{< relref "-web-view/_index.md" >}})(**url**: [Bind]({{< relref "../br.com.zup.beagle.android.context/-bind/_index.md" >}})<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)>) : [WidgetView]({{< relref "../br.com.zup.beagle.android.widget/-widget-view/_index.md" >}})</b>  



{{% /md %}}
</td>
</tr>

</tbody>
</table>

