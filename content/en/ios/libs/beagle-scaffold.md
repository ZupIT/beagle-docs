---
title: Beagle Scaffold
weight: 16
description: In this section, you will find more information about the **Beagle Scaffold** library that will help you start a project using Beagle in iOS. 
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

### What is it?
<hr>

Beagle Scaffold is a supporting framework that has a default implementation of the network layer and logger, all embedded in [**BeagleDefaults**](https://docs.usebeagle.io/ios/libs/beagle-defaults), so you can start using Beagle faster.

### Installation
<hr>

**Step 1**: Create a new app project using Xcode.

**Step 2**: On your Terminal, run `pod init` to create a Podfile and add Beagle Scaffold as a dependency to your project, like this:

```ruby
target 'MyApp' do
  pod 'BeagleScaffold'
end
```

If you're not familiar with CocoaPods, check out their [documentation](https://guides.cocoapods.org/).

**Step 3:** Run `pod install` to install Beagle Scaffold in your app. This command will generate a Workspace that you will use from now on.

{{% alert color="success" %}}
You've successfully installed Beagle Scaffold on your app! 
{{% /alert %}}

### Configuration
<hr>

To start configuring Beagle in your app, follow the steps: 

**Step 1:** You need to go into the file SceneDelegate,  import the lib `BeagleScaffold` and call the function named `start()` from Beagle Scaffold's class `BeagleConfig`, inside method `scene()`:

```swift
func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {

    BeagleConfig.start()
    guard let _ = (scene as? UIWindowScene) else { return }
}
```

**Step 2:** You need to initialize the project using a View Code approach:

1. Still in the method `scene`, name the constant `guard let` created by Xcode to `windowScene`:

```swift
guard let windowScene = (scene as? UIWindowScene) else { return }
```

2. Initialize the variable `window` created outside the function scope, using `windowScene`:

```swift
window = UIWindow(windowScene: windowScene)
```

3. Make the `window?.rootViewController` become `BeagleScaffoldDemoViewController` and call the method `makeKeyAndVisible()`. Your code should be like this:

```swift
func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
    BeagleConfig.start()
    guard let windowScene = (scene as? UIWindowScene) else { return }
    window = UIWindow(windowScene: windowScene)
    window?.rootViewController = BeagleScaffoldDemoViewController
    window?.makeKeyAndVisible()
}
```

**Step 3:** Run your project, and you should see a sample screen with all Beagle components on the simulator.

### Customization
<hr>

In this section, you will learn how to customize your Beagle Scaffold. Let's start with the most basic one: change the base Url. This will happen when you try rendering your first server-driven screen, which will be right after displaying the demo screen.

**Step 1:** Create a new file, called `BeagleConfigurations.swift`. 

1. Import Beagle and BeagleScaffold;
2. Create a static function `setup`;
3. Inside the `setup` function, instantiate a variable called `dependencies` that is a `BeagleDependencies`;
4. Change the property `urlBuilder` to match the base URL. In this example, it will be a localhost url, such as `http://localhost:8080`;
5. Now you need to notify Beagle that you changed this property. To do that, just pass your `dependencies` variable as a parameter to the `start` method from BeagleScaffold's `BeagleConfig`.

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
**Step 2:** Now we need to change the `SceneDelegate` class. Inside the method `scene`, you'll no longer call `BeagleConfig.start()`. Call `BeagleConfigurations.setup()` instead. You can see your screen by giving an endpoint to a `BeagleScreenViewController`, but you need to import Beagle first. Then you can use this controller as your new `window?.rootViewController` like this:

```swift
func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        BeagleConfigurations.setup()
        guard let windowScene = (scene as? UIWindowScene) else { return }
        window = UIWindow(windowScene: windowScene)
        window?.rootViewController = BeagleScreenViewController(.remote(.init(url: "/yourEndpoint")))
    }
```

**Step 3:** Since your endpoint won't be a secure connection, you will need to allow an arbitrary load in your `info.plist` file. 
To do this, follow the steps:
1. Create a property called `App Transport Security Settings` by clicking on the `+` icon at the `Information Property List` level;
2. At the `App Transport Security Settings` level, click on the `>` icon to open it up;
3. After that, create the property `Allow Arbitrary Loads` and set it to `YES`.

{{% alert color="success" %}}
Now you can see your own server-driven screen! 
{{% /alert %}}

### Possible Customizations

Beagle Scaffold is a lib that supports newcomers to use Beagle, it helps you render a screen as fast as possible, for example. And you can also customize Beagle Scaffold to match your needs. 

You can easily change the endpoint to render a new screen instead of Beagle Scaffold's demo, and you are able to customize every Beagle property inside Beagle's dependencies. 

There is a set of properties that you should customize, such as the NetworkClient and Logger. 
If your app is going to be delivered to production, it's essential to configure your security levels and what information you want to log.

You can create these layers using these tutorials:

[**Custom Network Layer**]({{< ref path="/ios/customization/dependencies/network-layer" lang="en" >}})
<br>

[**Custom Log System**]({{< ref path="/ios/customization/dependencies/log-system" lang="en" >}})

<br>
<hr>

##### For more information: please check [Beagle's](https://github.com/ZupIT/beagle) repository.
##### For more on Beagle-Defaults: Please check [Beagle-Default]({{< ref path="/ios/libs/beagle-defaults" lang="en" >}}) documentation.
