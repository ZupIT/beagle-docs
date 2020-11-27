---
title: Listview
weight: 340
description: 'Descrição do componente ListView, seus atributos e construtores'
---

---

## O que é?

O componente ListView é responsável por definir uma lista de itens **recicláveis** nativamente. Esses itens podem ser quaisquer componentes server driven. O uso do ListView é recomendado para situações onde há repetição de componentes, porém com dados diferentes.

{% hint style="danger" %}
A partir da versão 1.5.0 passamos a suportar o uso de contexto e reciclagem de celulas no ListView, com isso disponibilizamos duas formas de construir o componente. A versão depreciada foi mantida somente para manter retrocompatibilidade, se possível atualize para a nova versão do componente para melhor desempenho.
{% endhint %}

A sua estrutura é representada como mostrado abaixo:

### ListView

| Atributo | Tipo | Obrigatório | Definição |
| :--- | :--- | :---: | :--- |
| direction | [ListDirection](listview.md#listdirection) |   | Define o direcionamento em que os items da lista são exibidos. |
| context | [ContextData](https://docs.usebeagle.io/api/context) |  | Define o contexto do componente. |
| onInit | List&lt;[Action](https://docs.usebeagle.io/api/actions)&gt; |  | Lista de ações a serem executadas assim que o componente é exibido.  |
| dataSource | [Bind](https://docs.usebeagle.io/api/context#bindings)&lt;List&lt;Any&gt;&gt; | ✓ | Expressão que aponta para uma lista de valores usados para popular o componete. |
| template | [ServerDrivenComponent](https://docs.usebeagle.io/api/components) | ✓ | Representa cada celula na lista através de um `ServerDrivenComponent`. |
| onScrollEnd | List&lt;[Action](https://docs.usebeagle.io/api/actions)&gt; |  | Lista de ações executadas quando a lista chega ao fim. |
| scrollEndThreshold | Int |  | Define a porcentagem rolada da lista para disparar o `onScrollEnd`. |
| iteratorName | String |  | É o identificador do contexto de cada célula. |
| key | String |  | Aponta para um valor único presente em cada item do `dataSource` para ser usado como um sufixo nos ids dos componentes do template. |

### ListDirection

É um `ENUM`, cujos valores são:

| **Valor** | **Definição** |
| :--- | :--- |
| VERTICAL | Quando os items são exibidos em **`LINHAS`**. |
| HORIZONTAL | Quando os itens são exibidos em **`COLUNAS`**. |

{% hint style="info" %}
Valor default é ListDirection.VERTICAL
{% endhint %}

### ListView Depreciado

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
      <td style="text-align:left">List&lt;<a href="../">ServerDrivenComponent</a>&gt;</td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">
        <p></p>
        <p>Define os itens da lista de visualiza&#xE7;&#xE3;o. Eles podem ser configurados
          como uma lista de <code>ServerDrivenComponents</code> ou como <code>views.</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">direction</td>
      <td style="text-align:left"><a href="listview.md#listdirection">ListDirection</a>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:left">Define o direcionamento da lista de visualiza&#xE7;&#xE3;o.</td>
    </tr>
  </tbody>
</table>

## Como usar?

### ListView

{% tabs %}
{% tab title="JSON" %}
```text
{
  "_beagleComponent_": "beagle:listView",
  "direction": "VERTICAL",
  "dataSource": [
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
    }
  ],
  "template": {
    "_beagleComponent_": "beagle:container",
    "style": {
      "margin": {
        "bottom": {
          "value": 20,
          "type": "REAL"
        }
      }
    },
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
    ]
  }
}
```
{% endtab %}

{% tab title="Kotlin DSL" %}
```kotlin
ListView(
    dataSource = listOf(
        Person(
            name = "Kelsier",
            race = "Half-skaa",
            planet = "Scadrial",
            isMistborn = true,
            age = 38,
            sex = Sex.MALE
        ),
        Person(
            name = "Vin",
            race = "Half-skaa",
            planet = "Scadrial",
            isMistborn = true,
            age = 20,
            sex = Sex.FEMALE
        ),
        Person(
            name = "TenSoon",
            race = "Kandra",
            planet = "Scadrial",
            isMistborn = false,
            age = 40,
            sex = Sex.MALE
        ),
    ),
    template = Container(
        children = listOf(
            Text("Name: @{item.name}"),
            Text("Race: @{item.race}"),
            Text("Mistborn: @{item.isMistborn}"),
            Text("Planet: @{item.planet}"),
            Text("sex: @{item.sex}"),
            Text("age: @{item.age}"),
        )
    ).applyStyle(
        Style(
            margin = EdgeValue(bottom = 20.unitReal())
        )
    )
)
```
{% endtab %}
{% endtabs %}

### 👉 [Teste o ListView no Web Playground](https://beagle-playground-beta.netlify.app/#/demo/listview/1.local.json)​

### ListView Depreciado

{% tabs %}
{% tab title="JSON" %}
```text
{
  "_beagleComponent_": "beagle:listView",
  "children": [
    {
      "_beagleComponent_": "beagle:text",
      "text": "Beagle Text list",
      "textColor": "#FF0000",
      "alignment": "CENTER"
    },
    {
      "_beagleComponent_": "beagle:text",
      "text": "Beagle Text list",
      "textColor": "#00FF00",
      "alignment": "CENTER"
    },
    {
      "_beagleComponent_": "beagle:text",
      "text": "Beagle Text list",
      "textColor": "#0000FF",
      "alignment": "CENTER"
    }
  ],
  "direction": "HORIZONTAL"
}
```
{% endtab %}

{% tab title="Kotlin DSL" %}
```kotlin
ListView(
    direction = ListDirection.HORIZONTAL,
    children = listOf(
        Text(
            text = "Beagle Text list",
            textColor = "#FF0000",
            alignment = TextAlignment.CENTER
        ),
        Text(
            text = "Beagle Text list",
            textColor = "#00FF00",
            alignment = TextAlignment.CENTER
        ),
        Text(
            text = "Beagle Text list",
            textColor = "#0000FF",
            alignment = TextAlignment.CENTER
        )
    )
)
```
{% endtab %}
{% endtabs %}

### 👉 [Teste o ListView depreciado no Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/listview.json)​
