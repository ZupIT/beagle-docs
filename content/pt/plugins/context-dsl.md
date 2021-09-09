---
title: DSL do Contexto
weight: 211
description: >-
  Nesta seção, você encontra informações sobre a DSL Context e como utilizá-la
---

---

## **O que é a DSL Context?**

A DSL Context foi criada para revolver dois problemas nos projetos que utilizam o Beagle: tipagem nos valores do [**Contexto**]({{< ref path="/api/context/overview" lang="pt" >}}) e na atualização dos valores do Contexto. Hoje ao inicializamos um contexto, basicamente estamos populando um mapa com chave/valor de qualquer objeto e para conseguirmos alterar esses valores utilizamos o metodo [`SetContext()`]({{< ref path="/api/actions/setcontext" lang="pt" >}}). Mas     se tratando de uma mapa de Any, não conseguimos inferir os tipos dos objetos que estão neste mapa.

```kotlin
context = ContextData("myBoolean", false),
onInit = listOf(
            SetContext(
                contextId = "myBoolean",
                value = true
            )
```


Com esses dois problemas: não conseguirmos inferir o tipo e também sempre ter que utilizar o SetContext para conseguirmos alterar os valores de contexto foi que surgio a necessidade de criarmos a DSL Context. Na qual basicamente revolve o problema de tipagem alterando a maneira de se inicializar um contexto para um data class definido para conter as propriedades/chave que o contexto poderá conter e também abstrai o SetContext criando extensions dessas propriedades do contexto com metodos nas quais alteram seus valores.

{{% alert color="info" %}}
Basicamente existem 3 tipos de contextos que a DSL Context propos resolver: Local, Global e Implícito.
{{% /alert %}}

## **Como funciona a DSL Context?**

A DSL Context através de um Processador de anotações, são geradas extensions das classes de contexto que são anotados com o @ContextObject. Na qual para cada propriedade são criadas 2 extensions: expression e change. Sendo que a extensão expression é utilizada para conseguir resgatar um Bind.Expression contendo o seu valor e a change é utilizado para alterar o valor dessa propriedade.

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
```

{{% alert color="info" %}}
A DSL Context não altera o contrato JSON na qual o Beagle possui hoje
{{% /alert %}}

## Requisitos

{{% alert color="info" %}}
A DSL só está disponível a partir da versão X do Beagle
{{% /alert %}}

### Utilizando o Contexto Local com a DSL Context

Usa-se a anotação @GlobalObject nos data class que você deseja atribuir como Contexto. E obrigatoriamente esse data class deve implementar uma interface chamada Context, na qual ela possui uma marcação id.

```kotlin
@ContextObject
data class MyContext(
    override val id: String,
    val value: String = "",
    val person: Person = Person("")
) : Context
```

{{% alert color="info" %}}
Todas as propriedades declaradas na data class devem ser var e possuir um valor default
{{% /alert %}}

Com isso, foram geradas as extensions expression e change para as propriedades value e person no arquivo chamado MyContextNormalizer:

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

Para inicializarmos um Contexto Local simplemente devemos criar uma instancia deste data class criado acima e atriburimos ele no contexto de algum componente:

```kotlin
private var myContext = MyContext("myContext",
        person = Person(
            id = "person",
            firstName = "firstName local",
            lastName = "lastName local")
    )
    Container(context = myContext)
```

Caso queira acessar a expressão de uma determinada propriedade utilizamos a extension expression:

```kotlin
Text(myContext.valueExpression),
Text(myContext.person.firstNameExpression),
Text(myContext.person.lastNameExpression)
```

Ou se deseja alterar o valor de uma propriedade, utiliza-se a extesion change:

```kotlin
myContext.changeValue("new value")
myContext.person.changeFirstName("new first name")
```

### Utilizando o Contexto Global com a DSL Context

Para se criar um contexto global devemos criar um data class anotado com @GlobalContext:

```kotlin
@GlobalContext
data class GlobalObject(
    val street: String = "",
    val person: Person = Person("")
)
```

{{% alert color="info" %}}
Todas as propriedades declaradas na data class para o contexto global devem ser var e possuir um valor default
{{% /alert %}}

Da mesma maneira que o contexto local, são criadas a extesions para cada propriedade do seu contexto global para conseguirmos acessar e alterar os valores dele.

{{% alert color="info" %}}
Na aplicação só pode existir um data class anotado com @GlobalContext
{{% /alert %}}

Para conseguirmos utilizar o contexto global, devemos iniciar uma nova instancia da data class anotada com o @GlobalContext e através das extensions podemos acesssar/alterar os valores dele:

```kotlin
var globalObject = GlobalObject()
globalObject.change(
    GlobalObject("Street A",
        Person("", "first name global", "last name global"))),
globalObject.person.change(Person("", "firstName global changed", "lastName global changed"))
```

### Utilizando o Contexto Implicito com a DSL Context

O Contexto implicito é um contexto na qual atravé de um lambda você recebe um objeto tipado como parametro para poder acessar possiveis valores que ele receba e conseguir manipular ou atributir a outros contextos. Para se declarar um contexto implicito basicamente você deve anotar a propriedade com @ImplicitContext e com isso será gerada uma funcão com o mesmo nome do Widget porém com a primeira letra minuscula na qual recebe os mesmo parametros definidos no Widget porém nas propriedades que possuiem a anotação do contexto implicito é alterado para um lambda na qual recebe como parametro um objeto primitivo ou que herde de context e retorna o mesmo tipo definido no Widget.

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

{{% alert color="info" %}}
O Contexto implícito somente pode ser usado em custom Widgets que possuem a anotação @RegisterWidget
{{% /alert %}}

Agora, para se usar esse Widget com o contexto implicito, basicamente você deve chamar essa função gerada:

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

## Limitações

//todo