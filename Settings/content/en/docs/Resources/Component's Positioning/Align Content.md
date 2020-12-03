---
title: Align Content
weight: 62
description: This section lists information about the Align Content property
---

---

## Align Content

This property defines how the lines are distributed along the cross axis \(vertical\)and has the following attributes:**`flex-start, flex-end, center, space-between, space-around e stretch.`**

### **Stretch**

Lines are evenly distributed along the cross axis and take up all the available space:

![](https://lh3.googleusercontent.com/b_00j2HH0UvQnJB8E8JenWZvjhJ5uzi9awrlVQ5HSKaWitrEoeW6rLWTY9my9CzVZUmIfbnGR65irYZRV_VygYZdOxU7k9aIGm8DYOkCFxSt6IyjQbnpvcU0NpnUVimlFoHTrCHE)




```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "texto 1"),
                createText(backgroundColor = "#dd7631", text = "texto 2"),
                createText(backgroundColor = "#649d66", text = "texto 3"),
                createText(backgroundColor = "#142850", text = "texto 4"),
                createText(backgroundColor = "#dd7631", text = "texto 5"),
                createText(backgroundColor = "#649d66", text = "texto 6"),
                createText(backgroundColor = "#142850", text = "texto 7"),
                createText(backgroundColor = "#dd7631", text = "texto 8"),
                createText(backgroundColor = "#649d66", text = "texto 9"),
                createText(backgroundColor = "#142850", text = "texto 10"),
                createText(backgroundColor = "#dd7631", text = "texto 11"),
                createText(backgroundColor = "#649d66", text = "texto 12"),
                createText(backgroundColor = "#142850", text = "texto 13"),
                createText(backgroundColor = "#dd7631", text = "texto 14"),
                createText(backgroundColor = "#649d66", text = "texto 15")
            )
        ).applyFlex(
            Flex(
                grow = 1.0,
                flexDirection = FlexDirection.ROW,
                flexWrap = FlexWrap.WRAP,
                alignContent = AlignContent.STRETCH
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
                    createText(backgroundColor: "#142850",text: "4"),
                    createText(backgroundColor: "#dd7631",text: "5"),
                    createText(backgroundColor: "#649d66",text: "6"),
                    createText(backgroundColor: "#142850",text: "7"),
                    createText(backgroundColor: "#dd7631",text: "8"),
                    createText(backgroundColor: "#649d66",text: "9"),
                    createText(backgroundColor: "#142850",text: "10"),
                    createText(backgroundColor: "#dd7631",text: "11"),
                    createText(backgroundColor: "#649d66",text: "12"),
                    createText(backgroundColor: "#142850",text: "13"),
                    createText(backgroundColor: "#dd7631",text: "14"),
                    createText(backgroundColor: "#649d66",text: "15"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .grow(1)
                            .flexDirection(.row)
                            .flexWrap(.wrap)
                            .alignContent(.stretch)
                        )
                )
        )
    }
```



### **Flex Start \(default\)** 

Lines are distributed at the beginning of the cross axis:

![](https://lh3.googleusercontent.com/BED8XfPrj4lRkR9omN8FF2_TpniAMloMUOkavnhRi9vlyXvQRrd-GqpTLphHS3Z6URJBEnt6mV25T34Sbzaj1kuIkTOQkpRzsafFgWCtxI5RBPRUXJmCEianoGJvBvarQH17yQzI)




```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "texto 1"),
                createText(backgroundColor = "#dd7631", text = "texto 2"),
                createText(backgroundColor = "#649d66", text = "texto 3"),
                createText(backgroundColor = "#142850", text = "texto 4"),
                createText(backgroundColor = "#dd7631", text = "texto 5"),
                createText(backgroundColor = "#649d66", text = "texto 6"),
                createText(backgroundColor = "#142850", text = "texto 7"),
                createText(backgroundColor = "#dd7631", text = "texto 8"),
                createText(backgroundColor = "#649d66", text = "texto 9"),
                createText(backgroundColor = "#142850", text = "texto 10"),
                createText(backgroundColor = "#dd7631", text = "texto 11"),
                createText(backgroundColor = "#649d66", text = "texto 12"),
                createText(backgroundColor = "#142850", text = "texto 13"),
                createText(backgroundColor = "#dd7631", text = "texto 14"),
                createText(backgroundColor = "#649d66", text = "texto 15")
            )
        ).applyFlex(
            Flex(
                grow = 1.0,
                flexDirection = FlexDirection.ROW,
                flexWrap = FlexWrap.WRAP,
                alignContent = AlignContent.FLEX_START
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
                    createText(backgroundColor: "#142850",text: "4"),
                    createText(backgroundColor: "#dd7631",text: "5"),
                    createText(backgroundColor: "#649d66",text: "6"),
                    createText(backgroundColor: "#142850",text: "7"),
                    createText(backgroundColor: "#dd7631",text: "8"),
                    createText(backgroundColor: "#649d66",text: "9"),
                    createText(backgroundColor: "#142850",text: "10"),
                    createText(backgroundColor: "#dd7631",text: "11"),
                    createText(backgroundColor: "#649d66",text: "12"),
                    createText(backgroundColor: "#142850",text: "13"),
                    createText(backgroundColor: "#dd7631",text: "14"),
                    createText(backgroundColor: "#649d66",text: "15"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .grow(1)
                            .flexDirection(.row)
                            .flexWrap(.wrap)
                            .alignContent(.flexStart)
                        )
                )
        )
    }
```



### **Flex End**

Lines are distributed at the end of the cross axis

![](https://lh3.googleusercontent.com/VuZ6TTe1FITuufDUMG38PshAemVFOJRHoH8sxqPxYDnQgiG05omw-vyi0xAEGNJss2nWbqRMj9nqyEb7TV2NCaYmBa_A63nN9cNuGeZqKzgA42BmnquU22X73_1EwM8vdsUkkU52)




```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "texto 1"),
                createText(backgroundColor = "#dd7631", text = "texto 2"),
                createText(backgroundColor = "#649d66", text = "texto 3"),
                createText(backgroundColor = "#142850", text = "texto 4"),
                createText(backgroundColor = "#dd7631", text = "texto 5"),
                createText(backgroundColor = "#649d66", text = "texto 6"),
                createText(backgroundColor = "#142850", text = "texto 7"),
                createText(backgroundColor = "#dd7631", text = "texto 8"),
                createText(backgroundColor = "#649d66", text = "texto 9"),
                createText(backgroundColor = "#142850", text = "texto 10"),
                createText(backgroundColor = "#dd7631", text = "texto 11"),
                createText(backgroundColor = "#649d66", text = "texto 12"),
                createText(backgroundColor = "#142850", text = "texto 13"),
                createText(backgroundColor = "#dd7631", text = "texto 14"),
                createText(backgroundColor = "#649d66", text = "texto 15")
            )
        ).applyFlex(
            Flex(
                grow = 1.0,
                flexDirection = FlexDirection.ROW,
                flexWrap = FlexWrap.WRAP,
                alignContent = AlignContent.FLEX_END
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
                    createText(backgroundColor: "#142850",text: "4"),
                    createText(backgroundColor: "#dd7631",text: "5"),
                    createText(backgroundColor: "#649d66",text: "6"),
                    createText(backgroundColor: "#142850",text: "7"),
                    createText(backgroundColor: "#dd7631",text: "8"),
                    createText(backgroundColor: "#649d66",text: "9"),
                    createText(backgroundColor: "#142850",text: "10"),
                    createText(backgroundColor: "#dd7631",text: "11"),
                    createText(backgroundColor: "#649d66",text: "12"),
                    createText(backgroundColor: "#142850",text: "13"),
                    createText(backgroundColor: "#dd7631",text: "14"),
                    createText(backgroundColor: "#649d66",text: "15"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .grow(1)
                            .flexDirection(.row)
                            .flexWrap(.wrap)
                            .alignContent(.flexEnd)
                        )
                )
        )
    }
```



### **Center**

Lines are kept in center of the cross axis:

![](https://lh3.googleusercontent.com/Zg9Ki80KtZlAOJPkXUWptxdcCoKGQMiUvfSkFwfA3KK3fvNg4JmTes1kQ45IXkqwnIei0AFGUr_DqJel4PVG-8AUmx1HEKEC-KiUOjXJoSpdnzPaoQbWuqQabGEjMNHaE8-Jswwc)




```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "texto 1"),
                createText(backgroundColor = "#dd7631", text = "texto 2"),
                createText(backgroundColor = "#649d66", text = "texto 3"),
                createText(backgroundColor = "#142850", text = "texto 4"),
                createText(backgroundColor = "#dd7631", text = "texto 5"),
                createText(backgroundColor = "#649d66", text = "texto 6"),
                createText(backgroundColor = "#142850", text = "texto 7"),
                createText(backgroundColor = "#dd7631", text = "texto 8"),
                createText(backgroundColor = "#649d66", text = "texto 9"),
                createText(backgroundColor = "#142850", text = "texto 10"),
                createText(backgroundColor = "#dd7631", text = "texto 11"),
                createText(backgroundColor = "#649d66", text = "texto 12"),
                createText(backgroundColor = "#142850", text = "texto 13"),
                createText(backgroundColor = "#dd7631", text = "texto 14"),
                createText(backgroundColor = "#649d66", text = "texto 15")
            )
        ).applyFlex(
            Flex(
                grow = 1.0,
                flexDirection = FlexDirection.ROW,
                flexWrap = FlexWrap.WRAP,
                alignContent = AlignContent.CENTER
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
                    createText(backgroundColor: "#142850",text: "4"),
                    createText(backgroundColor: "#dd7631",text: "5"),
                    createText(backgroundColor: "#649d66",text: "6"),
                    createText(backgroundColor: "#142850",text: "7"),
                    createText(backgroundColor: "#dd7631",text: "8"),
                    createText(backgroundColor: "#649d66",text: "9"),
                    createText(backgroundColor: "#142850",text: "10"),
                    createText(backgroundColor: "#dd7631",text: "11"),
                    createText(backgroundColor: "#649d66",text: "12"),
                    createText(backgroundColor: "#142850",text: "13"),
                    createText(backgroundColor: "#dd7631",text: "14"),
                    createText(backgroundColor: "#649d66",text: "15"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .grow(1)
                            .flexDirection(.row)
                            .flexWrap(.wrap)
                            .alignContent(.center)
                        )
                )
        )
    }
```



### **Space Between**

The first line is moved to the beginning of the cross axis, and the last one to the end. The rest are evenly distributed between:

![](https://lh6.googleusercontent.com/FuNZ44wVYsY92lrIC41adtO0FfQPiNCc-DrDAskJUVHaYokYANlo9s-RlD6OL_su4lDZMjGmclKvE20KA_qOBjyHESqA_bjLUYecnFQVqrqN0zHYcIT8fint32wZ6YPKm19-wxLG)




```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "texto 1"),
                createText(backgroundColor = "#dd7631", text = "texto 2"),
                createText(backgroundColor = "#649d66", text = "texto 3"),
                createText(backgroundColor = "#142850", text = "texto 4"),
                createText(backgroundColor = "#dd7631", text = "texto 5"),
                createText(backgroundColor = "#649d66", text = "texto 6"),
                createText(backgroundColor = "#142850", text = "texto 7"),
                createText(backgroundColor = "#dd7631", text = "texto 8"),
                createText(backgroundColor = "#649d66", text = "texto 9"),
                createText(backgroundColor = "#142850", text = "texto 10"),
                createText(backgroundColor = "#dd7631", text = "texto 11"),
                createText(backgroundColor = "#649d66", text = "texto 12"),
                createText(backgroundColor = "#142850", text = "texto 13"),
                createText(backgroundColor = "#dd7631", text = "texto 14"),
                createText(backgroundColor = "#649d66", text = "texto 15")
            )
        ).applyFlex(
            Flex(
                grow = 1.0,
                flexDirection = FlexDirection.ROW,
                flexWrap = FlexWrap.WRAP,
                alignContent = AlignContent.SPACE_BETWEEN
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
                    createText(backgroundColor: "#142850",text: "4"),
                    createText(backgroundColor: "#dd7631",text: "5"),
                    createText(backgroundColor: "#649d66",text: "6"),
                    createText(backgroundColor: "#142850",text: "7"),
                    createText(backgroundColor: "#dd7631",text: "8"),
                    createText(backgroundColor: "#649d66",text: "9"),
                    createText(backgroundColor: "#142850",text: "10"),
                    createText(backgroundColor: "#dd7631",text: "11"),
                    createText(backgroundColor: "#649d66",text: "12"),
                    createText(backgroundColor: "#142850",text: "13"),
                    createText(backgroundColor: "#dd7631",text: "14"),
                    createText(backgroundColor: "#649d66",text: "15"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .grow(1)
                            .flexDirection(.row)
                            .flexWrap(.wrap)
                            .alignContent(.spaceBetween)
                        )
                )
        )
    }
```



### **Space Around**

Lines are evenly distributed along the cross axis. Margins are assigned equally to the left and right \(or above and below, depending on the direction of the cross axis\). That is why the first and last lines are not sticked to the edges

![](https://lh6.googleusercontent.com/XLrdmMcnGnWX74fZTuLPCHJzJma6mxIWOmwfqLENLhvj3c6Y5vQ7u0HkQIeJvRDLS4-nLtPlJh-TZ2tO0A4go0ZJOx8dvv6BCyUZTs5gnJU9ruRS_GEwQfLXCfkqlj2LKC7EFtUb)




```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "texto 1"),
                createText(backgroundColor = "#dd7631", text = "texto 2"),
                createText(backgroundColor = "#649d66", text = "texto 3"),
                createText(backgroundColor = "#142850", text = "texto 4"),
                createText(backgroundColor = "#dd7631", text = "texto 5"),
                createText(backgroundColor = "#649d66", text = "texto 6"),
                createText(backgroundColor = "#142850", text = "texto 7"),
                createText(backgroundColor = "#dd7631", text = "texto 8"),
                createText(backgroundColor = "#649d66", text = "texto 9"),
                createText(backgroundColor = "#142850", text = "texto 10"),
                createText(backgroundColor = "#dd7631", text = "texto 11"),
                createText(backgroundColor = "#649d66", text = "texto 12"),
                createText(backgroundColor = "#142850", text = "texto 13"),
                createText(backgroundColor = "#dd7631", text = "texto 14"),
                createText(backgroundColor = "#649d66", text = "texto 15")
            )
        ).applyFlex(
            Flex(
                grow = 1.0,
                flexDirection = FlexDirection.ROW,
                flexWrap = FlexWrap.WRAP,
                alignContent = AlignContent.SPACE_AROUND
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
                    createText(backgroundColor: "#142850",text: "4"),
                    createText(backgroundColor: "#dd7631",text: "5"),
                    createText(backgroundColor: "#649d66",text: "6"),
                    createText(backgroundColor: "#142850",text: "7"),
                    createText(backgroundColor: "#dd7631",text: "8"),
                    createText(backgroundColor: "#649d66",text: "9"),
                    createText(backgroundColor: "#142850",text: "10"),
                    createText(backgroundColor: "#dd7631",text: "11"),
                    createText(backgroundColor: "#649d66",text: "12"),
                    createText(backgroundColor: "#142850",text: "13"),
                    createText(backgroundColor: "#dd7631",text: "14"),
                    createText(backgroundColor: "#649d66",text: "15"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .grow(1)
                            .flexDirection(.row)
                            .flexWrap(.wrap)
                            .alignContent(.spaceAround)
                        )
                )
        )
    }
```



For more information about Align Content, check out the [**Yoga Layout documentation**](https://yogalayout.com/docs/flex/).
