---
title: Display
weight: 84
description: >-
  Nesta seção, você encontra mais informações sobre a propriedade Display
  utilizada para posicionar elementos em tela.
---

---

## Display

Esta propriedade define o **tipo de exibição** deste componente, o que permite que um container seja flexível ou bloqueado de acordo com o valor definido.

O Display possibilita todos os seus elementos filhos diretos sejam também flexíveis. 

Nesta propriedade, temos dois atributos:

| **Flex** | **None** |
| :-----------: | :----------------------------------------------------------: |
| Permite que os elementos filhos do contêiner sejam flexíveis| Oculta o elemento que tenha definida essa propriedade |
|{{< figure src="/shared/flex/flex-start-row.png" width="150">}} |{{< figure src="/shared/flex/display-none.png" width="150">}}|

*  Veja abaixo um código que demonstra o `display none`:

{{< tabs id="T69" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1"),
                  createText(backgroundText = "#dd7631", text = "2")
                      .setStyle {
                          display = Bind.value(Display.NONE)
                      },
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              flexDirection = FlexDirection.ROW
              alignItems = AlignItems.CENTER
              justifyContent = JustifyContent.CENTER
              grow = 1.0
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
                    createText(backgroundColor: "#dd7631",text: "2").applyFlex(
                        Flex().display(.none)),
                    createText(backgroundColor: "#649d66",text: "3")
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .grow(1)
                            .flexDirection(.row)
                            .justifyContent(.center)
                            .alignItems(.center)
                            .alignItems(.center)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

**Para saber mais sobre Display, acesse a documentação do [**Yoga Layout**](https://yogalayout.com/pt/flex/).**
