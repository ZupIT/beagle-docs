---
title: Outros operadores
weight: 373
description: 'Nesta seção, você encontra descrição completa de outros operadores.'
---

---

## Quais são? 

| Operadores | Exemplo | Ação |
| :---: | :---: | :--- |
| isNull | isNull(expressionOf("@{context}") | Operador que verifica se o paramêtro é nulo.  |
| isEmpty | isEmpty(expressionOf("@{context}") | Operador que recebe uma entrada e verifica se ela é vazia. |
| length | length(expressionOf("@{context}") | Operador que recebe uma entrada e retorna o seu tamanho. |

### Exemplo

 Um contexto com id **numbersArray** que possui como valor **\[0, 1, 2, 3, 4\]** e a operação `length` foi utilizada em um componente Text para pegar o tamanho desse array, veja abaixo:

{{< tabs id="T164" >}}
{{% tab name="JSON" %}}
<!-- json-playground:otherOperators.json
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:container",
    "children" : [ {
      "_beagleComponent_" : "beagle:text",
      "text" : "Array [0, 1, 2, 3, 4] has size: "
    }, {
      "_beagleComponent_" : "beagle:text",
      "text" : "@{length(numbersArray)}",
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
{{% playground file="otherOperators.json" language="pt" %}}
{{% /tab %}}
{{% tab name="Kotlin" %}}
```kotlin
fun screen() = Screen(
  child = Container(
            context = ContextData(id = "numbersArray", value = arrayOf(0, 1, 2, 3, 4)),
            children = listOf(
                Text(text = "Array [0, 1, 2, 3, 4] has size: "),
                Container(
                    children = listOf(
                        Text(length(expressionOf("@{numbersArray}")).toBindString())
                    )
                ).setStyle { backgroundColor = "#00FF00" }
            )
        )
    )
```
{{% /tab %}}
{{< /tabs >}}

{{< figure src="/shared/others.png" width="200">}}
