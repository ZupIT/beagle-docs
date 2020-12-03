---
title: Local
<<<<<<< HEAD
weight: 281
description: Descrição da classe Local e seus atributos
=======
weight: 300
description: >-
  This a example for a description
>>>>>>> c5badf6233a50a40ff4638a92338d6a7f613e625
---

---

<<<<<<< HEAD
## O que é? <a id="definicao"></a>

Rota de navegação para conteúdo local.

A sua estrutura é representada como mostrado abaixo:

| **Atributo** | **Tipo** | Obrigatório | **Definição** |
| :--- | :--- | :---: | :--- |
| screen | [Screen](../../../screen/) | ✓  | Tela a ser carregada |

## Como usar?



```javascript
{
  "_beagleComponent_": "beagle:button",
  "text": "Click me!",
  "onPress": [
    {
      "_beagleAction_": "beagle:pushView",
      "route": {
        "screen": {
          "_beagleComponent_": "beagle:screenComponent",
          "child": {
            "_beagleComponent_": "beagle:text",
            "text": "Hello Screen from Navigate"
          }
        }
      }
    }
  ]
}
```



```
Button(
    onPress = listOf(
         Navigate.PushView(
            Route.Local(
                Screen(
                    child = Text("Hello Screen from Navigate")
                )
            )
     )),
    text = "Click me!"
)
```



### 👉 [Teste essa ação no Web Playground](https://beagle-playground.netlify.app/#/demo/default-components/button.json)
=======
undefined
>>>>>>> c5badf6233a50a40ff4638a92338d6a7f613e625
