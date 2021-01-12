---
title: Local
weight: 295
description: Descrição da classe Local e seus atributos
---

---

## O que é? <a id="definicao"></a>

Rota de navegação para conteúdo local.

A sua estrutura é representada como mostrado abaixo:

| **Atributo** | **Tipo**                       | Obrigatório | **Definição**        |
| :----------- | :----------------------------- | :---------: | :------------------- |
| screen       | [Screen](/pt/home/api/screen/) |      ✓      | Tela a ser carregada |

## Como usar?

{{< tabs id="T126" >}}
{{% tab name="JSON" %}}

<!-- json-playground:local.json
{
  "_beagleComponent_": "beagle:button",
  "text": "Click me!",
  "onPress": [
    {
      "_beagleAction_": "beagle:pushView",
      "route": {
        "screen": {
          "_beagleComponent_": "beagle:screenComponent",
          "child": {
            "_beagleComponent_": "beagle:text",
            "text": "Hello Screen from Navigate"
          }
        }
      }
    }
  ]
}
-->

{{% playground file="local.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```
Button(
    onPress = listOf(
         Navigate.PushView(
            Route.Local(
                Screen(
                    child = Text("Hello Screen from Navigate")
                )
            )
     )),
    text = "Click me!"
)
```

{{% /tab %}}
{{< /tabs >}}
