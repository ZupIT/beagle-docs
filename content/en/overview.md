---
title: Overview
weight: 1
description: >-
  Here, you'll find information about Beagle before getting deeper
  in the project.
---

---

## What is Beagle?

Beagle is an **open source framework** that helps developers implement **Server-Driven UI** in a **cross-platform** way.

By using Beagle, developers can:

- **Rapidly change an application layout, data, navigation flow, or even logic**, just by changing code in your backend
- **Be more independent of mobile stores** (App Store and Play Store), since most changes won't need an app update
- **Have more confidence that their application behaves similar on different platforms**, since more code will be shared and standarized between backend and frontend
- **Easily test new business hipothesis or make important fixes on live applications** to rapidly improve users experience and receive feedbacks

## How does Beagle work?

### Simple Example

Here we will show you a simple screen declared via Beagle, containing just texts, images, and some layout and style configurations:

{{% playground language="en" %}}

As you can see on the left side, we are declaring our screen with JSON. You can think of that JSON as what your backend provides to your frontend via a service call. The frontend will then interpret it, and properly render it on the platform's screen (as you can see in the right side). Beagle provides libraries on the backend and frontend to completely handle this workflow for you.

Just to clarify, we are using JSON here because it is the most straightforward way to use Beagle, but it's not the most productive and scalable. We actually have a "language" (DSL in Kotlin) that you should use in your backend to produce this same JSON in a more productive way – with autocomplete and other benefits.

Throughout our documentation, you will see examples which use this tool we call **Playground**. By using it, you can quickly see how Beagle APIs work in real life. You can as well edit the code on the left, and run it on different platforms just by selecting it inside the playground. To better understand how to use this tool, you can go [here](playground/_index.md).

#### Components

Now, let's take a closer look inside this JSON, so you can better understand Beagle's capabilites. The first thing to notice is this structure:

```json
{
  "_beagleComponent_": "beagle:container",
  "style": {},
  "children": []
}
```

This is what we call a **Component**, and you can visualize that due to the presence of `_beagleComponent_` property. Beagle comes with a bunch of useful components (you can navigate through them later [here](api/components/_index.md)), and you can also define your own components, we call that **Custom Components**, but that's a later topic. This one is a really basic and important component named [Container](api/components/layout/container.md), it allows you to group other components. That's why it has a property named `children`

### Overview of Beagle's architecture

![An overview of Beagle's architecture](/shared/beaglemobileback.png)

---

## Platforms and Versions

Beagle has different libraries/frameworks for each supported platform, in the following list you can see and access the most up to date versions:

{{% alert color="info" %}}
**Backend Kotlin:** [![back](https://camo.githubusercontent.com/27998a386042ecb2cae7b9f09ae159bd07c935bd/68747470733a2f2f696d672e736869656c64732e696f2f6d6176656e2d63656e7472616c2f762f62722e636f6d2e7a75702e626561676c652f6672616d65776f726b)](https://mvnrepository.com/artifact/br.com.zup.beagle/framework)

**Mobile**:

- **Android:** [![Maven Central](https://img.shields.io/maven-central/v/br.com.zup.beagle/android)](https://mvnrepository.com/artifact/br.com.zup.beagle/android)
- **iOS:** [![badge](https://img.shields.io/cocoapods/v/Beagle)](https://cocoapods.org/pods/Beagle)
- **React Native:** [![react native badge](https://img.shields.io/npm/v/@zup-it/beagle-react-native?logo=React)](https://www.npmjs.com/package/@zup-it/beagle-react-native)

**Web:**

- **Angular:** [![badge](https://img.shields.io/npm/v/@zup-it/beagle-angular?logo=Angular)](https://www.npmjs.com/package/@zup-it/beagle-angular)
- **React:** [![badge](https://img.shields.io/npm/v/@zup-it/beagle-react?logo=React)](https://www.npmjs.com/package/@zup-it/beagle-react)
{{% /alert %}}

### Understanding version numbers

Beagle's version follows the [semantic versioning](https://semver.org/) concept. The documentation is versioned according to the *major* Beagle version. Between platforms, the features compatibility is by the minor version. For example, it is possible to use 1.0.0 in the backend with 1.0.1 on Android, 1.0.2 on iOS and 1.0.3 on the web react.

Some definitions on this documentation exists only in some specific minors or patches. See the captions used to denote these cases:

- `x.y.z`: an exclusive definition of the version x.y.z;
- `>=x.y.z`: existing definition from x.y.z version;
- `<=x.y.z`: existing definition until the x.y.z version.
