---
title: Components
weight: 283
description: Here you'll find all about components and its attributes details.
---

---

![Beagle's component tree](/components-01-beagle.png)

`ServenDrivenComponent`  is the father of all Beagle's components, such as `widgets`, `forms` e `navigation`, they will be implemented through`ServerDrivenComponent`.

Any visual component is required to extend a specific class to work on Beagle. Some of these components are already implemented like `Button`, `Text` and `Image`.

You can have other visual component as well, and you are able to create customized components that will have to extend the widget class, according to your platform \(Android or iOS\). 

Beagle has **21 components**, they are currently divided into **5 categories**:

{{< tabs id="T114" >}}
{{% tab name="Layout" %}}
* [**Container**](/docs/api/components/layout/container)
* [**List View**](/docs/api/components/layout/listview)
* [**PageView**](/docs/api/components/layout/pageview)
* [**ScrollView**](/docs/api/components/layout/scrollview)
{{% /tab %}}

{{% tab name="Navigation" %}}
* [**Touchable**](/docs/api/components/touchable)
{{% /tab %}}

{{% tab name="Forms" %}}
* [**Validator**](/docs/api/components/forms/validator)
* [**Simple Form**](/docs/api/components/forms/simple-form)
* [**Input**](/docs/api/components/ui/textinput)
{{% /tab %}}

{{% tab name="Lazy" %}}
* [**LazyComponent**](/docs/api/components/lazy)
{{% /tab %}}

{{% tab name="UI" %}}
* [**Button**](/docs/api/components/ui/button)
* [**Image**](/docs/api/components/ui/image)
* [**Tab View**](/docs/api/components/ui/tabview)
* [**Text**](/docs/api/components/ui/text)
* [**Web View**](/docs/api/components/ui/webview)
{{% /tab %}}
{{< /tabs >}}
