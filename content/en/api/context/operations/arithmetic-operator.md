---
title: Arithmetic operator
weight: 338
description: Here you will find the complete description of arithmetic operator.
---

---

## What are they?

| Operator | Example              | Action                                                        |
| :-------: | :------------------- | :------------------------------------------------------------ |
|    sum    | "@{sum\(3,3\)}"      | Addition operator for the elements type Int and Double.       |
| subtract  | "@{subtract\(4,3\)}" | Subtraction operator for the elements type Int and Double.    |
| multiply  | "@{multiply\(3,3\)}" | Multiplication operator for the elements type Int and Double. |
|  divide   | "@{divide\(3,3\)}"   | Division operator for the elements type Int and Double.       |

### Example

See an example below of a counter where two buttons `increment` and `decrement`, both with [**SetContext**]({{< ref path="/api/actions/setcontext" lang="en" >}}) actions that modifies the context value that has an id counter, altering the value with addition and subtraction operations, increasing or decresing the value of 1 to the text value:

{{< tabs id="T141" >}}
{{% tab name="JSON" %}}

<!-- json-playground:arithmeticOperators.json
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
      "text" : "Sum of 2 + 1 = @{sum(2, 1)}"
    }, {
      "_beagleComponent_" : "beagle:text",
      "text" : "Counter: @{counter}"
    }, {
      "_beagleComponent_" : "beagle:button",
      "text" : "increment",
      "onPress" : [ {
        "_beagleAction_" : "beagle:setContext",
        "contextId" : "counter",
        "value" : "@{sum(counter, 1)}"
      } ]
    }, {
      "_beagleComponent_" : "beagle:button",
      "text" : "decrement",
      "onPress" : [ {
        "_beagleAction_" : "beagle:setContext",
        "contextId" : "counter",
        "value" : "@{subtract(counter, 1)}"
      } ]
    } ],
    "context" : {
      "id" : "counter",
      "value" : 2
    }
  }
}
-->

{{% playground file="arithmeticOperators.json" language="en" %}}
{{% /tab %}}
{{% tab name="Kotlin" %}}

```kotlin
fun screen() = Screen(
    navigationBar = NavigationBar(
        title = "Operations",
        showBackButton = true
    ),
    child = Container(
        context = ContextData("counter", 2),
        children = listOf(
            Text(expressionOf("Sum of 2 + 1 = @{sum(2, 1)}")),
            Text(expressionOf("Counter: @{counter}")),
            Button(
                text = "increment",
                onPress = listOf(
                    SetContext("counter", "@{sum(counter, 1)}"))
            ),
            Button(
                text = "decrement",
                onPress = listOf(
                    SetContext("counter", "@{subtract(counter, 1)}"))
            )
        )
    )
)
```

{{% /tab %}}
{{< /tabs >}}

![](/operadoresaritmeticos%20%281%29.gif)
