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
| templates    |List&lt;[ServerDrivenComponent]({{< ref path="/api/components" lang="pt" >}})&gt; |           | Representa um array de template, onde cada template corresponde a uma célula na lista através de um `ServerDrivenComponent`.                                                              |
| isScrollIndicatorVisible | Bool | | Define se a barra de scroll é visivel.|
| onScrollEnd        | List&lt;[Action]({{< ref path="/api/actions" lang="pt" >}})&gt;                  |             | Lista de ações executadas quando o GridView chega ao fim.                                                                              |
| scrollEndThreshold |  Int                                                         |             | Define a porcentagem rolada do GridView para disparar o `onScrollEnd`.                                                                 |
| iteratorName       | String                                                      |             | É o identificador do contexto de cada célula.                                                                                       |
| key                | String                                                      |             | Aponta para um valor único presente em cada item do `dataSource` para ser usado como um sufixo nos ids dos componentes do template. |

### Templates

O template a ser usado será decidido de acordo com a propriedade `case` do template.  
{{% alert color="info" %}}
 O primeiro template onde `case` é ` true` será o template escolhido para renderizar um item. 
 Se todos forem `false`, então, o primeiro template onde `case` é omitido (template padrão) é usado.
{{% /alert %}}

## Como usar?

### GridView

{{< tabs id="T146" >}}
{{% tab name="JSON" %}}

<!-- json-playground:listView.json
{
  "_beagleComponent_": "beagle:container",
  "style": {
    "size": {
      "maxWidth": {
        "value": 560,
        "type": "REAL"
      }
    }
  },
  "children": [
    {
      "_beagleComponent_": "beagle:gridview",
      "numColumns": 2,
      "useParentScroll": true,
      "children": [
        {
          "_beagleComponent_": "beagle:image",
          "path": {
            "_beagleImagePath_": "remote",
            "url": "https://i.ibb.co/rvRN9kv/logo.png"
          },
          "style": {
            "size": {
              "width": {
                "value": 242,
                "type": "REAL"
              },
              "height": {
                "value": 225,
                "type": "REAL"
              }
            }
          }
        },
        {
          "_beagleComponent_": "beagle:image",
          "path": {
            "_beagleImagePath_": "remote",
            "url": "https://i.ibb.co/rvRN9kv/logo.png"
          },
          "style": {
            "size": {
              "width": {
                "value": 242,
                "type": "REAL"
              },
              "height": {
                "value": 225,
                "type": "REAL"
              }
            }
          }
        },
        {
          "_beagleComponent_": "beagle:image",
          "path": {
            "_beagleImagePath_": "remote",
            "url": "https://i.ibb.co/rvRN9kv/logo.png"
          },
          "style": {
            "size": {
              "width": {
                "value": 242,
                "type": "REAL"
              },
              "height": {
                "value": 225,
                "type": "REAL"
              }
            }
          }
        },
        {
          "_beagleComponent_": "beagle:image",
          "path": {
            "_beagleImagePath_": "remote",
            "url": "https://i.ibb.co/rvRN9kv/logo.png"
          },
          "style": {
            "size": {
              "width": {
                "value": 242,
                "type": "REAL"
              },
              "height": {
                "value": 225,
                "type": "REAL"
              }
            }
          }
        }
      ]
    }
  ]
}
-->

{{% playground file="gridView.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
{
     Container(
        children = listOf(
          GridView(
            numColumns = "2",
            useParentScroll = "true",
            children = listOf(
              Image(
                path = ImagePath.Remote(
                  url = "https://i.ibb.co/k9tYwtX/selo-do-exemplo-28420393.jpg",
                  placeholder = ImagePath.Local(mobileId = "imagePath", webUrl = "/imagePath.png")
                ),
              ).setStyle{
                  size = size
                  { width(242.unitReal()); height(225.unitReal()) },
              },
              Image(
                path = ImagePath.Remote(
                  url = "https://i.ibb.co/k9tYwtX/selo-do-exemplo-28420393.jpg",
                  placeholder = ImagePath.Local(mobileId = "imagePath", webUrl = "/imagePath.png")
                ),
              ).setStyle{
                  size = size
                  { width(242.unitReal()); height(225.unitReal()) },
              },
              Image(
                path = ImagePath.Remote(
                  url = "https://i.ibb.co/k9tYwtX/selo-do-exemplo-28420393.jpg",
                  placeholder = ImagePath.Local(mobileId = "imagePath", webUrl = "/imagePath.png")
                ),
              ).setStyle{
                  size = size
                  { width(242.unitReal()); height(225.unitReal()) },
              },
              Image(
                path = ImagePath.Remote(
                  url = "https://i.ibb.co/k9tYwtX/selo-do-exemplo-28420393.jpg",
                  placeholder = ImagePath.Local(mobileId = "imagePath", webUrl = "/imagePath.png")
                ),
              ).setStyle{
                  size = size
                  { width(242.unitReal()); height(225.unitReal()) },
              },
            )
          )
        )
      ).setStyle{
          size = size
          { maxWidth(560.unitReal()) },
      },
}
```

{{% /tab %}}
{{< /tabs >}}
