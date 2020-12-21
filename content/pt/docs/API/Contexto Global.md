---
title: Contexto Global
weight: 379
description: 'Nesta seção, você encontra descrição completa de contexto global.'
---

---

## O que é? 

O Contexto Global é uma variável que pode assumir como valor qualquer tipo de variável, como um mapa definindo um conjunto de pares chave/valor ou objetos JSONs complexos que definem árvores de objetos. 

Ele funciona exatamente como o [**Contexto**](contexto/), no entanto, com um escopo **global**, ou seja, ele existirá enquanto a aplicação estiver rodando \(mesmo em background\), o que o permite ser acessado a partir de qualquer ponto da aplicação, seja esse ponto um componente ou ação vinculada a um componente ou mesmo programaticamente. 

### Como acessar? 

Ele pode ser acessado a partir de uma expressão em uma página declarativa, como por exemplo `"@{global.user}"` ou programaticamente, a  partir de um objeto **GlobalContext.get\(\)**. 

{{% alert color="info" %}}
Desta forma, é possível compartilhar informações entre a parte nativa da aplicação, parte _server-driven_ e também entre diferentes telas _server-driven_.
{{% /alert %}}

## Como utilizar?

Para utilizar o Contexto Global é importante ressaltar algumas informações importantes:

* O Contexto Global é um `Objeto` do tipo [`ContextData`](contexto/). 
* O Contexto Global pode ter como VALUE um Objeto JSON complexo, que pode conter uma árvore de objetos em si mesmo.
* É um `Singleton`.

{{% alert color="info" %}}
Por default o ID de um contexto global será sempre "global".
{{% /alert %}}

## Como criar um Contexto Global?

O Contexto Global é criado juntamente com a aplicação. É definido internamente no Beagle como um objeto do tipo ContextData que armazenará qualquer informação definida no contexto global.

## Como definir um Contexto Global?

Um contexto que seja global pode ser definido de duas formas: 

* A partir de um componente declarativo \(utilizando a Ação[**`SetContext`**](acoes/setcontext)\) ou 
* Programaticamente, utilizando a função `set()` a partir do objeto `GlobalContext` 

### 1. Usando o SetContext

É possível definir ou modificar um contexto global a partir da Ação [**`SetContext`**](acoes/setcontext) Para tal, basta identificar o contexto global utilizando a `ID = "global"` na propriedade `contextId`, como mostrado no exemplo abaixo:

{{< tabs name="T167" >}}
{{% tab name="JSON" %}}
```javascript
{
  "_beagleComponent_": "beagle:container",
  "children": [
    {
      "_beagleComponent_": "beagle:text",
      "text":"@{global.myValue}"
    },
    {
      "_beagleComponent_": "beagle:button",
      "text": "Open Modal",
      "onPress": [
        {
          "_beagleAction_": "beagle:setContext",
          "contextId": "global",
          "path": "myValue",
          "value": "Context has changed"
        }
      ]
    }
  ]
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Container(
        children = listOf(
                Text(text = "@{global.myValue}"),
                Button(text = "Open Modal",
                       onPress = listOf(
                               SetContext(
                                   contextId = "global",
                                   path = "myValue",
                                   value = "Context has changed"
                                )
                        )
                )
        ) 
)
```
{{% /tab %}}
{{< /tabs >}}

{{% alert color="warning" %}}
Ao definir o valor \(value\) de um contexto qualquer, é importante analisar sua estrutura. Se nenhum valor for passado na propriedade `path`, o valor será definido na raiz desse objeto, ou seja, qualquer outra atribuição que seja feita ao contexto vai sobrescrever qualquer informação sem um `path` na raiz do objeto.
{{% /alert %}}

No exemplo acima, o objeto JSON criado na raiz do contexto seria:

```kotlin
{"myValue" : "Context has changed"}
```

### 2. Usando o GlobalContext.set\(\)

O Contexto Global também pode ser definido através de um método `set` que pode ser chamado a partir do objeto `GlobalContext`. 

Para isso é usado: 

**GlobalContext.set\(value, path\)**

| **Parâmetro** | Tipo | Obrigatório | Definição |
| :--- | :--- | :---: | :--- |
| **value** | Any | ✓ | Representa a informação em si, que pode ser de qualquer tipo, como por exemplo, outros objetos JSONs, um array ou outro objeto qualquer.  |
| **path** | String |   | Representa  o caminho designado que conterá essa informação, no exemplo acima, o path utilizado foi `"myValue".` O parâmetro `path` não é obrigatório, e quando for omitido, definirá o valor informado na raiz do objeto, sobrescrevendo qualquer outra informação. |

Para definir um contexto global como o do exemplo dessa seção, utilize o comando abaixo:

{{< tabs name="T168" >}}
{{% tab name="Android" %}}
```javascript
GlobalContext.set("Context has changed", "myValue")
```
{{% /tab %}}

{{% tab name="Web" %}}
Na web, o contexto global é um dos atributos do BeagleService, que a lib do beagle-angular e beagle-react disponibilizam.

**Angular:**

Para utilizar o contexto global em qualquer componente da sua aplicação você precisará injetar o BeagleProvider no construtor do seu componente, utilizar a função `getBeagleUIService` para ter acesso ao objeto do `beagleService`, acessar o `globalContext` e a função do globalContext desejada. Abaixo o código exemplificando como utilizar a função de `set`.

```javascript
import { BeagleProvider } from '@zup-it/beagle-angular';

constructor(private beagleProvider: BeagleProvider)

...

const beagleService = this.beagleProvider.getBeagleUIService()
beagleService?.globalContext.set(value, path)
```

**React:**

Para utilizar o contexto global em uma aplicação React, utilize o `context` disponibilizado pelo beagle-react através do `useContext` do próprio react para ter acesso ao beagleService e através desse `beagleService`, acesse o `globalContext` e a função desejada, no exemplo abaixo, a função de `set` é utilizada.

```javascript
import context from '@zup-it/beagle-react/provider'

...

const beagleService = useContext(context)
beagleService?.globalContext.set(value, path)
```
{{% /tab %}}

{{% tab name="iOS" %}}
No iOS o Contexto Global é um dos atributos do [**Beagle Dependencies**](../../features/customizacao/beagle-para-ios/dependencias-do-beagle) .

Para utilizar o contexto global em qualquer componente da sua aplicação você precisará chamar o `BeagleDependencies` do seu projeto como no exemplo abaixo:

```javascript
dependencies.globalContext.setValue(value: "Context has changed", path: "myValue")
```

{{% alert color="info" %}}
O valor do contexto é um `DynamicObject`, portanto ele pode assumir qualquer tipo de valor.
{{% /alert %}}
{{% /tab %}}
{{< /tabs >}}

O contexto global pode ser recuperado de duas formas: 

* Usando `expressões` \(assim como qualquer contexto\) ou 
* Função `get` chamada a partir do `Objeto GlobalContext`.

### 1. Usando a expressão "@{global}"

Para recuperar o valor atribuído a um contexto global basta utilizar a expressão "@{global}".

No exemplo utilizado nessa seção, atribuímos um valor ao contexto global utilizando o path `"myValue" ,` dessa forma, para recuperá-lo basta usar a expressão **"@{global.myValue}"** o que retornará a string  **"Context has changed".**  

* Caso utilize somente a expressão **"@{global}" ,** o valor retornado será o objeto JSON inteiro:
  * {"myValue" : "Context has changed"}

{{% alert color="warning" %}}
Essas expressões são observadas pelo contexto e são atualizadas conforme o contexto muda, no entanto elas precisam estar em uma tela declarativa.
{{% /alert %}}

### 2. Usando o GlobalContext.get\(\)

O Contexto Global também pode ser recuperado através de um método `get` que pode ser chamado a partir do objeto `GlobalContext`. 

Para isso é usado:

**GlobalContext.get\(path\)**

| **Parâmetro** | Tipo | Obrigatório | Definição |
| :--- | :--- | :--- | :--- |
| **path** | String |   | Representa  o caminho designado que conterá essa informação, no exemplo acima, o path utilizada foi `"myValue".` O parâmetro `path` é opcional e caso não seja passado todo o valor do contexto global será retornado. |

Considerando o exemplo anterior, para recuperar o valor do Contexto Global que está no path **"myValue"**, utilize o comando:

{{< tabs name="T169" >}}
{{% tab name="Android" %}}
```javascript
GlobalContext.get("myValue")
```
{{% /tab %}}

{{% tab name="Web" %}}
Acima foram mostradas todas as configs para utilização do set. A config para o get é a mesma, porém mudando apenas o método do globalContext que será acessado:

```javascript
beagleService?.globalContext.get("myValue")
```
{{% /tab %}}

{{% tab name="iOS" %}}
Assim como no método set será necessário chamar as dependências do Beagle para utilizar o contexto global como no exemplo abaixo:

```javascript
dependencies.globalContext.get(path: "myValue")
```
{{% /tab %}}
{{< /tabs >}}

* Da mesma forma, ao utilizar o `GlobalContext.get()` sem nenhum parâmetro como `path`, esse método retornará o objeto JSON inteiro  -&gt; `{"myValue" : "Context has changed"}`

## Removendo um Contexto Global

O contexto global só é destruído com o encerramento da aplicação, e mesmo se estiver vazio, pode ser chamado de qualquer lugar da aplicação, pois "existe" enquanto a aplicação "existir".

No entanto, ele pode ser apagado \(reset\) ou ter partes de sua estrutura \(Objetos dentro do objeto JSON que representa o contexto global\) removidas, modificando  a estrutura do objeto. 

### Usando o GlobalContext.clear\(\)

O Contexto Global pode ser apagado através do método `clear` que pode ser chamado a partir do objeto `GlobalContext`. 

Para isso é usado:

**GlobalContext.clear\(path\)**

| **Parâmetro** | Tipo | Obrigatório | Definição |
| :--- | :--- | :--- | :--- |
| **path** | String |   | Opcional. Representa  o caminho que se deseja remover. |

### 1. Removendo todos os valores do Contexto Global

Para remover os valores de um Contexto Global por completo, "limpando-o", devemos utilizar o comando clear **sem informar** um path. Veja abaixo: 

{{< tabs name="T170" >}}
{{% tab name="Android" %}}
```javascript
GlobalContext.clear()
```

 
{{% /tab %}}

{{% tab name="Web" %}}
Lembre-se que na web o acesso ao contexto global sempre é feito atráves do beagleService:

```javascript
beagleService?.globalContext.clear()
```
{{% /tab %}}

{{% tab name="iOS" %}}
Lembre-se que no iOS o acesso ao contexto global é feito através do `BeagleDependencies`

```javascript
dependencies.globalContext.clear()
```
{{% /tab %}}
{{< /tabs >}}

Dessa forma, o `VALUE` do Contexto Global será **apagado** totalmente e terá um valor vazio \(""\) caso chamado a partir de sua função `GlobalContext.get()` 

### 2. Removendo um atributo/propriedade do Contexto Global

Por exemplo, imagine um contexto global que tenha duas propriedades definidas a seguir

{{< tabs name="T171" >}}
{{% tab name="Propriedade 1" %}}
* `GlobalContext.set(path = "myValue1", value = "My Context Value1")` 
* `GlobalContext.set(path = "myValue2", value = "My Context Value2")`
{{% /tab %}}

{{% tab name="Propriedade 2" %}}


```javascript
beagleService?.globalContext.set("My Context Value1", "myValue1")
beagleService?.globalContext.set("My Context Value2", "myValue1")
```
{{% /tab %}}
{{< /tabs >}}

Esse Contexto Global é construído pelo Beagle como o objeto JSON a seguir:

```javascript
{
    "myValue1":"My Context Value1",
    "myValue2":"My Context Value2"
}
```

Ao utilizar o comando:

{{< tabs name="T172" >}}
{{% tab name="Android" %}}
```kotlin
GlobalContext.clear(myValue1")
```
{{% /tab %}}

{{% tab name="Web" %}}
```javascript
beagleService?.globalContext.clear("myValue1")
```
{{% /tab %}}

{{% tab name="iOS" %}}
```swift
dependencies.globalContext.clear(myValue1")
```
{{% /tab %}}
{{< /tabs >}}

A propriedade representada pelo `path` "myValue1" será completamente removida contexto global, que será:

```javascript
{
    "myValue2":"My Context Value2"
}
```
