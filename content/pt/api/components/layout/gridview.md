---
title: Gridview
weight: 340
description: "Descrição do componente GridView, seus atributos e construtores"
---

---

## O que é?

O componente GridView é responsável por definir uma lista em grade de itens **recicláveis** nativamente. Esses itens podem ser quaisquer componentes server driven. O uso do GridView é mais adequado para conteúdo visual, recomendado para situações onde há repetição de componentes, porém com dados diferentes.

A sua estrutura é representada como mostrado abaixo:

### GridView

| Atributo           | Tipo                                                        | Obrigatório | Definição                                                                                                                           |
| :----------------- | :---------------------------------------------------------- | :---------: | :---------------------------------------------------------------------------------------------------------------------------------- |
| numColumns          |                                      Int            |   | Define o número de colunas que o GridView irá exibir.                                                                      |
| context            | [ContextData]({{< ref path="/api/context" lang="pt" >}})                         |             | Define o contexto do componente.                                                                                                    |
| onInit             | List&lt;[Action]({{< ref path="/api/actions" lang="pt" >}})&gt;                  |             | Lista de ações a serem executadas assim que o componente é exibido.                                                                 |
| dataSource         | [Bind]({{< ref path="/api/context#binding" lang="pt" >}})&lt;List&lt;Any&gt;&gt; |      ✓      | Expressão que aponta para uma lista de valores usados para popular o componete.                                                     |
| templates    |List&lt;[ServerDrivenComponent]({{< ref path="/api/components" lang="pt" >}})&gt; |      ✓     | Representa um array de template, onde cada template corresponde a uma celula na lista através de um `ServerDrivenComponent`.                                                              |
| isScrollIndicatorVisible | Bool | | Define se a barra de scroll é visivel.|
| onScrollEnd        | List&lt;[Action]({{< ref path="/api/actions" lang="pt" >}})&gt;                  |             | Lista de ações executadas quando o GridView chega ao fim.                                                                              |
| scrollEndThreshold |  Int                                                         |             | Define a porcentagem rolada do GridView para disparar o `onScrollEnd`.                                                                 |
| iteratorName       | String                                                      |             | É o identificador do contexto de cada célula.                                                                                       |
| key                | String                                                      |             | Aponta para um valor único presente em cada item do `dataSource` para ser usado como um sufixo nos ids dos componentes do template. |

### Templates

{{% alert color="info" %}}
  `case` é uma expressão que retornará `true` ou `false`.
{{% /alert %}}

  O template a ser usado será decidido de acordo com a propriedade `case` do template.  
{{% alert color="info" %}}
 O primeiro template onde `case` é ` true` será o template escolhido para renderizar um item. 
 Se todos forem `false`, então, o primeiro template onde `case` é omitido (template padrão) é usado.
{{% /alert %}}

## Como usar?

### GridView

{{< tabs id="T146" >}}
{{% tab name="JSON" %}}

<!-- json-playground:gridView.json
{
  "_beagleComponent_": "beagle:screenComponent",
  "child": {
    "_beagleComponent_": "beagle:gridView",
    "context": {
      "id": "images",
      "value": [
        {
          "url": "https://i.ibb.co/k9tYwtX/selo-do-exemplo-28420393.jpg"
        }
      ]
    },
    "dataSource": "@{images}",
    "templates": [
      {
        "view": {
          "_beagleComponent_": "beagle:container",
          "children": [
            {
              "_beagleComponent_": "beagle:image",
              "path": {
                "_beagleImagePath_": "remote",
                "url": "@{item.url}"
              },
              "style": {
                "cornerRadius": {},
                "size": {
                  "width": {
                    "value": 242,
                    "type": "REAL"
                  },
                  "height": {
                    "value": 225,
                    "type": "REAL"
                  }
                },
                "flex": {}
              }
            },
            {
              "_beagleComponent_": "beagle:image",
              "path": {
                "_beagleImagePath_": "remote",
                "url": "@{item.url}"
              },
              "style": {
                "cornerRadius": {},
                "size": {
                  "width": {
                    "value": 242,
                    "type": "REAL"
                  },
                  "height": {
                    "value": 225,
                    "type": "REAL"
                  }
                },
                "flex": {}
              }
            },
            {
              "_beagleComponent_": "beagle:image",
              "path": {
                "_beagleImagePath_": "remote",
                "url": "@{item.url}"
              },
              "style": {
                "cornerRadius": {},
                "size": {
                  "width": {
                    "value": 242,
                    "type": "REAL"
                  },
                  "height": {
                    "value": 225,
                    "type": "REAL"
                  }
                },
                "flex": {}
              }
            },
            {
              "_beagleComponent_": "beagle:image",
              "path": {
                "_beagleImagePath_": "remote",
                "url": "@{item.url}"
              },
              "style": {
                "cornerRadius": {},
                "size": {
                  "width": {
                    "value": 242,
                    "type": "REAL"
                  },
                  "height": {
                    "value": 225,
                    "type": "REAL"
                  }
                },
                "flex": {}
              }
            }
          ]
        }
      }
    ],
    "isScrollIndicatorVisible": false,
    "iteratorName": "item",
    "numColumns": 2
  }
}
-->

{{% playground file="gridView.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
{
  data class Image(
    val url: String,
  )

  val images = listOf(
    Image(
      url = "https://i.ibb.co/k9tYwtX/selo-do-exemplo-28420393.jpg",
    ),
  )

 Container(
      children = listOf(
        GridView(
          context = ContextData(id = "images", value = images),
          dataSource = expressionOf("@{images}"),
          numColumns = 2,
          templates = listOf(
            Template(
              view = Container(
                children = listOf(
                  Image(
                    path = ImagePath.Remote(
                      "@{item.url}",
                    ),
                  ).setStyle {
                    size = Size.box(width = 242, height = 225)
                  },
                  Image(
                    path = ImagePath.Remote(
                      "@{item.url}",
                    ),
                  ).setStyle {
                    size = Size.box(width = 242, height = 225)
                  },
                  Image(
                    path = ImagePath.Remote(
                      "@{item.url}",
                    ),
                  ).setStyle {
                    size = Size.box(width = 242, height = 225)
                  },
                  Image(
                    path = ImagePath.Remote(
                      "@{item.url}",
                    ),
                  ).setStyle {
                    size = Size.box(width = 242, height = 225)
                  },
                )
              )
            )
          )
        )
      )
    )
}
```

{{% /tab %}}
{{< /tabs >}}


