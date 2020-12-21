---
title: Shrink
weight: 80
description: >-
  Nesta seção, você encontra mais informações sobre a propriedade Shrink
  utilizada para posicionar elementos em tela.
---

---

## Shrink

Esta propriedade define a **capacidade de um item encolher**, reduzindo os elementos filhos ao longo do eixo principal. 

A diminuição dos elementos é feita de uma forma que o tamanho total de todos os filhos encolhidos não ultrapasse o tamanho do container principal. 

Com o Shrink, o elemento recebe um valor double, que irá diminuir o elemento de acordo com espaço do container. Veja no exemplo: 

![](https://lh5.googleusercontent.com/30mBYNqNtZf0Lp1Zw4dr8dkZW5PsOtxqHtqkgbPLZNbU6g8xFs0QmGh5ip66WlU5cHSqtdBWduGuwrLGyGp2uYkkAw6GLXpaf-ZRNORNJywill9WCTZIlRAva9_s5G30MJCh-rOS)

{{< tabs name="T67" >}}
{{% tab name="Kotlin" %}}

```kotlin
 private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1").applyFlex(
                    Flex(size = Size(width = 150.unitReal(),height = 150.unitReal()))
                ),
                createText(backgroundColor = "#dd7631", text = "2").applyFlex(
                    Flex(size = Size(width = 150.unitReal(),height = 150.unitReal()))
                ),
                createText(backgroundColor = "#649d66", text = "3").applyFlex(
                    Flex(size = Size(width = 150.unitReal(),height = 150.unitReal()),
                    shrink = 3.0)
                )
            )
        ).applyFlex(
            Flex(
                flexDirection = FlexDirection.ROW,
                size = Size(width = 300.unitReal(),height = 300.unitReal())
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
                    createText(backgroundColor: "#142850",text: "1").applyFlex(
                        Flex().size(Size().width(150).height(150))),
                    createText(backgroundColor: "#dd7631",text: "2").applyFlex(
                        Flex().size(Size().width(150).height(150))),
                    createText(backgroundColor: "#649d66",text: "3").applyFlex(
                        Flex()
                            .size(Size().width(150).height(150))
                            .shrink(0.3)
                    ),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .flexDirection(.row)
                            .size(Size().width(300).height(300))
                    )
                )
        )
    }
```
{{% /tab %}}
{{< /tabs >}}

{{% alert color="info" %}}
Para saber mais sobre Shrink, acesse a [**documentação do Yoga Layout**](https://yogalayout.com/docs/flex).
{{% /alert %}}
