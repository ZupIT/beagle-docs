---
title: Positiontype
weight: 76
description: This section lists information about the Position Type property
---

---

## PositionType

This property defines the position of an element within the parent and whether it should be used as `Relative` or `Absolute`

### **Relative \ default**

The `relative` property positions an element keeping the relation to the other elements in the same flow, causing them to move respecting the limits on their sibling elements.

### **Absolute**

The `absolute` property positions an element the same way as the `relative` does. However, this element "escapes" the normal flow in the layout, and the other elements won't consider it when positioning themselves.

See below how they are displayed:

| **Relative** | **Absolute** |
| :-----------: | :----------------------------------------------------------: |
|{{< figure src="/shared/flex/relative.png" width="150">}}  |{{< figure src="/shared/flex/absolute.png" width="150">}}   |

### How to code this

#### Relative

{{< tabs id="T61" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle {
                          size = Size.box(width = 130, height = 130)
                      },
                  createText(backgroundText = "#dd7631", text = "2")
                      .setStyle {
                          size = Size.box(width = 100, height = 100)
                      },
                  createText(backgroundText = "#649d66", text = "3")
                      .setStyle {
                          size = Size.box(width = 70, height = 70)
                      }
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
                        Flex().size(Size().height(130).width(130))),
                    createText(backgroundColor: "#dd7631",text: "2").applyFlex(
                        Flex().size(Size().height(100).width(100))),
                    createText(backgroundColor: "#649d66",text: "3").applyFlex(
                        Flex().size(Size().height(70).width(70))),
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
#### Absolute

{{< tabs id="T62" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                 createText(backgroundText = "#142850", text = "1")
                      .setStyle {
                          size = Size.box(width = 130, height = 130)
                      },
                  createText(backgroundText = "#dd7631", text = "2")
                      .setStyle {
                          size = Size.box(width = 100, height = 100)
                      },
                  createText(backgroundText = "#649d66", text = "3")
                      .setStyle {
                          size = Size.box(width = 70, height = 70)
                          positionType = PositionType.ABSOLUTE
                      }
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
                    createText(backgroundColor: "#142850",text: "1").applyFlex(
                        Flex().size(Size().height(130).width(130))),
                    createText(backgroundColor: "#dd7631",text: "2").applyFlex(
                        Flex().size(Size().height(100).width(100))),
                    createText(backgroundColor: "#649d66",text: "3").applyFlex(
                        Flex()
                            .positionType(.absolute)
                            .size(Size().height(70).width(70))),
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

**For more information about PositionType, check out the [**Yoga Layout documentation**](https://yogalayout.com/flex/).**
