---
title: Position
weight: 74
description: "Nesta seção, você encontra mais informações sobre a propriedade Position."
---

---

## Position

Esta propriedade determina a posição de um assume em tela e os seus valores `top, right, bottom, left` se comportam de acordo com o [**Position Type**]({{< ref path="/resources/components-positioning/positiontype" lang="pt" >}}) deste elemento.

O elemento dentro do Position pode ter diferentes tipos de deslocamento se forem:

- **`Relative`:** os elementos se deslocam em uma direção específica.
- **`Absolute`:** os elementos se deslocam na mesma direção definida para o elemento pai.

## **Propriedades**

### **All**

É ele quem define o **mesmo valor para todas posições**. Exemplo:

![](/shared/captura-de-tela-2020-06-05-a-s-11.24.08.png)

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

É ele quem define um **espaçamento na parte inferior** do elemento. Exemplo:

![](/shared/captura-de-tela-2020-06-05-a-s-11.26.34.png)

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

É ele quem define um **espaçamento no lado esquerdo** do elemento. Exemplo:

![](/shared/captura-de-tela-2020-06-05-a-s-11.29.41.png)

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

É ele quem define um **espaçamento no lado direito** do elemento. Exemplo:

![](/shared/captura-de-tela-2020-06-05-a-s-11.33.00.png)

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

É ele quem define o **posicionamento do top**. Exemplo:

![](/shared/captura-de-tela-2020-06-05-a-s-11.34.21.png)

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

É ele quem define um **valor horizonta**l adicionando valor no left e right. Exemplo:

![](/shared/captura-de-tela-2020-06-05-a-s-11.36.55.png)

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

É ele quem define um **valor vertical** adicionando valor no top e bottom. Exemplo:

![](/shared/captura-de-tela-2020-06-05-a-s-11.39.22.png)

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
