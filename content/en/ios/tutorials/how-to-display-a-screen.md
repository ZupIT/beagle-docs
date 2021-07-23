---
title: How to display a screen
weight: 224
description: >-
  In this section, you will find how to display a server-driven screen.
---

---

## Display a screen through a URL

Each platform has its own way to display a server-driven screen on frontend by using Beagle. You can see how it's done in iOS below:

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

## Display a screen through a JSON

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
