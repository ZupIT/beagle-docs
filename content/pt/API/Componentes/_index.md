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

{{< tabs id="T132" >}}
{{% tab name="Layout" %}}
* [**Container**](/pt/api/componentes/layout/container)
* [**List View**](/pt/api/componentes/layout/listview)
* [**PageView**](/pt/api/componentes/layout/pageview)
* [**PageIndicator**](/pt/api/componentes/layout/pageindicator)
* [**ScrollView**](/pt/api/componentes/layout/scrollview)
{{% /tab %}}

{{% tab name="Formulários" %}}
* [**Validator**](/pt/api/componentes/formulários/validator)
* [**Simple Form**](/pt/api/componentes/formulários/simple-form)
* [**Text Input** ](/pt/api/componentes/ui/textinput)
{{% /tab %}}

{{% tab name="Lazy" %}}
* [Lazy](/pt/api/componentes/lazy)
{{% /tab %}}

{{% tab name="UI" %}}
* [**Button**](/pt/api/componentes/ui/button)
* [**Image**](/pt/api/componentes/ui/image/)
* [**Tab Bar**](/pt/api/componentes/ui/tabbar)
* [**Tab View**](/pt/api/componentes/ui/tabview)
* [**Text**](/pt/api/componentes/ui/text)
* [**Web View**](/pt/api/componentes/ui/webview)
{{% /tab %}}

{{% tab name="Touchable" %}}
* [Touchable](/pt/api/componentes/touchable)
{{% /tab %}}
{{< /tabs >}}
