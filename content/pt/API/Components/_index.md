---
title: Componentes
weight: 308
description: Descrição dos componentes e seus atributos
---

---

![Árvore de componentes do Beagle](/components-01-beagle.png)

O `ServerDrivenComponent` é o pai de todos os componentes do Beagle. Componentes como `widgets`, `formulários` e `navegação` serão implementados por meio do `ServerDrivenComponent`.

Qualquer componente visual é obrigado a estender de uma classe específica para funcionar no Beagle. Alguns componentes visuais já são implementados pelo Beagle como por exemplo o `Button`, `Text` e `Image`.

Você pode ter outros componentes visuais também, e ainda pode criar componentes customizados que devem estender da classe `widget` de acordo com sua plataforma \(Android ou iOS\).

O Beagle possui **14** **componentes** atualmente divididos em **5 categorias**:

{{< tabs id="T132" >}}
{{% tab name="Layout" %}}

- [**Container**](/pt/api/components/layout/container)
- [**List View**](/pt/api/components/layout/listview)
- [**PageView**](/pt/api/components/layout/pageview)
- [**PageIndicator**](/pt/api/components/layout/pageindicator)
- [**ScrollView**](/pt/api/components/layout/scrollview)
  {{% /tab %}}

{{% tab name="Formulários" %}}

- [**Validator**](/pt/api/components/forms/validator)
- [**Simple Form**](/pt/api/components/forms/simple-form)
- [**Text Input** ](/pt/api/components/ui/textinput)
  {{% /tab %}}

{{% tab name="Lazy" %}}

- [Lazy](/pt/api/components/lazy)
  {{% /tab %}}

{{% tab name="UI" %}}

- [**Button**](/pt/api/components/ui/button)
- [**Image**](/pt/api/components/ui/image/)
- [**Tab Bar**](/pt/api/components/ui/tabbar)
- [**Tab View**](/pt/api/components/ui/tabview)
- [**Text**](/pt/api/components/ui/text)
- [**Web View**](/pt/api/components/ui/webview)
  {{% /tab %}}

{{% tab name="Touchable" %}}

- [Touchable](/pt/api/components/touchable)
  {{% /tab %}}
  {{< /tabs >}}
