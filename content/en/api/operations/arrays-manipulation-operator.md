---
title: Array Operation
weight: 371
description: >-
  Operation description to manipulate Arrays.
---

---

## Which are they?

| Operators | Example | Action |
| :---: | :---: | :--- |
| insert | "@{insert\(array, 5\)}" | Inserts an element into the array. This operator takes two parameters, the first is an **array** and the second is the **element** that you want to **insert** into this array. |
| remove | "@{remove\(array, 1\)}" | Removes an element from an array. This operator takes two parameters, the first is an **array** and the second is the **element** that you want to **remove** from this array. |
| removeIndex | "@{removeIndex\(array, 2\)}" | Removes an element from an array according to the element's position. This operator takes two parameters, the first is an **array** and the second is the **index** of the element you want to **remove** from this array. |
| contains | "@{contains\(array, 3\)}" | Checks whether the array contains an element. This operator takes two parameters, the first is an **array** and the second is the **element** that you want to check |

### Example

The example below modifies an array that was defined in the Context with id `numbersArray` and value **\[0, 1, 2, 3, 4\]** .

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
            ).setStyle{ backgroundColor = constant("#00FF00") }
        )
    )
)
```

{{% /tab %}}
{{< /tabs >}}
