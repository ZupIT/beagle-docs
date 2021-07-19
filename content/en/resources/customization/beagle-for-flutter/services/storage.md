---
title: Storage
weight: 189
description: >-
  You will find here information of how to configure the storage in Beagle Flutter.
---

---

## Introduction
It handles the cache storage for requests made by Beagle. Beagle Flutter provides a default implementation called `DefaultStorage`. Here is the contract:

```dart
abstract class Storage {
  /// Adds the tuple ([key], [value]) to this persistent storage. The Future (promise) returned
  /// resolves as soon as the operation completes.
  Future<void> setItem(String key, String value);

  /// Retrieves the value identified by the [key] passed as parameter. If the key doesn't exist,
  /// null is returned. The return value is wrapped in a Future (promise).
  Future<String> getItem(String key);

  /// Removes a [key] from the storage. The Future (promise) returned resolves as soon as the
  /// operation completes.
  Future<void> removeItem(String key);

  /// removes everything from the storage. The Future (promise) returned resolves as soon as the
  /// operation completes.
  Future<void> clear();
}
```

To avoid vulnerability issues, the default implementation stores information only in memory.

## Create a custom storage
Create a class that implements the `Storage` abstract class, here is the default implementation:

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

## Use a custom storage
To use your storage, pass it in the Beagle initialization method `BeagleSdk.init` just like the example below:
```dart
BeagleSdk.init(
  storage: YourStorage(),
);
```
