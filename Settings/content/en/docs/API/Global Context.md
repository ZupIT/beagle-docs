---
title: Global Context
weight: 326
---

---

## What is it?

A Global Context is a variable that can assume as value of any type of variable, like a map defines a subset of key/value or complex JSONs objects that defines object trees.

It works exactly like the [**Context**](context.md), however in a global scope, meaning that it will exists while the application is still running \(even on the background\), which allows it to be accessed from any application point, being a component or an action linked to a component or even programmatically. 

### How can you access it? 

It can be accessed through an expression in a declarative page, for example, `"@{global.user}"` or programmatically from a **GlobalContext.get\(\)** object**.** 

{{% alert color="info" %}}
This way, it is possible to share information between the native part of the application, the server-driven part and between different server-driven screens. 
{{% /alert %}}

## How to use it?

It is important to mention some information to use the Global Context: 

* Global context Global ins an object and is type is __[**`ContextData`**](context.md)**.** 
* Global context can have as a VALUE, a complex JSON that can contain an object tree in it. 
* It is a `Singleton`.

{{% alert color="info" %}}
By default the global context ID will be always 'global'. 
{{% /alert %}}

## How to create a Global Context? 

Global context is created with the application and it is defined internally on Beagle as an object with ContextData type, that it will store any defined information on a global context. 

## How to define a Global Context?

A context to be global, it can be defined in two ways: 

* From a declarative component \(using the [**`SetContext`**](actions/setcontext.md)action\) or
* Programmatically, using the `set()` function from the `GlobalContext` object. 

### 1. Using SetContext

It is possible to define or modify a  global context from the   [**`SetContext`**](actions/setcontext.md) action.  You have to identify a global context using an `ID = "global`" in the `contextId` property, as you can see below: 



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



{{% alert color="warning" %}}
When defining a value of any context, it is important to analyse its structure. If any value is passed in the `path` property,  the value it will be defined in the object's roots, meaning that any other attribution done in the context will overwrite any information without a `path` on the object's root. 
{{% /alert %}}

On the example above, the JSON object created on the context's root it would be:

```kotlin
{"myValue" : "Context has changed"}
```

### 2. Using GlobalContext.set\(\)

Global context can also be defined through a `set` method, that can be called from the `GlobalContext` object. 

For this, it is used: 

**GlobalContext.set\(value, path\)**

| **Parameters** | Type | Required | Definition |
| :--- | :--- | :--- | :--- |
| **value** | Any | ✓ | It represents an information that can be any kind, for example, other JSONs objects, an array or any other object.  |
| **path** | String |  | It represents the path that it will contain this information, like the example above, the path used was `"myValue".` The `path` parameter is not required, and when omitted it will define the value informed in the object's root, overwriting any other information.  |

To define a global context, just like the example in this section, use the following command:  



```javascript
GlobalContext.set("Context has changed", "myValue")
```



On the web global context is one of BeagleService attributes, available by library beagle-angular and beagle-react.

Na web, o contexto global é um dos atributos do BeagleService, que a lib do beagle-angular e beagle-react disponibilizam.

**Angular:**

To use the global context in any component of your application, you have to inject BeagleProvider in your components' constructor and use the `getBeagleUIService` function to have access to `beagleService's` object, access the `globalContext` and the globalText function you want. See below the code on how to use the `set` function:

```javascript
import { BeagleProvider } from '@zup-it/beagle-angular';

constructor(private beagleProvider: BeagleProvider)

...

const beagleService = this.beagleProvider.getBeagleUIService()
beagleService?.globalContext.set(value, path)
```

**React:**

To use global context in a React application, use the available `context` by beagle-react through `useContext` of the React and to have access to `beagleService` and through it access the `globalContext` and the function you want. See below the set function being used: 

```javascript
import context from '@zup-it/beagle-react/provider'

...

const beagleService = useContext(context)
beagleService?.globalContext.set(value, path)
```



In iOS the Global Context is a [**Beagle Dependencies**](../resources/customization/beagle-for-ios/beagledependencies.md) attribute.

To use it in anywhere of your application you must to use the `BeagleDependencies` instance of your project as the example below:

```javascript
dependencies.globalContext.setValue(value: "Context has changed", path: "myValue")
```

{{% alert color="info" %}}
The context value is a `DynamicObject`, therefore it can take on any kind of value.
{{% /alert %}}



## Recovering a Global Context 

Global context can be recovered in two ways: 

* Using `expressions` \(just like any other context\) or
*  `get` function, called from the `GlobalContext` object. 

### 1. Using the "@{global}" expression 

To recover the value assigned to a global context, you have to use the "@{global}" expression. 

The example on this section, the global context value was assigned using a `"myValue"` path, in order to recover it, you have to use the expression **"@{global.myValue}"** that it will return a "**Context has changed**" string. 

* If you only use the **"@{global}" expression,**  the value will return a whole JSON object: 
  * {"myValue" : "Context has changed"}

{{% alert color="warning" %}}
This expression are observed by the context and are updated when the context changes, however they need to be in a declarative screen. 
{{% /alert %}}

### 2. Using a GlobalContext.get\(\)

Global context also can be recovered through a `get` method and it can be called from the `GlobalContext` object. 

For this, it is used: 

**GlobalContext.get\(path\)**

| **Parameters** | Type | Definition |
| :--- | :--- | :--- |
| **path** | String | Represents the path that it will contain the information, on the example above, the path used was  `"myValue".` The `path` parameter is optional and if every value is passed, the global context will be returned.  |

Consider the previous example, to recover a Global context that is in the **"myValue"** path, use the following command: 



```javascript
GlobalContext.get("myValue")
```



The example above you could see all configuration to use set. The config to get is the same, however you have to change the globalContext method that it will be access: 

```javascript
beagleService?.globalContext.get("myValue")
```



As the set method it is necessary to use the BeagleDependencies to call any Global Context method, follow the example below:

```javascript
dependencies.globalContext.get(path: "myValue")
```



* The same way when using  `GlobalContext.get()` without a `path` parameter, this method will return a whole JSON object -&gt; `{"myValue" : "Context has changed"}`

## Removing a Global Context 

Global context can only be destroyed with the application closing, and even if it is empty, it can be called anywhere in the application, because it ''exists'' while the application ''exists''. 

However, it can be reseted or it can have parts of its structure \(objects inside the JSON object that represents the global context\) removed, modifying the object's structure. 

### Using GlobalContext.clear\(\)

Global context can be deleted through `clear` method that can be called from the `GlobalContext` object.  

It is used:

**GlobalContext.clear\(path\)**

| **Parameters** | Type | Definition |
| :--- | :--- | :--- |
| **path** | String | Optional. Represents the path you want to remove.   |

### 1. Removing all Global Context values 

To remove Global context value as a whole, cleaning it, you have to use the clear command without **informing** a path. See below:



```javascript
GlobalContext.clear()
```



Remember that in the web the global context access is always made over the `BeagleService`

```javascript
beagleService?.globalContext.clear()
```



Remember that in the iOS the global context access is made over the `BeagleDependencies`

```
dependencies.globalContext.clear()
```



This way, the global context `VALUE` it will be completely erased  and it will have an empty value \(""\), if called from its `GlobalContext.get()` function.

### 2. Removing a Global Context attribute/property

Imagine, for example, a global context that has two properties, like the following ones: 



* `GlobalContext.set(path = "myValue1", value = "My Context Value1")` 
* `GlobalContext.set(path = "myValue2", value = "My Context Value2")`





```javascript
beagleService?.globalContext.set("My Context Value1", "myValue1")
beagleService?.globalContext.set("My Context Value2", "myValue1")
```



This global context is built by Beagle as a JSON object, like this: 

```javascript
{
    "myValue1":"My Context Value1",
    "myValue2":"My Context Value2"
}
```

Using the command: 



```javascript
GlobalContext.clear("myValue1")
```



```javascript
beagleService?.globalContext.clear("myValue1")
```



```javascript
dependencies.globalContext.clear(myValue1")
```



The property represented by `path` "myValue1" will be completly removed from the glova context, that it will be: 

```javascript
{
    "myValue2":"My Context Value2"
}
```
