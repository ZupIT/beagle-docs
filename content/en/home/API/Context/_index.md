---
title: Context
weight: 334
description: Here you'll find all about context's description
---

---

## What is it?

Context is a **variable of any type**, including a map that defines a set of key/value pairs. Through bindings, the value of a context can be accessed by any component or action on your scope. 

The table below shows the main attributes of the context:

| Attribute | Type | Required | Definition |
| :--- | :--- | :---: | :--- |
| id | String | ✓ | Context identifier  |
| value | Any | ✓ | Context value |

{{% alert color="info" %}}
The context `id` can only contain letter, numbers and the character  "\_" and it must be UNIQUE on the screen. 
{{% /alert %}}

## When to use it?

Context can be used when you want to fill values in a different moment from the one you received JSONs components. 

On the example below, you can see a context with data of a user and it's showed some information in a `Text`: 

{{< tabs id="T133" >}}
{{% tab name="JSON" %}}
<!-- json-playground:context.json
{
   "_beagleComponent_":"beagle:screenComponent",
   "child":{
      "_beagleComponent_":"beagle:container",
      "children":[
         {
            "_beagleComponent_":"beagle:text",
            "text":"Name: @{myData.name}"
         },
         {
            "_beagleComponent_":"beagle:text",
            "text":"Age: @{myData.age}"
         }
      ],
      "context":{
         "id":"myData",
         "value":{
            "id":"0000",
            "name":"User",
            "age":"18"
         }
      }
   }
}
-->
{{% playground file="context.json" language="en" %}}
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

Notice the context was declared and its values were defined and used to fill the texts, however it is possible to define these values after using a [`SetContext()`](/home/api/actions/setcontext) method.

This way, you can fill the component's data that weren't yet in the JSON.

{{% alert color="info" %}}
The context is only useful if the value is accessed in any JSON part. You will need  to use `bindings` for this to happen. 
{{% /alert %}}

## How to use it? 

There are two ways to use context: **explicit and implicit context**.  The main difference between them is the scope of the context, it can be defined inside the JSON or the declarative structure you are using.

### Context scope

The scope of a context is a component where it and its descendants were defined. It's impossible to access a declared context in another tree branch. 

A context can be established in any Beagle component that implements a `ContextComponent`, that is a `context` propriety that can be specified by the following components:

* `Container`
* `Screen`
* `ScrollView`
* `PageView`
* `TabView`
* `Custom Components` that implements a `ContextComponent`

### 1. Explicit Context

When there is a **defined scope** to the context inside your JSON or your declarative structure. 

See the example below on how it works: 

{{< tabs id="T134" >}}
{{% tab name="JSON" %}}
<!-- json-playground:contextExplicito.json
{
   "_beagleComponent_":"beagle:screenComponent",
   "child":{
      "_beagleComponent_":"beagle:container",
      "children":[
         {
            "_beagleComponent_":"beagle:text",
            "text":"Name: @{myData.name}"
         },
         {
            "_beagleComponent_":"beagle:text",
            "text":"Age: @{myData.age}"
         }
      ],
      "context":{
         "id":"myData",
         "value":{
            "id":"0000",
            "name":"User",
            "age":"18"
         }
      }
   }
}
-->
{{% playground file="contextExplicito.json" language="en" %}}
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

Notice the context was declared and its values were defined and used to fill the texts, however it is possible to define these values using the [`SetContext()`](/home/api/actions/setcontext) method later. You can fill the component's with data that wasn't in the JSON. 

### 2. Implicit context 

When there isn't a context scope defined inside a JSON or the declarative structure of your screen, but it can be accessed through **bindings**. 

{{% alert color="info" %}}
That means that this type of context is created only through **events**.

Besides that, the scope on this type of context is defined only by an action or a set of action related to the created event in the context. 
{{% /alert %}}

In some cases, it's necessary to access a **particular information about an event** that triggered an action. An example is the `onChange event`, that is launched by any component and allows the data input. 

If the value of an input component changes and the actions to be launched depend  on this value, it is fundamental that you have  access to the new component value. 

The other implicit context characteristic is that it always have the same `id`  as the event name created it. If it the `onChange`event, for example, the context scope will have `id onChange` and the binding will be: `{ value: newValue }`, where `newValue` is the field you can include a new value to be used.

Check out on the following example that used the `onBlur` event, it works the same way as `onChange`, but makes a request when the input component lost its focus: 

{{< tabs id="C152" >}}
{{% tab name="JSON" %}}
<!-- json-playground:contextImplicit.json
{
   "_beagleComponent_":"beagle:screenComponent",
   "child":{
      "_beagleComponent_":"beagle:container",
      "children":[
         {
            "_beagleComponent_":"beagle:textInput",
            "placeholder":"ZIP",
            "onBlur":[
               {
                  "_beagleAction_":"beagle:alert",
                  "message":"example of implícit context: @{onBlur.value}"
               }
            ]
         }
      ]
   }
}
-->
{{% playground file="contextImplicit.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```kotlin
Screen(
        child = Container(
            children = listOf(
                TextInput(
                    placeholder = "CEP",
                    onBlur = listOf(
                        Alert(
                            message = "example of implicit context: @{onBlur.value}"
                        )
                    )
                )
            )
        )
    )
```
{{% /tab %}}
{{< /tabs >}}

Besides the `onBlur` context had never been declared on the example above, you can use it because it was created in an implicit way by the `onBlur` event. 

The JSON defines a view where the focus lost on the CEP \(zip code\)  field runs an action to search the address based on the typed value. The request result could be used to define the value for the other fields on an address form.

{{% alert color="info" %}}
You can check an example of implicit context of Beagle Web on [**Beagle Playground**](https://beagle-playground.netlify.app/#/demo/component-interaction/address-form.json).
{{% /alert %}}

Examples of events that create an implicit context:

* `onChange`
* `onFocus`
* `onBlur`
* `onSuccess`
* `onError` 
* `onFinish`. 

The first three events are part of a `beagle:textinput`component contract while the last three are part of `beagle:sendRequest` action.

## Bindings

Bindings are the string in a special format that **identifies a value inside a context**.  Without it is not possible to create implicit or explicit contexts.

During Beagle's render process, bindings can be replaced by values referred to them.

A binding is identified by a prefix `@{` and a suffix `}`. Meaning that everything between the symbols `@{` and `}` identify the context value by which the binding must be replaced when you render a screen. 

See the example below on how it works: 

{{< tabs id="T135" >}}
{{% tab name="JSON" %}}
<!-- json-playground:binding.json
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
-->
{{% playground file="binding.json" language="en" %}}
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

To access the "Hello Beagle" text through a binding, it has to specify the context id: `@{myText}`.

On the example above, the context value is a simple string, but you can see on the next topic how to access values in contexts that are maps or arrays.  

### Types of bindings

#### Multi-valued binding \(key/value maps\) 

It is the binding type which the context value it will be generally, a key/value of a map.

 In these cases, bindings must be used to access substructures. As it happens in most of programming languages, Beagle uses points to make this kind of access, as you can see on the context example below:

* To access the CPF, use the `@{user.cpf}` binding. 
* To access the phone number, use the `@{user.phoneNumber.cellphone}` binding.

{{< tabs id="T136" >}}
{{% tab name="JSON" %}}
<!-- json-playground:bindingMultiValued.json
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
-->
{{% playground file="bindingMultiValued.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
It's necessary to create some classes to manage multivalued contexts in Kotlin.

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

#### Binding with vectors \(arrays\)

It is the type of binding which the context value will be generally vectors \(arrays\).

If a vector is used on a context value, to access a specific position, you have to use the `[` e `]` characters when you're building the binding.

 See how on the context example below:

* To access the second film title \("Contact"\), use the `@{movies.titles[1].title}`binding. 

{{< tabs id="T137" >}}
{{% tab name="JSON" %}}
<!-- json-playground:bindingVector.json
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
-->
{{% playground file="bindingVector.json" language="en" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
It's necessary to create some classes to manage multivalued contexts in Kotlin.

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



### What happens if I attribute a binding to a variable that doesn't exist?

Bindings that refer to a non existent or invalid contexts cannot be updated and it will appear on the screen as they were typed \(in case the received attribute is a string\).

For example, if we use  `@{client.name}` and the `"client"` context is not accessible \(declared\), this binding will be not replaced by any value. The same would happen if the "client" context doesn't exist, but has a "name" propriety. 

### Multiples bindings in strings

It's possible to use more than one binding in a unique string and event mix statics texts with bindings. See how on the following example:

**Example:** `"Hello @{person.name}. Your score is @{score.value}."` 

### Adding a support for bindings in your custom components 

In each system, the binding must be declared like:

* **Android:**  All the attributes receive an expression that must be declared as `Bind`. 
* **iOS:** The attributes that receives a binding must be declared as`Expression` to have the same Android's effect. 
* **Web:** It's not necessary to deal with bindings in a special way, which means that nothing should be done on your components.

Examples for each operational system:

{{< tabs id="T138" >}}
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

The way to refer an expression on Kotlin's DSL must be like this:

{{< tabs id="T139" >}}
{{% tab name="Kotlin DSL" %}}
```kotlin
MyComponent(
  text = expressionOf("@{myContext.hello}")
)
```
{{% /tab %}}
{{< /tabs >}}

However, in case you have to pass a **hardcoded value,** you must use this way:

{{< tabs id="T140" >}}
{{% tab name="Kotlin DSL" %}}
```kotlin
MyComponent(
  text = valueOf("hello")
)
```
{{% /tab %}}
{{< /tabs >}}
