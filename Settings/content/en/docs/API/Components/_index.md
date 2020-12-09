---
title: Components
weight: 283
description: Here you'll find all about components and its attributes details.
---

---

![&#xC1;rvore de componentes do Beagle](/docs-beagle/components-01-beagle.png)

`ServenDrivenComponent`  is the father of all Beagle's components, such as `widgets`, `forms` e `navigation`, they will be implemented through`ServerDrivenComponent`.

Any visual component is required to extend a specific class to work on Beagle. Some of these components are already implemented like `Button`, `Text` and `Image`.

You can have other visual component as well, and you are able to create customized components that will have to extend the widget class, according to your platform \(Android or iOS\). 

Beagle has **21 components**, they are currently divided into **5 categories**:

{{< tabs name="T114" >}}
{{% tab name="Layout" %}}
* [**Container**](https://docs.usebeagle.io/api/componentes/layout/container)
* [**List View**](https://docs.usebeagle.io/api/componentes/layout/listview)
* [**PageView**](https://docs.usebeagle.io/api/componentes/layout/pageview)
* [**ScrollView**](https://docs.usebeagle.io/api/componentes/layout/scrollview)
{{% /tab %}}

{{% tab name="Navigation" %}}
* [**Touchable**](https://docs.usebeagle.io/v/v1.0-en/api/components/navigation-1#touchable)
{{% /tab %}}

{{% tab name="Forms" %}}
* [**Validator**](form/validator)
* [**Simple Form**](form/simple-form-web)
* [**Input**](ui/input)
{{% /tab %}}

{{% tab name="Lazy" %}}
* [**LazyComponent**](https://docs.usebeagle.io/api/componentes/lazy)
{{% /tab %}}

{{% tab name="UI" %}}
* [**Button**](https://docs.usebeagle.io/api/componentes/ui/button)
* [**Image**](https://docs.usebeagle.io/api/componentes/ui/image)
* [**Tab View**](https://docs.usebeagle.io/api/componentes/ui/tabview)
* [**Text**](https://docs.usebeagle.io/api/componentes/ui/text)
* [**Web View**](https://docs.usebeagle.io/api/componentes/ui/webview)
{{% /tab %}}
{{< /tabs >}}
