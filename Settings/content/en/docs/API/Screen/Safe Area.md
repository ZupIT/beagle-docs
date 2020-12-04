---
title: Safe Area
weight: 334
---

---

{{% alert color="warning" %}}
This attribute is exclusive for iOS platform. 
{{% /alert %}}

## **What is it?**

Class that helps on your screen's components area. The `Safe Area` guarantees that the elements from the screen stay visible to the user.

| **Attribute** | **Type** | **Definition** |
| :--- | :--- | :--- |
| top | Bool | Enables a constraint of _`SafeArea`_ only in top of the screen. |
| bottom | Bool | Enables a constraint de_`SafeArea`_ only in the bottom of the screen. |
| leading | Bool | Enables a constraint de_`SafeArea`_ only in the left side of the screen. |
| trailing | Bool | Enables a constraint_`SafeArea`_ only in the right side of the screen. |

## **How to use it?**

{{< tabs name="T152" >}}
{{% tab name="JSON" %}}
```kotlin
{
   "_beagleComponent_":"beagle:screenComponent",
   "safeArea":{
      "top":true,
      "leading":true,
      "bottom":true,
      "trailing":true
   },
   "child":{
      "_beagleComponent_":"beagle:container",
      "children":[
         {
            "_beagleComponent_":"beagle:text",
            "text":"Some Text"
         }
      ]
   }
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```
        child = Container(
            children = listOf(
                Text("Some Text")
            )
        ),
        safeArea = SafeArea(
            top = true,
            leading = true,
            trailing = true,
            bottom = true
        )
    )
```
{{% /tab %}}
{{< /tabs >}}
