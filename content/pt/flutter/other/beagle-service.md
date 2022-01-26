---
title: BeagleService
weight: 2
description: In this section, you will find information on how to configure Beagle Flutter through the BeagleService. You'll also see how to get a reference to the current BeagleService.
---

---

# Introduction
The class BeagleService is the entry point to Beagle Flutter and where we setup all of its configurations. By default, basic implementations are already provided for some of its parameters, so it's not necessary to set them all.

# What is configurable?
These are all the configuration options supported by Beagle Flutter:
1. baseUrl (required)
2. components (required)
3. actions
4. operations
5. environment
6. httpClient
7. viewClient
8. imageDownloader
9. navigationControllers and defaultNavigationController
10. logger
11. urlBuilder
12. analyticsProvider
13. enableStyles

In the sections below, you'll learn how to set each one up.

## 1. baseUrl
It informs the base URL to use when fetching views from the backend. Every time a relative URL is provided, it is appended to the base URL to form the complete address. Beagle considers every path starting with "/" to be relative, all others are considered absolute and don't use the base URL.

In the example below, the resulting request will be `https://usebeagle.io/start/welcome`:
```dart
final beagleService = BeagleService(
  baseUrl: 'https://usebeagle.io/start',
  // ...
);

void main() {
  runApp(BeagleProvider(
    beagle: beagleService,
    child: ElevatedButton(
      onPressed: () => openBeagleScreen(route: RemoteView('/welcome'), context: context),
      child: Text('Start beagle flow'),
    ),
  ));
}
```

## 2. components
Provides the map of components to the application. Beagle Flutter, different than the other Beagle libs, comes with no components. For this reason, this property is required, Beagle cannot work without a basic set of components.

The Beagle default components can be used by depending on the package "beagle_components":

```dart
import 'package:beagle_components/beagle_components.dart';

final beagleService = BeagleService(
  components: defaultComponents,
  // ...
);
```

For creating your own components, check the [components article]({{< ref path="/flutter/extensions/components" lang="en" >}}).

## 3. actions
This is the map of actions. Beagle already provides a set of default actions, so this is optional. If you're using a library of components, like "beagle_components", it's important to provide its actions to Beagle.

```dart
import 'package:beagle_components/beagle_components.dart';

final beagleService = BeagleService(
  components: defaultComponents,
  actions: defaultActions,
  // ...
);
```

For creating your own actions, check the [actions article]({{< ref path="/flutter/extensions/actions" lang="en" >}}).

## 4. operations
Beagle has a set of simple functions called operations. These functions can be called from inside an expression, in the JSON. e.g. `@{sum(1, 2)}` will result in `3`. [See here]({{< ref path="/api/operations/overview" lang="en" >}}) a list of all available operations.

The operations in the BeagleService can be used to extend this set of functions. It's a map of strings to functions, where the key is the name of the operation and the value is the function itself. To know more, check this [article]({{< ref path="/flutter/extensions/operations" lang="en" >}}).

## 5. environment
This attribute informs Beagle about the current build status of the application. This property is used by the `BeagleUndefinedWidget`, which:
- shows a Text with `Undefined Component` description when the `environment` is `BeagleEnvironment.debug`;
- shows a `SizedBox.shrink` when the `environment` is `BeagleEnvironment.production`.

The default value for the environment is `BeagleEnvironment.debug`.

## 6. httpClient
The service used by Beagle to make requests. Every request made by Beagle will go through the HttpClient. It has a default implementation that simply makes the requests as they come from the JSONs. If you need more complex behavior, like authentication or additional headers, replacing the default implementation of the httpClient is the way to go.

The httpClient must be an implementation of the interface HttpClient, which has the following single method:

```dart
Future<Response> sendRequest(BeagleRequest req);
```

Where `Response` is an object containing: `int status`, `String body`, `Map<String, String> headers` and `Uint8List bodyBytes`.
And `BeagleRequest` is an object containing: `String url`, `BeagleHttpMethod method`, `Map<String, String> headers` and `String body`.

For more information about the HttpClient and how to write your own implementation, please check [this article]({{< ref path="/flutter/network/http-client" lang="en" >}}).

## 7. viewClient
The viewClient is responsible for fetching and delivering server driven pages. It has a single method called `fetch` and the default implementation creates the requests and send them to the HttpClient, transforming the response into a `BeagleUIElement`. The default implementation of the ViewClient also processes any `preFetch` in the navigation actions of the JSON.

A good example of a situation where the viewClient needs to be replaced is a cache system. This new implementation of the View client would store the views in disk and check if they exist before sending the request to the HttpClient.

For more information on how to create a custom ViewClient, please check [this article]({{< ref path="/flutter/network/view-client" lang="en" >}}).

## 8. imageDownloader
Similar to the ViewClient, the ImageDownloader is also responsible for creating requests for the HttpClient and processing its responses, the only difference is that the ViewClient does it for server driven views (JSONs) and the ImageDownloader does it for images.

The default ImageDownloader is very simple, it just creates the request, pass it to the HttpClient and transform the response into a `Uint8List`. An interesting application of a custom ImageDownloader would be caching. The custom ImageDownloader would save the images in disk and use the stored value instead of making the request to the HttpClient whenever possible.

For more information on how to customize the ImageDownloader, please read the [related article]({{< ref path="/flutter/network/image-downloader" lang="en" >}}).

## 9. navigationControllers and defaultNavigationController
The navigation controllers are responsible for implementing the behavior of the loading, error and success events of the navigation between Beagle pages.

If not set, Beagle will use the `DefaultNavigationController`, which implements the following behavior:

- **onLoading**: render a Beagle UI tree with a single component called `custom:loading`.
- **onError**: render a Beagle UI tree with a single component called `custom:error`.
- **onSuccess**: render a Beagle UI tree with the UI tree returned from the backend.

This behavior can be customized by implementing your own NavigationController. You can have multiple navigation controllers in a single application, one for each section, for instance. Beagle, from the backend, can tell which NavigationController must be used for the next set of screens.

To know more about navigation controllers and how to set them up, please read [this article]({{< ref path="/flutter/navigation/navigation-controllers" lang="en" >}}).

## 10. logger
Beagle produces many logs, but how they are showed is up to you. The default logging mechanism (`DefaultLogger`) prints all messages to the console with the name "BeagleSDK". You can customize the logger to completely disable it, to send them to a backend service or even to show them in a different way in the console.

To know more about logging and how to customize it, please read the [related article]({{< ref path="/flutter/other/logger" lang="en" >}}).

## 11. urlBuilder
With the urlBuilder you can change the default logic of Beagle when building URLs given a path:

```dart
String build(String path) {
  // ...
}
```

The default behavior of Beagle is to check if the path starts with "/". If yes, we consider it to be relative and return the `baseUrl` appended with the path (`"$baseUrl$path"`). Otherwise, we return the path, without combining it with the `baseUrl`.

This behavior is fine for most applications, but if you need something different, it suffices to extend the class `UrlBuilder` and provide your implementation to the BeagleService.

## 12. analyticsProvider
The `analyticsProvider` must be set whenever you want to add analytics capabilities based on the user interactions with the UI built by Beagle.

There are two types of analytics records generated by Beagle: screen records and action records. To know more about them and how to set up the analytics service, please check [this article]({{< ref path="/flutter/other/analytics" lang="en" >}}).

## 13. enableStyles
This is a simple boolean option to enable or disable the automatic application of styles from Beagle. This needs to be true in order to the attribute "style", of Beagle, to work. It must also be true if you need all components of the library beagle_components to work.

Setting enableStyles to false is useful when the application will develop all of its components and layout engine. To know more about this, check [this article]({{< ref path="/flutter/layout/styles" lang="en" >}}).

# Providing a BeagleService to the application
After instantiating the BeagleService, you must provide it to the application. To do this, wrap your app code in a `BeagleProvider`:

```dart
import 'package:beagle/beagle.dart';

final beagleService = BeagleService(
  // ...
)

void main() {
  runApp(BeagleProvider(
    beagle: beagleService,
    child: // ...
  ));
}
```

We recommend declaring the BeagleProvider as soon as possible. Be careful not to put it inside a navigator, because it might make it unavailable when the screen changes, which is not what we want.

# Accessing the BeagleService from a widget
The BeagleService holds a reference to every other service that might be needed by any Beagle module, including the view client, the logger and the http client. To access it from inside a widget, you can use the mixin `BeagleConsumer`.

The `BeagleConsumer` must be applied to a StatefulWidget. It is important to use a StatefulWidget when using the BeagleService so Flutter doesn't need to look for it on every render. But if you really need to use it on a common Widget, you can call the utility method `findBeagleService`.

See below the implementation of the LazyComponent, which uses the view client:

```dart
class BeagleLazyComponent extends StatefulWidget {
  const BeagleLazyComponent({
    Key? key,
    required this.path,
    required this.beagleId,
    required this.view,
    this.initialState,
    this.child,
  }) : super(key: key);

  // ...

  @override
  _BeagleLazyComponent createState() => _BeagleLazyComponent();
}

class _BeagleLazyComponent extends State<BeagleLazyComponent> with AfterLayoutMixin<BeagleLazyComponent>, BeagleConsumer {
  Future<void> _fetchLazyView() async {
    try {
      final component = await beagle.viewClient.fetch(RemoteView(widget.path));
      widget.view.getRenderer().doFullRender(component, widget.beagleId, TreeUpdateMode.replace);
    } catch (err) {
      beagle.logger.error('BeagleLazyComponent: error: $err');
    }
  }

  @override
  void afterFirstLayout(BuildContext context) {
    if (widget.initialState != null) {
      widget.view.getRenderer().doFullRender(widget.initialState!, widget.beagleId, TreeUpdateMode.replace);
    }
    _fetchLazyView();
  }

  @override
  Widget buildBeagleWidget(BuildContext context) {
    return widget.child ?? Container();
  }
}
```

As you can see, as soon as we use the mixin `BeagleConsumer`, we get access to the variable `beagle`, which is the reference to the current BeagleService.

It is important to notice that `beagle` is only available on and after the init phase of the state, i.e. it cannot be used in the constructor.

When a BeagleConsumer is not a descendant of BeagleProvider, an exception is thrown.

# Accessing the BeagleService from an action handler
The BeagleService can be accessed from the BuildContext as long as the context descends from a BeagleProvider. The function that finds the BeagleService given a BuildContext is `findBeagleService`. See the example below of an action that logs a message.

```dart
import 'package:beagle/beagle.dart';

final Map<String, ActionHandler> actions = {
  'custom:log': ({required action, required element, required view, required context}) {
    findBeagleService(context).logger.info(action.getAttributeValue('message'));
  },
  // ...
}
```
