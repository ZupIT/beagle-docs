---
title: Live Preview
weight: 209
description: "Here, you'll find more about Live Preview's functionalities."
---

---

## **Introduction**

Live Preview is a visualization resource that helps with `layout` development. It allows the screens in development to be rendered and you don't have to run your backend server to alter the layout, which reduces a screen's development time. 

In other words, when a developer edits a code defining a screen, he can use the plugin so that the updates are communicated to the client and it renders them. This way, it's possible to view the change without running a back-end server.

{{% alert color="info" %}}
This frontend and backend connection is done through a `WebSocket` on port: `9721`.
{{% /alert %}}

## Requirements

To use `Live Preview`, you must:

- Use [**Beagle SDK**]({{< ref path="/backend/get-started/creating-a-project-from-scratch" lang="en" >}}) in your BFF **;**
- Install `BeaglePreview` plugin;

### BFF Configuration

You must have a configured BFF with Beagle to use Live Preview. In case you haven't done it, [**click here to download an initial project**](https://github.com/ZupIT/beagle-examples/tree/master/BeagleSampleBackend). As an alternative, [**follow our tutorial on how to implement a Beagle configured backend**]({{< ref path="/backend/get-started/creating-a-project-from-scratch" lang="en" >}}).

### **IntelliJ plugin installation**

To install `BeaglePreview`, [_See Live Preview plugin for IntelliJ_](https://plugins.jetbrains.com/plugin/14575-beagle-sdk-live-preview).

## Live Preview Use

{{% alert color="warning" %}}
You **must configure** both backend and frontend for the Live Preview The frontend can be Android or iOS client.
{{% /alert %}}

### Step 1: Backend's Configuration

The following steps allow you to view a screen defined in the backend using Live Preview:

1. You will create a declarative screen to test. The code ahead will return a simple screen as an example.
2. You will create a function that returns the screen to be viewed through the plugin.
3. Finally, you must annotate this function with`@BeaglePreview`.

After this, Live Preview will be capable of receiving the developed screen to be rendered. Some interesting points on the example below:

- Notice the screen itself is defined in the `ScreenBeagleBuilder` class.
- The `buildPreview` function is annotated with `@BeaglePreview` and, therefore, the sender of the screen to be rendered by the plugin.

```kotlin
@BeaglePreview
fun buildPreview() = ScreenBeagleBuilder()

class ScreenBeagleBuilder: ScreenBuilder {
    override fun build() = Screen(
        child = Container(
            children = listOf(
                Text("Live Preview!!!")
            )
        )
    )
}
```

If your function is recognized by the plugin, Beagle's logo will appear as a button to the left of the function. When clicking this button, `BeaglePreview` will push the layout to the client \(frontend application\), allowing it to update your layout instantly!
See the example below:

![](/shared/livepreviewpluginintellijidea.gif)

After running the plugin on some function, you only need to save the changes done in your layout so that the Live Preview updates the screen being rendered by the frontend. It does this by compiling your modified code and verifying if there is some change and, if there is, push your new layout to the client.

### Step 2: iOS and Android's Frontend configuration

Once you have configured your backend, the next step is to configure the frontend's application emulator for a Beagle Android or iOS project.

{{< tabs id="T85" >}}
{{% tab name="Android client" %}}

### Step 1: Installing the submodule

To make this installation, your `gradle` file must contain the following fragment:

The latest Beagle's version: ![Maven Central](https://img.shields.io/maven-central/v/br.com.zup.beagle/android?color=green&label=Beagle)

```kotlin
// Add in your plugins
apply plugin: 'kotlin-kapt'

// Add in your app level dependency
ext.beagle_version = "${beagle_version}"

dependencies {
    implementation "br.com.zup.beagle:android:$beagle_version"
    kapt "br.com.zup.beagle:android-processor:$beagle_version"

    debugImplementation "br.com.zup.beagle:android-preview:$beagle_version"
}
```

On `ext.beagle_version = "${beagle_version}"`, insert the Beagle's release version on the place of `${beagle.version}`. That means that you put the Beagle's version indicated on the blue badge, but without the **v character**.

For example: undefined-`ext.beagle.version = "1.8.0"`

Once you made it, you can update your dependencies.

### Step 2: Create a Preview Activity

First of all, it's necessary to state a `PreviewActivity` on your application's manifest to show a preview:

{{% alert color="warning" %}}
It's not necessary to create, in fact, an Activity because it's already internally created on Beagle. You should only refer it on your manifest indicating that it's part of Activities' hall accessible on this application.
{{% /alert %}}

Copy and paste the Activity below on your **`AndroidManifest`**:

```markup
...
    <application>
        ...
        <activity
            android:exported="true"
            android:name="br.com.zup.beagle.android.preview.PreviewActivity"
            android:theme="@style/AppTheme.NoToolbar"/>
    </application>
</manifest>
```

As well as in `BeagleActivity`**,** you must inform on`PreviewActivity` state that the theme has not the `ActionBar,` because Beagle already coordinates this component.

{{% alert color="warning" %}}
Another important point is that you have to enable the exported flag so it can start through `ADB`
{{% /alert %}}

## Visualize screens through Android Studio's Emulator

After you finished the previous configurations, you must **start the IntelliJ plugin** by clicking on Beagle's symbol next to the function that notes `@BeaglePreview` and opens`PreviewActivity` to receive the updates sent from BFF to be automatically rendered.

- To start the `PreviewActivity` through `intent`, you just have to call the intent below to see the emulator's screen:

```kotlin
startActivity(PreviewActivity.newIntent(this))
```

However, if you prefer to start through **ADB**, just call the method:

```bash
adb shell am start -n applicationpackagename/br.com.zup.beagle.android.preview.PreviewActivity
```

{{% alert color="info" %}}
For more information about your package, access the attribute's package on your`AndroidManifest`'s file
{{% /alert %}}

## Visualize screens through Android Device

You can also view the screen you're creating by an Android `device`. To do so, it's necessary to inform your network's `IP` on the `intent` that calls the Live Preview screen.

{{% alert color="info" %}}
Live Preview's Activity connects to the `Backend`'s screen through the client's `websocket` connection.
This `client` needs to know which `IP` must be used to establish the connection.
{{% /alert %}}

- To start a `PreviewActivity` through `device`, you just have to call the `intent` below so you can see the screen on your device:

```kotlin
startActivity(
    PreviewActivity
        .newIntent(
            this,
            endpoint = "http://myIP:9721"
    )
)
```

{{% /tab %}}

{{% tab name="iOS client" %}}
### Step 1: Install the submodule

To make the installation, your pod file must contain the following fragments:

```bash
...
pod 'BeagleUI', :git => 'https://github.com/ZupIT/beagle.git'
pod 'BeagleUI/Preview', :git => 'https://github.com/ZupIT/beagle.git'
...
```

After that, you can update your dependencies:

```bash
$ pod install
```

### Step 2: Use

The user must present the preview's controller of any visible `UIViewController` with **BeaglePreview.present\(in:self\)** code.

Once you made it, the preview controller will connect to a plugin and start to listen the received messages about layout change.

On the hypothetical example below, you can see how the UIViewController must be shown:

```bash
import BeagleUI

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
    }

    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)

        BeaglePreview.present(in: self)
    }

}
```

{{% /tab %}}
{{< /tabs >}}

## Limitations

When using Live Preview, there are two important points to keep in mind:

1. The Live Preview client can render any change using the elements available to it when it was started. Custom elements added afterward require a client to rebuild and restart.
2. The `@BeaglePreview` annotation works with public methods with no parameters outside any class or in a public class that has a constructor with no parameters. See the snippets below.

```kotlin
class UnsupportedConstructor(thing: Any) {
    @BeaglePreview
    fun preview() = Text(":(")
}

class SupportedPrimaryConstructor {
    @BeaglePreview
    fun preview() = Text(":)")
}

class SupportedBySecondaryConstructor(thing: Any) {
    constructor() : this("solved")

    @BeaglePreview
    fun preview() = Text(":)")
}

class MethodSupport {
    @BeaglePreview
    fun supportedMethod() = Text(":)")

    @BeaglePreview
    fun unsupportedMethod(thing: Any) = Text(":(")
}

@BeaglePreview
fun unsupportedFunction(thing: Any) = Text(":(")

@BeaglePreview
fun supportedFunction() = Text(":)")
```
