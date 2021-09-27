---
title: Operadores para manipulação de arrays
weight: 371
description: >-
  In this section, you will find information about arrays manipulation operators.
---

---

## What are they? 

Check out below: 

| Operators | Example | Action |
| :---: | :---: | :--- |
| insert | insert(expressionOf("@{array}), constant(5)) | The operator receives two inputs where the first parameter is an **array** and the second is the **element** you want to  **insert** in this array. |
| remove | remove(expressionOf("@{array}), constant(1)) | The operator receives two inputs where the first parameter is an **array** and the second **element** you want to **remove** this array. |
| removeIndex | removeIndex`<Int>`(expressionOf("@{array}"), constant(2)) | The operator receives two inputs where the first parameter is an **array** and the second **index** of the element you want to **remove** this array. |
| contains | contains(expressionOf("@{array}"), constant(0)) | The operator receives two inputs where the first parameter is an **array** and the second is the **element** you want to verify if it **contains** in the array. | 
union | union `<Number>` expressionOf("@{context.array1}"), expressionOf("@{context.array2}") | The operator receives two arrays and the **une**, both parameters `Bind<Array<I>>`


### Example

The example below shows a screen where a context with `numbersArray` Id was declared with the value **\[0, 1, 2, 3, 4\],**. This context is used in the operation `removeIndex` in the `Text` component text and it removes the index element **2**.


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
