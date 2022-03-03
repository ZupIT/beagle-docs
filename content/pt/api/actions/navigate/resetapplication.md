---
title: ResetApplication
weight: 100
description: Descrição da ação ResetApplication e seus atributos
---

---

## O que é? <a id="definicao"></a>

Esta ação cria uma nova tela em uma nova pilha e destrói todas as pilhas de navegação anteriores.

A estrutura da ``ResetApplication`` é:

| **Atributo** | **Tipo**                                        | Obrigatório | **Definição**      |
| :----------- | :---------------------------------------------- | :---------: | :----------------- |
| route        | ​[Route]({{< ref path="/api/actions/navigate/route/" lang="pt" >}})​ |      ✓      | Rota de navegação. |
| controllerId | String |     | O id do controlador de navegação a ser usado durante a ação de navegação. Se ausente, o controlador de navegação padrão será usado. |
| navigationContext | ​[NavigationContext]({{< ref path="/api/actions/navigate/navigationcontext" lang="pt" >}})​ | | Contexto a ser salvo na tela destino. |

## Como usar?

Abaixo temos um exemplo de uma tela simples com um botão que executa a ação ResetApplication ao ser clicado. Para testá-la, basta listar a URL da tela que quer criar e clicar no botão. A tela será criada em uma nova pilha.

{{< tabs id="T112" >}}
{{% tab name="JSON" %}}

<!-- json-playground:resetApplication.json
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:button",
    "text" : "Click me!",
    "onPress" : [ {
      "_beagleAction_" : "beagle:resetApplication",
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
            Navigate.ResetApplication(
                Route.Remote(NEW_SCREEN_ENDPOINT)
            )
        )
    )
)
```

{{% /tab %}}
{{< /tabs >}}
