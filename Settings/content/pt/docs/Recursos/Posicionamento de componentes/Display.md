---
title: Display
weight: 84
description: >-
  Nesta seção, você encontra mais informações sobre a propriedade Display
  utilizada para posicionar elementos em tela.
---

---

## Display

Esta propriedade define o **tipo de exibição** deste componente, o que permite um container ser flexível ou bloqueado de acordo com o valor passado. 

O Display possibilita ainda um contexto flexível para todos os seus elementos filhos diretos. Nesta propriedade, temos dois atributos:

* Flex
* None

### **Flex**

Quando esse valor for definido permite que os elementos ficam flexível.

### **None**

Quando esse valor for definido permite que os elementos não sejam mostrado na tela, assim tendo sua altura e largura com valor 0.



![](https://lh6.googleusercontent.com/3cy2o8XKmTf0wequEI5ycerpdW48FvjiyXGvpfDtg3sOq3qz6ZJnKPQhVZ-9B0ed7GyUGGNQwfQbk1uEzDEADfmouCFPlrWWpjemG7yKHuhYkjvoY3zCe0nKVgYCqVWJA3VGS6_-)

### 

{{< tabs name="T69" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1"),
                createText(backgroundColor = "#dd7631", text = "2").applyFlex(
                    Flex(display = FlexDisplay.NONE)
                ),
                createText(backgroundColor = "#649d66", text = "3")
            )
        ).applyFlex(
            Flex(flexDirection = FlexDirection.ROW,
                alignItems = AlignItems.CENTER,
                justifyContent = JustifyContent.CENTER,
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
                    createText(backgroundColor: "#142850",text: "1"),
                    createText(backgroundColor: "#dd7631",text: "2").applyFlex(
                        Flex().display(.none)),
                    createText(backgroundColor: "#649d66",text: "3")
                    ],widgetProperties: WidgetProperties(
                        flex: Flex()
                            .grow(1)
                            .flexDirection(.row)
                            .justifyContent(.center)
                            .alignItems(.center)
                            .alignItems(.center)
                        )
                )
        )
    }
```
{{% /tab %}}
{{< /tabs >}}

**Para saber mais sobre Display, acesse a documentação do [**Yoga Layout**](https://yogalayout.com/docs/flex/).**