---
title: Position
weight: 74
description: "Nesta seção, você encontra mais informações sobre a propriedade Position."
---

---

## Position

Esta propriedade muda a posição de um elemento em tela adicionando espaços ao lado de cada um deles:**`top`, `right`, `bottom`, `left`, `vertical`, `horizontal` e `all`**. Ele também adiciona um valor a esses atributos, rearranja o elemento em questão sem modificar o posicionamento de outros elementos na tela e tudo isso acontece quando um posicionamento do tipo relativo é definido. 

O elemento sendo posicionado pode ter 2 tipos de posicionamento (`Position type`)

1. **`Relative`**: O elemento se desloca e os outros elementos não se movem.
2. **`Absolute`**: O elemento de desloca da mesma forma que no tipo ´Relative´ mas os outros elementos se rearrajam na tela passando a ignorar o elemento deslocado.

## **Propriedades**

### **All**

Adiciona o mesmo espaço a **todos(all)** os lados do elemento:

{{< figure src="/shared/flex/position-all.png" width="150">}}

{{< tabs id="T55" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle { 
                                position = EdgeValue(all = UnitValue.real(50))
                      },
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              grow = 1.0
              flexDirection = FlexDirection.ROW
              justifyContent = JustifyContent.CENTER
              alignItems = AlignItems.CENTER
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
                        Flex()
                            .size(Size().width(50).height(50))
                            .position(EdgeValue().all(50))),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3")
                    ],widgetProperties: WidgetProperties(
                          flex: Flex()
                        .grow(1)
                        .flexDirection(.row)
                        .justifyContent(.center)
                        .alignItems(.center)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Bottom**

Adiciona um espaço **abaixo(bottom)** do elemento:

{{< figure src="/shared/flex/position-bottom.png" width="150">}}

{{< tabs id="T56" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle { 
                                position = EdgeValue(bottom = UnitValue.real(50))
                      },
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              grow = 1.0
              flexDirection = FlexDirection.ROW
              justifyContent = JustifyContent.CENTER
              alignItems = AlignItems.CENTER
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
                        Flex()
                            .size(Size().width(50).height(50))
                            .position(EdgeValue().bottom(50))),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3")
                    ],widgetProperties: WidgetProperties(
                          flex: Flex()
                        .grow(1)
                        .flexDirection(.row)
                        .justifyContent(.center)
                        .alignItems(.center)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Left**

Adiciona um espaço a **esquerda(left)** do elemento:

{{< figure src="/shared/captura-de-tela-2020-06-05-a-s-11.29.41.png" width="150">}}

{{< tabs id="T57" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle { 
                                position = EdgeValue(left = UnitValue.real(50))
                      },
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              grow = 1.0
              flexDirection = FlexDirection.ROW
              justifyContent = JustifyContent.CENTER
              alignItems = AlignItems.CENTER
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
                        Flex()
                            .size(Size().width(50).height(50))
                            .position(EdgeValue().left(150))),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3")
                    ],widgetProperties: WidgetProperties(
                          flex: Flex()
                        .grow(1)
                        .flexDirection(.row)
                        .justifyContent(.center)
                        .alignItems(.center)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Right**

Adiciona um espaço a **direita(right)** do elemento:

{{< figure src="/shared/captura-de-tela-2020-06-05-a-s-11.33.00.png" width="150">}}

{{< tabs id="T58" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle { 
                                position = EdgeValue(right = UnitValue.real(50))
                      },
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              grow = 1.0
              flexDirection = FlexDirection.ROW
              justifyContent = JustifyContent.CENTER
              alignItems = AlignItems.CENTER
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
                        Flex()
                            .size(Size().width(50).height(50))
                            .position(EdgeValue().right(100))),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3")
                    ],widgetProperties: WidgetProperties(
                          flex: Flex()
                        .grow(1)
                        .flexDirection(.row)
                        .justifyContent(.center)
                        .alignItems(.center)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Top**

Adiciona um espaço no **topo(top)** do elemento:

{{< figure src="/shared/captura-de-tela-2020-06-05-a-s-11.34.21.png" width="150">}}

{{< tabs id="T59" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle { 
                                position = EdgeValue(top = UnitValue.real(50))
                      },
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              grow = 1.0
              flexDirection = FlexDirection.ROW
              justifyContent = JustifyContent.CENTER
              alignItems = AlignItems.CENTER
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
                        Flex()
                            .size(Size().width(50).height(50))
                            .position(EdgeValue().top(100))),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3")
                    ],widgetProperties: WidgetProperties(
                          flex: Flex()
                        .grow(1)
                        .flexDirection(.row)
                        .justifyContent(.center)
                        .alignItems(.center)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Horizontal**

Adiciona um espaço nos lados **horizontais(horizontal)** do elemento:

{{< figure src="/shared/captura-de-tela-2020-06-05-a-s-11.36.55.png" width="150">}}

{{< tabs id="T60" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle { 
                                position = EdgeValue(horizontal = UnitValue.real(50))
                      },
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              grow = 1.0
              flexDirection = FlexDirection.ROW
              justifyContent = JustifyContent.CENTER
              alignItems = AlignItems.CENTER
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
                        Flex()
                            .size(Size().width(50).height(50))
                            .position(EdgeValue().horizontal(150))),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3")
                    ],widgetProperties: WidgetProperties(
                          flex: Flex()
                        .grow(1)
                        .flexDirection(.row)
                        .justifyContent(.center)
                        .alignItems(.center)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

### **Vertical**

Adiciona um espaço aos lados **verticais(vertical)** do elemento:

{{< figure src="/shared/captura-de-tela-2020-06-05-a-s-11.39.22.png" width="150">}}

{{< tabs id="T61" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundText = "#142850", text = "1")
                      .setStyle { 
                                position = EdgeValue(vertical = UnitValue.real(50))
                      },
                  createText(backgroundText = "#dd7631", text = "2"),
                  createText(backgroundText = "#649d66", text = "3")
              )
          ).setFlex {
              grow = 1.0
              flexDirection = FlexDirection.ROW
              justifyContent = JustifyContent.CENTER
              alignItems = AlignItems.CENTER
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
                        Flex()
                            .size(Size().width(50).height(50))
                            .position(EdgeValue().vertical(150))),
                    createText(backgroundColor: "#dd7631",text: "2"),
                    createText(backgroundColor: "#649d66",text: "3")
                    ],widgetProperties: WidgetProperties(
                          flex: Flex()
                        .grow(1)
                        .flexDirection(.row)
                        .justifyContent(.center)
                        .alignItems(.center)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

{{% alert color="info" %}}
Para saber mais sobre Position, acesse a [**documentação do Yoga Layout**](https://yogalayout.com/pt/margins-paddings-borders).
{{% /alert %}}
