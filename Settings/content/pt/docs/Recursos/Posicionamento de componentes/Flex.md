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

Para isso, o Flex estabelece os valores aplicados na propriedade de cada filho. Assim, ele pega os valores  de todos os elementos filhos e fazem o seguinte cálculo: somam e depois divide por cada valor  da propriedade flex aplicado no filho. O resultado deve ser o espaço preenchido do filho no container.

![](/captura-de-tela-2020-06-05-a-s-16.53.38.png)

{{< tabs id="T70" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1").applyFlex(Flex(flex = 1.0)),
                createText(backgroundColor = "#dd7631", text = "2").applyFlex(Flex(flex = 2.0)),
                createText(backgroundColor = "#649d66", text = "3").applyFlex(Flex(flex = 3.0))
            )
        ).applyFlex(
            Flex(
                grow = 1.0
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
