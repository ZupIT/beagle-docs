---
title: Flex Wrap
weight: 68
description: This section lists information about the Flex Wrap property.
---

---

## Flex Wrap

By default, items in a container will try to fit in a single line, but this will only happen when their original width can be adjusted. 

The flex-wrap property changes this behavior and “wraps” items. It has **`nowrap, wrap, wrap-reverse.`** attributes. 

### **No Wrap \(**default**\)** 

Items displays in one single line:

![](https://lh3.googleusercontent.com/2sWYZdvDpSj8gCfOR2Pa9iESgFrjD6XEXT2QIoMj_OQq-sw6fcTB5s7yuum2cnKekIU8Mn326F9PD87IyCGwSK6jzauS-SfqUeDQ43zi1nnjUp7yf9QuYCHbHLW6L-O_sjw1rPdX)

{{< tabs id="T37" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "texto 1"),
                createText(backgroundColor = "#dd7631", text = "texto 2"),
                createText(backgroundColor = "#649d66", text = "texto 3"),
                createText(backgroundColor = "#142850", text = "texto 4"),
                createText(backgroundColor = "#dd7631", text = "texto 5"),
                createText(backgroundColor = "#649d66", text = "texto 6"),
                createText(backgroundColor = "#142850", text = "texto 7"),
                createText(backgroundColor = "#dd7631", text = "texto 8"),
                createText(backgroundColor = "#649d66", text = "texto 9")
            )
        ).applyFlex(
            Flex(
                flexDirection = FlexDirection.ROW,
                flexWrap = FlexWrap.NO_WRAP
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
                    createText(backgroundColor: "#142850",text: "7"),
                    createText(backgroundColor: "#dd7631",text: "8"),
                    createText(backgroundColor: "#649d66",text: "9"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .flexDirection(.row)
                            .flexWrap(.noWrap)
                        )
                )
        )
    }
```
{{% /tab %}}
{{< /tabs >}}

###  **Wrap**

A break line will occur and the items positioned on the right will be moved to the below line:

![](https://lh4.googleusercontent.com/m_ZGUdUGHgmiRuAoSoda4-2hn8kEoUuNMXOlphge-WPWGG_56O6ds2x89coUVpm5QpTV1aRiS9iDVzLatuf-OFeTxTwPBhPcpItGO5VjqfZeYHFtbosdW_9pWGPKX-5pUOxI-qF7)

{{< tabs id="T38" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "texto 1"),
                createText(backgroundColor = "#dd7631", text = "texto 2"),
                createText(backgroundColor = "#649d66", text = "texto 3"),
                createText(backgroundColor = "#142850", text = "texto 4"),
                createText(backgroundColor = "#dd7631", text = "texto 5"),
                createText(backgroundColor = "#649d66", text = "texto 6"),
                createText(backgroundColor = "#142850", text = "texto 7"),
                createText(backgroundColor = "#dd7631", text = "texto 8"),
                createText(backgroundColor = "#649d66", text = "texto 9")
            )
        ).applyFlex(
            Flex(
                flexDirection = FlexDirection.ROW,
                flexWrap = FlexWrap.WRAP
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
                    createText(backgroundColor: "#142850",text: "7"),
                    createText(backgroundColor: "#dd7631",text: "8"),
                    createText(backgroundColor: "#649d66",text: "9"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .flexDirection(.row)
                            .flexWrap(.wrap)
                        )
                )
        )
    }
```
{{% /tab %}}
{{< /tabs >}}

### **Wrap Reverse**

The break line will happen and the rightmost items will be moved to the upper line:

![](https://lh4.googleusercontent.com/Izm4kY_rDDogIAaTf0sIdNhIDiOrty4LycVBKfRwzwEdv6W3r77humceK6sCJp-UvRW1LZAXY6TrJ8grVF7kJ_uxh5_6B-1BNmn0RUb_A9x8Zi76BoHdMRMIJA6-hDmbeYPN8mJP)

{{< tabs id="T39" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "texto 1"),
                createText(backgroundColor = "#dd7631", text = "texto 2"),
                createText(backgroundColor = "#649d66", text = "texto 3"),
                createText(backgroundColor = "#142850", text = "texto 4"),
                createText(backgroundColor = "#dd7631", text = "texto 5"),
                createText(backgroundColor = "#649d66", text = "texto 6"),
                createText(backgroundColor = "#142850", text = "texto 7"),
                createText(backgroundColor = "#dd7631", text = "texto 8"),
                createText(backgroundColor = "#649d66", text = "texto 9")
            )
        ).applyFlex(
            Flex(
                flexDirection = FlexDirection.ROW,
                flexWrap = FlexWrap.WRAP_REVERSE
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
                    createText(backgroundColor: "#142850",text: "7"),
                    createText(backgroundColor: "#dd7631",text: "8"),
                    createText(backgroundColor: "#649d66",text: "9"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .flexDirection(.row)
                            .flexWrap(.wrapReverse)
                        )
                )
        )
    }
```
{{% /tab %}}
{{< /tabs >}}

**For more information about Flex Wrap, check out the [**Yoga Layout documentation**](https://yogalayout.com/docs/flex/).**
