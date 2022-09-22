---
title: ImageProvider
weight: 151
description: >-
  You will find here the description of ImageProvider, the description about
  its methods and how you can change it.
---

---

## **Introduction**

You can configure the way local images will be loaded in **Image** component by providing a class that implements this logic, which was added to Beagle iOS in version 2.1.0.

## **ImageProviderProtocol**

The **ImageProviderProtocol** protocol consists of only one method called **loadImageProvider(id:)** that will be used to retrieve your local image.

```swift

public protocol ImageProviderProtocol {
    func loadImageProvider(id: String) -> UIImage?
}

```

The fetchImage method takes 1 parameter:

- **id**: String id used to identify the local image.

## **Default Implementation**

In Beagle iOS, we have a struct called **ImageProvider** that performs retrieve the image using `UIImage(named: id, in: mainBundle)` where `mainBundle` is the bundle configured in `BeagleDependencies`.

```swift

struct ImageProvider: ImageProviderProtocol {
    @Injected var mainBundle: BundleProtocol
    
    func loadImageProvider(id: String) -> UIImage? {
        return UIImage(named: id, in: self.mainBundle.bundle, compatibleWith: nil)
    }
}

```

## **Replacing the default implementation**

To replace the class responsible for load local images on Beagle follow the steps below:

### **Step 1: Implement `ImageImageProviderProtocol`**

Implement the `ImageImageProviderProtocol` in the class (or struct) you wish to use, in this case we created a class `CustomImageProvider` that will be used as an example:

```swift

struct CustomImageProvider: ImageProviderProtocol {

    func loadImageProvider(id: String) -> UIImage? {
        // your implementation
    }
}

```

### **Step 2: Assign the dependencies**

In AppDelegate or in Beagle environment settings class, assign the instance of `CustomImageProvider` to the `imageProvider` attribute present in `BeagleDependencies`:

```swift
let dependencies = BeagleDependencies()
dependencies.imageProvider = CustomImageProvider()
BeagleConfigurator.setup(dependencies: dependencies)
```

Done! Beagle will now use your imageProvider with all the necessary modifications and settings to retrieve your local images.
