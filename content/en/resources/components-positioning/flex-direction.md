---
title: Flex Direction
weight: 56
description: This section lists information about the Flex Direction property
---

---

## Flex Direction

The flex-direction property is applied to a container and defines the display axis / flow in which the elements will be organized. This property has the following attributes: **`row, row-reverse, column, column-reverse`**.

{{% alert color="info" %}}
The examples where the function `createText` was used, returned a text component with an applied style. But this configuration is not required.
{{% /alert %}}

Check out below the components' behaviour examples for each attribute:

### **Row**

Items are organized in a line form from left to right:

{{< figure src="/shared/flex/row.png" width="150">}}

{{< tabs id="T13" >}}
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
                    createText(backgroundColor: "#142850",text: "1"),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .flexDirection(.row)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Row Reverse**

Items are organized in a line form from right to left:

{{< figure src="/shared/flex/row-reverse.png" width="150">}}

{{< tabs id="T14" >}}
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
              flexDirection = FlexDirection.ROW_REVERSE
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
                            .flexDirection(.rowReverse)
                      )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Column \(Default\)**

Items are organized from top to bottom:

{{< figure src="/shared/flex/column.png" width="150">}}

{{< tabs id="T15" >}}
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
                    createText(backgroundColor: "#142850",text: "1"),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .flexDirection(.column)
                      )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Column Reverse**

Items are organized in columns and they are positioned from bottom to top:

{{< figure src="/shared/flex/column-reverse.png" width="150">}}

{{< tabs id="T16" >}}
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
              flexDirection = FlexDirection.COLUMN_REVERSE
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
                            .flexDirection(.columnReverse)
                     )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

**For more information about PositionType, check out the [**Yoga Layout documentation**](https://yogalayout.com/flex/)**
