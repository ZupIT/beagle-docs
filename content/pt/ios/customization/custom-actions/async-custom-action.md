---
title: Ação Customizada Assíncrona
weight: 3
description: Criando uma ação customizada assíncrona
---

---

**Tópicos abordados:**
- Criar uma ação customizada assíncrona:

 
**Requisitos:**
 - Ter um projeto já configurado com o Beagle.
 - Ler o exemplo [**Ação Customizada**]({{< ref path="/ios/customization/custom-actions/custom-action" lang="pt" >}}).

{{% alert color="warning" %}}
[**O que é uma ação?**]({{< ref path="/ios/customization/custom-actions/custom-action" lang="pt" >}}).
{{% /alert %}}

### Ação customizada assíncrona:

Para criar uma ação customizada no Beagle cuja execução seja assíncrona, como o consumo de uma API ou acesso a um banco de dados, basta criar uma `action` normalmente, como o exemplo [**Ação Customizada**]({{< ref path="/ios/customization/custom-actions/custom-action" lang="pt" >}}) e implementar a interface `AsyncAction`.

Com a action criada, basta vincular a interface `AsyncAction` interface solicitará que o método execute e o parâmetro onFinish seja implementado.

```swift
struct CustomAction: AsyncAction {

        var onFinish: [Action]?

        func execute(controller: BeagleController, origin: UIView) {

        }
    }
```

Agora, com a action pronta para executar de forma assíncrona, temos que **OBRIGATORIAMENTE** notificar quando sua execução está concluída executando a ação `onFinish`.

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
Para saber como registrar e usar essa nova ação e veja no passo 3 e 4 do exemplo [**Ação Customizada**]({{< ref path="/ios/customization/custom-actions/custom-action" lang="pt" >}}).
{{% /alert %}}
