---
title: Custom Actions
weight: 3
description: >-
  You will find here information of how to create and use your own actions in Beagle Flutter.
---

---

## How to create custom actions?
Just like custom componentes, it's pretty simple to create a custom actions in Beagle Flutter, you need to declare a map that follows the strcut `Map<String, ActionHandler>` and pass it to the initialization method `BeagleSdk.init`. Basically this struct tells Beagle which action trigger when a given identifier comes into JSON.

### String key definition
The String key of the map is the `_beagleAction_` property in JSON that identifies the action type. You can name it whatever you like, as long as the prefix is ​​`custom:`. 

### ActionHandler value definition
The ActionHandler value of the map is a function that receives a `BeagleAction`, a `BeagleView`, a `BeagleUIElement` and a context as parameters, following the strcut `void Function({BeagleAction action, BeagleView view, BeagleUIElement element, BuildContext context})`. This parameters are available because they provide all the information needed to trigger an event, such as context and the action coming from JSON.

## Example
Follow this steps to learn how to create and use your own custom actions:

### Step 1: Create the action identifier
The first step to create a custom action with Beagle Flutter, is to define the identifier. Here, let's name it `custom:log`.

### Step 2: Create the action
Now create your action regardless of Beagle. For this example, we'll use the simple function below:
```dart
void debug(String message) {
  debugPrint(message);
}
```

### Step 3: Create the custom actions map
With the function and action identifier done, it's time to create the struct that we'll pass to Beagle:
```dart
Map<String, ActionHandler> myCustomActions = {
  'custom:log': ({action, view, element, context}) {
    debug(action.getAttributeValue('message'));
  }
};
```

### Step 4: Pass them to Beagle
To Beagle be able to trigger your action, pass the map you just created through the Beagle init method:
```dart
BeagleSdk.init(
  actions: myCustomActions,
);
```

That's it! Now you can use your custom action with Beagle Flutter!
