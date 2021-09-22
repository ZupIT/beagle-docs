---
title: String manipulation operator
weight: 369
description: >-
  In this section, you will find the information about String manipulation operator.
---

---

## What are they? 

See them below:

| Operator | Example | Action |
| :---: | :---: | :--- |
| concat | concat(constant("cachorro"), constant("quente")) | The operator concatenates the strings it has as inputs. |
| capitalize | capitalize(constant("brasil")) | The operator transforms the first string letter into upper case. |
| uppercase | uppercase(constant("brasil")) | The operator transforms every letter of a string into upper case. |
| lowercase | lowercase(constant(("BRASIL")) | The operator transforms every letter of a string into lower case. |
| substr | substr(constant("brasil"), constant(3)) |The operator returns a substring of an input string. This operation may have 2 or 3 inputs, where the first parameter is the string and the second and third ones are the string's threshold. |

{{% alert color="warning" %}}
 When you use operations with DSL, it is necessary to add the **toBindString( )** method to convert the operation to a String's Bind type.
 {{% /alert %}}

### Example

The example shows a screen that has a text with a `substring` operation.
It has the sentence
- **'The book is on the table'** a

The parameters are:
- **4, 11** 
This shows the substring's limit changing the string to: **book is on':**

See below:

{{< tabs id="T162" >}}
{{% tab name="JSON" %}}
<!-- json-playground:stringManipulation.json
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:container",
    "children" : [ {
      "_beagleComponent_" : "beagle:text",
      "text" : "The text bellow is a substring of `The book is on the table`."
    }, {
      "_beagleComponent_" : "beagle:text",
      "text" : "@{substr('The book is on the table', 4, 11)}",
      "style" : {
        "backgroundColor" : "#00FF00"
      }
    } ]
  }
}
-->
{{% playground file="stringManipulation.json" language="pt" %}}
{{% /tab %}}
{{% tab name="Kotlin" %}}
```kotlin
fun screen() = Screen(
  child = Container(
            children = listOf(
                Text(text = constant("The text bellow is a substring of `The book is on the table`.")),
                Container(
                    children = listOf(
                        Text(substring(constant("The book is on the table"), constant(4), constant(11)))
                    )
                ).setStyle { backgroundColor = "#00FF00" }
            )
        )
    )
```
{{% /tab %}}
{{< /tabs >}}

{{< figure src="/shared/string.png" width="250">}}
