---
title: Operadores aritméticos
weight: 363
description: "Nesta seção, você encontra a descrição completa dos Operadores Numéricos."
---

---

## Quais são?

| Operadores | Exemplo              | Ação                                                           |
| :--------: | :------------------- | :------------------------------------------------------------- |
|    sum     | sum(constant(1), constant(2))      | Operador de soma para elementos do tipo Int e Double.          |
|  subtract  | subtract(constant(2), constant(1)) | Operador de subtração para elementos do tipo Int e Double.     |
|  multiply  | multiply(constant(2), constant(2)) | Operador de multiplicação para elementos do tipo Int e Double. |
|   divide   | divide(constant(10.0), constant(2.0))   | Operador de divisão para elementos do tipo Int e Double.       |

### Exemplo

O exemplo abaixo é um contador, onde:
- Os botões `increment` e `decrement` possuem ações de [**SetContext**]({{< ref path="/api/actions/setcontext" lang="pt" >}}).
- O valor do contexto que possui o id counter é modificado com as operações de `soma` e de `subtração`, incrementando e diminuindo o valor de 1 ao valor do texto, veja abaixo:

{{< tabs id="T159" >}}
{{% tab name="JSON" %}}

<!-- json-playground:arithmeticOperators.json
{
  "_beagleComponent_": "beagle:screenComponent",
  "navigationBar": {
    "title": "Operations",
    "showBackButton": true
  },
  "child": {
    "_beagleComponent_": "beagle:container",
    "children": [
      {
        "_beagleComponent_": "beagle:text",
        "text": "Sum of 2 + 1 = @{sum(2, 1)}"
      },
      {
        "_beagleComponent_": "beagle:text",
        "text": "Counter: @{counter}"
      },
      {
        "_beagleComponent_": "beagle:button",
        "text": "increment",
        "onPress": [
          {
            "_beagleAction_": "beagle:setContext",
            "contextId": "counter",
            "value": "@{sum(counter, 1)}"
          }
        ]
      },
      {
        "_beagleComponent_": "beagle:button",
        "text": "decrement",
        "onPress": [
          {
            "_beagleAction_": "beagle:setContext",
            "contextId": "counter",
            "value": "@{subtract(counter, 1)}"
          }
        ]
      }
    ],
    "context": {
      "id": "counter",
      "value": 2
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
            Text(constant("Sum of 2 + 1 = ").plus(sum(constant(2), constant(1)).toBindString())),
            Text(expressionOf("Counter: @{counter}")),
                Container(
                    children = listOf(
                        Button(
                            text = "increment",
                            onPress = listOf(
                                SetContext("counter", "@{sum(counter, 1)}")
                            )
                        ),
                        Button(
                            text = "decrement",
                            onPress = listOf(
                                SetContext("counter", "@{subtract(counter, 1)}")
                            )
                        )
                    )
                )
            )
        )
    )
}
```

{{% /tab %}}
{{< /tabs >}}

{{< figure src="/shared/operadoresaritmeticos%20%281%29.gif" width="250">}}
