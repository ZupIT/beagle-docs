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

{{< figure src="/shared/flex/flex-start.png" width="150">}}

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

{{< figure src="/shared/flex/flex-end.png" width="150">}}

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

{{< figure src="/shared/flex/center.png" width="150">}}

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

{{< figure src="/shared/flex/space-between.png" width="150">}}

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

{{< figure src="/shared/flex/space-around.png" width="150">}}

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

{{< figure src="/shared/flex/space-evenly.png" width="150">}}

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
