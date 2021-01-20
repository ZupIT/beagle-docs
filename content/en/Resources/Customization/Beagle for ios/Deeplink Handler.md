---
title: Deeplink Handler
weight: 151
description: >-
  In this section, you will find information about Beagle's deeplink handler for iOS. 
---

---

## Introduction

Beagle performs all its navigations from the **`deepLinkHandler`** dependency of type `DeepLinkScreenManaging`, that is present in BeagleDependencies.

The `DeepLinkScreenManaging` protocol has a method called **getNativeScreen** that returns a UIViewController from a given `path` of type String. It is also possible to pass additional data through a dictionary of the type [String: String].

```swift
public protocol DeepLinkScreenManaging {
    func getNativeScreen(with path: String, data: [String: String]?) throws -> UIViewController
}
```

## **Example**

To use the `DeepLinkScreenManaging` protocol, follow the steps below:

### **Step 1: Create a class inherited from DeepLinkScreenManaging**

You have to create a class we'll call `DeeplinkScreenManager` that will conform to the `DeepLinkScreenManaging` protocol.

```swift
final class DeeplinkScreenManager: DeepLinkScreenManaging {
    
    func getNativeScreen(with path: String, data: [String: String]?) throws -> UIViewController {
    }
}
```

### **Step 2: Create DeeplinkScreen protocol**

Now, you have to create a protocol called DeeplinkScreen, where each screen is where you will need to use the deeplink for navigation according to this protocol.

The protocol has two main methods:

- `init(path: String, data: [String: String]?)`: a simple initialization method
- `func screenController() -> UIViewController`: the method which will return the UIViewController where you will navigate

```swift

protocol DeeplinkScreen {
    init(path: String, data: [String: String]?)
    func screenController() -> UIViewController
}
```

### **Step 3: Implement the DeeplinkScreenManager class**

You will see below the complete example of the class created and that inherits from `DeepLinkScreenManaging`. In it, a dictionary was created with `String` as a key and a value of `DeeplinkScreen.Type`. A subscript method was also created to facilitate the access to the dictionary elements.

In the `getNativeScreen` method, you have to check if there is a screen with the given path and if so, return the `UIViewController` related to it. Otherwise, it will throw a NSError.

```swift

final class DeeplinkScreenManager: DeepLinkScreenManaging {
    
    public static let shared = DeeplinkScreenManager()
    
    private var screens: [String: DeeplinkScreen.Type] = [:]
    
    public subscript(path: String) -> DeeplinkScreen.Type? {
        get {
            return screens[path]
        }
        set {
            screens[path] = newValue
        }
    }
    
    func getNativeScreen(with path: String, data: [String: String]?) throws -> UIViewController {
        guard let screenType = self[path] else {
            throw NSError(domain: "DeeplinkScreenManager", code: 1, userInfo: nil)
        }
        return screenType.init(path: path, data: data).screenController()
    }
}

```

### **Step 4: Create a DeeplinkScreen**

Create a screen that will inherit from the `DeeplinkScreen` protocol, in it you will have a method called **screenController** that it is used in the `DeeplinkScreenManager` class to connect the paths to the UIViewControllers that it will perform the deeplink navigations.

```swift

struct TextScreen: DeeplinkScreen {
    init(path: String, data: [String: String]?) {}
    
    func screenController() -> UIViewController {
        return BeagleScreenViewController(.declarative(screen))
    }
    
    var screen: Screen {
        return Screen(
            navigationBar: NavigationBar(title: "Text Screen", showBackButton: true),
            child: Text("Beagle")
        )
    }
}

```

### **Step 5: Assign the dependencies**

On AppDelegate or on Beagle's configuration environment, assing the instance of `DeeplinkScreenManager` to the `deepLinkHandler` attribute that it's on Beagle Dependencies:

```swift
let dependencies = BeagleDependencies()
let deepLinkHandler = DeeplinkScreenManager.shared
deepLinkHandler["PathDaSuaScreen"] = SuaScreen.self
dependencies.deepLinkHandler = deepLinkHandler
Beagle.dependencies = dependencies
```

Done! Now, Beagle will use your class with all the changes and definitions needed to perform your Deeplink navigations.