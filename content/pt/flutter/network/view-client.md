---
title: View client
weight: 3
description: >-
  In this section, you will find information on how to setup a ViewClient in Beagle Flutter.
---

---

# Introduction
Similar to the HttpClient, but more specific. While the hHttpClient is responsible for managing every request (views, json data, images, etc), the ViewClient is only responsible for fetching views, i.e. server driven pages.

The ViewClient creates the BeagleRequest that is sent to the HttpClient. The default implementation does two things:
1. creates the BeagleRequest according to what has been requested by its caller (normally, the navigator);
2. when the response arrives from the httpClient, it checks for navigation actions where `preFetch` is `true` and, asynchronously, pre-fetches their results.

It does nothing other than this, and this might be enough for most applications. But some applications may need extra behavior when fetching views, and this is the place where it should be implemented.

# Creating a new ViewClient

A good example is caching. Let's say we want to locally store a view so when Beagle calls `viewClient.fetch` again, it returns the cached result instead of calling the hHttpClient. To do this, we can implement a new ViewClient that has storage and implements `fetch` as follows:

```dart
import 'dart:convert';
import 'package:shared_preferences/shared_preferences.dart';

class MyViewClient extends DefaultViewClient {
  MyViewClient({required HttpClient httpClient, required BeagleLogger logger, required UrlBuilder urlBuilder})
    : super(httpClient: httpClient, logger: logger, urlBuilder: urlBuilder);

  static final key = 'view_client_cache';
  SharedPreferences? prefs;

  @override
  Future<BeagleUIElement> fetch(RemoteView route) async {
    prefs ??= await SharedPreferences.getInstance();
    final routeKey = '$key:${route.url}';
    if (prefs.containsKey(routeKey)) {
      final jsonString = prefs.getString(routeKey);
      final map = json.decode(jsonString);
      return BeagleUIElement(map);
    }
    final result = await super.fetch(route);
    prefs.setString(routeKey, result.toString());
    return result;
  }
}
```

Above we implemented a very simple logic that will store every fetch result into the disk using the lib `sharedPreferences`. This is a very dumb implementation, because this cache would never expire, but the objective here is just to show how such feature could be implemented using the ViewClient.

We extended the DefaultViewClient to take advantage of everything that is already implemented there, like the pre-fetch behavior. But you can also write it from the ground up by extending `ViewClient`, which is just an interface.

# Registering the new ViewClient
After creating your custom ViewClient, you just need to pass it to your BeagleService instance:

```dart
final baseUrl = 'https://my-bff.com';
final httpClient = const DefaultHttpClient();
final logger = const DefaultLogger();
final urlBuilder = UrlBuilder(baseUrl);
final viewClient = MyViewClient(httpClient, logger, urlBuilder);

final beagleService = BeagleService(
  baseUrl: baseUrl,
  httpClient: httpClient,
  logger: logger,
  urlBuilder: urlBuilder,
  viewClient: viewClient,
  // ...
);
```
