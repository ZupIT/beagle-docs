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

{% hint style="danger" %}
O tamanho do container pode interferir no comportamento dessa propriedade.  Isso significa que, quando os elementos são posicionados, podem ser dispostos em uma coluna em vez de uma linha, como no exemplo abaixo. 

Nesse momento, se o container não possuir uma altura suficiente para conter os elementos empilhados, essa propriedade não conseguirá mostrar os elementos em uma coluna. 
{% endhint %}

### **Flex Start \(padrão\)**

Os itens são alinhados a partir do início do eixo principal; alinhados em cima, no começo da tela:

![](https://lh3.googleusercontent.com/lGvBeuDomacFBb4pO3OiEr7tWCki__NCxe2h8kWgr1ZTALkoBLcFFmP6sj5ANH-GV7EYy4faNzldH1kKbk_kyvhdAlUfnWlcBylbeskfkBNojDDh96XM5HAkO09wi9VnelVp3yna)

{% tabs %}
{% tab title="Kotlin" %}
{% code title="Screen.kt" %}
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
                grow = 1.0,
                justifyContent = JustifyContent.FLEX_START
            )
        )

    }
```
{% endcode %}
{% endtab %}

{% tab title="Swift" %}
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
{% endtab %}
{% endtabs %}

### **Flex End** 

Os itens são alinhados a partir do fim do eixo principal; alinhados em baixo, no fim da tela:

![](https://lh5.googleusercontent.com/8rcnK5Gv4Xk84fyB3uF2RrVWqgsS0DZisVMlWHTxSJaWDW-8xM-PGwx4Mkhtkf8PTNgB5jvyVkk9dsE8xfU3EJMRbakkxIhfXrTBVZcDW7tyiZkhB-Dis5xTA_F2avLBdbb2M1Gw)

{% tabs %}
{% tab title="Kotlin" %}
{% code title="Screen.kt" %}
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
                grow = 1.0,
                justifyContent = JustifyContent.FLEX_END
            )
        )

    }
```
{% endcode %}
{% endtab %}

{% tab title="Swift" %}
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
{% endtab %}
{% endtabs %}

### **Center**

Os itens são alinhados ao centro do eixo principal; no centro da tela:

![](https://lh4.googleusercontent.com/FZLxyERCH2JFW7QkwlVvoidRuxI5Jif6R3cRNTFbwDarcd0H3ssyn1KvPeUZSHVQXLJSAZ8X-pWsbdWwvHd4dk7xhd4eO0_cDFWvxexBrjFejBYr1CChp4ltqF6JmkzD3AcQ9h12)

{% tabs %}
{% tab title="Kotlin" %}
{% code title="" %}
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
                grow = 1.0,
                justifyContent = JustifyContent.CENTER
            )
        )

    }
```
{% endcode %}
{% endtab %}

{% tab title="Swift" %}
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
{% endtab %}
{% endtabs %}

### **Space Between**

O primeiro item é deslocado para o início do eixo principal, o último é deslocado para o fim do eixo principal e os demais são distribuídos uniformemente; o espaço entre eles é igual: 

![](https://lh3.googleusercontent.com/th-V4Vn6jKMakkKPZiJzgCZ_9L8yu6h3M3PnhhKjDzvj7wvuruxJLY-F7eEnRwB-48kb1mRoUQRc19ZeDTWzFS_LwoiDHaZ-I8qguUG2rrSzl3nNErTsLKD6Ve9BP1Zmq_j7aDBy)

{% tabs %}
{% tab title="Kotlin" %}
{% code title="Screen.kt" %}
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
                grow = 1.0,
                justifyContent = JustifyContent.SPACE_BETWEEN
            )
        )

    }
```
{% endcode %}
{% endtab %}

{% tab title="Swift" %}
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
{% endtab %}
{% endtabs %}

### **Space Around** 

Os itens são uniformemente distribuídos ao longo do eixo principal. Aqui, são atribuídas margens iguais acima e abaixo \(ou à esquerda e à direita, dependendo da direção do eixo principal\). Por isso o primeiro e o último item não ficam “colados” nas bordas do container:

![](https://lh4.googleusercontent.com/Wpb3hkbMbZPfZwhOfAQOZl35GTU-vOyMmIuRAm6FT4jhNOVNgR4O6XwKTpmlJFD9t6pwz_fteRjiUkfDvn5plqzTtIdwAWB9a8sjcPD0r2PUp-MX72-e0-PEfA1LuZKNpfA6zA8Q)

{% tabs %}
{% tab title="Kotlin" %}
{% code title="Screen.kt" %}
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
                grow = 1.0,
                justifyContent = JustifyContent.SPACE_AROUND
            )
        )

    }
```
{% endcode %}
{% endtab %}

{% tab title="Swift" %}
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
{% endtab %}
{% endtabs %}

### **Space Evenly** 

Os itens são uniformemente distribuídos ao longo do eixo principal:

![](https://lh6.googleusercontent.com/cri4jTsOK470v0QCI71blFki0sxwQB1xC8ZGSqxuZa7UYbuxjrnVM3dWDM8dLRyUO4XiMNgl2oXF55Fy43rfQjH9uw_mQ0QAK3D_YDWPwuksUMjxDdHx11q-9n0tbL3PLhx3TgXb)

{% tabs %}
{% tab title="Kotlin" %}
{% code title="Screen.kt" %}
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
                grow = 1.0,
                justifyContent = JustifyContent.SPACE_EVENLY
            )
        )

    }
```
{% endcode %}
{% endtab %}

{% tab title="Swift" %}
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
{% endtab %}
{% endtabs %}

{% hint style="info" %}
Para saber o Justify Content, acesse [**a documentação no Yoga Layout**](https://yogalayout.com/docs/flex-direction/)**.**
{% endhint %}
