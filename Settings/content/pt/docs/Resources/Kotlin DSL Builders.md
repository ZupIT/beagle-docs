---
title: "Builders para Kotlin DSL"
description: >
  Nesta seção, você encontra como utilizar os builders disponibilizados pelo Beagle com o Kotlin.
---

---

O Beagle fornece duas maneiras para definir seus componentes utilizando builders. 

1. Builder padrão
2. Builder DSL

Com eles, você consegue usar os componentes da plataforma de forma declarativa com Kotlin ou de uma maneira mais prática para montar os componentes com seus valores padrões, caso esteja utilizando Java ao invés de Kotlin.

{% hint style="info" %}
Você pode misturar as 3 maneiras disponíveis para definir um componente.
{% endhint %}

## Builder padrão

A maneira de usar os builders padrões do Beagle é semelhante a qualquer outro builder que você já tenha utilizado. O nome de cada builder de forma geral é o nome do componente com o sufixo Builder anexado. 

As **exceções** são componentes do tipo:

* `sealed classes`, cujo builders possuem o nome de sua classe pai como prefixo anexado.
* `Screen`, cujo builder é `ScreenComponentBuilder`. 

{% tabs %}
{% tab title="Java" %}
```java
//Navigate é uma sealed class com 
//OpenNativeRoute como uma classe filha
new NavigateOpenNativeRouteBuilder()
    .route("/route")
    .shouldResetApplication(false)
    .data(new HashMap<String, String>())
    .build();
```
{% endtab %}

{% tab title="Kotlin DSL" %}
```kotlin
//Navigate é uma sealed class com 
//OpenNativeRoute como uma classe filha
NavigateOpenNativeRouteBuilder()
    .route("/route")
    .shouldResetApplication(false)
    .data(mutableMapOf<String, String>())
    .build()
```
{% endtab %}
{% endtabs %}

## Builder DSL

Para definir um componente do Beagle utilizando esse método, você deve declarar o componente e suas propriedades utilizando chaves e métodos com o mesmo nome do campo a ser declarado ou diretamente pelo operador de atribuição \(=\). Veja o exemplo: 

```kotlin
alert{
    title{
        valueOf("Titulo") 
    }//utilizando as chaves
    message( valueOf("Message") )//utilizando os métodos
    labelOk = "OK"//atribuindo o valor diretamente
}
//equivalente
Alert(
    title = valueOf("Titulo"),
    message = valueOf("Message"),
    labelOk = "OK"
)
```

Nos casos em que o campo espera uma **lista ou um mapa**,  você deve colocar antes do elemento a ser adicionado na coleção com o operador '**+**'.  Esse operador também aceita elemento único.  Veja os exemplos:

{% tabs %}
{% tab title="Listas" %}
```kotlin
container{
    children{
        +Text("Hello")
        +Text("There")
        +listOf(Text("General"), Text("Kenobi"))
    }
}
//equivalente
Container(children = listOf(
    Text("Hello"),
    Text("There"),
    Text("General"),
    Text("Kenobi")
))
```
{% endtab %}

{% tab title="Mapas" %}
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
//equivalente
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
{% endtab %}
{% endtabs %}

### Exemplo

O exemplo abaixo define uma tela simples declarada nas três maneiras disponíveis pelo Beagle:

{% tabs %}
{% tab title="Padrão" %}
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
{% endtab %}

{% tab title="Builder DSL" %}
```kotlin
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
{% endtab %}

{% tab title="Builder Padrão" %}
```kotlin
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
{% endtab %}
{% endtabs %}
