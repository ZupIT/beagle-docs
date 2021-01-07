---
title: Setcontext
weight: 301
description: >-
  Nesta seção, você encontra a definição do SetContext e detalhes de seus
  atributos
---

---

## O que é?

A ação `SetContext` é responsável por alterar o valor de um contexto.

A estrutura do SetContext é:

| **Atributo** | **Tipo** | Obrigatório | **Definição** |
| :--- | :--- | :---: | :--- |
| contextId | String  | ✓ | Id do contexto |
| value | Any | ✓ | Novo valor a ser aplicado no contexto |
| path | String |   | Ponto específico do contexto para ser alterado no caso de arrays e mapas &lt;chave, valor&gt;. |

{{% alert color="info" %}}
Conheça mais sobre o [**contexto no Beagle**](/pt/api/contexto/).
{{% /alert %}}

## Como usar?

Abaixo temos um exemplo de um texto que é preenchido por contexto e possui um valor inicial "Set Context Example" e no evento de clique do botão o valor do contexto é alterado para "Context has changed".

{{< tabs id="T128" >}}
{{% tab name="JSON" %}}
<!-- json-playground:setcontext.json
{
  "_beagleComponent_": "beagle:container",
  "context":{
    "id": "myContext",
    "value":"Set Context Example"
  },
  "children": [
    {
      "_beagleComponent_": "beagle:text",
      "text":"@{myContext}"
    },
    {
      "_beagleComponent_": "beagle:button",
      "text": "Change context",
      "onPress": [
        {
          "_beagleAction_": "beagle:setContext",
          "contextId": "myContext",
          "value": "Context has changed"
        }
      ]
    }
  ]
}
-->
{{% playground file="setcontext.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Container(
    children = listOf(
        Text(text = "@{myContext}"),
        Button(
             text = "Change context",
             onPress = listOf(
                  SetContext(
                       contextId = "myContext",
                       value = "Context has changed"
                  )
             )
        )
     ),
     context = ContextData(
          id = "myContext",
          value = "Set Context Example"
     )
)
```
{{% /tab %}}
{{< /tabs >}}
