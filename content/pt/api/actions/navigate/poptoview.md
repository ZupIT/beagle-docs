---
title: PopToView
weight: 70
description: Descrição da ação PopToView e seus atributos
---

---

## O que é? <a id="definicao"></a>

Retorna para uma tela específica e limpa a navegação que foi gerada a partir dessa tela. 

A sua estrutura é representada como mostrado abaixo:

| **Atributo** | **Tipo** | Obrigatório | **Definição** |
| :--- | :--- | :---: | :--- |
| route | ​String | ✓ | Rota de alguma tela que está na pilha. |
| navigationContext | ​[NavigationContext]({{< ref path="/api/actions/navigate/navigationcontext" lang="pt" >}})​ | | Contexto salvo na tela destino. |

## Como usar?

No exemplo abaixo, foram utilizadas três tela: as duas primeiras utilizam o PushView para adicionar as telas na pilha, já a última faz uso do **PopToView** para retornar para a primeira. 

Para testar, iremos precisar de três endpoints: 

1. O primeiro endpoint será o que seu frontend irá chamar para renderizar a tela zero.  
2. O segundo endpoint deverá ser mapeado como **"/firstScreen",** pois essa será URL escolhida para a navegação do botão da tela 0 e, por isso, esse endpoint deverá retornar a tela 1.  
3. O terceiro endpoint deverá ser mapeado como **"/secondScreen"**, pois essa será a URL escolhida para a navegação do botão da tela 1 e, por isso, esse endpoint deverá retornar a tela 2. É pela tela 2 que passa a rota na qual deve ser o endpoint da tela que você deseja retornar. No caso desse exemplo, é a **"/home"** que é o endpoint da tela zero.

#### Como chamar pela tela zero

{{< tabs id="T116" >}}
{{% tab name="JSON" %}}
<!-- json-playground:firstScreenNavigate.json
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
          "url" : "secondScreenNavigate.json",
          "shouldPrefetch" : false
        }
      } ]
    } ]
  }
}
-->
{{% playground file="firstScreenNavigate.json" language="pt" %}}
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
                            url = "secondScreenNavigate.json"
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

{{< tabs id="T117" >}}
{{% tab name="JSON" %}}
<!-- json-playground:secondScreenNavigate.json
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
          "url" : "popToView.json",
          "shouldPrefetch" : false
        }
      } ]
    } ]
  }
}
-->
{{% playground file="secondScreenNavigate.json" language="pt" %}}
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
                            url = "popToView.json"
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

{{< tabs id="T118" >}}
{{% tab name="JSON" %}}
<!-- json-playground:popToView.json
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
        "route" : "firstScreenNavigate.json"
      } ]
    } ]
  }
}
-->
{{% playground file="popToView.json" language="pt" %}}
{{% /tab %}}
{{% tab name="KotlinDSL" %}}
```kotlin
Screen(
    child = Container(
        children = listOf(
            Text(
                "Third Screen on Stack"
            ),
            Button(
                text = "Click me to go to first screen",
                onPress = listOf(
                    Navigate.PopToView(
                      route = "firstScreenNavigate.json"
                    )
                )
            )
        )
    )
)
```
{{% /tab %}}
{{< /tabs >}}
