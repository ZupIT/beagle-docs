---
title: Webview
weight: 304
description: Description of the component Web View and its attributes
---

---

## What is it?

This component defines a native web view and uses a server-driven information. 

The structure is represented by the attributes below:

| Attribute | Type | Required | Definition |
| :--- | :--- | :--- | :--- |
| url | String or [**Binding**](https://docs.usebeagle.io/v/v1.0-en/api/context#bindings) |    ✓ | Defines the Web View home page that will load. It must be declared and it cannot have a null value.  |

{{% alert color="warning" %}}
**When opening an insecure link \(http\):** It is important to notice that this component will open **ONLY** secure links like `https` and it **WON'T** display any not-safe links like `http.` 
{{% /alert %}}

## How to use it?

{{< tabs name="T124" >}}
{{% tab name="JSON" %}}
```kotlin
{
    "_beagleComponent_": "beagle:webView",
    "url": "https://maps.google.com/"
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
WebView(url: "https://docs.usebeagle.io/")
```
{{% /tab %}}
{{< /tabs >}}

### 👉 [Test this component in the Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/button.json)​
