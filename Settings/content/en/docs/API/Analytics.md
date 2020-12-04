---
title: Analytics
weight: 269
description: >-
  Here you'll find how to prepare your application to map the Analytics
  information
---

---

## Analytics

As most projects use some sort of tagging to gather data about users behaviors and Beagle offers a way to get those informations.

It is necessary to configure all platforms that will be used. You can check the configuration for each one of them bellow:   


### Configuration  

* Select an option

{{< tabs name="T122" >}}
{{% tab name="ANDROID CONFIGURATION " %}}
To make the Analytics feature work on your Android project you just need to add a Class that implements the Analytics interface and annotate this Class with the @BeagleComponent annotation:  


```kotlin
@BeagleComponent
class SampleAnalytics: Analytics {

    override fun trackEventOnClick(event: ClickEvent) {
        //TODO: send click event to your tagging library
    }

    override fun trackEventOnScreenAppeared(event: ScreenEvent) {
        //TODO: send screen appeared event to your tagging library
    }

    override fun trackEventOnScreenDisappeared(event: ScreenEvent) {
        //TODO: send screen disappeared event to your tagging library 
    }

}
```
{{% /tab %}}

{{% tab name="IOS CONFIGURATION  " %}}
To make the Analytics feature work on your iOS project you just need to add a class that implements the Analytics protocol and pass an instance of this class to the Beagle Dependencies:

```kotlin
import BeagleUI

class SampleAnalytics: Analytics {
    func trackEventOnScreenAppeared(_ event: AnalyticsScreen) {
        //TODO: send screen appeared event to your tagging library
    }
    
    func trackEventOnScreenDisappeared(_ event: AnalyticsScreen) {
        //TODO: send screen disappeared event to your tagging library
    }
    
    func trackEventOnClick(_ event: AnalyticsClick) {
        //TODO: send click event to your tagging library
    }
}
```

Transfer the Analytics implementation to the Beagle Dependencies:

```text
let dependencies = BeagleDependencies()
dependencies.analytics = SampleAnalytics()
Beagle.dependencies = dependencies
```
{{% /tab %}}

{{% tab name="WEB CONFIGURATION " %}}
To make the Analytics feature work on your **Web** project, you must create a handler to the click and screen event, see the example below: 

```text
import { ClickEvent, ScreenEvent } from '@zup-it/beagle-web/types'

const analyticsHandler = {
  trackEventOnClick: (event: ClickEvent) => {
    //handle click event
  },
  trackEventOnScreenAppeared: (event: ScreenEvent) => {
    //handle screen appeared event
  },
  trackEventOnScreenDisappeared: (event: ScreenEvent) => {
    //handle screen disappeared event
  }
}
```

Now, add the analytics property on the configuration files of the framework's library you are using:

**Angular:** open the `beagle.module.ts` file and alter just like the example below:

```text
@BeagleModule({
  ...
  analytics: analyticsHandler
})
```

**React:** open the library configuration file and follow the example: 

```text
export default createBeagleUIService<any>({
    ...
    analytics: analyticsHandler
})
```
{{% /tab %}}
{{< /tabs >}}

The tagging feature was at first added to only some components and mostly used behaviors. Below we listed and described those behaviors and provided some samples:‌  


### Click option 

For tagging the click event of an Widget, it was added to the Button and Touchable Widgets the property clickAnalyticsEvent with the following attributes:  


* **Category**: This variable specifies the type of object that had some interaction with. It is a required attribute. 
* **Label**: allows you to provide more context about the interaction. It is an optional attribute. 
* **Value**: the value of an event. It is an optional attribute. 

See below a click event of a tagged Button example:

{{< tabs name="T122" >}}
{{% tab name="BACKEND - BFF" %}}
```text
{
        "_beagleType_": "beagle:component:button",
        "text": "Test",
        "clickAnalyticsEvent": {
                "category": "Category",
                "label": "Label",
                "value": "Value"
        }
}
```
{{% /tab %}}

{{% tab name="ANDROID" %}}
```kotlin
Button(
    text = "Test", 
    clickAnalyticsEvent = ClickEvent(
        category = "Category",
        label = "Label",
        value = "value"
    )
)
```
{{% /tab %}}

{{% tab name="IOS" %}}
```
Button(
    text: "Test",
    clickAnalyticsEvent: .init(
        category: "Category",
        label: "Label",
        value: "Value"
    )
)
```
{{% /tab %}}
{{< /tabs >}}

### ‌ScreenView option 

if you want to tag a screen appearing and disappearing, it is necessary to add a component with the property **screenAnalyticsEvent** with the following attributes:  


* **ScreenName**: the name of the screen that will appear.

See below the ScreenView event example, with the tagged screen: 

{{< tabs name="T122" >}}
{{% tab name="BACKEND - BFF" %}}
```kotlin
{
        "_beagleType_": "beagle:component:screencomponent",
        "child": {
                "_beagleType_": "beagle:component:button",
                "text": "Test"
        },
        "screenAnalyticsEvent": {
                "screenName": "ScreenName"
        }
}
```
{{% /tab %}}

{{% tab name="ANDROID" %}}
```kotlin
Screen(
    child = Button("test"),
    screenAnalyticsEvent = ScreenEvent(
        screenName = "ScreenName"
    )
)
```
{{% /tab %}}

{{% tab name="IOS" %}}
```swift
Screen(
    child: Button(text: "Test"),
    screenAnalyticsEvent: : .init(
        screenName: "ScreenName"
    )
)
```
{{% /tab %}}
{{< /tabs >}}
