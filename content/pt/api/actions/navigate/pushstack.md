---
title: PushStack
weight: 30
description: Descrição da ação PushStack e seus atributos
---

---

## O que é?

Essa ação cria uma nova tela em uma nova pilha.

A estrutura da ``PushStack`` é:

| **Atributo** | **Tipo**                                      | Obrigatório | **Definição**      |
| :----------- | :-------------------------------------------- | :---------: | :----------------- |
| route        | [Route]({{< ref path="/api/actions/navigate/route/" lang="pt" >}}) |      ✓      | Rota de navegação. |
| controllerId | String |     | O id do controlador de navegação a ser usado durante a ação de navegação. Se ausente, o controlador de navegação padrão será usado. |
| navigationContext | ​[NavigationContext]({{< ref path="/api/actions/navigate/navigationcontext" lang="pt" >}})​ | | Contexto salvo na tela de destino. |

## Como usar?

Abaixo temos um exemplo de uma tela simples com um botão que executa a ação PushStack ao ser clicado. Para testá-la, basta listar a URL da tela que quer criar e clicar no botão. A tela será criada em uma nova pilha.

{{< tabs id="T112" >}}
{{% tab name="JSON" %}}

<!-- json-playground:pushStack.json
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:button",
    "text" : "Click me!",
    "onPress" : [ {
      "_beagleAction_" : "beagle:pushStack",
        route: {
          url: NEW_SCREEN_ENDPOINT
        }
    } ]
  }
}
-->

{{% playground file="pushStack.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Screen(
    child = Button(
        text = "Click me!",
        onPress = listOf(
            Navigate.PushStack(
                Route.Remote(NEW_SCREEN_ENDPOINT)
            )
        )
    )
)
```

{{% /tab %}}
{{< /tabs >}}
