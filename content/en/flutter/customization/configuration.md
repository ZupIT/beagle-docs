---
title: Configuration
weight: 2
description: In this section, you will find information on how to configure Beagle Flutter.
---

---

## Introduction
The method `BeagleSdk.init` is the entry point to Beagle Flutter and the receiver of all configurations it handles. By default, basic implementations are already provided for some of its parameters, so it's not necessary to configure all of them.

## What is configurable?
These are all the configuration options that Beagle Flutter supports:
1. environment
2. baseUrl
3. httpClient
4. components
5. storage
6. useBeagleHeaders
7. actions
8. strategy
9. navigationControllers
10. designSystem
11. imageDownloader
12. logger
13. operations

Check out below how to configure each one:

### 1. environment
This attribute informs Beagle about the current build status of the application. This property is used in `BeagleUndefinedWidget`.
- It shows a Text with `Undefined Component` description when the `environment` is `BeagleEnvironment.debug`.
- It shows a `SizedBox.shrink` when `BeagleEnvironment.production`.

The default is `BeagleEnvironment.debug`.
```dart
enum BeagleEnvironment {
  /// The debug mode has much more information available so that the debugging
  /// software can further help the programmer to debug their code.
  debug,

  /// Production mode provides more information about the software.
  production,
}
```

### 2. baseUrl
It informs the base URL used on Beagle in the application.

The requests made by `BeagleWidget` and navigation actions uses the `baseUrl` property to build their paths. The default is empty string. In the example below, the resulting request will be `http://yourBffBaseUrl.io/test`:
```dart
BeagleSdk.init(
  baseUrl: 'http://yourBffBaseUrl.io',
);

BeagleWidget(
  screenRequest: BeagleScreenRequest('test'),
);
```

### 3. httpClient
A interface that provides a client so Beagle can make the requests.

The default is `DefaultHttpClient`. This is a key component to Beagle, because it's used in every request. See below the `HttpClient` contract:
```dart
abstract class HttpClient {
  Future<Response> sendRequest(BeagleRequest req);
}
```

### 4. components
Provides a struct where the key is the `_beagleComponent_` property in JSON and the value is the widget that Beagle should render.

If you want to use a list of common widgets with basic implementation:
- Use the `beagle_components` package in your project.

The default is empty map. Here is a example of a component declaration:
```dart
Map<String, ComponentBuilder> myComponent = {
  'custom:loading': (element, _, __) {
    return Center(
      key: element.getKey(),
      child: const Text('My Component'),
    );
  }
};
```

### 5. storage
It handles the cache for Beagle's requests. The default is `DefaultStorage`.

To avoid vulnerability issues, the default implementation stores information only in the memory, see below:
```dart
class DefaultStorage implements Storage {
  Map<String, String> storage = {};

  @override
  Future<void> clear() async {
    storage.clear();
  }

  @override
  Future<String> getItem(String key) async {
    return storage[key];
  }

  @override
  Future<void> removeItem(String key) async {
    storage.remove(key);
  }

  @override
  Future<void> setItem(String key, String value) async {
    storage[key] = value;
  }
}
```

### 6. useBeagleHeaders
Whether or not to send specific Beagle headers in the requests to fetch a widget. The default is `true`.

### 7. actions
This is the map of custom actions. The key must be a `_beagleAction_` identifier in the JSON and the value must be the action handler. The default is `defaultActions` map. See below a declaration of this property:
```dart
Map<String, ActionHandler> myAction = {
  'custom:log': ({action, _, __, ___}) {
    debugPrint(action.getAttributeValue('message'));
  }
};
```

### 8. strategy
This property tells Beagle how to handle the cache requests. There are seven caching strategies that Beagle implements. The default is `BeagleNetworkStrategy.beagleWithFallbackToCache`. Check out below all of them:
```dart
enum BeagleNetworkStrategy {
  beagleCacheOnly,
  beagleWithFallbackToCache,
  networkWithFallbackToCache,
  cacheWithFallbackToNetwork,
  cacheOnly,
  networkOnly,
  cacheFirst,
}
```

### 9. navigationControllers
These are the options for visual feedback when navigating from a widget to another.

To set the default options:
- Use `isDefault: true` in the navigation controller.

The default is an empty map. Check out below the declaration of a custom `NavigationController`: 
```dart
Map<String, NavigationController> myController = {
  'general': NavigationController(
    isDefault: true,
    loadingComponent: 'custom:loading',
  ),
};
```

### 10. designSystem
An interface that provides a design system to Beagle components. This one makes available to Beagle images and styles to buttons and texts in Beagle. Default is `DefaultEmptyDesignSystem`, that doesn't return any value. Check out the `BeagleDesignSystem` contract:
```dart
abstract class BeagleDesignSystem {

  String image(String id);

  BeagleButtonStyle buttonStyle(String id);

  TextStyle textStyle(String id);
}
```

### 11. imageDownloader
An interface that provides image resources from network. This must implement the `downloadImage` method that receives the image URL and returns a `Future<Uint8List>` as the image. The default is `DefaultBeagleImageDownloader`.
```dart
class DefaultBeagleImageDownloader implements BeagleImageDownloader {
  DefaultBeagleImageDownloader({
    @required this.httpClient,
  }) : assert(httpClient != null);

  final HttpClient httpClient;

  @override
  Future<Uint8List> downloadImage(String url) async {
    final request = BeagleRequest(url);
    final response = await httpClient.sendRequest(request);

    if (response.status != HttpStatus.ok) {
      throw BeagleImageDownloaderException(
          statusCode: response.status, url: request.url);
    }

    final bytes = response.bodyBytes;
    if (bytes.lengthInBytes == 0) {
      throw Exception('Image is an empty file: $url');
    }

    return bytes;
  }
}
```

### 12. logger
An interface that provides logger for Beagle to use in the application. The default is `DefaultEmptyLogger` that doesn't log any information. See the `BeagleLogger` contract:
```dart
abstract class BeagleLogger {
  void warning(String message);

  void error(String message);

  void errorWithException(String message, Exception exception);

  void info(String message);
}
```

### 13. operations
A map of custom operations that can be used to extend the capability of Beagle's expressions and they are called like functions, e.g. `@{sum(1, 2)}`. The default is empty map.
