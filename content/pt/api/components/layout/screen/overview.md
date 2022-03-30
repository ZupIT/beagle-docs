---
title: Visão Geral
weight: 10
type: overview
description: Descrição dos componentes de Screen e seus atributos.
---

---

## O que é isso?

O componete Screen é um elemento do Beagle que permite ao usuário definir a estrutura de visualização de uma tela. Nesse componente definimos configurações como o uso de *`safe areas`* ou a exibição de uma barra de ferramentas/barra de navegação.

Todas essas funcionalidades são definidas a partir de atributos, que listamos na tabela abaixo, definindo as principais características de uma tela (Screen component).

| **Atributo**  | **Tipo** | Obrigatório | **Definição** |
| :------------ | :------- | :---------: | :------------ |
| id            | String | | Atributo que identifica uma tela em uma aplicação |
| safeArea      | [**Safe Area**]({{< ref path="/api/components/layout/screen/safe-area" lang="en" >}}) | | Ative Áreas seguras para ajudar a colocar visualizações na parte visível da interface geral. Por padrão, não está habilitado e não restringirá a consideração de nenhuma área segura. |
| navigationBar | [**Navigation Bar**]({{< ref path="/api/components/layout/screen/navigation-bar" lang="en" >}}) | | Permite que alguns detalhes da Barra de Navegação sejam definidos, como Botão Voltar e Itens da Barra de Navegação |
| child         | [**Server-Driven Component**]({{< ref path="/api/components/" lang="en" >}}) | ✓ | Recebe uma lista de componentes do Beagle. |
| style         | [**Style**]({{< ref path="/api/components/widget#style-attributes" lang="en" >}}) | | Fornecer opções de personalização visual para a `tela` |
| context       | [**ContextData**]({{< ref path="/api/context/" lang="en" >}}) | | Cria um *Dados de Contexto* para uma Tela. |

## Como usá-la?

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
      "image" : "informationImage",
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
                    image = "informationImage",
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
