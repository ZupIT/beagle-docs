---
title: Flutter
weight: 29
description: >-
  This section shows the initial walkthrough to use the Beagle library in Flutter projects.
---

---

## **Usage**
It's quite simple to configure and use the Beagle Flutter library. Follow the steps bellow to be able to use it.

### 1. The configuration
All the configuration necessary for Beagle to work is centered on the parameters of the `BeagleSdk.init` startup 
method. This params tells everything Beagle needs to know to render your widgets. Here we show only the basic options 
`baseUrl` and `components`. For a list of all the available options, please check the 
[documentation for the Beagle Initialization]({{< ref path="/resources/customization/beagle-for-flutter/configuration" lang="en" >}}).

### 2. Starting Beagle
You can start Beagle at any point of the application. For this guide, we're going to start Beagle as soon as the app 
starts. For this, open the file `lib/main.dart`, import `package:beagle/beagle.dart` and, if you're using the 
`beagle_components` package, import `package:beagle_components/beagle_components.dart` as well. After that, 
inside the main function, before rendering anything, call `BeagleSdk.init` passing the parameter previously informed. 
See the example below:

```dart
import 'package:beagle/beagle.dart';
import 'package:beagle_components/beagle_components.dart';

void main() {
  BeagleSdk.init(
    baseUrl: 'http://yourBffBaseUrl.io',
    components: defaultComponents,
  );
  // runApp();
}
```

### 3. Rendering a remote widget
To render a Beagle Widget, you must use the component `BeagleWidget` which is provided by the Beagle Library. This widget
requires a single parameter, the `screenRequest`, which specifies the request to fetch the first server-driven view of
the flow. See the example below:

```dart
import 'package:beagle/beagle.dart';
import 'package:beagle_components/beagle_components.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

void main() {
  BeagleSdk.init(
    baseUrl: 'http://yourBffBaseUrl.io',
    components: defaultComponents,
  );
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

Above, we used a simple Material App to render our first server-driven widget! The important part here is the component 
`BeagleWidget`, because it includes a remote view in the layout.

The `BeagleWidget` accepts other optional parameters, and so does the `BeagleScreenRequest`. To check them, please visit
the [BeagleWidget documentation page]({{< ref path="/resources/customization/beagle-for-flutter/beagle-widget" lang="en" >}}).

{{% alert color="success" %}}
Congrats, you have finished your first Beagle Screen!
{{% /alert %}}

## Continue reading

- [Configuration options]({{< ref path="/resources/customization/beagle-for-flutter/configuration" lang="en" >}}): learn how to setup every property of Beagle.
- [The BeagleWidget]({{< ref path="/resources/customization/beagle-for-flutter/beagle-widget" lang="en" >}}): the beagle widget lets you customize many aspects of the request and visual cues to the user.
- [Accessing the localhost]({{< ref path="/resources/customization/beagle-for-flutter/localhost" lang="en" >}}): learn how to use a backend that serves widgets from the localhost.
- [Beagle services]({{< ref path="/resources/customization/beagle-for-flutter/services" lang="en" >}}): customize services like the logger, storage, http client and image downloader.
- [Design system]({{< ref path="/resources/customization/beagle-for-flutter/design-system" lang="en" >}}): register local images (mobileId) and styles for your components.
- [Customization]({{< ref path="/resources/customization/beagle-for-flutter/customization" lang="en" >}}): create your own components, actions and operations.
- [Global Context]({{< ref path="/api/context/global-context" lang="en" >}}): learn how to manipulate the global context in Beagle Flutter.
- [Analytics]({{< ref path="/resources/analytics" lang="en" >}}): gives information of every action executed, such as navigation data.
- [Renderer]({{< ref path="/resources/customization/beagle-for-web/advanced-topics/renderer-api" lang="en" >}}): sometimes it might be necessary to interact with Beagle while rendering a component
or executing an action. This article shows how to use the Renderer API to achieve complex behaviors.

👉 If you wish to know the current development status of Beagle Flutter, check it
[here]({{< ref path="/resources/customization/beagle-for-flutter/development" lang="en" >}}).
Contributions are welcomed!
