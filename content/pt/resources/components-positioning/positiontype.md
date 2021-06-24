---
title: Positiontype
weight: 76
description: "Nesta seção, você encontra mais informações sobre a propriedade Position Type."
---

---

## PositionType

É a propriedade que define qual a posição do elemento dentro do pai e ainda se ele deve ser usado como `Relative` ou `Absolute`.

### **Relative \ default**

A propriedade `relative` posiciona um elemento mantendo a relação com os demais elementos no mesmo fluxo, fazendo com que eles se movam respeitando os limites de seus elementos irmãos.

### **Absolute**

A propriedade `absolute` posiciona um elemento da mesma forma que o `relative`, no entanto a diferença é que ela faz o elemento "escapar" do fluxo normal do layout, e os outros elementos se reposicionam, ignorando-o.

Veja abaixo um exemplo de como os elementos são posicionados: 

| **Relative** | **Absolute** |
| :-----------: | :----------------------------------------------------------: |
|{{< figure src="/shared/flex/relative.png" width="150">}}  |{{< figure src="/shared/flex/absolute.png" width="150">}}   |

### Como configurar esses atributos?

#### Relative

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

{{< tabs id="T63" >}}
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

{{% alert color="info" %}}
Para saber mais sobre Position Type, acesse a [**documentação do Yoga Layout**](https://yogalayout.com/pt/absolute-relative-layout).
{{% /alert %}}
