---
title: Configuration
weight: 1
description: You will find here information of how to configure Beagle Flutter.
---

---

## Introduction
The method `BeagleSdk.init` is the entry point to Beagle Flutter and the receiver of all configuration it handles. By default, basic implementations are already provided for some of its parameters, it's not necessary to configure all of them.

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
Attribute responsible for informing Beagle about the current build status of the application. This property is used in `BeagleUndefinedWidget` and it shows a Text with `Undefined Component` description when the `environment` is `BeagleEnvironment.debug` and shows a `SizedBox.shrink` when `BeagleEnvironment.production`. Default is `BeagleEnvironment.debug`.
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
Informs the base URL used in Beagle in the application. Requests made by `BeagleWidget` and navigation actions uses the `baseUrl` property to build their paths. Default is empty string. In the example below, the resulting request will be `http://localhost:8080/test`:
```dart
BeagleSdk.init(
  baseUrl: 'http://localhost:8080',
);

BeagleWidget(
  screenRequest: BeagleScreenRequest('test'),
);
```

### 3. httpClient
Interface that provides a client to Beagle make the requests. Default is `DefaultHttpClient`. This is a key component to Beagle, because it's used in every request even it's implementation is quite simple. Below is the `HttpClient` contract:
```dart
abstract class HttpClient {
  Future<Response> sendRequest(BeagleRequest req);
}
```

### 4. components
This provides a struct where the key is the `_beagleComponent_` property in JSON and the value is the widget that Beagle should render. To use a list of common widgets with basic implementation, use the `beagle_components` package in your project. Default is empty map. Here is a example of a component declaration:
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
It handles the cache for requests made by Beagle. Default is `DefaultStorage`. To avoid vulnerability issues, the default implementation stores information only in memory, see below:
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
Whether or not to send specific beagle headers in requests to fetch a widget. Default is `true`.

### 7. actions
The map of custom actions. The key must be `_beagleAction_` identifier in JSON and the value must be the action handler. Default is `defaultActions` map. Below is a declaration of this property:
```dart
Map<String, ActionHandler> myAction = {
  'custom:log': ({action, _, __, ___}) {
    debugPrint(action.getAttributeValue('message'));
  }
};
```

### 8. strategy
This property tells Beagle how to handle the requests cache. There are seven caching strategies that Beagle implements. Default is `BeagleNetworkStrategy.beagleWithFallbackToCache`. Below are all of them:
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
Options for the visual feedback when navigating from a widget to another. To set the default options, use `default: true` in the navigation controller. Default is empty map. Below is the declaration of a custom `NavigationController`: 
```dart
Map<String, NavigationController> myController = {
  'general': NavigationController(
    isDefault: true,
    loadingComponent: 'custom:loading',
  ),
};
```

### 10. designSystem
Interface that provides design system to Beagle components. This makes available to Beagle images and styles to buttons and texts. Default is `DefaultEmptyDesignSystem` that doesn't return any value. Here is the `BeagleDesignSystem` contract:
```dart
abstract class BeagleDesignSystem {

  String image(String id);

  BeagleButtonStyle buttonStyle(String id);

  TextStyle textStyle(String id);
}
```

### 11. imageDownloader
Interface that provides image resource from network. This must implement the `downloadImage` method that receives the image url and returns a `Future<Uint8List>` as the image. Default is `DefaultBeagleImageDownloader`.
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
Interface that provides logger to Beagle use in application. Default is `DefaultEmptyLogger` that doesn't log any information. Here is the `BeagleLogger` contract:
```dart
abstract class BeagleLogger {
  void warning(String message);

  void error(String message);

  void errorWithException(String message, Exception exception);

  void info(String message);
}
```

### 13. operations
The map of custom operations that can be used to extend the capability of the Beagle expressions and are called like functions, e.g. `@{sum(1, 2)}`. Default is empty map.
