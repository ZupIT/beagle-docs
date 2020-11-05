---
title: "Overview"
linkTitle: "Overview"
weight: 1
description: >
  Here's where your user finds out if your project is for them.
---

## What is Beagle?

Beagle is an open source framework of cross-platform development based on the implementation paradigm of Server-Driven UI.

{{% pageinfo %}}
The main gain Beagle gives you is to allow teams to make layout and data changes directly in native mobile or web applications by changing the code on backend.
{{% /pageinfo %}}

In this way, it's possible to create, test and quickly update native application's components without need to approve this changes on the store (App Store or Play Store).

Try answering these questions for your user in this page:

## Versioning

Beagle's version follow the semantic versioning concept. The documentation is versioned according to the major Beagle version, meaning the main version. Between platforms, the features compatibility is by the minor version. For example, it is possible to use 1.0.0 in the backend with 1.0.1 on Android, 1.0.2 on iOS and 1.0.3 on the web react.

{{% pageinfo %}}
Beagle's current releases version are:

* Android:
* iOS:
* WEB:
* Angular:
* React:
* Backend
{{% /pageinfo %}}

Some definitions on this documentation exists only only in some specific minors or patches. See the captions used to denote these cases:

* x.y.z: an exclusive definition of the version x.y.z;
* >=x.y.z: existing definition from x.y.z version;
* <=x.y.z: existing definition until the x.y.z version.

## How does Beagle works?

The tool works as a facilitator of BFF (Backend For Frontend). This means that Beagle, from a library of components defined in the Design System of the Android, iOS or Web application, makes the visual and behavioral change of them by returning a JSON file that indicates what and where each component should be rendered and which the action they are going to perform.

![image](https://gblobscdn.gitbook.com/assets%2F-M-Qy7jZbUpzGRP5GbCZ%2F-MAYk1tsvdSRwGMB7smg%2F-MAYm70iSNvBhNAMre7F%2FBeagleMobileBack.png?alt=media&token=3cee72e2-5cd8-486b-8fdd-c6d947fe8f10)

The reason Beagle is able to make this change from the frontend from the backend is because its architecture is structured in Server-Driven UI, where BFF constructs the data, components and actions present on the screen declaratively and forwards them in JSON format , while the front deserializes it, renders the visual components natively in addition to executing and assigning the actions present in each of them.

## Beagle's Pillars

Considering that it's a tool based on Server-Driven, the JSON objects configured to run your application can be organized in 3 basic pillars:

* Content
* Visual Structure
* Flow (or Actions)

After defining in the frontend and backend how the visual structure of the application will be with the customized components and actions, as well as how they can be changed, the BFF will be able to communicate with the front.

In this way, new features, flows, customizations and combinations of visual components can be tested without the need to publish updates to the application, optimizing type A / B tests.

![image](https://gblobscdn.gitbook.com/assets%2F-M-Qy7jZbUpzGRP5GbCZ%2F-MAYk1tsvdSRwGMB7smg%2F-MAYm70lgX9l5VmJmik-%2FBeagleComp.png?alt=media&token=95dab0cb-0d8e-4bb7-8b5b-c029e9111689)

## Why use Beagle?

{{% pageinfo %}}
Beagle was created to optimize time and resources for development's, design's and business' teams to publish and keep updated their applications without need to approve it on App Store or Play Store and, also, respecting the application's design system.
{{% /pageinfo %}}

The main advantages of using Beagle on your project are: 

* More flexibility at work, specially among developers and UI/UX designers when it's necessary to make pontual changes.

* Easy app maintenance which enables to make constant tests to improve your application.

* Minor risks of duplicate code because all consumption of APIs, flows and rules will be in one place, BFF.
Another fundamental gain is that Beagle allows you to reduce user's feedback time, once that the changes are quickly done, tested and validated.

Help your user know if your project will help them. Useful information can include: 

* **What is it good for?**: What types of problems does your project solve? What are the benefits of using it?

* **What is it not good for?**: For example, point out situations that might intuitively seem suited for your project, but aren't for some reason. Also mention known limitations, scaling issues, or anything else that might let your users know if the project is not for them.

* **What is it *not yet* good for?**: Highlight any useful features that are coming soon.

## Where should I go next?

Give your users next steps from the Overview. For example:

* [Getting Started](/docs/getting-started/): Get started with $project
* [Examples](/docs/examples/): Check out some example code!

