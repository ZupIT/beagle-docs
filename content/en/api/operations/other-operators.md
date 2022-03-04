---
title: Other operators
weight: 373
description: You will find a description of other operators.
---

---

## What are they?

| Operadores | Exemplo | Ação |
| :---: | :---: | :--- |
| isNull | "@{isNull\(context\)}" | Operator that verifies if the parameter is null.  |
| isEmpty | "@{isEmpty\("\)}" | Operator that receives an input and verify if it is empty.   |
| length | "@{length\(tamanho\)}" | Operator that receives an input and returns its size.  |

### Example

A context with `numbersArray` id that has  **\[0, 1, 2, 3, 4\]** as value and the operation `length` was used in one component Text to get the size of this array, see below: 

{{< tabs id="T146" >}}
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
{{% playground file="otherOperators.json" language="en" %}}
{{% /tab %}}
{{% tab name="Kotlin" %}}
```kotlin
fun screen() = Screen(child = 
    Container(
        context = ContextData(id = "numbersArray", value = arrayOf(0,1,2,3,4)),
        children = listOf(
            Text(text = "Array [0, 1, 2, 3, 4] has size: "),
            Text(
                expressionOf("@{length(numbersArray)}")
            ).setStyle{ backgroundColor = constant("#00FF00") }
        )
    )
)
```
{{% /tab %}}
{{< /tabs >}}

![](/shared/others.png)
