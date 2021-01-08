---
title: Components
weight: 283
description: Here you'll find all about components and its attributes details.
---

---

![Beagle's component tree](/components-01-beagle.png)

`ServenDrivenComponent` is the father of all Beagle's components, such as `widgets`, `forms` e `navigation`, they will be implemented through`ServerDrivenComponent`.

Any visual component is required to extend a specific class to work on Beagle. Some of these components are already implemented like `Button`, `Text` and `Image`.

You can have other visual component as well, and you are able to create customized components that will have to extend the widget class, according to your platform \(Android or iOS\).

Beagle has **21 components**, they are currently divided into **5 categories**:

{{< tabs id="T114" >}}
{{% tab name="Layout" %}}

- [**Container**](/pt/home/api/components/layout/container)
- [**List View**](/pt/home/api/components/layout/listview)
- [**PageView**](/pt/home/api/components/layout/pageview)
- [**ScrollView**](/pt/home/api/components/layout/scrollview)
  {{% /tab %}}

{{% tab name="Navigation" %}}

- [**Touchable**](/pt/home/api/components/touchable)
  {{% /tab %}}

{{% tab name="Forms" %}}

- [**Validator**](/pt/home/api/components/forms/validator)
- [**Simple Form**](/pt/home/api/components/forms/simple-form)
- [**Input**](/pt/home/api/components/ui/textinput)
  {{% /tab %}}

{{% tab name="Lazy" %}}

- [**LazyComponent**](/pt/home/api/components/lazy)
  {{% /tab %}}

{{% tab name="UI" %}}

- [**Button**](/pt/home/api/components/ui/button)
- [**Image**](/pt/home/api/components/ui/image)
- [**Tab View**](/pt/home/api/components/ui/tabview)
- [**Text**](/pt/home/api/components/ui/text)
- [**Web View**](/pt/home/api/components/ui/webview)
  {{% /tab %}}
  {{< /tabs >}}
