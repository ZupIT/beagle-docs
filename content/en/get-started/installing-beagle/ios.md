---
title: IOS
weight: 8
description: "Here, you'll find how to make iOs' configuration to install Beagle."
---

---

## Requirements

Before you start to configure Beagle for your iOS system, it's important to check out if you have installed all the current versions of the following programs: ‌

- **iOS 10.0+**
- **Xcode 11.0+**
- **Swift 5.0+**

## **Dependencies' Management**

Currently, Beagle is available for integrations through [**CocoaPods**](https://cocoapods.org), [**SwiftPM**](https://swift.org/package-manager/), and [**Carthage**](https://github.com/Carthage/Carthage).

{{% alert color="info" %}}
Remember to always check if you're using the latest version of Beagle and, mostly, check if the different platforms you're using are integrated to the same Beagle's version. In this way, you ensure that all the tools are correctly communicating with each other.
{{% /alert %}}

## **Installation with CocoaPods**

To integrate Beagle with your application through **CocoaPods**, you have to add the framework as a dependency of your `Podfile`.

Current Beagle's version: [![badge](https://img.shields.io/cocoapods/v/Beagle)](https://cocoapods.org/pods/Beagle)

This process must be done in the following way:

```text
pod 'Beagle'
pod 'YogaKit', :git => 'https://github.com/ZupIT/YogaKit'
```

{{% alert color="warning" %}}
In the case of **YogaKit**, you must use our fork because some changes are not merged yer at Facebook's repository.
{{% /alert %}}
## **Installation with Carthage**

### Step 1: Integrate with your application

To integrate Beagle with your application through **Carthage**, you have to add the framework as a dependency on your `Cartfile`.

This process must be done in the following way:

```text
github "ZupIT/beagle" ~> 1.7
```

{{% alert color="warning" %}}
After an important release, we'll probably launch versions with specific bug fixes for iOS, it will have a version tag followed by the suffix "-iOS" \(e.g: "1.6.2-iOS"\).
{{% /alert %}}

### Step 2: Build on dependencies

After the integration, you must follow the normal process of building with Carthage on your dependencies. The expected is that you receive some **.framework files**.

In Beagle's case, the mandatory files to make you application work are:

- Beagle.framework

Other frameworks can be used only in more specific scenarios.

{{% alert color="warning" %}}
Your application will need to import `YogaKit` too, you can import using SwiftPM:
1. From the **File** menu, navigate through **Swift Packages** and select **Add Package Dependency…**.
2. Enter package repository URL: `https://github.com/ZupIT/yoga.git`
3. Confirm the version 1.19 and let Xcode resolve the package
{{% /alert %}}

## **Installation with Swift Package Manager**

We have two ways of configuring `Beagle` using SwiftPM:
### Xcode 11

1. From the **File** menu, navigate through **Swift Packages** and select **Add Package Dependency…**.
2. Enter package repository URL: `https://github.com/ZupIT/beagle.git`
3. Confirm the version and let Xcode resolve the package
4. On the final dialog, update Beagle's **Add to Target** column with the target that should import `Beagle`

### Package.swift

Once you have your `Package.swift` set up, adding `Beagle` as a dependency is as easy as adding it to the _dependencies_ value:

```swift
dependencies: [
  .package(name: "Beagle", url: "https://github.com/ZupIT/beagle.git", from: "1.7"),
]
```

And next, add `Beagle` as a dependency of your application target:

```swift
targets: [
  .target(name: "MyApp", dependencies: ["Beagle"], path: "Sources")
]
```

## Next Steps

On this section, you made Beagle's **initial installation** on your application!  
Now, keep configuring Beagle:

👉To keep knowing Beagle and test if everything worked with the installation, go to **initial configurations** and [**create your first Hello World!**]({{< ref path="/get-started/using-beagle/ios#how-to-display-a-hello-beagle-screen" lang="en" >}})

👉 If you want to go straight to practice, access our [**tutorial to create a project from zero**.]({{< ref path="/get-started/creating-a-project-from-scratch/case-ios/" lang="en" >}})
