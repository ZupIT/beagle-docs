---
title: PopView
weight: 80
description: Description of the PopView action and its attributes
---

---

## What is it?

This is an action that destroys the currently displayed screen, showing the previous view on the same stack, if any is present.

The structure of ``PopView`` is:

| **Attribute** | **Type** | Required | **Definition** |
| :------------ | :-------------------------------------------- | :---------: | :------------------ |
| navigationContext | ​[NavigationContext]({{< ref path="/api/actions/navigate/navigationcontext" lang="en" >}})​ | | Context saved on the target screen. |

## How to use?

In the example below, we have a screen with a button, which, when clicked, executes the ``PopToView`` action and destroys the current screen, showing the previous screen on the same stack, if any.

To test, just have an endpoint of your BFF return the code screen below and call this endpoint on the frontend.
