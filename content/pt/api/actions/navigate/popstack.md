---
title: PopStack
weight: 60
description: Descrição da ação PopStack e seus atributos
---

---

## O que é?

O ``PopStack`` é uma ação de navegação que remove a pilha de telas na qual a tela em exibição está.

A estrutura do ``PopStack`` é:

| **Atributo** | **Tipo**                                      | Obrigatório | **Definição**      |
| :----------- | :-------------------------------------------- | :---------: | :----------------- |
| navigationContext | ​[NavigationContext]({{< ref path="/api/actions/navigate/navigationcontext" lang="pt" >}})​ | | Contexto de Navegação enviado da tela anterior. |

## Como usar?

No exemplo abaixo, temos uma tela com um botão que, quando clicado, "mata" a pilha de telas em que a tela atual se encontra.

Para testar essa funcionalidade, basta navegar para a tela abaixo, em uma pilha de telas (Stack) já contruida, e clicar no botão. Isso fará com que toda a pilha de telas seja destruida

{{< tabs id="T114" >}}
{{% tab name="JSON" %}}
<!-- json-playground:popStack.json
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:button",
    "text" : "Click me!",
    "onPress" : [ {
      "_beagleAction_" : "beagle:popStack"
    } ]
  }
}
-->
{{% playground file="popStack.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Screen(
    child = Button(
        text = "Click me!",
        onPress = listOf(
            Navigate.PopStack()
        )
    )
)
```

{{% /tab %}}
{{< /tabs >}}
