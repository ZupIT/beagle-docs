---
title: Operadores para manipulação de arrays
weight: 371
description: >-
  Nesta seção, você encontra descrição completa dos Operadores para Manipulação
  de Arrays.
---

---

## Quais são? 

| Operadores | Exemplo | Ação |
| :---: | :---: | :--- |
| insert | insert(expressionOf("@{array}), constant(5)) | Operador que recebe duas entradas onde o primeiro parâmetro é um **array** e o segundo é o **elemento** que deseja **inserir** nesse array. |
| remove | remove(expressionOf("@{array}), constant(1)) | Operador que recebe duas entradas onde o primeiro parâmetro é um **array** e o segundo é o **elemento** que deseja **remover** desse array. |
| removeIndex | removeIndex`<Int>`(expressionOf("@{array}"), constant(2)) | Operador que recebe duas entradas onde o primeiro parâmetro é um **array** e o segundo é o **index** do elemento que deseja **remover** desse array. |
| contains | contains(expressionOf("@{array}"), constant(0)) | Operador que recebe duas entradas onde o primeiro parâmetro é um **array** e o segundo é o **elemento** que deseja verificar se **contém** no array. | 
union | union `<Number>` expressionOf("@{context.array1}"), expressionOf("@{context.array2}") | Operador que recebe dois arrays e os **une**, sendo ambos parâmtros do tipo `Bind<Array<I>>`


### Exemplo

Veja o exemplo de uma tela no qual foi declarado um contexto com id `numbersArray` com o valor de **\[0, 1, 2, 3, 4\],** esse contexto é usado na  operação de `removeIndex`no texto do component Text, onde ele remove o elemento de index **2**.

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
fun screen() = Screen(
  child = Container(
            context = ContextData(id = "numbersArray", value = arrayOf(0, 1, 2, 3, 4)),
            children = listOf(
                Text(constant("Array was [0, 1, 2, 3, 4] and after removing index 2 now is: ")),
                Container(
                    children = listOf(
                        Text(removeIndex<Int>(expressionOf("@{numbersArray}"), constant(2)).toBindString())
                    )
                ).setStyle { backgroundColor = "#00FF00" }
            )
        )
    )
```
{{% /tab %}}
{{< /tabs >}}

{{< figure src="/shared/array.png" width="200">}}
