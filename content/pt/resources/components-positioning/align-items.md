---
title: Align Items
weight: 64
description: >-
  Nesta seção, você encontra mais informações sobre a propriedade Align Items
  utilizada para posicionar elementos em tela.
---

---

## Align Items

Essa propriedade define como os itens são distribuídos ao longo do eixo transversal do container e tem os seguintes atributos: **`flex-start, flex-end, center, baseline e stretch.`**

### **Stretch**

Os itens serão expandidos para preencher toda a dimensão do eixo transversal \(altura ou largura\) da tela:

{{< figure src="/shared/flex/stretch-line.png" width="150">}}

{{< tabs id="T32" >}}
{{% tab name="Kotlin" %}}

```kotlin
 private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "texto 1"),
                createText(backgroundColor = "#dd7631", text = "texto 2"),
                createText(backgroundColor = "#649d66", text = "texto 3")
            )
        ).setFlex {
              grow = 1.0
              justifyContent = JustifyContent.SPACE_EVENLY
              alignItems = AlignItems.STRETCH
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
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .grow(1)
                            .justifyContent(.spaceEvenly)
                            .alignItems(.stretch)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Flex Start**

Os itens são deslocadas para o início do eixo transversal:

{{< figure src="/shared/flex/flex-start-line.png" width="150">}}

{{< tabs id="T33" >}}
{{% tab name="Kotlin" %}}

```kotlin
 private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle {
                                size = Size.box(width = 300, height = 100)
                      },
                  createText(backgroundText = "#dd7631", text = "2")
                      .setStyle {
                          size = Size.box(width = 200, height = 100)
                      },
                  createText(backgroundText = "#649d66", text = "3")
                      .setStyle {
                          size = Size.box(width = 150, height = 100)
                      }
              )
          ).setFlex {
              grow = 1.0
              justifyContent = JustifyContent.SPACE_EVENLY
              alignItems = AlignItems.FLEX_START
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
                        Flex().size(Size().width(300).height(100))),
                    createText(backgroundColor: "#dd7631",text: "2").applyFlex(
                        Flex().size(Size().width(200).height(100))),
                    createText(backgroundColor: "#649d66",text: "3").applyFlex(
                        Flex().size(Size().width(150).height(100))),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .grow(1)
                            .justifyContent(.spaceEvenly)
                            .alignItems(.flexStart)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Flex End**

Os itens são deslocadas para o final do eixo transversal:

{{< figure src="/shared/flex/flex-end-line.png" width="150">}}

{{< tabs id="T34" >}}
{{% tab name="Kotlin" %}}

```kotlin
 private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle {
                                size = Size.box(width = 300, height = 100)
                      },
                  createText(backgroundText = "#dd7631", text = "2")
                      .setStyle {
                          size = Size.box(width = 200, height = 100)
                      },
                  createText(backgroundText = "#649d66", text = "3")
                      .setStyle {
                          size = Size.box(width = 150, height = 100)
                      }
              )
          ).setFlex {
              grow = 1.0
              justifyContent = JustifyContent.SPACE_EVENLY
              alignItems = AlignItems.FLEX_END
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
                        Flex().size(Size().width(300).height(100))),
                    createText(backgroundColor: "#dd7631",text: "2").applyFlex(
                        Flex().size(Size().width(200).height(100))),
                    createText(backgroundColor: "#649d66",text: "3").applyFlex(
                        Flex().size(Size().width(150).height(100))),
                     ],widgetProperties: WidgetProperties(
                         flex: Flex()
                            .grow(1)
                            .justifyContent(.spaceEvenly)
                            .alignItems(.flexEnd)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Center**

Os itens são centralizados no eixo transversal:

{{< figure src="/shared/flex/center-line.png" width="150">}}

{{< tabs id="T35" >}}
{{% tab name="Kotlin" %}}

```kotlin
 private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle {
                                size = Size.box(width = 300, height = 100)
                      },
                  createText(backgroundText = "#dd7631", text = "2")
                      .setStyle {
                          size = Size.box(width = 200, height = 100)
                      },
                  createText(backgroundText = "#649d66", text = "3")
                      .setStyle {
                          size = Size.box(width = 150, height = 100)
                      }
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
                        Flex().size(Size().width(300).height(100))),
                    createText(backgroundColor: "#dd7631",text: "2").applyFlex(
                        Flex().size(Size().width(200).height(100))),
                    createText(backgroundColor: "#649d66",text: "3").applyFlex(
                        Flex().size(Size().width(150).height(100))),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
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

### **Baseline**

Os itens são alinhados a partir da base da primeira linha de texto de cada um:

{{< figure src="/shared/captura-de-tela-2020-06-04-a-s-10.55.47.png" width="150">}}

{{< tabs id="T36" >}}
{{% tab name="Kotlin" %}}

```kotlin
 private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle {
                                size = Size.box(width = 300, height = 100)
                      },
                  createText(backgroundText = "#dd7631", text = "2")
                      .setStyle {
                          size = Size.box(width = 200, height = 100)
                      },
                  createText(backgroundText = "#649d66", text = "3")
                      .setStyle {
                          size = Size.box(width = 150, height = 100)
                      }
              )
          ).setFlex {
              grow = 1.0
              justifyContent = JustifyContent.SPACE_EVENLY
              alignItems = AlignItems.BASELINE
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
                        Flex().size(Size().width(70).height(100))),
                    createText(backgroundColor: "#dd7631",text: "2").applyFlex(
                        Flex().size(Size().width(40).height(100))),
                    createText(backgroundColor: "#649d66",text: "3").applyFlex(
                        Flex().size(Size().width(100).height(100))),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .flexDirection(.row)
                            .grow(1)
                            .justifyContent(.spaceEvenly)
                            .alignItems(.baseline)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

{{% alert color="info" %}}
Para saber mais sobre o Align Items, acesse [**a documentação no Yoga Layout.**](https://yogalayout.com/pt/align-items/)
{{% /alert %}}
