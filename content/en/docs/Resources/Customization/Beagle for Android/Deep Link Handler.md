---
title: Deep Link Handler
weight: 122
description: >-
  You will find here a description about DeepLinkHandler class and methods
  details.
---

---

## Introduction

The **`DeepLinkHandler`** is an **interface** that sets how to configure the navigation between **Server-Driven activities** and **native activities**. 

## Example

### Creating a DeepLinkHandler

To make this configuration, you must create a class that implements the `DeepLinkHandler` interface, and that annotates it with `@BeagleComponent,` like listed below:

```kotlin
@BeagleComponent
class AppDeepLinkHandler : DeepLinkHandler {
    override fun getDeepLinkIntent(
        rootView: RootView,
        path: String,
        data: Map<String, String>?,
        shouldResetApplication: Boolean
    ) = Intent("openThisActivity")
}
```

Once you made it, it's necessary modify the Android manifest file:

1. **Step 1:** You must add an `intent filter`at the activity you wish to navigate to.
2. **Step 2:** You will add an `action tag` that will identify this activity. The `id name`we used here is `"openThisActivity"`
3. **Step 3:** Add an `category tag` and name it `"android.intent.category.DEFAULT" ,` like the example below

```markup
//AndroidManifest
<activity android:name=".activities.DeepLinkActivity">
    <intent-filter>
        <action android:name="openThisActivity"/>
        <category android:name="android.intent.category.DEFAULT"/>

    </intent-filter>
</activity>
```

And that's it. Now you just need to call the [**Navigate**](../../../../api/actions/navigate/) **action** with the **method** [**OpenNativeRoute**](../../../../api/actions/navigate/opennativeroute) like the example below: 

```kotlin
//Widget used to navigate to a native activity
Button(
    text = "Click to navigate!",
    onPress = listOf(
        Navigate.OpenNativeRoute("openThisActivity")
    )
)
```
