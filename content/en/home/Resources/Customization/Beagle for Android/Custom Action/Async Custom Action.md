---
title: Async Custom Action
weight: 106
description: Creating a custom async action
---

---

To create a custom action in Beagle whose execution is asynchronous such as consuming an API or accessing a database, just create an `action` as usual as the previous example detailed and implement the `AsyncAction` interface.

With the action created, just link the `AsyncAction` interface and delegate its implementation to the `AsyncActionImpl` class that Beagle already provides.

{{% alert color="info" %}}
We recommend using this class, as it implements the `onActionStarted` and `onActionFinished` exposing its state in a reactive and standardized way in the framework.
{{% /alert %}}

```kotlin
@RegisterAction
data class CustomActionAndroid(
    val value: String
) : Action, AsyncAction by AsyncActionImpl() {
    override fun execute(rootView: RootView) {
        // Do asynchronous work
    }
}
```

Now, with the action ready to execute asynchronously, you have to **MANDATORY** notify when its execution is finished through the `onActionFinished` method.

```kotlin
@RegisterAction
data class CustomActionAndroid(
    val value: String
) : Action, AsyncAction by AsyncActionImpl() {
    override fun execute(rootView: RootView) {
        // Do asynchronous work
        onActionFinished()
    }
}
```

It's done! Your action is now configured to run any job asynchronously!

{{% alert color="danger" %}}
It is mandatory to implement the `AsyncAction` interface for any custom action that is inserted within the [ListView](/home/api/components/layout/listview) component.
{{% /alert %}}
