---
title: Touchable
weight: 295
description: Description of components that enable click actions in another components
---

---

## What is Touchable?

Touchable defines clickable areas in your application in widgets that are not clickable by default.

See how the structure is represented: 

<table>
  <thead>
    <tr>
      <th style="text-align:left"><b>Attribute</b>
      </th>
      <th style="text-align:left"><b>Type</b>
      </th>
      <th style="text-align:left">Required</th>
      <th style="text-align:left"><b>Definition</b>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">onPress</td>
      <td style="text-align:left">&lt;b&gt;&lt;/b&gt;<a href="https://docs.usebeagle.io/api/actions"><b>Action</b></a>&lt;b&gt;&lt;/b&gt;</td>
      <td
      style="text-align:left">&#x2713;</td>
        <td style="text-align:left">
          <p>Defines one or more<b> </b><a href="https://docs.usebeagle.io/api/actions"><b>actions </b></a>to
            be performed when a <code>child</code> component is clicked.</p>
          <p></p>
        </td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p>click</p>
        <p>Analytics</p>
        <p>Event</p>
      </td>
      <td style="text-align:left">
        <p>&lt;b&gt;&lt;/b&gt;<a href="https://docs.usebeagle.io/api/analytics#click-option"><b>Analytics</b></a>&lt;b&gt;&lt;/b&gt;</p>
        <p>&lt;b&gt;&lt;/b&gt;<a href="https://docs.usebeagle.io/api/analytics#click-option"><b>Click</b></a>&lt;b&gt;&lt;/b&gt;</p>
      </td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Click event that will be triggered if an analytics service was implemented.</td>
    </tr>
    <tr>
      <td style="text-align:left">child</td>
      <td style="text-align:left">
        <p>&lt;b&gt;&lt;/b&gt;<a href="../widget.md"><b>Server</b></a>&lt;b&gt;&lt;/b&gt;</p>
        <p>&lt;b&gt;&lt;/b&gt;<a href="https://docs.usebeagle.io/api/widget"><b>DrivenComponent</b></a>&lt;b&gt;&lt;/b&gt;</p>
      </td>
      <td style="text-align:left">&#x2713;</td>
      <td style="text-align:left">Defines a widget that will trigger the<a href="https://docs.usebeagle.io/v/v1.0-en/api/actions"><b> </b></a>onPress
        attribute.</td>
    </tr>
  </tbody>
</table>

## How to use it?



```kotlin
{
  "_beagleComponent_": "beagle:touchable",
  "onPress": [
    {
      "_beagleAction_": "beagle:alert",
      "message": "This is a touchable!"
    }
  ],
  "child":
  {
      "_beagleComponent_": "beagle:image",
      "path": {
        "_beagleImagePath_": "remote",
        "url": "https://i.ibb.co/KWwTSWB/1029209-200.png"
      },
      "accessibility": {
            "accessibilityLabel": "Touchable image",
            "accessible": true
      }
  }
}

```



```kotlin
Touchable(onPress = listOf(
			         Alert(title = "Image", 
                     message = "Clicked on Message")),
          child = Image(path = ImagePath.Local.justMobile("name"))
)
```



###  👉 [Test this example in the Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/touchable.json?platform=react-web)
