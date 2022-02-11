---
title: Padding
weight: 72
description: >-
  Nesta seção, você encontra mais informações sobre a propriedade Padding
  utilizada para posicionar elementos em tela.
---

---

## Padding

Esta propriedade permite aplicar um espaçamento no elemento pai. Dessa forma, todo elemento filho que for criado depois dessa configuração já virá com espaçamento pré-definido.

Dentro do Padding, você encontra ainda as seguintes propriedades:

**`all, bottom, end, horizontal, left, right, start, top, vertical`**

## **Propriedades**

### **All**

É ele quem define um **espaçamento em todos os lados** do elemento. Exemplo:

{{< figure src="/shared/flex/padding-all.png" width="150">}}

{{< tabs id="T48" >}}
{{% tab name="Kotlin" %}}

```kotlin
 private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1"),
                createText(backgroundColor = "#dd7631", text = "2"),
                createText(backgroundColor = "#649d66", text = "3"),
                createText(backgroundColor = "#142850", text = "4"),
                createText(backgroundColor = "#dd7631", text = "5"),
                createText(backgroundColor = "#649d66", text = "6")
            )
        ).setFlex {
              flexDirection = FlexDirection.ROW
          }.setStyle { 
              backgroundColor = constant("#000000")
              padding = EdgeValue(all = UnitValue.real(20))
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
                    createText(backgroundColor: "#142850",text: "4"),
                    createText(backgroundColor: "#dd7631",text: "5"),
                    createText(backgroundColor: "#649d66",text: "6"),
                    ],widgetProperties: WidgetProperties(
                        style: Style(
                            backgroundColor: constant("#000000"),
                            padding: EdgeValue().all(20)
                            flex: Flex().flexDirection(.row)
                        )
                    )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Bottom**

É ele quem define um **espaçamento na parte inferior** do elemento. Exemplo:

{{< figure src="/shared/flex/padding-bottom.png" width="150">}}

{{< tabs id="T49" >}}
{{% tab name="Kotlin" %}}

```kotlin
 private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1"),
                createText(backgroundColor = "#dd7631", text = "2"),
                createText(backgroundColor = "#649d66", text = "3"),
                createText(backgroundColor = "#142850", text = "4"),
                createText(backgroundColor = "#dd7631", text = "5"),
                createText(backgroundColor = "#649d66", text = "6")
            )
        ).setFlex {
              flexDirection = FlexDirection.ROW
          }.setStyle { 
              backgroundColor = constant("#000000")
              padding = EdgeValue(bottom = UnitValue.real(20))
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
                    createText(backgroundColor: "#142850",text: "4"),
                    createText(backgroundColor: "#dd7631",text: "5"),
                    createText(backgroundColor: "#649d66",text: "6"),
                    ],widgetProperties: WidgetProperties(
                        style: Style(
                            backgroundColor: constant("#000000"),
                            padding: EdgeValue().bottom(20)
                            flex: Flex().flexDirection(.row)
                        )
                    )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Left**

É ele quem define um **espaçamento no lado esquerdo** do elemento. Exemplo:

{{< figure src="/shared/flex/padding-left-start.png" width="150">}}

{{< tabs id="T50" >}}
{{% tab name="Kotlin" %}}

```kotlin
 private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1"),
                createText(backgroundColor = "#dd7631", text = "2"),
                createText(backgroundColor = "#649d66", text = "3"),
                createText(backgroundColor = "#142850", text = "4"),
                createText(backgroundColor = "#dd7631", text = "5"),
                createText(backgroundColor = "#649d66", text = "6")
            )
        ).setFlex {
              flexDirection = FlexDirection.ROW
          }.setStyle { 
              backgroundColor = constant("#000000")
              padding = EdgeValue(left = UnitValue.real(20))
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
                    createText(backgroundColor: "#142850",text: "4"),
                    createText(backgroundColor: "#dd7631",text: "5"),
                    createText(backgroundColor: "#649d66",text: "6"),
                    ],widgetProperties: WidgetProperties(
                        style: Style(
                            backgroundColor: constant("#000000"),
                            padding: EdgeValue().left(20)
                            flex: Flex().flexDirection(.row)
                        )
                    )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Right**

É ele quem define um **espaçamento no lado direito** do elemento. Exemplo:

{{< figure src="/shared/flex/padding-right-end.png" width="150">}}

{{< tabs id="T51" >}}
{{% tab name="Kotlin" %}}

```kotlin
 private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1"),
                createText(backgroundColor = "#dd7631", text = "2"),
                createText(backgroundColor = "#649d66", text = "3"),
                createText(backgroundColor = "#142850", text = "4"),
                createText(backgroundColor = "#dd7631", text = "5"),
                createText(backgroundColor = "#649d66", text = "6")
            )
        ).setFlex {
              flexDirection = FlexDirection.ROW
          }.setStyle { 
              backgroundColor = constant("#000000"),
              padding = EdgeValue(right = UnitValue.real(20))
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
                    createText(backgroundColor: "#142850",text: "4"),
                    createText(backgroundColor: "#dd7631",text: "5"),
                    createText(backgroundColor: "#649d66",text: "6"),
                    ],widgetProperties: WidgetProperties(
                        style: Style(
                            backgroundColor: constant("#000000"),
                            padding: EdgeValue().right(20)
                            flex: Flex().flexDirection(.row)
                        )
                    )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Top**

É ele quem define um **espaçamento na parte superior** do elemento. Exemplo:

{{< figure src="/shared/flex/padding-top.png" width="150">}}

{{< tabs id="T52" >}}
{{% tab name="Kotlin" %}}

```kotlin
 private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1"),
                createText(backgroundColor = "#dd7631", text = "2"),
                createText(backgroundColor = "#649d66", text = "3"),
                createText(backgroundColor = "#142850", text = "4"),
                createText(backgroundColor = "#dd7631", text = "5"),
                createText(backgroundColor = "#649d66", text = "6")
            )
        ).setFlex {
              flexDirection = FlexDirection.ROW
          }.setStyle { 
              backgroundColor = constant("#000000")
              padding = EdgeValue(top = UnitValue.real(20))
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
                    createText(backgroundColor: "#142850",text: "4"),
                    createText(backgroundColor: "#dd7631",text: "5"),
                    createText(backgroundColor: "#649d66",text: "6"),
                    ],widgetProperties: WidgetProperties(
                        style: Style(
                            backgroundColor: constant("#000000"),
                            padding: EdgeValue().top(20)
                            flex: Flex().flexDirection(.row)
                        )
                    )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Horizontal**

É ele quem define um **espaçamento no eixo horizontal** do elemento. Exemplo:

{{< figure src="/shared/flex/padding-horizontal.png" width="150">}}

{{< tabs id="T53" >}}
{{% tab name="Kotlin" %}}

```kotlin
 private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1"),
                createText(backgroundColor = "#dd7631", text = "2"),
                createText(backgroundColor = "#649d66", text = "3"),
                createText(backgroundColor = "#142850", text = "4"),
                createText(backgroundColor = "#dd7631", text = "5"),
                createText(backgroundColor = "#649d66", text = "6")
            )
        ).setFlex {
              flexDirection = FlexDirection.ROW
          }.setStyle { 
              backgroundColor = constant("#000000")
              padding = EdgeValue(horizontal = UnitValue.real(20))
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
                    createText(backgroundColor: "#142850",text: "4"),
                    createText(backgroundColor: "#dd7631",text: "5"),
                    createText(backgroundColor: "#649d66",text: "6"),
                    ],widgetProperties: WidgetProperties(
                        style: Style(
                            backgroundColor: constant("#000000"),
                            padding: EdgeValue().horizontal(20)
                            flex: Flex().flexDirection(.row)
                        )
                    )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Vertical**

É ele quem define um **espaçamento no eixo vertical** do elemento. Exemplo:

{{< figure src="/shared/flex/padding-vertical.png" width="150">}}

{{< tabs id="T54" >}}
{{% tab name="Kotlin" %}}

```kotlin
 private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1"),
                createText(backgroundColor = "#dd7631", text = "2"),
                createText(backgroundColor = "#649d66", text = "3"),
                createText(backgroundColor = "#142850", text = "4"),
                createText(backgroundColor = "#dd7631", text = "5"),
                createText(backgroundColor = "#649d66", text = "6")
            )
        ).setFlex {
              flexDirection = FlexDirection.ROW
          }.setStyle { 
              backgroundColor = constant("#000000")
              padding = EdgeValue(vertical = UnitValue.real(20))
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
                    createText(backgroundColor: "#142850",text: "4"),
                    createText(backgroundColor: "#dd7631",text: "5"),
                    createText(backgroundColor: "#649d66",text: "6"),
                    ],widgetProperties: WidgetProperties(
                        style: Style(
                            backgroundColor: constant("#000000"),
                            padding: EdgeValue().vertical(20)
                            flex: Flex().flexDirection(.row)
                        )
                    )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

{{% alert color="info" %}}
Para saber mais sobre Padding, acesse a [**documentação do Yoga Layout**](https://yogalayout.com/pt/margins-paddings-borders)
{{% /alert %}}
