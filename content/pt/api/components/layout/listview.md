---
title: ListView
weight: 80
description: "Descrição do componente ListView, seus atributos e construtores"
---

---

## O que é?

O componente ListView é responsável por definir uma lista de itens **recicláveis** nativamente. Esses itens podem ser quaisquer componentes server driven. O uso do ListView é recomendado para situações onde há repetição de componentes, porém com dados diferentes.

A sua estrutura é representada como mostrado abaixo:

### ListView

| Atributo           | Tipo                                                        | Obrigatório | Definição                                                                                                                           |
| :----------------- | :---------------------------------------------------------- | :---------: | :---------------------------------------------------------------------------------------------------------------------------------- |
| direction          | [ListDirection](#listdirection)                             |             | Define o direcionamento em que os items da lista são exibidos.                                                                      |
| context            | [ContextData]({{< ref path="/api/context" lang="pt" >}})                         |             | Define o contexto do componente.                                                                                                    |
| onInit             | List&lt;[Action]({{< ref path="/api/actions" lang="pt" >}})&gt;                  |             | Lista de ações a serem executadas assim que o componente é exibido.                                                                 |
| dataSource         | [Bind]({{< ref path="/api/context#binding" lang="pt" >}})&lt;List&lt;Any&gt;&gt; |      ✓      | Expressão que aponta para uma lista de valores usados para popular o componete.                                                     |
| templates    |List&lt;[ServerDrivenComponent]({{< ref path="/api/components" lang="pt" >}})&gt; |     ✓      | Representa um array de template, onde cada template corresponde a uma celula na lista através de um `ServerDrivenComponent`.                                                              |
| isScrollIndicatorVisible | Bool | | Define se a barra de scroll é visivel.|
| onScrollEnd        | List&lt;[Action]({{< ref path="/api/actions" lang="pt" >}})&gt;                  |             | Lista de ações executadas quando a lista chega ao fim.                                                                              |
| scrollEndThreshold |  Int                                                         |             | Define a porcentagem rolada da lista para disparar o `onScrollEnd`.                                                                 |
| iteratorName       | String                                                      |             | É o identificador do contexto de cada célula.                                                                                       |
| key                | String                                                      |             | Aponta para um valor único presente em cada item do `dataSource` para ser usado como um sufixo nos ids dos componentes do template. |

### ListDirection

É um `ENUM`, cujos valores são:

| **Valor**  | **Definição**                                  |
| :--------- | :--------------------------------------------- |
| VERTICAL   | Quando os items são exibidos em **`LINHAS`**.  |
| HORIZONTAL | Quando os itens são exibidos em **`COLUNAS`**. |

{{% alert color="info" %}}
Valor default é ListDirection.VERTICAL
{{% /alert %}}


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

{{< tabs id="T146" >}}
{{% tab name="JSON" %}}

<!-- json-playground:listView.json
{
  "_beagleComponent_": "beagle:listView",
  "direction": "VERTICAL",
  "context": {
    "id": "characters",
    "value": [
      {
        "name": "Kelsier",
        "race": "Half-skaa",
        "planet": "Scadrial",
        "isMistborn": true,
        "age": 38,
        "sex": "male"
      },
      {
        "name": "Vin",
        "race": "Half-skaa",
        "planet": "Scadrial",
        "isMistborn": true,
        "age": 20,
        "sex": "female"
      },
      {
        "name": "TenSoon",
        "race": "Kandra",
        "planet": "Scadrial",
        "isMistborn": false,
        "age": 40,
        "sex": "male"
      },
      {
        "name": "TenSoon",
        "race": "Kandra",
        "planet": "Scadrial",
        "isMistborn": false,
        "age": 40,
        "sex": "male"
      },
      {
        "name": "TenSoon",
        "race": "Kandra",
        "planet": "Scadrial",
        "isMistborn": false,
        "age": 40,
        "sex": "male"
      },
      {
        "name": "TenSoon",
        "race": "Kandra",
        "planet": "Scadrial",
        "isMistborn": false,
        "age": 40,
        "sex": "male"
      },
      {
        "name": "TenSoon",
        "race": "Kandra",
        "planet": "Scadrial",
        "isMistborn": false,
        "age": 40,
        "sex": "male"
      },
      {
        "name": "TenSoon",
        "race": "Kandra",
        "planet": "Scadrial",
        "isMistborn": false,
        "age": 40,
        "sex": "male"
      }
    ]
  },
  "dataSource": "@{characters}",
  "iteratorName": "item",
  "isScrollIndicatorVisible": false,
  "templates": [
    {
      "case": "@{eq(item.race, 'Half-skaa')}",
      "view": {
        "_beagleComponent_": "beagle:container",
        "children": [
          {
            "_beagleComponent_": "beagle:text",
            "text": "Name: @{item.name}"
          },
          {
            "_beagleComponent_": "beagle:text",
            "text": "Race: @{item.race}"
          },
          {
            "_beagleComponent_": "beagle:text",
            "text": "Mistborn: @{item.isMistborn}"
          },
          {
            "_beagleComponent_": "beagle:text",
            "text": "Planet: @{item.planet}"
          },
          {
            "_beagleComponent_": "beagle:text",
            "text": "sex: @{item.sex}"
          },
          {
            "_beagleComponent_": "beagle:text",
            "text": "age: @{item.age}"
          }
        ],
        "style": {
          "cornerRadius": {},
          "size": {},
          "margin": {
            "bottom": {
              "value": 20,
              "type": "REAL"
            }
          },
          "flex": {}
        }
      }
    },
    {
      "case": "@{eq(item.race, 'Kandra')}",
      "view": {
        "_beagleComponent_": "beagle:container",
        "children": [
          {
            "_beagleComponent_": "beagle:text",
            "text": "Name: @{item.name}"
          },
          {
            "_beagleComponent_": "beagle:text",
            "text": "Race: @{item.race}"
          },
          {
            "_beagleComponent_": "beagle:text",
            "text": "Mistborn: @{item.isMistborn}"
          }
        ],
        "style": {
          "cornerRadius": {},
          "size": {},
          "margin": {
            "bottom": {
              "value": 20,
              "type": "REAL"
            }
          },
          "flex": {}
        }
      }
    },
    {
      "view": {
        "_beagleComponent_": "beagle:container",
        "children": [
          {
            "_beagleComponent_": "beagle:text",
            "text": "Planet: @{item.planet}"
          },
          {
            "_beagleComponent_": "beagle:text",
            "text": "sex: @{item.sex}"
          },
          {
            "_beagleComponent_": "beagle:text",
            "text": "age: @{item.age}"
          }
        ],
        "style": {
          "cornerRadius": {},
          "size": {},
          "margin": {
            "bottom": {
              "value": 20,
              "type": "REAL"
            }
          },
          "flex": {}
        }
      }
    }
  ]
}
-->

{{% playground file="listView.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
    data class Person (
            val name: String,
            val race: String,
            val planet: String,
            val isMistborn: Boolean,
            val age: Int,
            val sex: String
    )
    
    val characters = listOf(
        Person(
            name = "Kelsier",
            race = "Half-skaa",
            planet = "Scadrial",
            isMistborn = true,
            age = 38,
            sex = "male"
        ),
        Person(
            name = "Vin",
            race = "Half-skaa",
            planet = "Scadrial",
            isMistborn = true,
            age = 20,
            sex = "female"
        ),
        Person(
            name = "TenSoon",
            race = "Kandra",
            planet = "Scadrial",
            isMistborn = false,
            age = 40,
            sex = "male"
        ),
    )
    
     ListView(
          context = ContextData(id = "characters", value = characters),
          dataSource = expressionOf("@{characters}"),
          templates = listOf(
            Template(
              case = expressionOf("@{eq(item.race, 'Half-skaa')}"),
              view = Container(
                children = listOf(
                  Text("Name: @{item.name}"),
                  Text("Race: @{item.race}"),
                  Text("Mistborn: @{item.isMistborn}"),
                  Text("Planet: @{item.planet}"),
                  Text("sex: @{item.sex}"),
                  Text("age: @{item.age}"),
                )
              ).setStyle {
                margin = EdgeValue.only(bottom = 20)
              }
            ),
              Template(
              case = expressionOf("@{eq(item.race, 'Kandra')}"),
              view = Container(
                children = listOf(
                  Text("Name: @{item.name}"),
                  Text("Race: @{item.race}"),
                  Text("Mistborn: @{item.isMistborn}"),
                )
              ).setStyle {
                margin = EdgeValue.only(bottom = 20)
              }
              ),
            Template(
              view = Container(
                children = listOf(
                  Text("Planet: @{item.planet}"),
                  Text("sex: @{item.sex}"),
                  Text("age: @{item.age}"),
                )
              ).setStyle {
                margin = EdgeValue.only(bottom = 20)
              }
            )
          )
        )

```

{{% /tab %}}
{{< /tabs >}}