---
title: Overview
weight: 10
type: overview
description: Here you'll find all about screen's components and its attributes details.
---

---

## What is it?

The Screen component is a Beagle element that helps the user to define the a screen view structure. In this component we define settings such as using *`safe areas`* or displaying a toolbar/navigation bar.

All these functionalities are defined from attributes, which we list in the table below, defining the main characteristics of a Screen component.

| **Attribute** | **Type** | Required | **Definition** |
| :------------ | :------- | :------: | :------------- |
| id            | String   |          | Attribute that identifies a screen in your application |
| safeArea      | [**Safe Area**]({{< ref path="/api/components/layout/screen/safe-area" lang="en" >}}) |  | Enable Safe areas to help place views within the visible portion of the overall interface. By default it is not enabled and it won't constrain considering any safe area. |
| navigationBar | [**Navigation Bar**]({{< ref path="/api/components/layout/screen/navigation-bar" lang="en" >}}) |  | Enables some Navigation Bar details to be set, like Backbutton and Navigation Bar Itens |
| child         | [**Server-Driven Component**]({{< ref path="/api/components/" lang="en" >}}) | ✓ | Receives a list of Beagle componentes. |
| style         | [**Style**]({{< ref path="/api/components/widget#style-attributes" lang="en" >}}) |  | Provide visual customization options to the `screen` |
| context       | [**ContextData**]({{< ref path="/api/context/" lang="en" >}}) |  | Creates a *Context Data* for a Screen. |

## How to use it?

{{< tabs id="T156" >}}
{{% tab name="JSON" %}}

<!-- json-playground:screen.json
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
      "onPress" : [{
        "_beagleAction_" : "beagle:alert",
        "title" : "Screen",
        "message" : "Some message",
        "labelOk" : "OK"
      }]
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
-->

{{% playground file="screen.json" language="en" %}}
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
                    onPress = listOf(Alert(
                        title = "Screen",
                        message = "Some message",
                        labelOk = "OK"
                    ))
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
