---
title: Case Android
weight: 33
description: 'Here, you''ll find a tutorial to start an Android project with Beagle.'
---

---

## Starting an Android project

For this practical example, we'll use Android Studio IDE. In case you still don't have it installed, just access on [**official Android website** ](https://developer.android.com/studio?hl=us-en)and follow the instructions.   
  
After you installed the program, follow the steps below:

**Step 1:** Open Android Studio and click on **Start a new Android Studio project**_._ 

![](https://lh4.googleusercontent.com/bAhbvEZUN_pBXavMOqCvkt2Z4NlYsxXXtmeGRKEUnyGfuIm7c-mskMhmmiMbSaCw_xonW8vceVI2C27q08-k5tV8EDD5ymvoaPwDDFGe_fN3bmoqCQEoAAKASKXOTiI3KUPI1GQ1)

**Step 2:** Choose the **Empty Activity** option and click on **next**. 

![](https://lh5.googleusercontent.com/nT0zkr0W_Ark0ZZDR2eWtCtfnjC_Fm98VSwU3DgBQzcgh_DoqkYNvhINztNL460p0U2hnygJ5K_DhrZMZis0mqHD69QJgKimruICs4MnBnPO9m-m_2T6E1nWIXiOfaIe0iiCjIN3)

   **Step 3️:** On this page, we should list some important informations:

* Inform your project's name. On this example, we'll call `BeagleApp`.
* Choose which language you'll use. For Beagle, we should go with`Kotlin`.
* Choose **SDK minimum 19**, because a lower SDK won't be compatible. 
* Define a **package** and a **Save location** according to your preference. 
* Click on **Next**.

![](https://lh3.googleusercontent.com/m5jnbs4K5AdwQbA7YVn7fSgtVzw5S68yCbGTj_7-CYa9CGvMR-qFO5EQ4SaNehXYRmI4WOOnqA6JQouzW2QC0YMTpBq7kJSbi54yl0Q2emL_y2FizY3LyloLjuh_uDyf8WyVbodP)

**Step 4️:** After you made the previous configurations, Android will take some time to build the project because it will be synchronizing all the initials dependencies to initialize the project

Once the initialization is done, you will see this page: 

![](/mainactivity.png)

{{% alert color="success" %}}
Well done, your project was created on Android! Now, you will need to configure Beagle following the next steps. 
{{% /alert %}}

## Configuring Beagle

### **Step 1:** Define the dependencies

To start, you have to configure Beagle's dependencies on your repository. This can be done using the configurations below and downloading Beagle's library. 

* Open your project on Android Studio.  
* Search for `Graddle scripts` file on the project. 
* On this file, there are two files `gradle` name. Open the first one named.`build.graddle(project:Beagle)`.
* Search for `allprojects` code block and configure  `Maven` credentials as you see in the list below:


```go
// Add it in your root build.gradle at the end of repositories:
allprojects {
    repositories {
        google()
        jcenter()
        // < 1.1.0
        maven {
            url 'https://dl.bintray.com/zupit/repo'
        }
        // >= 1.1.0
        mavenCentral()
    }
}
```


* Close `build.graddle(project:Beagle)` file.

Once you made it, we should include `kapt plugin` and `Beagle` as dependencies on `dependency manager`. To do so, follow these instructions:

* Open the`build.graddle(Module:app)`  file 

Notice that some `plugins` are already listed on the file's beginning  arquivo as it shows the image below:

* Then, add the line_`apply plugin: 'kotlin-kapt'`_ 

![](/implementacaogradle.png)

After that, you need to add some dependencies: 

* Search for this file that is moving in `dependencies { }`code block. 
* Add a `ext.beagle_version` variable on the top \(in this case, out of\) the dependencies scope 
  * The current release version of Beagle is:[![Maven Central](https://img.shields.io/maven-central/v/br.com.zup.beagle/android)](https://oss.sonatype.org/#nexus-search;gav~br.com.zup.beagle~android~~~~kw,versionexpand)

Copy and paste the lines below inside your dependencies:

* _implementation "br.com.zup.beagle:android:$beagle\_version"_ 
* _kapt "br.com.zup.beagle:android-processor:$beagle\_version"_


```go
// Add in your app level dependency
ext.beagle_version = "${beagle_version}"
 
dependencies {
    implementation "br.com.zup.beagle:android:$beagle_version"
    kapt "br.com.zup.beagle:android-processor:$beagle_version"
}
```


{{% alert color="info" %}}
Insert the Beagle's release version on the place of`${beagle.version}`, in other words, put the Beagle's version highlighted in blue badge above without the **v caracter**.

For example: undefined-`ext.beagle.version = "0.2.8"`
{{% /alert %}}

At the end of these configurations, your file must be like this:

![](/implementacaogradle2.png)

### Step 2: Configure the Android Manifest file

The next step is to update your Android Manifest project by adding a few lines to the file:

1. INTERNET's permission so your application can be able to access internet. `<uses-permission android:name="android.permission.INTERNET" />`

{{% alert color="info" %}}
If you find difficulties to find this or another file, just use Android Studios search bar. 

To enable it, press **`SHIFT`** button twice and the search interface will appear. Once you made it, just just have to type `AndroidManifest` and Android Studio will find it. 
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


Let this file open because we'll use it again in another moment.

{{% alert color="warning" %}}
* The **usesCleartextTraffic**: Indicates with the app intends to use cleartext network traffic, HTTP.  The default value for apps that target API level 27 or lower is "`true`". Apps that target API level 28 or higher default to "`false`".
* The **attribute** `android:usesCleartextTraffic="true"` inside `<application>`tag  is used to communicate with the local BFF. Them if you intent to debug the project using a local BFF you can use this as an easy configuration step. 
* Although, if you plan to turn this example into a release application, we recomend you using the **`networkSecurityConfig`** which you can configure using [**android developers page instructions**](https://developer.android.com/training/articles/security-config).
{{% /alert %}}

### Step 3: Create an AppBeagleConfig

For the next steps, you should create a `AppBeagleConfig` class, that is part of [**Beagle's installation**](/docs/get-started/installing-beagle/android) and it's responsible to register some important configurations. 

When you create the call, we should guarantee that it's configured in this way:

* Noted with `@BeagleComponent` 
* And extending `BeagleConfig`class. 

To create AppBeagleConfig, follow these steps: 

1. First, you create a package with all configurations' files.  
2. Then, click with the right button on the main package of your project and click on **new &gt; package** __like in the image below: 

![](/newpackage.png)

Even though you can name the file as you want to, we'll recommend for this tutorial that you use the name`beagle`.

    3. Click with the right button on beagle's package and click on **new&gt;Kotlin File/Class**

   __4. __Name it as `AppBeagleConfig` and then press **`ENTER`**

   5. Copy and paste the configurations below on `AppBeagleConfig` file you just created. Notice that it will implement two attributes: `baseUrl` and `environment`.

* The **`baseUrl`** returns the basis URL of your environment.
* The **`environment`** returns the _`current build state`_ of your application. 
*  **`isLoggingEnabled`** returns the application's log view 
* The  **`cache`** manager configuration.


```kotlin
import br.com.zup.beagle.android.annotation.BeagleComponent
import br.com.zup.beagle.android.setup.BeagleConfig
import br.com.zup.beagle.android.setup.Cache
import br.com.zup.beagle.android.setup.Environment

@BeagleComponent
class AppBeagleConfig : BeagleConfig {
    override val baseUrl: String get() = "http://10.0.2.2:8080" // return the base url based on your environment
    override val environment: Environment get() = Environment.DEBUG // return the current build state of your app
    override val isLoggingEnabled: Boolean = true
    override val cache: Cache get() = Cache(
        enabled = true, // If true, we will cache data on disk and memory.
        maxAge = 300, // Time in seconds that memory cache will live.
        memoryMaximumCapacity = 15 // Memory LRU cache size. It represents number of screens that will be in memory.
    ) // Cache management configuration
}
```


{{% alert color="info" %}}
At this tutorial point, we will test our Server-Driven screens on local host because it's important that our **`baseURL`** be local.

 Now, Beagle expects that your `@BeagleComponent` classes must have only empty constructors. 
{{% /alert %}}

### **Step 4: Create AppBeagleActivity**

You will have to deal with the `activities` that will be generated through server-driven. That's the reason why it's necessary to [**implement an Activity**](/docs/get-started/using-beagle/android#step-3--beagleactivitiy) to manage them. For this example, we'll name it as `AppBeagleActivity`.

This file is part of [**Beagle's usage configuration**](/docs/get-started/using-beagle/android) and must be implemented, at least once, so Beagle can normally work. 

When you create AppBeagleActivity, remember to note it as `BeagleComponent` and to extend it to `BeagleActivity` class. 

{{% alert color="info" %}}
It's very important to ensure that this `activity` is registered on Android Manifest. Make it right after you create the activity. 
{{% /alert %}}

Follow the steps below to create AppBeagleActivity, including  `.xml` file:

1. Click with the right button on Beagle's package and click on **New&gt;Activity&gt;Empty Activity** 

![](/newactivity.png)

   2. Name it as `AppBeagleActivity` for the `Activity` and click on **`finish`**.

{{% alert color="info" %}}
From now on, Beagle will use this `activity` every time to load the screen's informations received from backend on your application's frontend.
{{% /alert %}}

We left a configuration example below so you just copy and paste.  

* First, find this `activity` layout. It's probably on`RES` &gt; `LAYOUT` &gt; with the name of `activity_app_beagle.xml`  
* Copy and paste the `.xml` content below removing any previous content: 


```markup
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/root_layout"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">

    <androidx.appcompat.widget.Toolbar
        android:id="@+id/custom_toolbar"
        android:layout_width="match_parent"
        android:layout_height="wrap_content" />
    <FrameLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent">

        <FrameLayout
            android:id="@+id/server_driven_container"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        <ProgressBar
            android:id="@+id/progress_bar"
            android:layout_width="42dp"
            android:layout_height="42dp"
            android:layout_gravity="center"
            android:visibility="gone"/>
    </FrameLayout>
</LinearLayout>
```


* Now open `AppBeagleActitivity.kt` file and configure as it shows below:


```kotlin
@BeagleComponent
class AppBeagleActivity : BeagleActivity() {

    private val progressBar: ProgressBar by lazy { findViewById<ProgressBar>(R.id.progress_bar) }
    private val mToolbar: Toolbar by lazy { findViewById<Toolbar>(R.id.custom_toolbar) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_app_beagle)
    }

    override fun getServerDrivenContainerId(): Int = R.id.server_driven_container

    override fun getToolbar(): Toolbar = mToolbar

    override fun onServerDrivenContainerStateChanged(state: ServerDrivenState) {
        when (state) {
            is ServerDrivenState.Started -> {
                progressBar.visibility =  View.VISIBLE
            }
            is ServerDrivenState.Finished -> {
                progressBar.visibility =  View.GONE
            }
            is ServerDrivenState.Error -> {
                Toast.makeText(this, "Error", Toast.LENGTH_LONG).show()
            }
        }
    }
}
```


{{% alert color="warning" %}}
At this point, it's essential that you remove the `ActionBar` pattern of this `activity` because, from now on, Beagle will manage the `ActionBar/Toolbar`. 
{{% /alert %}}

To make this configuration, you must change your `BeagleActivity`'s theme. Go to `Resources` folder on your Android Studio's application and open the `STYLE` file. Then, just change your `AppTheme` like the example below:  


```markup
<resources>
    <!-- Beagle Activity theme. -->
    <style name="MyTheme" parent="Theme.AppCompat.NoActionBar">
```


### Step 5: Initialize Beagle and the Design System 

{{% alert color="info" %}}
What is Design System? 

For more information, see [**section Design System with Beagle Android**](/docs/get-started/creating-a-project-from-scratch/case-android/design-system-with-beagle-android).
{{% /alert %}}

{{% alert color="info" %}}
The **design system** keeps the style components registry created in the frontend and that is how your application will know which style component must be applied on each Server-Driven element. It is on the server-drive screen the visual elements \(views\) are used on the construction of your screen. 

Even if you can create it now, if you want to, it is not necessary to the initial configuration in order to test Beagle faster. You can proceed without configurating it. For more information see [**Design System on  Beagle for Android**.](/docs/get-started/creating-a-project-from-scratch/case-android/design-system-with-beagle-android) 
{{% /alert %}}

Now , you must initialize your `Application` so Beagle can manage the other configuration's files. To do so, just click on`Make project` \(HAMMER symbol\) or use the command `CTRL + F9`.

![](/apppackage.png)

When it's initialized, Beagle will automatically create a `BeagleSetup` file that will be in the folder with the generated files, like in the image below: 

![](/image%20%2843%29.png)

### Step 6: Create an AppApplication class

On this step, you need to create a`KOTLIN` class that extends to the `Application`class. For this example, we'll name it as`AppApplication`. 

It's necessary to make some configurations on this folder so it can `BeagleSetup().init(this)` function on your `onCreate` method. Follow these steps: 

1. Click with the right button on your project's main package _\(_**beagleapp**_\)_ and choose:
   * `new` &gt; `Kotlin file/class`
   * Name the file as `AppApplication` and press **`enter`**
   * Configure the file as in the example below: 


```kotlin
class AppApplication: Application() {

    override fun onCreate() {
        super.onCreate()
        BeagleSetup().init(this)
    }
}
```


2. To finish this configuration, you must state the class on the [**AndroidManifest**](#step-2-configure-the-android-manifest-file) we created in the beginning. 

The name of your`application` now it's the same of the class you created. Update the Android Manifest as it's indicated below: 


```markup
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.beagleexamples">

    <uses-permission android:name="android.permission.INTERNET" />

    <application
        android:name=".AppApplication"
        
        ...
```


{{% alert color="success" %}}
Well done, your Android application is configured and ready to use Beagle! 
{{% /alert %}}

All you have to do now is [**set up a backend** ](/docs/get-started/creating-a-project-from-scratch/case-backend)to answer your application's requests. Once you made this configuration, start your application and you'll see your first server-driven screen!

### Step 7: Display your Server-Driven Screen

It's very simple to show a Server-Driven screen. Now that all Beagle's configuration is done, you just have to follow these steps: 

* Open the file `MainActivity.kt` 
* State the `intent` as listed below. It will define the address of screen's informations on the backend you configured. 
* Copy and paste the `intent` listed below on `onCreate` method.

```text
val intent = this.newServerDrivenIntent<AppBeagleActivity>(ScreenRequest("/screen"))
startActivity(intent)
finish()
```

* Your`MainActivity.kt` must be like this:

![](/print-intent%20%281%29.png)

Now you just have to click on **`Run app`** and check out your emulator's screen!   
You will see this screen: 

![](/captura-de-tela-2020-06-22-a-s-11.41.12.png)

{{% alert color="success" %}}
Well done, you created your first screen with Beagle!  🎉 
{{% /alert %}}
