---
title: Position
weight: 74
description: Here you'll find Position description and its proprieties details.
---

---

## Position

This property defines an element's position on screen and its values are: **`top, right, bottom,left`**. They behave according to the `Position Type` of this element. 

The element inside the Position can have 2 types of positioning:

1. **`Relative`**: Elements move in a specific direction respecting each other boundaries.
2. **`Absolute`**: The elements move in the same direction defined by the parent element.

{{% alert color="info" %}}
**It will be more clear when we address this property ahead.**
{{% /alert %}}

## **Propriedades**

### **All**

It sets the **same value** for all positions:

![](/shared/captura-de-tela-2020-06-05-a-s-11.24.08.png)

{{< tabs id="T54" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1").applyFlex(
                    Flex(
                        size = Size(width = 50.unitReal(),height = 50.unitReal()),
                        position = EdgeValue(all = 50.unitReal())
                    )
                ),
                createText(backgroundColor = "#dd7631", text = "2"),
                createText(backgroundColor = "#649d66", text = "3")
            )
        ).applyFlex(
            Flex(
                grow = 1.0,
                flexDirection = FlexDirection.ROW,
                justifyContent = JustifyContent.CENTER,
                alignItems = AlignItems.CENTER
            )
        )
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

It sets a spacing **at the bottom** of an element:

![](/shared/captura-de-tela-2020-06-05-a-s-11.26.34.png)

{{< tabs id="T55" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1").applyFlex(
                    Flex(
                        size = Size(width = 50.unitReal(),height = 50.unitReal()),
                        position = EdgeValue(bottom = 50.unitReal())
                    )
                ),
                createText(backgroundColor = "#dd7631", text = "2"),
                createText(backgroundColor = "#649d66", text = "3")
            )
        ).applyFlex(
            Flex(
                grow = 1.0,
                flexDirection = FlexDirection.ROW,
                justifyContent = JustifyContent.CENTER,
                alignItems = AlignItems.CENTER
            )
        )
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

It defines a **spacing on the left** side of an element:

![](/shared/captura-de-tela-2020-06-05-a-s-11.29.41.png)

{{< tabs id="T56" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1").applyFlex(
                    Flex(
                        size = Size(width = 50.unitReal(),height = 50.unitReal()),
                        position = EdgeValue(left = 150.unitReal())
                    )
                ),
                createText(backgroundColor = "#dd7631", text = "2"),
                createText(backgroundColor = "#649d66", text = "3")
            )
        ).applyFlex(
            Flex(
                grow = 1.0,
                flexDirection = FlexDirection.ROW,
                justifyContent = JustifyContent.CENTER,
                alignItems = AlignItems.CENTER
            )
        )
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

It defines a spacing **on the right side** of an element:

![](/shared/captura-de-tela-2020-06-05-a-s-11.33.00.png)

{{< tabs id="T57" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1").applyFlex(
                    Flex(
                        size = Size(width = 50.unitReal(),height = 50.unitReal()),
                        position = EdgeValue(right = 100.unitReal())
                    )
                ),
                createText(backgroundColor = "#dd7631", text = "2"),
                createText(backgroundColor = "#649d66", text = "3")
            )
        ).applyFlex(
            Flex(
                grow = 1.0,
                flexDirection = FlexDirection.ROW,
                justifyContent = JustifyContent.CENTER,
                alignItems = AlignItems.CENTER
            )
        )
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

It defines a **spacing on the top** of an element:

![](/shared/captura-de-tela-2020-06-05-a-s-11.34.21.png)

{{< tabs id="T58" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1").applyFlex(
                    Flex(
                        size = Size(width = 50.unitReal(),height = 50.unitReal()),
                        position = EdgeValue(top = 100.unitReal())
                    )
                ),
                createText(backgroundColor = "#dd7631", text = "2"),
                createText(backgroundColor = "#649d66", text = "3")
            )
        ).applyFlex(
            Flex(
                grow = 1.0,
                flexDirection = FlexDirection.ROW,
                justifyContent = JustifyContent.CENTER,
                alignItems = AlignItems.CENTER
            )
        )
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

It defines **horizontal spacing** at an element:

![](/shared/captura-de-tela-2020-06-05-a-s-11.36.55.png)

{{< tabs id="T59" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1").applyFlex(
                    Flex(
                        size = Size(width = 50.unitReal(),height = 50.unitReal()),
                        position = EdgeValue(horizontal = 150.unitReal())
                    )
                ),
                createText(backgroundColor = "#dd7631", text = "2"),
                createText(backgroundColor = "#649d66", text = "3")
            )
        ).applyFlex(
            Flex(
                grow = 1.0,
                flexDirection = FlexDirection.ROW,
                justifyContent = JustifyContent.CENTER,
                alignItems = AlignItems.CENTER
            )
        )
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

It defines **vertical spacing** at an element:

![](/shared/captura-de-tela-2020-06-05-a-s-11.39.22.png)

{{< tabs id="T60" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1").applyFlex(
                    Flex(
                        size = Size(width = 50.unitReal(),height = 50.unitReal()),
                        position = EdgeValue(vertical = 150.unitReal())
                    )
                ),
                createText(backgroundColor = "#dd7631", text = "2"),
                createText(backgroundColor = "#649d66", text = "3")
            )
        ).applyFlex(
            Flex(
                grow = 1.0,
                flexDirection = FlexDirection.ROW,
                justifyContent = JustifyContent.CENTER,
                alignItems = AlignItems.CENTER
            )
        )
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
