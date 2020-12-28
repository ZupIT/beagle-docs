---
title: Navigation Bar
weight: 385
description: Navigation Bar e descrição de seus componentes
---

---

## **O que é a NavigationBar?**

Classe que define a barra superior com função de navegação. É composta pelos seguintes atributos:

| **Atributo** | **Tipo** | Obrigatório | Definição |
| :--- | :--- | :---: | :--- |
| title | String | ✓ | Título para a barra de ações/navegação. |
| showBackButton | Boolean |   | Habilita o botão de voltar na barra de ações/ navegação. Default é `true`. |
| styleId | String |   | Permite a customização local da barra de ações/navegação. |
| navigationBarItems | List&lt;NavigationBarItem&gt; |   | Define uma lista de itens da barra de ação/navegação. |
| backButtonAccessibility | [**Accessibility**](/pt/docs/api/acessibilidade) |   | Informações de acessibilidade do backButton. |

## O que é a NavigationBarItem?

Classe que define o item da `NavigationBar` que é composto por: 

| **Atributo** | **Tipo** | Obrigatório | Definição |
| :--- | :--- | :---: | :--- |
| text | String | ✓ | Título do item da barra. |
| image | [**Image**](/pt/docs/api/componentes/ui/image/) |   | Imagem do item da barra. |
| action | [**Action**](/pt/docs/api/ações) | ✓ | Ação que deve ser realizada ao clicar no item da barra de navegação. |
| accessibility | [**Accessibility**](/pt/docs/api/acessibilidade) |   | Opções de acessibilidade para o navigation item. |
| id | String |   | Identificador do componente. |

## **Como usar?**

Para usar uma `NavigationBar` é necessário declarar dentro de uma `Screen`. Segue um exemplo abaixo: 

{{< tabs id="T175" >}}
{{% tab name="JSON" %}}
```kotlin
{
   "_beagleComponent_":"beagle:screenComponent",
   "navigationBar":{
      "title":"Beagle Screen",
      "showBackButton":true,
      "navigationBarItems":[
         {
            "_beagleComponent_":"beagle:navigationBarItem",
            "text":"",
            "image":{
               "_beagleImagePath_":"local",
               "mobileId":"informationImage"
            },
            "action":{
               "_beagleAction_":"beagle:alert",
               "title":"Screen",
               "message":"Some message",
               "labelOk":"OK"
            }
         }
      ]
   },
   "child":{
      "_beagleComponent_":"beagle:container",
      "children":[
         {
            "_beagleComponent_":"beagle:text",
            "text":"Some text"
         }
      ]
   }
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```
 Screen(
        navigationBar = NavigationBar(
            title = "Beagle Screen",
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
