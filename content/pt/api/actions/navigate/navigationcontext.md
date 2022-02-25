---
title: NavigationContext
weight: 15
description: Descrição da funcionalidade NavigationContext
---

---

## O que é?

É uma estrutura presente na maioria das ações de navegação. Ela define um contexto especial, chamado "navigationContext", que é criado na tela de destino.

Veja abaixo a estrutura:

| **Atributo** | **Tipo** | Obrigatório | **Definição**                 |
| :----------- | :------- | :---------: | :---------------------------- |
| value | Any | ✓ | Novo valor a ser aplicado no contexto |
| path | String |   | Caminho na extrutura do ``NavigationContext``|

{{% alert color="success" %}}
  O `NavigationContext` não está presente nas ações `openExternalUrl` e `openNativeRoute`
{{% /alert %}}

## Como usar?

O Navigation Context é utilizado quando se quer enviar informações de uma tela a outra. Abaixo, temos uma tela com um botão, que ao ser clicado, carrega uma nova ``view`` (que representa outra tela). A informação contida no atributo `value` do "navigationContext" será salva no escopo da nova tela. Essa informação poderá ser acessada atravez da expressão *"@{navigationContext.text}"* na nova tela somente.

Veja o exemplo abaixo:

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

```Kotlin
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

{{% alert color="success" %}}
  Aqui, perceba que a nova tela, carrega o valor da expressão `"@{navigationContext.text}"` como valor do componente ``Text``
{{% /alert %}}
