---
title: Grow
weight: 58
description: This section lists information about the Grow property
---

---

## Grow

This property defines the proportion that an item should grow when necessary. Its value is 0 by default and that indicates that the item should not grow. This attribute accepts only Double positive values

### **Example 1**

The grow applied has value 0 and the container size did not change

![Exemplo 1](https://lh6.googleusercontent.com/KPNe0Hnad094L8QgkRrDFcAtvAoBSeVvrA3ihurk6vVzGaQyJxSZ6dJtsLCe9gabKeIFEn1eB-465OK_wu7LYk7I7MKKBKEPwaCs4ZoaQDXdxjc2d80VrKBf69dfYX2nOWm7Pi2C)




```kotlin
private fun screen() :Widget{
        return Container(
        children = listOf(
            createText(backgroundColor = "#142850", text = "texto 1"),
            createText(backgroundColor = "#dd7631", text = "texto 2"),
            createText(backgroundColor = "#649d66", text = "texto 3")
        )
    ).applyStyle(
        Style(
            backgroundColor = "#000000",
            flex = Flex(grow = 0.0)
        )
    )

    }
```




```swift
 private func screen() -> Screen {
        return
            Screen(
                navigationBar: NavigationBar(title: "Flex"),
                child:
                Container(children: [
                    createText(backgroundColor: "#142850",text: "1"),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .grow(0)
                     )
                )
        )
    }
```



### **Example 2**

Grow 1.0 has been applied and the container size has grown until it meets the screen limits:

![Exemplo 2](https://lh4.googleusercontent.com/oFfNtXonnH0zvhYz0-sVnVwHUFbd23JSAdjSKURM9svVKedl3pT51M_lcuvoXQgr8vhTHqjHFK_GCtW9Lpl__c6ybSUsmEvUhNUpg-zgIKYWqQKMLLpxPXSBxaikLGr6541OXLtM)




```kotlin
private fun screen() :Widget{
        return Container(
        children = listOf(
            createText(backgroundColor = "#142850", text = "texto 1"),
            createText(backgroundColor = "#dd7631", text = "texto 2"),
            createText(backgroundColor = "#649d66", text = "texto 3")
        )
    ).applyStyle(
        Style(
            backgroundColor = "#000000",
            flex = Flex(grow = 1.0)
        )
    )

    }
```




```swift
private func screen() -> Screen {
        return
            Screen(
                navigationBar: NavigationBar(title: "Flex"),
                child:
                Container(children: [
                    createText(backgroundColor: "#142850",text: "1"),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .grow(1)
                     )
                )
        )
    }
```



For more information about Grow, check out the [**Yoga Layout documentation**](https://yogalayout.com/docs/flex/).
