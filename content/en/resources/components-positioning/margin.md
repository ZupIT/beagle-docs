---
title: Margin
weight: 70
description: This section lists information about the Margin property
---

---

## Margin

Margin will apply some space outboarding the elements: **`all, bottom, end, horizontal, left, right, start, top, vertical`**

## Atributes

### **All**

Defines some space around the element in all directions:

{{< figure src="/shared/flex/margin-all.png" width="150">}}

{{< tabs id="T40" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle {
                                margin = EdgeValue(all = UnitValue.real(10))
                      },
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              grow = 1.0
              justifyContent = JustifyContent.FLEX_START
              flexDirection = FlexDirection.ROW
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
                        Flex().margin(EdgeValue().all(10))),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .flexDirection(.row)
                            .justifyContent(.flexStart)
                            .grow(1)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Bottom**

Defines some space at the element's bottom:

{{< figure src="/shared/flex/margin-bottom.png" width="150">}}

{{< tabs id="T41" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle {
                                margin = EdgeValue(bottom = UnitValue.real(10))
                      },
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              grow = 1.0
              justifyContent = JustifyContent.FLEX_START
              flexDirection = FlexDirection.COLUMN
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
                        .size(Size().height(50).width(50))
                        .margin(EdgeValue().bottom(10))),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .flexDirection(.column)
                            .justifyContent(.flexStart)
                            .grow(1)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Left**

Defines some space at the element's left side:

{{< figure src="/shared/flex/margin-left-start.png" width="150">}}

{{< tabs id="T42" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle {
                                margin = EdgeValue(left = UnitValue.real(10))
                      },
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              grow = 1.0
              justifyContent = JustifyContent.FLEX_START
              flexDirection = FlexDirection.ROW
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
                            .size(Size().height(50).width(50))
                            .margin(EdgeValue().left(10))),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .flexDirection(.row)
                            .justifyContent(.flexStart)
                            .grow(1)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Right**

Defines some space at the element's right side:

{{< figure src="/shared/flex/margin-right-end.png" width="150">}}

{{< tabs id="T43" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle {
                                margin = EdgeValue(right = UnitValue.real(10))
                      },
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              grow = 1.0
              justifyContent = JustifyContent.FLEX_START
              flexDirection = FlexDirection.ROW
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
                            .size(Size().height(50).width(50))
                            .margin(EdgeValue().right(10))),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .flexDirection(.row)
                            .justifyContent(.flexStart)
                            .grow(1)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Top**

Defines some space at the element's top:

{{< figure src="/shared/flex/margin-top.png" width="150">}}

{{< tabs id="T44" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle {
                                margin = EdgeValue(top = UnitValue.real(10))
                      },
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              grow = 1.0
              justifyContent = JustifyContent.FLEX_START
              flexDirection = FlexDirection.ROW
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
                            .size(Size().height(50).width(50))
                            .margin(EdgeValue().top(10))),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .flexDirection(.row)
                            .justifyContent(.flexStart)
                            .grow(1)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Horizontal**

Defines some horizontal space at the element sides:

{{< figure src="/shared/flex/margin-horizontal.png" width="150">}}

{{< tabs id="T45" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle {
                                margin = EdgeValue(horizontal = UnitValue.real(10))
                      },
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              grow = 1.0
              justifyContent = JustifyContent.FLEX_START
              flexDirection = FlexDirection.ROW
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
                            .size(Size().height(50).width(50))
                            .margin(EdgeValue().horizontal(10))),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .flexDirection(.row)
                            .justifyContent(.flexStart)
                            .grow(1)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Vertical**

Defines some vertical space at the element top and botton sides:

{{< figure src="/shared/flex/margin-vertical.png" width="150">}}

{{< tabs id="T46" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle {
                                margin = EdgeValue(vertical = UnitValue.real(10))
                      },
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              grow = 1.0
              justifyContent = JustifyContent.FLEX_START
              flexDirection = FlexDirection.COLUMN
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
                            .size(Size().height(50).width(50))
                            .margin(EdgeValue().vertical(10))),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .flexDirection(.column)
                            .justifyContent(.flexStart)
                            .grow(1)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

**For more information about Margin, check out the[**Yoga Layout documentation**](https://yogalayout.com/flex/).**
