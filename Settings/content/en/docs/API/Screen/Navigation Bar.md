---
title: Navigation Bar
weight: 332
---

---

## **What is it?**

Class that defines a navigation bar in the top of the screen and it's composed by the following attributes:

| **Attribute** | **Type** | Required | Definition |
| :--- | :--- | :--- | :--- |
| title | String |  | Title for the action/navigation's bar. |
| show back button | Bool |  | Enables the return bottom on the action/navigation's bar. Default is `true`. |
| style id | String |  | Allows local customization for the action/navigation's bar. |
| navigation bar items | [**Navigation Bar Item**](navigation-bar-item.md) |  | Defines an item's list for the action/navigation's bar. |
| back button accessibility | [**Accessibility**](../accessibility.md) |  | Accessibility's informations of the backButton. |

## **How to use it?**



```kotlin
{
   "_beagleComponent_":"beagle:screenComponent",
   "navigationBar":{
      "title":"Beagle Screen",
      "showBackButton":true,
      "navigationBarItems":[
         {
            "_beagleComponent_":"beagle:navigationBarItem",
            "text":"",
            "image":{
               "_beagleImagePath_":"local",
               "mobileId":"informationImage"
            },
            "action":{
               "_beagleAction_":"beagle:alert",
               "title":"Screen",
               "message":"Some message",
               "labelOk":"OK"
            }
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
```



```kotlin
 Screen(
        navigationBar = NavigationBar(
            title = "Beagle Screen",
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
