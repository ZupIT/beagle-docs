---
title: ImageDownloader
weight: 151
description: >-
  You will find here the description of ImageDownloader, the description about
  its methods and how you can change it.
---

---

## **Introduction**

You can register the way remote images will be downloaded and populated in **UIImageView** by providing a class that implements this logic, which was added to Beagle in version 1.3.0.

With **ImageDownloader** being created in the frontend of your iOS application, Beagle will know which logic to use to download and configure the **Image** component of type **ImagePath.Remote**.

## **ImageDownloader Protocol**

The **ImageDownloader** protocol consists of only one method called **fetchImage** that will be used to request your remote images.

```swift

public protocol ImageDownloader {
    @discardableResult
    func fetchImage(
        url: String,
        additionalData: RemoteScreenAdditionalData?,
        completion: @escaping (Result<Data, Request.Error>) -> Void
    ) -> RequestToken?
}

```

The fetchImage method takes 3 parameters:

* **url**: value of type String to which the image url will be passed through
* **additionalData**: RemoteScreenAdditionalData value, which can be used when there is a need to pass additional headers for a given request.
* **completion**: block that must be called at the end of the function execution passing the result of the request.

In addition, the function can return a **RequestToken** so that the request can be canceled internally by Beagle.

## **Default Implementation**

In Beagle iOS, we have a class called **ImageDownloaderDefault** that performs the requests for images according to your network layer.

In its `fetchImage` method, this class calls **RequestDispatcher** with type `.fetchImage` and maps the result of that request according to the implementation of your network layer. You can see how to configure a network layer in [**here**](/resources/customization/beagle-for-ios/network-layer).

## **Replacing the default implementation**

To replace the class responsible for making image requests on Beagle, follow the steps below:

### **Step 1: Implement `ImageDownloader`**

Implement the `ImageDownloader` protocol in the class you wish to use to make requests, in this case we created a class `CustomImageDownloader` that will be used as an example:

```swift

class CustomImageDownloader: ImageDownloader {
    func fetchImage(
        url: String,
        additionalData: RemoteScreenAdditionalData?,
        completion: @escaping (Result<Data, Request.Error>) -> Void
    ) -> RequestToken? {
        let newUrl: URL = URL(string: url)
        //Implementation of image request 
    }
    //Additional implementation...
}

```

### **Step 2: Assign the dependencies**

In AppDelegate or in Beagle environment settings class, assign the instance of `CustomImageDownloader` to the `imageDownloader` attribute present in BeagleDependencies:

```swift
let dependencies = BeagleDependencies()
let customImageDownloader = CustomImageDownloader()
dependencies.imageDownloader = customImageDownloader
Beagle.dependencies = dependencies
```

Done! Beagle will now use your class with all the necessary modifications and settings to download your remote images.
