---
title: Installing Beagle
weight: 120
description: In this section, you'll learn how to create an Android project with Beagle
---
**Topics covered**
- Create a Android project from scratch
- Add Beagle on your project (can be in a existing project)
- Configure Beagle
- Possible customizations

**Requirements:**
 - Android Studio
 - minSdkVersion: 19+
 - JDK 8+ language
 - Kotlin 1.3+

## Starting an Android project

For this example, we'll use Android Studio IDE. If you haven't installed it yet, just access the documentation [**official Android website** ](https://developer.android.com/studio?hl=us-en) and follow the instructions.   
  
After you have installed the program, follow the steps below:

**Step 1:** Open Android Studio and click on **Start a new Android Studio project**_._ 

![](/shared/newandroidproject.png)

**Step 2:** Choose the **Empty Activity** option and click on **next**. 

![](/shared/androidprojecttemplate.png)

**Step 3️:** On this page, there is some important information:

* Inform your project's name. On this example, we'll call `BeagleApp`.
* Choose which language you'll use. For Beagle, you should go with `Kotlin`.
* Choose **SDK minimum 19 or above**, because a lower SDK won't be compatible. 
* Define a **package** and a **Save location** according to your preference. 
* Click on **Next**.

![](/shared/configureandroidproject.png)

**Step 4️:** After you made the previous configurations, Android will take some time to build the project because it will be synchronizing all the dependencies to initialize the project.

Once the initialization is done, you will see this page: 

![](/shared/mainactivity.png)

##  Add Beagle on your project 

**Step 1:** Dependencies' configuration

You have to adjust your repository's dependencies to receive Beagle. To do so, use the following configuration to **download Beagle's library.**

```kotlin
allprojects {
    repositories {
        google()
        mavenCentral()
    }
}
```

{{% alert color="warning" %}}
The above configuration must be added to `allprojects{}`
{{% /alert %}}

**Step 2:** Include plugins

Once you made the first configuration, now you have to include the `kapt` and Beagle's plugin as dependencies on your dependency manager, as in the example below.

The current release version of Beagle is: [![Maven Central](https://img.shields.io/maven-central/v/br.com.zup.beagle/android)](https://mvnrepository.com/artifact/br.com.zup.beagle/android)


```kotlin
plugins {
	id 'kotlin-kapt'
}

android {
    kotlinOptions {
        jvmTarget = JavaVersion.VERSION_1_8
    }
}

ext.beagle_version = "${beagle_version}"

dependencies {
    implementation "br.com.zup.beagle:android:$beagle_version"
    kapt "br.com.zup.beagle:android-processor:$beagle_version"
}
```


Insert the Beagle's release version on the place of`${beagle.version}`, in other words, put the Beagle's version highlighted in blue badge above without the **v character**.

For example: undefined-`ext.beagle.version = "1.8.0"`

{{% alert color="warning" %}}
Remember to always check if you're using the latest version of Beagle. To see this information, you just have to pass your mouse above the version number. After that, sync your machine.
{{% /alert %}}

{{% alert color="warning" %}}
Remember to use the same version of Beagle used on your BFF to avoid possible problems
{{% /alert %}}

## Configure Beagle

Once you have finished Beagle's installation, you have to make now our tool's usage configuration, follow the steps bellow:

**Step 1:** Create a BeagleConfig class

After the update, you have to create a `BeagleConfig` class and configure your attributes, as you can see on the example below:

```kotlin
@BeagleComponent
class AppBeagleConfig : BeagleConfig {
    override val environment: Environment get() = Environment.DEBUG
    override val baseUrl: String get() = "https://myapp.server.com"
    override val isLoggingEnabled: Boolean = true
    override val cache: Cache = Cache(
        enabled = false,
        maxAge = 300,
        size = 15
    )
}
```

| **Attribute** | **Type** | **Definition** |
| :----------- | :------ | :------ |
| environment | Environment | Attribute responsible for informing Beagle about the current build status of the application. |
| baseUrl | String | Informs the base URL used in Beagle in the application. If you are using the emulator, [**check here to define this attribute**](https://developer.android.com/studio/run/emulator-networking.html#networkaddresses)  |
| isLoggingEnabled | Boolean | Attribute that enables or disables all logs that Beagle generates.|
| cache	| Cache	| Object responsible for managing the cache of Beagle requests. |

{{% alert color="warning" %}}
Make sure to note your class configuration with `BeagleComponent`, because Beagle expect them to have empty constructors.
{{% /alert %}}

**Step 2: Create a BeagleSetup**

After you have created the class shown in the previous step and annotated with @BeagleComponent, just build your project (to do this, press CTRL + F9) and Beagle will automatically create a BeagleSetup class, as shown in the figure below:

![BeagleSetup file](/shared/beaglesetup.png)

**Step 3:** Create the Application class

At this moment, you should create a `Kotlin class` that extends the `Application class`. For this example, the name will be `AppApplication`.

This class should be named as `BeagleSetup().init(this)` on `onCreate` method, according to the list below:

```kotlin
class AppApplication: Application() {

    override fun onCreate() {
        super.onCreate()

        BeagleSetup().init(this)
    }
}
```

**Step 4:** Update your Android Manifest.xml**

Finally, you must update again your `AndroidManifest.xml` and define the `AppApplication` created as an application's initialization file. See the example below: 

```markup
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.beagleexamples">

    <uses-permission android:name="android.permission.INTERNET" />

    <application
        android:name=".AppApplication"

        ..
```

Now you're ready to start using Beagle! To verify if the configuration is correct, you can simulate a Server-Driven screen to make the following test.


{{% alert color="warning" %}}
To do server-driven requisitons to a backend it's mandatory to customize the network layer. To know how, click here!
{{% /alert%}}

## **Other Customizations**
 * Action - you can create custom actions to be executed by your widgets according user intereaction
 * Navigation Animation - you can customize Beagle screen navigation animations
 * Beagle Activity - you can customize the activity that will be displayed when a server-driven screen was called
 * Network Client - you can customize the network client to cunfigure the way Beagle will make requests
 * Cache - you can customize the cache  to save the server-driven screens
 * Loading and errors treatment - you can customize the error treatment and loading of server-driven screens
 * Proguard - you can obfuscate your code using proguard, it's necessary a configuration to not obfuscate some class that could be serialized and deserialized by Beagle
 * Deep Link handler - you can configure the Deep Link Handler to navigate from a server-driven screen to a native screen
 * Image Downloader - you can customize how images will be dowloaded to be displayed by Beagle
 * Design System - you can customize your design system to build more beatiful screens to be displayed by Beagle
 * Serializer and Deserializer - you can customize how Beagle will serialize and deserialize
 * Log - you can customize how the logs generated by Beagle will be displayed
 * Widget - you can create components more specific for your project to use them to build yours server-driven screens
 * Operations - you can create your operations to manipule context easily by your backend
 * Analytics - you can configure an analytics to generate screen and actions reports
