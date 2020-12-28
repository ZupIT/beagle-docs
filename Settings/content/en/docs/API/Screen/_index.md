---
title: Screen
weight: 357
description: Here you'll find all about screen's components and its attributes details.
---

---

## What is it?

Your screen has attributes and components that can be used and configured. On the table below, we listed the main characteristics from each of these attributes. 

| **Attribute** | **Type** | Required | **Definition** |
| :--- | :--- | :--- | :--- |
| identifier | String |  | Attribute that globally identifies a screen in your application so you can attributes actions for it. |
| safe area | [**Safe Area**](/docs/api/screen/safe-area) |  | Specifies a screen's component position. |
| navigation bar | [**Navigation Bar**](/docs/api/screen/navigation-bar) |  | Allows action/navigation's bar on the screen. |
| child | [**Server-Driven Component**](/docs/api/components/) |   ✓ | Define screen's elements. It can be any visual component that extends to`ServerDrivenComponent`. |
| style | [**Style**](/docs/api/widget#style-attributes) |  | Provide visual customization options to the `screen.` |
| screen analytics event | [**Screen Event**](/docs/api/analytics#screenview-option) |  | Configure analytics elements to your screen. |
| context | [**ContextData**](/docs/api/context/) |  | Screen's context. |

## How to use it?

{{< tabs id="T156" >}}
{{% tab name="JSON" %}}
```javascript
{
  "_beagleComponent_" : "beagle:screenComponent",
  "navigationBar" : {
    "title" : "Beagle Screen",
    "showBackButton" : true,
    "navigationBarItems" : [ {
      "_beagleComponent_" : "beagle:navigationBarItem",
      "text" : "",
      "image" : {
        "_beagleImagePath_" : "local",
        "mobileId" : "informationImage"
      },
      "action" : {
        "_beagleAction_" : "beagle:alert",
        "title" : "Screen",
        "message" : "Some message",
        "labelOk" : "OK"
      }
    } ]
  },
  "child" : {
    "_beagleComponent_" : "beagle:container",
    "children" : [ {
      "_beagleComponent_" : "beagle:text",
      "text" : "Some text"
    } ]
  }
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Screen(
        navigationBar = NavigationBar(
            title = "Beagle Screen",
            showBackButton = true,
            navigationBarItems = listOf(
                NavigationBarItem(
                    text = "",
                    image = Local.justMobile("informationImage"),
                    action = Alert(
                        title = "Screen",
                        message = "Some message",
                        labelOk = "OK"
                    )
                )
            )
        ),
        child = Container(
            children = listOf(
                Text("Some text")
            )
        )
    )
```
{{% /tab %}}
{{< /tabs >}}

### 👉 [Test this example in the Web Playground](https://beagle-playground.netlify.app/)
