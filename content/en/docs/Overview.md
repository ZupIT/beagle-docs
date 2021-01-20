---
title: Overview
weight: 1
description: >-
  Here, you'll find information about Beagle before getting deeper
  in the project.
---

---

## What is Beagle?

Beagle is an **open source framework** of cross-platform development based on the implementation paradigm of **Server-Driven UI.**

{{% alert color="warning" %}}
 Beagle's main benefit is that it allows teams to make **layout and data changes directly in native mobile or web applications** by changing the code on backend. 
{{% /alert %}}

It's possible to create, test and quickly update native application's components without need to approve this changes on the store \(App Store or Play Store\). 

### Versioning

Beagle's version follow the [**semantic versioning**](https://semver.org/) concept. The documentation is versioned according to the major Beagle version, meaning the main version. Between platforms, the features compatibility is by the minor version. For example, it is possible to use 1.0.0 in the backend with 1.0.1 on Android, 1.0.2 on iOS and 1.0.3 on the web react. 

{{% alert color="info" %}}
Beagle's current releases version are: 

* **Android:**[![Maven Central](https://img.shields.io/maven-central/v/br.com.zup.beagle/android)](https://mvnrepository.com/artifact/br.com.zup.beagle/android)
* **iOS:**[![badge](https://img.shields.io/cocoapods/v/Beagle)](https://cocoapods.org/pods/Beagle)
* **WEB:** 
  * **Angular:**[![badge](https://img.shields.io/npm/v/@zup-it/beagle-angular?logo=Angular)](https://github.com/ZupIT/beagle-web-angular)
  * **React:**[![badge](https://img.shields.io/npm/v/@zup-it/beagle-react?logo=React)](https://github.com/ZupIT/beagle-web-react)
* **Backend**[![back](https://camo.githubusercontent.com/27998a386042ecb2cae7b9f09ae159bd07c935bd/68747470733a2f2f696d672e736869656c64732e696f2f6d6176656e2d63656e7472616c2f762f62722e636f6d2e7a75702e626561676c652f6672616d65776f726b)](https://mvnrepository.com/artifact/br.com.zup.beagle/framework)
{{% /alert %}}

Some definitions on this documentation exists only only in some specific minors or patches. See the captions used to denote these cases:

* `x.y.z`: an exclusive definition of the version x.y.z; 
* `>=x.y.z`: existing definition from x.y.z version;
* `<=x.y.z`: existing definition until the x.y.z version. 

## How does Beagle works?

The tool works as a facilitator of **BFF** \([**Backend For Frontend**](/docs/key-concepts#backend-for-frontend)\). This means that Beagle, from a library of components defined in the [**Design System**](/docs/key-concepts#design-system) of the Android, iOS or Web application, makes the visual and behavioral change of them by returning a JSON file that indicates what and where each component should be rendered and which the action they are going to perform.

![](/beaglemobileback.png)

  
The reason Beagle is able to make this change from the frontend from the backend is because its architecture is structured in [**Server-Driven UI**](/docs/key-concepts#server-driven-ui), where BFF constructs the data, components and actions present on the screen declaratively and forwards them in JSON format , while the front deserializes it, renders the visual components natively in addition to executing and assigning the actions present in each of them.

### Beagle's Pillars 

Considering that it's a tool based on Server-Driven, the JSON objects configured to run your application can be organized in 3 basic pillars: 

* Content
* Visual Structure 
* Flow \(or Actions\) 

After defining in the frontend and backend how the visual structure of the application will be with the customized components and actions, as well as how they can be changed, the BFF will be able to communicate with the front.

In this way, new features, flows, customizations and combinations of visual components can be tested without the need to publish updates to the application, optimizing type A / B tests.

![](/beaglecomp.png)

## Why use Beagle?

{{% alert color="success" %}}
Beagle was created to **optimize time and resources** for development's, design's and business' teams to publish and keep updated their applications without need to approve it on App Store or Play Store and, also, respecting the application's design system. 
{{% /alert %}}

The main advantages of using Beagle on your project are: 

* **More flexibility at work**, specially among developers and UI/UX designers when it's necessary to make pontual changes.  
* **Easy app maintenance** which enables to make constant tests to improve your application.  
* **Minor risks of duplicate code** because all consumption of APIs, flows and rules will be in one place, BFF.

Another fundamental gain is that Beagle allows you to **reduce user's feedback time**, once that the changes are quickly done, tested and validated.
