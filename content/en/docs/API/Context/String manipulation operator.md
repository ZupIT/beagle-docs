---
title: String manipulation operator
weight: 344
description: You will find here the description of string manipulation operator
---

---

## What are they? 

| Operators | Example | Action |
| :---: | :---: | :--- |
| concat | "@{concat\("cachorro", "quente"\)}" | Operator that concatenates the strings that are as input. |
| capitalize | "@{capitalize\(brasil\)}" | Operator that changes the first string letter into a capital letter. |
| uppercase | "@{uppercase\(brasil\)}" | Operator that changes all letter of a string into uppercases.  |
| lowercase | "@{lowecase\(BRASIL\)}" | Operator that changes all letters of a string into lowercases.  |
| substr | "@{substr\(brasil, 3\)}" | Operator that returns a substring of a input string. This operation may have 2 or 3 inputs, where the first parameter is the string  and the second and third ones are the string limit.  |

### Example

This example, a screen has a text with the `substring` operation, which the sentence is '**The book is on the table'** and the parameters is **4,11** determine the threshold of this `substring`, which it will turn the following string '**book is on**': 

{{< tabs name="T144" >}}
{{% tab name="Kotlin" %}}
```kotlin
fun screen() = Screen(child = 
    Container(
        children = listOf(
            Text(text = "The text bellow is a substring of `The book is on the table`."),
            Text(
                expressionOf("@{substr('The book is on the table', 4, 11)}")
            ).applyStyle(Style(backgroundColor = "#00FF00")
        )
    )
)
```
{{% /tab %}}

{{% tab name="JSON" %}}
```kotlin
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
```
{{% /tab %}}
{{< /tabs >}}

![](/string.png)
