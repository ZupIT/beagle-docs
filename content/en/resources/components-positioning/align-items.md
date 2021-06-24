---
title: Align Items
weight: 64
description: This section lists information about the Align Items property
---

---

## Align Items

This property defines how items are distributed along the container's transversal axis and has the following attributes:**`flex-start, flex-end, center, baseline e stretch.`**

### **Stretch**

Items will be expanded to fill the entire dimension of the cross axis \(height or width\).

{{< figure src="/shared/flex/stretch-line.png" width="150">}}

{{< tabs id="T31" >}}
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
              alignItems = AlignItems.STRETCH
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
                            .grow(1)
                            .justifyContent(.spaceEvenly)
                            .alignItems(.stretch)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Flex Start**

Items are shifted to the cross axis start:

{{< figure src="/shared/flex/flex-start-line.png" width="150">}}

{{< tabs id="T32" >}}
{{% tab name="Kotlin" %}}

```kotlin
 private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle {
                                size = Size.box(width = 300, height = 100)
                      },
                  createText(backgroundText = "#dd7631", text = "2")
                      .setStyle {
                          size = Size.box(width = 200, height = 100)
                      },
                  createText(backgroundText = "#649d66", text = "3")
                      .setStyle {
                          size = Size.box(width = 150, height = 100)
                      }
              )
          ).setFlex {
              grow = 1.0
              justifyContent = JustifyContent.SPACE_EVENLY
              alignItems = AlignItems.FLEX_START
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
                    createText(backgroundColor: "#142850",text: "1").applyFlex(
                        Flex().size(Size().width(300).height(100))),
                    createText(backgroundColor: "#dd7631",text: "2").applyFlex(
                        Flex().size(Size().width(200).height(100))),
                    createText(backgroundColor: "#649d66",text: "3").applyFlex(
                        Flex().size(Size().width(150).height(100))),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .grow(1)
                            .justifyContent(.spaceEvenly)
                            .alignItems(.flexStart)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Flex End**

Items are shifted to the cross axis end:

{{< figure src="/shared/flex/flex-end-line.png" width="150">}}

{{< tabs id="T33" >}}
{{% tab name="Kotlin" %}}

```kotlin
 private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle {
                                size = Size.box(width = 300, height = 100)
                      },
                  createText(backgroundText = "#dd7631", text = "2")
                      .setStyle {
                          size = Size.box(width = 200, height = 100)
                      },
                  createText(backgroundText = "#649d66", text = "3")
                      .setStyle {
                          size = Size.box(width = 150, height = 100)
                      }
              )
          ).setFlex {
              grow = 1.0
              justifyContent = JustifyContent.SPACE_EVENLY
              alignItems = AlignItems.FLEX_END
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
                    createText(backgroundColor: "#142850",text: "1").applyFlex(
                        Flex().size(Size().width(300).height(100))),
                    createText(backgroundColor: "#dd7631",text: "2").applyFlex(
                        Flex().size(Size().width(200).height(100))),
                    createText(backgroundColor: "#649d66",text: "3").applyFlex(
                        Flex().size(Size().width(150).height(100))),
                     ],widgetProperties: WidgetProperties(
                         flex: Flex()
                            .grow(1)
                            .justifyContent(.spaceEvenly)
                            .alignItems(.flexEnd)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Center**

Items are centered on the cross axis:

{{< figure src="/shared/flex/center-line.png" width="150">}}

{{< tabs id="T34" >}}
{{% tab name="Kotlin" %}}

```kotlin
 private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle {
                                size = Size.box(width = 300, height = 100)
                      },
                  createText(backgroundText = "#dd7631", text = "2")
                      .setStyle {
                          size = Size.box(width = 200, height = 100)
                      },
                  createText(backgroundText = "#649d66", text = "3")
                      .setStyle {
                          size = Size.box(width = 150, height = 100)
                      }
              )
          ).setFlex {
              grow = 1.0
              justifyContent = JustifyContent.SPACE_EVENLY
              alignItems = AlignItems.CENTER
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
                    createText(backgroundColor: "#142850",text: "1").applyFlex(
                        Flex().size(Size().width(300).height(100))),
                    createText(backgroundColor: "#dd7631",text: "2").applyFlex(
                        Flex().size(Size().width(200).height(100))),
                    createText(backgroundColor: "#649d66",text: "3").applyFlex(
                        Flex().size(Size().width(150).height(100))),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .grow(1)
                            .justifyContent(.spaceEvenly)
                            .alignItems(.center)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Baseline**

Items are aligned acording to the firt text line in each element.

{{< figure src="/shared/captura-de-tela-2020-06-04-a-s-10.55.47.png" width="150">}}

{{< tabs id="T35" >}}
{{% tab name="Kotlin" %}}

```kotlin
 private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle {
                                size = Size.box(width = 300, height = 100)
                      },
                  createText(backgroundText = "#dd7631", text = "2")
                      .setStyle {
                          size = Size.box(width = 200, height = 100)
                      },
                  createText(backgroundText = "#649d66", text = "3")
                      .setStyle {
                          size = Size.box(width = 150, height = 100)
                      }
              )
          ).setFlex {
              grow = 1.0
              justifyContent = JustifyContent.SPACE_EVENLY
              alignItems = AlignItems.BASELINE
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
                    createText(backgroundColor: "#142850",text: "1").applyFlex(
                        Flex().size(Size().width(70).height(100))),
                    createText(backgroundColor: "#dd7631",text: "2").applyFlex(
                        Flex().size(Size().width(40).height(100))),
                    createText(backgroundColor: "#649d66",text: "3").applyFlex(
                        Flex().size(Size().width(100).height(100))),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .flexDirection(.row)
                            .grow(1)
                            .justifyContent(.spaceEvenly)
                            .alignItems(.baseline)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

For more information about Align Itens, check out the [**Yoga Layout documentation**](https://yogalayout.com/flex/).
