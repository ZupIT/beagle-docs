---
title: DSL Context
weight: 211
description: >-
  Nesta seção, você encontra informações sobre a DSL Context e como utilizá-la
---

---

## **O que é a DSL Context?**

A DSL Context resolve duas situações nos projetos com o Beagle: 
1. **Tipagem**;
2. **Atualização** dos valores no [**Contexto**]({{< ref path="/api/context/overview" lang="pt" >}}).

Ao iniciar um contexto, você popula um mapa com chave/valor e esse valor é um objeto qualquer `(Any)` e para  serem alterados, você precisa utilizar o método [**`SetContext()`**]({{< ref path="/api/actions/setcontext" lang="pt" >}}), veja abaixo: 

```kotlin
context = ContextData("myBoolean", false),
onInit = listOf(
            SetContext(
                contextId = "myBoolean",
                value = true
            )

{{% alert color="info" %}}
A DSL Context resolve 3 tipos de contexto: 
1.  **`Local`**
2.  **`Global`**
3. `**Implícito`**
{{% /alert %}}

## **Como funciona a DSL Context?**

A DSL Context funciona por meio de um processador de anotações, onde são geradas extensões das classes de contexto que são anotadas com **@ContextObject** e para cada propriedade são criadas 2 extensões: 

- **`expression`**: Usada para resgatar um **Bind.Expression** contendo o seu valor.
- **`change`**: Usada para alterar o valor dessa propriedade.

```kotlin
// extensões geradas
public val MyContext.valueExpression: Bind.Expression<String>
  get() = expressionOf("@{$id.value}")

public fun MyContext.changeValue(value: String): SetContext {
  val contextIdSplit = splitContextId(id)
  return SetContext(
     contextId = contextIdSplit.first,
     path = "${if (contextIdSplit.second != null) "${contextIdSplit.second}." else ""}value",
     value = value
  )
}
```

{{% alert color="info" %}}
A DSL Context **não** altera o contrato JSON que o Beagle já tem.
{{% /alert %}}

## **Requisitos**

{{% alert color="info" %}}
A DSL Context só está disponível a partir da versão **X** do Beagle
{{% /alert %}}

### Utilizando o Contexto Local com a DSL Context

Usa-se a anotação **@ContextObject** em data classes que você deseja atribuir como contexto e, obrigatoriamente, esses data classes devem implementar uma interface chamada `Context` que possui uma marcação id. Todos os subtipos que o contexto possa ter também deverão ser anotados.

```kotlin
@ContextObject
data class MyContext(
    override val id: String,
    val value: String = "",
    val person: Person = Person("")
) : Context
```

{{% alert color="info" %}}
Todas as propriedades declaradas nas data classes devem ser var e possuir um valor default
{{% /alert %}}

Com isso, foram geradas as extensions `expression` e `change` para as propriedades value e person no arquivo chamado MyContextNormalizer:

```kotlin
public val MyContext.valueExpression: Bind.Expression<String>
  get() = expressionOf("@{$id.value}")

public fun MyContext.changeValue(value: String): SetContext {
  val contextIdSplit = splitContextId(id)
  return SetContext(
     contextId = contextIdSplit.first,
     path = "${if (contextIdSplit.second != null) "${contextIdSplit.second}." else ""}value",
     value = value
  )
}

public fun MyContext.changeValue(value: Bind.Expression<String>): SetContext {
  val contextIdSplit = splitContextId(id)
  return SetContext(
     contextId = contextIdSplit.first,
     path = "${if (contextIdSplit.second != null) "${contextIdSplit.second}." else ""}value",
     value = value
  )
}

public val MyContext.personExpression: Bind.Expression<Person>
  get() = expressionOf("@{$id.person}")

public fun MyContext.changePerson(person: Person): SetContext {
  val contextIdSplit = splitContextId(id)
  return SetContext(
     contextId = contextIdSplit.first,
     path = "${if (contextIdSplit.second != null) "${contextIdSplit.second}." else ""}person",
     value = person
  )
}

public fun MyContext.changePerson(person: Bind.Expression<Person>): SetContext {
  val contextIdSplit = splitContextId(id)
  return SetContext(
     contextId = contextIdSplit.first,
     path = "${if (contextIdSplit.second != null) "${contextIdSplit.second}." else ""}person",
     value = person
  )
}
```

Para inicializarmos um Contexto Local, devemos criar uma instância deste `data class` e atriburimos ele a um contexto de algum componente:

```kotlin
private var myContext = MyContext("myContext",
        person = Person(
            id = "person",
            firstName = "firstName local",
            lastName = "lastName local")
    )
    Container(context = myContext)
```

Caso deseje acessar a expressão de uma determinada propriedade utilize a extensão expression:

```kotlin
Text(myContext.valueExpression),
Text(myContext.person.firstNameExpression),
Text(myContext.person.lastNameExpression)
```

Caso deseje alterar o valor de uma das propriedades, utilize a extensão change:

```kotlin
myContext.person.changeFirstName("new first name")
myContext.changeValue("new value")
```

### Utilizando o Contexto Global com a DSL Context

Para criar um contexto global, devemos criar um `data class` anotado com **@GlobalContext**:

```kotlin
@GlobalContext
data class GlobalObject(
    val street: String = "",
    val person: Person = Person("")
)
```

{{% alert color="info" %}}
Todas as propriedades declaradas na `data class` para o contexto global devem ser var e possuir um valor default
{{% /alert %}}

Da mesma maneira que o contexto local, são criadas extesions para cada propriedade do seu contexto global para conseguirmos acessá-las e alterar seus respectivos valores.

{{% alert color="warning" %}}
Na aplicação só pode existir uma `data class` anotada com @GlobalContext
{{% /alert %}}

Para conseguirmos utilizar o contexto global, devemos sempre iniciar uma nova instância da `data class` anotada com o @GlobalContext e através das extensões podemos acesssar/alterar os valores deste contexto:

```kotlin
var globalObject = GlobalObject()
globalObject.change(
    GlobalObject("Street A",
        Person("", "first name global", "last name global"))),
globalObject.person.change(Person("", "firstName global changed", "lastName global changed"))
```

### Utilizando o Contexto Implicito com a DSL Context

O Contexto implícito é um contexto que através de um `lambda` você recebe um objeto definido como parâmetro para conseguir acessar possíveis valores que ele receba e manipular/atributir a outros contextos. 

Para se declarar um contexto implícito deve-se anotar a propriedade com **@ImplicitContext**. Com isso será gerada uma funcão com o mesmo nome do Widget, porém, com a primeira letra minuscula. Este método recebe os mesmo parametros definidos no Widget, entretanto as propriedades que possuem a anotação do contexto implícito são alteradas para um lambda na qual recebe como parametro um objeto primitivo ou um data class que herde de context e retorna o mesmo tipo definido no Widget.

```kotlin
@RegisterWidget
class Input(
    val hint: Bind<String>,
    @ImplicitContext
    val onTextChange: List<Action>? = null
) : Widget()

//gerado
public fun input(hint: Bind<String>, onTextChange: ((java.lang.String) -> List<Action>)? = null):
    Input = Input(hint, onTextChange?.invoke(java.lang.String("onTextChange")))
```

{{% alert color="warning" %}}
O Contexto implícito somente pode ser usado em custom Widgets que possuem a anotação @RegisterWidget
{{% /alert %}}

Agora, para usar esse Widget com o contexto implicito, você deve chamar essa função gerada:

```kotlin
input(
    hint = valueOf(""),
    onTextChange = {
        listOf(
            myContext.changeValue(expressionOf("@{${it}}"))
            )
        }
    )
```