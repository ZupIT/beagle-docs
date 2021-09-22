---
title: Como registrar uma nova operação
weight: 375
description: "Nesta seção, você encontra como registrar uma nova operação."
---

---

No Beagle é possível realizar [ **Operações**]({{< ref path="/resources/dsl-operations" lang="pt" >}}) do tipo soma, subtração, etc, utilizando o contexto e a DSL, mas você também pode criar a sua própria operação ou 'Custom Operation'.

Para registrar sua operação customizada, é necessário usar o método **createOperation** que recebe como parâmetros:
- Uma `String` com o nome da operação;
- Um `Array<out Any?>`, contendo os parâmetros necessários de acordo com a operação customizada.

## Exemplo

O exemplo abaixo mostra a operação `isValidCpf` e o texto do componente `Text` varia de acordo com o resultado da verificação, veja como:


```
fun isValidCpf(param: Array<out String?>) : Bind.Expression<Boolean> {
    param.filterNotNull().map { value ->
        if (value.isEmpty()) return expressionOf("@{${false}}")
        val numbers = arrayListOf<Int>()
        value.filter { it.isDigit() }.forEach {
            numbers.add(it.toString().toInt())
        }
        if (numbers.size != 11) return expressionOf("@{${false}}")
        for (n in 0..9) {
            val digits = arrayListOf<Int>()
            repeat((0..10).count()) { digits.add(n) }
            if (numbers == digits) return expressionOf("@{${false}}")
        }
        val dv1 = ((0..8).sumOf { (it + 1) * numbers[it] }).rem(11).let {
            if (it >= 10) 0 else it
        }

        val dv2 = ((0..8).sumOf { it * numbers[it] }.let { (it + (dv1 * 9)).rem(11) }).let {
            if (it >= 10) 0 else it
        }

        return expressionOf("@{${numbers[9] == dv1 && numbers[10] == dv2}}")
    }
    return createOperation("isValidCpf", arrayOf(param))
}
```

No exemplo acima a operação customizada criada valida um CPF e retorna se o resultado foi válido ou não.
Para isso, as validações necessárias foram feitas e depois o método **createOperation** retornou com o nome da operação e o parâmetro esperado. O resultado foi:

{{< tabs id="T166" >}}
{{% tab name="JSON" %}}

<!-- json-playground:customOperation.json
{
  "_beagleComponent_" : "beagle:screenComponent",
  "navigationBar" : {
    "title" : "Custom operation",
    "showBackButton" : true
  },
  "child" : {
    "_beagleComponent_" : "beagle:container",
    "children" : [ {
      "_beagleComponent_" : "beagle:button",
      "text" : "CPF atual: @{cpf}",
      "onPress" : [ {
        "_beagleAction_" : "beagle:setContext",
        "contextId" : "cpf",
        "value" : "42249625000"
      } ]
    }, {
      "_beagleComponent_" : "beagle:text",
      "text" : "@{condition(isValidCpf(cpf), 'cpf is valid', 'cpf is not valid')}"
    } ],
    "context" : {
      "id" : "cpf",
      "value" : "00000000000"
    }
  }
}
-->

{{% playground file="customOperation.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
fun screen() =  Screen(
            navigationBar = NavigationBar(title = "Custom operation", showBackButton = true),
            child = Container(
                context = ContextData("cpf", "00000000000"),
                children = listOf(
                    Button(
                        text = "CPF atual: @{cpf}",
                        onPress = listOf(
                            SetContext(contextId = "cpf", value = "42249625000")
                        )
                    ),
                    Text(
                        condition(
                            isValidCpf(arrayOf("@{cpf}")),
                            constant("cpf is valid"), constant("cpf is not valid")
                        )
                    )
                )
            )
        )
```

{{% /tab %}}
{{< /tabs >}}

{{< figure src="/shared/customoperation.gif" width="250">}}
