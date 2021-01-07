---
title: Events
weight: 355
description: >-
  Here you'll find descriptions of what events are and its types.
---

---

## What are events?

Events are anything that can trigger actions on Beagle \(Beagle Actions\). In the JSON, every key is associated to a Beagle Action that represents an event.

See some events example: 

* onPress
* onError
* onFocus
* onChange

An event can be part of the component contract or a Beagle action. A`button`, for example, it is a component `onPress` is an event that it is part of its contract. An action sendRequest, it's an example of action where the events "onSuccess", "onError" and "onFinish" are part of the contract. 

## How to use it?

See the example with the event onPress button: 

{{< tabs id="T155" >}}
{{% tab name="JSON" %}}
<!-- json-playground:events.json
{
  "_beagleComponent_" : "beagle:button",
  "text" : "Click to show message",
  "onPress" : [ {
    "_beagleAction_" : "beagle:alert",
    "title" : "Sou um alert",
    "message" : "Hello Beagle"
  } ]
}
-->
{{% playground file="events.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```text
Button(
    text = "Click to show message",
    onPress = listOf(
        Alert(
            title = "I'm an alert",
            message = "Hello Beagle"
        )
    )
)
```
{{% /tab %}}
{{< /tabs >}}

The example above, associates the action "beagle:alert" to the event onPress of the beagle:button component. When you bress the button where the title is "Click to show message", a message will be shown on the screen with the text "Hello World!". 

Every event in any component or action can be associated with any Beagle Action. An alert action was used in the previous example, but any other can be used. To make a request when clicking the button, the action "beagle:sendRequest" could be used. For more information [**about all available actions**, **access here**.](/api/actions)
