---
title: Beagle Scaffold
weight: 16
description: Here you will find the **Beagle Scaffold** library that will help you start a project using Beagle in iOS. It contains almost all necessary configurations to do it.
---

---

![Cocoapods](https://img.shields.io/cocoapods/v/BeagleScaffold?label=Beagle-Scaffold)
![Cocoapods](https://img.shields.io/cocoapods/v/Beagle?label=Beagle)

**Topics covered**
<hr>

* What is it?
* Installation
* Configuration
* Customization
* Other Possible Customizations

**Requirements**
<hr>

* MacOS with Xcode 11+
* Cocoapods

{{% alert color="warning" %}}
It is recommended for beginners.
{{% /alert %}}

### What is?
<hr>

Beagle Scaffold is a supporting framework that has default implementations of a Network layer, Cache and Logger for you, embedded in [BeagleDefaults](https://docs.usebeagle.io/get-started/using-beagle-helpers/ios/beagle-defaults) so you can start using Beagle faster.

### Installation
<hr>

**Step 1**: Create a new app project using Xcode.

**Step 2**: On your Terminal, run `pod init` to create a Podfile and add Beagle Scaffold as a dependency to your project, like this:

```ruby
target 'MyApp' do
  pod 'BeagleScaffold'
end
```

If you're not familiar with CocoaPods, check their [documentation](https://guides.cocoapods.org/).

**Step 3:** Run `pod install` to install Beagle Scaffold in our app. This command will generate a Workspace. From now we will only use this Workspace.

{{% alert color="success" %}}
You've successfully installed Beagle Scaffold on your app! 
{{% /alert %}}

### Configuration
<hr>

**Step 1:** To start configuring Beagle on our app, we need to go into the file SceneDelegate, then import the lib `BeagleScaffold` and call our function named `start()` from Beagle Scaffold's class `BeagleConfig`, inside method `scene()`:

```swift
func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {

    BeagleConfig.start()
    guard let _ = (scene as? UIWindowScene) else { return }
}
```

**Step 2:** Now we need to do our project initialization using a View Code approach:

1. Still in the method `scene`, give the name `windowScene` to the `guard let` already created for us by Xcode:

```swift
guard let windowScene = (scene as? UIWindowScene) else { return }
```

2. Initialize the variable `window` created outside the function scope, using our `windowScene`:

```swift
window = UIWindow(windowScene: windowScene)
```

3. Make the `window?.rootViewController` our `BeagleScaffoldDemoViewController` and call the method `makeKeyAndVisible()`. Your code should be like this:

```swift
func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
    BeagleConfig.start()
    guard let windowScene = (scene as? UIWindowScene) else { return }
    window = UIWindow(windowScene: windowScene)
    window?.rootViewController = BeagleScaffoldDemoViewController
    window?.makeKeyAndVisible()
}
```

**Step 3:** Run your project, and you should see a sample screen with all Beagle components on your simulator.

### Customization
<hr>

In this section you will learn on how to customize your Beagle Scaffold. Let's start with the most basic and common one: changing your base Url. This will happen when you try rendering your first server driven screen, which will be right after displaying our demo screen.

**Step 1:** Create a new file, called `BeagleConfigurations.swift`. 

1. Import Beagle and BeagleScaffold.
2. Create a static function `setup`.
3. Inside our `setup` function, instantiate a variable `dependencies` that is a `BeagleDependencies`.
4. Change the property `urlBuilder` of our variable to match your base Url. In this example we'll be using a localhost url, such as `http://localhost:8080`.
5. Now you need to notify Beagle that you changed this property. To do that just pass your `dependencies` variable as a parameter for the `start` method from BeagleScaffold's `BeagleConfig`.

Your `BeagleConfigurations` class should be like this:

```swift
import Foundation
import Beagle
import BeagleScaffold

struct BeagleConfigurations {
    
    static func setup() {
        let dependencies = BeagleDependencies()
        dependencies.urlBuilder = UrlBuilder(baseUrl: URL(string: "http://localhost:8080"))
        BeagleConfig.start(dependencies: dependencies)
    }
    
}
```
**Step 2:** Now we need to change our `SceneDelegate` class. Inside the method `scene`, you'll no longer call `BeagleConfig.start()`. You'll call `BeagleConfigurations.setup()` instead. You can see your screen by giving an endpoint to a `BeagleScreenViewController`, but you need to import Beagle first. Then you can use this controller as your new `window?.rootViewController`. Like this:

```swift
func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        BeagleConfigurations.setup()
        guard let windowScene = (scene as? UIWindowScene) else { return }
        window = UIWindow(windowScene: windowScene)
        window?.rootViewController = BeagleScreenViewController(.remote(.init(url: "/yourEndpoint")))
    }
```

**Step 3:** Since your endpoint will probably not be a secure connection, you will need to allow an arbitrary load in your `info.plist` file. To do this, create a property called `App Transport Security Settings` by clicking on the `+` icon at the `Information Property List` level. At the `App Transport Security Settings` level, click on the `>` icon to open it up, then create the property `Allow Arbitrary Loads` and set it to `YES`.

{{% alert color="success" %}}
Cool! Now you can see your own server-driven screen! 
{{% /alert %}}

### Possible Customizations

As you have seen, Beagle Scaffold is a lib for supporting newcomers to Beagle, helping them rendering a screen using Beagle as fast as possible.

You can customize Beagle Scaffold to match your needs. We've seen that we can easily change our endpoint to render a new screen instead of Beagle Scaffold's demo, and you can already guess that you can customize basically every Beagle property inside Beagle dependencies. 

And there is a set of properties that you can and you should customize, which is the NetworkClient, CacheManager and Logger. If your app is going to be delivered to production, it's essential to configure your security levels, your cache management and what information you want to log.

You can create these layers using these tutorials:

[**Custom Network Layer**]({{< ref path="/resources/customization/beagle-for-ios/network-layer" lang="en" >}})
<br>

[**Custom Cache Manager**]({{< ref path="/resources/cache/how-to-configure-cache" lang="en" >}})
<br>

[**Custom Log System**]({{< ref path="/resources/customization/beagle-for-ios/log-system" lang="en" >}})

<br>
<hr>

##### For more on Beagle: please check our [Beagle](https://github.com/ZupIT/beagle) repository.
##### For more on Beagle-Defaults: Please check our [Beagle-Default]({{< ref path="/get-started/using-beagle-helpers/ios/beagle-defaults" lang="en" >}}) documentation.
