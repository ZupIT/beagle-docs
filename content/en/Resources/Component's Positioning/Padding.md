---
title: Padding
weight: 72
description: This section lists information about the Padding property.
---

---

## Padding

This property allows apply spacing inside a father element. This way, all child element that it is created after this configuration will come with a predefined spacing. Within Padding, you will also find the following atributes:

**`all, bottom, end, horizontal, left, right, start, top, vertical`**

## **Atributes**

### **All**

It defines some space inside the element in **all directions:**

![](https://lh3.googleusercontent.com/FxInQGx8ULbtU-8T2DyA4chfGeSsDzKFcJU53x_YgqiAidcWeHW3T8F57eH-KO93Ey4M5C6pDQBdzHzAFOH6WPf_wc_V7Pz-6YFCIdQIYFafRkGFxzo5ovLFLBvo3m_vsqyL7-FA)

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
        ).applyStyle(
            Style(
                backgroundColor = "#0000000",
                flex = Flex(flexDirection = FlexDirection.ROW),
                padding = EdgeValue(all = 20.unitReal()
                )
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

![](https://lh5.googleusercontent.com/87SVnxloImzR124uvIBVCvySGs9LmVE6c2ePhjxj2srEhff9PpH5nycrptFfMtdNPl91EzpROd70KApRj-bFqSZXQPGD7C7AzEtO25kya9jjTZpjm7vX6qRLfoi7wja7_zaE6RkD)

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
        )applyStyle(
            Style(
                backgroundColor = "#0000000",
                flex = Flex(flexDirection = FlexDirection.ROW),
                padding = EdgeValue(bottom = 20.unitReal()
                )
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

![](https://lh5.googleusercontent.com/yr5Z48bCWZP92q69ugJ8NBoESjLB_kCCPHb2VxdaXzjR9HgN4gcK88PRVvDqqTY9a07E0hkM2oaIgn7f-HwviGMwPX66nyYq8q5oq6FRIqifRDgxB4QXX2L7JKwVx3nfYZbDtR2a)

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
        ).applyStyle(
            Style(
                backgroundColor = "#0000000",
                flex = Flex(flexDirection = FlexDirection.ROW),
                padding = EdgeValue(left = 20.unitReal()
                )
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

![](https://lh5.googleusercontent.com/4TiOkl3HxqkZNLJBlgf5L0sV7q1i9hJCck-2AwsDdDzpntZphAxHkfnsNRAwLissOTFxCIY5vvEuRAE9-_4ZrE0oL9cD_4KiEigWzLcW4hSTW02ECqm3c47mU5oWK7gTXhXwDT7R)

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
        ).applyStyle(
            Style(
                backgroundColor = "#0000000",
                flex = Flex(flexDirection = FlexDirection.ROW),
                padding = EdgeValue(right = 20.unitReal()
                )
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

![](https://lh3.googleusercontent.com/NpgSjgVwSjvXjeDz9H3lp6prnTGEOkot_39nx0gYPZa-KXz-YPOKgzZG87V1TS9HYgEDqJtCgmQkXEQpC1dCqQrWDn3wcqWN3HgNK5EPGyCife44lvOUlbgFJ-WhYNFJf4O7K)

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
        ).applyStyle(
            Style(
                backgroundColor = "#0000000",
                flex = Flex(flexDirection = FlexDirection.ROW),
                padding = EdgeValue(top = 20.unitReal()
                )
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

![](https://lh6.googleusercontent.com/k6Zaf_F6U2-4KeA1Lxwel6ifIRsQOP-I3QbNbNKZx5n1A7J3Ds2IdqP9g9UaGC0XmeAGSDtXAi22EKuHZXLe9usAlxr_VzKmLEjeAK9yLYcsTS2nOWuoPkuNBfEiIT-sSr-InYfw)

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
        ).applyStyle(
            Style(
                backgroundColor = "#0000000",
                flex = Flex(flexDirection = FlexDirection.ROW),
                padding = EdgeValue(horizontal = 20.unitReal()
                )
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

![](https://lh3.googleusercontent.com/TnL2tMQSIYK8cp3bDJkXdbjeEWcX8Js5itV82k197CopLhg2Xh9Y9kPVC3d1HbmG10l2GOoKX40BRJL7W9YTIbL9eTF88FL4hIYE62AQI_dOl9Xdo67TE16d-07j6heFSEZZqe_g)

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
        ).applyStyle(
            Style(
                backgroundColor = "#0000000",
                flex = Flex(flexDirection = FlexDirection.ROW),
                padding = EdgeValue(vertical = 20.unitReal()
                )
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
