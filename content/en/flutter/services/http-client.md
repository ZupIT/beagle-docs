---
title: HTTP Client
weight: 3
description: >-
  In this section, you will information on how to configure and use the HTTP client in Beagle Flutter.
---

---

## Introduction
It defines how the services requests are configured, to use it, you need to create a class that implements a `HttpClient` abstract class. Beagle Flutter provides a default implementation called `DefaultHttpClient`. Here is the contract:

```dart
abstract class HttpClient {
  Future<Response> sendRequest(BeagleRequest req);
}
```

In the **sendRequest**  method, you can create the rules for your network layer. You can add headers to your requests, define method request, body response, data response, run cryptography, etc.

Now, let's see in details what is the parameter and return of this method:

### BeagleRequest
It's the class for configuring HTTP requests.

| **Attribute** | **Type** | **Required** | **Definition** |
| :--- | :--- | :---: | :--- |
| url | String  | ✓ | Defines the endpoint that returns the screen or component you wish to display. |
| method | BeagleHttpMethod | | It is an enum class that defines which HTTP operation you wish to do. It works as a HTTP request method and it is set as `get` by default. |
| headers | Map<String, String> | | It is used when you need to send data via an HTTP header.  |
| body | String | | It is set default as null and it just needs to be implemented when you need to send a HTTP messages as body data. |

#### BeagleHttpMethod
Http method to indicate the desired action to be performed for a given resource. It is an `enum` and the values are:

| Value | Definition |
| :--- | :--- |
| get | The `get` method  requests a representation of a specific resource. Requests using the method `get` must return only data. |
| post | The `post` method is used to submit an entity to a specific resource, frenquetly causing a change in the resource state or colateral effects on the server.  |
| put | The `put` method replaces all the current representation of the target resources with the data of the request.  |
| delete | The `delete` method removes a specific resource.  |
| head | The `head` method  request an answer the same way the `get` method does, however without a response body.  |
| patch | The `patch` method is used to apply partial modifications in a resource. |

### Response
It's used to return data made by the request.

| **Attribute** | **Type** | **Required** | **Definition** |
| :--- | :--- | :---: | :--- |
| status | int  | ✓ | Returns the response code returned by the remote HTTP server. |
| body | String | ✓ | Response body returned from request. |
| headers | Map<String, String> | ✓ | It is used when you need to send data via an HTTP header. |
| bodyBytes | Uint8List | ✓ | Returns the response message returned by the remote HTTP server. |

It has a method `toJson` which returns a String with the `status`, `body` and `headers` encoded.

## Create a custom HTTP client
To create your own HTTP client, you only need to implement the `sendRequest` method, here is the default implementation:

```dart
@override
Future<Response> sendRequest(BeagleRequest req) async {
  final uri = Uri.parse(req.url);
  final handlers = {
    BeagleHttpMethod.get: () => 
        http.get(uri, headers: req.headers),
    BeagleHttpMethod.post: () =>
        http.post(uri, headers: req.headers, body: req.body),
    BeagleHttpMethod.put: () =>
        http.put(uri, headers: req.headers, body: req.body),
    BeagleHttpMethod.patch: () =>
        http.patch(uri, headers: req.headers, body: req.body),
    BeagleHttpMethod.delete: () => 
        http.delete(uri, headers: req.headers),
  };
  final response = await handlers[req.method]();
  return Response(
    response.statusCode,
    response.body,
    response.headers,
    response.bodyBytes,
  );
}
```

## Use a custom HTTP client
To use your client, pass it in the Beagle initialization method `BeagleSdk.init` just like the example below:
```dart
BeagleSdk.init(
  httpClient: YourClient(),
);
```
