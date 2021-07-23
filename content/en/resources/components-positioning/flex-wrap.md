---
title: Flex Wrap
weight: 68
description: This section lists information about the Flex Wrap property.
---

---

## Flex Wrap

By default, items in a container will try to fit in a single line, but this will only happen when their original width can be adjusted.

The flex-wrap property changes this behavior and “wraps” items. It has **`nowrap, wrap, wrap-reverse.`** attributes. 

### **No Wrap \ default)**

Items display in one single line:

{{< figure src="/shared/flex/no-wrap.png" width="150">}}

{{< tabs id="T37" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                  createText(backgroundText = "#142850", text = "1"),
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3"),
                  createText(backgroundText = "#142850", text = "4"),
                  createText(backgroundText = "#dd7631", text = "5"),
                  createText(backgroundText = "#649d66", text = "6"),
                  createText(backgroundText = "#142850", text = "7"),
                  createText(backgroundText = "#dd7631", text = "8"),
                  createText(backgroundText = "#649d66", text = "9")
              )
          ).setFlex {
              flexDirection = FlexDirection.ROW
              flexWrap = FlexWrap.NO_WRAP
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

### **Wrap**

A break line will occur and the items positioned on the right will be moved to the below line:

{{< figure src="/shared/flex/wrap.png" width="150">}}

{{< tabs id="T38" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                  createText(backgroundText = "#142850", text = "1"),
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3"),
                  createText(backgroundText = "#142850", text = "4"),
                  createText(backgroundText = "#dd7631", text = "5"),
                  createText(backgroundText = "#649d66", text = "6"),
                  createText(backgroundText = "#142850", text = "7"),
                  createText(backgroundText = "#dd7631", text = "8"),
                  createText(backgroundText = "#649d66", text = "9")
              )
          ).setFlex {
              flexDirection = FlexDirection.ROW
              flexWrap = FlexWrap.WRAP
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

{{< figure src="/shared/flex/wrap-reverse.png" width="150">}}

{{< tabs id="T39" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                  createText(backgroundText = "#142850", text = "1"),
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3"),
                  createText(backgroundText = "#142850", text = "4"),
                  createText(backgroundText = "#dd7631", text = "5"),
                  createText(backgroundText = "#649d66", text = "6"),
                  createText(backgroundText = "#142850", text = "7"),
                  createText(backgroundText = "#dd7631", text = "8"),
                  createText(backgroundText = "#649d66", text = "9")
              )
          ).setFlex {
              flexDirection = FlexDirection.ROW
              flexWrap = FlexWrap.WRAP_REVERSE
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

**For more information about Flex Wrap, check out the [**Yoga Layout documentation**](https://yogalayout.com/flex/).**
