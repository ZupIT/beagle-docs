---
title: ResetApplication
weight: 100
description: Descrição da ação ResetApplication e seus atributos
---

---

## O que é? <a id="definicao"></a>

Abre uma tela com a rota informada e apaga todas as pilhas de navegação.

A sua estrutura é representada como mostrado abaixo:

| **Atributo** | **Tipo**                                        | Obrigatório | **Definição**      |
| :----------- | :---------------------------------------------- | :---------: | :----------------- |
| route        | ​[Route]({{< ref path="/api/actions/navigate/route/" lang="pt" >}})​ |      ✓      | Rota de navegação. |
| controllerId | String |     | O id do controlador de navegação a ser usado durante a ação de navegação. Se ausente, o controlador de navegação padrão será usado. |

## Como usar?

No exemplo abaixo, foram utilizadas três telas: as duas primeiras utilizam o [**PushView** ]({{< ref path="/api/actions/navigate/pushview" lang="pt" >}})para adicionar as telas na pilha, já a última faz uso do **ResetApplication** e reabre na primeira tela.

Para testar, iremos precisar de três endpoints:

1. O primeiro endpoint será o que seu frontend irá chamar para renderizar a tela zero.
2. O segundo endpoint deverá ser mapeado como **"/firstScreen"**, pois será essa a URL escolhida para a navegação do botão da tela zero e, por isso, esse endpoint deverá retornar a tela 1.
3. O terceiro endpoint deverá ser mapeado como **"/secondScreen"**, pois será essa a URL escolhida

   para a navegação do botão da tela 1 e, por isso, esse endpoint deverá retornar a tela 2. Na tela 2, a rota passada deve ser o endpoint da tela que você deseja retornar quando a aplicação for reiniciada. No caso desse exemplo, é a **"/home"** que é o endpoint da tela zero.

#### Como chamar a tela zero

{{< tabs id="T119" >}}
{{% tab name="JSON" %}}

<!-- json-playground:firstScreenonStack.json
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
          "url" : "secondScreenonStack.json",
          "shouldPrefetch" : false
        }
      } ]
    } ]
  }
}
-->

{{% playground file="firstScreenonStack.json" language="pt" %}}
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
                            url = "secondScreenonStack.json"
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

{{< tabs id="T120" >}}
{{% tab name="JSON" %}}

<!-- json-playground:secondScreenonStack.json
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
          "url" : "resetApplication.json",
          "shouldPrefetch" : false
        }
      } ]
    } ]
  }
}
-->

{{% playground file="secondScreenonStack.json" language="pt" %}}
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
                            url = "resetApplication.json"
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

{{< tabs id="T121" >}}
{{% tab name="JSON" %}}

<!-- json-playground:resetApplication.json
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:container",
    "children" : [ {
      "_beagleComponent_" : "beagle:text",
      "text" : "Third Screen on Stack"
    }, {
      "_beagleComponent_" : "beagle:button",
      "text" : "Click me to go to reset application",
      "onPress" : [ {
        "_beagleAction_" : "beagle:resetApplication",
        "route" : {
          "url" : "firstScreenonStack.json",
          "shouldPrefetch" : false
        }
      } ]
    } ]
  }
}
-->

{{% playground file="resetApplication.json" language="pt" %}}
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
                text = "Click me  to reset application",
                onPress = listOf(
                    Navigate.ResetApplication(
                        route = Route.Remote("firstScreenonStack.json")
                    )
                )
            )
        )
    )
)
```

{{% /tab %}}
{{< /tabs >}}
