---
title: Flex
weight: 86
description: >-
  Nesta seção, você encontra mais informações sobre a propriedade Flex utilizada
  para posicionar elementos em tela.
---

---

## Flex

Esta propriedade define **como os itens do container serão preenchidos** de acordo com o espaço disponível ao longo do eixo principal.

Para isso, o Flex estabelece os valores aplicados na propriedade de cada filho. Assim, ele pega os valores de todos os elementos filhos e fazem o seguinte cálculo: somam e depois divide por cada valor da propriedade flex aplicado no filho. O resultado deve ser o espaço preenchido do filho no container.

{{< figure src="/shared/flex/flex.png" width="150">}}

{{< tabs id="T70" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setFlex {
                               flex = 1.0
                      },
                  createText(backgroundText = "#dd7631", text = "2")
                      .setFlex {
                          flex = 2.0
                      },
                  createText(backgroundText = "#649d66", text = "3")
                      .setFlex {
                          flex = 3.0
                      }
              )
          ).setFlex {
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
                    createText(backgroundColor: "#142850",text: "1").applyFlex(
                        Flex().flex(1)),
                    createText(backgroundColor: "#dd7631",text: "2").applyFlex(
                        Flex().flex(2)),
                    createText(backgroundColor: "#649d66",text: "3").applyFlex(
                        Flex().flex(3))
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .grow(1)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

**Para saber mais sobre Flex, acesse a documentação do [**Yoga Layout**](https://yogalayout.com/pt/flex/).**
