---
title: Installing
weight: 12
description: >-
  Here, you'll find how to install Beagle on your React Native application.
---

---

## Introduction
This guide considers you're familiar with React Native. If this is not the case, please check the
[React Native guide on how to install its dependencies and create your first application](https://reactnative.dev/docs/environment-setup).

Beagle is available for React Native, but it's not stable yet. The development is incomplete and we
still have some work to do before moving from beta versions. Unfortunately, our team is not big
enough to make React Native a priority and because of this, the development is relatively slow. We
decided to release a beta version anyway because we figured out if it's in interest of the
community, it can help us finalize it.
[Here]({{< ref path="./customization/development" lang="en" >}})
you can find a list of everything that should be working properly and everything that still needs
work. Help is very welcomed here!

## Versioning
All versions of Beagle RN (Beagle React Native) to be launched before the final stable version
follows the pattern "0.x.y", where "x" represents the version of Beagle Web Core it uses. Since we
are currently in version "1.7.0" of Beagle Web Core, the current version of Beagle RN is 0.7.0. "y"
will be used to launch new versions that uses the same version of Beagle Web Core.

## Compatibility
Beagle RN Beta is guaranteed to work only with latest releases of React Native, i.e.
version 0.64.1 or above. It is probably possible to support older versions, but it is not a priority
right now.

## Installation
At the root of your React Native project, install it with npm or yarn.

If you use yarn:
```bash
yarn add @zup-it/beagle-react-native
```

If you use npm:
```bash
npm install @zup-it/beagle-react-native
```

{{% alert color="success" %}}
Well done! Your library was installed. Continue at
[**how to use Beagle on React Native.**]({{< ref path="./react-native-using.md" lang="en" >}})
{{% /alert %}}

## **Next Steps**

In this section, you made Beagle's **initial installation** on your application!  
Now, keep configuring Beagle:

👉 Go to
[**initial configurations** ]({{< ref path="./react-native-using.md" lang="en" >}})
to enable the use of Beagle on your React Native project.
