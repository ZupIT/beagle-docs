---
title: Android
weight: 17
description: >-
  Here, you'll find how to make Beagle's usage configuration for Android
  projects.
---

---

## **Usage configurations** 

Once you have finished [**Beagle's installation**](/docs/get-started/installing-beagle/android), you have to make now our tool's usage configuration. To make this process easier, we'll use an example of **how to render a** **"Hello Beagle! screen** with a small description.

### **Step 1: Update Android Manifest**

In this step, you have to update your `AndroidManifest` and add two lines on this file:

1. INTERNET's permission so your application will be able to access internet.
2. The attribute`android:usesCleartextTraffic="true"` inside the `<application>` tag for the local BFF communication. 

{{% alert color="info" %}}
For this example we will not be using a BFF, therefore this step is not necessary. However, for any and all **tests** that are done using Beagle Android with a BFF, this step is **essential**.
{{% /alert %}}


```markup
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.beagleexamples">

    <uses-permission android:name="android.permission.INTERNET" />

    <application
        ...
        android:usesCleartextTraffic="true"
        ...
```


{{% alert color="warning" %}}
* The **`usesCleartextTraffic`**: Indicates with the app intends to use cleartext network traffic, HTTP.  The default value for apps that target API level 27 or lower is "`true`". Apps that target API level 28 or higher default to "`false`". 
* The attribute `android:usesCleartextTraffic="true"` inside `<application>`tag  is used to communicate with the local BFF.  If you intent to debug the project using a local BFF you can use this as an easy configuration step.  
* Although, if you plan to turn this example into a `release` application, we recomend you using the **`networkSecurityConfig`** which you can configure using the [**android developers page**](https://developer.android.com/training/articles/security-config) instructions.
{{% /alert %}}

### **Step 2: Create a BeagleConfig class**

After the update, you have to create a `BeagleConfig` class and configure your attributes, as you can see on the example below:


```kotlin
@BeagleComponent
class AppBeagleConfig : BeagleConfig {
    override val environment: Environment get() = Environment.DEBUG
    override val baseUrl: String get() = "https://myapp.server.com/"
    override val isLoggingEnabled: Boolean = true
    override val cache: Cache = Cache(
        enabled = false,
        maxAge = 300,
        size = 15
    )
}
```


<table>
  <thead>
    <tr>
      <th style="text-align:left">Attribute</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Definition</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td style="text-align:left">environment</td>
      <td style="text-align:left">Environment</td>
      <td style="text-align:left">Attribute responsible for informing Beagle about the current build status
        of the application.</td>
    </tr>
    <tr>
      <td style="text-align:left">baseUrl</td>
      <td style="text-align:left">String</td>
      <td style="text-align:left">
        <p>Informs the base URL used in Beagle in the application.</p>
        <p>If you are using the emulator, <a href="https://developer.android.com/studio/run/emulator-networking.html#networkaddresses"><b>check here to define this attribute</b></a>.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">isLoggingEnabled</td>
      <td style="text-align:left">Boolean</td>
      <td style="text-align:left">Attribute that enables or disables all logs that Beagle generates.</td>
    </tr>
    <tr>
      <td style="text-align:left">cache</td>
      <td style="text-align:left">Cache</td>
      <td style="text-align:left">Object responsible for managing the cache of Beagle requests.</td>
    </tr>
  </tbody>
</table>

{{% alert color="warning" %}}
Make sure to note your class configuration with `BeagleComponent`, because Beagle expect them to have empty constructors.
{{% /alert %}}

### **Step 3:  BeagleActivitiy** 

Beagle offers a default `Activity` to manage all `activities` that have been generated through server-driven. However, you can create one or more `Activities` that inherit from `BeagleActivity` with `@BeagleComponent` and are customized according to server-driven flows of your application. 

{{% alert color="info" %}}
You can create BeagleActivity now, but at his moment it is possible to proceed to the next step without configuring it. For more information about it, see [**Custom Beagle Activity**](/docs/resources/customization/beagle-for-android/custom-beagle-activity). 
{{% /alert %}}

### **Step 4: Initiate the Beagle and the Design System**

Now it's the moment to initiate Beagle in your application's class. However, before you start check out if the minimum version of your SDK is above 19, as in the example: 


```text
defaultConfig {
    minSdkVersion 19 //or higher
}
```


{{% alert color="info" %}}
You can set a Design System now, at this point it is not necessary,  just proceed without configuring. But, if you wanna know more about it, check [**this section about Design System for Android**](/docs/get-started/creating-a-project-from-scratch/case-android/design-system-with-beagle-android). 
{{% /alert %}}

### **Step 5: Create a BeagleSetup** 

Now you have to initialize your `Application ,`so Beagle can generate other configurations file that you need. When you initialize Beagle for the first time, a `BeagleSetup` class will be automatically created as you can see in the image below:

![BeagleSetup file](/beaglesetup.png)

### **Step 6: Create the Application class** 

At this moment, you should create a `Kotlin class` that extends to `Application` class. For this example, we'll name as `AppApplication`. 

This class should be named as `BeagleSetup().init(this)` on `onCreate` method, according to the list below:


```kotlin
class AppApplication: Application() {

    companion object {
        var APPLICATION: Application? = null
    }

    override fun onCreate() {
        super.onCreate()
        
        APPLICATION = this

        BeagleSetup().init(APPLICATION!!)
    }
}
```


{{% alert color="danger" %}}
When you create this class, press CTRL + F9 so Beagle's generated classes are created. 
{{% /alert %}}

### **Step 7: Update your Android Manifest.xml**

Finally, you must update again your `AndroidManifest.xml` and define the `AppApplication` we created as an application's initialization file, as you can see in the example below: 


```markup
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.beagleexamples">

    <uses-permission android:name="android.permission.INTERNET" />

    <application
        android:name=".AppApplication"
        
        ..
```


Now you're ready to start using Beagle! To verify if the configuration is correct, we can simulate a Server-Driven screen to make the following test.

## Use Example

### How to display a declarative screen 

Once you have already configured Beagle, every server-driven screen you build on your application's backend will be sent to frontend through JSON. 

To test our application, we'll make a simulation of a server-driven screen creating a JSON that represents a screen of tour Android application. 

Follow these steps to make this exhibition: 

1. Open the file `MainActivity.kt`;
2. State the line below on`OnCreate` function;
3. Add the a command line `test_content.addView(testScreen().toView(this))`
4. Notice that doesn't exist the **test\_content**, because we will still name this reference.


```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)
    test_content.addView(testScreen().toView(this))
}
```


{{% alert color="info" %}}
To access the view `test_content` as the example above, it is necessary to install the plugin: 


```text
plugins {
    id 'kotlin-android-extensions'
}
```

{{% /alert %}}

5. Open the `.xml` layout file of Main Activity and create a Frame layout. 

As a default, Android usually creates `.xml` files with `constraint layout`. You don't need to remove it, just add a layout frame inside it and check out if the configurations are similar to the example below:

```text
activity_main.xml

<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:id="@+id/test_content" />
```

6. Now, you just have to return to **MainActivity.kt** page and state the function below. It's responsible to list JSON to test the screen.

```kotlin
MainActivity.kt

private fun testScreen() = Screen(
    child = Container(
      children = listOf(
        Text(
          text = "Hello Beagle!"
        ).applyStyle(
          Style(margin = EdgeValue(top = 16.unitReal()),
            flex = Flex(alignSelf = AlignSelf.CENTER)
          )
              ),
        Text(
          text = "Beagle is a cross-platform framework which provides usage of the " +
                      "Server-Driven UI concept, natively in iOS, Android and Web applications. " +
                      "By using Beagle, your team could easily change application's layout and" +
                      " data by just changing backend code."
        ).applyStyle(
          Style(margin = EdgeValue(
            left = 16.unitReal(),
            right = 16.unitReal(),
            top = 20.unitReal()
          )
          )
        )
      )
    )
  )
```

The function above creates a JSON structure below, that will be interpreted by Beagle:

```kotlin
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:container",
    "children" : [ {
      "_beagleComponent_" : "beagle:text",
      "text" : "Hello Beagle!",
      "style" : {
        "margin" : {
          "top" : {
            "value" : 16.0,
            "type" : "REAL"
          }
        },
        "flex" : {
          "alignSelf" : "CENTER"
        }
      }
    }, {
      "_beagleComponent_" : "beagle:text",
      "text" : "Beagle is a cross-platform framework which provides usage of the Server-Driven UI concept, natively in iOS, Android and Web applications. By using Beagle, your team could easily change application's layout and data by just changing backend code.",
      "style" : {
        "margin" : {
          "left" : {
            "value" : 16.0,
            "type" : "REAL"
          },
          "top" : {
            "value" : 20.0,
            "type" : "REAL"
          },
          "right" : {
            "value" : 16.0,
            "type" : "REAL"
          }
        }
      }
    } ]
  }
}
```

7. Click on **`Run app`** and check the emulator screen!  
You will see this screen:

![](/captura-de-tela-2020-06-22-a-s-11.41.12.png)

{{% alert color="success" %}}
Well done, you created your first screen with Beagle!
{{% /alert %}}

This tutorial focused in a simple screen configuration, so you could understand the process and without worrying about screens' hierarchy. 

## Additional Information  

Before you use Beagle, stay tuned about: the **release build configuration and ProGuard.** 

Even though it's not necessary at this moment, it's good to have in mind that you'll have to [**configure the ProGuard**](/docs/resources/customization/beagle-for-android/proguard-configuration) to activate the obfuscate code when you publish releases.  

{{% alert color="info" %}}
The annotated classes like `BeagleComponent` and `RegisterValidator` can't implement parameters in your constructors because, on Beagle, these constructors must be empty. 
{{% /alert %}}
