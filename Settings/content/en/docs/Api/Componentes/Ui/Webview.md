---
title: Webview
weight: 329
description: Descrição do componente Web View e seus atributos
---

---

## **O que é?**

O componente `Web View` define uma web view nativamente e usa informações server-driven.

A estrutura é representada como mostrado abaixo:

| Atributo | Tipo | Obrigatório | Definição |
| :--- | :--- | :---: | :--- |
| url | String ou [Binding](https://docs.usebeagle.io/api/contexto#bindings) | ✓ | Define a página inicial que o Web View irá carregar. Ele deve ser declarado e não pode ser configurado como valor nulo.  |

{% hint style="warning" %}
**Ao abrir um link não seguro \(http\):** É importante observar que este componente abrirá **SOMENTE** links seguros do tipo **`https`** e NÃO exibirá nenhum link não seguro do tipo **`http`**.
{% endhint %}

## Como usar?

{% tabs %}
{% tab title="JSON" %}
```kotlin
{
    "_beagleComponent_": "beagle:webView",
    "url": "https://maps.google.com/"
}
```
{% endtab %}

{% tab title="Kotlin DSL" %}
```kotlin
WebView(url: "https://docs.usebeagle.io/")
```
{% endtab %}
{% endtabs %}

### 👉 [Teste esse componente no Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/button.json)​
