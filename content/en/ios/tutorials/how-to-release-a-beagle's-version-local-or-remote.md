---
title: How to release a Beagle's version local or remote
weight: 220
description: >-
 In this section, you will find how to release a version of Beagle locally or using a separate repository.
---

---

## Publishing in a remote repository

### Using CocoaPods

On the `podfile`  file, like any other dependency, put Beagle and add the address of your repository, see the example below:


```text
pod 'Beagle', :git => 'https://github.com/profile/myrepo'
```

After you have configured the `podfile`, run the following command to download from your repository: 


```text
pod install
```

### Using Carthage

On the `Cartfilefile`, add the repository of your Beagle's version:

```text
github “YourUser/YourRepository”
```

## Publishing in a local repository

### Using CocoaPods

Open the terminal and go to Beagle's root folder and type the following command:

```text
pod spec create MyBeagle
```

And `MyBeagle.podspec`  will be created. Now open this file with a text editor and follow the example:

```swift
Pod::Spec.new do |spec|

spec.name = "MyBeagle"
spec.version = "1.0.0"
spec.summary = "A short description"
spec.description = "Complete description"

spec.platform = :ios, "12.2"

spec.source = { :path => '.' }
```

Now, run the command below on your terminal with the root folder of your project:

```text
pod install
```

### Using Carthage

On the `Cartfile`, add the directory of your Beagle's version like in the example below:


```text
git "file:////Users/beagle" "master"
```

{{% alert color="warning" %}}
It's important that you add the whole directory's path with your Beagle version so this call works properly. 
{{% /alert %}}