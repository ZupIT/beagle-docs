---
title: Contexto
weight: 359
description: 'Nesta seção, você encontra descrição completa de contexto.'
---

---

## O que é? 

O contexto é uma **variável de qualquer tipo**, incluindo o mapa que define um conjunto de pares de chaves/valores. Por meio de **bindings**, o valor do contexto pode ser acessado por qualquer componente ou ação do seu escopo. 

A tabela abaixo demonstra os principais atributos do contexto: 

| Atributo | Tipo | Obrigatoriedade | Definição |
| :--- | :--- | :---: | :--- |
| id | String | ✓ | Identificador do contexto |
| value | Any | ✓ | Valor do contexto |

{{% alert color="info" %}}
No caso do contexto id, é importante que ele tenha apenas letras, números e o caractere  "\_" e deve ser ÚNICO na tela.
{{% /alert %}}

## Quando usar?

De modo geral, o contexto pode ser usado quando você quer preencher valores em um momento diferente daquele em que recebeu os componentes com o JSON.

No exemplo abaixo, você pode ver o contexto com dados de um usuário e sendo mostrados algumas dessas informações em um `Text` :

{{< tabs name="T163" >}}
{{% tab name="JSON" %}}
```javascript
{
  "_beagleComponent_": "beagle:container",
  "context": {
    "id": "myData",
    "value": {
      "id": "0000",
      "name": "User",
      "age": "18"
    },
  },
  "children": [
    {
      "_beagleComponent_": "beagle:text",
      "value": "Name: @{myData.name}"
    },
    {
      "_beagleComponent_": "beagle:text",
      "value": "Age: @{myData.age}"
    }
  ]
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```text
Container(
    context = ContextData(
        id = "myData",
        value = User(
            id = "0000"
            name = "User",
            age = "18"
        )
    ),
    children = listOf(
        Text("Name: @{myData.name}"),
        Text("Age: @{myData.age}")
    )   
)
```
{{% /tab %}}
{{< /tabs >}}

Perceba que o contexto foi declarado e seus valores foram definidos e usados para preencher os textos, porém é possível definir esses valores depois usando o método [`SetContext()`](../acoes/setcontext.md) . 

Dessa forma, você pode preencher os componentes com dados que ainda não estavam no JSON.

{{% alert color="info" %}}
O contexto só é útil se o valor for acessado em qualquer parte do JSON. Para isso acontecer, você precisa usar o `bindings`. 
{{% /alert %}}

## Como usar?

Há duas formas para usar contexto: **contexto explícito e implícito**. A principal diferença entre eles é o escopo do contexto, que pode \(ou não\) ser definido dentro do JSON ou da estrutura declarativa que estiver usando. 

### Escopo do contexto 

O escopo de um contexto é o componente no qual seus descendentes são definidos. Isso torna possível acessar o contexto declarado em uma outra branch da árvore.

Um contexto pode ser estabelecido em qualquer componente do Beagle que implementa o  `ContextComponent`, que é a propriedade do `context` que pode especificar os seguintes componentes: 

* `Container`
* `Screen`
* `ScrollView`
* `PageView`
* `TabView`
* `Custom Components`, que implementa o `ContextComponent`

### 1. Contexto explícito

Quando **há um escopo definido** para o contexto dentro do seu JSON ou da sua estrutura declarativa.

Veja o exemplo abaixo de como funciona: 

{{< tabs name="T163" >}}
{{% tab name="JSON" %}}
```javascript
{
  "_beagleComponent_" : "beagle:container",
  "children" : [ {
    "_beagleComponent_" : "beagle:text",
    "text" : "@{myText}"
  } ],
  "context" : {
    "id" : "myText",
    "value" : "Hello Beagle"
  }
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Container(
    context = ContextData(
        id = "myData",
        value = User(
            id = "0000"
            name = "User",
            age = "18"
        )
    ),
    children = listOf(
        Text("Name: @{myData.name}"),
        Text("Age: @{myData.age}")
    )   
)
```
{{% /tab %}}
{{< /tabs >}}

Perceba que o contexto foi declarado e seus valores foram definidos e usados para preencher os textos, porém é possível definir depois esses valores usando o método [`SetContext()`](../acoes/setcontext.md) . Dessa forma, você pode preencher os componentes com dados que ainda não estavam no JSON.

### 2. Contextos implícitos

Quando **não há um escopo** de contexto definido dentro do JSON ou da estrutura declarativa da sua tela, mas que podem ser acessados por [**bindings**](./#binding).

{{% alert color="info" %}}
Isso significa que esse tipo de contexto é criado por meio de [**eventos**](../eventos.md). 

Além disso, o escopo desse tipo de contexto é definido apenas por uma action ou um conjunto de ações relacionados ao evento criado no contexto. 
{{% /alert %}}

Em alguns casos, é necessário acessar uma **informação específica sobre um evento** que engatilhou uma ação. Um exemplo comum é o `onChange event`, que é lançado por qualquer componente e permite a entrada de dados. 

Caso mude o valor de uma entrada de um componente e as ações a serem lançadas dependem desse valor, é fundamental que você tenha acesso ao novo valor do componente. 

Outra característica do contexto implícito é que ele sempre possui um `id` igual ao nome do evento criado. Se, por exemplo, o evento é o onCharge, o escopo do contexto terá `id onChange` e binding ficará dessa forma:`{ value: newValue },` no qual `newValue` é o campo que você pode incluir um novo valor a ser usado.

Veja o exemplo abaixo com o evento `onBlur` , que funciona exatamente como o `onChange`, mas faz a requisição quando o input do componente perde o foco: 

```javascript
{
  "_beagleComponent_": "beagle:textinput",
  "label": "CEP",
  "onBlur": [
      {
          "_beagleAction_": "beagle:sendRequest",
          "url": "https://viacep.com.br/ws/@{onBlur.value}/json",
          "method": "GET"
      }
  ]
}
```

Apesar do contexto `onBlur` não ter sido declarado no exemplo acima, você consegue usá-lo porque ele foi criado de uma maneira implícita pelo evento `onBlur`. 

O que acontece é que o JSON define a view onde o foco se perdeu no campo de CEP e a ação é rodada para procurar o endereço com base no valor digitado. O resultado da requisição pode ser usado para definir o valor de outros campos no formulário de endereço. 

{{% alert color="info" %}}
Você pode conferir um exemplo de uso de contexto implícito no Beagle Web no [**Beagle Playground**](https://beagle-playground.netlify.app/#/demo/component-interaction/address-form.json).
{{% /alert %}}

Exemplos de eventos criados com contexto implícito: 

* `onChange`
* `onFocus`
* `onBlur`
* `onSuccess`
* `onError` 
* `onFinish`

Os três primeiros eventos são parte do contrato do componente `beagle:textinput` enquanto os três últimos são parte da ação `beagle:sendRequest` . 

## Binding

O binding é a string em um formato especial, que **identifica o valor dentro de um contexto**.  Sem ele, não é possível criar contextos, sejam eles implícitos ou explícitos. 

Durante o processo de renderização do Beagle, bindings podem ser substituídos pelos valores que são referenciados a ele. 

Um binding é identificado com o prefixo**`@{`** e o sufixo **`}`**. Isso significa que tudo entre esses símbolos serve como uma expressão do contexto, que deve ser substituído quando você renderizar a tela. 

Veja o exemplo abaixo de como funciona: 

{{< tabs name="T163" >}}
{{% tab name="JSON" %}}
```javascript
{
  "_beagleComponent_" : "beagle:container",
  "children" : [ {
    "_beagleComponent_" : "beagle:text",
    "text" : "@{myText}"
  } ],
  "context" : {
    "id" : "myText",
    "value" : "Hello Beagle"
  }
}
```
{{% /tab %}}

{{% tab name="kotlin DSL" %}}
```javascript
Container(
        children = listOf(
            Text("@{myText}")
        ),
        context = ContextData(
            id = "myText",
            value = "Hello Beagle"
        )
    )
```
{{% /tab %}}
{{< /tabs >}}

Para acessar o texto "Hello Beagle" por meio de bindings, é preciso especificar o id do contexto: `@{myText}`.

No exemplo acima, o valor do contexto é uma simples string, mas você pode ver nos tópicos a seguir como acessar valores em contextos que são mapas ou arrays. 

### Tipos de Bindings

#### Binding multi-valorados \(key/value maps\) 

É o tipo de binding no qual o valor do contexto será, geralmente, uma chave/valor de um map \(key/value map\). 

Nesses casos, os bindings devem ser usados para acessar subestruturas. Como acontece na maior parte de linguagens de programação, o Beagle usa pontos para fazer esse tipo de acesso, como você pode ver no exemplo abaixo: 

* Para acessar o CPF, use o binding `@{user.cpf}` ;
* Para acessar o número de telefone, use o binding `@{user.phoneNumber.cellphone}`.

{{< tabs name="T163" >}}
{{% tab name="JSON" %}}
```javascript
{
  "_beagleComponent_" : "beagle:container",
  "children" : [ {
    "_beagleComponent_" : "beagle:text",
    "text" : "@{user.phoneNumber.cellphone}"
  } ],
  "context" : {
    "id" : "user",
    "value" : {
      "cpf" : "014.225.235-12",
      "phoneNumber" : {
        "cellphone" : "(34) 98856-8563",
        "telephone" : "(34) 3214-5588"
      }
    }
  }
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
No Kotlin é necessario que se crie algumas classes para gerenciar os contextos multivalorados

```
Container(
        children = listOf(
            Text("@{user.phoneNumber.cellphone}")
        ),
        context = ContextData(
            id = "user",
            value = User(
                cpf = "014.225.235-12",
                phoneNumber = PhoneNumber(
                    cellphone = "(34) 98856-8563",
                    telephone = "(34) 3214-5588"
                )
            )
        )
    )
```

```javascript
data class User(val cpf: String, val phoneNumber:PhoneNumber)
data class PhoneNumber(val cellphone:String, val telephone:String)
```
{{% /tab %}}
{{< /tabs >}}

#### Binding com vetores \(arrays\)

É o tipo de binding no qual o valor do contexto será, geralmente, vetores \(arrays\). 

Se um vetor é usado no valor do contexto para acessar uma posição especifica, você deve usar o caractere  `[` e  `]`  quando estiver construindo um binding. 

Veja como no exemplo abaixo: 

Para acessar o título do segundo filme \("Contact"\), use o binding  `@{movies.titles[1].title}`. 

{{< tabs name="T163" >}}
{{% tab name="JSON" %}}
```javascript
{
  "_beagleComponent_" : "beagle:container",
  "children" : [ {
    "_beagleComponent_" : "beagle:text",
    "text" : "@{movies.titles[1].title}"
  } ],
  "context" : {
    "id" : "movies",
    "value" : {
      "genre" : "sci-fi",
      "titles" : [ {
        "title" : "Inception",
        "year" : "2010",
        "rating" : "8.8"
      }, {
        "title" : "Contact",
        "year" : "1997",
        "rating" : "7.4"
      } ]
    }
  }
}
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
No Kotlin é necessário que se crie algumas classes para gerenciar os contextos multi-valorados

```text
Container(
    children = listOf(
        Text("@{movies.titles[1].title}")
    ),
    context = ContextData(
        id = "movies",
        value = Movie(
            genre = "sci-fi",
            titles = listOf(
                Title(
                    title = "Inception",
                    year = "2010",
                    rating = "8.8"
                ),
                Title(
                    title = "Contact",
                    year = "1997",
                    rating = "7.4"
                )
            )
        )
    )
)

```

```javascript
class Movie(val genre: String, val titles:List<Title>)
class Title(val title:String, val year:String, val rating:String)
```
{{% /tab %}}
{{< /tabs >}}

### O que acontece se eu atribuir um binding a uma variável que não existe? 

Bindings que se referem a **contextos não existentes ou inválidos** não podem ser atualizados e irão aparecer na tela da mesma forma que a string foi definida literalmente \(no caso, se o atributo recebido é uma string\). 

Por exemplo, se você usar `@{client.name}` e o `"client"` o contexto não é acessível \(declarado\), se o binding não for substituído por nenhum valor. O mesmo aconteceria se o contexto "client" não existisse, mas o tem a propriedade "name". 

### Bindings múltiplos em strings

É possível usar mais de um binding em uma única string e eventos estáticos misturados com bindings. 

Veja como no exemplo abaixo: 

**Exemplo:** `"Hello @{person.name}. Your score is @{score.value}."` 

### Adicionando suporte para bindings em componentes customizados 

Em cada sistema, o binding deve ser declarado de uma forma:

* **Android:**  Todos os atributos recebem uma expressão que deve ser declarada como `Bind`. 
* **iOS:** Os atributos que recebem um binding devem ser declarados como `Expression` para fazer o mesmo efeito que no Android.  
* **Web:** Não é necessário lidar com bindings de uma maneira especial, o que significa que nada deve ser feito em seus componentes. 

Exemplos de cada sistema operacional: 

{{< tabs name="T163" >}}
{{% tab name="Android" %}}
```kotlin
data class MyComponent(
    val text: Bind<String>
) : WidgetView() {

    override fun buildView(rootView: RootView): View {
        val view = MyView(rootView.getContext())
        // To make bind works you have to call the observeBindChanges method
        // passing a rootView and the attribute that has a bind
        observeBindChanges(rootView, text) { view.setText(it) }
        return view
    }
}
```
{{% /tab %}}

{{% tab name="iOS" %}}
```swift
public struct MyComponent: Widget {
    public var widgetProperties: WidgetProperties

    public let text: Expression<String>

    public func toView(renderer: BeagleRenderer) -> UIView {
        let textView = UITextView()

        // To make bind works you have to call the observeBindChanges method
        // passing a rootView and the attribute that has a bind
        renderer.observe(text, andUpdate: \.text, in: textView)

        return textView
    }
}

```
{{% /tab %}}
{{< /tabs >}}

A forma de referenciar uma expressão em Kotlin DSL é: 

{{< tabs name="T163" >}}
{{% tab name="Kotlin DSL" %}}
```kotlin
MyComponent(
  text = expressionOf("@{myContext.hello}")
)
```
{{% /tab %}}
{{< /tabs >}}

No entanto, caso você passe o **valor hardcoded**, você deve fazer dessa forma:

{{< tabs name="T163" >}}
{{% tab name="Kotlin DSL" %}}
```kotlin
MyComponent(
  text = valueOf("hello")
)
```
{{% /tab %}}
{{< /tabs >}}

## 👉 [Veja alguns exemplos no Playground](https://beagle-playground.netlify.app/#/demo/component-interaction)
