---
title: Comparison operator
weight: 342
description: You will find here the description of comparison operator
---

---

## What are they? 

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
        <p>gt</p>
        <p>(greater)</p>
      </td>
      <td style="text-align:left">&quot;@{gt(3,4)}</td>
      <td style="text-align:left">Operator that receives two inputs and the result is <b>true</b> if the first
        value is <b>greater than</b> the second one.</td>
    </tr>
    <tr>
      <td style="text-align:center">
        <p>gte</p>
        <p>(greater than or equal to)</p>
      </td>
      <td style="text-align:left">&quot;@{gte(3,4)}&quot;</td>
      <td style="text-align:left">Operator that receives two inputs and the result is <b>true </b>if the
        first value is <b>greater than or equal to</b> the second one.</td>
    </tr>
    <tr>
      <td style="text-align:center">
        <p>lt</p>
        <p>(less than)</p>
      </td>
      <td style="text-align:left">@{lt(3,4)}&quot;</td>
      <td style="text-align:left">Operator that receives two inputs and the result is <b>true</b> if the first
        value is<b> less than</b> the second one.</td>
    </tr>
    <tr>
      <td style="text-align:center">
        <p>lte</p>
        <p>(less then or equal to)</p>
      </td>
      <td style="text-align:left">&quot;@{lte(3,4)}&quot;</td>
      <td style="text-align:left">Operator that receives two inputs and the result is <b>true</b> if the first
        value is <b>less then or equal to </b>the second one.</td>
    </tr>
    <tr>
      <td style="text-align:center">
        <p>eq</p>
        <p>(Equal to)</p>
      </td>
      <td style="text-align:left">&quot;@{eq(4,4)}&quot;</td>
      <td style="text-align:left">Operator that receives two inputs and the result is <b>true</b> if the two
        values are <b>equal</b>.</td>
    </tr>
  </tbody>
</table>

### Example

Here, the example is a screen that uses the comparison operation **It**_,_ that verifies if the addition value of the counter is:

* If the result of the condition or is true, the text component `Text` becomes **true;**
* If it is false, it attributes the text the value **false**; 

{{< tabs id="T143" >}}
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
{{% playground file="comparisonOperators.json" language="en" %}}
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
            Text(text = "The text bellow will show if 4 is below 5 or not"),
            Text(expressionOf(
                    "@{condition(lt(4, 5), 'less then 5', 'greater then 5')}")
            ).applyStyle(Style(backgroundColor = "#00FF00"))
        )
    )
)
```
{{% /tab %}}
{{< /tabs >}}

![](/comparison.png)
