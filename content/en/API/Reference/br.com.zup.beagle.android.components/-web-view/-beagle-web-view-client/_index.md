+++
title = "BeagleWebViewClient"
draft = false
toc = false
type = "reference"
+++

[beagle]({{< relref "../../../_index.md" >}}) / [br.com.zup.beagle.android.components]({{< relref "../../_index.md" >}}) / [WebView]({{< relref "../_index.md" >}}) / [BeagleWebViewClient]({{< relref "_index.md" >}}) / 



# BeagleWebViewClient  
  <b>class [BeagleWebViewClient]({{< relref "_index.md" >}})(**context**: [Context](https://developer.android.com/reference/kotlin/android/content/Context.html)) : [WebViewClient](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html)</b>   


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

[doUpdateVisitedHistory](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#doupdatevisitedhistory)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [doUpdateVisitedHistory](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#doupdatevisitedhistory)(p0: [WebView](https://developer.android.com/reference/kotlin/android/webkit/WebView.html), p1: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), p2: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))</b>  



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

[notify]({{< relref "notify.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>fun [notify]({{< relref "notify.md" >}})(state: [ServerDrivenState]({{< relref "../../../br.com.zup.beagle.android.view/-server-driven-state/_index.md" >}}))</b>  
<b>fun [notify]({{< relref "notify.md" >}})(loading: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onFormResubmission](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#onformresubmission)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [onFormResubmission](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#onformresubmission)(p0: [WebView](https://developer.android.com/reference/kotlin/android/webkit/WebView.html), p1: [Message](https://developer.android.com/reference/kotlin/android/os/Message.html), p2: [Message](https://developer.android.com/reference/kotlin/android/os/Message.html))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onLoadResource](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#onloadresource)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [onLoadResource](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#onloadresource)(p0: [WebView](https://developer.android.com/reference/kotlin/android/webkit/WebView.html), p1: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onPageCommitVisible](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#onpagecommitvisible)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [onPageCommitVisible](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#onpagecommitvisible)(p0: [WebView](https://developer.android.com/reference/kotlin/android/webkit/WebView.html), p1: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onPageFinished]({{< relref "on-page-finished.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [onPageFinished]({{< relref "on-page-finished.md" >}})(view: [WebView](https://developer.android.com/reference/kotlin/android/webkit/WebView.html)?, url: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onPageStarted]({{< relref "on-page-started.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [onPageStarted]({{< relref "on-page-started.md" >}})(view: [WebView](https://developer.android.com/reference/kotlin/android/webkit/WebView.html)?, url: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, favicon: [Bitmap](https://developer.android.com/reference/kotlin/android/graphics/Bitmap.html)?)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onReceivedClientCertRequest](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#onreceivedclientcertrequest)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [onReceivedClientCertRequest](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#onreceivedclientcertrequest)(p0: [WebView](https://developer.android.com/reference/kotlin/android/webkit/WebView.html), p1: [ClientCertRequest](https://developer.android.com/reference/kotlin/android/webkit/ClientCertRequest.html))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onReceivedError]({{< relref "on-received-error.md" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [onReceivedError]({{< relref "on-received-error.md" >}})(view: [WebView](https://developer.android.com/reference/kotlin/android/webkit/WebView.html)?, request: [WebResourceRequest](https://developer.android.com/reference/kotlin/android/webkit/WebResourceRequest.html)?, error: [WebResourceError](https://developer.android.com/reference/kotlin/android/webkit/WebResourceError.html)?)</b>  
<b>~~open~~ ~~override~~ ~~fun~~ [~~onReceivedError~~](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#onreceivederror)~~(~~~~p0~~~~:~~ [WebView](https://developer.android.com/reference/kotlin/android/webkit/WebView.html)~~,~~ ~~p1~~~~:~~ [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)~~,~~ ~~p2~~~~:~~ [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)~~,~~ ~~p3~~~~:~~ [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)~~)~~</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onReceivedHttpAuthRequest](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#onreceivedhttpauthrequest)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [onReceivedHttpAuthRequest](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#onreceivedhttpauthrequest)(p0: [WebView](https://developer.android.com/reference/kotlin/android/webkit/WebView.html), p1: [HttpAuthHandler](https://developer.android.com/reference/kotlin/android/webkit/HttpAuthHandler.html), p2: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), p3: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onReceivedHttpError](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#onreceivedhttperror)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [onReceivedHttpError](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#onreceivedhttperror)(p0: [WebView](https://developer.android.com/reference/kotlin/android/webkit/WebView.html), p1: [WebResourceRequest](https://developer.android.com/reference/kotlin/android/webkit/WebResourceRequest.html), p2: [WebResourceResponse](https://developer.android.com/reference/kotlin/android/webkit/WebResourceResponse.html))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onReceivedLoginRequest](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#onreceivedloginrequest)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [onReceivedLoginRequest](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#onreceivedloginrequest)(p0: [WebView](https://developer.android.com/reference/kotlin/android/webkit/WebView.html), p1: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), p2: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, p3: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onReceivedSslError](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#onreceivedsslerror)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [onReceivedSslError](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#onreceivedsslerror)(p0: [WebView](https://developer.android.com/reference/kotlin/android/webkit/WebView.html), p1: [SslErrorHandler](https://developer.android.com/reference/kotlin/android/webkit/SslErrorHandler.html), p2: [SslError](https://developer.android.com/reference/kotlin/android/net/http/SslError.html))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onRenderProcessGone](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#onrenderprocessgone)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [onRenderProcessGone](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#onrenderprocessgone)(p0: [WebView](https://developer.android.com/reference/kotlin/android/webkit/WebView.html), p1: [RenderProcessGoneDetail](https://developer.android.com/reference/kotlin/android/webkit/RenderProcessGoneDetail.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onSafeBrowsingHit](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#onsafebrowsinghit)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [onSafeBrowsingHit](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#onsafebrowsinghit)(p0: [WebView](https://developer.android.com/reference/kotlin/android/webkit/WebView.html), p1: [WebResourceRequest](https://developer.android.com/reference/kotlin/android/webkit/WebResourceRequest.html), p2: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), p3: [SafeBrowsingResponse](https://developer.android.com/reference/kotlin/android/webkit/SafeBrowsingResponse.html))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onScaleChanged](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#onscalechanged)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [onScaleChanged](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#onscalechanged)(p0: [WebView](https://developer.android.com/reference/kotlin/android/webkit/WebView.html), p1: [Float](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-float/index.html), p2: [Float](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-float/index.html))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onTooManyRedirects](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#ontoomanyredirects)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>~~open~~ ~~override~~ ~~fun~~ [~~onTooManyRedirects~~](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#ontoomanyredirects)~~(~~~~p0~~~~:~~ [WebView](https://developer.android.com/reference/kotlin/android/webkit/WebView.html)~~,~~ ~~p1~~~~:~~ [Message](https://developer.android.com/reference/kotlin/android/os/Message.html)~~,~~ ~~p2~~~~:~~ [Message](https://developer.android.com/reference/kotlin/android/os/Message.html)~~)~~</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[onUnhandledKeyEvent](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#onunhandledkeyevent)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [onUnhandledKeyEvent](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#onunhandledkeyevent)(p0: [WebView](https://developer.android.com/reference/kotlin/android/webkit/WebView.html), p1: [KeyEvent](https://developer.android.com/reference/kotlin/android/view/KeyEvent.html))</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[shouldInterceptRequest](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#shouldinterceptrequest)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [shouldInterceptRequest](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#shouldinterceptrequest)(p0: [WebView](https://developer.android.com/reference/kotlin/android/webkit/WebView.html), p1: [WebResourceRequest](https://developer.android.com/reference/kotlin/android/webkit/WebResourceRequest.html)): [WebResourceResponse](https://developer.android.com/reference/kotlin/android/webkit/WebResourceResponse.html)?</b>  
<b>~~open~~ ~~override~~ ~~fun~~ [~~shouldInterceptRequest~~](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#shouldinterceptrequest)~~(~~~~p0~~~~:~~ [WebView](https://developer.android.com/reference/kotlin/android/webkit/WebView.html)~~,~~ ~~p1~~~~:~~ [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)~~)~~~~:~~ [WebResourceResponse](https://developer.android.com/reference/kotlin/android/webkit/WebResourceResponse.html)?</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[shouldOverrideKeyEvent](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#shouldoverridekeyevent)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [shouldOverrideKeyEvent](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#shouldoverridekeyevent)(p0: [WebView](https://developer.android.com/reference/kotlin/android/webkit/WebView.html), p1: [KeyEvent](https://developer.android.com/reference/kotlin/android/view/KeyEvent.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)</b>  



{{% /md %}}
</td>
</tr>

<tr>
<td>
{{% md %}}

[shouldOverrideUrlLoading](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#shouldoverrideurlloading)
{{% /md %}}
</td>
<td>
{{% md %}}

  
<b>open override fun [shouldOverrideUrlLoading](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#shouldoverrideurlloading)(p0: [WebView](https://developer.android.com/reference/kotlin/android/webkit/WebView.html), p1: [WebResourceRequest](https://developer.android.com/reference/kotlin/android/webkit/WebResourceRequest.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)</b>  
<b>~~open~~ ~~override~~ ~~fun~~ [~~shouldOverrideUrlLoading~~](https://developer.android.com/reference/kotlin/android/webkit/WebViewClient.html#shouldoverrideurlloading)~~(~~~~p0~~~~:~~ [WebView](https://developer.android.com/reference/kotlin/android/webkit/WebView.html)~~,~~ ~~p1~~~~:~~ [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)~~)~~~~:~~ [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)</b>  



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

[context]({{< relref "_index.md#br.com.zup.beagle.android.components/WebView.BeagleWebViewClient/context/#/PointingToDeclaration/" >}})
{{% /md %}}
</td>
<td>
{{% md %}}

  <b>val [context]({{< relref "_index.md#br.com.zup.beagle.android.components/WebView.BeagleWebViewClient/context/#/PointingToDeclaration/" >}}): [Context](https://developer.android.com/reference/kotlin/android/content/Context.html)</b>   

{{% /md %}}
</td>
</tr>

</tbody>
</table>

