---
title: Navigation Bar
weight: 20
---

---

## **What is it?**

A class that defines a navigation bar in the top of the screen and it's composed by the following attributes:

| **Attribute**             | **Type**                                                | Required | Definition                                                                   |
| :------------------------ | :------------------------------------------------------ | :------- | :--------------------------------------------------------------------------- |
| title                     | String                                                  | ✓        | Title for the action/navigation's bar.                                       |
| show back button          | Bool                                                    |          | Enables the return bottom on the action/navigation's bar. Default is `true`. |
| style id                  | String                                                  |          | Allows local customization for the action/navigation's bar.                  |
| navigation bar items      | [**Navigation Bar Item**](#what-is-a-navigationbaritem) |          | Defines an item's list for the action/navigation's bar.                      |
| back button accessibility | [**Accessibility**]({{< ref path="/api/components/accessibility" lang="en" >}})            |          | Accessibility's informations of the backButton.                              |

## What is a NavigationBarItem?

A class that defines an item for `Navigation's bar` and and it has the following attributes:

| **Attribute** | **Type**                                     | Required | Definition                                                          |
| :------------ | :------------------------------------------- | :------- | :------------------------------------------------------------------ |
| text          | String                                       |          | Title for the bar's item.                                           |
| image         | Bind<String>  |          | id of the image to show in the item.                                          |
| onPress        | List&lt;[Action]({{< ref path="/api/actions" lang="en" >}})&gt;             |          | List of actions that can be done when you click on the navigations bar item. |
| accessibility | [**Accessibility**]({{< ref path="/api/components/accessibility" lang="en" >}}) |          | Accessibiliy's options for the navigation item.                     |
| id            | String                                       |          | Component's identifier.                                             |

## **How to use it?**

{{< tabs id="T157" >}}
{{% tab name="JSON" %}}

<!-- json-playground:navigation.json
{
   "_beagleComponent_":"beagle:screenComponent",
   "navigationBar":{
      "title":"Beagle Screen",
      "showBackButton":true,
      "navigationBarItems":[
         {
            "_beagleComponent_":"beagle:navigationBarItem",
            "text":"",
            "image": "informationImage",
            "onPress":[{
               "_beagleAction_":"beagle:alert",
               "title":"Screen",
               "message":"Some message",
               "labelOk":"OK"
            }]
         }
      ]
   },
   "child":{
      "_beagleComponent_":"beagle:container",
      "children":[
         {
            "_beagleComponent_":"beagle:text",
            "text":"Some text"
         }
      ]
   }
}
-->

{{% playground file="navigation.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
 Screen(
        navigationBar = NavigationBar(
            title = "Beagle Screen",
            navigationBarItems = listOf(
                NavigationBarItem(
                    text = "",
                    image = "informationImage",
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
