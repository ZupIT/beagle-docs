---
title: BeagleWidget
weight: 2
description: >-
  You will find here information of how to use BeagleWidget in Beagle Flutter.
---

---

## What is it?
A widget that displays content of Beagle. This is the entry point to load server driven screens and server driven ui components to your Flutter application. The `BeagleWidget` is a `StatefulWidget` that renders widgets through a local JSON or a HTTP request.

See how the structure is represented:

<table>
  <thead>
    <tr>
      <th style="text-align:left">Attribute</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Required</th>
      <th style="text-align:left">Definition</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">key</td>
      <td style="text-align:left">Key</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Identifier for Widgets, Elements and SemanticsNodes.</td>
    </tr>
    <tr>
      <td style="text-align:left">screenRequest</td>
      <td style="text-align:left"><strong>BeagleScreenRequest</strong></td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Provides the url, method, headers and body to the request.</td>
    </tr>
    <tr>
      <td style="text-align:left">screenJson</td>
      <td style="text-align:left">String</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Represents a local screen to be shown.</td>
    </tr>
    <tr>
      <td style="text-align:left">onCreateView</td>
      <td style="text-align:left"><strong>OnCreateViewListener</strong></td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Function that returns the current BeagleView.</td>
    </tr>
  </tbody>
</table>

### BeagleScreenRequest
Class used to make requests on Beagle Flutter. It implements the `BeagleNetworkOptions` which brings the `method`, `headers` and `strategy` attributes. Also, the `BeagleScreenRequest` class has the `url` and `body` properties. Let's see his structure:

<table>
  <thead>
    <tr>
      <th style="text-align:left">Attribute</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Required</th>
      <th style="text-align:left">Definition</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">url</td>
      <td style="text-align:left">String</td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">Represents the request relative server URL.</td>
    </tr>
    <tr>
      <td style="text-align:left">body</td>
      <td style="text-align:left">String</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Content that will be deliver with the request.</td>
    </tr>
    <tr>
      <td style="text-align:left">headers</td>
      <td style="text-align:left">Map&lt;String, String&gt;</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Headers to be used in the request.</td>
    </tr>
    <tr>
      <td style="text-align:left">method</td>
      <td style="text-align:left">BeagleHttpMethod</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Http method to indicate the desired action to be performed for a given resource. This could be <code>put</code>, <code>get</code>, <code>post</code>, <code>delete</code>, <code>patch</code> and <code>head</code>.</td>
    </tr>
    <tr>
      <td style="text-align:left">strategy</td>
      <td style="text-align:left">BeagleNetworkStrategy</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Cache strategy applied to the request. This could be <code>beagleCacheOnly</code>, <code>beagleWithFallbackToCache</code>, <code>networkWithFallbackToCache</code>, <code>cacheWithFallbackToNetwork</code>, <code>cacheOnly</code>, <code>networkOnly</code> and <code>cacheFirst</code>.</td>
    </tr>
  </tbody>
</table>

### OnCreateViewListener
Function that follows the struct `void Function(BeagleView view)` and provides the current `BeagleView` when it's available.

## How to use it?
Wherever you want to show server driven content, just place the `BeagleWidget` there informing at least a local JSON or a `BeagleScreenRequest` with the `url` of your BFF. In the next example, we put it in the `Scaffold` widget body:

```dart
Scaffold(
  appBar: AppBar(
    title: const Text('Beagle Sample'),
  ),
  body: BeagleWidget(
    screenRequest: BeagleScreenRequest('components'),
  ),
);
```

{{% alert color="warning" %}}
Attention: it's necessary to call `BeagleSdk.init` passing at least the `baseUrl` property before using the `BeagleWidget`.
{{% /alert %}}
