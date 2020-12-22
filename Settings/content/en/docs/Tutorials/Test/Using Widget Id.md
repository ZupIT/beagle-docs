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

The method Set Id is used when you need to set an Id on a [**widget**](../../../api/widget)  provided by [**BFF**](../../../principais-conceitos#backend-for-frontend). To do so, you just have to call this method on the widget you wanna set the Id during the moment you're creating your widget. 

See how this works on the link below:


```kotlin
Text(text = "Text with id").setId("myTextId")
```

## Get Id

On the Get Id case, you have different ways to set it according to each frontend platform.

Check out below: 

{{< tabs id="T104" >}}
{{% tab name="Android" %}}
On Android, to get an Widget Id you just need to call the `String.toAndroidId()` and this method will return the Id to use where you need. 

See how it works on the like below: 
 

```kotlin
"myTextId".toAndroidId()
```
{{% /tab %}}

{{% tab name="iOS" %}}
On iOS, the Id is registered on `accessibilityIdentifier`. So, to use then, you just need to use the same value used on `setId()`.

See how it works on the like below:

```swift
"myTextId"
```
{{% /tab %}}

{{% tab name="Web" %}}
On Web, there is a default configuration that every component rendered by Beagle receives a 'data-beagle-id' in its html, in case the backend doesn't set this Id.

If you want to retrieve it, just use common javascript and html running the command below:

```javascript
element.getAttribute(widgetId)
```

The Widget Id value will be a custom if the backend set the Id \(in our example, "myTextId"\), or will be a default value \('data-beagle-id'\).

{{% /tab %}}
{{< /tabs >}}
