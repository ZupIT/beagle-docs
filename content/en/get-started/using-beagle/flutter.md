---
title: Flutter
weight: 29
description: >-
  This section shows the initial walkthrough to use the Beagle library in React Native projects.
---

---

## **Configuration**
We currently don't have a script to automatically setup your environment, but don't be discouraged, it's quite simple.

### 1. The main configuration file
1. Under `lib`, create a new directory called `beagle`.
2. Under `lib/beagle`, create a new file called `config.dart`.
3. Write the following code to `config.dart`:

```dart
import 'package:beagle/beagle.dart';
import 'package:flutter/foundation.dart';
import 'package:beagle_components/beagle_components.dart';

void startBeagle() {
  BeagleSdk.init(
    baseUrl: 'https://usebeagle.io/start',
    environment: kDebugMode ? BeagleEnvironment.debug : BeagleEnvironment.production;
    components: defaultComponents,
  );
}
```

This file tells everything Beagle needs to know to render your views. Here we show only the basic options, for a list
of available options please check the [documentation for the BeagleConfig]({{< ref path="/resources/customization/flutter/configuration" lang="en" >}}).

### 2. Starting Beagle
You can start Beagle wherever it feels more appropriate for your use. For this guide, we're going to start Beagle as
soon as the app starts, for this, open the file `lib/main.dart`, import `lib/beagle/config.dart` and, inside the main
function, before rendering  anything, call `startBeagle()`. See the example below:

```dart
import 'package:sample/app_beagle_config.dart';
// ...
void main() {
  startBeagle();
  // ...
}
```

Above, we imported `package:sample/app_beagle_config.dart` because `sample` is the name of our package. You'll need to
change this to the name of your own package. You can find this name in your `pubscpec.yaml` under the property `name`.

### 3. Rendering a remote view
To render a Beagle View, you must use the component `BeagleWidget` which is provided by the Beagle Library. This widget
requires a single parameter, the `screenRequest`, which specifies the request to fetch the first server driven view of
the flow. See the example below:

```dart
import 'package:beagle/beagle.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:sample/config.dart';

void main() {
  startBeagle();
  runApp(const BeagleSampleApp());
}

class BeagleSampleApp extends StatelessWidget {
  const BeagleSampleApp({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Beagle Sample',
      home: Scaffold(
        body: BeagleWidget(
          screenRequest: BeagleScreenRequest('welcome'),
        ),
      ),
    );
  }
}
```

Above, we used a simple Material App to render our first server driven view! You can use whatever you need, the
important part here is the component `BeagleWidget`, this is what includes a remote view in the layout.

The `BeagleWidget` accepts other optional parameters, and so does the `BeagleScreenRequest`. To check them, please visit
the [BeagleWidget documentation page]({{< ref path="/resources/customization/flutter/beagle-widget" lang="en" >}}).

{{% alert color="success" %}}
Congrats, you have finished your first Beagle Screen!
{{% /alert %}}

## Continue reading

- [Configuration options]({{< ref path="/resources/customization/beagle-for-flutter/configuartion" lang="en" >}}): learn how to setup every property of Beagle.
- [The Beagle widget]({{< ref path="/resources/customization/beagle-for-flutter/beagle-widget" lang="en" >}}): the beagle widget lets you customize many aspects of the request and visual cues to the user.
- [Accessing the localhost]({{< ref path="/resources/customization/beagle-for-flutter/localhost" lang="en" >}}): learn how to use a backend that serves views from the localhost.
- [Beagle services]({{< ref path="/resources/customization/beagle-for-flutter/services" lang="en" >}}): customize services like the logger, storage, http client and image downloader.
- [Design system]({{< ref path="/resources/customization/beagle-for-flutter/design-system" lang="en" >}}): register local images (mobileId) and styles for your components.
- [Customization]({{< ref path="/resources/customization/beagle-for-flutter/customization" lang="en" >}}): learn how to register your custom components, actions and operations.
- [Global Context]({{< ref path="/api/global-context" lang="en" >}}): learn how to manipulate the global context in Beagle Flutter.
- [Analytics]({{< ref path="/resources/analytics" lang="en" >}}): observe every action executed and navigation performed.
- [Renderer]({{< ref path="/resources/customization/beagle-for-web/advanced-topics/renderer-api" lang="en" >}}): sometimes it might be necessary to interact with Beagle while rendering a component
or executing an action. This article shows how to use the Renderer API to achieve complex behaviors.

👉 If you wish to know the current development status of Beagle Flutter, check it
[here]({{< ref path="/resources/customization/flutter/development" lang="en" >}}).
Contributions are welcomed!
