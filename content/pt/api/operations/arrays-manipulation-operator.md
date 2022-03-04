---
title: Operadores para manipulação de arrays
weight: 371
description: >-
  Descrição dos Operadores para Manipulação de Arrays.
---

---

## Quais são?

| Operadores | Exemplo | Ação |
| :---: | :---: | :--- |
| insert | "@{insert\(array, 5\)}" | Insere um elemento ao array. Esse operador recebe dois parametros, o primeiro é um **array** e o segundo é o **elemento** que se deseja **inserir** nesse array. |
| remove | "@{remove\(array, 1\)}" | Remove um elemento de um array. Esse operador recebe dois parametros, o primeiro é um **array** e o segundo é o **elemento** que se deseja **remover** desse array. |
| removeIndex | "@{removeIndex\(array, 2\)}" | Remove um elemento de um array de acordo com a posição do elemento. Esse operador recebe dois parametros, o primeiro é um **array** e o segundo é o **index** do elemento que se deseja **remover** desse array. |
| contains | "@{contains\(array, 3\)}" | Verifica se o array contém um elemento. Esse operador recebe dois parametros, o primeiro é um **array** e o segundo é o **elemento** que deseja verificar se **contém** no array. |

### Exemplo

O exemplo abaixo modifica um array que foi definido no Contexto com id `numbersArray` e valor **\[0, 1, 2, 3, 4\]** .

{{< tabs id="T163" >}}
{{% tab name="JSON" %}}
<!-- json-playground:arrayHandling.json
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:container",
    "children" : [ {
      "_beagleComponent_" : "beagle:text",
      "text" : "Array was [0, 1, 2, 3, 4] and after removing index 2 now is: "
    }, {
      "_beagleComponent_" : "beagle:text",
      "text" : "@{removeIndex(numbersArray, 2)}",
      "style" : {
        "backgroundColor" : "#00FF00"
      }
    } ],
    "context" : {
      "id" : "numbersArray",
      "value" : [ 0, 1, 2, 3, 4 ]
    }
  }
}
-->
{{% playground file="arrayHandling.json" language="pt" %}}
{{% /tab %}}
{{% tab name="Kotlin" %}}

```kotlin
fun screen() = Screen(child = 
    Container(
        context = ContextData(id = "numbersArray", value = arrayOf(0,1,2,3,4)),
        children = listOf(
            Text(text = "Array was [0, 1, 2, 3, 4] and after removing index 2 now is: "),
            Text(
                expressionOf("@{removeIndex(numbersArray, 2)}")
            ).setStyle{ backgroundColor = constant("#00FF00") }
        )
    )
)
```

{{% /tab %}}
{{< /tabs >}}
