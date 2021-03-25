---
title: Pageview
weight: 342
description: Descrição do componente Page View e seus atributos
---

---

## O que é?

O componente `PageView` é um container especializado em apresentar páginas que são exibidas na horizontal e podem conter um indicador de páginas. Essas páginas podem ser qualquer objeto server-driven.

{{% alert color="info" %}}
O Page View se refere ao seu tamanho quando visualizado em dispositivos Mobile \(Android e iOS\). O **tamanho** dele é determinado pelo elemento pai em que está contido, ou seja, a largura \(width\) e a altura \(height\) será definida pelo componente pai.

Por exemplo, um `PageView` pode ser declarado dentro de um [**Container**]({{< ref path="/api/components/layout/container" lang="pt" >}}) e sua largura e altura são responsáveis por determinar o tamanho do Page View.
{{% /alert %}}

A sua estrutura é representada como mostrado abaixo:

<table>
  <thead>
    <tr>
      <th style="text-align:left">Atributo</th>
      <th style="text-align:left">Tipo</th>
      <th style="text-align:center">Obrigat&#xF3;rio</th>
      <th style="text-align:left">Defini&#xE7;&#xE3;o</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">children</td>
      <td style="text-align:left">List&lt;<a href="../"><strong>ServerDrivenComponent</strong></a>&gt;</td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">
         Define a lista de componentes visuais (server-driven) contidos na<code>PageView<
      </td>
    </tr>
    <tr>
      <td style="text-align:left">context</td>
      <td style="text-align:left"><a href="../../contexto/"><strong>ContextData</strong></a></td>
      <td
      style="text-align:center"></td>
        <td style="text-align:left"><strong>&#xC9;</strong>o <a href="../../contexto/"><strong>contexto</strong></a> contido neste
          Widget</td>
    </tr>
    <tr>
      <td style="text-align:left">onPageChange</td>
      <td style="text-align:left">List&lt;Action&gt;</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Lista de a&#xE7;&#xE3;o que &#xE9; executada quando a pagina selecionada
        &#xE9; alterada</td>
    </tr>
    <tr>
      <td style="text-align:left">currentPage</td>
      <td style="text-align:left">Int</td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Identificador de qual pagina est&#xE1; selecionada</td>
    </tr>
    <tr>
      <td style="text-align:left">showArrow</td>
      <td style="text-align:left">Boolean</td>
      <td style="text-align:center"></td>
      <td style="text-align:left"><strong>Esse atributo &#xE9; especifico para plataforma web</strong>. Ele habilita
        setas para mudan&#xE7;a de p&#xE1;gina.</td>
    </tr>
  </tbody>
</table>

## Como usar?

No exemplo abaixo segue um PageView contendo três páginas onde cada uma delas tem um Text que é definido por Contexto. Toda vez que há mudança de página o contexto é redefinido.

{{< tabs id="T148" >}}
{{% tab name="JSON" %}}

<!-- json-playground:pageView.json
{
    "_beagleComponent_" : "beagle:screenComponent",
    "navigationBar" : {
      "title" : "Beagle Button",
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
          "title" : "Button",
          "message" : "This is a widget that will define a button natively using the server driven information received through Beagle.",
          "labelOk" : "OK"
        }
      } ]
    },
    "child" : {
      "_beagleComponent_" : "beagle:container",
      "children" : [ {
        "_beagleComponent_" : "beagle:tabBar",
        "items" : [ {
          "title" : "Tab 1"
        }, {
          "title" : "Tab 2"
        } ],
        "styleId" : "TabBarStyle",
        "onTabSelection" : [ {
          "_beagleAction_" : "beagle:setContext",
          "contextId" : "contestTabId",
          "value" : "@{onTabSelection}"
        } ]
      }, {
        "_beagleComponent_" : "beagle:pageView",
        "children" : [ {
          "_beagleComponent_" : "beagle:text",
          "text" : "Tab 1"
        }, {
          "_beagleComponent_" : "beagle:text",
          "text" : "Tab 2"
        } ],
        "currentPage" : "@{contestTabid}"
      } ],
      "context" : {
        "id" : "contestTabid",
        "value" : 0
      }
    }
  }
-->

{{% playground file="pageView.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Screen(
        child = Container(
            context = ContextData("currentTab", 0),
            children = listOf(
                TabBar(
                    onTabSelection = listOf(
                        SetContext(
                            "currentTab",
                            "@{onTabSelection}"
                        )
                    ),
                    currentTab = expressionOf("@{currentTab}"),
                    items = listOf(
                        TabBarItem("Tab 1"),
                        TabBarItem("Tab 2")
                    ),
                    styleId = "TabBarStyle"
                ),
                PageView(
                    currentPage = expressionOf("@{currentTab}"),
                    onPageChange = listOf(SetContext(
                        "currentTab",
                        "@{onPageChange}"
                    )),
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
