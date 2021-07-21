---
title: Image Downloader
weight: 3
description: >-
  In this section, you will information on how to use and configure the Image Downloader in Beagle Flutter.
---

---

## Introduction
It handles how remote images will be downloaded and populated in `BeagleImage` widget by providing a class that implements this logic. Beagle Flutter provides a default implementation called `DefaultBeagleImageDownloader`. Here is the contract:

```dart
abstract class BeagleImageDownloader {
  Future<Uint8List> downloadImage(String url);
}
```

The `downloadImage` method takes as a parameter the image url and returns a `Future<Uint8List>` as the representation of the downloaded image.

## Create a custom image downloader
To create your own image downloader, you need to implement the `downloadImage` method, see a simplified version of the default implementation:

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
      throw Exception('HTTP request failed, statusCode: $response.status, $url');
    }

    final bytes = response.bodyBytes;
    if (bytes.lengthInBytes == 0) {
      throw Exception('Image is an empty file: $url');
    }

    return bytes;
  }
}
```
{{% alert color="warning" %}}
  The default implementation of Image Downloader uses the same default implementation of the HTTP client.
{{% /alert %}}

## Use a custom image downloader
To use your image downloader, pass it in the Beagle initialization method `BeagleSdk.init` just like the example below:
```dart
BeagleSdk.init(
  imageDownloader: YourImageDownloader(),
);
```
