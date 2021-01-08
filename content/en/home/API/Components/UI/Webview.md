---
title: Webview
weight: 304
description: Description of the component Web View and its attributes
---

---

## What is it?

This component defines a native web view and uses a server-driven information.

The structure is represented by the attributes below:

| Attribute | Type                                                   | Required | Definition                                                                                          |
| :-------- | :----------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------- |
| url       | String or [**Binding**](/pt/home/api/context#bindings) | ✓        | Defines the Web View home page that will load. It must be declared and it cannot have a null value. |

{{% alert color="warning" %}}
**When opening an insecure link \(http\):** It is important to notice that this component will open **ONLY** secure links like `https` and it **WON'T** display any not-safe links like `http.`
{{% /alert %}}

## How to use it?

{{< tabs id="T124" >}}
{{% tab name="JSON" %}}

<!-- json-playground:webView.json
{
    "_beagleComponent_": "beagle:webView",
    "url": "https://www.google.com.br/"
}
-->

{{% playground file="webView.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
WebView(url: "https://www.google.com.br/")
```

{{% /tab %}}
{{< /tabs >}}
