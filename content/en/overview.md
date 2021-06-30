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
- **Rapidly change an application layout, data, navigation flow, or even logic**, just by changing code in the backend.
- **Be more independent of mobile stores**, like App Store and Play Store, because most changes won't need an app update.
- **Have more confidence that applications will behave similarly on different platforms**, since code will be shared and standardized between backend and frontend.
- **Easily test new business hypothesis or make live fixes on applications** to improve users' experience and receive feedback.
{{% /alert %}}

## How does Beagle work?

The best way to understand Beagle is to see it in action. Here, we will show you a simple screen declared via Beagle, containing just texts, images, and some style configurations. At the end of this section, you will be familiar with Beagle's most common features.

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
    },
    {
      "_beagleComponent_": "beagle:button",
      "text": "Click here to show an Alert",
      "onPress": [
        {
          "_beagleAction_": "beagle:alert",
          "title": "My Title",
          "message": "Alert message"
        }
      ]
    }
  ]
}
-->

{{% playground file="overview-simple-example.json" language="en" %}}

> Throughout the documentation, you will see examples – like the one above – that use a tool named **Playground**. By using it, you can:
>
> - Quickly see how Beagle works;
> - Edit the code on the left and run it to see visual updates;
> - Select different platforms to run your code on.
> For more information about this tool, check out the [Playground section]({{< ref path="playground/_index.md" >}}).

As you can see on the left side, we are declaring our screen with JSON. You can suppose this JSON is what your backend provides to your frontend via an HTTP response. The frontend will then interpret it, and properly render it on the platform's screen (as you can see on the right side). Beagle provides libraries on the backend and frontend to completely handle this workflow for you.

Just to make it clear, in this example, we are using JSON because it is the most straightforward way to use Beagle, but it's not the most productive and scalable. Beagle actually has a "language" (DSL in Kotlin) that you should use in your backend to produce this same JSON in a more productive way – with autocomplete and other benefits.

Check out which frontend platforms Beagle supports [in the platforms and versions section](#platforms-and-versions). They all render components **natively**, for example, if you use Beagle in a native mobile application on Android or iOS, the libraries for these platforms will use native UIs (Android Views and UIKit, respectively), and you can even integrate your own native components to work with Beagle.

### Components

Now, let's take a closer look inside that JSON, so you can better understand Beagle's capabilities. The first thing to notice is its structure:

```json
{
  "_beagleComponent_": "beagle:container",
  "style": {...},
  "children": [...]
}
```

This is a **Component**, you can be sure because of the `_beagleComponent_` attribute. Beagle comes with a lot of useful components (you can navigate through them [in the components section]({{< ref path="api/components/_index.md" >}})), and you can also define your own components, it is called **Custom Components**, but save that for later. The example uses a simple and common component named [Container]({{< ref path="api/components/layout/container.md" >}}), and it allows you to *group together* `children` components.

```json
{
  "_beagleComponent_": "beagle:container",
  "style": {...},
  "children": [
    { 
      "_beagleComponent_": "beagle:image",
      ...
    },
    { 
      "_beagleComponent_": "beagle:text",
      ...
    },
    { 
      "_beagleComponent_": "beagle:button",
      ...
    }
  ]
}
```

> There are other components with the *children* attribute (sometimes just *child*) like [Screen]({{< ref path="api/screen/_index.md" >}}) and [ListView]({{< ref path="api/components/layout/listview.md" >}}), and they are used to **compose view hierarchies**.

In this example, there are 3 components inside the *Container*: [Image]({{< ref path="api/components/ui/image/_index.md" >}}), [Text]({{< ref path="api/components/ui/text.md" >}}), and [Button]({{< ref path="api/components/ui/button.md" >}}). Each one have different attributes to customize their rendering, and you can see all available attributes in each component's API documentation.

The *Image* component, for example, has an attribute named `path` that can receive `remote` or `local` paths to the image data.
Check out below, we used the `remote` image by providing a `url` which Beagle will use to make a network request when the component gets rendered:

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

> You can have full control of the network request triggered by this remote image. You just need to configure your own *Network Layer* as a *Beagle Dependency*. To better understand how to do that, or how to configure other Beagle Dependencies, you can check the [Customization section]({{< ref path="resources/customization/_index.md" >}}).

### Styling

Let's take a closer look into the `style` attribute, which describes how to position and layout components and their children:

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

Most components have this attribute, and it's responsible for an important Beagle feature: **developers have control *through backend* on UI positioning**. You can experience that by changing the `flexDirection` attribute to **`ROW`** in Playground, and you will see the same views positioned horizontally. In your real application, you can deploy this exact change in the backend, and it will be reflected *immediately* in the frontend – even on mobile platforms, you don't need store updates.

> Many tools built in-house for Server Driven UI don't allow this kind of power over a UI positioning and this comes out of the box with Beagle.

In the example's *Container*, we are using 3 styling attributes: `flex`, `size`, and `backgroundColor`. There are other options as well, you can see them [in the Style section]({{< ref path="api/widget.md#style-attributes" >}}).

#### Flex

The `flex` attribute allows you to **use the same Layout Engine on different platforms**. This can be a huge win for your team because all platforms will be positioning views according to the same rules, and you won't need to "duplicate" layout logic for each platform.

- If you have experience with web development, you probably already know how to use `flex`, since it is used as a cross-platform [CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp). To accomplish this, Beagle uses a library called [**Yoga**](https://yogalayout.com), a cross-platform library developed in C++ by Facebook, and also used in other projects (e.g: React Native).

- If you are not familiar with Flexbox, check out [the positioning section]({{< ref path="resources/components-positioning/_index.md" >}}), and the [Yoga's documentation](https://yogalayout.com/docs) for more details.

### Actions

Finally, let's talk about Actions, a way to add *runtime dynamism* to a Beagle component. In the example, there is an action inside a button:

```json
{
  "_beagleComponent_": "beagle:button",
  "text": "Click here to show an Alert",
  "onPress": [
    {
      "_beagleAction_": "beagle:alert",
      "title": "My Title",
      "message": "Alert message"
    }
  ]
}
```

The [Button component]({{< ref path="api/components/ui/button.md" >}}) has an attribute named `onPress` that can receive a list of actions, which will only be executed when the button gets pressed. You can see all Beagle's default actions in the [Actions section]({{< ref path="api/actions/_index.md" >}}). But it's also possible to create your own actions (a proccess similar to *Custom Components*), which we call [Custom Actions]({{< ref path="resources/customization/_index.md" >}}).

This example uses an [Alert action]({{< ref path="api/actions/alert.md" >}}), which results in showing an alert component when someone taps the button. You can do that in the *Playground* and see it yourself.

Besides showing an alert, you can use actions to:

- Navigate to another screen with a [Navigate action]({{< ref path="api/actions/navigate/_index.md" >}}).
- Send an http request with a [SendRequest action]({{< ref path="api/actions/sendrequest.md" >}}).
- Add new views in the current view hierarchy with a [AddChildren action]({{< ref path="api/actions/addchildren.md" >}}).

Also, actions are one of the building blocks of **making complex and dynamic screens**. You can see more about this topic in the ["How to make communication between components" section]({{< ref path="tutorials/how-to-make-communication-between-components.md" >}}).

---

## Conclusion and next steps

After seeing Beagle's most essential parts, you are now ready to dive into more advanced topics:

- If you want to see a more complex example of an application that completely leverages Beagle, you can check [this repo](https://github.com/ZupIT/beagle-adoption-demo). It has a backend in Kotlin, and native mobile frontends in Android and iOS.

- If you want to integrate Beagle in your existing application, you can follow the [installation guide]({{< ref path="get-started/installing-beagle/_index.md" >}}) for each platform, and then check the [start using Beagle section]({{< ref path="get-started/using-beagle/_index.md" >}}).
  
- If you want to start a new project with Beagle, you can follow the ["creating a project from scratch" guide]({{< ref path="get-started/creating-a-project-from-scratch/_index.md" >}})

- If you want to know more of a particular API, use the [API section]({{< ref path="api/_index.md" >}}).

- If you are not sure how to find information about a specific context, use the **search bar on the top right corner of the screen** to search for words throughout this documentation.

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
- **Flutter:** *It is being developed, check out more information [in this folder](https://github.com/ZupIT/beagle/tree/master/flutter)*
- **SwiftUI and Compose:** we will try to support them in the future

**Web:**

- **Angular:** [![badge](https://img.shields.io/npm/v/@zup-it/beagle-angular?logo=Angular)](https://www.npmjs.com/package/@zup-it/beagle-angular)
- **React:** [![badge](https://img.shields.io/npm/v/@zup-it/beagle-react?logo=React)](https://www.npmjs.com/package/@zup-it/beagle-react)
{{% /alert %}}

### Understanding version numbers

Beagle's version follows the [semantic versioning](https://semver.org/) standard.

The *documentation* only has versions with numbers up to the **minor**, for example: `1.2`. However, some definitions from previous minor versions may still be present, even if they are not valid anymore. If that's the case, we will try to inform those definitions specific versions.

Between platforms, it's possible to use different **patch** versions. For example, you can have version `1.0.0` in the backend with `1.0.1` on Android, `1.0.2` on iOS, and `1.0.3` on the web react.
