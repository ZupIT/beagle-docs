---
title: iOS
weight: 15
description: 'Here you will find libraries to help when you want to start a project using beagle for iOS.These libs will facilitate the initial Beagle configuration in a project, avoiding some steps, and starting studies quicker.'
---

---

![Cocoapods](https://img.shields.io/cocoapods/v/BeagleScaffold?label=Beagle-Scaffold)
![Cocoapods](https://img.shields.io/cocoapods/v/BeagleDefaults?label=Beagle-Defaults)
![Cocoapods](https://img.shields.io/cocoapods/v/BeagleGRPC?label=Beagle%20gRPC)
![Cocoapods](https://img.shields.io/cocoapods/v/Beagle?label=Beagle)

### Getting started
<hr>

To start using Beagle right now, you can use the libs below:
* [Beagle-Scaffold]({{< ref path="/get-started/using-beagle-helpers/ios/beagle-scaffold" lang="en" >}}):
This lib will hold almost all configurations needed to start using Beagle in your project.
We advise using these libs for people that never used Beagle before.

* [Beagle-Defaults]({{< ref path="/get-started/using-beagle-helpers/ios/beagle-defaults" lang="en" >}}):
This lib is meant for more experienced Beagle users and will hold only a few class configurations necessary to use Beagle in an application. These configurations include default Network, Logger and Cache classes. All these are also available in the Scaffold lib above.

{{% alert color="warning" %}}
If you wish to use Beagle for an application in production we advise you to configure a project
 from scratch using our
 [**documentation**]({{< ref path="/get-started/creating-a-project-from-scratch/case-ios/" lang="en" >}})
{{% /alert %}}