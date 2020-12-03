---
title: Addchildren
weight: 220
description: You will find here AddChildrenAction definition and its attributes details
---

---

## What is it?

The `AddChildrenAction` class is responsible for adding - at the beginning or in the end - or changing all views that inherit from  `Widget`  and who accept children.

The AddChildrenAction structure is: 

| **Attribute** | **Type** | Required | **Definition** |
| :--- | :--- | :--- | :--- |
| componentId | String |       ✓ | Defines the widget's id, in which you want to add the views. |
| value | List&lt;ServerDrivenComponent&gt; |        ✓ | Defines the list of children you want to add. |
| mode | Mode |  | Defines the placement of where the children will be inserted in the list or if the contents of the list will be replaced. **By default the set mode is `APPEND`.** |

### Mode

It is an `ENUM`, which values are:

| Values | Definition |
| :--- | :--- |
| APPEND | Adds the view in the end of the children's list. |
| PREPEND | Adds the view on the beginning of the children's list. |
| REPLACE | Replaces all children of the widget. |

## How to use it?



```javascript
                "_beagleAction_": "beagle:addChildrenAction",
                "componentId": "MyContainerID",
                "value": [{
                        "_beagleComponent_": "beagle:text",
                        "text": "This is the new view added"
                    }
                ],
                "mode": "APPEND"
            }
        ]
    }
],
"id": "MyContainerID"
```



```
Container(
    children = listOf(
        Button("AddChildren", onPress = listOf(
            AddChildrenAction(
                componentId = "MyContainerID",
                value = listOf(
                    Text("This is the new view added")
                ),
				mode = Mode.APPEND
            )
        ))
    )
).apply { id = "MyContainerID" }
```



##
