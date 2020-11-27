---
title: Poptoview
weight: 285
description: Descrição da ação PopToView e seus atributos
---

---

## O que é? <a id="definicao"></a>

Retorna para uma tela específica e limpa a navegação que foi gerada a partir dessa tela. 

A sua estrutura é representada como mostrado abaixo:

| **Atributo** | **Tipo** | Obrigatório | **Definição** |
| :--- | :--- | :---: | :--- |
| route | ​String | ✓ | Rota de alguma tela que está na pilha. |

## Como usar?

No exemplo abaixo, foram utilizadas três tela: as duas primeiras utilizam o PushView para adicionar as telas na pilha, já a última faz uso do **PopToView** para retornar para a primeira. 

Para testar, iremos precisar de três endpoints: 

1. O primeiro endpoint será o que seu frontend irá chamar para renderizar a tela zero.  
2. O segundo endpoint deverá ser mapeado como **"/firstScreen",** pois essa será URL escolhida para a navegação do botão da tela 0 e, por isso, esse endpoint deverá retornar a tela 1.  
3. O terceiro endpoint deverá ser mapeado como **"/secondScreen"**, pois essa será a URL escolhida para a navegação do botão da tela 1 e, por isso, esse endpoint deverá retornar a tela 2. É pela tela 2 que passa a rota na qual deve ser o endpoint da tela que você deseja retornar. No caso desse exemplo, é a **"/home"** que é o endpoint da tela zero.

#### Como chamar pela tela zero

{% tabs %}
{% tab title="JSON" %}
```javascript
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:container",
    "children" : [ {
      "_beagleComponent_" : "beagle:text",
      "text" : "First Screen on Stack"
    }, {
      "_beagleComponent_" : "beagle:button",
      "text" : "Click me!",
      "onPress" : [ {
        "_beagleAction_" : "beagle:pushView",
        "route" : {
          "url" : "/firstScreen",
          "shouldPrefetch" : false
        }
      } ]
    } ]
  }
}
```
{% endtab %}

{% tab title="KotlinDSL" %}
```kotlin
Screen(
    child = Container(
        children = listOf(
            Text(
                "First Screen on Stack"
            ),
            Button(
                text = "Click me!",
                onPress = listOf(
                    Navigate.PushView(
                        Route.Remote(
                            url = "/firstScreen"
                        )
                    )
                )
            )
        )
    )
)
```
{% endtab %}
{% endtabs %}

#### Como chamar a Tela 1

{% tabs %}
{% tab title="JSON" %}
```javascript
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:container",
    "children" : [ {
      "_beagleComponent_" : "beagle:text",
      "text" : "Second Screen on Stack"
    }, {
      "_beagleComponent_" : "beagle:button",
      "text" : "Click me!",
      "onPress" : [ {
        "_beagleAction_" : "beagle:pushView",
        "route" : {
          "url" : "/secondScreen",
          "shouldPrefetch" : false
        }
      } ]
    } ]
  }
}
```
{% endtab %}

{% tab title="KotlinDSL" %}
```kotlin
Screen(
    child = Container(
        children = listOf(
            Text(
                "Second Screen on Stack"
            ),
            Button(
                text = "Click me!",
                onPress = listOf(
                    Navigate.PushView(
                        Route.Remote(
                            url = "/secondScreen"
                        )
                    )
                )
            )
        )
    )
)
```
{% endtab %}
{% endtabs %}

#### Como chamar a Tela 2

{% tabs %}
{% tab title="JSON" %}
```javascript
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:container",
    "children" : [ {
      "_beagleComponent_" : "beagle:text",
      "text" : "Third Screen on Stack"
    }, {
      "_beagleComponent_" : "beagle:button",
      "text" : "Click me to go to first screen",
      "onPress" : [ {
        "_beagleAction_" : "beagle:popToView",
        "route" : "/home"
      } ]
    } ]
  }
}
```
{% endtab %}
{% endtabs %}

### 👉 [Teste esse exemplo no Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/button.json)
