---
title: Arithmetic operators
weight: 363
description: "In this section, you will find the information about the numeric operators."
---

---

## What are they?

| Operators | Example              | Action                                                           |
| :--------: | :------------------- | :------------------------------------------------------------- |
|    sum     | sum(constant(1), constant(2))      | Sum operator for elements Int and Double.        |
|  subtract  | subtract(constant(2), constant(1)) | Subtraction operator for elements Int and Double.      |
|  multiply  | multiply(constant(2), constant(2)) | Multiplication operator for elements Int and Double.  |
|   divide   | divide(constant(10.0), constant(2.0))   | Division operator for elements Int and Double.   |

### Example

The example below is a simples counter, where: 
- Two buttons `increment` and `decrement`, has [**SetContext**]({{< ref path="/api/actions/setcontext" lang="en" >}}) action.
- The context value that has the id counter is modified with the operations `addition` and `subtraction`, it increments and decreases the value of 1 to a text value, see below: 

{{< tabs id="T159" >}}
{{% tab name="JSON" %}}

<!-- json-playground:arithmeticOperators.json
{
  "_beagleComponent_": "beagle:screenComponent",
  "navigationBar": {
    "title": "Operations",
    "showBackButton": true
  },
  "child": {
    "_beagleComponent_": "beagle:container",
    "children": [
      {
        "_beagleComponent_": "beagle:text",
        "text": "Sum of 2 + 1 = @{sum(2, 1)}"
      },
      {
        "_beagleComponent_": "beagle:text",
        "text": "Counter: @{counter}"
      },
      {
        "_beagleComponent_": "beagle:button",
        "text": "increment",
        "onPress": [
          {
            "_beagleAction_": "beagle:setContext",
            "contextId": "counter",
            "value": "@{sum(counter, 1)}"
          }
        ]
      },
      {
        "_beagleComponent_": "beagle:button",
        "text": "decrement",
        "onPress": [
          {
            "_beagleAction_": "beagle:setContext",
            "contextId": "counter",
            "value": "@{subtract(counter, 1)}"
          }
        ]
      }
    ],
    "context": {
      "id": "counter",
      "value": 2
    }
  }
}
-->

{{% playground file="arithmeticOperators.json" language="pt" %}}
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
            Text(constant("Sum of 2 + 1 = ").plus(sum(constant(2), constant(1)).toBindString())),
            Text(expressionOf("Counter: @{counter}")),
                Container(
                    children = listOf(
                        Button(
                            text = "increment",
                            onPress = listOf(
                                SetContext("counter", "@{sum(counter, 1)}")
                            )
                        ),
                        Button(
                            text = "decrement",
                            onPress = listOf(
                                SetContext("counter", "@{subtract(counter, 1)}")
                            )
                        )
                    )
                )
            )
        )
    )
}
```

{{% /tab %}}
{{< /tabs >}}

{{< figure src="/shared/operadoresaritmeticos%20%281%29.gif" width="250">}}