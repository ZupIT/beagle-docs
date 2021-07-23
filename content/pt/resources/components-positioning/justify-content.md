---
title: Justify Content
weight: 60
description: >-
  Nesta seção, você encontra mais informações sobre a propriedade Justify
  Content utilizada para posicionar elementos em tela.
---

---

## Justify Content

O justify-content define o alinhamento dos itens ao longo do eixo principal do container \(horizontalmente\) e tem os seguintes atributos: **`flex-start, flex-end, center, space-between, space-around e space-Evenly.`**

{{% alert color="danger" %}}
O tamanho do container pode interferir no comportamento dessa propriedade. Isso significa que, quando os elementos são posicionados, podem ser dispostos em uma coluna em vez de uma linha, como no exemplo abaixo.

Nesse momento, se o container não possuir uma altura suficiente para conter os elementos empilhados, essa propriedade não conseguirá mostrar os elementos em uma coluna.
{{% /alert %}}

### **Flex Start \(padrão\)**

Os itens são alinhados a partir do início do eixo principal; alinhados em cima, no começo da tela:

{{< figure src="/shared/flex/flex-start.png" width="150">}}

{{< tabs id="T20" >}}
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
              justifyContent = JustifyContent.FLEX_START
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
                            .justifyContent(.flexStart)
                     )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Flex End**

Os itens são alinhados a partir do fim do eixo principal; alinhados em baixo, no fim da tela:

{{< figure src="/shared/flex/flex-end.png" width="150">}}

{{< tabs id="T21" >}}
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
              justifyContent = JustifyContent.FLEX_END
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
                            .justifyContent(.flexEnd)
                      )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Center**

Os itens são alinhados ao centro do eixo principal; no centro da tela:

{{< figure src="/shared/flex/center.png" width="150">}}

{{< tabs id="T22" >}}
{{% tab name="Kotlin" %}}
{% code title="" %}}

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
              justifyContent = JustifyContent.CENTER
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
                            .justifyContent(.center)
                      )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Space Between**

O primeiro item é deslocado para o início do eixo principal, o último é deslocado para o fim do eixo principal e os demais são distribuídos uniformemente; o espaço entre eles é igual:

{{< figure src="/shared/flex/space-between.png" width="150">}}

{{< tabs id="T23" >}}
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
              justifyContent = JustifyContent.SPACE_BETWEEN
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
                            .justifyContent(.spaceBetween)
                     )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Space Around**

Os itens são uniformemente distribuídos ao longo do eixo principal. Aqui, são atribuídas margens iguais acima e abaixo \(ou à esquerda e à direita, dependendo da direção do eixo principal\). Por isso o primeiro e o último item não ficam “colados” nas bordas do container:

{{< figure src="/shared/flex/space-around.png" width="150">}}

{{< tabs id="T24" >}}
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
              justifyContent = JustifyContent.SPACE_AROUND
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
                            .justifyContent(.spaceAround)
                    )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Space Evenly**

Os itens são uniformemente distribuídos ao longo do eixo principal:

{{< figure src="/shared/flex/space-evenly.png" width="150">}}

{{< tabs id="T25" >}}
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
              justifyContent = JustifyContent.SPACE_EVENLY
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
                            .justifyContent(.spaceEvenly)
                     )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

{{% alert color="info" %}}
Para saber o Justify Content, acesse [**a documentação no Yoga Layout**](https://yogalayout.com/pt/flex-direction/)
{{% /alert %}}
