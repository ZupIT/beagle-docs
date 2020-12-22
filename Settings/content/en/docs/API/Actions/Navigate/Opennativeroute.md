---
title: Opennativeroute
weight: 248
description: Here you'll find OpenNavigateRoute description and its attributes.
---

---

## What is it?

It opens a new screen through a [**deep link**](../../../../../../../../../resources/customization/beagle-for-android/deep-link-handler)**.​**

The structure is represented by the attributes below:

| **Attribute** | **Type** | Required | **Definition** |
| :--- | :--- | :--- | :--- |
| route | String |    ✓ | Identifier to open a new screen. |
| shouldResetApplication | Boolean |  | Restart an applications preview stack. |
| Data | Map &lt;String, String&gt; |  | Send data to a new screen. |

{{% alert color="warning" %}}
You must configure a [**DeepLinkHandler**](../../../resources/customization/beagle-for-android/deep-link-handler) in order to use this component. 
{{% /alert %}}

## How to use it?

The example below, we have a screen coming from BFF with a button when you click, opens a native screen. 

To test is, just configure [**Deep Link Handler**](../../../resources/customization/beagle-for-android/deep-link-handler) for Android or **openNativeRoute** for iOS. Besides, your BFF's endpoint must return the code screen below and call it in the frontend. 

{{< tabs id="T92" >}}
{{% tab name="JSON" %}}
```javascript
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:button",
    "text" : "Click me!",
    "onPress" : [ {
      "_beagleAction_" : "beagle:openNativeRoute",
      "route" : "my-native",
      "shouldResetApplication" : false
    } ]
  }
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Screen(
    child = Button(
        text = "Click me!",
        onPress = listOf(
            Navigate.OpenNativeRoute(
                route = "my-native"
            )
        )
    )
)
```
{{% /tab %}}
{{< /tabs >}}

### 👉 [Test this example on Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/button.json)
