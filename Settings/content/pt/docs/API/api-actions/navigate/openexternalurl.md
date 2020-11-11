---
title: "OpenExternalURL"
description: >
  Nesta seção, você encontra a definição da ação OpenExternalURL e seus
  atributos.
---
---
## O que é?

Abre o navegador selecionado pelo usuário com a url informada.

A sua estrutura é representada como mostrado abaixo: 

| **Atributo** | **Tipo** | Obrigatório | **Definição** |
| :--- | :--- | :---: | :--- |
| url | String | ✓ | URL enviada para o navegador. |

## Como usar?

No exemplo abaixo, você pode ver um botão que, ao ser clicado, abre o navegador com a URL especificada. Para testar, basta que um endpoint do seu BFF retorne a tela do código abaixo e chame esse endpoint no frontend.

{% tabs %}
{% tab title="JSON" %}
```javascript
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:button",
    "text" : "Click me!",
    "onPress" : [ {
      "_beagleAction_" : "beagle:openExternalURL",
      "url" : "https://docs.usebeagle.io/api/api-acoes/navigate/openexternalurl"
    } ]
  }
}
```
{% endtab %}

{% tab title="Kotlin DSL" %}
```
Screen(
    child = Button(
        text = "Click me!",
        onPress = listOf(
            Navigate.OpenExternalURL(
                url = "https://docs.usebeagle.io/api/api-acoes/navigate/openexternalurl"
            )
        )
    )
)
```
{% endtab %}
{% endtabs %}

### 👉 [Teste esse exemplo no Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/button.json)

