---
title: Flutter
weight: 13
description: >-
  Here, you'll find how to install Beagle on your Flutter application.
---

---

## Introduction
This is the library responsible for rendering a Beagle JSON (payload) in Flutter. It is currently in alpha stage, and most features have not yet been implemented. We welcome any help from the community in making improvements to the API -
which isn't finished - and implementing features that are missing. You can find
[here]({{< ref path="/resources/customization/beagle-for-flutter/development" lang="en" >}}) our current state of development.

## Versioning
Every alpha and beta version of Beagle Flutter will follow the pattern `0.x.y`, where `x` is the version of Beagle Web
it's based on and `y` is every subsequent version where `x` would be the same.

In the version number, `x` refers to a version of the Beagle Web, because Beagle Flutter uses this lib under the hood.

## Null safety compatibility
For now, we'll not support null safety for the alpha versions, however this is a high priority implementation and should be available in future versions.

## Installation
1. Open the file `pubspec.yaml` in the root of your project.
2. Under `dependencies`, add `beagle: ^0.9.0-alpha`, or whatever the most recent version is.
3. Also add `beagle_components: ^0.9.0-alpha`. You can omit this dependency if you're familiar with Beagle and won't use any
of the default components.
4. In your IDE (Android Studio or Visual Studio Code), click `pub get`. Or, from the terminal, type `flutter pub get`.

{{% alert color="success" %}}
Well done! The library was installed. Continue at
[**how to use Beagle on Flutter.**]({{< ref path="/get-started/using-beagle/flutter" lang="en" >}})
{{% /alert %}}

## **Next Steps**

In this section, you made Beagle's **initial installation** on your application!  
Now, keep configuring Beagle:

👉 Go to
[**initial configurations** ]({{< ref path="/get-started/using-beagle/flutter" lang="en" >}})
to enable the use of Beagle on your Flutter project.
