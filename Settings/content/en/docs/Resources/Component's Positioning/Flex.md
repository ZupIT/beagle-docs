---
title: Flex
weight: 86
description: This section lists information about the Flex property
---

---

## Flex

This property defines how items will be filled according to the space available along the main axis. Flex sets values ​​applied to each child's property. 

Thus, it takes the values ​​of all the child elements and makes the following calculation: they add and then divide by each value of the flex property applied to the child. The result should be the child's filled space in the container.

![](/docs-beagle/captura-de-tela-2020-06-05-a-s-16.53.38.png)

{{< tabs name="T69" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1").applyFlex(Flex(flex = 1.0)),
                createText(backgroundColor = "#dd7631", text = "2").applyFlex(Flex(flex = 2.0)),
                createText(backgroundColor = "#649d66", text = "3").applyFlex(Flex(flex = 3.0))
            )
        ).applyFlex(
            Flex(
                grow = 1.0
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
                        Flex().flex(1)),
                    createText(backgroundColor: "#dd7631",text: "2").applyFlex(
                        Flex().flex(2)),
                    createText(backgroundColor: "#649d66",text: "3").applyFlex(
                        Flex().flex(3))
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

For more information about Flex Margin, check out the [**Yoga Layout documentation**](https://yogalayout.com/docs/flex/).
