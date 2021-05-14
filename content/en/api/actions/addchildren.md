---
title: AddChildren
weight: 232
description: You will find here AddChildrenAction definition and its attributes details
---

---

## What is it?

The `AddChildrenAction` class is responsible for adding - at the beginning or in the end - or changing all views that inherit from  `Widget`  and who accept children.

The AddChildrenAction structure is:

| **Attribute** | **Type** | Required | **Definition** |
| :--- | :--- | :--- | :--- |
| componentId | String |       ✓ | Defines the widget's id, in which you want to add the views. |
| value | List&lt;ServerDrivenComponent&gt; or [**Binding**]({{< ref path="/api/context#bindings" lang="en" >}})  |        ✓ | Defines the list of children you want to add. |
| mode | Mode |  | Defines the placement of where the children will be inserted in the list or if the contents of the list will be replaced. **By default the set mode is `APPEND`.** |

### Mode

It is an `ENUM`, which values are:

| Values | Definition |
| :--- | :--- |
| APPEND | Adds the view in the end of the children's list. |
| PREPEND | Adds the view on the beginning of the children's list. |
| REPLACE | Replaces all children of the widget. |

## How to use it?

{{< tabs id="T88" >}}
{{% tab name="JSON" %}}
<!-- json-playground:addChildrenAction.json
{
"_beagleComponent_": "beagle:container",
"id": "containerId",
"children": [
   {
   "_beagleComponent_":"beagle:button",
   "text":"AddChildren",
   "onPress":[
      {
         "_beagleAction_":"beagle:addChildren",
         "componentId":"containerId",
         "value":[
            {
               "_beagleComponent_":"beagle:text",
               "text":"New text added"
            }
         ],
         "mode":"APPEND"
      }
   ]
}

]
}
-->
{{% playground file="addChildrenAction.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```
Container(
    children = listOf(
        Button("AddChildren", onPress = listOf(
            AddChildrenAction(
                componentId = "containerId",
                value = listOf(
                    Text("New text added")
                ),
				mode = Mode.APPEND
            )
        ))
    )
).apply { id = "containerId" }
```
{{% /tab %}}
{{< /tabs >}}
