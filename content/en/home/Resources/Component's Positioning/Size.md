---
title: Size
weight: 82
description: This section lists information about the Size property
---

---

## Size

These atributes handles the item's sizes on screen.

Size has the following atributes: **`width, heigth, maxWidth,maxHeight, minWidth, minHeigh, aspectRatio`**

![](https://lh3.googleusercontent.com/3aoRDnlMNqdnoYlmx60A--Y_Q6I3tGqCZt6CiQDJP53xu4TpwIL4skCdT_tjTTspNjuftf5ikAyKiLxlm4Tcll1kIQ_LhMd9y-PfBKcd69zgPp2MyMPJBHP5sUyQDXmPFTZcGqHM)

## **Atributos:**

### **Width**

Defines the item's **width.**

### **Height**

Defines the item's **height.**

### **MaxWidth**

Defines a **maximum width** an item can fill up to.

### **MaxHeight**

Defines a **maximum height** an item can fill up to.

### **MinWidth**

Defines a **minimum width** an item can shrink down to.

### **MinHeight**

Defines a **minimum heght** an item can shrink down to.

### **AspectRatio**

This property created by Yoga Layout defines the width ratio according to the item's height, following a logic of a **double&gt; 0 value.**

For example, if you apply a height of 100dp to a component and the aspectRatio of 2, the width will be 2 times the height where it will have the value of 200dp.

{{< tabs id="T67" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1").applyFlex(
                    Flex(size = Size(width = 50.unitReal(),height = 50.unitReal()))
                ),
                createText(backgroundColor = "#dd7631", text = "2").applyFlex(
                    Flex(size = Size(maxWidth = 70.unitReal(),maxHeight = 70.unitReal(),
                    minWidth = 30.unitReal(),minHeight = 30.unitReal()))
                ),
                createText(backgroundColor = "#649d66", text = "3").applyFlex(
                    Flex(size = Size(width = 70.unitReal(),aspectRatio = 2.0))
                )
            )
        ).applyFlex(
            Flex(flexDirection = FlexDirection.ROW)
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
                        Flex().size(Size()
                            .width(50).height(50))),
                    createText(backgroundColor: "#dd7631",text: "2").applyFlex(
                        Flex().size(Size()
                            .maxWidth(70).maxHeight(70)
                            .minWidth(30).minHeight(30))),
                    createText(backgroundColor: "#649d66",text: "3").applyFlex(
                        Flex()
                            .size(Size().width(70).aspectRatio(2.0))
                    ),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .grow(1)
                            .flexDirection(.row)
                            .justifyContent(.spaceEvenly)
                            .alignItems(.center)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

**For more information about Size, check out the [**Yoga Layout documentation**](https://yogalayout.com/home/flex/).**
