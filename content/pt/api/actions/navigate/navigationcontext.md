---
title: NavigationContext
weight: 15
description: Descrição da estrutura NavigationContext
---

---

## O que é?

É uma estrutura presente nas ações de navegação, exceto openExternalUrl e openNativeRoute, que define um valor a ser salvo no contexto "navigationContext" da tela destino. O "navigationContext" é um contexto especial que fica salvo na view raiz de uma tela.

A sua estrutura é representada como mostrado abaixo:

| **Atributo** | **Tipo** | Obrigatório | **Definição**                 |
| :----------- | :------- | :---------: | :---------------------------- |
| value | Any | ✓ | Novo valor a ser aplicado no contexto |
| path | String |   | Ponto específico do contexto para ser alterado no caso de arrays e mapas &lt;chave, valor&gt;. |

## Como usar?

No exemplo abaixo, temos uma tela vinda do BFF com um botão, que ao ser clicado, navega para uma nova tela e salva no context "navigationContext" o valor informado no campo value. Essa próxima tela possui um texto com uma expressão que resolve para o contexto "navigationContext".

{{< tabs id="T113" >}}
{{% tab name="JSON" %}}

<!-- json-playground:pushView.json
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:button",
    "text" : "Click me!",
    "onPress" : [ {
      "_beagleAction_" : "beagle:pushView",
      "route" : {
        "screen" : {
          "_beagleComponent_" : "beagle:screenComponent",
          "child" : {
            "_beagleComponent_" : "beagle:text",
            "text" : "@{navigationContext.text}"
          }
        }
      },
      "navigationContext": {
        "path": "text",
        "value": "textFromNavigation"
      }
    } ]
  }
}
-->

{{% playground file="pushView.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```
Screen(
    child = Button(
        text = "Click me!",
        onPress = listOf(
            Navigate.PushView(
                route = Route.Local(
                    Screen(
                        child = Text(expressionOf("@{navigationContext.text}"))
                    )
                ),
                navigationContext = NavigationContext(
                    value = "textFromNavigation",
                    path = "text"
                )
            )
        )
    )
)
```

{{% /tab %}}
{{< /tabs >}}
