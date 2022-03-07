---
title: PushView
weight: 20
description: Descrição da ação PushView e seus atributos
---

---

## O que é? <a id="definicao"></a>

A ação ``PushView`` abre uma nova tela na mesma pilha da tela atual.

A estrutura do ``PushView`` é:

| **Atributo** | **Tipo**                                       | Obrigatório | **Definição**      |
| :----------- | :--------------------------------------------- | :---------: | :----------------- |
| route        | ​[Route]({{< ref path="/api/actions/navigate/route" lang="pt" >}})​ |      ✓      | Rota de navegação (endpoint ou componente que retorna a nova tela). |
| navigationContext | ​[NavigationContext]({{< ref path="/api/actions/navigate/navigationcontext" lang="pt" >}})​ | | Contexto a ser salvo na tela destino. |

## Como usar?

No exemplo abaixo, temos uma tela com um botão, que ao ser clicado, abre uma nova tela carregada a partir do endpoint especificado na ação `PushView`.

{{% alert color="success" %}}
  Aqui é importante especificar como a propriedade Route funciona. Nela podemos listar o endpoint de uma nova tela ou componente server driven. Quando isso é feito, um JSON com a tela ou componente é obtido como resposta. Essa informação é manuseada pelo atributo route. Sendo assim, também é possivel listar um componente diretamente na rota (o que foi feito no exemplo abaixo), então, ao invés de buscar as informações da tela (ou componente) no endpoint, ele as obtem diretamente do código implementado na rota.
{{% /alert %}}

Para testar, basta carregar a tela do código abaixo no frontend.

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
            "text" : "Hello second Screen"
          }
        }
      }
    } ]
  }
}
-->

{{% playground file="pushView.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Screen(
    child = Button(
        text = "Click me!",
        onPress = listOf(
            Navigate.PushView(
                Route.Local(
                    Screen(
                        child = Text("Hello second Screen")
                    )
                )
            )
        )
    )
)
```

{{% /tab %}}
{{< /tabs >}}
