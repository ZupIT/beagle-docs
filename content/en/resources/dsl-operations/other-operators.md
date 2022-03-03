---
title: Other operators
weight: 373
description: 'In this section, you will find the information about other operators.'
---

---

## What are they? 

See them below:

| Operator | Example | Action |
| :---: | :---: | :--- |
| isNull | isNull(expressionOf("@{context}") | The operator verifies if the parameter is null.   |
| isEmpty | isEmpty(expressionOf("@{context}") | The operator receives an input and verifies if it is empty.|
| length | length(expressionOf("@{context}") | The operator receives an input and returns the length.|

### Example

The example below shows a context with **numbersArray** ID with the value **\[0, 1, 2, 3, 4\]** and the operation `length` was used in the `Text` component to get the length of this array, see below:

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
                ).setStyle { backgroundColor = constant("#00FF00") }
            )
        )
    )
```
{{% /tab %}}
{{< /tabs >}}

{{< figure src="/shared/others.png" width="200">}}
