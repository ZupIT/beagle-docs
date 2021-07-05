---
title: Supporting libs
weight: 15
description: 'Here you will find a library to help when you want to start a project using beagle for Android. These libs will facilitate the initial Beagle configuration in a project, avoiding some steps, and starting studies quicker.'
---

---

![Maven Central](https://img.shields.io/maven-central/v/br.com.zup.beagle/beagle-scaffold?color=green&label=Beagle-Scaffold)
![Maven Central](https://img.shields.io/maven-central/v/br.com.zup.beagle/beagle-defaults?color=green&label=Beagle-Defaults)
![Maven Central](https://img.shields.io/maven-central/v/br.com.zup.beagle/android?label=Beagle)

<hr>

### Getting started

To start using Beagle right now, you can use the libs below:
* [Beagle-Scaffold]({{< ref path="/get-started/using-beagle-helpers/android/beagle-scaffold" lang="en" >}}):
This lib will hold almost all configurations needed to start using Beagle in your project.
We advise the use of these libs for people that never used Beagle before.

* [Beagle-Defaults]({{< ref path="/get-started/using-beagle-helpers/android/beagle-defaults" lang="en" >}}):
This lib is advised for more experienced Beagle users and 
will hold only a few class configurations necessary to 
use Beagle in an application. These configurations include 
default HttpClient, Logger and Cache classes.<br>
All these are also available in the Scaffold lib above.


{{% alert color="warning" %}}
If you wish to use Beagle for an application in production we advise you to configure a project
 from scratch using our
 [**documentation**]({{< ref path="/get-started/creating-a-project-from-scratch/case-android/" lang="en" >}})
{{% /alert %}}
