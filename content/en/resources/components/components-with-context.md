---
title: Components with context
weight: 93
description: >-
  You will find here the ContextComponent description and more details on how it
  works.
---

---

`ContextComponent` is an interface that it is necessary to be implemented in components that use [**Context**]({{< ref path="/api/context/" lang="en" >}}), because it contains the context attribute.

## Beagle's components with context:

1. [**Container**]({{< ref path="/api/components/layout/container" lang="en" >}})
2. [**SimpleForm**]({{< ref path="/api/components/forms/simple-form" lang="en" >}})
3. [**PageView**]({{< ref path="/api/components/layout/pageview" lang="en" >}})
4. [**ScrollView**]({{< ref path="/api/components/layout/scrollview" lang="en" >}})
5. [**TabView**]({{< ref path="/api/components/ui/tabview" lang="en" >}})

## Customized components with context

See below an example with customized components with context:

{{< tabs id="T70" >}}
{{% tab name="Android" %}}

```kotlin
@RegisterWidget
data class CustomComponent(
    val otherAttribute: String
    override val context: ContextData? = null
): WidgetView(), ContextComponent
```

{{% /tab %}}

{{% tab name="BFF" %}}

```kotlin
@RegisterWidget
data class CustomComponent(
    val otherAttribute: String
    override val context: ContextData? = null
): Widget(), ContextComponent
```

{{% /tab %}}

{{% tab name="iOS" %}}

```swift
public struct CustomComponent: RawComponent, HasContext {
    public var context: Context?
    public var otherAttribute: String
}
```

{{% /tab %}}
{{< /tabs >}}

{{% alert color="warning" %}}
If you want to create customized components on iOS, it is necessary to register it. See [**how to do it here**]({{< ref path="/resources/customization/beagle-for-ios/custom-widgets" lang="en" >}})
{{% /alert %}}
