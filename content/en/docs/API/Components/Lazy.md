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

{{< tabs name="T126" >}}
{{% tab name="JSON" %}}
```kotlin
{
  "_beagleComponent_": "beagle:lazycomponent",
  "path": "/listview.json",
  "initialState": {
    "_beagleComponent_": "beagle:text",
    "text": "Carregando conteúdo, aguarde..."
  }
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
LazyComponent(
    path = "/listview.json",
    initialState = Text("Carregando conteúdo, aguarde...")
)
```
{{% /tab %}}
{{< /tabs >}}

### 👉 [Test this component in the Web Playground](https://beagle-playground.netlify.app/#/cloud/cce3015fbbcf49388dfb4ab3079f4f9f/lazy.json)
