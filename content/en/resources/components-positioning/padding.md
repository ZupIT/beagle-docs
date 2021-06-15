---
title: Padding
weight: 72
description: This section lists information about the Padding property.
---

---

## Padding

This property allows you to apply spacing inside a father element. This way, all child element that it is created after this configuration will come with a predefined spacing. Within Padding, you will also find the following atributes:

**`all, bottom, end, horizontal, left, right, start, top, vertical`**

## **Atributes**

### **All**

It defines some space inside the element in **all directions:**

{{< figure src="/shared/flex/padding-all.png" width="150">}}

{{< tabs id="T47" >}}
{{% tab name="Kotlin" %}}

```kotlin
 private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1"),
                createText(backgroundColor = "#dd7631", text = "2"),
                createText(backgroundColor = "#649d66", text = "3"),
                createText(backgroundColor = "#142850", text = "4"),
                createText(backgroundColor = "#dd7631", text = "5"),
                createText(backgroundColor = "#649d66", text = "6")
            )
        ).setFlex {
              flexDirection = FlexDirection.ROW
          }.setStyle { 
              backgroundColor = "#000000"
              padding = EdgeValue(all = UnitValue.real(20))
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
                    ],widgetProperties: WidgetProperties(
                        style: Style(
                            backgroundColor: "#000000",
                            padding: EdgeValue().all(20)
                            flex: Flex().flexDirection(.row)
                        )
                    )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

###

### **Bottom**

It defines some **space at the bottom** inside a element:

{{< figure src="/shared/flex/padding-bottom.png" width="150">}}

{{< tabs id="T48" >}}
{{% tab name="Kotlin" %}}

```kotlin
 private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1"),
                createText(backgroundColor = "#dd7631", text = "2"),
                createText(backgroundColor = "#649d66", text = "3"),
                createText(backgroundColor = "#142850", text = "4"),
                createText(backgroundColor = "#dd7631", text = "5"),
                createText(backgroundColor = "#649d66", text = "6")
            )
        ).setFlex {
              flexDirection = FlexDirection.ROW
          }.setStyle { 
              backgroundColor = "#000000"
              padding = EdgeValue(bottom = UnitValue.real(20))
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
                    ],widgetProperties: WidgetProperties(
                        style: Style(
                            backgroundColor: "#000000",
                            padding: EdgeValue().bottom(20)
                            flex: Flex().flexDirection(.row)
                        )
                    )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Left**

It defines some space inside at the **left side** of the element:

{{< figure src="/shared/flex/padding-left-start.png" width="150">}}

{{< tabs id="T49" >}}
{{% tab name="Kotlin" %}}

```kotlin
 private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1"),
                createText(backgroundColor = "#dd7631", text = "2"),
                createText(backgroundColor = "#649d66", text = "3"),
                createText(backgroundColor = "#142850", text = "4"),
                createText(backgroundColor = "#dd7631", text = "5"),
                createText(backgroundColor = "#649d66", text = "6")
            )
        ).setFlex {
              flexDirection = FlexDirection.ROW
          }.setStyle { 
              backgroundColor = "#000000"
              padding = EdgeValue(left = UnitValue.real(20))
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
                    ],widgetProperties: WidgetProperties(
                        style: Style(
                            backgroundColor: "#000000",
                            padding: EdgeValue().left(20)
                            flex: Flex().flexDirection(.row)
                        )
                    )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Right**

It defines some space inside the element, at the **right side**:

{{< figure src="/shared/flex/padding-right-end.png" width="150">}}

{{< tabs id="T50" >}}
{{% tab name="Kotlin" %}}

```kotlin
 private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1"),
                createText(backgroundColor = "#dd7631", text = "2"),
                createText(backgroundColor = "#649d66", text = "3"),
                createText(backgroundColor = "#142850", text = "4"),
                createText(backgroundColor = "#dd7631", text = "5"),
                createText(backgroundColor = "#649d66", text = "6")
            )
        ).setFlex {
              flexDirection = FlexDirection.ROW
          }.setStyle { 
              backgroundColor = "#000000"
              padding = EdgeValue(right = UnitValue.real(20))
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
                    ],widgetProperties: WidgetProperties(
                        style: Style(
                            backgroundColor: "#000000",
                            padding: EdgeValue().right(20)
                            flex: Flex().flexDirection(.row)
                        )
                    )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Top**

It defines some space inside the element, at **the top**:

{{< figure src="/shared/flex/padding-top.png" width="150">}}

{{< tabs id="T51" >}}
{{% tab name="Kotlin" %}}

```kotlin
 private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1"),
                createText(backgroundColor = "#dd7631", text = "2"),
                createText(backgroundColor = "#649d66", text = "3"),
                createText(backgroundColor = "#142850", text = "4"),
                createText(backgroundColor = "#dd7631", text = "5"),
                createText(backgroundColor = "#649d66", text = "6")
            )
        ).setFlex {
              flexDirection = FlexDirection.ROW
          }.setStyle { 
              backgroundColor = "#000000"
              padding = EdgeValue(top = UnitValue.real(20))
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
                    ],widgetProperties: WidgetProperties(
                        style: Style(
                            backgroundColor: "#000000",
                            padding: EdgeValue().top(20)
                            flex: Flex().flexDirection(.row)
                        )
                    )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Horizontal**

It defines some horizontal space inside the element:

{{< figure src="/shared/flex/padding-horizontal.png" width="150">}}

{{< tabs id="T52" >}}
{{% tab name="Kotlin" %}}

```kotlin
 private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1"),
                createText(backgroundColor = "#dd7631", text = "2"),
                createText(backgroundColor = "#649d66", text = "3"),
                createText(backgroundColor = "#142850", text = "4"),
                createText(backgroundColor = "#dd7631", text = "5"),
                createText(backgroundColor = "#649d66", text = "6")
            )
        ).setFlex {
              flexDirection = FlexDirection.ROW
          }.setStyle { 
              backgroundColor = "#000000"
              padding = EdgeValue(horizontal = UnitValue.real(20))
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
                    ],widgetProperties: WidgetProperties(
                        style: Style(
                            backgroundColor: "#000000",
                            padding: EdgeValue().horizontal(20)
                            flex: Flex().flexDirection(.row)
                        )
                    )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Vertical**

It defines some vertical space inside the element:

{{< figure src="/shared/flex/padding-vertical.png" width="150">}}

{{< tabs id="T53" >}}
{{% tab name="Kotlin" %}}

```kotlin
 private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1"),
                createText(backgroundColor = "#dd7631", text = "2"),
                createText(backgroundColor = "#649d66", text = "3"),
                createText(backgroundColor = "#142850", text = "4"),
                createText(backgroundColor = "#dd7631", text = "5"),
                createText(backgroundColor = "#649d66", text = "6")
            )
        ).setFlex {
              flexDirection = FlexDirection.ROW
          }.setStyle { 
              backgroundColor = "#000000"
              padding = EdgeValue(vertical = UnitValue.real(20))
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
                    ],widgetProperties: WidgetProperties(
                        style: Style(
                            backgroundColor: "#000000",
                            padding: EdgeValue().vertical(20)
                            flex: Flex().flexDirection(.row)
                        )
                    )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

**For more information about Padding, check out the [**Yoga Layout documentation**](https://yogalayout.com/flex/).**
