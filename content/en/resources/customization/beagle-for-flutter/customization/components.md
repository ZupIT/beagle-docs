---
title: Custom Components
weight: 2
description: >-
  In this section, you will find information on how to create and use your own components in Beagle Flutter.
---

---

## How to create custom widgets?
You need to declare a map that follows the struct `Map<String, ComponentBuilder>` and pass it to the initialization method `BeagleSdk.init`.

This struct tells Beagle which widget to render when a given identifier comes into the JSON.

### String key definition
The String key of the map is the `_beagleComponent_` property in JSON that identifies the widget type. You can name it whatever you like, as long as the prefix is ​​`custom:`. 

### ComponentBuilder value definition
The `ComponentBuilder` value of the map is a function that receives as parameters:
- A `BeagleUIElement`;
- A list of a widgets;
- A `BeagleView`.

It returns a widget and follows the struct `Widget Function(BeagleUIElement element, List<Widget> children, BeagleView view)`.

These parameters are available because they provide all the information needed to build a custom widget, such as context and children.

## Example
Follow these steps to learn how to create and use your own custom widgets:

### Step 1: Create the component identifier
Define the identifier, here let's name it `custom:loading`.

### Step 2: Create the widget
Create your widget regardless of Beagle. For this example, we'll use the simple widget below:
```dart
final customLoading = Center(
  child: const Text('My custom loading.'),
);
```

### Step 3: Create the custom components map
Create the struct that it will pass to Beagle, see below:
```dart
Map<String, ComponentBuilder> myCustomComponents = {
  'custom:loading': (element, children, view) {
    return customLoading;
  }
};
```

### Step 4: Pass them to Beagle
Pass the map you have created through the Beagle init method, now Beagle will be able to render your widget:
```dart
BeagleSdk.init(
  components: myCustomComponents,
);
```

That's it! Now you can use your custom component with Beagle Flutter!
