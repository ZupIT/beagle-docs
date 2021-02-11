---
title: Composed component
weight: 91
description: Composed Component description and use
---

---

#### Availability: Beagle1.0+

`ComposedComponent` helps with organization,  maintenance and code reuse. It doesn't have its own functionality, it is a backend exclusive.

```kotlin
class MyScreenComponent : ComposeComponent {

    override fun build(): ServerDrivenComponent {
        //todo
    }
}
```

{{% alert color="info" %}}
ComposedComponent doesn't have a functionality, it is a backend exclusive resource. 
{{% /alert %}}

## Use case 

If you have, for example, a component structure that repeats constantly , just like the image below: 

![](/shared/captura-de-tela-2020-07-30-a-s-18.09.49-1-.png)

In this case, if you build a layout using DSL, the code would be like this: 

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

As you can see, there is code repetition, to solve this problem you can use `ComposedComponent`.  See below how it's possible: 

1. Encapsulate this code in this single component like this: 

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

2. Now you can use it this way: 

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

The code is clearer and it makes the maintenance easier.

To build this component, it is not necessary to create a new one or a behaviour in the frontend.
