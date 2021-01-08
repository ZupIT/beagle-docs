---
title: Components with context
weight: 93
description: >-
  You will find here the ContextComponent description and more details on how it
  works.
---

---

`ContextComponent` is an interface that it is necessary to be implemented in components that use [**Context**](/docs/api/context/), because it contains the context attribute.

## Beagle's components with context:

1. [**Container**](/docs/api/components/layout/container)
2. [**SimpleForm**](/docs/api/components/forms/simple-form)
3. [**PageView**](/docs/api/components/layout/pageview)
4. [**ScrollView**](/docs/api/components/layout/scrollview)
5. [**TabView**](/docs/api/components/ui/tabview)

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
If you want to create customized components on iOS, it is necessary to register it. See [**how to do it here**](/docs/resources/customization/beagle-for-ios/custom-widgets)
{{% /alert %}}
