---
title: Custom Components
weight: 2
description: >-
  You will find here information of how to create and use your own components in Beagle Flutter.
---

---

## How to create custom widgets?
It's pretty simple to create a custom component in Beagle Flutter, you just need to declare a map that follows the strcut `Map<String, ComponentBuilder>` and pass it to the initialization method `BeagleSdk.init`. Basically this struct tells Beagle which widget to render when a given identifier comes into JSON.

### String key definition
The String key of the map is the `_beagleComponent_` property in JSON that identifies the widget type. You can name it whatever you like, as long as the prefix is ​​`custom:`. 

### ComponentBuilder value definition
The ComponentBuilder value of the map is a function that receives a `BeagleUIElement`, a list of a widgets and a `BeagleView` as parameters and returns a widget, following the strcut `Widget Function(BeagleUIElement element, List<Widget> children, BeagleView view)`. This parameters are available because they provide all the information needed to build a custom widget, such as context and children.

## Example
Follow this steps to learn how to create and use your own custom widgets:

### Step 1: Create the component identifier
The first step to create a custom component with Beagle Flutter, is to define the identifier. Here, let's name it `custom:loading`.

### Step 2: Create the widget
Now create your widget regardless of Beagle. For this example, we'll use the simple widget below:
```dart
final customLoading = Center(
  child: const Text('My custom loading.'),
);
```

### Step 3: Create the custom components map
With the widget and widget identifier done, it's time to create the struct that we'll pass to Beagle:
```dart
Map<String, ComponentBuilder> myCustomComponents = {
  'custom:loading': (element, children, view) {
    return customLoading;
  }
};
```

### Step 4: Pass them to Beagle
To Beagle be able to render your widget, pass the map you just created through the Beagle init method:
```dart
BeagleSdk.init(
  components: myCustomComponents,
);
```

That's it! Now you can use your custom component with Beagle Flutter!
