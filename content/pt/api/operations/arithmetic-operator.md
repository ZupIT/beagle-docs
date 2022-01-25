---
title: Operadores aritméticos
weight: 363
description: "Nesta seção, você encontra descrição completa dos Operadores Numéricas."
---

---

## Quais são?

| Operadores | Exemplo              | Ação                                                           |
| :--------: | :------------------- | :------------------------------------------------------------- |
|    sum     | "@{sum\(3,3\)}"      | Operador de soma para elementos do tipo Int e Double.          |
|  subtract  | "@{subtract\(4,3\)}" | Operador de subtração para elementos do tipo Int e Double.     |
|  multiply  | "@{multiply\(3,3\)}" | Operador de multiplicação para elementos do tipo Int e Double. |
|   divide   | "@{divide\(3,3\)}"   | Operador de divisão para elementos do tipo Int e Double.       |

### Exemplo

Veja um exemplo abaixo de um simples contador, onde dois botões `increment` e `decrement`, ambos com ações de [**SetContext**]({{< ref path="/api/actions/setcontext" lang="pt" >}}) que modificam o valor do contexto que possui o id counter, alterando seu valor com operações de `soma` e de `subtração`, incrementando e diminuindo o valor de 1 ao valor do texto:

{{< tabs id="T159" >}}
{{% tab name="JSON" %}}

<!-- json-playground:arithmeticOperators.json
{
  "_beagleComponent_" : "beagle:screenComponent",
  "navigationBar" : {
    "title" : "Operations",
    "showBackButton" : true
  },
  "child" : {
    "_beagleComponent_" : "beagle:container",
    "children" : [ {
      "_beagleComponent_" : "beagle:text",
      "text" : "Sum of 2 + 1 = @{sum(2, 1)}"
    }, {
      "_beagleComponent_" : "beagle:text",
      "text" : "Counter: @{counter}"
    }, {
      "_beagleComponent_" : "beagle:button",
      "text" : "increment",
      "onPress" : [ {
        "_beagleAction_" : "beagle:setContext",
        "contextId" : "counter",
        "value" : "@{sum(counter, 1)}"
      } ]
    }, {
      "_beagleComponent_" : "beagle:button",
      "text" : "decrement",
      "onPress" : [ {
        "_beagleAction_" : "beagle:setContext",
        "contextId" : "counter",
        "value" : "@{subtract(counter, 1)}"
      } ]
    } ],
    "context" : {
      "id" : "counter",
      "value" : 2
    }
  }
}
-->

{{% playground file="arithmeticOperators.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin" %}}

```kotlin
fun screen() = Screen(
    navigationBar = NavigationBar(
        title = "Operations",
        showBackButton = true
    ),
    child = Container(
        context = ContextData("counter", 2),
        children = listOf(
            Text(expressionOf("Sum of 2 + 1 = @{sum(2, 1)}")),
            Text(expressionOf("Counter: @{counter}")),
            Button(
                text = "increment",
                onPress = listOf(
                    SetContext("counter", "@{sum(counter, 1)}"))
            ),
            Button(
                text = "decrement",
                onPress = listOf(
                    SetContext("counter", "@{subtract(counter, 1)}"))
            )
        )
    )
)
```

{{% /tab %}}
{{< /tabs >}}

![](/shared/operadoresaritmeticos%20%281%29.gif)
