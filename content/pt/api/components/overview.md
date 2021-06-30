---
title: Visão Geral
weight: 1
type: overview
description: Descrição dos componentes e seus atributos
---

---

![](/shared/components-01-beagle.png)

O `ServerDrivenComponent` é o pai de todos os componentes do Beagle. Componentes como `widgets`, `formulários` e `navegação` serão implementados por meio do `ServerDrivenComponent`.

Qualquer componente visual é obrigado a estender de uma classe específica para funcionar no Beagle. Alguns componentes visuais já são implementados pelo Beagle como por exemplo o `Button`, `Text` e `Image`.

Você pode ter outros componentes visuais também, e ainda pode criar componentes customizados que devem estender da classe `widget` de acordo com sua plataforma \(Android ou iOS\).

O Beagle possui **14** **componentes** atualmente divididos em **5 categorias**:

{{< tabs id="T132" >}}
{{% tab name="Layout" %}}

- [**Container**]({{< ref path="/api/components/layout/container" lang="pt" >}})
- [**List View**]({{< ref path="/api/components/layout/listview" lang="pt" >}})
- [**PageView**]({{< ref path="/api/components/layout/pageview" lang="pt" >}})
- [**PageIndicator**]({{< ref path="/api/components/layout/pageindicator" lang="pt" >}})
- [**ScrollView**]({{< ref path="/api/components/layout/scrollview" lang="pt" >}})
  {{% /tab %}}

{{% tab name="Formulários" %}}

- [**Simple Form**]({{< ref path="/api/components/forms/simple-form" lang="pt" >}})
- [**Text Input** ]({{< ref path="/api/components/ui/textinput" lang="pt" >}})
  {{% /tab %}}

{{% tab name="Lazy" %}}

- [Lazy]({{< ref path="/api/components/lazy" lang="pt" >}})
  {{% /tab %}}

{{% tab name="UI" %}}

- [**Button**]({{< ref path="/api/components/ui/button" lang="pt" >}})
- [**Image**]({{< ref path="/api/components/ui/image/" lang="pt" >}})
- [**PullToRefresh**]({{< ref path="/api/components/ui/pulltorefresh" lang="pt" >}})
- [**Tab Bar**]({{< ref path="/api/components/ui/tabbar" lang="pt" >}})
- [**Text**]({{< ref path="/api/components/ui/text" lang="pt" >}})
- [**Web View**]({{< ref path="/api/components/ui/webview" lang="pt" >}})
  {{% /tab %}}

{{% tab name="Touchable" %}}

- [Touchable]({{< ref path="/api/components/touchable" lang="pt" >}})
  {{% /tab %}}
  {{< /tabs >}}
