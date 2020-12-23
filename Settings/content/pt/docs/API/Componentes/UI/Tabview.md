---
title: Tabview
weight: 323
description: >-
  Nesta seção, você encontra uma descrição do componente Tab View e seus
  atributos. Este componente foi depreciado
---

---

{{% alert color="danger" %}}
Este componente foi depreciado na versão 1.1.0 do Beagle e será removido em uma versão futura. Utilize o componente [TabBar](tab-bar) no lugar do Tab View
{{% /alert %}}

## O que é Tab View?

O componente **Tab View** é responsável pela navegação entre views. Ele exibe tabs correspondentes a diferentes visualizações que podem ser acessadas por meio dela.

A estrutura é representada como mostrado abaixo: 

| **Atributo** | **Tipo** | Obrigatório | **Definição** |
| :--- | :--- | :---: | :--- |
| children | List&lt;[TabItem](tabview#definicao-tabitem)&gt; | ✓ | Uma lista de tab itens disponíveis no componente `Tab View`. O `Tab Item` em si não é um `widget`, mas seu conteúdo é um componente server driven recebido por meio do Beagle.  |
| styleId | String |    | Recebe uma chave que é registrada no Design System de cada plataforma para fazer customização no componente. |
| context | ContextData |  | Adiciona um contexto para o `Tab View`. |

## O que é Tab **Item?**

Componente corresponde a itens do Tab View e possui a seguinte estrutura: 

| **Atributo** | **Tipo** | Obrigatório | **Definição** |
| :--- | :--- | :---: | :--- |
| title | String |   | Exibe o texto no item do `Tab View`. Se ele não for declarado ou se for configurado com o valor nulo, não irá aparecer na tela.  |
| icon | Path |   | Exibe uma imagem local como ícone no item do `Tab View`. Se ele não for declarado ou for configurado com o valor nulo, não irá aparecer na tela.  |
| child | Component | ✓ | **Obrigatório.** Define qual `view` será inflada no `Tab Item` de acordo com o `tab` clicado. Qualquer componente server-driven pode pode ser um item em uma `Tab View`. |

{{% alert color="warning" %}}
Se o título e ícone não forem declarados no `Tab Item`, o espaço vazio permanecerá. Caso você precise de uma navegação entre visualizadores sem a interface Tab, o recomendado é que você utilize os componentes de navegação. 
{{% /alert %}}

## Como usar?

{{< tabs id="T139" >}}
{{% tab name="JSON" %}}
<!-- json-playground:tabview.json
{
   "_beagleComponent_":"beagle:screenComponent",
   "child":{
      "_beagleComponent_":"beagle:tabView",
      "children":[
         {
            "title":"Tab 1",
            "child":{
               "_beagleComponent_":"beagle:text",
               "text":"First Tab Content",
               "style":{
                  "flex":{
                     "grow":1
                  }
               }
            }
         },
         {
            "title":"Tab 2",
            "child":{
               "_beagleComponent_":"beagle:text",
               "text":"Second Tab Content",
               "style":{
                  "flex":{
                     "grow":1
                  }
               }
            }
         }
      ]
   }
}
-->
{{% playground file="tabview.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Screen(
  child = Container(
      children = listOf(
          TabView(children =
              listOf(
                  TabItem("Tab 1",
                      Text("First Tab Content").applyFlex(flex = Flex(grow = 1.0))
                  ),
                  TabItem("Tab 2",
                      Text("Second Tab Content").applyFlex(flex = Flex(grow = 1.0))
                  )
              )
              )
          )
      )
  )
```
{{% /tab %}}
{{< /tabs >}}

| Tab View tela inteira | Tab View dividindo tela |
| :---: | :---: |
| ![](/beagle-tab-view.gif) | ![](/beagle-tab-view-meia-tela.gif) |
