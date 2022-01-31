---
title: Grow
weight: 58
description: >-
  Nesta seção, você encontra mais informações sobre a propriedade Grow utilizada
  para posicionar elementos em tela.
---

---

## Grow

Esta propriedade define a proporção que um item deve crescer, quando necessário. Seu valor é 0, por padrão e o que indica que o item não deve crescer. Esse atributo aceita apenas valores numéricos `Double` positivo.

### **Exemplo 1**

O grow foi aplicado com valor 0, e o container ficou do mesmo tamanho do conteúdo:

{{< figure src="/shared/flex/grow0.png" width="150">}}

{{< tabs id="T18" >}}
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
        grow = 0.0
    }.setStyle {
        backgroundColor = constant("#000000")
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
                            .grow(0)
                     )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Exemplo 2**

O grow = 1.0 foi aplicado e o container ficou com o tamanho da tela:

{{< figure src="/shared/flex/grow1.png" width="150">}}

{{< tabs id="T19" >}}
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
    }.setStyle {
        backgroundColor = constant("#000000")
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
                     )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

{{% alert color="info" %}}
Para saber o Grow, acesse [**a documentação no Yoga Layout**](https://yogalayout.com/pt/flex/)
{{% /alert %}}
