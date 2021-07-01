---
title: Condition
weight: 80
description: >-
  Nesta seção, você encontra a definição do Condition e detalhes de seus
  atributos
---

---

## O que é?

É uma ação que tem um parâmetro do tipo Boolean e de acordo com esse valor é executado a ação onTrue ou onFalse.

| Atributo  | Tipo                                                   | Obrigatório | Definição                                                           |
| :-------- | :----------------------------------------------------- | :---------: | :------------------------------------------------------------------ |
| condition | Boolean ou [**Binding**]({{< ref path="/api/context#binding" lang="pt" >}}) |      ✓      | Condição para definir qual ação será executada.                     |
| onTrue    | List&lt;Action&gt;                                     |             | Lista de ações que será executada quando a condição for verdadeira. |
| onFalse   | List&lt;Action&gt;                                     |             | Lista de ações que será executada quando a condição for falsa.      |

## Como usar?

O exemplo abaixo é um `Container` com um contexto que possui o valor 18 e no evento `onPress` do botão foi definido uma ação do tipo `Condition` que verifica se o valor é igual a 21 e mostra um `Alert` dependendo do valor do contexto.

{{< tabs id="T108" >}}
{{% tab name="JSON" %}}

<!-- json-playground:condition.json
{
   "_beagleComponent_":"beagle:container",
   "children":[
      {
         "_beagleComponent_":"beagle:button",
         "text":"Is equal to 21?",
         "onPress":[
            {
               "_beagleAction_":"beagle:condition",
               "condition":"@{eq(age, 21)}",
               "onTrue":[
                  {
                     "_beagleAction_":"beagle:alert",
                     "title":"onTrue",
                     "message":"Condition is true"
                  }
               ],
               "onFalse":[
                  {
                     "_beagleAction_":"beagle:alert",
                     "title":"onFalse",
                     "message":"Condition is false"
                  }
               ]
            }
         ]
      }
   ],
   "context":{
      "id":"age",
      "value":18
   }
}
-->

{{% playground file="condition.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```text
Container(
    context = ContextData(
        id = "age",
        value = 18
    ),
    children = listOf(
        Button(
            text = "Is equal to 21?",
            onPress = listOf(
                Condition(
                     condition = "@{eq(age, 21)}",
                     onTrue = listOf(
                         Alert(message = "The condition is true")
                     ),
                     onFalse = listOf(
                         Alert(message = "The condition is false")
                     )

                )
            )
        )
    )
)

```

{{% /tab %}}
{{< /tabs >}}
