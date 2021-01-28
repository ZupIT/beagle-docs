---
title: Beagle Scaffold
weight: 16
description: 'Here you will find the **Beagle-Scaffold** library to help you start a project using Beagle in iOS. It holds almost all necessary configurations to do it.'
---

---

![Cocoapods](https://img.shields.io/cocoapods/v/BeagleScaffold?label=Beagle-Scaffold)
![Cocoapods](https://img.shields.io/cocoapods/v/Beagle?label=Beagle)

**It's recommended for beginners.**

### Requirements
<hr>
Before you start to configure Beagle for your iOS system, you'll need a Macbook with Xcode and CocoaPods installed. 

### Getting started
<hr>

This tutorial will configure Beagle from the Start.

**Step 1**: Create a new app project using Xcode.

**Step 2**: First things first, we are going to be using a view code approach here, so we need to delete all references to _main.storyboard_, which is the way that Xcode usually set your project to initialize. These references are localized at:

* info.plist > Application Scene Manifest > Scene Configuration > Application Session Role > Item 0 (Default Configuration) > Storyboard Name
* info.plist > Main storyboard file base name
* yourProject.xcodeproj > General > Main Interface

Delete these three. The third one you have to erase and confirm.

**Step 3**: Add BeagleScaffold as a dependency of your project using CocoaPods:
- https://cocoapods.org/pods/BeagleScaffold

```
target 'MyApp' do
  pod 'BeagleScaffold'
end
```

If you're not familiar with CocoaPods, check their [documentation](https://guides.cocoapods.org/).

Also add the YogaKit dependency to your project via CocoaPods, but point to our repo because we need some changes that weren't merged on their official repository. Like so:

```
pod 'YogaKit', :git => 'https://github.com/ZupIT/YogaKit'
```

BeagleScaffold has default implementations of a Network layer, Cache and Logger for you, embedded in [BeagleDefaults](https://docs.usebeagle.io/get-started/using-beagle-helpers/ios/beagle-defaults).

**Step 4**: To add Beagle configurations to your application, just call our function named _start()_ from the class _BeagleConfig_, in your _appDelegate_:

```
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        
        BeagleConfig.start()
        
        return true
    }
```

**Step 5**: Now for the last step to run the application, we're going to do the "view code" section here. Add to your appDelegate a variable called _window_ that is a _UIWindow?_. Initialize it, make it's rootViewController our _BeagleScaffoldDemoViewController_ and call a function called _makeKeyAndVisible()_. Like the following:

```
var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    
        BeagleConfig.start()
        
        window = UIWindow(frame: UIScreen.main.bounds)
        window?.rootViewController = BeagleScaffoldDemoViewController
        window?.makeKeyAndVisible()
        
        return true
    }
```

**Step 6**: Run your project, and you should see a sample screen with all Beagle components on your simulator.

<hr>

##### For more on Beagle: please check our [Beagle](https://github.com/ZupIT/beagle) repository.
##### For more on Beagle-Defaults: Please check our [Beagle-Default](/get-started/using-beagle-helpers/ios/beagle-defaults) documentation.
