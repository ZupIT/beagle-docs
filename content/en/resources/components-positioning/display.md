---
title: Display
weight: 84
description: This section lists information about the Display property
---

---

## Display

This property defines how this component displays. It allows a container to be `flexible` or `blocked` according to the value defined. Display also provides a flexible context for all of its direct child elements.

In this property, there are two attributes:

| **Flex** | **None** |
| :-----------: | :----------------------------------------------------------: |
| When this value is set it allows the elements to be flexible. | When this value is set, the elements won't be shown on the screen, thus having their height and width 0. |
|{{< figure src="/shared/flex/flex-start-row.png" width="150">}} |{{< figure src="/shared/flex/display-none.png" width="150">}}|

*  The code below shows a `display none` example:

{{< tabs id="T68" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1"),
                  createText(backgroundText = "#dd7631", text = "2")
                      .setStyle {
                          display = Bind.value(Display.NONE)
                      },
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              flexDirection = FlexDirection.ROW
              alignItems = AlignItems.CENTER
              justifyContent = JustifyContent.CENTER
              grow = 1.0
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
                    createText(backgroundColor: "#dd7631",text: "2").applyFlex(
                        Flex().display(.none)),
                    createText(backgroundColor: "#649d66",text: "3")
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .grow(1)
                            .flexDirection(.row)
                            .justifyContent(.center)
                            .alignItems(.center)
                            .alignItems(.center)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

**For more information about Display, check out the [**Yoga Layout documentation**](https://yogalayout.com/flex/).**
