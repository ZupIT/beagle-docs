---
title: Components
weight: 10
description: Here you will find all information about components and its attributes details.
---

---

![](/shared/components-01-beagle.png)

`ServenDrivenComponent` is the father of all Beagle's components, such as `widgets`, `forms` e `navigation`, they will be implemented through`ServerDrivenComponent`.

Any visual component is required to extend a specific class to work on Beagle. Some of these components are already implemented like `Button`, `Text` and `Image`.

You can have other visual component as well, and you are able to create customized components that will have to extend the widget class, according to your platform \(Android or iOS\).

Beagle has **21 components**, they are currently divided into **5 categories**:

{{< tabs id="T114" >}}
{{% tab name="Layout" %}}

- [**Container**]({{< ref path="/api/components/layout/container" lang="en" >}})
- [**List View**]({{< ref path="/api/components/layout/listview" lang="en" >}})
- [**PageView**]({{< ref path="/api/components/layout/pageview" lang="en" >}})
- [**ScrollView**]({{< ref path="/api/components/layout/scrollview" lang="en" >}})
  {{% /tab %}}

{{% tab name="Navigation" %}}

- [**Touchable**]({{< ref path="/api/components/touchable" lang="en" >}})
  {{% /tab %}}

{{% tab name="Forms" %}}

- [**Simple Form**]({{< ref path="/api/components/forms/simple-form" lang="en" >}})
- [**Input**]({{< ref path="/api/components/ui/textinput" lang="en" >}})
  {{% /tab %}}

{{% tab name="Lazy" %}}

- [**LazyComponent**]({{< ref path="/api/components/lazy" lang="en" >}})
  {{% /tab %}}

{{% tab name="UI" %}}

- [**Button**]({{< ref path="/api/components/ui/button" lang="en" >}})
- [**Image**]({{< ref path="/api/components/ui/image" lang="en" >}})
- [**Text**]({{< ref path="/api/components/ui/text" lang="en" >}})
- [**Web View**]({{< ref path="/api/components/ui/webview" lang="en" >}})
  {{% /tab %}}
  {{< /tabs >}}
