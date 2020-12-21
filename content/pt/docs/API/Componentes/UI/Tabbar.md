---
title: Tabbar
weight: 321
description: >-
  Nesta seção, você encontra uma descrição do componente Tab Bar e seus
  atributos
---

---

## O que é o Tab Bar?

O componente **Tab Bar** é responsável por definir uma tabela que permite a navegação entre views. Ele exibe tabs correspondentes a diferentes visualizações que podem ser acessadas por meio dela.

A estrutura é representada como mostrado abaixo: 

| **Atributo** | **Tipo** | Obrigatório | **Definição** |
| :--- | :--- | :---: | :--- |
| items | TabBarItem | ✓ | Recebe uma lista de `TabBarItems` que vão definir as `Tabs` na `tabBar` |
| styleId | String |   | Id do estilo a ser aplicado na `TabBar` |
| currentTab | Bind&lt;Int&gt; |   | Número que representa a Tab selecionada.  |
| onTabSelection | List&lt;Action&gt; |   | Lista de ações que são executadas quando um `TabBarItem` é selecionado. Pode ser utilizado para carregar views de acordo com o TabItem selecionado.  |

## O que é o TabBar**Item?**

Componente corresponde a itens do Tab View e possui a seguinte estrutura: 

| **Atributo** | **Tipo** | Obrigatório | **Definição** |
| :--- | :--- | :---: | :--- |
| title | String |   | Exibe o texto no item do `Tab View`. Se ele não for declarado ou se for configurado com o valor nulo, não irá aparecer na tela.  |
| icon | Path |   | Exibe uma imagem local como ícone no item do `Tab View`. Se ele não for declarado ou for configurado com o valor nulo, não irá aparecer na tela.  |

{{% alert color="warning" %}}
Se o título e ícone não forem declarados no `Tab Item`, o espaço vazio permanecerá. Caso você precise de uma navegação entre visualizadores sem a interface Tab, o recomendado é que você utilize os componentes de navegação. 
{{% /alert %}}

## Como usar?

No exemplo a seguir, são utilizados outros componentes para explicar o TabBar: o [**PageView**](../../layout/pageview) e o [**Contexto**](../../../contexto/). 

O **Page View** é utilizado para renderizar as páginas que se quer exibir de acordo com cada aba, ou seja, ele vai criar a visualização de cada uma delas. É nele que você vai definir os componentes que quer exibir ao clicar em cada aba. 

Os componentes serão renderizados de acordo com a sua posição na lista. Isso significa que, se em nossa lista temos 2 componentes de texto - o TAB 1 e TAB 2 -, o primeiro tem posição ZERO = 0, enquanto que o segundo tem posição UM = 1. O atributo **currentTab** é quem define qual componente é exibido de acordo com o valor definido nele.

Já o **Contexto** é utilizado para guardar o indicador \(posição\) da aba selecionada  e informá-lo ao PageView, que coordena qual elemento irá apresentar. 

### Exemplo

{{< tabs name="T138" >}}
{{% tab name="JSON" %}}
```kotlin
{
    "_beagleComponent_": "beagle:screenComponent",
    "child": {
        "_beagleComponent_": "beagle:container",
        "children": [
            {
                "_beagleComponent_": "beagle:tabBar",
                "items": [
                    {"title": "Tab 1"},
                    {"title": "Tab 2"}
                ],
                "styleId": "TabBarStyle",
                "onTabSelection": [
                    {
                        "_beagleAction_": "beagle:setContext",
                        "contextId": "contestTabId",
                        "value": "@{onTabSelection}"
                    }
                ]
            },
            {
                "_beagleComponent_": "beagle:pageView",
                "children": [
                    {
                        "_beagleComponent_": "beagle:text",
                        "text": "Tab 1"
                    },
                    {
                        "_beagleComponent_": "beagle:text",
                        "text": "Tab 2"
                    }
                ],
                "currentPage": "@{contestTabid}"
            }
        ],
        "context": {
            "id": "contestTabid",
            "value": 0
        }
    }
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Screen(
    child = Container(
        context = ContextData("contestTabid", 0),
        children = listOf(
            TabBar(
                onTabSelection = listOf(
                    SetContext(
                        "contestTabId",
                        "@{onTabSelection}"
                    )
                ),
                items = listOf(
                    TabBarItem("Tab 1"),
                    TabBarItem("Tab 2")
                ),
                styleId = "TabBarStyle"
            ),
            PageView(
                currentPage = expressionOf("@{contestTabid}"),
                children = listOf(
                    Text(
                        "Tab 1"
                    ),
                    Text(
                        "Tab 2"
                    )
                )
            )
        )
    )
)
```
{{% /tab %}}
{{< /tabs >}}

| Tab Bar |
| :---: |
| ![](/beagle-tab-view.gif) |

### 👉 [Teste esse componente no Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/tabview.json)

{{% alert color="warning" %}}
Este exemplo não existe no playground, mas você pode copiar e colar o código JSON acima e testa-lo no playground. Esta secção contem mais informações sobre esse exemplo abaixo.
{{% /alert %}}
