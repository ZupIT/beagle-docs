---
title: Using Widget Id
weight: 241
description: How to set and get id on a widget
---

---

To test your application, you may need a Widget ID. In order to do that, there is some methods on Beagle to **set** and **get** this Widget IDs.

On this section, you'll see two specific ones:

1. **Set Id**
2. **Get Id**

## Set Id

The method Set Id is used when you need to set an Id on a [**widget**]({{< ref path="/api/widget" lang="en" >}}) provided by the [**BFF**]({{< ref path="/key-concepts#backend-for-frontend" lang="en" >}}). To do so, you just have to call this method on the widget you want to set the Id during the moment you're creating your widget.

See how this works on the link below:

```kotlin
Text(text = "Text with id").setId("myTextId")
```

## Get Id

On the Get Id case, you have different ways to set it according to each frontend platform. Check out below:

On iOS, the Id is registered on `accessibilityIdentifier`. So, to use then, you just need to use the same value used on `setId()`.

See how it works on the example below:

```swift
"myTextId"
```
