---
title: Componentes
weight: 308
description: Descrição dos componentes e seus atributos
---

---

![&#xC1;rvore de componentes do Beagle](/components-01-beagle.png)

O `ServerDrivenComponent`  é o pai de todos os componentes do Beagle. Componentes como `widgets`, `formulários` e `navegação` serão implementados por meio do `ServerDrivenComponent`.

Qualquer componente visual é obrigado a estender de uma classe específica para funcionar no Beagle. Alguns componentes visuais já são implementados pelo Beagle como por exemplo o `Button`, `Text` e `Image`.

Você pode ter outros componentes visuais também, e ainda pode criar componentes customizados que devem estender da classe `widget` de acordo com sua plataforma \(Android ou iOS\).

O Beagle possui **14** **componentes** atualmente divididos em **5 categorias**:

{{< tabs name="T132" >}}
{{% tab name="Layout" %}}
* [**Container**](layout/container)
* [**List View**](layout/listview)
* [**PageView**](layout/pageview)
* [**PageIndicator**](layout/pageindicator)
* [**ScrollView**](layout/scrollview)
{{% /tab %}}

{{% tab name="Formulários" %}}
* [**Validator**](formularios/validator)
* [**Simple Form**](formularios/simple-form)
* [**Text Input** ](ui/input)
{{% /tab %}}

{{% tab name="Lazy" %}}
* [Lazy](lazy)
{{% /tab %}}

{{% tab name="UI" %}}
* [**Button**](ui/button)
* [**Image**](ui/image/)
* [**Tab Bar**](ui/tab-bar)
* [**Tab View**](ui/tabview)
* [**Text**](ui/text)
* [**Web View**](ui/webview)
{{% /tab %}}

{{% tab name="Touchable" %}}
* [Touchable](touchable)
{{% /tab %}}
{{< /tabs >}}
