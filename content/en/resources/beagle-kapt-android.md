---
title: Android Annotation Processor
weight: 2
description: "Here, you will find more about Beagle Annotation Processor."
---

---
## **Introduction**

Beagle must know all components (Widgets, Actions, Operations, Logger, …) that you define in your project in order to work properly. 

Although it’s possible to create your own implementation of `BeagleSdk` class and register the components, Beagle annotation processor can save you a lot of time. It uses Beagle annotations to generate an implementation of `BeagleSdk` interface called `BeagleSetup` that gathers all annotated components in your project.

## Configuration

In order to add Beagle Annotation Processor to your project, you must follow the given steps:

1. Include kotlin kapt plugin
1. Include Beagle annotation processor as dependency

```groovy
apply plugin: 'kotlin-kapt'
dependencies {
    kapt "br.com.zup.beagle:android-processor:$beagle_version"
}
```

## Multi-Module Projects

Beagle annotation processor can find components annotated in your project and its dependencies. To work properly, all modules or dependencies that annotate components with Beagle annotations must include Beagle annotation processor in its dependencies.

### Kapt params

Beagle annotation processor accepts two parameters:
* beagle.moduleName
* beagle.generateSetupClasses

They can be used as follow:
```groovy
kapt {
    arguments {
        arg("beagle.moduleName", "sample")
        arg("beagle.generateSetupClasses", "false")
    }
}
```

#### beagle.moduleName

This parameter is used to give meaningful names to some generated classes. It isn’t mandatory, but we strongly recommend using it.

Dynamic generated classes names will look like: `RegisteredActionsRegistrar59c20e58331c4f11b84d377475593739`. This makes it difficult to tell which module these classes come from.

#### BeagleSetup and BeagleConfig issue - beagle.generateSetupClasses comes to rescue

By default, every module that uses Beagle annotation processor generate the `BeagleSetup` class. This is a problem when you want to create a module that, for instance, will have only widgets.

`BeagleSetup` class declares a property of `BeagleConfig` type that can't be null and we end up having to register a dummy `BeagleConfig` class inside that module. It leads to the following problem: This implementation of `BeagleConfig` will conflict with the official `BeagleConfig` implementation of your project, because you can have one and only one `BeagleConfig` implementation within your project.

To solve this situation, it’s possible to disable `BeagleSetup` class generation in modules where it’s not needed. This is done by adding the following kapt argument to the module’s gradle file:
```groovy
kapt {
    arguments {
        arg("beagle.generateSetupClasses", "false")
    }
}
```

### Unique Properties

Some properties are unique in a Beagle project. This means that only one component of that type can be registered on your entire project structure (including other modules and dependencies that use Beagle annotation processor). Properties that are unique includes:
* DesignSystem;
* HttpClient;
* BeagleConfig;
* …

If you register a component that should be unique twice on your project structure, Beagle annotation processor will complain and your project will not compile. Error message will look like:

{{% alert color="info" %}}
error: BeagleConfig defined multiple times: 1 - br.com.zup.beagle.android.moduleb.ModuleBBeagleConfig 2 - br.com.zup.beagle.android.modulec.ModuleCBeagleConfig. You must remove one implementation from the application.
{{% /alert %}}