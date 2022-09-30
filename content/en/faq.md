---
title: FAQ
toc_hide: true
description: >-
  Here, you'll find answers to frequently asked questions about Beagle.
---

---

## What is Beagle?

Beagle is an open source framework of cross-platform development, it is based on the native Server-Driven UI implementation in iOS and Android. You can easily change your application's layout and DATA changing only the screen code in backend.

## How does Beagle work?

The developer declares the backend screens and the expose the endpoints that represent them. These endpoints are called using Beagle to render the screen components on the web or mobile. 

Beagle works as a 'bridge' between front and backend, it is possible that the design components of your application have a parameter in backend which makes a native application possible. 

## My application's architecture will change if I use Beagle?

No, Beagle does not interfere with your project's architecture.

## Why should I use Beagle and not React Native or Flutter? 

Beagle has a different goal than React Native and Flutter. Beagle's purpose is to provide Server Driven UI, i.e. to represent the UI in the backend,
send a serialized version of it to the frontend, deserialize it and render it.

Since we need a backend representation of the UI, it becomes agnostic of platform and this is the reason why you can write a single UI definition in
the backend and not program the same logic in different languages. Having said that, the frontend components (design system) still have to be
implemented once for platform.

React Native and Flutter don't do server driven UI, their purpose is to create visual components and the behavior only once, but in a traditional
fashion. If you don't need Server Driven UI, you should be looking into them instead of Beagle.

## Is it possible to make tests in server driven screens? 

Yes! Unit tests like instrumented test work the same way on Beagle. 

## Can I use Beagle in an application that already has developed resources? 

Yes! If your application already have the developed components in a design system, you are able to use them on Beagle. You only have to see if these components are defined and then it will be easy to register them on Beagle. 

## Does a Beagle application need to be 100% Server Driven? 

No, the application can use only one Server Driven screen in some app's flows. You can continue in one server driven flow or return to the native screen normally. 

## Do I have to use Beagle in the whole application? 

No, your application will continue the same and it can be native even with Beagle on it. You may use Beagle whenever you want.

## Will my application work offline? 

Depends. All server driven application when requests the server a flow, it needs to be connected in order to receive a response from backend. The server driven flows cannot be solved without a connection. But, your if your application is not 100% server driven, there is a part of it that doesn't need to get online information, then it will work. The application also can be configured to call other screens in case they are offline. 

### If my my internet connection is interrupted in the middle of the application flow? 

The way to deal with disconnection cases is to create local declaratives screens to `fallback`. 

## Will I have problems to upload an application with Beagle on App Store or Play Store? 

No! All the components used will be defined in your application when the store's upload happens. Beagle is dynamic when dealing with updates, this happens because the work is in the backend and there isn't any frontend configuration that is big enough to cause a block on Apple or Google. Beagles wants to minimize the `deploys` on the stores.

## Will I have performance problems with Beagle?

Not, it's the quite opposite. We made a renderization `benchmark` and Beagle - using Yoga's Layout mechanism - had a better answer than other native renderization strategies, like `Auto Layout (IOS)` and `Constraint Layout (Android)`.

## How about backend's answer time? Will my application be slower?

No, because Beagle uses a **cache mechanism** to store adjacent screens and, then, optimize backend's calls. This means that you don't need to request again to backend in the user's click moment. 


Beagle's latest version is:undefined

## Is Beagle a free tool?

Yeas! Beagle is an **open source development framework**, which means that its totally free.

## **Can I create a BFF with a different language than JVM?**

It's possible to create a BFF in a different language. However, we don't have ready `libs` to help you on this process, so it would be necessary that the developer create a mechanism to respect Beagle's contracts. 

## What are the advantages of using Beagle?

One of the main advantages is that Beagles facilitates the development because of backend's configuration based on [**BFF paradigm.**]({{< ref path="/key-concepts#backend-for-frontend" lang="en" >}})

This means that Beagle helps you on changing screen's `layouts`, screen's flows and app's navigation. All of this is made from pages declaratively created in your BFF with a components' library defined on your application's frontend, which helps on interface's change. 

It allows you to: 

* Decide which visual component must be presented: which texts, subtitles and any other visual information that must be shown, centralized and abstracted on the server. 

This avoids a replication on each frontend's platform that consumes this API. The server applies this business logic and use its results to assemble the API response representing it. 

* Make A/B tests to change the order how components are presented.

## Can I use Beagle for Android, iOs or Web development? 

Yes! As a cross-platform framework, Beagle helps you on developing application on these three platforms by using the [**Server-Driven UI concept**]({{< ref path="/key-concepts#server-driven-ui" lang="en" >}}), which enables that even a BFF may be used on all of these applications. 

You can see more how to create Beagle's projects with each of these platforms on: 

* [**Beagle for Android**]({{< ref path="/android/getting-started" lang="en" >}})
* [**Beagle for iOS**]({{< ref path="/ios/getting-started" lang="en" >}})
* [**Beagle for Web**]({{< ref path="/web/commons/creating-a-project-from-scratch" lang="en" >}})

## How to make unitary and instrumented tests on server-driven screens?

Beagle doesn't interfere in unitary or instrumented tests, so they can be normally done.

## How to make unitary tests using Beagle?

Unitary tests has the goal to gauge the code's functionality in a minor fraction. The applications' tests that use Beagle are done in the same way as in applications that don't use our tool. That means Beagle doesn't interfere in these tests. 

### How to make instrumented tests using Beagle?

Instrumented tests are done in applications using Beagle in the same way as in applications that don't use our tool.

However, it's important to reinforce that, usually, a server-driven component may not contain an ID that mostly identifies an instrumented test. Thinking of it, we add a `WIDGET` element \(that refers a component\) and an `ID attribute` so it can be possible to programatically identify it.

### How does Beagle versioning work?

Beagle's version follows the [semantic versioning](https://semver.org/) standard.

Between platforms, the last number (**patch**) tends to diverge, as some bugs only occur on a certain platform. So, the following example is normal and expected: having version `1.0.0` in the backend with `1.0.2` in Android, `1.0.0` in iOS, and `1.0.3` in web React.

The *documentation* only has versions with numbers up to the **minor**, for example: `1.2`. However, some definitions from previous minor versions may still be present, even if they are not valid anymore. If that's the case, we will try to inform those definitions specific versions.
