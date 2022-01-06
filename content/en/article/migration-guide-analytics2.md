---
title: "Guide to migrate from Beagle Analytics 1.0 to Beagle Analytics 2.0"
linkTitle: "Migrating to Beagle Analytics 2"
weight: 1
description: >-
  In this section we describe Beagle Analytics in general walking you through the migration to Beagle Analytics version 2.
---

---

## What is Beagle Analytics?

Analytics is a Beagle feature that tags certain events such as clicking in a component or loading a screen.

## About Analytics 1.0

In its first version, you would have to implement a `ClickEvent` or a `ScreenEvent` in the Backend, as shown in the example below:

```kotlin
ClickEvent(
   category = "category-button",
   label = "label-button",
   value = "value-button"
)
```

```kotlin
ScreenEvent(
   screenName = "FALLBACK"
)
```

Each event had to be declared in its own component defined on the backend, for example:

{{% alert color="success" %}}
The *`button`* component had a property called *`ClickAnalyticEvent`* that would receive a *`ClickEvent`*.
{{% /alert %}}

{{% alert color="success" %}}
A *`Screen`* had a property called *`ScreenAnalyticEvent`* that would receive an *`ScreenEvent`*.
{{% /alert %}}

We have listed an example bellow for a *`Button`* component declared at the backend and configured with an analytic event:

```kotlin
Button(
   text = "Analytics 1",
   onPress = listOf(
       Alert("Analytics 1", "Trying again!")
   ),
   clickAnalyticsEvent = ClickEvent(
       category = "category-button",
       label = "Label-button",
       value = "value-button"
   )
)
```

Once declared in the Backend, the events *(with the information listed in them)* could be retrieved from the frontend using a custom class to handle them.

* This class must extend itself from a Beagle inner class called *`Analytics`*. This class gathers event information into an object called *`event`*. You can check the Android signature for reference below:

```kotlin
@BeagleComponent
class SampleAnalytics: Analytics {
   override fun trackEventOnClick(event: ClickEvent) {
       //This code block will run when a ClickEvent is received
  Log.i("analytics1", "$event")
   }
   override fun trackEventOnScreenAppeared(event: ScreenEvent) {
       //This code block will run when a Screen is rendered
  Log.i("analytics1", "screenUp -> "+ event.screenName)
   }
   override fun trackEventOnScreenDisappeared(event: ScreenEvent) {
       //This code block will run when a Screen disappears
   }
}
```

{{% alert color="success" %}}
whenever an event occurs (such as a ``click``, or the appearance or disappearance of a ``screen``) the functions above are triggered)
{{% /alert %}}

## About Analytics 2.0

Analytics 2.0 has improved the way events can be declared in the backend and retrieved in the frontend, and more. It is possible now to enable *`tracking`* for actions and properties without having to map events in the backend.

{{% alert color="success" %}}
Now, you just need to set up a custom class in the frontend, that extends from an inner Beagle class called *`AnalycticsProvider`*. When creating it, you must implement some functions that will receive the events mapping them. Information about thes events are added in a *``record``* object that can be sent to your analytics service, such as the *Google Analytics Service*, for example.
{{% /alert %}}

An example on how this class will look like on the Android has been set up below:

```kotlin
@BeagleComponent
class SampleAnalytics2:AnalyticsProvider {
   override fun getConfig(): AnalyticsConfig = object: AnalyticsConfig{
       override var actions: Map<String, List<String>>? = hashMapOf(
           "beagle:alert" to listOf("message")
       )
       override var enableScreenAnalytics: Boolean? = true
   }
   override fun createRecord(record: AnalyticsRecord) {
       Log.i("analytics2", record.toString())
   }
}
```

{{% alert color="success" %}}
We have two main functions on this class, that are *`getConfig`* and *``createRecord``*. The first one is where we define which actions and properties of each action will be observed. Whenever the action occurs, the second function, *``createRecord``*, will be triggered and you can access the created record for this event on its scope.
{{% /alert %}}

The general configuration of what should and should not generate ``analytics`` events is in the frontend, but it is still possible to control the events from the backend.

Now, the property that holds analytics events is part of the ``action``, an not the ``button`` or `screen` anymore, as in Analytics 1. This property is called *`analytics`*

{{% alert color="success" %}}
The *`analytics`* property can hold an element called *``ActionAnalyticsConfig``*. This element will define if the action will trigger events for the *``AnalyticsProvider``* in the frontend.
{{% /alert %}}

Here follows an action sample that was declared with analytics settings in the backend

```kotlin
Alert(
   title = "Analytics 2",
   message = "Trying again!",
   analytics = ActionAnalyticsConfig.Enabled(
       ActionAnalyticsProperties(
           attributes = listOf("message", "title")
       )
   )
)
```

Note that *``ActionAnalyticsConfig``* is set to *``.Enabled``*, that is what makes the frontend capture the event that triggers the record function and demonstrate it

*`ActionAnalyticsConfig`* had a few properties, and here we only list the *``attributes``* for the action we want information about, but there is another property called *``AdditionalEntries``* that could send extra information with in this event.

{{% alert color="warning" %}}
About *`Screen`*: Events for *`Screen`* are fired automatically when the screen appears or disappears, and can be accessed from the *``record``* object
{{% /alert %}}

## Migrating from Analytics 1 to Analytics 2

Let's start with the backend. While it is no longer necessary to create events in the backend, this functionality is available for Analytics 2 and event tracking can be performed from the backend as well.

All information, previously implemented in specific attributes in the *``clickEvent``* class, are now automatically sent to the frontend.

1. Delete the *``ClickEvent``* or *``ScreenEvent``* implementation on your components *(Screen, button, touchable, or any other clickable custom component that is declared with this settings)*
2. Add the *``ActionAnalyticsConfig.Enabled``* code to the *``analytics``* property for any *action* you want to get analytics for.
3. We have listed below the *before* and *after* of a *`button`* with analytics 1 and 2 functionalities in the backend. We have also listed the information that will be retrieved in the frontend *(We listed the information on each ``object`` as a string)*:

{{% alert color="warning" %}}

### Analytics 1

```kotlin
Button(
  text = "Analytics 1",
  onPress = listOf(
    Alert("Analytics 1", "Trying again!")
  ),
  clickAnalyticsEvent = ClickEvent(
    category = "category-button",
    label = "Label-button",
    value = "value-button"
  )
)
```

**Data on the ``event`` object:**
*ClickEvent(category=category-button,
label=Label-button,
value=value-button)*
{{% /alert %}}

{{% alert color="success" %}}

### Analytics 2

```kotlin
Button(
text = "Analytics 2",
onPress = listOf(
  Alert(
    title = "Analytics 2",
    message = "Trying again!",
    analytics = ActionAnalyticsConfig.Enabled(
      ActionAnalyticsProperties(
        attributes = listOf("message", "title")
      )
 ...
)
```

**Data on the ``record`` object:**
*AnalyticsRecord(
type=action,
platform=android,
attributes={message=Trying again!, title=Analytics 2},
component={
id=6,
position={x=384.0, y=1329.0},
type=beagle:button},
beagleAction=beagle:alert,
event=onPress,
additionalEntries=null,
timestamp=1641235066016,
screen=/fallback-screen)*

**NOTE:** The component `id` (*``button``*) was automatically defined by the system, but we can set it with the `setId` function in the backend. Check the setId info on our [documentation](/android/tutorials/test/using-widget-id/).
{{% /alert %}}

4. Now, in the frontend, just delete the custom class for analytics 1 and implement a new class for analytics 2.
5. Follow the analytics 2 class example listed in this guide for Android and test it using the *``Alert``* action.
6. For other platforms (WEB, iOS), check the examples listed in our [documentation](/api/analytics/) to implement *``AnalysticsConfig``*.
7. Remember to log the actions you want to access even when the backend doesn't specify anything in *``AnalyticsProvider``* *``getConfig()``* function
8. Now that *``AnalyticsProvider``* has been implemented, just run your application and the events will be received in the frontend.

{{% alert color="warning" %}}
It's important to point out that the two analytics functionalities work together and one doesn't interfere with the other until Beagle version 1.10. Analytics 1.0 was removed from Beagle in version 2.0 and now the only interface available in the Framework is Analytics 2 (now just called Analytics).
{{% /alert %}}
