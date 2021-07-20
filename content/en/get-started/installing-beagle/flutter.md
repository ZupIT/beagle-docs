---
title: Flutter
weight: 13
description: >-
  In this section, you'll find how to install Beagle in your Flutter application.
---

---

## Introduction
This is the library responsible for rendering a Beagle JSON (payload) in Flutter.

{{% alert color="info" %}}
This is still in an alpha stage, a work in progress, and Beagle's team wants your help to make improvements to the API and to implement missing features. Check out
[more information]({{< ref path="/resources/customization/beagle-for-flutter/development" lang="en" >}}) and the current state of development.
{{% /alert %}}

## Versioning
Every alpha and beta version of Beagle Flutter will follow the pattern `0.x.y`, where `x` is the version of Beagle Web
it's based on and `y` is every subsequent version where `x` would be the same.

In the version number, `x` refers to a version of the Beagle Web, because Beagle Flutter uses this lib under the hood.

## Null safety compatibility
For now, we don't support null safety for the alpha versions. It will be available soon.

## Installation
Follow the steps to install:

1. Open the file `pubspec.yaml` in the root of your project;
2. Under `dependencies`, add `beagle: ^0.9.0-alpha`, or the most recent version;
3. Add `beagle_components: ^0.9.0-alpha`. You can omit this dependency if you're familiar with Beagle and won't use any
of the default components;
4. In your IDE (Android Studio or Visual Studio Code), click `pub get`. Or, from the terminal, type `flutter pub get`.

{{% alert color="success" %}}
Well done! The library was installed. Continue the configuration in the section [**how to use Beagle on Flutter.**]({{< ref path="/get-started/using-beagle/flutter" lang="en" >}})
{{% /alert %}}

## **Next Steps**

In this section, you made Beagle's **initial installation** in your application!  
Now, keep configuring Beagle:

👉 Go to
[**initial configurations** ]({{< ref path="/get-started/using-beagle/flutter" lang="en" >}})
to enable the use of Beagle on your Flutter project.
