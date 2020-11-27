---
title: Componente Composto
weight: 93
description: >-
  Nesta seção, você encontra a descrição do ComposedComponent e mais detalhes de
  como ele funciona.
---

---

O `ComposedComponent` facilita a organização, manutenção e reaproveitamento de código. Ele não tem funcionalidade própria e é exclusivo do backend.

```kotlin
class MyScreenComponent : ComposeComponent {

    override fun build(): ServerDrivenComponent {
        //todo
    }
}
```

## Caso de uso

Se você tem, por exemplo, uma estrutura de componentes que se repete constantemente, como na imagem abaixo:

![](../../.gitbook/assets/captura-de-tela-2020-07-30-a-s-18.09.49-1-.png)

Neste caso, se você construir este layout utilizando o DSL, o código ficaria da seguinte forma:

```kotlin
val style = Style(
    size = Size(
        width = UnitValue(
            33.0, type = UnitType.PERCENT
        )
    )
)

Screen(
    navigationBar = NavigationBar(
        title = "Title",
        showBackButton = true
    ),
    child = Container(
        children = listOf(
            // 1
            Text("Nome:").applyStyle(style = style),
            Text("Maria").applyStyle(style = style),
            Text("Atualizado").applyStyle(style = style),
            // 2
            Text("Idade:").applyStyle(style = style),
            Text("10").applyStyle(style = style),
            Text("Atualizado").applyStyle(style = style),
            // 3
            Text("Cidade").applyStyle(style = style),
            Text("Uberlândia").applyStyle(style = style),
            Text("Atualizado").applyStyle(style = style),
            // 4
            Text("País:").applyStyle(style = style),
            Text("Brasil").applyStyle(style = style),
            Text("Desatualizado").applyStyle(style = style)
        )
    ).applyFlex(
        Flex(
            flexDirection = FlexDirection.ROW,
            flexWrap = FlexWrap.WRAP
        )
    )
)
```

Existe muita repetição de código, o que dificulta sua manutenção. Para resolver este problema, você pode utilizar o `ComposedComponent`. 

Veja abaixo como isso é possível:

1. Encapsule este código em um componente único como abaixo:

```kotlin
class MyComposeComponent(
    private val field: String,
    private val value: String,
    private val status: String
): ComposeComponent {

    private val style = Style(
        size = Size(
            width = UnitValue(
                33.0, type = UnitType.PERCENT
            )
        )
    )

    override fun build() = Container(
        children = listOf(
            createText(field),
            createText(value),
            createText(status)
        )
    )

    private fun createText(text: String) 
        = Text(text).applyStyle(style = style)

}
```

       2. Agora você pode usá-lo assim:

```kotlin
Screen(
navigationBar = NavigationBar(
    title = "Title",
    showBackButton = true
),
child = Container(
    children = listOf(
        MyComposeComponent(
            field = "Nome:",
            value = "Maria",
            status = "Atualizado"
        ),
        MyComposeComponent(
            field = "Idade:",
            value = "10",
            status = "Atualizado"
        ),
        MyComposeComponent(
            field = "Cidade:",
            value = "Uberlândia",
            status = "Atualizado"
        ),
        MyComposeComponent(
            field = "País:",
            value = "Brasil",
            status = "Desatualizado"
        )
    )
).applyFlex(Flex(flexDirection = FlexDirection.ROW, flexWrap = FlexWrap.WRAP))
```

O código fica bem mais claro e facilita a manutenção!

Para a construção deste componente, não foi necessário a criação de nenhum outro novo ou comportamento no frontend.
