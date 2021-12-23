---
title: Image Downloader
weight: 3
description: >-
  In this section, you will find information on how to use and configure the Image Downloader in Beagle Flutter.
---

---

# Introduction
The image downloader handles how remote images are downloaded. It is supposed to be used by any Image component and our intent when letting this be a configurable service is so that any additional logic to download images can be easily implemented without the need of replacing the image component of the library of components being used.

Similar to the ViewClient, the ImageDownloader is also responsible for creating requests for the HttpClient and processing its responses, the only difference is that the ViewClient does it for server driven views (JSONs) and the ImageDownloader does it for images.

The default ImageDownloader is very simple, it just creates the request, pass it to the HttpClient and transform the response into a `Uint8List`. An interesting application of a custom ImageDownloader would be caching. The custom ImageDownloader would save the images in disk and use the stored value instead of making the request to the HttpClient whenever possible.

Here's the ImageDownloader interface:

```dart
abstract class BeagleImageDownloader {
  Future<Uint8List> downloadImage(String url);
}
```

The `downloadImage` method takes as a parameter the image url and returns a `Future<Uint8List>` as the representation of the downloaded image.

# Create a custom image downloader
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

# Use the custom image downloader
To use your image downloader, pass it in the BeagleService just like the example below:
```dart
final beagleService = BeagleService(
  imageDownloader: MyImageDownloader(),
  // ...
);
```
