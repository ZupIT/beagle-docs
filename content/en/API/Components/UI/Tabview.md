---
title: Tabview
weight: 298
description: Description of the component TabView and its attributes. This componente was
---

---

{{% alert color="danger" %}}
 This component was deprecated in Beagle version 1.1.0 and will be removed in a future version. Use [`TabBar`](/api/components/ui/tabbar) instead.
{{% /alert %}}

## What is TabView?

A `TabView` is a component used to navigate between views that are listed in a tab. It displays all tabs that correspond to different previews that can be accessed through it.

The structure is represented by the attributes below:

| **Attribute** | **Type** | Required | **Definition**  |
| :--- | :--- | :--- | :--- |
| children | List&lt;[**TabItem**](#what-is-tabitem)&gt; |      ✓ | List of tab items available in the `TabView` component. The `TabItem` itself is not a `widget`, but its content is a server driven component received through Beagle.  |
| styleId | String |  | It uses a key that it is registered in the Design System of evert platform to customize your component.  |
| context | ContextData |  | Add a context to your `TabView` component. |

## What is Tab**Item?**

TabView components items that have this structure:

| **Attribute** | **Type** | Required | **Definition** |
| :--- | :--- | :--- | :--- |
| title | String |  | Displays the text in a `TabView` item.  If it is not declared or if it is configured with the null value, it will not be shown on the screen.  |
| icon | Path |  | Displays a local image as an icon in the `TabView` item. If it is not declared or if it is configured with the null value, it will not be shown on the screen.  |
| child | Component |    ✓ | Defines which `view` will be  inflated in the `TabItem`, according to the `tab` clicked. Any server-driven component can be a Tab View item.  |

{{% alert color="warning" %}}
If you don't declare the title and the icon on the TabItem, the empty space will remain. If you need a navigation between viewers without Tab interface, it is recommended that you use the navigation component.  
{{% /alert %}}

## How to use it?

{{< tabs id="T121" >}}
{{% tab name="JSON" %}}
<!-- json-playground:tabview.json
{
   "_beagleComponent_":"beagle:screenComponent",
   "child":{
      "_beagleComponent_":"beagle:tabView",
      "children":[
         {
            "title":"Tab 1",
            "child":{
               "_beagleComponent_":"beagle:text",
               "text":"First Tab Content",
               "style":{
                  "flex":{
                     "grow":1
                  }
               }
            }
         },
         {
            "title":"Tab 2",
            "child":{
               "_beagleComponent_":"beagle:text",
               "text":"Second Tab Content",
               "style":{
                  "flex":{
                     "grow":1
                  }
               }
            }
         }
      ]
   }
}
-->
{{% playground file="tabview.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Screen(
  child = Container(
      children = listOf(
          TabView(children =
              listOf(
                  TabItem("Tab 1",
                      Text("First Tab Content").applyFlex(flex = Flex(grow = 1.0))
                  ),
                  TabItem("Tab 2",
                      Text("Second Tab Content").applyFlex(flex = Flex(grow = 1.0))
                  )
              )
              )
          )
      )
  )
```
{{% /tab %}}
{{< /tabs >}}

| TabView full screen | TabView with dividing screen |
| :---: | :---: |
| ![](/beagle-tab-view.gif) | ![](/beagle-tab-view-meia-tela.gif) |
