---
title: Align Self
weight: 66
description: This section lists information about the Align Self property
---

---

## Align Self

This property will override the behavior defined by the align-items property. It has the following attributes: **`flex-start, flex-end, center, auto, baseline and stretch.`**

{{% alert color="warning" %}}
**Align self** is set to each component and not to a container.
{{% /alert %}}

{{< figure src="/shared/captura-de-tela-2020-06-04-a-s-11.23.38.png" width="150">}}

Each number above represents one property:

**1 = auto:** Will follow positioning set by the align-items property;

**2 = stretch:** Items will streach until the fill the whole cross axis;

**3 = flex-start:** Items displays at the cross axis begining;

**4 = flex-end:** Items displays at the cross axis end;

**5 = center:** Items displays at the cross axis center;

**6 = baseline:** Items are aligned acording to the firt text line in each element..

{{< tabs id="T36" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setFlex {
                               alignSelf = AlignSelf.AUTO
                      },
                  createText(backgroundText = "#dd7631", text = "2")
                      .setFlex {
                          alignSelf = AlignSelf.STRETCH
                      },
                  createText(backgroundText = "#649d66", text = "3")
                      .setFlex {
                          alignSelf = AlignSelf.FLEX_START
                      },
                  createText(backgroundText = "#dd7631", text = "4")
                      .setFlex {
                          alignSelf = AlignSelf.FLEX_END
                      },
                  createText(backgroundText = "#649d66", text = "5")
                      .setFlex {
                          alignSelf = AlignSelf.CENTER
                      },
                  createText(backgroundText = "#dd7631", text = "6")
                      .setFlex {
                          alignSelf = AlignSelf.BASELINE
                      },
              )
          ).setFlex {
              grow = 1.0
              justifyContent = JustifyContent.SPACE_EVENLY
              alignItems = AlignItems.CENTER
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
                        Flex().alignSelf(.auto)),
                    createText(backgroundColor: "#dd7631",text: "2").applyFlex(
                        Flex().alignSelf(.stretch)),
                    createText(backgroundColor: "#649d66",text: "3").applyFlex(
                        Flex().alignSelf(.flexStart)),
                    createText(backgroundColor: "#142850",text: "4").applyFlex(
                        Flex().alignSelf(.flexEnd)),
                    createText(backgroundColor: "#dd7631",text: "5").applyFlex(
                        Flex().alignSelf(.center)),
                    createText(backgroundColor: "#649d66",text: "6").applyFlex(
                        Flex().alignSelf(.baseline)),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .flexDirection(.row)
                            .grow(1)
                            .justifyContent(.spaceEvenly)
                            .alignItems(.center)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

**For more information about Align Self, check out the [**Yoga Layout documentation.**](https://yogalayout.com/docs/flex/)**