---
title: Logic operator
weight: 340
---

---

## What are they? 

| Operators | Example | Action  |
| :---: | :--- | :--- |
| condition | "@{condition\(\)}" | Conditional operator that evaluates two elements and verifies which condition is true. |
| not | "@{not\(\)}" | negation operator that has as input only one value and its function is invert this value.  |
| and | "@{and\(\)}" | Operator that receives two inputs and it has a **TRUE** value, if the two values of the operation inputs are **TRUE**, if not the result is **FALSE**.  |
| or | "@{or\(\)}" | Operator that receives two inputs and it the result it a **TRUE** value. If only **ONE** of the two input values are **TRUE**, if not the result is **FALSE**.  |

### Example 

Here is an example of a screen that uses two logical operation  `condition` and `or`, if the result of the condition `or` is true, the text of the component text becomes **true**, if it is false it attibutes the value **false** to the text: 

{{< tabs id="T142" >}}
{{% tab name="JSON" %}}
<!-- json-playground:logical.json
{
  "_beagleComponent_" : "beagle:screenComponent",
  "navigationBar" : {
    "title" : "Operations",
    "showBackButton" : true
  },
  "child" : {
    "_beagleComponent_" : "beagle:container",
    "children" : [ {
      "_beagleComponent_" : "beagle:text",
      "text" : "The text in green bellow will show if the result of `TRUE OR FALSE"
    }, {
      "_beagleComponent_" : "beagle:text",
      "text" : "@{condition(or(true, false), 'true', 'false')}",
      "style" : {
        "backgroundColor" : "#00FF00"
      }
    } ]
  }
}
-->
{{% playground file="logical.json" language="en" %}}
{{% /tab %}}
{{% tab name="Kotlin" %}}
```kotlin
fun screen() = Screen(
    navigationBar = NavigationBar(title = "Operations", showBackButton = true),
    child = Container(
        children = listOf(
            Text(text = "The text in green bellow will show if the result of `TRUE OR FALSE"),
            Text(
                expressionOf("@{condition(or(true, false), 'true', 'false')}")
            ).setStyle{ backgroundColor = "#00FF00" }
        )
    )
)
```
{{% /tab %}}
{{< /tabs >}}

![](/shared/logic.png)
