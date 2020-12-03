---
title: Pushstack
weight: 263
description: Descrição da ação PushStack e seus atributos
---

---

## O que é?

Apresenta uma nova tela e a coloca na pilha.

A sua estrutura é representada como mostrado abaixo: 

| **Atributo** | **Tipo** | Obrigatório | **Definição** |
| :--- | :--- | :---: | :--- |
| route | [Route](route/) | ✓ | Rota de navegação. |

## Como usar?

No exemplo abaixo, temos uma tela vinda do BFF com um botão, que ao ser clicado, abre uma nova activity server-driven com a tela especificada pelo BFF. 

Para testar, basta que um endpoint do seu BFF retorne a tela do código abaixo e chame esse endpoint no frontend. Você poderá passar tanto uma rota local  \(que passará uma [**screen**](https://docs.usebeagle.io/api/screen) na rota\), quanto remota \(que passará o endpoint da tela para a qual irá navegar\).



```javascript
{
  "_beagleComponent_" : "beagle:screenComponent",
  "child" : {
    "_beagleComponent_" : "beagle:button",
    "text" : "Click me!",
    "onPress" : [ {
      "_beagleAction_" : "beagle:pushStack",
      "route" : {
        "screen" : {
          "_beagleComponent_" : "beagle:screenComponent",
          "child" : {
            "_beagleComponent_" : "beagle:text",
            "text" : "Hello second Screen"
          }
        }
      }
    } ]
  }
}
```



```
Screen(
    child = Button(
        text = "Click me!",
        onPress = listOf(
            Navigate.PushStack(
                Route.Local(
                    Screen(
                        child = Text("Hello second Screen")
                    )
                )
            )
        )
    )
)
```



### 👉 [Teste esse exemplo no Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/button.json)
