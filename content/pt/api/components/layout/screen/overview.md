---
title: Visão Geral
weight: 10
type: overview
description: Descrição dos componentes de Screen e seus atributos.
---

---

## O que é?

A sua tela possui atributos e componentes que podem ser usados e configurados. Na tabela abaixo, listamos as principais características para cada um destes atributos.

| **Atributo**           | **Tipo**                                                     | Obrigatório | **Definição**                                                                                                |
| :--------------------- | :----------------------------------------------------------- | :---------: | :----------------------------------------------------------------------------------------------------------- |
| identifier             | String                                                       |             | Atributo que identifica a tela globalmente na sua aplicação, de modo que seja possível atribuir ações a ela. |
| safe area              | [**Safe Area**]({{< ref path="/api/components/layout/screen/safe-area" lang="pt" >}})               |             | Especifica o posicionamento dos componentes na tela.                                                         |
| navigation bar         | [**Navigation Bar**]({{< ref path="/api/components/layout/screen/navigation-bar" lang="pt" >}})     |             | Permite configurar a barra de ações/navegação na tela.                                                       |
| child                  | [**Server Driven Component**]({{< ref path="/api/components/" lang="pt" >}})      |      ✓      | Define os elementos na tela. Pode ser qualquer componente visual que estenda de `ServerDrivenComponent`.     |
| style                  | [**Style**]({{< ref path="/api/components/widget#atributos-do-style" lang="pt" >}})          |             | Fornece opções de customização visual para a `Screen.`                                                       |
| screen analytics event | [**Screen Event**]({{< ref path="/api/analytics#opção-screenview" lang="pt" >}}) |             | Configura elementos de análise\(Analytics\) na sua tela.                                                     |
| context                | [**ContextData**]({{< ref path="/api/context/" lang="pt" >}})                     |             | Contexto da tela.                                                                                            |

## Como usar?

{{< tabs id="T174" >}}
{{% tab name="JSON" %}}

<!-- json-playground:screen.json
{
  "_beagleComponent_" : "beagle:screenComponent",
  "navigationBar" : {
    "title" : "Beagle Screen",
    "showBackButton" : true,
    "navigationBarItems" : [ {
      "_beagleComponent_" : "beagle:navigationBarItem",
      "text" : "",
      "image" : {
        "_beagleImagePath_" : "local",
        "mobileId" : "informationImage"
      },
      "onPress" : [{
        "_beagleAction_" : "beagle:alert",
        "title" : "Screen",
        "message" : "Some message",
        "labelOk" : "OK"
      }]
    } ]
  },
  "child" : {
    "_beagleComponent_" : "beagle:container",
    "children" : [ {
      "_beagleComponent_" : "beagle:text",
      "text" : "Some text"
    } ]
  }
}
-->

{{% playground file="screen.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Screen(
        navigationBar = NavigationBar(
            title = "Beagle Screen",
            showBackButton = true,
            navigationBarItems = listOf(
                NavigationBarItem(
                    text = "",
                    image = Local.justMobile("informationImage"),
                    onPress = listOf(Alert(
                        title = "Screen",
                        message = "Some message",
                        labelOk = "OK"
                    ))
                )
            )
        ),
        child = Container(
            children = listOf(
                Text("Some text")
            )
        )
    )
```

{{% /tab %}}
{{< /tabs >}}
