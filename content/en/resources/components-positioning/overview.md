---
title: Overview
weight: 1
type: overview
description: >-
  Here, you'll find information about how to position components on a device
  screen using Beagle.
---

---

{{% alert color="warning" %}}

#### Availability: Beagle 1.0+

{{% /alert %}}

## Introduction

Beagle will use a dependency called **Yoga layout** to position components on your application screen. To do this, Yoga calculates the position the elements are, and after that, it does its rendering.
![](/shared/flex/image125.png)

## About Yoga Layout

[**Yoga**](https://yogalayout.com/) is framework developed by Facebook that position views using the Flexbox concept for Android and iOS applications.

Flexbox is a CSS concept that positions elements in containers dynamically so that, regardless of your application dimensions, you can maintain a flexible layout.

Here follows some key concepts about Flexbox:

- **Main Axis**
- **Cross Axis**
- **Main Size**

For Main Size, it is possible to set **3 types of dimensions:**

1. **Cross Size:** The size of a cross axis.
2. **Main Start and Main** The Start and End point in a main axis.
3. **Cross Start and Cross End:** Start and end in a cross axis.

**‌**These axis values will depend on what is defined at the Flex-direction property.

If it is defined as:

| **row ou row-reverse:** | **column ou column-reverse:** |
| :-----------: | :----------------------------------------------------------: |
| The main axis will be horizontal and the cross axis will be vertical. | The main axis will be vertical and the cross axis will be horizontal. |
| {{< figure src="/shared/flex/row.png" width="150">}} | {{< figure src="/shared/flex/column.png" width="150">}} |

{{% alert color="warning" %}}
**Important!** The default orientation on Beagle will be a column, meaning the the elements are displayed in a column.
{{% /alert %}}

## Properties

There are some properties that Yoga Layout may use to insert, alter or delete components.

### **UnitValue**

The **Basis, Size, Margin, Padding and Position** attributes receive a `UnitValue` that contains a `Bind<Double>` value and a `UnitType`, which is an `enum` with the following options:

| **UnitType** | Definition                                                  |
| :----------- | :---------------------------------------------------------- |
| **REAL**     | Apply a `Bind<Double>`value                                       |
| **PERCENT**  | Apply a `Bind<Double>` value as percentage of the parent size     |
| **AUTO**     | Follows the parent's value. Except when it has its own size |
{{% alert color="warning" %}}
**Important!** For the attributes above, the WEB default is`UnitType.AUTO`.
{{% /alert %}}

The `UnitType.AUTO` can be used on iOS, Android and Web fronts according to the table below:

| **Attributes** | Android | iOS | WEB
| :----------- | :-----: | :------: | :------: |
| **Basis**   | &#x2714; | &#x2714; | &#x2714; |
| **Size**    |          |          | &#x2714; |
| **Margin**  |          |          | &#x2714; |
| **Padding**  |         |          | &#x2714; |
| **Position**  |        |          | &#x2714; |
