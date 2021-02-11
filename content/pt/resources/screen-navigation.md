---
title: Navegação de telas
weight: 213
description: >-
  Nesta seção, você encontra uma demonstração de como o Beagle lida com
  navegação de tela.
---

---

No Beagle, a navegação \(ou Navigate\) é um tipo de [**Ação**]({{< ref path="/api/actions" lang="pt" >}}) e que, por isso, pode ser usada por todos componentes que recebem uma ação.

{{% alert color="info" %}}
Vale lembrar que, antes de configurar a navegação entre telas da sua aplicação, é preciso que você já tenha feito a [**instalação do Beagle**]({{< ref path="/get-started/installing-beagle/" lang="pt" >}}), as [**configurações de uso**]({{< ref path="/get-started/using-beagle/" lang="pt" >}}) e testado o framework do Beagle no tutorial para [**exibir uma tela server-driven.**]({{< ref path="/tutorials/how-to-display-a-screen" lang="pt" >}})
{{% /alert %}}

Depois de fazer todas as configurações, basta colocar o código dos exemplos como retorno do seu serviço e chamar o endpoint, definido na sua controller, no frontend de sua preferência.

## Rotas de Navegação

Algumas ações de navegação precisam de um parâmetro. É possível receber dois tipos de rota, que são:

- **Local:** navegação interna que já espera pela nova [**tela**]({{< ref path="/api/screen/" lang="pt" >}}).
- **Remote:** navegação que, a partir de uma URL, aponta para uma API que irá retornar um ou mais componentes do Beagle.

No exemplo abaixo, você vê um caso onde o `route` é `remote`:

{{< tabs id="T89" >}}
{{% tab name="JSON" %}}

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

{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

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

{{% /tab %}}
{{< /tabs >}}

![](/navigate-remote.gif)

## Tipos de navegação

Nas páginas a seguir, você confere mais detalhes de cada tipo de navegação do Beagle:

[**OpenNativeRoute**]({{< ref path="/api/actions/navigate/opennativeroute" lang="pt" >}})

[**OpenExternalURL**]({{< ref path="/api/actions/navigate/openexternalurl" lang="pt" >}})

[**PushStack**]({{< ref path="/api/actions/navigate/pushstack" lang="pt" >}})

[**PushView**]({{< ref path="/api/actions/navigate/pushview" lang="pt" >}})

[**PopStack**]({{< ref path="/api/actions/navigate/popstack" lang="pt" >}})

[**PopView**]({{< ref path="/api/actions/navigate/popview" lang="pt" >}})

[**PopToView**]({{< ref path="/api/actions/navigate/poptoview" lang="pt" >}})

[**ResetApplication**]({{< ref path="/api/actions/navigate/resetapplication" lang="pt" >}})

[**ResetStack**]({{< ref path="/api/actions/navigate/resetstack" lang="pt" >}})
