---
title: PushView
weight: 279
description: Descrição da ação PushView e seus atributos
---

---

## O que é? <a id="definicao"></a>

Abre uma nova tela na mesma pilha usando uma rota.

A sua estrutura é representada como mostrado abaixo:

| **Atributo** | **Tipo**                                       | Obrigatório | **Definição**      |
| :----------- | :--------------------------------------------- | :---------: | :----------------- |
| route        | ​[Route]({{< ref path="/api/actions/navigate/route" lang="pt" >}})​ |      ✓      | Rota de navegação. |

## Como usar?

No exemplo abaixo, temos uma tela vinda do BFF com um botão, que ao ser clicado, abre um novo fragment server-driven com a tela especificada pelo BFF.

Para testar, basta que um endpoint do seu BFF retorne a tela do código abaixo e chame esse endpoint no frontend. Você poderá passar tanto uma rota local \(que passará uma [**screen**]({{< ref path="/api/screen" lang="pt" >}}) na rota\), quanto remota \(que passará o endpoint da tela para a qual irá navegar\).

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

```
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
