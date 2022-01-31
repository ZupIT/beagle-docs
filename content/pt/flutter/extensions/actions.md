---
title: Custom Actions
weight: 3
description: >-
  In this section, you will find information on how to create and use your own actions in Beagle Flutter.
---

---

## How to create custom actions?
1. Declare a map of type `Map<String, ActionHandler>`;
2. Pass this map to your BeagleService instance.

This map tells Beagle which action to trigger when a given identifier comes from a JSON.

### The keys on a map of actions
The key in a map of actions is a string and it must be equivalent to the `_beagleAction_` property of the JSON. These keys have a single restriction: they must have the prefix "custom:".

### The values on a map of actions (Action handlers)
An action handler is a function that receives the following named parameters:

- action (BeagleAction): the action itself, it allows access to all properties that came from the JSON.
- view (BeagleView): the BeagleView that spawned this action. The reference to the BeagleView is useful for altering the Beagle UI tree and triggering re-renders, but it's rarely needed when implementing simple actions.
- element (BeagleUIElement): the node of the BeagleTree that owns the action.
- context (BuildContext): the BuildContext of the parent BeagleWidget.

The most important parameter is the action and most action handlers will need only this to be implemented. See an example below of an action that logs a message to the console:

```dart
final Map<String, ActionHandler> myActions = {
  'custom:log': ({required action, required element, required view, required context}) {
    log(action.getAttributeValue('message'));
  },
};

final beagleService = BeagleService(
  baseUrl: 'http://myBFF.com',
  components: defaultComponents,
  actions: {...myActions, ...defaultActions},
);
```

That's it! Now you can use your custom action with Beagle Flutter!
