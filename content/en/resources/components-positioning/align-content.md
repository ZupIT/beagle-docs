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

{{< figure src="/shared/flex/stretch.png" width="150">}}

{{< tabs id="T25" >}}
{{% tab name="Kotlin" %}}
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
        ).setFlex {
              grow = 1.0
              flexDirection = FlexDirection.ROW
              flexWrap = FlexWrap.WRAP
              alignContent = AlignContent.STRETCH
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

{{% /tab %}}
{{< /tabs >}}

### **Flex Start \(default\)**

Lines are distributed at the beginning of the cross axis:

{{< figure src="/shared/flex/flex-start-row.png" width="150">}}

{{< tabs id="T26" >}}
{{% tab name="Kotlin" %}}

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
        ).setFlex {
              grow = 1.0
              flexDirection = FlexDirection.ROW
              flexWrap = FlexWrap.WRAP
              alignContent = AlignContent.FLEX_START
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

{{% /tab %}}
{{< /tabs >}}

### **Flex End**

Lines are distributed at the end of the cross axis

{{< figure src="/shared/flex/flex-end-row.png" width="150">}}

{{< tabs id="T27" >}}
{{% tab name="Kotlin" %}}

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
        ).setFlex {
              grow = 1.0
              flexDirection = FlexDirection.ROW
              flexWrap = FlexWrap.WRAP
              alignContent = AlignContent.FLEX_END
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

{{% /tab %}}
{{< /tabs >}}

### **Center**

Lines are kept in center of the cross axis:

{{< figure src="/shared/flex/center-row.png" width="150">}}

{{< tabs id="T28" >}}
{{% tab name="Kotlin" %}}

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
        ).setFlex {
              grow = 1.0
              flexDirection = FlexDirection.ROW
              flexWrap = FlexWrap.WRAP
              alignContent = AlignContent.CENTER
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

{{% /tab %}}
{{< /tabs >}}

### **Space Between**

The first line is moved to the beginning of the cross axis, and the last one to the end. The rest are evenly distributed between:

{{< figure src="/shared/flex/space-between-row.png" width="150">}}

{{< tabs id="T29" >}}
{{% tab name="Kotlin" %}}

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
        ).setFlex {
              grow = 1.0
              flexDirection = FlexDirection.ROW
              flexWrap = FlexWrap.WRAP
              alignContent = AlignContent.SPACE_BETWEEN
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

{{% /tab %}}
{{< /tabs >}}

### **Space Around**

Lines are evenly distributed along the cross axis. Margins are assigned equally to the left and right \(or above and below, depending on the direction of the cross axis\). That is why the first and last lines are not sticked to the edges

{{< figure src="/shared/flex/space-around-row.png" width="150">}}

{{< tabs id="T30" >}}
{{% tab name="Kotlin" %}}

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
        ).setFlex {
              grow = 1.0
              flexDirection = FlexDirection.ROW
              flexWrap = FlexWrap.WRAP
              alignContent = AlignContent.SPACE_AROUND
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

{{% /tab %}}
{{< /tabs >}}

For more information about Align Content, check out the [**Yoga Layout documentation**](https://yogalayout.com/flex/).
