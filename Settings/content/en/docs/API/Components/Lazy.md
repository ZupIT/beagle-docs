---
title: Lazy
weight: 309
description: Lazy components description and its attributes details
---

---

## What is Lazy? 

The `Lazy Component` is used when a BFF asynchronous request is made. 

See how the structure is represented:

| Attribute | Type | Required | Definition |
| :--- | :--- | :--- | :--- |
| path | String |    ✓ | URL that makes the request.  |
| initialState | [**ServerDrivenComponent**](.././) |    ✓ | Server-driven component that is showed when there is an asynchronous request being done. |

## How to use it?

{{< tabs id="T126" >}}
{{% tab name="JSON" %}}
<!-- json-playground:lazy.json
{
  "_beagleComponent_": "beagle:lazycomponent",
  "path": "lazy.json",
  "initialState": {
    "_beagleComponent_": "beagle:text",
    "text": "Loading the screen, please wait",
    "alignment": "CENTER"
  }
}
-->
{{% playground file="lazy.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
LazyComponent(
    path = "lazy.json",
    initialState = Text("Loading the screen, please wait", alignment = TextAlignment.CENTER)
)
```
{{% /tab %}}
{{< /tabs >}}
