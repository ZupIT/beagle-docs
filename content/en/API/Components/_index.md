---
title: Components
weight: 283
description: Here you will find all information about components and its attributes details.
---

---

![Beagle's component tree](/components-01-beagle.png)

`ServenDrivenComponent` is the father of all Beagle's components, such as `widgets`, `forms` e `navigation`, they will be implemented through`ServerDrivenComponent`.

Any visual component is required to extend a specific class to work on Beagle. Some of these components are already implemented like `Button`, `Text` and `Image`.

You can have other visual component as well, and you are able to create customized components that will have to extend the widget class, according to your platform \(Android or iOS\).

Beagle has **21 components**, they are currently divided into **5 categories**:

{{< tabs id="T114" >}}
{{% tab name="Layout" %}}

- [**Container**](/api/components/layout/container)
- [**List View**](/api/components/layout/listview)
- [**PageView**](/api/components/layout/pageview)
- [**ScrollView**](/api/components/layout/scrollview)
  {{% /tab %}}

{{% tab name="Navigation" %}}

- [**Touchable**](/api/components/touchable)
  {{% /tab %}}

{{% tab name="Forms" %}}

- [**Validator**](/api/components/forms/validator)
- [**Simple Form**](/api/components/forms/simple-form)
- [**Input**](/api/components/ui/textinput)
  {{% /tab %}}

{{% tab name="Lazy" %}}

- [**LazyComponent**](/api/components/lazy)
  {{% /tab %}}

{{% tab name="UI" %}}

- [**Button**](/api/components/ui/button)
- [**Image**](/api/components/ui/image)
- [**Tab View**](/api/components/ui/tabview)
- [**Text**](/api/components/ui/text)
- [**Web View**](/api/components/ui/webview)
  {{% /tab %}}
  {{< /tabs >}}
