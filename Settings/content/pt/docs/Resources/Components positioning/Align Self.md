---
title: "Align Self"
description: >
  Nesta seção, você encontra mais informações sobre a propriedade Align Self
  utilizada para posicionar elementos em tela.
---

---

## Align Self

Permite que o item sobrescreva o comportamento definido pela propriedade align-items. Ela tem os seguintes atributos:**`flex-start, flex-end, center, auto, baseline e stretch.`**

{% hint style="warning" %}
O **align self** é aplicado em cada componente e não no container.
{% endhint %}

![](../../.gitbook/assets/captura-de-tela-2020-06-04-a-s-11.23.38.png)

Cada um dos números acima representa um atributo: 

 **1 = auto:** Respeita o comportamento definido no container por meio do align-items;

 **2 = stretch:** O item será esticado para preencher toda a dimensão do eixo transversal \(altura ou largura\);

**3 =  flex-start:** O item é deslocado para o início do eixo transversal;

**4 = flex-end:** O item é deslocado para o final do eixo transversal; 

**5 = center:** O item é centralizado no eixo transversal;

**6 = baseline:** O item é alinhado a partir da base da primeira linha de texto dos demais.

{% tabs %}
{% tab title="Kotlin" %}
{% code title="Screen.kt" %}
```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1").applyFlex(
                    flex = Flex(alignSelf = AlignSelf.AUTO)
                ),
                createText(backgroundColor = "#dd7631", text = "2").applyFlex(
                    flex = Flex(alignSelf = AlignSelf.STRETCH)
                ),
                createText(backgroundColor = "#649d66", text = "3").applyFlex(
                    flex = Flex(alignSelf = AlignSelf.FLEX_START)
                ),
                createText(backgroundColor = "#dd7631", text = "4").applyFlex(
                    flex = Flex(alignSelf = AlignSelf.FLEX_END)
                ),
                createText(backgroundColor = "#649d66", text = "5").applyFlex(
                    flex = Flex(alignSelf = AlignSelf.CENTER)
                ),
                createText(backgroundColor = "#dd7631", text = "6").applyFlex(
                    flex = Flex(alignSelf = AlignSelf.BASELINE)
                )
            )
        ).applyFlex(
            Flex(
                grow = 1.0,
                justifyContent = JustifyContent.SPACE_EVENLY,
                alignItems = AlignItems.CENTER
            )
        )
    }
```
{% endcode %}
{% endtab %}

{% tab title="Swift" %}
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
{% endtab %}
{% endtabs %}

{% hint style="info" %}
Para saber mais sobre o align self, acesse a [**documentação no Yoga Layout.**](https://yogalayout.com/docs/align-items/)\*\*\*\*
{% endhint %}
