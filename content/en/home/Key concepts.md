---
title: Key concepts
weight: 2
description: >-
  Here, you'll find all the definitions for the main terms and expressions used
  on our documentation and on Beagle.
---

---

### **Backend For Frontend**

Also known as **BFF**, it is the server that makes it possible to send JSON objects to be rendered and, consequently, viewed on the frontend. This component allows screens and business rules to be written only once and then to be rendered natively on each platform where Beagle is present. The consumption of the APIs that provide the data for the application before executed by the fronts, is now the responsibility of BFF.

### **Declarative Views**

Paradigm in which layouts are built in a simplified way, since, the focus is on what the layout should be, letting Beagle solve its configuration. These declarative layouts are built using widgets both on **BFF** and **Android** written in **Kotlin** and on **iOS** in **Swift**.

### **Design System**

It is the structure that contains all the standard components and properties for a product or service. In development, it is essential that the Design System repository keep component styles, resources and themes of that application in one place.

In order for Beagle to work with the Design System of your application, it is necessary to have all of these styles implemented so that they can be viewed the moment the files are rendered.

### **Layout Engine**

Tool that takes care of **rendering the native visual elements** of an application. When Beagle deserializes the information contained in JSON, the layout engine comes into play by rendering the components generated based on the Design System of the application. Beagle uses [**Yoga Layout**](https://www.yogalayout.com) to natively render components on Android and iOS platforms and build their respective layouts using [**Flexbox**](/home/resources/components-positioning/) concepts.

### **Server-Driven UI**

It is the concept in which a specific backend \(BFF\) **consumes the application data** and supplies it to the frontend together with their respective **visual structures** through one or more JSONs, that is, it not only informs the content of the screen, but also its structure , in addition to the flow of these pages if any.
