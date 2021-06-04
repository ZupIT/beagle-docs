---
title: Arrays manipulation operator
weight: 346
description: You will find a description of arrays manipulation operator.
---

---

## What are they? 

| Operadores | Exemplo | Ação |
| :---: | :---: | :--- |
| insert | "@{insert\(array, 5\)}" | Operators that receives two inputs, where the first parameter is an **array** and the second is the **element** that you want to **insert** in this array. |
| remove | "@{remove\(array, 1\)}" | Operators that receives two inputs, where the first parameter is an **array** and the second is the **element** that you want to **remove** this array. |
| removeIndex | "@{removeIndex\(array, 2\)}" | Operators that receives two inputs, where the first parameter is an **array** and the second is the **index** that you want to **remove** this array.  |
| contains | "@{contains\(array, 3\)}" | Operators that receives two inputs, where the first parameter is an **array** and the second is the **element** that you want to verify if it **contains in**  this array. |

### Example

See the example of a screen where the a context was declared with `numbersArray` id with the values **\[0, 1, 2, 3, 4\],** this context is used in the removeIndex operation in the text component `text`, where it removes the element of index **2.**

{{< tabs id="T145" >}}
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
{{% playground file="arrayHandling.json" language="en" %}}
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
            ).setStyle{ backgroundColor = "#00FF00" }
        )
    )
)
```
{{% /tab %}}
{{< /tabs >}}

![](/shared/array.png)
