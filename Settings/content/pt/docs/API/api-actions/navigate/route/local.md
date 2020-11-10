---
title: "Local"
linkTitle: "Local"
description: >
Nesta seção, você encontra a definição do atributo Local da classe Route e seus
  atributos.
---

## O que é? <a id="definicao"></a>

Rota de navegação para conteúdo local.

A sua estrutura é representada como mostrado abaixo:

| **Atributo** | **Tipo** | Obrigatório | **Definição** |
| :--- | :--- | :---: | :--- |
| screen | [Screen](../../../screen/) | ✓  | Tela a ser carregada |

## Como usar?

{% tabs %}
{% tab title="JSON" %}
```javascript
{
  "_beagleComponent_": "beagle:button",
  "text": "Click me!",
  "onPress": [
    {
      "_beagleAction_": "beagle:pushView",
      "route": {
        "screen": {
          "_beagleComponent_": "beagle:screenComponent",
          "child": {
            "_beagleComponent_": "beagle:text",
            "text": "Hello Screen from Navigate"
          }
        }
      }
    }
  ]
}
```
{% endtab %}

{% tab title="Kotlin DSL" %}
```
Button(
    onPress = listOf(
         Navigate.PushView(
            Route.Local(
                Screen(
                    child = Text("Hello Screen from Navigate")
                )
            )
     )),
    text = "Click me!"
)
```
{% endtab %}
{% endtabs %}

### 👉 [Teste essa ação no Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/button.json)

