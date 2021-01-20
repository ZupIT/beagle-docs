---
title: Flex Direction
weight: 56
description: This section lists information about the Flex Direction property
---

---

## Flex Direction

The flex-direction property is applied to a container and defines the display axis / flow in which the elements will be organized. This property has the following attributes:**`row, row-reverse, column, column-reverse`**.

{{% alert color="info" %}}
The examples where the function `createText` was used, returned a text component with an applied style. But this configuration is not required.
{{% /alert %}}

See below the components' behaviour examples for each attribute:

### **Row**

Items are organized in a line form from left to right:

![](https://lh6.googleusercontent.com/0ttoF3Ax_Ri25n47srlTniG15bU6NRL4maTig46NgKXHqT2EWiRZaqZUl5fRaTxSPoXkQYQXLxX6xF_FQLjqNxqGKxqqGCoRqOzEi9xqrRwcKBSpdxqzg4QLxaZwPCLWUr8bZzmH)

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
        ).applyFlex(
            Flex(
                flexDirection = FlexDirection.ROW
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

![](https://lh6.googleusercontent.com/kdSZZslWJyiaJZWS_eXCnvX8Z8qfhoqA9PBWEHS4tb6hpz3yc8zOTzYb4GK5185EjsNZ-O2w2KPkeZimUyjP50O4rM599IOaVBc8p9sEd8qJAGnZ_GG7A6GIXlZWaCNVYEc52OvR)

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
        ).applyFlex(
            Flex(
                flexDirection = FlexDirection.ROW_REVERSE
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

![](https://lh3.googleusercontent.com/tTTwTgsoEdEu1gB3x2cfKWf6mHHNCI4b40e_JQUKWLBxWO3HdB6a9pKm8heXLluFLDFvg_Vyh1e6teQWVuFyQdGdXMBis9r2X4WhIE9Nn8EvyVcpuSG0wvJGLUjcvOlcK67qat98)

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
        ).applyFlex(
            Flex(
                flexDirection = FlexDirection.COLUMN
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

![](https://lh5.googleusercontent.com/qXQqn6W3I5PhtU0PSHkXQbwNtvybgtNTQtAGvNf5zNwA0LwMtTkrI3ZUPqRYfQeTjPzANi58cCfpbLEfs5ChiGi1TXqDkp6PmgbedVmWgrSICCdVpINqyCnOGdcz9Dp6Ott1SOnY)

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
        ).applyFlex(
            Flex(
                flexDirection = FlexDirection.COLUMN_REVERSE
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
