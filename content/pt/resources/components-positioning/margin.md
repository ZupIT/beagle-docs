---
title: Margin
weight: 70
description: >-
  Nesta seção, você encontra mais informações sobre a propriedade Margin
  utilizada para posicionar elementos em tela.
---

---

## Margin

Margin aplica um espaçamento no elemento filho, e tem os seguintes atributos: **`all, bottom, end, horizontal, left, right, start, top, vertical`**

## Propriedades

### **All**

Define um espaçamento em todos os lados do elemento:

![](https://lh5.googleusercontent.com/6fRwbDv4w30S7I0MJDV9HIe2CQMp9XoOl_VcHBSQgTvCQGTp7JlTnMfp_VS6kN7IlHgZs-VfmwAdElJy6GZl8Vc485Rllr-QQbi5kqZpitw3y_qLxWzL_Z9_DUXaZ_Vw5U3R8_1u)

{{< tabs id="T41" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle {
                                margin = EdgeValue(all = UnitValue.real(10))
                      },
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              grow = 1.0
              justifyContent = JustifyContent.FLEX_START
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
                        Flex().margin(EdgeValue().all(10))),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .flexDirection(.row)
                            .justifyContent(.flexStart)
                            .grow(1)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Bottom**

Define um espaçamento na parte inferior do elemento:

![](https://lh5.googleusercontent.com/iDr2v9t2422LXNYxCwy6AkyR7E0KN4Sz8WTOiYF0TPpKSBwbBftW6xGbXLrxrg3Pq7_IIOvmYkkkt3w2CMtgL2sGoK2xD40bNbY1HcBObYlalxeSEYLg9VhRwGWG8ECPj-_Noe33)

{{< tabs id="T42" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle {
                                margin = EdgeValue(bottom = UnitValue.real(10))
                      },
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              grow = 1.0
              justifyContent = JustifyContent.FLEX_START
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
                    createText(backgroundColor: "#142850",text: "1").applyFlex(
                        Flex()
                        .size(Size().height(50).width(50))
                        .margin(EdgeValue().bottom(10))),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .flexDirection(.column)
                            .justifyContent(.flexStart)
                            .grow(1)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Left**

Define um espaçamento no lado esquerdo do elemento:

![](https://lh6.googleusercontent.com/m69w8vx_tTvWXo-uuZyBqTQV6cpKbeZb8bPnIN_nq8RP1GWNk-bog39tKb7-ZrZ984nkxB9O44gJ6DPqMrBk4RzREiTXM5Sm3AAIu4CX7hvKXTChFVBxFzPybw1qVN6fC0M-uJ_e)

{{< tabs id="T43" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle {
                                margin = EdgeValue(left = UnitValue.real(10))
                      },
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              grow = 1.0
              justifyContent = JustifyContent.FLEX_START
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
                        Flex()
                            .size(Size().height(50).width(50))
                            .margin(EdgeValue().left(10))),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .flexDirection(.row)
                            .justifyContent(.flexStart)
                            .grow(1)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Right**

Define um espaçamento no lado direito do elemento:

![](https://lh4.googleusercontent.com/PJI8H4OiFuatQ-wINUiMXbvO3-n8_c159_9XnfyNvdFkeO8xmS31og6_JBhoXJEC2ZQQaaMMeJXQxueznoLwWSOg7V1ZcCjVhXVydoKG9jzXRYmG18Ll_7jDEUy1jExBYK3NQLT9)

{{< tabs id="T44" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle {
                                margin = EdgeValue(right = UnitValue.real(10))
                      },
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              grow = 1.0
              justifyContent = JustifyContent.FLEX_START
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
                        Flex()
                            .size(Size().height(50).width(50))
                            .margin(EdgeValue().right(10))),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .flexDirection(.row)
                            .justifyContent(.flexStart)
                            .grow(1)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Top**

Define um espaçamento na parte superior do elemento:

![](https://lh3.googleusercontent.com/eELU1dNIiBHmZSSQfm2Vt_lIDF3oZPP-FAKngOD_TwZjLfEq3-ZCHUZGD17I3n1uX-wd4DBhOhjgB60Ijo3Q0aeVZagXbQbgFhhlAq9ltxh2t2UcHvBejsQPbM1FD0SbAmU5QC5z)

{{< tabs id="T45" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle {
                                margin = EdgeValue(top = UnitValue.real(10))
                      },
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              grow = 1.0
              justifyContent = JustifyContent.FLEX_START
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
                        Flex()
                            .size(Size().height(50).width(50))
                            .margin(EdgeValue().top(10))),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .flexDirection(.row)
                            .justifyContent(.flexStart)
                            .grow(1)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Horizontal**

Define um espaçamento no eixo horizontal do elemento:

![](https://lh5.googleusercontent.com/cAeAi8hRnn11i0bA6JgUuabk-FiKlFpPJdaXha5YNaeNe8kJb_n5WTbUCP0pf_wYUi040SxZKry2_UmpRRW4wMjrokIoPG9qCbVXkoM43jRVK4Mcq6LTnMQ7ninnE_ogkQ2dlfh2)

{{< tabs id="T46" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle {
                                margin = EdgeValue(horizontal = UnitValue.real(10))
                      },
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              grow = 1.0
              justifyContent = JustifyContent.FLEX_START
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
                        Flex()
                            .size(Size().height(50).width(50))
                            .margin(EdgeValue().horizontal(10))),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .flexDirection(.row)
                            .justifyContent(.flexStart)
                            .grow(1)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Vertical**

Define um espaçamento no eixo vertical do elemento:

![](https://lh3.googleusercontent.com/uriPzx5oSWaqdXXs9Hdao2lw6oe-MH6l9IbiSp1NyZh0PNUFgj44D2dmtDx2FgdshhlYPLnAf2Vf1XgKIr5VYd55ya2YPNmrV_z6WD1-eJvnu_5znR-LCfyICBW1Vq_16Y6p8cqm)

{{< tabs id="T47" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle {
                                margin = EdgeValue(vertical = UnitValue.real(10))
                      },
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              grow = 1.0
              justifyContent = JustifyContent.FLEX_START
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
                    createText(backgroundColor: "#142850",text: "1").applyFlex(
                        Flex()
                            .size(Size().height(50).width(50))
                            .margin(EdgeValue().vertical(10))),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .flexDirection(.column)
                            .justifyContent(.flexStart)
                            .grow(1)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

{{% alert color="info" %}}
Para saber mais, acesse [**Margin**](https://yogalayout.com/pt/margins-paddings-borders) ou uma [**seção completa na documentação do Yoga Layout.**](https://yogalayout.com/pt/margins-paddings-borders/)
{{% /alert %}}
