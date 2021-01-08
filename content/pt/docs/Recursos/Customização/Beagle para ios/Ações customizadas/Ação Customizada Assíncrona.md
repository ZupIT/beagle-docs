---
title: Ação Customizada Assíncrona
weight: 141
description: Criando uma ação customizada assíncrona
---

---

Para criar uma ação customizada no Beagle cuja execução seja assíncrona como o consumo de uma API ou acesso a um banco de dados, basta criar uma `action` normalmente como o exemplo anterior detalhou e implementar a interface `AsyncAction`.

Com a action criada, basta vincular a interface `AsyncAction` interface solicitará que o método execute e o parâmetro onFinish seja implementado.

```swift
struct CustomAction: AsyncAction {

        var onFinish: [Action]?
        
        func execute(controller: BeagleController, origin: UIView) {
               
        }
    }
```


Agora, com a action pronta para executar de forma assincrona, temos que **OBRIGATORIAMENTE** notificar quando sua execução está concluída execultando a ação `onFinish`.

```swift 
    controller.execute(actions: self.onFinish, origin: origin)
```

Veja no exemplo da Custom Action Assíncrona.

```swift
struct CustomAction: AsyncAction {

        var onFinish: [Action]?
        
        func execute(controller: BeagleController, origin: UIView) {
                print("Custom action foi chamada!")

                controller.execute(actions: self.onFinish, origin: origin)
        }
    }
```


Pronto! Sua action agora está configurada para executar qualquer trabalho de forma assíncrona!

{{% alert color="success" %}}
Para saber como registrar essa nova ação e ver exemplo de como usar [click aqui!](/pt/docs/recursos/customização/beagle-para-ios/ações-customizadas/ação-customizada-simples//).
{{% /alert %}}
