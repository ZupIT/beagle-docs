---
title: Resetstack
weight: 289
description: Descrição da ação ResetStack e seus atributos
---

---

## O que é? <a id="definicao"></a>

Abre uma tela com a rota informada de um novo fluxo e limpa a pilha de telas carregadas anteriormente.

A sua estrutura é representada como mostrado abaixo:

| **Atributo** | **Tipo** | Obrigatório | **Definição** |
| :--- | :--- | :---: | :--- |
| route | ​[Route](https://app.gitbook.com/@zup-products/s/beagle/~/drafts/-MBdG3IHjLPbo5GoxgEz/api/api-acoes/navigate/route)​ | ✓ | Rota de navegação. |

## Como usar?

No exemplo abaixo, foram utilizadas três telas: as duas primeiras utilizam o PushView para adicionar as telas na pilha, já a última faz uso do ResetStack e reabre na primeira tela.

Para testar, iremos precisar de três endpoints: 

1. O primeiro endpoint será o que seu frontend irá chamar para renderizar a tela zero.  
2. O segundo endpoint deverá ser mapeado como **"/firstScreen"**, pois será essa a URL escolhida para a navegação do botão da tela zero e, por isso, esse endpoint deverá retornar a tela 1.  
3. O terceiro endpoint deverá ser mapeado como **"/secondScreen"**, pois será essa a URL escolhida

    para a navegação do botão da tela 1 e, por isso, esse endpoint deverá retornar a tela 2. Na tela 2, a rota passada deve ser o endpoint da tela que você deseja retornar quando a aplicação for reiniciada. No caso desse exemplo, é a **"/home"** que é o endpoint da tela zero.

#### Como chamar a tela zero

{{< tabs name="T132" >}}
{{% tab name="JSON" %}}
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
{{% /tab %}}

{{% tab name="KotlinDSL" %}}
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
{{% /tab %}}
{{< /tabs >}}

#### Como chamar a Tela 1

{{< tabs name="T132" >}}
{{% tab name="JSON" %}}
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
{{% /tab %}}

{{% tab name="KotlinDSL" %}}
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
{{% /tab %}}
{{< /tabs >}}

#### Como chamar a Tela 2

{{< tabs name="T132" >}}
{{% tab name="JSON" %}}
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
      "text" : "Click me to go to reset stack",
      "onPress" : [ {
        "_beagleAction_" : "beagle:resetStack",
        "route" : {
          "url" : "/home",
          "shouldPrefetch" : false
        }
      } ]
    } ]
  }
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Screen(
    child = Container(
        children = listOf(
            Text(
                "Third Screen on Stack"
            ),
            Button(
                text = "Click me  to reset stack",
                onPress = listOf(
                    Navigate.ResetStack(
                        route = Route.Remote("/home")
                    )
                )
            )
        )
    )
)
```
{{% /tab %}}
{{< /tabs >}}

### 👉 [Teste esse exemplo no Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/button.json)
