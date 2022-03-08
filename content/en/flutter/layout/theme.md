---
title: Beagle Theme
weight: 3
description: >-
 In this section, you will find information on how to create and use your own theme for the Beagle components in Flutter.
---

---

{{% alert color="warning" %}}
Attention: this article talks about the `styleId`. Despite the similar name, `styleId` and `style` are very different properties. While the latest uses a well defined set of styling properties set by the backend and applies to every component, the first is only a string and works for specific components of the package beagle_components. If you want to learn how to set up the styles instead, go to [this page]({{< ref path="/flutter/layout/styles" lang="en" >}}).
{{% /alert %}}

# What is the BeagleTheme
The `BeagleTheme` is a configuration class for the default components of Beagle (package beagle_components). It is responsible for creating themes for the components Button, Text and Screen (navigation bar) and also for providing local image resources for the component Image.

A theme is a set of styles that can be referenced by the property `styleId` of the component. A button that comes with the `styleId` "primary", for instance, will use the ButtonStyle returned by `beagleTheme.buttonStyle('primary')`.

The local image resources are strings with the paths to every image that can be accessed by the server driven view with the parameter `mobileId` of the Image component. If an image comes with the `mobileId` "logo", for instance, it would use the image path returned by `beagleTheme.image('logo')`.

## How to use the BeagleTheme?

The BeagleTheme is not a feature of the core Beagle library, but instead, it's from the package beagle_components. For this reason, differently than most configuration options, it doesn't do into the BeagleService. The BeagleTheme must be provided to the default components via the widget `BeagleThemeProvider`.

The `BeagleThemeProvider` must wrap the application to prevent cases where a navigation would make it unavailable. See the example below:

1. Create a class that implements the `BeagleTheme` interface;
2. Provide an instance of the class to the `BeagleThemeProvider`, that should wrap your application.

```dart
void main() {
  runApp(BeagleProvider(
    beagle: beagleService,
    child: BeagleThemeProvider(
      theme: MyTheme(),
      child: MyApp()
    ),
  ));
}
```

## Local images
The method `image` receives the image id that comes from the JSON (`mobileId`) and returns the corresponding local image asset path. Check out the following example:

```dart
class MyTheme extends BeagleTheme {
  final Map<String, String> imageMap = {
    'bus': 'images/bus.png',
    'car': 'images/car.png',
    'person': 'images/person.png',
  };

  @override
  String image(String id) {
    return imageMap[id] ?? '';
  }

  // ...
}
```

## Button style
The method `buttonStyle` receives the `styleId` that comes from the JSON and returns the corresponding `ButtonStyle`. Example:

```dart
class MyTheme extends BeagleTheme {
  final Map<String, ButtonStyle> buttonStyles = {
    'primary': ButtonStyle(
      backgroundColor: MaterialStateProperty.all<Color>(Colors.green),
      foregroundColor: MaterialStateProperty.all(HexColor(Colors.black)),
    ),
    'secondary': ButtonStyle(
      backgroundColor: MaterialStateProperty.all<Color>(Colors.greenAccent),
      foregroundColor: MaterialStateProperty.all(HexColor(Colors.black)),
    ),
  };

  @override
  ButtonStyle buttonStyle(String id) {
    return buttonMap[id] ?? ButtonStyle();
  }

  // ...
}
```

## Text style
The method `textStyle` receives the `styleId` that comes from the JSON and returns the corresponding `TextStyle`. Check out an implementation:

```dart
class MyTheme extends BeagleTheme {
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
    return textMap[id] ?? TextStyle();
  }

  // ...
}
```
