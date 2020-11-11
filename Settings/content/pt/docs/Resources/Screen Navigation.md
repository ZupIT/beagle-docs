---
title: "Navegação de telas"
description: >
  Nesta seção, você encontra uma demonstração de como o Beagle lida com navegação de tela.
---

---

No Beagle, a navegação \(ou Navigate\) é um tipo de [**Ação**](../api/api-acoes/) ****e que, por isso, pode ser usada por ****todos componentes que recebem uma ação. 

{% hint style="info" %}
Vale lembrar que, antes de configurar a navegação entre telas da sua aplicação, é preciso que você já tenha feito a [**instalação do Beagle**](../get-started/installing-beagle/), as [**configurações de uso**](../get-started/using-beagle/) e testado o framework do Beagle no tutorial para [**exibir uma tela server-driven.**](../tutoriais/exibindo-uma-tela.md) ****
{% endhint %}

Depois de fazer todas as configurações, basta colocar o código dos exemplos como retorno do seu serviço e chamar o endpoint, definido na sua controller, no frontend de sua preferência.

## Rotas de Navegação

Algumas ações de navegação precisam de um parâmetro. É possível receber dois tipos de rota, que são:

* **Local:** navegação interna que já espera pela nova [**tela**](../api/screen/). ****
* **Remote:**  navegação que, a partir de uma URL, aponta para uma API que irá retornar um ou mais componentes do Beagle. 

No exemplo abaixo, você vê um caso onde o `route` é `remote`:

{% tabs %}
{% tab title="JSON" %}
```javascript
{
    "_beagleComponent_": "beagle:button",
    "text": "Click me!",
    "onPress": [
        {
            "_beagleAction_": "beagle:pushStack",
            "route": {
                "url": "/my-next-screen",
                "shouldPrefetch": false
            }
        }
    ]
}
```
{% endtab %}

{% tab title="Kotlin DSL" %}
```kotlin
Button(
   text = "Click me!",
   onPress = listOf(
       Navigate.PushStack(
           route = Route.Remote("/my-next-screen")
       )
   )
)
```
{% endtab %}
{% endtabs %}

![](../.gitbook/assets/navigate-remote.gif)



## Tipos de navegação

Nas páginas a seguir, você confere mais detalhes de cada tipo de navegação do Beagle: 

{% page-ref page="../api/api-acoes/navigate/opennativeroute.md" %}

{% page-ref page="../api/api-acoes/navigate/openexternalurl.md" %}

{% page-ref page="../api/api-acoes/navigate/pushstack.md" %}

{% page-ref page="../api/api-acoes/navigate/pushview.md" %}

{% page-ref page="../api/api-acoes/navigate/popstack.md" %}

{% page-ref page="../api/api-acoes/navigate/popview.md" %}

{% page-ref page="../api/api-acoes/navigate/poptoview.md" %}

{% page-ref page="../api/api-acoes/navigate/resetapplication.md" %}

{% page-ref page="../api/api-acoes/navigate/resetstack.md" %}
