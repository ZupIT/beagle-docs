---
title: DSL Context
weight: 211
description: >-
   In this section, you will find information about DSL Context and how to use it.
---

---

## **What is a DSL Context?**

The DSL Context solves two situation in projects with Beagle: 
1. **Typing**;
2. **Value update** in the [**Context**]({{< ref path="/api/context/overview" lang="en" >}}).

When you start a context, you populate a map with key/value and this value is any object `(Any)` and if you need to alter them, you have to use the [**`SetContext()`**]({{< ref path="/api/actions/setcontext" lang="en" >}}) method, check out below: 

```kotlin
context = ContextData("myBoolean", false),
onInit = listOf(
            SetContext(
                contextId = "myBoolean",
                value = true
            )
```
{{% alert color="info" %}}
The DSL Context solves 3 types of context:  
1.  **`Local`**
2.  **`Global`**
3. **`Implicit`** 

{{% /alert %}}

## **How does the DSL Context work?** 
The DSL Context works through an annotation process, where the extensions are generated from the context classes that are annotated with **@ContextObject** and to each property 2 extensions are created: 
- **`expression`**: Used to rescue the **Bind.Expression** containing its values.
- **`change`**: Used to alternate this property value. 

```kotlin
// generated extensions
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
The DSL Context **does not** alters the JSON contract Beagle already has. 
{{% /alert %}}

## **Requirements**
{{% alert color="info" %}}
DSL Context is only available in Beagle's **X** version. 
{{% /alert %}}

###  **Using Local Context with the DSL Context**
Use the **@ContextObject** annotation in data classes you want to attribute as context and then they should implement an interface called **`Context`** which has an ID tag. 
All the subtypes that the context has must be annotated. See below: 

```kotlin
@ContextObject
data class MyContext(
    override val id: String,
    val value: String = "",
    val person: Person = Person("")
) : Context
```
{{% alert color="info" %}}
All the declared properties in the data classes must be **var** and it needs to have a default value. 
{{% /alert %}}

The extensions **`expression`** and **`change`** were generated to the **value** and **person** properties in the file called **MyContextNormalizer**, check out:

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
To start a Local Context, create a `data class` instance and you need to attribute a context to some component: 
```kotlin
private var myContext = MyContext("myContext",
        person = Person(
            id = "person",
            firstName = "firstName local",
            lastName = "lastName local")
    )
    Container(context = myContext)
```
If you access the expression of some property, use the extesion **expression**:
```kotlin
Text(myContext.valueExpression),
Text(myContext.person.firstNameExpression),
Text(myContext.person.lastNameExpression)
```
If you want to alter the value of one of the properties, use the extension **change**:

```kotlin
myContext.person.changeFirstName("new first name")
myContext.changeValue("new value")
```
### **Using the Global Context with the DSL Context**
To create a global context, create a **`data class`** annotated with the **@GlobalContext**:
```kotlin
@GlobalContext
data class GlobalObject(
    val street: String = "",
    val person: Person = Person("")
)
```
{{% alert color="info" %}}
All the declared properties in the data classes must be **var** and it needs to have a default value. 
{{% /alert %}}

The extensions are created to each property in its global context, then you are able to access them and alter their values. 

{{% alert color="warning" %}}
In the application, only one annotated `data class` can exist with @GlobalContext.
{{% /alert %}}

To use the global context, start a new `data class` instance annotated with @GlobalContext. Through these extensions, you can access/alter the values of this context, see how to do it: 

```kotlin
var globalObject = GlobalObject()
globalObject.change(
    GlobalObject("Street A",
        Person("", "first name global", "last name global"))),
globalObject.person.change(Person("", "firstName global changed", "lastName global changed"))
```
### **Using the Implicit Context with the DSL Context**
The implicit context through a **`lambda`** receives a defined object as parameter, this is for you to access the possible values it receives and manipulate/attribute to  other contexts. 
For you to declared an implicit context:  
1. Annotate the property with the **@ImplicitContext**, a function with the same Widget name will be generated, however with the first letter lowercase. 

This method receives the same parameters defined in the Widget, but the properties that have the implicit context annotation are altered to a **lambda** and receive as a parameter an object or a **data class** that inherits a context and returns the same defined Widget type. See below:  

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
The implicit context can be used only in **custom Widgets** that already has a **@RegisterWidget** annotation.

{{% /alert %}}
If you want to use this Widget with the **implicit context**, you must call the function below:
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