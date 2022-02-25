---
title: NavigationContext
weight: 15
description: Describes the NavigationContext strucuture
---

---

## What is it?

It is a structure present in navigation actions, except openExternalUrl and openNativeRoute, which defines a value to be saved in the "navigationContext" context of the target screen. The "navigationContext" is a special context where the scope is a single screen.

Its structure is represented as shown below:

| **Attribute** | **Type** | Required | **Definition** |
| :------------ | :------- | :---------: | :---------------------------- |
| value | Any | ✓ | Novo valor a ser aplicado no contexto |
| path | String |   | Ponto específico do contexto para ser alterado no caso de arrays e mapas &lt;chave, valor&gt;. |

## Como usar?

No exemplo abaixo, temos uma tela vinda do BFF com um botão, que ao ser clicado, navega para uma nova tela e salva no context "navigationContext" o valor informado no campo value. Essa próxima tela possui um texto com uma expressão que resolve para o contexto "navigationContext".

{{< tabs id="T178" >}}
{{% tab name="JSON" %}}

<!-- json-playground:navigationcontext.json
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

{{% playground file="navigationcontext.json" language="pt" %}}
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
