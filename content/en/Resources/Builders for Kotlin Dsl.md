---
title: Builders for Kotlin Dsl
weight: 198
description: How to use builders available on Beagle with Kotlin
---

---

Beagle offers two ways to define your components using builders:

1. Default builder
2. DSL builder

With them, you are able to use the platform's components in a declarative way with Kotling or more practical way to assemble the components with your default values, if you are using Java instead of Kotlin.

{{% alert color="info" %}}
You can mix two available ways to define a component. 
{{% /alert %}}

## Default builder

The way to use default builder on Beagle is similiar to any other builder you have used before. The builder's name is generally the component's name with the suffix Builder attached.

The **exceptions** are the components with the type:

* `sealed classes`,  builders that has its father class as an attached prefix.
* `Screen`, builder that is a `ScreenComponentBuilder`. 

{{< tabs id="T81" >}}
{{% tab name="Java" %}}
```java
//Navigate is a sealed class with 
//OpenNativeRoute as a child class
new NavigateOpenNativeRouteBuilder()
    .route("/route")
    .shouldResetApplication(false)
    .data(new HashMap<String, String>())
    .build();
```
{{% /tab %}}

{{% tab name="Kotlin" %}}
```kotlin
//Navigate is a sealed class with
//OpenNativeRoute as a child class
NavigateOpenNativeRouteBuilder()
    .route("/route")
    .shouldResetApplication(false)
    .data(mutableMapOf<String, String>())
    .build()
```
{{% /tab %}}
{{< /tabs >}}

## DSL builder 

To define a Beagle component using this method, you have to declare the component and its properties using keys and methods with the same field name to be declared or directly by the attribution operator \(=\). See the example below: 

```kotlin
alert{
    title{
        valueOf("Titulo") 
    }//using the keys
    message( valueOf("Message") )//using the methods
    labelOk = "OK"//attributing the value directly 
}
//equivalent
Alert(
    title = valueOf("Titulo"),
    message = valueOf("Message"),
    labelOk = "OK"
)
```

In cases where the field waits a **list or a map**, you have to put before the elemement to be added in the collection with the operator '+'. This operator also accepts a unique element. See the examples: 

{{< tabs id="T82" >}}
{{% tab name="Lists" %}}
```kotlin
container{
    children{
        +Text("Hello")
        +Text("There")
        +listOf(Text("General"), Text("Kenobi"))
    }
}
//equivalent
Container(children = listOf(
    Text("Hello"),
    Text("There"),
    Text("General"),
    Text("Kenobi")
))
```
{{% /tab %}}

{{% tab name="Maps" %}}
```kotlin
navigateOpenNativeRoute { 
    route = "/route"
    shouldResetApplication = false
    data{
        +("Content-Type" to "application/json")
        +mapOf(
            "Content-Type" to "application/json",
            "Content-Type" to "application/json"
        )
    }
}
//equivalent
Navigate.OpenNativeRoute(
    route = "/route",
    shouldResetApplication = false,
    data = mapOf(
        "Content-Type" to "application/json",
        "Content-Type" to "application/json",
        "Content-Type" to "application/json"
    )
)
```
{{% /tab %}}
{{< /tabs >}}

### Example 

The example below defines a simple declared screen in the three available options on Beagle: 

{{< tabs id="T83" >}}
{{% tab name="Default" %}}
```kotlin
Screen(
    navigationBar = NavigationBar(
        title = "Navigation Bar Title",
        showBackButton = false
    ),
    child = Text(
        text = valueOf("Hello There")
    ).applyStyle(Style(
        margin = EdgeValue(bottom = 10.unitReal())
    ))
)
```
{{% /tab %}}

{{% tab name="Builder DSL" %}}
```
screen{
    navigationBar{
        title = "Navigation Bar Title"
        showBackButton = true
    }
    child{
        text{
            text = valueOf("Hello There")
        }.style { 
            margin{
                bottom = 10.unitReal()
            }
        }
    }
}
```
{{% /tab %}}

{{% tab name="Default builder" %}}
```
ScreenComponentBuilder()
    .navigationBar(
        NavigationBarBuilder()
            .title("Navigation Bar Title")
            .showBackButton(true)
            .build()
    ).child(
        TextBuilder()
            .text(valueOf("Hello There"))
            .build().applyStyle(
                StyleBuilder()
                    .margin(
                        EdgeValueBuilder()
                            .bottom(10.unitReal())
                            .build()
                    )
                    .build()
            )
    ).build()
```
{{% /tab %}}
{{< /tabs >}}
