---
title: Align Content
weight: 62
description: >-
  Nesta seção, você encontra mais informações sobre a propriedade Align Content
  utilizada para posicionar elementos em tela.
---

---

## Align Content

Essa propriedade define como as linhas são distribuídas ao longo do eixo transversal \(vertical\) do container e tem os seguintes atributos: **`flex-start, flex-end, center, space-between, space-around e stretch.`**

### **Stretch**

As linhas são distribuídas uniformemente ao longo do eixo transversal e ocupa todo o espaço disponível:

![](https://lh3.googleusercontent.com/b_00j2HH0UvQnJB8E8JenWZvjhJ5uzi9awrlVQ5HSKaWitrEoeW6rLWTY9my9CzVZUmIfbnGR65irYZRV_VygYZdOxU7k9aIGm8DYOkCFxSt6IyjQbnpvcU0NpnUVimlFoHTrCHE)

{{< tabs id="T26" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "texto 1"),
                createText(backgroundColor = "#dd7631", text = "texto 2"),
                createText(backgroundColor = "#649d66", text = "texto 3"),
                createText(backgroundColor = "#142850", text = "texto 4"),
                createText(backgroundColor = "#dd7631", text = "texto 5"),
                createText(backgroundColor = "#649d66", text = "texto 6"),
                createText(backgroundColor = "#142850", text = "texto 7"),
                createText(backgroundColor = "#dd7631", text = "texto 8"),
                createText(backgroundColor = "#649d66", text = "texto 9"),
                createText(backgroundColor = "#142850", text = "texto 10"),
                createText(backgroundColor = "#dd7631", text = "texto 11"),
                createText(backgroundColor = "#649d66", text = "texto 12"),
                createText(backgroundColor = "#142850", text = "texto 13"),
                createText(backgroundColor = "#dd7631", text = "texto 14"),
                createText(backgroundColor = "#649d66", text = "texto 15")
            )
        ).applyFlex(
            Flex(
                grow = 1.0,
                flexDirection = FlexDirection.ROW,
                flexWrap = FlexWrap.WRAP,
                alignContent = AlignContent.STRETCH
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
                    createText(backgroundColor: "#142850",text: "4"),
                    createText(backgroundColor: "#dd7631",text: "5"),
                    createText(backgroundColor: "#649d66",text: "6"),
                    createText(backgroundColor: "#142850",text: "7"),
                    createText(backgroundColor: "#dd7631",text: "8"),
                    createText(backgroundColor: "#649d66",text: "9"),
                    createText(backgroundColor: "#142850",text: "10"),
                    createText(backgroundColor: "#dd7631",text: "11"),
                    createText(backgroundColor: "#649d66",text: "12"),
                    createText(backgroundColor: "#142850",text: "13"),
                    createText(backgroundColor: "#dd7631",text: "14"),
                    createText(backgroundColor: "#649d66",text: "15"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .grow(1)
                            .flexDirection(.row)
                            .flexWrap(.wrap)
                            .alignContent(.stretch)
                        )
                )
        )
    }
```
{{% /tab %}}
{{< /tabs >}}

### **Flex Start \(padrão\)** 

As linhas são distribuídas no início do eixo transversal:

![](https://lh3.googleusercontent.com/BED8XfPrj4lRkR9omN8FF2_TpniAMloMUOkavnhRi9vlyXvQRrd-GqpTLphHS3Z6URJBEnt6mV25T34Sbzaj1kuIkTOQkpRzsafFgWCtxI5RBPRUXJmCEianoGJvBvarQH17yQzI)

{{< tabs id="T27" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "texto 1"),
                createText(backgroundColor = "#dd7631", text = "texto 2"),
                createText(backgroundColor = "#649d66", text = "texto 3"),
                createText(backgroundColor = "#142850", text = "texto 4"),
                createText(backgroundColor = "#dd7631", text = "texto 5"),
                createText(backgroundColor = "#649d66", text = "texto 6"),
                createText(backgroundColor = "#142850", text = "texto 7"),
                createText(backgroundColor = "#dd7631", text = "texto 8"),
                createText(backgroundColor = "#649d66", text = "texto 9"),
                createText(backgroundColor = "#142850", text = "texto 10"),
                createText(backgroundColor = "#dd7631", text = "texto 11"),
                createText(backgroundColor = "#649d66", text = "texto 12"),
                createText(backgroundColor = "#142850", text = "texto 13"),
                createText(backgroundColor = "#dd7631", text = "texto 14"),
                createText(backgroundColor = "#649d66", text = "texto 15")
            )
        ).applyFlex(
            Flex(
                grow = 1.0,
                flexDirection = FlexDirection.ROW,
                flexWrap = FlexWrap.WRAP,
                alignContent = AlignContent.FLEX_START
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
                    createText(backgroundColor: "#142850",text: "4"),
                    createText(backgroundColor: "#dd7631",text: "5"),
                    createText(backgroundColor: "#649d66",text: "6"),
                    createText(backgroundColor: "#142850",text: "7"),
                    createText(backgroundColor: "#dd7631",text: "8"),
                    createText(backgroundColor: "#649d66",text: "9"),
                    createText(backgroundColor: "#142850",text: "10"),
                    createText(backgroundColor: "#dd7631",text: "11"),
                    createText(backgroundColor: "#649d66",text: "12"),
                    createText(backgroundColor: "#142850",text: "13"),
                    createText(backgroundColor: "#dd7631",text: "14"),
                    createText(backgroundColor: "#649d66",text: "15"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .grow(1)
                            .flexDirection(.row)
                            .flexWrap(.wrap)
                            .alignContent(.flexStart)
                        )
                )
        )
    }
```
{{% /tab %}}
{{< /tabs >}}

### **Flex End**

As linhas são distribuídas no fim do eixo transversal:

![](https://lh3.googleusercontent.com/VuZ6TTe1FITuufDUMG38PshAemVFOJRHoH8sxqPxYDnQgiG05omw-vyi0xAEGNJss2nWbqRMj9nqyEb7TV2NCaYmBa_A63nN9cNuGeZqKzgA42BmnquU22X73_1EwM8vdsUkkU52)

{{< tabs id="T28" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "texto 1"),
                createText(backgroundColor = "#dd7631", text = "texto 2"),
                createText(backgroundColor = "#649d66", text = "texto 3"),
                createText(backgroundColor = "#142850", text = "texto 4"),
                createText(backgroundColor = "#dd7631", text = "texto 5"),
                createText(backgroundColor = "#649d66", text = "texto 6"),
                createText(backgroundColor = "#142850", text = "texto 7"),
                createText(backgroundColor = "#dd7631", text = "texto 8"),
                createText(backgroundColor = "#649d66", text = "texto 9"),
                createText(backgroundColor = "#142850", text = "texto 10"),
                createText(backgroundColor = "#dd7631", text = "texto 11"),
                createText(backgroundColor = "#649d66", text = "texto 12"),
                createText(backgroundColor = "#142850", text = "texto 13"),
                createText(backgroundColor = "#dd7631", text = "texto 14"),
                createText(backgroundColor = "#649d66", text = "texto 15")
            )
        ).applyFlex(
            Flex(
                grow = 1.0,
                flexDirection = FlexDirection.ROW,
                flexWrap = FlexWrap.WRAP,
                alignContent = AlignContent.FLEX_END
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
                    createText(backgroundColor: "#142850",text: "4"),
                    createText(backgroundColor: "#dd7631",text: "5"),
                    createText(backgroundColor: "#649d66",text: "6"),
                    createText(backgroundColor: "#142850",text: "7"),
                    createText(backgroundColor: "#dd7631",text: "8"),
                    createText(backgroundColor: "#649d66",text: "9"),
                    createText(backgroundColor: "#142850",text: "10"),
                    createText(backgroundColor: "#dd7631",text: "11"),
                    createText(backgroundColor: "#649d66",text: "12"),
                    createText(backgroundColor: "#142850",text: "13"),
                    createText(backgroundColor: "#dd7631",text: "14"),
                    createText(backgroundColor: "#649d66",text: "15"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .grow(1)
                            .flexDirection(.row)
                            .flexWrap(.wrap)
                            .alignContent(.flexEnd)
                        )
                )
        )
    }
```
{{% /tab %}}
{{< /tabs >}}

### **Center**

As linhas são mantidas no centro do eixo transversal:

![](https://lh3.googleusercontent.com/Zg9Ki80KtZlAOJPkXUWptxdcCoKGQMiUvfSkFwfA3KK3fvNg4JmTes1kQ45IXkqwnIei0AFGUr_DqJel4PVG-8AUmx1HEKEC-KiUOjXJoSpdnzPaoQbWuqQabGEjMNHaE8-Jswwc)

{{< tabs id="T29" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "texto 1"),
                createText(backgroundColor = "#dd7631", text = "texto 2"),
                createText(backgroundColor = "#649d66", text = "texto 3"),
                createText(backgroundColor = "#142850", text = "texto 4"),
                createText(backgroundColor = "#dd7631", text = "texto 5"),
                createText(backgroundColor = "#649d66", text = "texto 6"),
                createText(backgroundColor = "#142850", text = "texto 7"),
                createText(backgroundColor = "#dd7631", text = "texto 8"),
                createText(backgroundColor = "#649d66", text = "texto 9"),
                createText(backgroundColor = "#142850", text = "texto 10"),
                createText(backgroundColor = "#dd7631", text = "texto 11"),
                createText(backgroundColor = "#649d66", text = "texto 12"),
                createText(backgroundColor = "#142850", text = "texto 13"),
                createText(backgroundColor = "#dd7631", text = "texto 14"),
                createText(backgroundColor = "#649d66", text = "texto 15")
            )
        ).applyFlex(
            Flex(
                grow = 1.0,
                flexDirection = FlexDirection.ROW,
                flexWrap = FlexWrap.WRAP,
                alignContent = AlignContent.CENTER
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
                    createText(backgroundColor: "#142850",text: "4"),
                    createText(backgroundColor: "#dd7631",text: "5"),
                    createText(backgroundColor: "#649d66",text: "6"),
                    createText(backgroundColor: "#142850",text: "7"),
                    createText(backgroundColor: "#dd7631",text: "8"),
                    createText(backgroundColor: "#649d66",text: "9"),
                    createText(backgroundColor: "#142850",text: "10"),
                    createText(backgroundColor: "#dd7631",text: "11"),
                    createText(backgroundColor: "#649d66",text: "12"),
                    createText(backgroundColor: "#142850",text: "13"),
                    createText(backgroundColor: "#dd7631",text: "14"),
                    createText(backgroundColor: "#649d66",text: "15"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .grow(1)
                            .flexDirection(.row)
                            .flexWrap(.wrap)
                            .alignContent(.center)
                        )
                )
        )
    }
```
{{% /tab %}}
{{< /tabs >}}

### **Space Between**

A primeira linha é deslocada para o início do eixo transversal, a última para o final e as demais são distribuídas uniformemente entre eles:

![](https://lh6.googleusercontent.com/FuNZ44wVYsY92lrIC41adtO0FfQPiNCc-DrDAskJUVHaYokYANlo9s-RlD6OL_su4lDZMjGmclKvE20KA_qOBjyHESqA_bjLUYecnFQVqrqN0zHYcIT8fint32wZ6YPKm19-wxLG)

{{< tabs id="T30" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "texto 1"),
                createText(backgroundColor = "#dd7631", text = "texto 2"),
                createText(backgroundColor = "#649d66", text = "texto 3"),
                createText(backgroundColor = "#142850", text = "texto 4"),
                createText(backgroundColor = "#dd7631", text = "texto 5"),
                createText(backgroundColor = "#649d66", text = "texto 6"),
                createText(backgroundColor = "#142850", text = "texto 7"),
                createText(backgroundColor = "#dd7631", text = "texto 8"),
                createText(backgroundColor = "#649d66", text = "texto 9"),
                createText(backgroundColor = "#142850", text = "texto 10"),
                createText(backgroundColor = "#dd7631", text = "texto 11"),
                createText(backgroundColor = "#649d66", text = "texto 12"),
                createText(backgroundColor = "#142850", text = "texto 13"),
                createText(backgroundColor = "#dd7631", text = "texto 14"),
                createText(backgroundColor = "#649d66", text = "texto 15")
            )
        ).applyFlex(
            Flex(
                grow = 1.0,
                flexDirection = FlexDirection.ROW,
                flexWrap = FlexWrap.WRAP,
                alignContent = AlignContent.SPACE_BETWEEN
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
                    createText(backgroundColor: "#142850",text: "4"),
                    createText(backgroundColor: "#dd7631",text: "5"),
                    createText(backgroundColor: "#649d66",text: "6"),
                    createText(backgroundColor: "#142850",text: "7"),
                    createText(backgroundColor: "#dd7631",text: "8"),
                    createText(backgroundColor: "#649d66",text: "9"),
                    createText(backgroundColor: "#142850",text: "10"),
                    createText(backgroundColor: "#dd7631",text: "11"),
                    createText(backgroundColor: "#649d66",text: "12"),
                    createText(backgroundColor: "#142850",text: "13"),
                    createText(backgroundColor: "#dd7631",text: "14"),
                    createText(backgroundColor: "#649d66",text: "15"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .grow(1)
                            .flexDirection(.row)
                            .flexWrap(.wrap)
                            .alignContent(.spaceBetween)
                        )
                )
        )
    }
```
{{% /tab %}}
{{< /tabs >}}

### **Space Around**

As linhas são uniformemente distribuídas ao longo do eixo transversal. As margens são atribuídas igualmente à esquerda e à direita \(ou acima e abaixo, dependendo da direção do eixo transversal\). Por isso a primeira e a última linha não ficam “coladas” nas bordas do container:

![](https://lh6.googleusercontent.com/XLrdmMcnGnWX74fZTuLPCHJzJma6mxIWOmwfqLENLhvj3c6Y5vQ7u0HkQIeJvRDLS4-nLtPlJh-TZ2tO0A4go0ZJOx8dvv6BCyUZTs5gnJU9ruRS_GEwQfLXCfkqlj2LKC7EFtUb)

{{< tabs id="T31" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "texto 1"),
                createText(backgroundColor = "#dd7631", text = "texto 2"),
                createText(backgroundColor = "#649d66", text = "texto 3"),
                createText(backgroundColor = "#142850", text = "texto 4"),
                createText(backgroundColor = "#dd7631", text = "texto 5"),
                createText(backgroundColor = "#649d66", text = "texto 6"),
                createText(backgroundColor = "#142850", text = "texto 7"),
                createText(backgroundColor = "#dd7631", text = "texto 8"),
                createText(backgroundColor = "#649d66", text = "texto 9"),
                createText(backgroundColor = "#142850", text = "texto 10"),
                createText(backgroundColor = "#dd7631", text = "texto 11"),
                createText(backgroundColor = "#649d66", text = "texto 12"),
                createText(backgroundColor = "#142850", text = "texto 13"),
                createText(backgroundColor = "#dd7631", text = "texto 14"),
                createText(backgroundColor = "#649d66", text = "texto 15")
            )
        ).applyFlex(
            Flex(
                grow = 1.0,
                flexDirection = FlexDirection.ROW,
                flexWrap = FlexWrap.WRAP,
                alignContent = AlignContent.SPACE_AROUND
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
                    createText(backgroundColor: "#142850",text: "4"),
                    createText(backgroundColor: "#dd7631",text: "5"),
                    createText(backgroundColor: "#649d66",text: "6"),
                    createText(backgroundColor: "#142850",text: "7"),
                    createText(backgroundColor: "#dd7631",text: "8"),
                    createText(backgroundColor: "#649d66",text: "9"),
                    createText(backgroundColor: "#142850",text: "10"),
                    createText(backgroundColor: "#dd7631",text: "11"),
                    createText(backgroundColor: "#649d66",text: "12"),
                    createText(backgroundColor: "#142850",text: "13"),
                    createText(backgroundColor: "#dd7631",text: "14"),
                    createText(backgroundColor: "#649d66",text: "15"),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .grow(1)
                            .flexDirection(.row)
                            .flexWrap(.wrap)
                            .alignContent(.spaceAround)
                        )
                )
        )
    }
```
{{% /tab %}}
{{< /tabs >}}

{{% alert color="info" %}}
Para saber mais sobre o Align Content, acesse a [**documentação no Yoga Layout.**](https://yogalayout.com/docs/align-content/)
{{% /alert %}}
