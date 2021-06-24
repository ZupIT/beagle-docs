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

{{< figure src="/shared/flex/margin-all.png" width="150">}}

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

{{< figure src="/shared/flex/margin-bottom.png" width="150">}}

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

{{< figure src="/shared/flex/margin-left-start.png" width="150">}}

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

{{< figure src="/shared/flex/margin-right-end.png" width="150">}}

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

{{< figure src="/shared/flex/margin-top.png" width="150">}}

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

{{< figure src="/shared/flex/margin-horizontal.png" width="150">}}

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

{{< figure src="/shared/flex/margin-vertical.png" width="150">}}

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
