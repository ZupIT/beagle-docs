---
title: HTTP client
weight: 3
description: >-
  In this section, you will find information on how to setup an HTTP client in Beagle Flutter.
---

---

# Introduction
The HttpClient is responsible for sending all requests made by Beagle. Beagle already uses a default implementation of the HttpClient which makes the requests as they come from the JSON (DefaultHttpClient). If you need to change the default behavior, you must implement your own HttpClient, i.e., you must implement the following interface:

```dart
abstract class HttpClient {
  Future<Response> sendRequest(BeagleRequest req);
}
```

In the **sendRequest**  method, you can create the rules for your network layer. You can add headers to your requests, change the HTTP method, request body, response, run cryptography, etc.

The `sendRequest` receives a single parameter of type `BeagleRequest` and returns an object of type `Response`. See below what each of these types does:

# BeagleRequest
It's the class for configuring HTTP requests.

| **Attribute** | **Type** | **Required** | **Definition** |
| :--- | :--- | :---: | :--- |
| url | String  | ✓ | The endpoint that returns the server driven UI (view) you wish to display. |
| method | BeagleHttpMethod | | Enum class that defines the [HTTP operation/verb](https://www.restapitutorial.com/lessons/httpmethods.html). The default value is `GET`. |
| headers | Map<String, String> | | Used when you need to send data via HTTP headers.  |
| body | String | | Used when you need to send a HTTP messages as body data. |

# Response
It's used to return the data retrieved by the request.

| **Attribute** | **Type** | **Required** | **Definition** |
| :--- | :--- | :---: | :--- |
| status | int  | ✓ | Status code of the response. |
| body | String | ✓ | Body of the response. |
| headers | Map<String, String> | ✓ | Headers of the response. |
| bodyBytes | Uint8List | ✓ | Body, in bytes, of the request. |

The response also has a method `toJson` which returns a String with the `status`, `body` and `headers` encoded.

# Create a custom HTTP client
See below an example of a custom HttpClient that adds the header `platform` to every `GET` request:

```dart
import 'dart:async';
import 'package:beagle/beagle.dart';
import 'dart:io';
import 'package:http/http.dart' as http;

class MyHttpClient implements HttpClient {
  const MyHttpClient();
  @override
  Future<Response> sendRequest(BeagleRequest req) async {
    final uri = Uri.parse(req.url);
    final handlers = {
      BeagleHttpMethod.get: () => http.get(uri, headers: {...req.headers, 'platform': Platform.operatingSystem}),
      BeagleHttpMethod.post: () => http.post(uri, headers: req.headers, body: req.body),
      BeagleHttpMethod.put: () => http.put(uri, headers: req.headers, body: req.body),
      BeagleHttpMethod.patch: () => http.patch(uri, headers: req.headers, body: req.body),
      BeagleHttpMethod.delete: () => http.delete(uri, headers: req.headers),
    };
    final response = await handlers[req.method]!();
    return Response(response.statusCode, response.body, response.headers, response.bodyBytes);
  }
}
```

This is a very simple example and, to implement this, it would be easier to extend the `DefaultHttpClient` instead, which already contains most of the implementation. Nonetheless, in most scenarios, the entire implementation will need to be replaced, hence the example.

# Use a custom HTTP client
To use your client, pass it in the Beagle initialization method `BeagleSdk.init` just like the example below:
```dart
final beagleService = BeagleService(
  httpClient: const MyHttpClient(),
  // ...
);
```
