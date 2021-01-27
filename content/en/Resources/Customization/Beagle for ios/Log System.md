---
title: Log System
weight: 151
---

---

#### Introduction

Beagle uses the unified log system recommend by Apple, to provide different log messages in critical stages of a server driven flow. 

The log messages provided for Beagle iOS can be access through:

* Xcode console
* Application console

They are divided in 4 categories: 

1. **Network:** related to the network layer, information and error messages for each request, response and network URL construction.
2. **Decoding:** displays messages every time a `parse` error occurs.  
3. **Navigation:** informative messages that describes the navigations inside the server driven flow and possible errors may occur. 
4. **Form:** related to forms. 

It is possible to disable triggered log messages. Beagle will not call the Log's API, even if it is default or customized. You will need to change the attribute `isLoggingEnabled` of`BeagleDependencies` to`false`.

The log messages can be filtered using these categories names and the main package identifier of the application as a subsystems. 

## Instructions to filter log messages:

Follow the steps below to filter the log messages: 

**Step 1:** open `Console App`;

**Step 2:** select `device` on the `Devices` menu;

**Step 3:** insert the filters in the search bar, search only for log messages with the Network category in the subsystem ~~`br.com.zup.BeagleDemoApp`~~ 

![](/1.png)

**Step 4:**  when you open the `BeagleDemo` application, you will see two log messages with the network category, one will show that Beagle made a request and the other indicating the response. 

![](/2.png)

**Step 5:** error messages will be displayed with a yellow dot in the field `Type`, as showed below: 

![](/3.png)

**Step 6:** to select the second log message received with a Network filter, you will see a `verbosa` version of this response.  

![](/4.png)

**Step 7:** the body of the response contains the server-driven screen and all its attributes and specifications can be accessed. 

## Customization

In order to let Beagle's environment open to modifications, the default API logs can be replaced to any other. Follow th next steps to make the API's logs replacement: 

**Step 1:** implement BeagleLoggerType protocol on the class you want to use as log API, you will see that it is necessary to implement the methods `log(_ log: LogType)` and `logDecodingError(type: String)` that are internally called by Beagle when a message needs to be triggered:

```swift
class CustomLogger: BeagleLoggerType {
    func log(_ log: LogType) {
        print(log.message)
    }
    
    func logDecodingError(type: String) {
        print(type)
    }
}
```

**Step 2:** on Beagle's configuration of your project, assign to a class' instance to the `logger` dependency on `BeagleDependencies`:

```swift
let dependencies = BeagleDependencies()
dependencies.logger = CustomLogger()
Beagle.dependencies = dependencies
```
## BeagleLoggerProxy

This class should not be used by the user in the majority of cases. This is the object that will be internally stored in `Beagle.dependencies.logger` instead of` BeagleLogger` customized by the user.

Its responsibility is to only forward calls to the user's class if `Beagle.dependencies.isLogginEnabled` is` true`, otherwise it won't pass along the message. Today it is public just to allow access to the user's custom class via:

```swift
(Beagle.dependencies.logger as? BeagleLoggerProxy)?.logger
```
