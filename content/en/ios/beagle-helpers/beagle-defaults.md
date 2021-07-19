---
title: Beagle Defaults
weight: 17
description: 'This framework provides default implementation of network client, cache control and logger. That implementation is easily embedded and used in your Beagle project.'
---

---

![Cocoapods](https://img.shields.io/cocoapods/v/BeagleDefaults?label=Beagle-Defaults)
![Cocoapods](https://img.shields.io/cocoapods/v/Beagle?label=Beagle)

### Topics covered
<hr>

* What is it?
* Installation

### Requirements
<hr>

* Cocoapods installed.

**It's recommended for more advanced users of Beagle.**

### What is it?
<hr>

It's a lib that contains default implementations of the network layer, cache management, and log system. It can be used by Beagle users that do not want to implement these layers from scratch.


### Installation
<hr>

Add BeagleDefaults as a dependency via CocoaPods. See below: 

```ruby
target 'MyApp' do
  pod 'BeagleDefaults'
end
```

After adding BeagleDefaults as a dependency in your project, you can use all the default implementation in your `Beagle.dependencies`.

The implementation can be changed up to your preferences. 
Before using the implementation mentioned, check your product's security guidelines, cache management, and log system.

<hr>

##### More about Beagle: https://github.com/ZupIT/beagle
##### For more on Beagle-Scaffold: Please check our [Beagle-Scaffold]({{< ref path="/get-started/using-beagle-helpers/ios/beagle-scaffold" lang="en" >}}) documentation.
