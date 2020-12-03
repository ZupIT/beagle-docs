---
title: Eventos
<<<<<<< HEAD
weight: 349
=======
weight: 365
description: >-
  This a example for a description
>>>>>>> c5badf6233a50a40ff4638a92338d6a7f613e625
---

---

<<<<<<< HEAD
## O que são?

Eventos são tudo que podem disparar ações do Beagle \(Beagle Actions\). No JSON, toda chave que é associada a uma Beagle Action representa um evento. 

Veja alguns exemplos de eventos:

* onPress
* onError
* onFocus
* onChange

Um evento pode ser parte do contrato de um componente ou de uma Beagle Action. Um botão, por exemplo, é um componente e "onPress" é um evento que faz parte do seu contrato. A ação sendRequest, é um exemplo de ação onde os eventos "onSuccess", "onError" e "onFinish" são parte do contrato.

## Como usar?

Veja o exemplo com o evento "onPress" do botão:



```javascript
{
  "_beagleComponent_" : "beagle:button",
  "text" : "Click to show message",
  "onPress" : [ {
    "_beagleAction_" : "beagle:alert",
    "title" : "Sou um alert",
    "message" : "Hello Beagle"
  } ]
}
```



```text
Button(
    text = "Click to show message",
    onPress = listOf(
        Alert(
            title = "I'm an alert",
            message = "Hello Beagle"
        )
    )
)
```



No exemplo acima, associa-se a ação "beagle:alert" ao evento "onPress" do componente "beagle:button". Ou seja, ao pressionar o botão cujo título é "click to show message", uma mensagem de alerta será exibida na tela com o texto "Hello World!".

Todo evento em qualquer componente ou ação pode ser associado a qualquer Beagle Action. Foi utilizada a ação de alerta no exemplo anterior, mas qualquer outra poderia ser utilizada. Para fazer uma requisição ao clicar no botão, a ação "beagle:sendRequest" poderia ter sido usada. Para saber mais sobre a relação com todas a ações disponíveis, acesse a [**documentação sobre ações**](api-acoes/).
=======
undefined
>>>>>>> c5badf6233a50a40ff4638a92338d6a7f613e625
