---
title: Flex Wrap
weight: 68
description: >-
  Nesta seção, você encontra mais informações sobre a propriedade Flex Wrap
  utilizada para posicionar elementos em tela.
---

---

## Flex Wrap

Por padrão os itens do container tentarão se ajustar em uma única linha dentro do container, mas para que isso ocorra a sua largura original pode ser ajustada. A propriedade flex-wrap altera esse comportamento e faz a “quebra de linha” nos itens, e ela tem os seguintes atributos: **`nowrap, wrap, wrap-reverse.`**

### **No Wrap \(padrão\)**

Todos os itens serão dispostos em uma linha:

![](https://lh3.googleusercontent.com/2sWYZdvDpSj8gCfOR2Pa9iESgFrjD6XEXT2QIoMj_OQq-sw6fcTB5s7yuum2cnKekIU8Mn326F9PD87IyCGwSK6jzauS-SfqUeDQ43zi1nnjUp7yf9QuYCHbHLW6L-O_sjw1rPdX)

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

A quebra de linha irá acontecer e os itens mais à direita serão deslocados para a linha de baixo:

![](https://lh4.googleusercontent.com/m_ZGUdUGHgmiRuAoSoda4-2hn8kEoUuNMXOlphge-WPWGG_56O6ds2x89coUVpm5QpTV1aRiS9iDVzLatuf-OFeTxTwPBhPcpItGO5VjqfZeYHFtbosdW_9pWGPKX-5pUOxI-qF7)

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

A quebra de linha irá acontecer e os itens mais à direita serão deslocados para a linha acima:

![](https://lh4.googleusercontent.com/Izm4kY_rDDogIAaTf0sIdNhIDiOrty4LycVBKfRwzwEdv6W3r77humceK6sCJp-UvRW1LZAXY6TrJ8grVF7kJ_uxh5_6B-1BNmn0RUb_A9x8Zi76BoHdMRMIJA6-hDmbeYPN8mJP)

{{< tabs id="T40" >}}
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

{{% alert color="info" %}}
Para saber mais sobre o Flex wrap, acesse a [**documentação no Yoga Layout.**](https://yogalayout.com/pt/flex-wrap/)
{{% /alert %}}
