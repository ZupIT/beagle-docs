---
title: "Componentes"
linkTitle: "Componentes"
description: >
Nesta seção, você encontra a descrição dos componentes e seus atributos.
---

![&#xC1;rvore de componentes do Beagle](../../.gitbook/assets/components-01-beagle.png)

O `ServerDrivenComponent`  é o pai de todos os componentes do Beagle. Componentes como `widgets`, `formulários` e `navegação` serão implementados por meio do `ServerDrivenComponent`.

Qualquer componente visual é obrigado a estender de uma classe específica para funcionar no Beagle. Alguns componentes visuais já são implementados pelo Beagle como por exemplo o `Button`, `Text` e `Image`.

Você pode ter outros componentes visuais também, e ainda pode criar componentes customizados que devem estender da classe `widget` de acordo com sua plataforma \(Android ou iOS\).

O Beagle possui **14** **componentes** atualmente divididos em **5 categorias**:

{% tabs %}
{% tab title="Layout" %}
* \*\*\*\*[**Container**](layout/container.md)\*\*\*\*
* \*\*\*\*[**List View**](layout/listview.md)\*\*\*\*
* \*\*\*\*[**PageView**](layout/pageview.md)\*\*\*\*
* \*\*\*\*[**PageIndicator**](layout/pageindicatorcomponent.md)\*\*\*\*
* \*\*\*\*[**ScrollView**](layout/scrollview.md)\*\*\*\*
{% endtab %}

{% tab title="Formulários" %}
* \*\*\*\*[**Validator**](form/validator.md)\*\*\*\*
* \*\*\*\*[**Simple Form**](form/simple-form-web.md)\*\*\*\*
* \*\*\*\*[**Text Input** ](ui/input.md)\*\*\*\*
{% endtab %}

{% tab title="Lazy" %}

{% endtab %}

{% tab title="UI" %}
* \*\*\*\*[**Button**](ui/button.md)\*\*\*\*
* \*\*\*\*[**Image**](ui/image/)\*\*\*\*
* \*\*\*\*[**Tab Bar**](ui/tab-bar.md)\*\*\*\*
* \*\*\*\*[**Tab View**](ui/tabview.md)\*\*\*\*
* \*\*\*\*[**Text**](ui/text.md)\*\*\*\*
* \*\*\*\*[**Web View**](ui/webview.md)\*\*\*\*
{% endtab %}

{% tab title="Touchable" %}

{% endtab %}
{% endtabs %}

