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

You can add this as a dependency via CocoaPods.

```ruby
target 'MyApp' do
  pod 'BeagleDefaults'
end
```

After adding BeagleDefaults as a dependency in your project, you can use all the default implementation in your `Beagle.dependencies`.

All implementation can be changed up to your preferences. It's still not recommended to use mentioned implementation without checking your product's security guidelines, its cache management and log system.

<hr>

##### More about Beagle: https://github.com/ZupIT/beagle
##### For more on Beagle-Scaffold: Please check our [Beagle-Scaffold]({{< ref path="/get-started/using-beagle-helpers/ios/beagle-scaffold" lang="en" >}}) documentation.
