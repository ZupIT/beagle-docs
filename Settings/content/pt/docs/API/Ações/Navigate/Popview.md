---
title: Popview
weight: 283
description: Descrição da ação PopView e seus atributos
---

---

## O que é?

Remove a tela de exibição atual.

## Como usar?

Para remover a tela atual basta chamar o método `PopView()` sem a necessidade de passar nenhum parâmetro. No exemplo abaixo, temos uma tela vinda do BFF com um botão, que ao clicar nele, remove a view atual.

Para testar, basta que um endpoint do seu BFF retorne a tela do código abaixo e chame esse endpoint no frontend.

{{< tabs name="T129" >}}
{{% tab name="JSON" %}}
```javascript
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
```
{{% /tab %}}

{{% tab name="Kotlin DSL" %}}
```
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

### 👉 [Teste esse exemplo no Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/button.json)
