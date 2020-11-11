---
title: "OpenNativeRoute"
description: >
  Nesta seção, você encontra a descrição da ação OpenNativeRoute e seus atributos
---

## O que é?

O **OpenNativeRoute** é uma ação que realiza a navegação para uma tela nativa. 

A sua estrutura é representada como mostrado abaixo: 

| **Atributo** | **Tipo** | Obrigatório | **Definição** |
| :--- | :--- | :---: | :--- |
| route | String | ✓ | Identificador para abrir uma tela nova. |
| shouldResetApplication | Boolean |   | Reinicia a pilha de visualização do aplicativo. |
| Data | Map &lt;String, String&gt; |   | Envia informações para a nova tela. |

## Como usar?

No exemplo abaixo, temos uma tela vinda do BFF com um botão que ao clicar nele, abre uma tela nativa. 

Para testar, é preciso configurar o [**Deep Link Handler**](https://docs.usebeagle.io/customizacao/beagle-para-android/deep-link-handler) ****para Android  ou o **openNativeRoute,** no caso de aplicação iOS. Além disso, seu endpoint do BFF precisa retornar a tela do código abaixo e chamar esse endpoint no Frontend.

{% tabs %}
{% tab title="JSON" %}
```javascript
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:button",
    "text" : "Click me!",
    "onPress" : [ {
      "_beagleAction_" : "beagle:openNativeRoute",
      "route" : "my-native",
      "shouldResetApplication" : false
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
            Navigate.OpenNativeRoute(
                route = "my-native"
            )
        )
    )
)
```
{% endtab %}
{% endtabs %}

### 👉 [Teste esse exemplo no Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/button.json)

