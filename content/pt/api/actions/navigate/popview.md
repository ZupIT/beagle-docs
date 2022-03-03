---
title: PopView
weight: 80
description: Descrição da ação PopView e seus atributos
---

---

## O que é?

Esta ação destroi a tela exibida atualmente, e mostra a tela anterior na mesma pilha, se houver alguma.

A estrutura do ``PopView`` é:

| **Atributo** | **Tipo**                                      | Obrigatório | **Definição**      |
| :----------- | :-------------------------------------------- | :---------: | :----------------- |
| navigationContext | ​[NavigationContext]({{< ref path="/api/actions/navigate/navigationcontext" lang="pt" >}})​ | | Contexto salvo na tela destino. |

## Como usar?

No exemplo abaixo, temos uma tela com um botão, que ao ser clicado, executa a ação ``PopToView`` e destroi a tela atual, mostrando a tela anterior na mesma stack, se houver.

Para testar, basta que um endpoint do seu BFF retorne a tela do código abaixo e chame esse endpoint no frontend.

{{< tabs id="T115" >}}
{{% tab name="JSON" %}}
<!-- json-playground:popView.json
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:button",
    "text" : "Click me!",
    "onPress" : [ {
      "_beagleAction_" : "beagle:popView"
    } ]
  }
}
-->
{{% playground file="popView.json" language="pt" %}}
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}

```kotlin
Screen(
    child = Button(
        text = "Click me!",
        onPress = listOf(
            Navigate.PopView()
        )
    )
)
```

{{% /tab %}}
{{< /tabs >}}
