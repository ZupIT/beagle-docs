---
title: Condition
weight: 80
description: >-
  You will find here the definition of Condition and more details about its
  attributes
---

---

## What is it?

It is an action that has a boolean parameter and, according to the value, the action runs onTrue or onFalse.

| Attribute | Type                                                 | Required | Definition                                                       |
| :-------- | :--------------------------------------------------- | :------: | :--------------------------------------------------------------- |
| condition | Boolean or [**Binding**]({{< ref path="/api/context#binding" lang="en" >}}) |    ✓     | Condition to define which action will run.                       |
| onTrue    | List&lt;Action&gt;                                   |          | List of actions that it will be run when the condition is true.  |
| onFalse   | List&lt;Action&gt;                                   |          | List of actions that it will be run when the condition is false. |

## How to use it?

The example below is a `Container` with a context that has a 18 value and the event `onPress` of the button is defined as an action with the `Condition` type, that verifies if the values is the same as 21 and shows an `Alert` depending on the context value.

{{< tabs id="T90" >}}
{{% tab name="JSON" %}}

<!-- json-playground:condition.json
{
   "_beagleComponent_":"beagle:container",
   "children":[
      {
         "_beagleComponent_":"beagle:button",
         "text":"Is equal to 21?",
         "onPress":[
            {
               "_beagleAction_":"beagle:condition",
               "condition":"@{eq(age, 21)}",
               "onTrue":[
                  {
                     "_beagleAction_":"beagle:alert",
                     "title":"onTrue",
                     "message":"Condition is true"
                  }
               ],
               "onFalse":[
                  {
                     "_beagleAction_":"beagle:alert",
                     "title":"onFalse",
                     "message":"Condition is false"
                  }
               ]
            }
         ]
      }
   ],
   "context":{
      "id":"age",
      "value":18
   }
}
-->

{{% playground file="condition.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```
Container(
    context = ContextData(
        id = "age",
        value = 18
    ),
    children = listOf(
        Button(
            text = "Is equal to 21?",
            onPress = listOf(
                Condition(
                     condition = "@{eq(age, 21)}",
                     onTrue = listOf(
                         Alert(message = "The condition is true")
                     ),
                     onFalse = listOf(
                         Alert(message = "The condition is false")
                     )

                )
            )
        )
    )
)
```

{{% /tab %}}
{{< /tabs >}}
