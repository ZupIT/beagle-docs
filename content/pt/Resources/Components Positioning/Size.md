---
title: Size
weight: 82
description: >-
  Nesta seção, você encontra mais informações sobre a propriedade Size utilizada
  para posicionar elementos em tela.
---

---

## Size

Esta propriedade manipula toda parte de tamanho do item em tela. O Size conta com os seguintes atributos:

**`width, heigth, maxWidth,maxHeight, minWidth, minHeigh, aspectRatio`**

![](https://lh3.googleusercontent.com/3aoRDnlMNqdnoYlmx60A--Y_Q6I3tGqCZt6CiQDJP53xu4TpwIL4skCdT_tjTTspNjuftf5ikAyKiLxlm4Tcll1kIQ_LhMd9y-PfBKcd69zgPp2MyMPJBHP5sUyQDXmPFTZcGqHM)

## **Atributos:**

### **Width**

Define o **tamanho da largura** do item

### **Height**

Define o **tamanho da altura** do item.

### **MaxWidth**

Define uma **largura máxima.**

### **MaxHeight**

Define uma **altura máxima.**

### **MinWidth**

Define uma **largura mínima.**

### **MinHeight**

Define uma **altura mínima.**

### **AspectRatio**

É uma propriedade criada pelo Yoga Layout que define a proporção de largura de acordo com altura do item, seguindo uma lógica de **valor double &gt; 0.**

Isso significa dizer que, por exemplo, se você aplicar uma altura de 100dp em um componente e o aspectRatio de 2, a largura será 2 vezes a altura onde terá o valor de 200dp.

{{< tabs id="T68" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1").applyFlex(
                    Flex(size = Size(width = 50.unitReal(),height = 50.unitReal()))
                ),
                createText(backgroundColor = "#dd7631", text = "2").applyFlex(
                    Flex(size = Size(maxWidth = 70.unitReal(),maxHeight = 70.unitReal(),
                    minWidth = 30.unitReal(),minHeight = 30.unitReal()))
                ),
                createText(backgroundColor = "#649d66", text = "3").applyFlex(
                    Flex(size = Size(width = 70.unitReal(),aspectRatio = 2.0))
                )
            )
        ).applyFlex(
            Flex(flexDirection = FlexDirection.ROW)
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
                        Flex().size(Size()
                            .width(50).height(50))),
                    createText(backgroundColor: "#dd7631",text: "2").applyFlex(
                        Flex().size(Size()
                            .maxWidth(70).maxHeight(70)
                            .minWidth(30).minHeight(30))),
                    createText(backgroundColor: "#649d66",text: "3").applyFlex(
                        Flex()
                            .size(Size().width(70).aspectRatio(2.0))
                    ),
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .grow(1)
                            .flexDirection(.row)
                            .justifyContent(.spaceEvenly)
                            .alignItems(.center)
                        )
                )
        )
    }
```

{{% /tab %}}
{{< /tabs >}}

{{% alert color="info" %}}
Para saber mais sobre Size, acesse a [**documentação do Yoga Layout**](https://yogalayout.com/pt/min-max).
{{% /alert %}}
