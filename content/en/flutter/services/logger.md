---
title: Logger
weight: 3
description: >-
  In this section, you will find information on how to use the Logger in Beagle Flutter.
---

---

## Introduction
Logger is an API that sends log output. Beagle Flutter provides a default implementation called `DefaultEmptyLogger` that doesn't log any information. Check out the contract:

```dart
abstract class BeagleLogger {
  /// Function to pass warning message.
  void warning(String message);

  /// Function to pass error message.
  void error(String message);

  /// Function to pass a exception and error message.
  void errorWithException(String message, Exception exception);

  /// Function for passing an information message.
  void info(String message);
}
```

This prints all messages delivered by the `JavascriptRuntimeWrapper` to Beagle Flutter, divided by `warning`, `info` and `error` types. There is another type `errorWithException` logged by the `BeagleImage` widget when this throws an exception when downloading an image. 

## Create a custom logger
To create your own logger, you only need to create a class that extends the `BeagleLogger` abstract class, here is an implementation example:

```dart
class DefaultEmptyLogger extends BeagleLogger {
  @override
  void error(String message) {
    debugPrint('Error: $message');
  }

  @override
  void errorWithException(String message, Exception exception) {
    debugPrint('Error: $message, with exception: $exception');
  }

  @override
  void info(String message) {
    debugPrint('Info: $message');
  }

  @override
  void warning(String message) {
    debugPrint('Warning: $message');
  }
}
```

## Use a custom logger
To use your logger, pass it in the Beagle initialization method `BeagleSdk.init` just like the example below:
```dart
BeagleSdk.init(
  logger: YourLogger(),
);
```
