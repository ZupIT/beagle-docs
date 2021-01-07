+++
title = "BeagleSdk"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../_index.md" >}}) / [br.com.zup.beagle.android.setup]({{< relref "../_index.md" >}}) / [BeagleSdk]({{< relref "_index.md" >}}) / 



# BeagleSdk  
  <b>interface [BeagleSdk]({{< relref "_index.md" >}})</b>   


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

[Companion]({{< relref "-companion/_index.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>object [Companion]({{< relref "-companion/_index.md" >}})</b>  



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

[init]({{< relref "init.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open fun [init]({{< relref "init.md" >}})(application: [Application](https://developer.android.com/reference/kotlin/android/app/Application.html))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[registeredActions]({{< relref "registered-actions.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>abstract fun [registeredActions]({{< relref "registered-actions.md" >}})(): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Class](https://developer.android.com/reference/kotlin/java/lang/Class.html)<[Action]({{< relref "../../br.com.zup.beagle.android.action/-action/_index.md" >}})>></b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[registeredOperations]({{< relref "registered-operations.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>abstract fun [registeredOperations]({{< relref "registered-operations.md" >}})(): [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)<[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [Operation]({{< relref "../../br.com.zup.beagle.android.operation/-operation/_index.md" >}})></b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[registeredWidgets]({{< relref "registered-widgets.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>abstract fun [registeredWidgets]({{< relref "registered-widgets.md" >}})(): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)<[Class](https://developer.android.com/reference/kotlin/java/lang/Class.html)<[WidgetView]({{< relref "../../br.com.zup.beagle.android.widget/-widget-view/_index.md" >}})>></b>  



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

[analytics]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleSdk/analytics/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>abstract val [analytics]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleSdk/analytics/#/PointingToDeclaration/" >}}): [Analytics]({{< relref "../../br.com.zup.beagle.analytics/-analytics/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[config]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleSdk/config/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>abstract val [config]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleSdk/config/#/PointingToDeclaration/" >}}): [BeagleConfig]({{< relref "../-beagle-config/_index.md" >}})</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[controllerReference]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleSdk/controllerReference/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>abstract val [controllerReference]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleSdk/controllerReference/#/PointingToDeclaration/" >}}): [BeagleControllerReference]({{< relref "../../br.com.zup.beagle.android.navigation/-beagle-controller-reference/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[deepLinkHandler]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleSdk/deepLinkHandler/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>abstract val [deepLinkHandler]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleSdk/deepLinkHandler/#/PointingToDeclaration/" >}}): [DeepLinkHandler]({{< relref "../../br.com.zup.beagle.android.navigation/-deep-link-handler/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[designSystem]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleSdk/designSystem/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>abstract val [designSystem]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleSdk/designSystem/#/PointingToDeclaration/" >}}): [DesignSystem]({{< relref "../-design-system/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[formLocalActionHandler]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleSdk/formLocalActionHandler/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>abstract val [formLocalActionHandler]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleSdk/formLocalActionHandler/#/PointingToDeclaration/" >}}): [FormLocalActionHandler]({{< relref "../../br.com.zup.beagle.android.action/-form-local-action-handler/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[httpClient]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleSdk/httpClient/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>abstract val [httpClient]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleSdk/httpClient/#/PointingToDeclaration/" >}}): [HttpClient]({{< relref "../../br.com.zup.beagle.android.networking/-http-client/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[imageDownloader]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleSdk/imageDownloader/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>abstract val [imageDownloader]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleSdk/imageDownloader/#/PointingToDeclaration/" >}}): [BeagleImageDownloader]({{< relref "../../br.com.zup.beagle.android.imagedownloader/-beagle-image-downloader/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[logger]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleSdk/logger/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>abstract val [logger]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleSdk/logger/#/PointingToDeclaration/" >}}): [BeagleLogger]({{< relref "../../br.com.zup.beagle.android.logger/-beagle-logger/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[serverDrivenActivity]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleSdk/serverDrivenActivity/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>~~abstract~~ ~~val~~ [~~serverDrivenActivity~~]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleSdk/serverDrivenActivity/#/PointingToDeclaration/" >}})~~:~~ [Class](https://developer.android.com/reference/kotlin/java/lang/Class.html)<[BeagleActivity]({{< relref "../../br.com.zup.beagle.android.view/-beagle-activity/_index.md" >}})></b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[storeHandler]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleSdk/storeHandler/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>abstract val [storeHandler]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleSdk/storeHandler/#/PointingToDeclaration/" >}}): [StoreHandler]({{< relref "../../br.com.zup.beagle.android.store/-store-handler/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[typeAdapterResolver]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleSdk/typeAdapterResolver/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>abstract val [typeAdapterResolver]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleSdk/typeAdapterResolver/#/PointingToDeclaration/" >}}): [TypeAdapterResolver]({{< relref "../../br.com.zup.beagle.android.data.serializer.adapter.generic/-type-adapter-resolver/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[urlBuilder]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleSdk/urlBuilder/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>abstract val [urlBuilder]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleSdk/urlBuilder/#/PointingToDeclaration/" >}}): [UrlBuilder]({{< relref "../../br.com.zup.beagle.android.networking.urlbuilder/-url-builder/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[validatorHandler]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleSdk/validatorHandler/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>abstract val [validatorHandler]({{< relref "_index.md#br.com.zup.beagle.android.setup/BeagleSdk/validatorHandler/#/PointingToDeclaration/" >}}): [ValidatorHandler]({{< relref "../../br.com.zup.beagle.android.components.form.core/-validator-handler/_index.md" >}})?</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

