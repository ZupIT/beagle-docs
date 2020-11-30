---
title: "Basis"
description: >
  Nesta seção, você encontra mais informações sobre a propriedade Basis
  utilizada para posicionar elementos em tela.
---

---

## Basis

Esta propriedade define o **tamanho padrão de um item ao longo do eixo principal**. É possível que ele mude de acordo com o elemento, o que significa dizer que: 

* Se o pai tiver o valor `flexDirection: row` o basis define o valor da largura \(width\);
* Se o pai tiver o contêiner `flexDirection: column`, basis define o valor da altura \(height\).

## Exemplos de uso 

### FlexDirection: Row

Neste exemplo, você vê como a aplicação usando o **`flexDirection: row`** para manipular o **tamanho da largura** da tela.

![](../../.gitbook/assets/captura-de-tela-2020-06-04-a-s-15.48.12.png)

{% tabs %}
{% tab title="Kotlin" %}
{% code title="Screen.kt" %}
```kotlin
private fun screen() :Widget{
	return Container(
		children = listOf(
			Text(backgroundColor = "#142850", text = "1").applyFlex(
				Flex(
					basis = UnitValue(100.0, UnitType.REAL)
				)
			),
			Text(backgroundColor = "#dd7631", text = "2").applyFlex(
				Flex(
					basis = UnitValue(100.0, UnitType.REAL)
				)
			),
			Text(backgroundColor = "#649d66", text = "3").applyFlex(
				Flex(
					basis = UnitValue(100.0, UnitType.REAL)
				)
			)
		)
	).applyFlex(
		Flex(
			flexDirection = FlexDirection.ROW
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
{% endtab %}
{% endtabs %}

### 

### FlexDirection Column

Já neste exemplo, você vê como fica a aplicação usando o **`flexDirection: column`** para manipular o **tamanho da altura da tela.**

![](../../.gitbook/assets/captura-de-tela-2020-06-04-a-s-16.01.56.png)

{% tabs %}
{% tab title="Kotlin" %}
{% code title="Screen.kt" %}
```kotlin
private fun screen() :Widget{
        return Container(
            children = listOf(
                createText(backgroundColor = "#142850", text = "1").applyFlex(
                    Flex(
                        basis = 100.unitReal()
                    )
                ),
                createText(backgroundColor = "#dd7631", text = "2").applyFlex(
                    Flex(
                        basis = 100.unitReal()
                    )
                ),
                createText(backgroundColor = "#649d66", text = "3").applyFlex(
                    Flex(
                        basis = 100.unitReal()
                    )
                )
            )
        ).applyFlex(
            Flex(
                flexDirection = FlexDirection.COLUMN
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
{% endtab %}
{% endtabs %}

### Basis com UnitType.AUTO

É possível também passar `UnitValue(0.0, UnitType.AUTO)` quando utilizar `basis`. Neste caso o valor  `0.0`  não é relevante, pois  usando `UnitType.AUTO`  o eixo principal será ajustado  de acordo com tamanho do conteúdo. Exceto se um valor de `size`fixo também for definido para o componente no mesmo sentido do eixo principal.

{% tabs %}
{% tab title="Kotlin" %}
{% code title="Screen.kt" %}
```kotlin
private fun screen() :Widget{
	return Container(
		children = listOf(
			Text(backgroundColor = "#142850", text = "1").applyFlex(
				Flex(
					basis = UnitValue(0.0, UnitType.AUTO)
				)
			),
			Text(backgroundColor = "#dd7631", text = "2").applyFlex(
				Flex(
					basis = UnitValue(0.0, UnitType.AUTO)
				)
			),
			Text(backgroundColor = "#649d66", text = "3").applyFlex(
				Flex(
					basis = UnitValue(0.0, UnitType.AUTO)
				)
			)
		)
	).applyFlex(
		Flex(
			flexDirection = FlexDirection.ROW
		)
	)
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

![Basis com UnitType.AUTO e FlexDirection.ROW ](../../.gitbook/assets/captura-de-tela-2020-06-04-a-s-15.48.12%20%281%29.png)

{% hint style="info" %}
Para saber mais sobre Basis, acesse a [**documentação do Yoga Layout**](https://yogalayout.com/docs/flex).
{% endhint %}
