---
title: Comparison operator
weight: 367
description: 'In this section, you will find the information about the comparison operators.'
---

---

## What are they? 
See below the comparison operator: 

<table>
  <thead>
    <tr>
      <th style="text-align:center">Operators</th>
      <th style="text-align:left">Example</th>
      <th style="text-align:left">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:center">
        gt
        (greater)
      </td>
      <td style="text-align:left">gt(constant(3), constant(4))</td>
      <td style="text-align:left">The operator receives two inputs and the result is <strong>true</strong> if the first value is <strong>greater</strong> than the second.</td>
    </tr>
    <tr>
      <td style="text-align:center">
        gte
        (greater than or equal to)
      </td>
      <td style="text-align:left">gte(constant(3), constant(4))</td>
      <td style="text-align:left">The operator receives two inputs and the result is <strong>true</strong> if the first value is <strong>greater or equal </strong> to the second.</td>
    </tr>
    <tr>
      <td style="text-align:center">
        lt
        (less)
      </td>
      <td style="text-align:left">lt(constant(3), constant(4))</td>
      <td style="text-align:left">The operator receives two inputs and the result is <strong>true</strong> if the first value is <strong>less</strong> than the second.</td>
    </tr>
    <tr>
      <td style="text-align:center">
        lte
        (less than or equal to)
      </td>
      <td style="text-align:left">lte(constant(3), constant(4))</td>
      <td style="text-align:left">The operator receives two inputs and the result is <strong>true</strong> if the first value is <strong>less or equal</strong> to the second.</td>
    </tr>
    <tr>
      <td style="text-align:center">
        eq
        (Equal to)
      </td>
      <td style="text-align:left">eq(constant(4), constant(4))</td>
      <td style="text-align:left">The operator receives two inputs and the result is <strong>true</strong> if the two values are <strong>equal</strong>.</td>
    </tr>
  </tbody>
</table>

### Example

The example here is a screen that uses the comparison operation **lt**, it verifies the value counter sum and there are two possibilities: 

1. If the conditional result `or` is true, the `Text` component's text becomes **true;**
2. If it is false, it attributes the value **false** to the text. 

{{< tabs id="T161" >}}
{{% tab name="JSON" %}}
<!-- json-playground:comparisonOperators.json
{
   "_beagleComponent_":"beagle:screenComponent",
   "navigationBar":{
      "title":"Operations",
      "showBackButton":true
   },
   "child":{
      "_beagleComponent_":"beagle:container",
      "children":[
         {
            "_beagleComponent_":"beagle:text",
            "text":"The text bellow will show if 4 is below 5 or not"
         },
         {
            "_beagleComponent_":"beagle:text",
            "text":"@{condition(lt(4, 5), 'less then 5', 'greater then 5')}",
            "style":{
               "backgroundColor":"#00FF00"
            }
         }
      ]
   }
}
-->
{{% playground file="comparisonOperators.json" language="pt" %}}
{{% /tab %}}
{{% tab name="Kotlin" %}}
```kotlin
fun screen() = Screen(
    navigationBar = NavigationBar(
        title = "Operations",
        showBackButton = true
    ),
    child = Container(
            children = listOf(
                Text(text = constant("The text bellow will show if 4 is below 5 or not")),
                Container(
                    children = listOf(
                        Text(
                            condition(
                                lt(constant(4), constant(5)), constant("less then 5"),
                                constant("greater then 5")).toBindString()
                        )
                    )
                ).setStyle { backgroundColor = constant("#00FF00") }
            )
        )
    )
```
{{% /tab %}}
{{< /tabs >}}

{{< figure src="/shared/comparison.png" width="200">}}

