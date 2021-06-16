---
title: Basis
weight: 78
description: >-
  Nesta seção, você encontra mais informações sobre a propriedade Basis
  utilizada para posicionar elementos em tela.
---

---

## Basis

Esta propriedade define o **tamanho padrão de um item ao longo do eixo principal**. É possível que ele mude de acordo com o elemento, o que significa dizer que:

- Se o pai tiver o valor `flexDirection: row` o basis define o valor da largura \(width\);
- Se o pai tiver o contêiner `flexDirection: column`, basis define o valor da altura \(height\).

## Exemplos de uso

### FlexDirection: Row

Neste exemplo, você vê como a aplicação usando o **`flexDirection: row`** para manipular o **tamanho da largura** da tela.

{{< figure src="/shared/captura-de-tela-2020-06-04-a-s-15.48.12.png" width="150">}}

{{< tabs id="T64" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
	return Container(
		children = listOf(
			createText(backgroundText = "#142850", text = "1")
                      .setFlex {
                               basis = UnitValue.real(100)
                      },
                  createText(backgroundText = "#dd7631", text = "2")
                      .setFlex {
                          basis = UnitValue.real(100)
                      },
                  createText(backgroundText = "#649d66", text = "3")
                      .setFlex {
                          basis = UnitValue.real(100)
                      }
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
                    createText(backgroundColor: "#142850",text: "1")
                        .applyFlex(Flex().basis(100)),
                    createText(backgroundColor: "#dd7631",text: "2")
                        .applyFlex(Flex().basis(100)),
                    createText(backgroundColor: "#649d66",text: "3")
                        .applyFlex(Flex().basis(100)),
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

###

### FlexDirection Column

Já neste exemplo, você vê como fica a aplicação usando o **`flexDirection: column`** para manipular o **tamanho da altura da tela.**

{{< figure src="/shared/captura-de-tela-2020-06-04-a-s-16.01.56.png" width="150">}}

{{< tabs id="T65" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
               createText(backgroundText = "#142850", text = "1")
                      .setFlex {
                               basis = UnitValue.real(100)
                      },
                  createText(backgroundText = "#dd7631", text = "2")
                      .setFlex {
                          basis = UnitValue.real(100)
                      },
                  createText(backgroundText = "#649d66", text = "3")
                      .setFlex {
                          basis = UnitValue.real(100)
                      }
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
                    createText(backgroundColor: "#142850",text: "1")
                        .applyFlex(Flex().basis(100)),
                    createText(backgroundColor: "#dd7631",text: "2")
                        .applyFlex(Flex().basis(100)),
                    createText(backgroundColor: "#649d66",text: "3")
                        .applyFlex(Flex().basis(100)),
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

### Basis com UnitType.AUTO

É possível também passar `UnitValue(0.0, UnitType.AUTO)` quando utilizar `basis`. Neste caso o valor `0.0` não é relevante, pois usando `UnitType.AUTO` o eixo principal será ajustado de acordo com tamanho do conteúdo. Exceto se um valor de `size`fixo também for definido para o componente no mesmo sentido do eixo principal.

{{< tabs id="T66" >}}
{{% tab name="Kotlin" %}}

```kotlin
private fun screen() :Widget{
	return Container(
		children = listOf(
			createText(backgroundText = "#142850", text = "1")
                      .setFlex {
                               basis = UnitValue(0.0, UnitType.AUTO)
                      },
                  createText(backgroundText = "#dd7631", text = "2")
                      .setFlex {
                          basis = UnitValue(0.0, UnitType.AUTO)
                      },
                  createText(backgroundText = "#649d66", text = "3")
                      .setFlex {
                          basis = UnitValue(0.0, UnitType.AUTO)
                      }
              )
          ).setFlex {
              flexDirection = FlexDirection.ROW
          }
}
```

{{% /tab %}}
{{< /tabs >}}

{{% alert color="info" %}}
Para saber mais sobre Basis, acesse a [**documentação do Yoga Layout**](https://yogalayout.com/pt/flex).
{{% /alert %}}
