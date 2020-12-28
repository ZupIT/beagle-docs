---
title: Screen
weight: 383
description: Descrição dos componentes de Screen e seus atributos.
---

---

## O que é?

A sua tela possui atributos e componentes que podem ser usados e configurados. Na tabela abaixo, listamos as principais características para cada um destes atributos. 

| **Atributo** | **Tipo** | Obrigatório | **Definição** |
| :--- | :--- | :---: | :--- |
| identifier | String |   | Atributo que identifica a tela globalmente na sua aplicação, de modo que seja possível atribuir ações a ela. |
| safe area | [**Safe Area**](/pt/docs/api/screen/safe-area) |   | Especifica o posicionamento dos componentes na tela. |
| navigation bar | [**Navigation Bar**](/pt/docs/api/screen/navigation-bar) |   | Permite configurar a barra de ações/navegação na tela. |
| child | [**Server Driven Component**](/pt/docs/api/componentes/) | ✓ | Define os elementos na tela. Pode ser qualquer componente visual que estenda de `ServerDrivenComponent`. |
| style | [**Style**](/pt/docs/api/widget#atributos-do-style) |   | Fornece opções de customização visual para a `Screen.` |
| screen analytics event | [**Screen Event**](/pt/docs/api/analytics/#opção-screenview) |   | Configura elementos de análise\(Analytics\) na sua tela. |
| context | [**ContextData**](/pt/docs/api/contexto/) |   | Contexto da tela. |

## Como usar?

{{< tabs id="T174" >}}
{{% tab name="JSON" %}}
```javascript
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
      "action" : {
        "_beagleAction_" : "beagle:alert",
        "title" : "Screen",
        "message" : "Some message",
        "labelOk" : "OK"
      }
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
```
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
                    action = Alert(
                        title = "Screen",
                        message = "Some message",
                        labelOk = "OK"
                    )
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

### 👉 [Teste esse exemplo no Playground](https://beagle-playground.netlify.app/)
