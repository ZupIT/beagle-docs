---
title: Design System
weight: 3
description: >-
  You will find here information of how to create and use your own design system in Flutter.
---

---

## Why use a Design System?
To be able to use images and styled texts and buttons, you must provide a implementation of DesignSystem to Beagle Flutter. You can use it in any default widget. To learn more about how to use the default components library, see the [configuration page]({{< ref path="/resources/customization/beagle-for-flutter/configuration" lang="en" >}}).

## How to configure a Design System?
It's simple to create your own Design System. You just need to:
1. Create a class that implements the `BeagleDesignSystem` contract;
2. Provide images and styles for each method. 

See more details of each one of them below:

### image
This method has the notation `String image(String id)`. It receives the image id that comes from JSON and returns the corresponding local image asset name. See the example:
```dart
final Map<String, String> imageMap = {
  'bus': 'images/bus.png',
  'car': 'images/car.png',
  'person': 'images/person.png',
};

@override
String image(String id) {
  return imageMap[id];
}
```

### buttonStyle
This method has the notation `BeagleButtonStyle buttonStyle(String id)`. It receives the button style id that comes from the JSON and returns the corresponding `BeagleButtonStyle`. See below:

```dart
final Map<String, BeagleButtonStyle> buttonMap = {
  'primaryButton': BeagleButtonStyle(
    androidButtonStyle: ButtonStyle(
      backgroundColor: MaterialStateProperty.all<Color>(Colors.green),
    ),
    iosButtonStyle: BeagleIosButtonStyle(
      color: Colors.green,
    ),
  ),
  'secondaryButton': BeagleButtonStyle(
    androidButtonStyle: ButtonStyle(
      backgroundColor: MaterialStateProperty.all<Color>(Colors.greenAccent),
    ),
    iosButtonStyle: BeagleIosButtonStyle(
      color: Colors.greenAccent,
    ),
  ),
};

@override
BeagleButtonStyle buttonStyle(String id) {
  return buttonMap[id];
}
```

### textStyle
This method has the notation `TextStyle textStyle(String id)`. It receives the text style id that comes from the JSON and returns the corresponding `TextStyle`. Check out an implementation:
```dart
final Map<String, TextStyle> textMap = {
  'h1': TextStyle(
    fontSize: 22,
  ),
  'h2': TextStyle(
    fontSize: 18,
  ),
};

@override
TextStyle textStyle(String id) {
  return textMap[id];
}
```

## Full example
Here is the complete example of a DesignSystem implementation of Beagle Flutter:
```dart
class MyDesignSystem extends BeagleDesignSystem {
  final Map<String, String> imageMap = {
    'bus': 'images/bus.png',
    'car': 'images/car.png',
    'person': 'images/person.png',
  };

  final Map<String, BeagleButtonStyle> buttonMap = {
    'primaryButton': BeagleButtonStyle(
      androidButtonStyle: ButtonStyle(
        backgroundColor: MaterialStateProperty.all<Color>(Colors.green),
      ),
      iosButtonStyle: BeagleIosButtonStyle(
        color: Colors.green,
      ),
    ),
    'secondaryButton': BeagleButtonStyle(
      androidButtonStyle: ButtonStyle(
        backgroundColor: MaterialStateProperty.all<Color>(Colors.greenAccent),
      ),
      iosButtonStyle: BeagleIosButtonStyle(
        color: Colors.greenAccent,
      ),
    ),
  };

  final Map<String, TextStyle> textMap = {
    'h1': TextStyle(
      fontSize: 22,
    ),
    'h2': TextStyle(
      fontSize: 18,
    ),
  };

  @override
  String image(String id) {
    return imageMap[id];
  }

  @override
  BeagleButtonStyle buttonStyle(String id) {
    return buttonMap[id];
  }

  @override
  TextStyle textStyle(String id) {
    return textMap[id];
  }
}
```

## How to use a Design System?
Just like any other configuration in Beagle Flutter,  if you want to use your implementation of a Design System, you need to pass it in the initialization method `BeagleSdk.init`. See below:

```dart
BeagleSdk.init(
  designSystem: MyDesignSystem(),
);
```

And that's it! This is all the configuration needed to create and use a custom design system in Beagle Flutter.
