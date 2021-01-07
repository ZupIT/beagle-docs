---
title: Component's Positioning
weight: 54
description: >-
  Here, you'll find information about how to position components on a device
  screen using Beagle.
---

---

{{% alert color="warning" %}}
#### Availability: Beagle 1.0+
{{% /alert %}}

## Introduction 

Beagle will use a dependency called [**`Yoga Layout`**](https://yogalayout.com/docs/) to position components on your application screen. To do this, Yoga calculates the position the elements are, and after that, it does its rendering.

## **About Yoga Layout**

Yoga is framework developed by Facebook to position views using the Flexbox concept in Android and iOS applications. 

Flexbox is a CSS concept that organizes elements in containers dynamically so that, regardless of your application dimensions, you can maintain a flexible layout. 

Here follows some key concepts about Flexbox:

* **Main Axis**
* **Cross Axis**
* **Main Size**

For Main Size, it is possible to set **3 types of dimensions:** 

1. **Cross Size:** The size of a cross axis.
2. **Main Start and Main**  The Start and End point in a main axis.
3. **Cross Start and Cross End:** Start and end in a cross axis.

**‌**These axis values will depend on what is defined at the Flex-direction property.

If it is defined as:

* **row ou row-reverse:** The main axis will be horizontal and the cross axis will be vertical.

![Exemplo de yoga layout com row ou row-reverse](https://lh3.googleusercontent.com/YwCLX11cEtBYnUcVYIDy63Z_aoEA5rfErFyOKSOgxZA092HmcFO7ZwDKgKJ6Tmjr-J3m7aQgSYCn2p0QzSLO_NsibCWc7LCg9Y2xDjVXQ6BWyhIjYpB3tCdbKx-4CnrKG7tSzaqp)

* **column ou column-reverse:** The main axis will be vertical and the cross axis will be horizontal.

![Exemplo de yoga layout com column ou column-reverse](https://lh3.googleusercontent.com/AM1cTOExo5ux4V_2-HE6WItbPdTWHj-6CBwDXxo8mV0vZfw6WoxtWWOUtosLU_UTTAArH_pMm35geJE1HBfYjqT-DBshvLsUcjvCmVoQVdPSGTW8QCx8YJltIgC4Ad9cDKFu1dQ4)

{{% alert color="info" %}}
**Important!** The default orientation on Beagle will be a column, meaning the the elements are displayed in a column.
{{% /alert %}}

## Properties
You can use the following properties that Yoga Layout uses to insert, alter or delete screen's components.
























### **UnitValue**

The **Basis, Size, Margin, Padding and Position** attributes described above receive a `UnitValue` that expects a `Double` value and a `UnitType`, which is an `enum` with the following options:

| **UnitType** | Definition |
| :--- | :--- |
| **REAL** | Apply a `Double`value |
| **PERCENT** | Apply  a `Double` value as percentage of the parent size |
| **AUTO** | Follows the parent's value. Except when it has its own size |

For the attributes listed below, on the Web, the default is`UnitType.AUTO`. 

The `UnitType.AUTO` can be used on iOS, Android and Web fronts according to the table below:

<table>
  <thead>
    <tr>
      <th style="text-align:center">Attributes</th>
      <th style="text-align:center">
        <p>
          <img src="../../.gitbook/assets/image (125).png" alt/>
        </p>
        <p>iOS</p>
      </th>
      <th style="text-align:center">
        <p>
          <img src="../../.gitbook/assets/image (126).png" alt/>
        </p>
        <p>Android</p>
      </th>
      <th style="text-align:center">
        <p>
          <img src="../../.gitbook/assets/image (122).png" alt/>
        </p>
        <p>Web</p>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:center"><b>Basis</b>
      </td>
      <td style="text-align:center">&#x2714;</td>
      <td style="text-align:center">&#x2714;</td>
      <td style="text-align:center">&#x2714;</td>
    </tr>
    <tr>
      <td style="text-align:center"><b>Size</b>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:center"></td>
      <td style="text-align:center">&#x2714;</td>
    </tr>
    <tr>
      <td style="text-align:center"><b>Margin</b>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:center"></td>
      <td style="text-align:center">&#x2714;</td>
    </tr>
    <tr>
      <td style="text-align:center"><b>Padding</b>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:center"></td>
      <td style="text-align:center">&#x2714;</td>
    </tr>
    <tr>
      <td style="text-align:center"><b>Position</b>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:center"></td>
      <td style="text-align:center">&#x2714;</td>
    </tr>
  </tbody>
</table>
