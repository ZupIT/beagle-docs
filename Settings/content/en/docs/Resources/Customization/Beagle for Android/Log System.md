---
title: Log System
weight: 118
description: >-
  You will find here the BeagleLogger class description, customization and
  configuration details.
---

---

## Introduction

Beagle's log system allows you to investigate errors during the development and problems that may happen with the application's production. 

The log messages given by Android Beagle can be accessed in the:

* Android Studio's console
* Application's console 

They are divided in 3 categories: 

1. **Info:** related to the Network layer, information and communication's response with the server. 
2. **Warning:** informational messages of errors related to Beagle's component. 
3. **Error**: shows error messages related to  `parse`, `http` and other exceptions.

It is possible to **disable triggered log messages**. Beagle will not call the Log's API, even if it is a pattern or customized. You will need to change the attribute `isLoggingEnabled` of`AppBeagleConfig` to`false:`


```kotlin
@BeagleComponent
class AppBeagleConfig : BeagleConfig {

    override val isLoggingEnabled: Boolean = false

}
```


## Customization

In order to let Beagle's environment open to modifications, the API logs pattern can be replaced to any other.

The configuration of this customization it is done with the creation of an annotation class with `@BeagleComponent` and that implements the `BeagleLogger` **Interface.** This interface needs logs method implementation, you can follow the example below: 

```kotlin
@BeagleComponent
class CustomBeagleLog : BeagleLogger {
    
    override fun warning(message: String) {
        TODO("Not yet implemented")
    }

    override fun error(message: String) {
        TODO("Not yet implemented")
    }

    override fun error(message: String, throwable: Throwable) {
        TODO("Not yet implemented")
    }

    override fun info(message: String) {
        TODO("Not yet implemented")
    }

}
```
