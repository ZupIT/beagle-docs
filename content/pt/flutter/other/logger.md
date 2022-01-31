---
title: Logger
weight: 3
description: >-
  In this section, you will find information on how to use the Logger in Beagle Flutter.
---

---

# Introduction
Beagle produces many logs, but how they are showed is up to you. The default logging mechanism (`DefaultLogger`) prints all messages to the console with the name "BeagleSDK" using the method `log` from `dart:developer`.

The logging behavior can be changed by implementing the interface `BeagleLogger` and passing it to the `BeagleService`. The interface has four methods: `warning`, `error`, `errorWithException` and `info`, which represents all levels of logs created by Beagle.

# Creating a custom logger
See the example below:

```dart
class SilentLogger extends BeagleLogger {
  void warning(String message) {}

  void error(String message) {}

  void errorWithException(String message, Exception exception) {}

  void info(String message) {}
}

```

The example above is very simple, but quite useful. It can be used to disable all logging. Another good example would be a logger that sends every error to a backend, where it can be analyzed by the developers.

# Registering the new logger
To register the new logger you just need to provide it to the BeagleService:

```dart
final beagleService = BeagleService(
  logger: SilentLogger(),
  // ...
);
```
