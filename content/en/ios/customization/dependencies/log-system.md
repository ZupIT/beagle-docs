---
title: Log System
weight: 151
---

---

## What is it?

Beagle uses the unified log system recommended by Apple, to provide different log messages in critical stages of a server driven flow.

The log messages provided for Beagle iOS can be access through:

* **Xcode console** and
* **Application console**

They are divided in 4 categories:

1. **Network:** related to the network layer, information and error messages for each request, response and network URL construction.
2. **Decoding:** displays messages every time a `parse` error occurs.  
3. **Navigation:** informative messages that describes the navigations inside the server driven flow and possible errors may occur.

It is possible to disable the triggered log messages simply by not configuring a Logger in the dependencies.

The log messages can be filtered using these categories names and the application main package identifier as a subsystems.

## Instructions to filter log messages

Follow the steps below to filter the log messages:

**Step 1:** open `Console App`;

**Step 2:** select `device` on the `Devices` menu;

**Step 3:** insert the filters in the search bar, search only for log messages with the Network category in the subsystem ~~`br.com.zup.BeagleDemoApp`~~
{{< figure src="/shared/1.png">}}

**Step 4:**  when you open the `BeagleDemo` application, you will see two log messages with the `network category`, one will show that Beagle made a request and the other indicating the response.
{{< figure src="/shared/2.png">}}

**Step 5:** error messages will be displayed with a yellow dot in the field `Type`, as showed below:
{{< figure src="/shared/3.png">}}

**Step 6:** to select the second log message received with a Network filter, you will see a `verbosa` version of this response.  
{{< figure src="/shared/4.png">}}

**Step 7:** the body of the response contains the server-driven screen and all its attributes and specifications can be accessed.

## Customization

In order to let Beagle's environment open to modifications, the default API logs can be replaced by any other. THe next steps explains how to replace the API's logs:

**Step 1:** implement BeagleLoggerType protocol on the class you want to use as the log API. You will see that it is necessary to implement the methods:

* **`log(_ log: LogType)`** and
* **`logDecodingError(type: String)`**

These are internally called by Beagle when a message needs to be triggered
We have listed an example below:

```swift
class CustomLogger: LoggerProtocol {
    func log(_ log: LogType) {
        print(log.message)
    }
}
```

**Step 2:** Go to your project Beagle's configuration and assign a class' instance to `logger` dependency on the `BeagleDependencies`:

```swift
let dependencies = BeagleDependencies()
dependencies.logger = CustomLogger()
BeagleConfigurator.setup(dependencies: dependencies)
```
