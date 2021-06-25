---
title: Asynchronous Custom Action
weight: 3
description: Creating an asynchronous custom action
---

---

**Topics covered:**
- Create an asynchronous custom action:

 
**Requirements:**
 - Have a project already set up with Beagle.
 - Having passed by example [**Custom Action**]({{< ref path="/ios/customization/custom-actions/custom-action" lang="en" >}}).

{{% alert color="warning" %}}
If you don't know what an action is [**What is an action**]({{< ref path="/ios/customization/custom-actions/custom-action" lang="pt" >}}).
{{% /alert %}}

### Asynchronous custom action:

To create a custom action in Beagle whose execution is asynchronous like consuming an API or accessing a database, just create an `action` normally like the example [**Custom Action**]({{< ref path="/ios/customization/custom-actions/custom-action" lang="en" >}}) and implement the `AsyncAction` interface.

After creating an action, you must implement the `AsyncAction` interface. That will request that an execute method and the onFinish parameter are implemented.

```swift
struct CustomAction: AsyncAction {

        var onFinish: [Action]?

        func execute(controller: BeagleController, origin: UIView) {

        }
    }
```

Now we **MUST** notify when its execution is completed by triggering the `onFinish` action.

```swift
    controller.execute(actions: self.onFinish, origin: origin)
```

Here follows an Asynchronous Custom Action example:

```swift
struct CustomAction: AsyncAction {

        var onFinish: [Action]?

        func execute(controller: BeagleController, origin: UIView) {
                print("Custom action was called")

                controller.execute(actions: self.onFinish, origin: origin)
        }
    }
```

Your action is now configured to perform any tasks asynchronously!

{{% alert color="success" %}}
To learn how to register and use a new action, check the steps 3 and 4 on the [**Custom Action**]({{< ref path="/ios/customization/custom-actions/custom-action" lang="en" >}}) example.
{{% /alert %}}
