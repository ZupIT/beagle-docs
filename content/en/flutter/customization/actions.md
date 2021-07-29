---
title: Custom Actions
weight: 3
description: >-
  In this section, you will find information on how to create and use your own actions in Beagle Flutter.
---

---

## How to create custom actions?
It's simple to create a custom actions in Beagle Flutter, you need to:
- Declare a map that follows the struct `Map<String, ActionHandler>`;
- Pass it to the initialization method `BeagleSdk.init`.

This struct tells Beagle which action to trigger when a given identifier comes from a JSON.

### String key definition
The String key of the map is the `_beagleAction_` property in JSON that identifies the action type. You can name it whatever you like, as long as the prefix is ​​`custom:`. 

### ActionHandler value definition
The `ActionHandler` value of the map is a function that receives a:
1. `BeagleAction`;
2. `BeagleView`;
3. `BeagleUIElement`;
4. `BuildContext`.

It follows the strcut `void Function({BeagleAction action, BeagleView view, BeagleUIElement element, BuildContext context})`. These parameters are available because they provide all the information needed to trigger an event, such as context and the action coming from JSON.

## Example
Follow these steps to learn how to create and use your own custom actions:

### Step 1: Create the action identifier
You have to define the identifier. Here, let's name it `custom:log`.

### Step 2: Create the action
Create your action regardless of Beagle implementation. For this example we used a simple function, see below:
```dart
void debug(String message) {
  debugPrint(message);
}
```

### Step 3: Create the custom actions map
Create the struct that it will pass to Beagle:
```dart
Map<String, ActionHandler> myCustomActions = {
  'custom:log': ({action, view, element, context}) {
    debug(action.getAttributeValue('message'));
  }
};
```

### Step 4: Pass the map to Beagle
For Beagle to be able to trigger your action, pass the map you just created through the Beagle init method:
```dart
BeagleSdk.init(
  actions: myCustomActions,
);
```

That's it! Now you can use your custom action with Beagle Flutter!
