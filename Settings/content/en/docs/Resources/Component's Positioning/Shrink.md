---
title: Shrink
weight: 80
description: This section lists information about the Shrink property
---

---

## Shrink

This atribute defines an item's ability to shrink, reducing child elements along the main axis. The reduction of the elements is done in a way that the total size of all the shrunk children does not exceed the size of the main container. 

With Shrink, the element receives a double value, which will decrease the element according to the space at the container:

![](https://lh5.googleusercontent.com/30mBYNqNtZf0Lp1Zw4dr8dkZW5PsOtxqHtqkgbPLZNbU6g8xFs0QmGh5ip66WlU5cHSqtdBWduGuwrLGyGp2uYkkAw6GLXpaf-ZRNORNJywill9WCTZIlRAva9_s5G30MJCh-rOS)

{{< tabs name="T36" >}}
{{% tab name="Kotlin" %}}

```kotlin
 private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1").applyFlex(
                    Flex(size = Size(width = 150.unitReal(),height = 150.unitReal()))
                ),
                createText(backgroundColor = "#dd7631", text = "2").applyFlex(
                    Flex(size = Size(width = 150.unitReal(),height = 150.unitReal()))
                ),
                createText(backgroundColor = "#649d66", text = "3").applyFlex(
                    Flex(size = Size(width = 150.unitReal(),height = 150.unitReal()),
                    shrink = 3.0)
                )
            )
        ).applyFlex(
            Flex(
                flexDirection = FlexDirection.ROW,
                size = Size(width = 300.unitReal(),height = 300.unitReal())
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
                        Flex().size(Size().width(150).height(150))),
                    createText(backgroundColor: "#dd7631",text: "2").applyFlex(
                        Flex().size(Size().width(150).height(150))),
                    createText(backgroundColor: "#649d66",text: "3").applyFlex(
                        Flex()
                            .size(Size().width(150).height(150))
                            .shrink(0.3)
                    ),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .flexDirection(.row)
                            .size(Size().width(300).height(300))
                    )
                )
        )
    }
```
{{% /tab %}}
{{< /tabs >}}

For more information about Shrink, check out the [**Yoga Layout documentation**](https://yogalayout.com/docs/flex/).
