---
title: How to register a new operation
weight: 375
description: "In this section, you will find the information about Custom Operations."
---

---

On Beagle, you are able to perform [**Operations**]({{< ref path="/resources/dsl-operations" lang="en" >}}) it can be sum, subtraction, etc, using the context and the DSL, but you can also can customize your operation.

To register your custom operation, it is necessary to use the **createOperation** method that receives as a parameter:
- A `String` with the operation's name;
- An`Array<out Any?>`, containing the necessary parameters according to the custom operation.  

## Example

The example below shows a `isValidCpf` operation where the `Text` component text vary according to the verification result, check out: 

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

In the example, the custom operation created validates a CPF (Brazil's  security number) and it returns if the result was valid or not. 
For that, make a validation is necessary because it returned the **createOperation** method with the operation name and the expected parameter. The result was: 

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
