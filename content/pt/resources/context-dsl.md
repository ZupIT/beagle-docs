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

##  **Utilizando o Contexto Local com a DSL Context**

Utilize a anotação **@ContextObject** em data classes que você deseja atribuir como contexto e, obrigatoriamente, elas devem implementar uma interface chamada **`Context`** que possui uma marcação ID. 
Todos os subtipos que o contexto possui devem ser anotados. Veja abaixo: 

```kotlin
@ContextObject
data class MyContext(
    override val id: String,
    val value: String = "",
    val person: Person = Person("")
) : Context
```

{{% alert color="info" %}}
Todas as propriedades declaradas nas data classes devem ser **var** e possuir um valor default.
{{% /alert %}}

As extensões **`expression`** e **`change`** foram geradas para as propriedades **value** e **person** no arquivo chamado **MyContextNormalizer**, veja abaixo:

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

Para você inicializar um Contexto Local, crie uma instância do `data class` e é necessário atribuir um contexto de algum componente:

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

Para você criar um contexto global, crie um **`data class`** anotado com **@GlobalContext**:

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

As extensões são criadas para cada propriedade do seu contexto global, assim você consegue acessá-las e depois alterar seus valores.

{{% alert color="warning" %}}
Na aplicação só pode existir uma `data class` anotada com @GlobalContext
{{% /alert %}}

Para você utilizar o contexto global, inicie uma nova instância da `data class` anotada com o @GlobalContext. Por meio das extensões, você pode acesssar/alterar os valores deste contexto, veja como:

```kotlin
var globalObject = GlobalObject()
globalObject.change(
    GlobalObject("Street A",
        Person("", "first name global", "last name global"))),
globalObject.person.change(Person("", "firstName global changed", "lastName global changed"))
```

### **Utilizando o Contexto Implicito com a DSL Context**

O Contexto implícito através de um **`lambda`** recebe um objeto definido como parâmetro, isso é para você acessar os possíveis valores que ele recebe e manipular/atributir a outros contextos. 

Para você declarar um contexto implícito: 
1. Anote a propriedade com **@ImplicitContext**, uma função com o mesmo nome do Widget será gerada, porém, com a primeira letra minúscula. 
Este método recebe os mesmo parâmetros definidos no Widget, porém as propriedades que possuem a anotação do contexto implícito são alteradas para um **lambda** que recebe como parâmetro um objeto primitivo ou um **data class** que herda de um context e retorna o mesmo tipo definido no Widget.
Veja abaixo:

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
O Contexto implícito pode ser usado somente em **custom Widgets** que possuem a anotação **@RegisterWidget**.
{{% /alert %}}

Se você quiser usar esse Widget com o **contexto implícito**, você deve chamar a função abaixo:

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