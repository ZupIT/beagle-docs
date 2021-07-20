---
title: Flex Direction
weight: 56
description: >-
  Nesta seção, você encontra mais informações sobre a propriedade Flex Direction
  utilizada para posicionar elementos em tela.
---

---

## Flex Direction

A propriedade flex-direction é aplicada a um container e define o eixo/fluxo de exibição em que os elementos serão organizados. Essa propriedade tem os seguintes atributos: **`row, row-reverse, column, column-reverse`**.

{{% alert color="info" %}}
Nos exemplos abaixo, foi utilizada função `createText` com intuito de retornar um componente de texto com um estilo aplicado. Mas essa configuração não é obrigatória.
{{% /alert %}}

Confira abaixo os exemplos de comportamento dos elementos para cada atributo:

### **Row**

Os itens são organizados em forma de linha exibindo seus elementos da esquerda para a direita:

{{< figure src="/shared/flex/row.png" width="150">}}

{{< tabs id="T14" >}}
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
                    createText(backgroundColor: "#142850",text: "1"),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3"),
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

### **Row Reverse**

Os itens são organizados em forma de linha, exibindo seus elementos da direita para a esquerda:

{{< figure src="/shared/flex/row-reverse.png" width="150">}}

{{< tabs id="T15" >}}
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
              flexDirection = FlexDirection.ROW_REVERSE
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
                            .flexDirection(.rowReverse)
                      )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Column \(Padrão\)**

Os itens são organizados em forma de colunas e são posicionados de cima para baixo:

{{< figure src="/shared/flex/column.png" width="150">}}

{{< tabs id="T16" >}}
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
              flexDirection = FlexDirection.COLUMN
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
                            .flexDirection(.column)
                      )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Column Reverse**

Os itens são organizados em forma de colunas e são posicionados de baixo para cima:

{{< figure src="/shared/flex/column-reverse.png" width="150">}}

{{< tabs id="T17" >}}
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
              flexDirection = FlexDirection.COLUMN_REVERSE
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
                            .flexDirection(.columnReverse)
                     )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

{{% alert color="info" %}}
Para saber o Flex Direction, acesse [**a documentação no Yoga Layout**](https://yogalayout.com/pt/flex-direction/)
{{% /alert %}}
