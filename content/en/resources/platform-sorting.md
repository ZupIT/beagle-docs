---
title: Components Canalization
weight: 95
description: >-
  Here you'll find about Beagle's functionality to filter what elements are sent
  to which platform
---

---

Some elements provided by Beagle will function in some platforms better than in others, for example, the [**ScrollView**]({{< ref path="/api/components/layout/scrollview" lang="en" >}}) works in mobile when you need to scroll on content but it wont be used for web, since brownsers already have this functionality.

In order to filter some componentes, Beagle has a **platform specification** functionality called **canalization**, so it will be able to control which elements are sent by the BFF and select which platforms it will be sent to.

### How does it work?

Beagle uses a customized header `beagle-platform` with the possible values:

- `ALL`;
- `MOBILE`;
- `ANDROID`;
- `IOS`;
- `WEB`;

This way, the BFF response is intercepted according to the platform which it is being sent.

### How can you access it?

There are two way you can access this control:

1. Through **flow control structure** in your code that verifies which platform your client used to make a request:

```kotlin
fun createComponentPlatformDependent(beaglePlatform: BeaglePlatform) = when {
    this.beaglePlatform.isMobilePlatform() -> {
        ScrollView(
            children = listOf(
                Text("Mobile platform")
            )
        )
    }
    this.beaglePlatform == BeaglePlatform.WEB -> {
        Text("Web platform")
    }
    else -> {
        ScrollView(
            children = listOf(
                Text("Mobile platform"),
                Text("Web platform")
            )
        )
    }
}
```

2.  You can **specify which platform** the element will use and then Beagle will filter the correct elements:

```kotlin
Button(text = "mobile only text").forPlatform(BeaglePlatform.MOBILE),
Button(text = "web only text").forPlatform(BeaglePlatform.WEB),
Button(text = "ios only text").forPlatform(BeaglePlatform.IOS),
Button(text = "android only text").forPlatform(BeaglePlatform.ANDROID),
Button(text = "text free for all")
```

You can check [**how to configure this functionality, see Beagle customization section**]({{< ref path="/backend/customization" lang="en" >}}).

{{% alert color="info" %}}
If you use Beagle starters, it is not necessary to configure this functionality manually, because it is already configured.
{{% /alert %}}
