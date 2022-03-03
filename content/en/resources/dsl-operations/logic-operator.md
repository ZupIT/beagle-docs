---
title: Logic operators
weight: 365
description: 'In this section, you will find the information about Logic operators.'
---

---

## What are they?

See below the logic operators: 

| Operators | Action |
| :---: | :--- | :--- |
| condition\(\) | The condition operator checks two elements and verifies which one is the real condition. |
| not\(\) | The negation operator where the input is a only one value and the function is to reverse this value. |
| and\(\) | The operator receives two inputs and the result is a **TRUE** value. If the two inputs values are **TRUE**, if not the result is **FALSE**. |
| or\(\) | The operator receives two inputs AND the result is a **TRUE** value, if at least **ONE** of the two operation inputs is **TRUE**, if not the result is **FALSE**. |

### Example

In this example there is a screen that uses two logic operations, `condition` and `or`. There are two possibilities: 
1. If the condition `or` result is true, the `Text` component text becomes  **true**.
2. If it is **false** it attributes the value false. 

{{< tabs id="T160" >}}
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
      "text" : "The text in green below will show if the result of `TRUE OR FALSE"
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
{{% playground file="logical.json" language="pt" %}}
{{% /tab %}}
{{% tab name="Kotlin" %}}
```kotlin
fun screen() = Screen(
    navigationBar = NavigationBar(title = "Operations", showBackButton = true),
    fun screen() = Screen(
    navigationBar = NavigationBar(title = "Operations", showBackButton = true),
    child = Container(
            children = listOf(
                Text(text = constant("The text in green below will show if the result of `TRUE OR FALSE")),
                Text(condition(or(constant(true), constant(false)), constant(true), constant(false)).toBindString()
                ).setStyle{ backgroundColor = constant("#00FF00") }
            )
        )
    )
)
```
{{% /tab %}}
{{< /tabs >}}

{{< figure src="/shared/logic.png" width="250">}}
