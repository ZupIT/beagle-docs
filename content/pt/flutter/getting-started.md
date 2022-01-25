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
2. Under `dependencies`, add `beagle: ˆ2.0.0`, or the most recent version;
3. Add `beagle_components: ^2.0.0`. You can omit this dependency if you're familiar with Beagle and won't use any
of the default components;
4. In your IDE (Android Studio or Visual Studio Code), click `pub get`. Or, from the terminal, type `flutter pub get`.

# Configuration and start up

## Step 1. Create the BeagleService
In order to work, Beagle needs and instance of the class BeagleService, which can be instantiated as follows:

```dart
import 'package:beagle/beagle.dart';
import 'package:beagle_components/beagle_components.dart';

final beagleService = BeagleService(
  baseUrl: 'https://usebeagle.io/start',
  components: defaultComponents,
  actions: defaultActions,
);
```

The `baseUrl` is the endpoint that will deliver the JSONs representing the UI, i.e. the Backend For the Frontend (BFF). The parameter `components` is a map of the components (widgets) to be made available for Beagle. If Beagle uses a "custom:button", for instance, this map must have a key "custom:button" linked to the corresponding widget. The parameter `actions` is a map of additional actions to be added to Beagle, in this example we add all actions that come with the default components package. There must be a key in this map for every action used by Beagle.

`baseUrl` and `components` are the only two required properties when instantiating the Beagle Service, but many aspects of the Server Driven UI behavior can be customized through this configuration. For a list of all the available options, please check the 
[Beagle Initialization section]({{< ref path="/flutter/other/beagle-service" lang="en" >}}).

## Step 2. Provide the BeagleService
After creating the BeagleService, we need to tell Flutter we want to use it for all descending elements. The widget `BeagleProvider` is the one responsible for this, it accepts the BeagleService and a child, which is the app itself.

```dart
import 'package:beagle/beagle.dart';

void main() {
  runApp(BeagleProvider(
    beagle: beagleService,
    child: MaterialApp(
      title: 'Beagle Sample',
      theme: ThemeData(
        visualDensity: VisualDensity.adaptivePlatformDensity,
        indicatorColor: Colors.white,
        appBarTheme: AppBarTheme(
          elevation: 0,
        ),
      ),
      home: BeagleSampleApp()
    )
  ));
}
```

We recommend declaring the BeagleProvider as soon as possible. Be careful not to put it inside a navigator, because it might make it unavailable when the screen changes, which is not what we want.

## Step 3. Start a Beagle flow
To start a Beagle flow (set of screens provided by the backend), you need to use the function `openBeagleScreen`, made available by the core Beagle Library. See the example below:

```dart
class BeagleSampleApp extends StatelessWidget {
  const BeagleSampleApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
<<<<<<< HEAD
    return Scaffold(
      body: Center(
        child: ElevatedButton(
          onPressed: () => openBeagleScreen(route: RemoteView('/components'), context: context),
          child: Text('Start beagle flow'),
=======
    return MaterialApp(
      title: 'Beagle Sample',
      home: Scaffold(
        body: BeagleWidget(
          ScreenRequest: BeagleScreenRequest('welcome'),
>>>>>>> 4839e5bfbe2218ff3ffeedac88f2dc22342615db
        ),
      ),
    );
  }
}
```

The function `openBeagleScreen` can be further customized. If you want to check the additional properties, please visit the [openBeagleScreen section]({{< ref path="/flutter/navigation/open-beagle-screen" lang="en" >}}).

{{% alert color="success" %}}
Congrats, you have finished your first Beagle Screen!
{{% /alert %}}

## Continue reading
A good idea to check every feature of Beagle Flutter is to read the page ["BeagleService"]({{< ref path="/flutter/other/beagle-service" lang="en" >}}). There you'll find summarized descriptions of everything that can be set up for the BeagleService and links to the full documentation of each feature.

The other important features that are not included in the "BeagleService" page are:

- [**openBeagleScreen**]({{< ref path="/flutter/navigation/open-beagle-screen" lang="en" >}}): learn more about that method that starts a Beagle flow.
- [**styles**]({{< ref path="/flutter/layout/styles" lang="en" >}}): check how the Beagle Styles work in Beagle Flutter and how to customize or completely disabled it.
- [**localhost**]({{< ref path="/flutter/network/localhost" lang="en" >}}): learn how to execute Beagle Flutter with a server running in the localhost.
- [**BeagleView**]({{< ref path="/flutter/other/beagle-view" lang="en" >}}): learn how to manipulate the BeagleView and trigger new renders.
