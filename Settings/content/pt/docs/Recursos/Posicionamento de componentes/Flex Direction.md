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

![](https://lh6.googleusercontent.com/0ttoF3Ax_Ri25n47srlTniG15bU6NRL4maTig46NgKXHqT2EWiRZaqZUl5fRaTxSPoXkQYQXLxX6xF_FQLjqNxqGKxqqGCoRqOzEi9xqrRwcKBSpdxqzg4QLxaZwPCLWUr8bZzmH)

{{< tabs name="T14" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "texto 1"),
                createText(backgroundColor = "#dd7631", text = "texto 2"),
                createText(backgroundColor = "#649d66", text = "texto 3")
            )
        ).applyFlex(
            Flex(
                flexDirection = FlexDirection.ROW
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

![](https://lh6.googleusercontent.com/kdSZZslWJyiaJZWS_eXCnvX8Z8qfhoqA9PBWEHS4tb6hpz3yc8zOTzYb4GK5185EjsNZ-O2w2KPkeZimUyjP50O4rM599IOaVBc8p9sEd8qJAGnZ_GG7A6GIXlZWaCNVYEc52OvR)

{{< tabs name="T15" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "texto 1"),
                createText(backgroundColor = "#dd7631", text = "texto 2"),
                createText(backgroundColor = "#649d66", text = "texto 3")
            )
        ).applyFlex(
            Flex(
                flexDirection = FlexDirection.ROW_REVERSE
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

![](https://lh3.googleusercontent.com/tTTwTgsoEdEu1gB3x2cfKWf6mHHNCI4b40e_JQUKWLBxWO3HdB6a9pKm8heXLluFLDFvg_Vyh1e6teQWVuFyQdGdXMBis9r2X4WhIE9Nn8EvyVcpuSG0wvJGLUjcvOlcK67qat98)

{{< tabs name="T16" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "texto 1"),
                createText(backgroundColor = "#dd7631", text = "texto 2"),
                createText(backgroundColor = "#649d66", text = "texto 3")
            )
        ).applyFlex(
            Flex(
                flexDirection = FlexDirection.COLUMN
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

![](https://lh5.googleusercontent.com/qXQqn6W3I5PhtU0PSHkXQbwNtvybgtNTQtAGvNf5zNwA0LwMtTkrI3ZUPqRYfQeTjPzANi58cCfpbLEfs5ChiGi1TXqDkp6PmgbedVmWgrSICCdVpINqyCnOGdcz9Dp6Ott1SOnY)

{{< tabs name="T17" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "texto 1"),
                createText(backgroundColor = "#dd7631", text = "texto 2"),
                createText(backgroundColor = "#649d66", text = "texto 3")
            )
        ).applyFlex(
            Flex(
                flexDirection = FlexDirection.COLUMN_REVERSE
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
Para saber o Flex Direction, acesse [**a documentação no Yoga Layout**](https://yogalayout.com/docs/flex-direction/)**.**
{{% /alert %}}
