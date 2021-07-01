---
title: PullToRefresh
weight: 318
description: Descrição do componente PullToRefresh e seus atributos
---

---

## O que é?

O componente PullToRefresh configura um comportamento "pull to refresh" para o componente **child**.

A estrutura é representada como mostrado abaixo:

| Atributo  | Tipo                                                  | Obrigatório | Definição                                                           |
| :-------- | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------- |
| context   | [**ContextData**]({{< ref path="/api/context" lang="pt" >}}) |          | Define um **context** para o componente. |
| onPull    | List<[**Action**]({{< ref path="/api/actions" lang="pt" >}})> |          | Lista de ações executadas quando o componente **child** é puxado. |
| isRefreshing | Boolean or [**Binding**]({{< ref path="/api/context#bindings" lang="pt" >}}) |          | Expressão que controla quando o indicador de carregamento é mostrado. |
| color     | String or [**Binding**]({{< ref path="/api/context#bindings" lang="pt" >}}) |          | Define a cor do indicador de carregamento. |
| child     | [**ServerDrivenComponent**]({{< ref path="/api/components" lang="pt" >}}) | ✓        | Define o componente que será configurado com o **PullToRefresh**. |

{{% alert color="warning" %}}
**No iOS**, este componente configura um `UIRefreshControl` no filho se ele é um [**ListView**]({{< ref path="/api/components/layout/listview" lang="pt" >}}), [**GridView**]({{< ref path="/api/components/layout/gridview" lang="pt" >}}) ou [**ScrollView**]({{< ref path="/api/components/layout/scrollview" lang="pt" >}}), caso contrário cria-se um `ScrollView` que contém o child e configura um `UIRefreshControl` para ele.
{{% /alert %}}

## Como usar?

{{< tabs id="T124" >}}
{{% tab name="JSON" %}}

<!-- json-playground:pullToRefresh.json
{
    "_beagleComponent_": "beagle:container",
    "children": [
        {
            "_beagleComponent_": "beagle:pullToRefresh",
            "context": {
                "id": "isRefreshing",
                "value": false
            },
            "onPull": [
                {
                    "_beagleAction_": "beagle:setContext",
                    "contextId": "isRefreshing",
                    "value": true
                },
                {
                    "_beagleAction_": "beagle:alert",
                    "title": "Alert title",
                    "message": "Alert message",
                    "onPressOk": {
                        "_beagleAction_": "beagle:setContext",
                        "contextId": "isRefreshing",
                        "value": false
                    },
                    "labelOk": "Alert OK button"
                }
            ],
            "isRefreshing": "@{isRefreshing}",
            "color": "#0000FF",
            "child": {
                "_beagleComponent_": "beagle:text",
                "text": "PullToRefresh"
            }
        }
    ],
    "style" : {
        "flex" : {
            "grow": 1
        }
    }
}
-->

{{% playground file="pullToRefresh.json" language="pt" platform="ios" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Container(
    children = listOf(
        PullToRefresh(
            context = ContextData("isRefreshing", false),
            onPull = listOf(
                SetContext(
                    contextId = "isRefreshing",
                    value = true
                ),
                Alert(
                    title = "Alert title",
                    message = "Alert message",
                    onPressOk =
                        SetContext(
                            contextId = "isRefreshing",
                            value = false
                        ),
                    labelOk = "Alert OK button"
                )
            ),
            isRefreshing = expressionOf("@{isRefreshing}"),
            color = "#0000FF",
            child = Text("PullToRefresh")
        )
    )
).applyFlex(
    Flex(
        grow = 1.0
    )
)
```

{{% /tab %}}
{{< /tabs >}}
