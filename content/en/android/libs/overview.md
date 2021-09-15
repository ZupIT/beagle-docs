---
title: Overview
weight: 1
type: overview
description: 'Here you will find a library to help when you want to start a project using beagle for Android. These libs will facilitate the initial Beagle configuration in a project, avoiding some steps, and starting studies quicker.'
---

---

### Using libs as a support

To start using Beagle, you may use the libraries to help you, see below: 

{{% alert color="warning" %}}
![Maven Central](https://img.shields.io/maven-central/v/br.com.zup.beagle/beagle-scaffold?color=green&label=Beagle-Scaffold)

This library will define almost all the configurations you need to start Beagle in your project. The use of these libraries are recommended if you have never used Beagle before. Go to the [Beagle-Scaffold]({{< ref path="/android/libs/beagle-scaffold.md" lang="en" >}}) section to configure Beagle in your Android application.
{{% /alert %}}

{{% alert color="warning" %}}
![Maven Central](https://img.shields.io/maven-central/v/br.com.zup.beagle/beagle-defaults?color=green&label=Beagle-Defaults)

This library will define only the classes defining the HttpClient layer, logger and cache default that shows Beagle's contract.

The other configurations you need for Beagle to work are manually made. All these classes are available on Scaffold library. You can access the [Beagle-Defaults]({{< ref path="/android/libs/beagle-defaults.md" lang="en" >}}) section to configure Beagle in your Android application. 
{{% /alert %}}