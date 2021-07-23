---
title: How to display a screen
weight: 224
description: >-
  In this section, you will find how to display a server-driven screen.
---

---

## Display a screen through a URL

Each platform has its own way to display a server-driven screen on frontend by using Beagle. You can see examples below:

{{< tabs id="T94" >}}
{{% tab name="Android" %}}
To display a **`full server-driven`** screen, you need to use the method `this.newServerDrivenIntent<BeagleActivity>()`. Where `this` refers to the context of the screen.

This method requires the parameter `ScreenRequest`.

You must follow the example below:

{{% alert color="warning" %}}
Make sure to list your Beagle Activity as named in your AndroidManifestfile.

In this example, you only call it BeagleActivity, but this name is defined by you when creating your BeagleActivity. In the tutorial [**Creating a project from scratch**]({{< ref path="/android/getting-started" lang="en" >}}), it is called `AppBeagleActivity`.
{{% /alert %}}

```kotlin
val intent = this.newServerDrivenIntent<BeagleActivity>(ScreenRequest("/screen"))
startActivity(intent)
```

{{% alert color="info" %}}
To test the command above, the `ScreenRequest` component requires an URL that brings the JSON with all the server-driven screen's information that you want to display.

In this case, follow these steps:

- Use the screen example on the link below that brings a JSON for a simple `"\screen"` test. Just copy and paste it replacing the URL "/screen" .
  https://run.mocky.io/v3/73322be2-96bf-467b-b6dc-e3fff179852c

- See how the code ends up below.

```text
val intent = this.newServerDrivenIntent<BeagleActivity>(ScreenRequest("https://run.mocky.io/v3/73322be2-96bf-467b-b6dc-e3fff179852c"))
startActivity(intent)
```

{{% /alert %}}

### The Screen Request class.

The `ScreenRequest` is an internal Beagle class used to request which screen you want to display. You will only list the **`URL`** attribute for the page you want to load from the BFF. However, this element has other attributes, which can be used in the transition and between screens. 

To learn more about this class, check out on [**Screen Request**]({{< ref path="/api/screen-request" lang="en" >}})
{{% /tab %}}

{{% tab name="iOS" %}}
To render a [**server-driven**]({{< ref path="/key-concepts#server-driven-ui" lang="en" >}}) screen, just create an instance **`BeagleScreenViewController`** and the type is **`remote`**, then you make the initialization with your [**BFF's URL**]({{< ref path="/key-concepts#backend-for-frontend" lang="en" >}}), like the example below:

```kotlin
let beagleViewController = Beagle.screen(
    .remote(
        .init(url: "// URL AQUI")
    )
)
```

After that, now present it where you want. In this case, you must follow the command:

```swift
present(beagleViewController, animated: true, completion: nil)
```

The **answer** of your BFF must be a JSON that represent a **visual component locally defined** in the application.

{{% alert color="info" %}}
You can also [**render an example screen**](https://run.mocky.io/v3/2ee29265-5edb-4c61-8a30-827760ae66ca). For that, you pass this same **`BeagleScreenViewController`** initialization URL.
{{% /alert %}}

Now, **run the application** and see a defined screen in a remoted rendered URL in your local application.

{{% alert color="success" %}}
Congratulations, you now displayed a **full server-driven screen.** 🎉

Now, it is possible to create screens with dynamic content and you can control in your backend.
{{% /alert %}}
{{% /tab %}}

{{% tab name="Web" %}}

#### **For projects on Angular**

To define where you should display a server-driven screen on Angular, you should use a component provided by the `<beagle-remote-view>` library.

{{% alert color="info" %}}
This component has other attributes that can be configured. However, in this implementation you will only use the **`path attribute`**, described in the example below.

For more details on this component, check the following link [Remote View]({{< ref path="/web/commons/remote-view-parameters" lang="en" >}}).
{{% /alert %}}

On the html file of your component, add the `remote view`.

```markup
<beagle-remote-view [loadParams]="loadParams"></beagle-remote-view>
```

Once you made it, access the controller component and create the `loadParams`, which is expected by the `remote view`.

```text
loadParams: LoadParams;

  constructor() {
    this.loadParams = {
      path: '/pathToScreen'
    };
  }
```

{{% alert color="info" %}}
On the `path` field, it should be the JSON's path that will be associated with the `baseUrl` defined on `beagle.module.ts`.
{{% /alert %}}

#### **For projects on React**

To define a server-driven screen on React, you need to create a service with a minimum configuration, see the example below:

```javascript
import { createBeagleUIService } from "@zup-it/beagle-react";

export default createBeagleUIService({
  baseUrl: "",
  components: {},
});
```

Once you made it, use two components provided by Beagle's library to define where the server-driven screen will be rendered:

1. The `BeagleProvider`
2. The `BeagleRemoteView`

```javascript
...
import { BeagleProvider, BeagleRemoteView } from '@zup-it/beagle-react';
import BeagleService from './beagle/beagle-service';

function App() {
  return (
    <BeagleProvider value={BeagleService}>
      <BeagleRemoteView path={'/pathToScreen'} />
    </BeagleProvider>
  );
}

export default App;
```

{{% alert color="info" %}}
On the `path` field, it should be JSON's path that will be associated with the `baseUrl` defined on your service.
{{% /alert %}}
{{% /tab %}}
{{< /tabs >}}

## Display a screen through a JSON

{{< tabs id="T95" >}}
{{% tab name="Android" %}}
To render any Beagle component, it's necessary to inform a `viewGroup` where the view corresponding to the component will be rendered, such as a `FrameLayout` within an `Activity`, `Fragment` or `DialogFragment`. See the example below:

```markup
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/frame_layout"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"/>
```

Now, call the `loadView()` method from the `frame_layout` created in the `xml` and pass the `Activity` and the `JSON` as parameters.

```kotlin
class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        frame_layout.loadView(
            activity = this,
            screenJson = "JSON HERE"
        )
    }
}
```

{{% alert color="info" %}}
The `loadView()` method can also receive as a parameter a `Fragment` in place of `Activity` and two other optional ones, following the example below:

```kotlin
loadView(
  fragment = yourFragment, 
  screenJson = "JSON HERE",
  screenId = "your identifier",
  shouldResetContext = yourBoolean,
)
```

### Optional parameters
`screenId` : represents an screen identifier to create the analytics when the screen is created. Default value is empty.
`shouldResetContext` : when true, this clear at the time of calling the `loadView` function all de context data linked to the lifecycle owner. Default value is false.

{{% /alert %}}
{{% /tab %}}

{{% tab name="iOS" %}}
To render a screen of a JSON, you just have to create a **`BeagleScreenViewController`** instance of the **`declarativeText`** type and initialize with the JSON, see the example below:

```swift
let beagleViewController = Beagle.screen(
    .declarativeText(
        .init(text: "// JSON HERE")
    )
)
```

After that, now **just present** it where you want to. On this case, you have to follow the command in the example below:

```swift
present(beagleViewController, animated: true, completion: nil)
```

{{% /tab %}}
{{< /tabs >}}
