---
title: Conversion operators
weight: 370
description: You will find a description of the conversion operators.
---

---

## What are they?

| Operators | Example | Action  |
| :---: | :---: | :--- |
| int | "@{int\('2'\)}" | Operator that receives an input of type **double** or **string** and converts to **int** if possible, returns **null** otherwise.  |
| double | "@{double\(1\)}" | Operator that receives an input of type **int** or **string** and converts to **double** if possible, returns **null** otherwise.   |
| string | "@{string\(1.2\)}" | Operator that receives an input of type **int**, **double** or **bool** and converts to **string** if possible, returns **null** otherwise.   |

### Example

Suppose there is a [custom]({{< ref path="/api/operations/how-to-register-a-new-operation" lang="en" >}}) operator `factorial` that takes a parameter **int** and returns the factorial of that number. We can use the `int` operator to convert the context value "5" with id `content`, see below:

{{< tabs id="T179" >}}
{{% tab name="JSON" %}}
<!-- json-playground:conversionOperator.json
{
  "_beagleComponent_" : "beagle:container",
  "children" : [ {
    "_beagleComponent_" : "beagle:text",
    "text" : "@{factorial(int(content))}"
  } ],
  "context" : {
    "id" : "content",
    "value" : "5"
  }
}
-->
{{% playground file="conversionOperator.json" language="pt" %}}
{{% /tab %}}
{{% tab name="Kotlin" %}}
```kotlin
fun screen() = Screen(child = 
    Container(
        context = ContextData(id = "content", value = constant("5")),
        children = listOf(
            Text(
                expressionOf("@{factorial(int(content))}")
            )
        )
    )
)
```
{{% /tab %}}
{{< /tabs >}}
