---
title: First steps
weight: 2
description: >-
  In this section, you will find how to install Beagle in your Flutter application and the initial step-by-step for using the Beagle library in a Flutter project.
---

---

# Installation
Follow the steps to install:

1. Open the file `pubspec.yaml` in the root of your project;
2. Under `dependencies`, add `beagle: ^0.9.0-alpha`, or the most recent version;
3. Add `beagle_components: ^0.9.0-alpha`. You can omit this dependency if you're familiar with Beagle and won't use any
of the default components;
4. In your IDE (Android Studio or Visual Studio Code), click `pub get`. Or, from the terminal, type `flutter pub get`.

{{% alert color="success" %}}
Well done! The library was installed. Continue the configuration in the section [**how to use Beagle on Flutter.**]({{< ref path="/get-started/using-beagle/flutter" lang="en" >}})
{{% /alert %}}

# **Starting configuration**

## Step 1. Configure Beagle
All the configuration necessary for Beagle to work is centered on the parameters of the `BeagleSdk.init` startup method. These params tell everything Beagle needs to know how to render your widgets. Here you will see only the basic options `baseUrl` and `components`. For a list of all the available options, please check the 
[Beagle Initialization section]({{< ref path="/flutter/customization/configuration" lang="en" >}}).

## Step 2. Start Beagle
You can start Beagle at any point of the application. In this example, we will start Beagle as soon as the app 
starts.
To do that:
- Open the file `lib/main.dart`;
- Import `package:beagle/beagle.dart`;
- If you're using the `beagle_components` package, import `package:beagle_components/beagle_components.dart` as well;
- Inside the main function, before rendering anything, call `BeagleSdk.init` passing the parameter previously informed. 
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

## Step 3. Render a remote widget
You must use the component `BeagleWidget` which is provided by the Beagle Library. This widget requires a single parameter, the `screenRequest`, which specifies the request to fetch the first server-driven view of the flow. See the example below:

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

The example above used a simple Material App to render the server-driven widget. The component `BeagleWidget` includes a remote view in the layout.

The `BeagleWidget` accepts other optional parameters, just like the `BeagleScreenRequest`. If you want to check them, please visit the [BeagleWidget section]({{< ref path="/flutter/customization/beagle-widget" lang="en" >}}).

{{% alert color="success" %}}
Congrats, you have finished your first Beagle Screen!
{{% /alert %}}

## Continue reading

Check out more information in the following sections:

- [Configuration options]({{< ref path="/flutter/customization/configuration" lang="en" >}}): Learn how to setup every property of Beagle.
- [The BeagleWidget]({{< ref path="/flutter/customization/beagle-widget" lang="en" >}}): BeagleWidget let you customize many aspects of the request and visual cues to the user.
- [Accessing the localhost]({{< ref path="/flutter/customization/localhost" lang="en" >}}): Learn how to use a backend that serves widgets from localhost.
- [Beagle services]({{< ref path="/flutter/services" lang="en" >}}): Customize services like the logger, storage, http client and image downloader.
- [Design system]({{< ref path="/flutter/customization/design-system" lang="en" >}}): Register local images and styles for your components.
- [Customization]({{< ref path="/flutter/customization/" lang="en" >}}): Create your own components, actions and operations.
- [Global Context]({{< ref path="/api/context/global-context" lang="en" >}}): Learn how to manipulate the global context in Beagle Flutter.
- [Analytics]({{< ref path="/resources/analytics" lang="en" >}}): It gives information of every action executed, such as navigation data.
- [Renderer]({{< ref path="/web/commons/advanced-topics/rendering" lang="en" >}}): It might be necessary to interact with Beagle while rendering a component or executing an action. This article shows how to use the Renderer API to achieve complex behaviors.

👉 If you want to know the current development status of Beagle Flutter, check it
[in the Resources section]({{< ref path="/flutter/customization/development" lang="en" >}}).
Contributions are welcomed!
