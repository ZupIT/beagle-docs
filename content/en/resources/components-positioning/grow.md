---
title: Grow
weight: 58
description: This section lists information about the Grow property
---

---

## Grow

This property defines the proportion that an item should grow when necessary. Its value is 0 by default and that indicates that the item should not grow. This attribute accepts only `Double` positive values.

### **Example 1**

The grow applied has value 0 and the container size did not change

{{< figure src="/shared/flex/grow0.png" width="150">}}

{{< tabs id="T17" >}}
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
        grow = 0.0
    }.setStyle {
        backgroundColor = constant("#000000")
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
                     )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Example 2**

Grow 1.0 has been applied and the container size has grown until it meets the screen limits:

{{< figure src="/shared/flex/grow1.png" width="150">}}

{{< tabs id="T18" >}}
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
    }.setStyle {
        backgroundColor = constant("#000000")
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
                     )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

**For more information about Grow, check out the [**Yoga Layout documentation**](https://yogalayout.com/flex/).**
