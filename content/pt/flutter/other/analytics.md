---
title: Analytics
weight: 3
description: >-
  In this section, you will find information on how to set up the analytics in Beagle Flutter.
---

---

# Introduction
The `analyticsProvider` must be set whenever you want to add analytics capabilities based on the user interactions with the UI built by Beagle.

There are two types of analytics records generated by Beagle:

## Navigation records
These records are generated whenever a page is loaded by Beagle and they contain the following information:

- type: will always be `screen`;
- platform: will always be `flutter` in the case of Beagle Flutter;
- screen: url of the screen (in the case of a RemoteView) or the id of the screen component (in case of a LocalView);
- timestamp: the unix representation of the time when the record was created.

## Action records
These records are generated whenever a Beagle Action is triggered. Besides all the information already present in the navigation record, it also contains:

- type: will always be `action`;
- beagleAction: the name of the action that triggered this record;
- component: the component containing the action (json map);
- event: the name of the event associated with the action. e.g. onPress;
- attributes: a map containing all the properties of the original Beagle Action;
- additionalEntries: extra data that might have come from the backend.

# Configuration
Note that when we create an Action record, we expose all attributes of the action. This can be dangerous (sensitive information) or even have low performance. The AnalyticsProvider must provide a configuration that tells which actions must generate records and which attributes should be exposed.

The configuration also tells if we should generate navigation records or not.

The configuration is created when implementing the interface `AnalyticsProvider` in the function `getConfig`. A configuration is an instance of the class `AnalyticsConfig`. To know more about the analytics configuration, please read the [article about this feature]({{< ref path="/api/analytics" lang="en" >}}).

# Managing the records
Every time a record is created by Beagle, it calls the method `createRecord` of the `AnalyticsProvider`. If you want to send this record to a backend, inside this method, you must format it into the format expected by the backend, create the HTTP request and send it.

For more examples, please check the [Analytics page]({{< ref path="/api/analytics" lang="en" >}}).

# Creating an Analytics Provider

```dart
class LoggerAnalyticsProvider implements AnalyticsProvider {
  @override
  void createRecord(AnalyticsRecord record) {
    debugPrint("Analytics Record emitted");
    debugPrint("type: ${record.type}");
    debugPrint("platform: ${record.platform}");
    debugPrint("beagleAction: ${record.beagleAction}");
    debugPrint("event: ${record.event}");
    debugPrint("screen: ${record.screen}");
    debugPrint("timestamp: ${record.timestamp}");

    if (record.component != null) {
      debugPrint("component: ${record.component?.values.join(", ")}");
    }

    if (record.attributes != null) {
      debugPrint("attributes: ${record.attributes?.values.join(", ")}");
    }

    if (record.additionalEntries != null) {
      debugPrint(
          "additionalEntries: ${record.additionalEntries?.values.join(", ")}");
    }
  }

  @override
  AnalyticsConfig getConfig() {
    return AnalyticsConfig(enableScreenAnalytics: true, actions: {
      "beagle:setContext": ["contextId", "path", "value"]
    });
  }
}
```

In the example above, we create an AnalyticsProvider that just logs every record to the console. For actions, it logs only actions of type "beagle:setContext" and it exposes only the attributes "contextId", "path" and "value" of the action.

# Registering the AnalyticsProvider
To register the analytics provider, you need to pass it to the BeagleService:

```dart
final beagleService = BeagleService(
  analyticsProvider: LoggerAnalyticsProvider(),
  // ...
);
```