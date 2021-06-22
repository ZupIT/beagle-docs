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

{{% alert color="success" %}}
- **Rapidly change an application layout, data, navigation flow, or even logic**, just by changing code in your backend
- **Be more independent of mobile stores** (App Store and Play Store), since most changes won't need an app update
- **Have more confidence that applications behave similar on different platforms**, since more code will be shared and standarized between backend and frontend
- **Easily test new business hipothesis or make important fixes on live applications** to rapidly improve users experience and receive feedbacks
{{% /alert %}}

## How does Beagle work?

The best way to understand how Beagle works is to see it in action. Here, we will show you a simple screen declared via Beagle containing just texts, images, and some layout and style configurations. At the end of this section, you will be familiar with Beagle's building blocks and most common features.

<!-- json-playground:overview-simple-example.json
{
  "_beagleComponent_": "beagle:container",
  "style": {
    "flex": {
      "flexDirection": "COLUMN",
      "alignItems": "CENTER",
      "justifyContent": "CENTER"
    },
    "size": {
      "height": {
        "value": 100,
        "type": "PERCENT"
      }
    },
    "backgroundColor": "#FFF"
  },
  "children": [
    {
      "_beagleComponent_": "beagle:image",
      "path": {
        "_beagleImagePath_": "remote",
        "url": "https://i.ibb.co/rvRN9kv/logo.png"
      },
      "style": {
        "size": {
          "width": {
            "value": 242,
            "type": "REAL"
          },
          "height": {
            "value": 225,
            "type": "REAL"
          }
        }
      }
    },
    {
      "_beagleComponent_": "beagle:text",
      "text": "Welcome to Beagle playground! \nUse the left panel to start coding!",
      "textColor": "#000",
      "alignment": "CENTER",
      "style": {
        "margin": {
          "all": {
            "value": 40,
            "type": "REAL"
          }
        }
      }
    }
  ]
}
-->

{{% playground file="overview-simple-example.json" language="en" %}}

As you can see on the left side, we are declaring our screen with JSON. You can think of that JSON as what your backend provides to your frontend via a HTTP response. Frontend will then interpret it, and properly render it on the platform's screen (as you can see in the right side). Beagle provides libraries on both backend and frontend to completely handle this workflow for you.

Just to clarify, we are using JSON here because it is the most straightforward way to use Beagle, but it's not the most productive and scalable. We actually have a "language" (DSL in Kotlin) that you should use in your backend to produce this same JSON in a more productive way – with autocomplete and other benefits.

Also, you can see which frontend platforms we support [here](#platforms-and-versions). They all render components **natively**, that is, if you want to use Beagle in a native mobile application on Android and iOS, our SDKs for these platforms will use native UIs (Android Views and UIKit, respectively), and you can even integrate your own native components to work with Beagle.

> Throughout our documentation, you will see examples which use this tool we call **Playground**. By using it, you can quickly see how Beagle work in real life. You can, as well, edit the code on the left, and select different platforms to run your code on. To better understand how to use this tool, you can check this [section]({{< ref path="playground/_index.md" >}}).

### Components

Now, let's take a closer look inside this JSON, so you can better understand Beagle's capabilites. The first thing to notice is this structure:

```json
{
  "_beagleComponent_": "beagle:container",
  "style": {...},
  "children": [...]
}
```

This is what we call a **Component**, and you can ensure that due to the attribute `_beagleComponent_`. Beagle comes with a bunch of useful components (you can navigate through them later [here]({{< ref path="api/components/_index.md" >}})), and you can also define your own components, which we call **Custom Components**, but that's a later topic. This one is a basic and important component named [Container]({{< ref path="api/components/layout/container.md" >}}), it allows you to *group together* those components inside attribute `children`.

There are other components with the *children* attribute (or sometimes just *child*) like [Screen]({{< ref path="api/screen/_index.md" >}}) and [ListView]({{< ref path="api/components/layout/listview.md" >}}), and they are usually used to **compose view hierarchies**. In this example, we have 3 other components inside *Container*: [Text]({{< ref path="api/components/ui/text.md" >}}), [Image]({{< ref path="api/components/ui/image/_index.md" >}}), and [Button]({{< ref path="api/components/ui/button.md" >}}). Each one have different attributes you can use to customize their rendering, and you can see all these attributes in their documentation.

The *Image* component, for example, has this attribute named `path` that can receive `remote` or `local` paths to the image data. Here we use a `remote` image by providing an `url` which Beagle will use to request the image when the component gets rendered.

```json
{
  "_beagleComponent_": "beagle:image",
  "path": {
    "_beagleImagePath_": "remote",
    "url": "https://i.ibb.co/rvRN9kv/logo.png"
  },
  "style": {...}
}
```

> You can have full control on the network request triggered by this remote image, you just need to configure your own Network Layer as a Beagle Dependency. Beagle have many configurable pieces like this, you can see more in [Customization]({{< ref path="resources/customization/_index.md" >}}).

### Styling

Finally, let's take a closer look into the `style` attribute, which describes how to position and layout components and their children. Most of components have this attribute, and it's responsible for an important Beagle feature: **developers have control *through backend* on UI positioning**. You can see this power by chaging the `flexDirection` attribute to `ROW` inside the playground, and you will see the same views positioned horizontally. In a real application, you could deploy this exact change in your backend, and they would be *immediately* reflected in your frontend – even on mobile platforms, without needing mobile stores update.

> Many tools built in-house for Server Driven UI don't allow this kind of power over UI positioning, and this come out of the box with Beagle.

```json
{
  "_beagleComponent_": "beagle:container",
  "style": {
    "flex": {
      "flexDirection": "COLUMN",
      "alignItems": "CENTER",
      "justifyContent": "CENTER"
    },
    "size": {
      "height": {
        "value": 100,
        "type": "PERCENT"
      }
    },
    "backgroundColor": "#FFF"
  },
  "children": [...]
}
```

In our *Container*, we are using 3 styling attributes: `flex`, `size`, and `backgroundColor`. There are other options as well, you can see them all [here]({{< ref path="api/widget.md#style-attributes" >}}).

The `flex` attribute is pretty important because it allows you to **use the same Layout Engine on different platforms**. Since all your platforms will be positioning views according to the same rules, and you don't need to "duplicate" the same layout logic for each platform, this can be a huge win for your team.

If you are familiar with web development, you probably already know how to use `flex` because it's used as a cross-platform [CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp). To accomplish this behind the scenes, we leverage a library called [**Yoga**](https://yogalayout.com), a cross-platform C++ library developed by Facebook and used in other projects (e.g: React Native). If you are not familiar with Flexbox, it takes some time to get used to it, but we bet you will really enjoy it due to its simplicity, power, and universality. [Our documentation]({{< ref path="resources/components-positioning/_index.md" >}}), and [Yoga's own documentation](https://yogalayout.com/docs) can help you to quickly understand it.

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
- **Flutter:** *Being developed in this [folder](https://github.com/ZupIT/beagle/tree/master/flutter)*
- **SwiftUI and Compose:** we will try to support them in the future

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
