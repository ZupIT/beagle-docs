---
title: Justify Content
weight: 60
description: "Here, you'll find lists' information about the Justify Content property"
---

---

## Justify Content

Justify-content defines the alignment of items along the main axis \(horizontally\) and has the following attributes:**`flex-start, flex-end, center, space-between, space-around and space-Evenly.`**

{{% alert color="danger" %}}
The size of a container can interfere on this property behaviour. When the elements are positioned, they can be set in a column instead of a line, like the example below. If the container does not have enough height to contain all the stacked elements, this property won't be able to show the element in a column.
{{% /alert %}}

### **Flex Start \(Default\)**

Items are aligned at the beginning of the main axis; lined up at the screen top:

![](https://lh3.googleusercontent.com/lGvBeuDomacFBb4pO3OiEr7tWCki__NCxe2h8kWgr1ZTALkoBLcFFmP6sj5ANH-GV7EYy4faNzldH1kKbk_kyvhdAlUfnWlcBylbeskfkBNojDDh96XM5HAkO09wi9VnelVp3yna)

{{< tabs id="T19" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "texto 1"),
                createText(backgroundColor = "#dd7631", text = "texto 2"),
                createText(backgroundColor = "#649d66", text = "texto 3")
            )
        ).setFlex {
              grow = 1.0
              justifyContent = JustifyContent.FLEX_START
          }

    }
```

{{% /tab %}}

{{% tab name="Swift" %}}

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
                            .justifyContent(.flexStart)
                     )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Flex End**

Items are aligned from the end of the main axis; aligned below, at the screen's bottom:

![](https://lh5.googleusercontent.com/8rcnK5Gv4Xk84fyB3uF2RrVWqgsS0DZisVMlWHTxSJaWDW-8xM-PGwx4Mkhtkf8PTNgB5jvyVkk9dsE8xfU3EJMRbakkxIhfXrTBVZcDW7tyiZkhB-Dis5xTA_F2avLBdbb2M1Gw)

{{< tabs id="T20" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "texto 1"),
                createText(backgroundColor = "#dd7631", text = "texto 2"),
                createText(backgroundColor = "#649d66", text = "texto 3")
            )
        ).setFlex {
              grow = 1.0
              justifyContent = JustifyContent.FLEX_END
          }

    }
```

{{% /tab %}}

{{% tab name="Swift" %}}

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
                            .justifyContent(.flexEnd)
                      )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Center**

Items are aligned at the center of the main axis; in the center of the screen:

![](https://lh4.googleusercontent.com/FZLxyERCH2JFW7QkwlVvoidRuxI5Jif6R3cRNTFbwDarcd0H3ssyn1KvPeUZSHVQXLJSAZ8X-pWsbdWwvHd4dk7xhd4eO0_cDFWvxexBrjFejBYr1CChp4ltqF6JmkzD3AcQ9h12)

{{< tabs id="T21" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "texto 1"),
                createText(backgroundColor = "#dd7631", text = "texto 2"),
                createText(backgroundColor = "#649d66", text = "texto 3")
            )
        ).setFlex {
              grow = 1.0
              justifyContent = JustifyContent.CENTER
          }

    }
```

{{% /tab %}}

{{% tab name="Swift" %}}

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
                            .justifyContent(.center)
                      )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Space Between**

The first item is moved to the main axis start, the last one is moved to the main axis end and the rest are evenly distributed making the space between them equal:

![](https://lh3.googleusercontent.com/th-V4Vn6jKMakkKPZiJzgCZ_9L8yu6h3M3PnhhKjDzvj7wvuruxJLY-F7eEnRwB-48kb1mRoUQRc19ZeDTWzFS_LwoiDHaZ-I8qguUG2rrSzl3nNErTsLKD6Ve9BP1Zmq_j7aDBy)

{{< tabs id="T22" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "texto 1"),
                createText(backgroundColor = "#dd7631", text = "texto 2"),
                createText(backgroundColor = "#649d66", text = "texto 3")
            )
        ).setFlex {
              grow = 1.0
              justifyContent = JustifyContent.SPACE_BETWEEN
          }

    }
```

{{% /tab %}}

{{% tab name="Swift" %}}

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
                            .justifyContent(.spaceBetween)
                     )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Space Around**

Items are evenly distributed along the main axis. Equal margins are assigned at main axis start and end \(or left and right, depending on the direction of the main axis\). For this reason, the first and last items are not sticked to the edges.

![](https://lh4.googleusercontent.com/Wpb3hkbMbZPfZwhOfAQOZl35GTU-vOyMmIuRAm6FT4jhNOVNgR4O6XwKTpmlJFD9t6pwz_fteRjiUkfDvn5plqzTtIdwAWB9a8sjcPD0r2PUp-MX72-e0-PEfA1LuZKNpfA6zA8Q)

{{< tabs id="T23" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "texto 1"),
                createText(backgroundColor = "#dd7631", text = "texto 2"),
                createText(backgroundColor = "#649d66", text = "texto 3")
            )
        ).setFlex {
              grow = 1.0
              justifyContent = JustifyContent.SPACE_AROUND
          }

    }
```

{{% /tab %}}

{{% tab name="Swift" %}}

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
                            .justifyContent(.spaceAround)
                    )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Space Evenly**

Items are evenly distributed along the main axis:

![](https://lh6.googleusercontent.com/cri4jTsOK470v0QCI71blFki0sxwQB1xC8ZGSqxuZa7UYbuxjrnVM3dWDM8dLRyUO4XiMNgl2oXF55Fy43rfQjH9uw_mQ0QAK3D_YDWPwuksUMjxDdHx11q-9n0tbL3PLhx3TgXb)

{{< tabs id="T24" >}}
{{% tab name="Kotlin" %}}

```kotlin
 private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "texto 1"),
                createText(backgroundColor = "#dd7631", text = "texto 2"),
                createText(backgroundColor = "#649d66", text = "texto 3")
            )
        ).setFlex {
              grow = 1.0
              justifyContent = JustifyContent.SPACE_EVENLY
          }

    }
```

{{% /tab %}}

{{% tab name="Swift" %}}

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
                            .justifyContent(.spaceEvenly)
                     )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

**For more information about Justify Content, check out the [**Yoga Layout documentation**](https://yogalayout.com/flex/).**
