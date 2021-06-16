---
title: Position
weight: 74
description: Here you'll find Position description and its proprieties details.
---

---

## Position

This property changes an element's position on the screen adding space on its **`top`, `right`, `bottom`, `left`, `vertical`, `horizontal` e `all`** sides, which are also the property's values. It rearranges this element's position, but other surrounding components are not affected when a relative `Position Type` is set. 

The element being positioned can have 2 positioning types:

1. **`Relative`**: The element moves and other elements keeps their current positions on screen.
2. **`Absolute`**: The element moves the same way as in ´Relative´ but the other elements rearrange themselves ignoring it's position.
## **Propriedades**

### **All**

It adds spacing for **all** element's sides:

{{< figure src="/shared/flex/position-all.png" width="150">}}

{{< tabs id="T54" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle { 
                                position = EdgeValue(all = UnitValue.real(50))
                      },
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              grow = 1.0
              flexDirection = FlexDirection.ROW
              justifyContent = JustifyContent.CENTER
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
                        Flex()
                            .size(Size().width(50).height(50))
                            .position(EdgeValue().all(50))),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3")
                    ],widgetProperties: WidgetProperties(
                          flex: Flex()
                        .grow(1)
                        .flexDirection(.row)
                        .justifyContent(.center)
                        .alignItems(.center)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Bottom**

It adds spacing at the element's **bottom**:

{{< figure src="/shared/flex/position-bottom.png" width="150">}}

{{< tabs id="T55" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle { 
                                position = EdgeValue(bottom = UnitValue.real(50))
                      },
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              grow = 1.0
              flexDirection = FlexDirection.ROW
              justifyContent = JustifyContent.CENTER
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
                        Flex()
                            .size(Size().width(50).height(50))
                            .position(EdgeValue().bottom(50))),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3")
                    ],widgetProperties: WidgetProperties(
                          flex: Flex()
                        .grow(1)
                        .flexDirection(.row)
                        .justifyContent(.center)
                        .alignItems(.center)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Left**

It adds spacing at the element's **left** side:

{{< figure src="/shared/captura-de-tela-2020-06-05-a-s-11.29.41.png" width="150">}}

{{< tabs id="T56" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle { 
                                position = EdgeValue(left = UnitValue.real(50))
                      },
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              grow = 1.0
              flexDirection = FlexDirection.ROW
              justifyContent = JustifyContent.CENTER
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
                        Flex()
                            .size(Size().width(50).height(50))
                            .position(EdgeValue().left(150))),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3")
                    ],widgetProperties: WidgetProperties(
                          flex: Flex()
                        .grow(1)
                        .flexDirection(.row)
                        .justifyContent(.center)
                        .alignItems(.center)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Right**

It adds spacing at the element's **right** side:

{{< figure src="/shared/captura-de-tela-2020-06-05-a-s-11.33.00.png" width="150">}}

{{< tabs id="T57" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle { 
                                position = EdgeValue(right = UnitValue.real(50))
                      },
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              grow = 1.0
              flexDirection = FlexDirection.ROW
              justifyContent = JustifyContent.CENTER
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
                        Flex()
                            .size(Size().width(50).height(50))
                            .position(EdgeValue().right(100))),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3")
                    ],widgetProperties: WidgetProperties(
                          flex: Flex()
                        .grow(1)
                        .flexDirection(.row)
                        .justifyContent(.center)
                        .alignItems(.center)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Top**

It adds spacing at the element's **top** side:

{{< figure src="/shared/captura-de-tela-2020-06-05-a-s-11.34.21.png" width="150">}}

{{< tabs id="T58" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle { 
                                position = EdgeValue(top = UnitValue.real(50))
                      },
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              grow = 1.0
              flexDirection = FlexDirection.ROW
              justifyContent = JustifyContent.CENTER
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
                        Flex()
                            .size(Size().width(50).height(50))
                            .position(EdgeValue().top(100))),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3")
                    ],widgetProperties: WidgetProperties(
                          flex: Flex()
                        .grow(1)
                        .flexDirection(.row)
                        .justifyContent(.center)
                        .alignItems(.center)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Horizontal**

It adds spacing at the element's **horizontal** sides:

{{< figure src="/shared/captura-de-tela-2020-06-05-a-s-11.36.55.png" width="150">}}

{{< tabs id="T59" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle { 
                                position = EdgeValue(horizontal = UnitValue.real(50))
                      },
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              grow = 1.0
              flexDirection = FlexDirection.ROW
              justifyContent = JustifyContent.CENTER
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
                        Flex()
                            .size(Size().width(50).height(50))
                            .position(EdgeValue().horizontal(150))),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3")
                    ],widgetProperties: WidgetProperties(
                          flex: Flex()
                        .grow(1)
                        .flexDirection(.row)
                        .justifyContent(.center)
                        .alignItems(.center)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Vertical**

It adds spacing at the element's **vertical** sides:

{{< figure src="/shared/captura-de-tela-2020-06-05-a-s-11.39.22.png" width="150">}}

{{< tabs id="T60" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle { 
                                position = EdgeValue(vertical = UnitValue.real(50))
                      },
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              grow = 1.0
              flexDirection = FlexDirection.ROW
              justifyContent = JustifyContent.CENTER
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
                        Flex()
                            .size(Size().width(50).height(50))
                            .position(EdgeValue().vertical(150))),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3")
                    ],widgetProperties: WidgetProperties(
                          flex: Flex()
                        .grow(1)
                        .flexDirection(.row)
                        .justifyContent(.center)
                        .alignItems(.center)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

**For more information about Position, check out the [**Yoga Layout documentation**](https://yogalayout.com/flex/).**
