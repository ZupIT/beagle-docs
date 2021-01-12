---
title: Positiontype
weight: 76
description: "Nesta seção, você encontra mais informações sobre a propriedade Position Type."
---

---

## PositionType

É a propriedade que define qual a posição do elemento dentro do pai e ainda se ele deve ser usado como **Relativo ou Absoluto**.

### **Relativo \(Padrão\)**

Por padrão, esta propriedade posiciona o elemento em relação aos demais elementos no mesmo fluxo, fazendo com que eles se desloquem respeitando os limites de seus elementos irmãos.

Veja como funciona neste exemplo:

![](https://lh3.googleusercontent.com/u2gdm-w0DSIrhM07gy50F5bZyJQxeb0ZIU14OSYTgHSaNvFzPIWLfuNV7H-c9G_DkqathtRsM3R8a9KGJePgqJURYS0-cpd8BUHBlLdEyPFIcOAAuP6kM7_KD1y-Rd0wSo_xTIMb)

{{< tabs id="T62" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1").applyFlex(
                    Flex(size = Size(width = 130.unitReal(),height = 130.unitReal()))
                ),
                createText(backgroundColor = "#dd7631", text = "2").applyFlex(
                    Flex(size = Size(width = 100.unitReal(),height = 100.unitReal()))
                ),
                createText(backgroundColor = "#649d66", text = "3").applyFlex(
                    Flex(size = Size(width = 70.unitReal(),height = 70.unitReal()))
                )
            )
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

### **Absoluto**

Por padrão, você usa este elemento quando quiser que um elemento não participe do fluxo normal do layout. Em vez disso, ele é apresentado independentemente de seus irmãos.

Veja como funciona neste exemplo:

![](https://lh3.googleusercontent.com/bgiRV_Q8dDvwAyBhF0KLY_1PAr-frFbSnBoolJ4CeUGBNNtophsHr-e14TqFPInoUFsC4TNx9y1FXafbwMI9zNC2D6TJokzo-cdxeJ_pxQMuDrMO5d0QS-bT2HmsDpIDt0y13k26)

{{< tabs id="T63" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1").applyFlex(
                    Flex(size = Size(width = 130.unitReal(),height = 130.unitReal()))
                ),
                createText(backgroundColor = "#dd7631", text = "2").applyFlex(
                    Flex(size = Size(width = 100.unitReal(),height = 100.unitReal()))
                ),
                createText(backgroundColor = "#649d66", text = "3").applyFlex(
                    Flex(size = Size(width = 70.unitReal(),height = 70.unitReal()),
                    positionType = FlexPositionType.ABSOLUTE)
                )
            )
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
Para saber mais sobre Position Type, acesse a [**documentação do Yoga Layout**](https://yogalayout.com/pt/home/absolute-relative-layout).
{{% /alert %}}
