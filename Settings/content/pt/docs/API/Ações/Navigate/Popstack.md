---
title: Popstack
weight: 281
description: Descrição da ação PopStack e seus atributos
---

---

## O que é?

Remove a pilha de exibição atual.

## Como usar?

Para usá-lo basta chamar o `PopStack()` sem necessidade de nenhum parâmetro.

No exemplo abaixo, temos uma tela vinda do BFF com um botão que ao clicar nele, fecha a activity atual. 

Para testar, basta que um endpoint do seu BFF retorne a tela do código abaixo, e chamar esse endpoint no Frontend.

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
```
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
