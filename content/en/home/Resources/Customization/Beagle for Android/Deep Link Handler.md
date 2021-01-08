---
title: Deep Link Handler
weight: 122
description: >-
  You will find here a description about DeepLinkHandler class and methods
  details.
---

---

## Introduction

**`DeepLinkHandler`** is a **interface** that defines how to configure navigation between a
**Server-Driven screen** and a **native screen.**

## Example

### Creating a DeepLinkHandler

To perform this configuration, you must create a class that implements the `DeepLinkHandler` interface and annotates it with **`@BeagleComponent`**, as listed below:

```kotlin
@BeagleComponent
class AppDeepLinkHandler : DeepLinkHandler {
    override fun getDeepLinkIntent(
        rootView: RootView,
        path: String,
        data: Map<String, String>?,
        shouldResetApplication: Boolean
    ) = Intent(path)
}
```

In the _getDeepLinkIntent_ method, you can configure the navigation screens of server driven ui
flows
to their native screens, making sure that the beagle recognizes your rule.

| **Attribute**          | **Type**             |                                                      **Definition**                                                      |
| :--------------------- | :------------------- | :----------------------------------------------------------------------------------------------------------------------: |
| rootView               | RootView             |                                 RootView holds the reference to the activity or fragment                                 |
| path                   | String               |                  Route parameter that can be set by Navigate.OpenNativeRoute(route: "navigate.myview")                   |
| data                   | Map<String, String>? | Parameter map that can be defined by OpenNativeRoute(route = "navigate.myview" , data = mapOf("param1" to "paramValue")) |
| shouldResetApplication | Boolean              |    Opens a screen with the route informed from a new flow and clears the stack of screens for the entire application.    |

Once you made it, it's necessary modify the Android manifest file:

1. **Step 1:** You must add an `intent filter`at the activity you wish to navigate to.
2. **Step 2:** You will add an `action tag` that will identify this activity. The `id name`we used here is `"navigate.myview"`
3. **Step 3:** Add an `category tag` and name it `"android.intent.category.DEFAULT" ,` like the example below

```markup
//AndroidManifest
<activity android:name=".activities.DeepLinkActivity">
    <intent-filter>
        <action android:name="navigate.myview"/>
        <category android:name="android.intent.category.DEFAULT"/>

    </intent-filter>
</activity>
```

And that's it. Now you just need to call the [**Navigate**](/pt/home/api/actions/navigate/) **action** with the method [**OpenNativeRoute**](/pt/home/api/actions/navigate/opennativeroute) like the example below:

```kotlin
//Widget used to navigate to a native screen
Button(
    text = "Click to navigate!",
    onPress = listOf(
        Navigate.OpenNativeRoute("navigate.myview")
    )
)
```
