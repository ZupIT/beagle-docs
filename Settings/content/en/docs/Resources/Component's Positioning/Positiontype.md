---
title: Positiontype
weight: 76
description: This section lists information about the Position Type property
---

---

## PositionType

This property defines the position of an element within the parent and whether it should be used as `Relative` or `Absolute`

### **Relative \(default\)** 

This property positions the element in relation to the other elements in the same flow, causing them to move respecting the limits on their sibling elements.

This is how it displays 

![](https://lh3.googleusercontent.com/u2gdm-w0DSIrhM07gy50F5bZyJQxeb0ZIU14OSYTgHSaNvFzPIWLfuNV7H-c9G_DkqathtRsM3R8a9KGJePgqJURYS0-cpd8BUHBlLdEyPFIcOAAuP6kM7_KD1y-Rd0wSo_xTIMb)




```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1").applyFlex(
                    Flex(size = Size(width = 130.unitReal(),height = 130.unitReal()))
                ),
                createText(backgroundColor = "#dd7631", text = "2").applyFlex(
                    Flex(size = Size(width = 100.unitReal(),height = 100.unitReal()))
                ),
                createText(backgroundColor = "#649d66", text = "3").applyFlex(
                    Flex(size = Size(width = 70.unitReal(),height = 70.unitReal()))
                )
            )
        ).applyFlex(
            Flex(flexDirection = FlexDirection.ROW)
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
                    createText(backgroundColor: "#142850",text: "1").applyFlex(
                        Flex().size(Size().height(130).width(130))),
                    createText(backgroundColor: "#dd7631",text: "2").applyFlex(
                        Flex().size(Size().height(100).width(100))),
                    createText(backgroundColor: "#649d66",text: "3").applyFlex(
                        Flex().size(Size().height(70).width(70))),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .flexDirection(.row)
                        )
                )
        )
    }
```



### **Absolute**

This element when you wish that an element "escape" the normal flow on the layout. He will ignore other elements and displays acording to its father parent. 

Check how it works:

![](https://lh3.googleusercontent.com/bgiRV_Q8dDvwAyBhF0KLY_1PAr-frFbSnBoolJ4CeUGBNNtophsHr-e14TqFPInoUFsC4TNx9y1FXafbwMI9zNC2D6TJokzo-cdxeJ_pxQMuDrMO5d0QS-bT2HmsDpIDt0y13k26)




```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1").applyFlex(
                    Flex(size = Size(width = 130.unitReal(),height = 130.unitReal()))
                ),
                createText(backgroundColor = "#dd7631", text = "2").applyFlex(
                    Flex(size = Size(width = 100.unitReal(),height = 100.unitReal()))
                ),
                createText(backgroundColor = "#649d66", text = "3").applyFlex(
                    Flex(size = Size(width = 70.unitReal(),height = 70.unitReal()),
                    positionType = FlexPositionType.ABSOLUTE)
                )
            )
        ).applyFlex(
            Flex(flexDirection = FlexDirection.ROW)
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
                    createText(backgroundColor: "#142850",text: "1").applyFlex(
                        Flex().size(Size().height(130).width(130))),
                    createText(backgroundColor: "#dd7631",text: "2").applyFlex(
                        Flex().size(Size().height(100).width(100))),
                    createText(backgroundColor: "#649d66",text: "3").applyFlex(
                        Flex()
                            .positionType(.absolute)
                            .size(Size().height(70).width(70))),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .flexDirection(.row)
                        )
                )
        )
    }
```



For more information about PositionType, check out the [**Yoga Layout documentation**](https://yogalayout.com/docs/flex/).
