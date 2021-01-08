---
title: Actions
weight: 230
description: Here you'll find all about action's components and its attributes details.
---

---

## What is it? 

On Beagle, an action deals with behaviours \(functions\), that are performed in your application when an event is triggered. These actions can be a Beagle's default or customized by you. 

Any Beagle's event must be associated with an action list. See below a button's component example, that associates with a default action alert to its `onPress` event: 

```javascript
{
   "_beagleComponent_": "beagle:button",
   "text": "click to show alert",
   "onPress": [{
      "_beagleAction_": "beagle:alert",
      "title": "Hello",
      "message": "World"
   }]
}
```

An action is map key/value with at least a `_beagleAction_` property. Its value indicates which action must be performed when the event it is triggered. The other properties specify the parameters expected by the indicated action. 

There are several implemented actions on Beagle by default and all of them start with prefix "**beagle:**" and the customized actions start with "**custom:**". 

To learn how to create custom actions, check out [**Beagle's customization section.**](/docs/resources/customization/)

## Action types

Below, you will find a complete description of the attributes that are part of the Standard Actions on Beagle.
