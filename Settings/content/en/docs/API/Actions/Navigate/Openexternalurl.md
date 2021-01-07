---
title: OpenExternalUrl
weight: 250
description: Here you'll find OpenExternalURL description and its attribute.
---

---

## What is it?

Open the navigator by selecting the user with the informed URL.

Your structure is represented by the attribute below:

| **Attribute** | **Type** | Required | **Definition** |
| :--- | :--- | :--- | :--- |
| url | String |         ✓ |  URL sent to navigator. |

## How to use it?

On the example below, you can see a screen that comes from BFF with a button when is clicked, open the browser with the specific URL. To test, it is necessary an endpoint of your BFF return the code below and call it in the frontend: d.

{{< tabs id="T93" >}}
{{% tab name="JSON" %}}
<!-- json-playground:openExternalURL.json
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:button",
    "text" : "Click me!",
    "onPress" : [ {
      "_beagleAction_" : "beagle:openExternalURL",
      "url" : "http://docs-beta.usebeagle.io/docs/api/actions/navigate/openexternalurl/"
    } ]
  }
}
-->
{{% playground file="openExternalURL.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Screen(
    child = Button(
        text = "Click me!",
        onPress = listOf(
            Navigate.OpenExternalURL(
                url = "https://docs.usebeagle.io/api/api-acoes/navigate/openexternalurl"
            )
        )
    )
)
```
{{% /tab %}}
{{< /tabs >}}
