---
title: IOS
weight: 19
description: >-
  Nesta seção, você encontra um passo a passo para construir e exibir sua
  primeira tela utilizando Beagle.
---

---

## Como exibir uma tela "Hello Beagle!"

Depois de ter o **Beagle** instalado em seu projeto, vamos te mostrar como renderizar uma tela e exibir seu primeiro **"Hello Beagle!"**.

{{% alert color="warning" %}}
Veja como [**instalar o Beagle**](../installing-beagle/) caso ainda não tenha concluído esta etapa.
{{% /alert %}}

Atualmente, existem dois tipos de abordagens para a renderização de telas com o Beagle: **remota** e **declarativa.**

#### Renderização Remota 

> Principal abordagem usada no Beagle por ser fundamentada no conceito de [**server-driven UI**](../../principais-conceitos.md). Ela permite que você construa layouts dinamicamente, consumindo as informações fornecidas por um [**BFF**](../../principais-conceitos.md), por meio de uma URL remota.

#### Renderização Declarativa 

> Apesar de ser uma alternativa não pautada em server-driven UI, é uma forma de renderização que permite você declarar localmente componentes pela **linguagem Swift**. Com isso, você pode utilizar um componente local diretamente ou passando um JSON que o representa, simulando assim a resposta de um BFF.

Para este exemplo, você irá renderizar uma tela de **forma** **declarativa**, ou seja, tudo será feito localmente. Desta forma, você irá conhecer um pouco do Beagle e, em poucos passos, testar se sua instalação funcionou. 

### Passo 1: Crie uma classe \(**MyBeagleScreen\)**

Crie uma classe e a nomeie como preferir. Aqui, iremos chamá-la de **`MyBeagleScreen`**.

A classe irá conter apenas um método, responsável por construir uma **`Screen`**.


```swift
import Beagle
import BeagleSchema

class MyBeagleScreen {
    static func make() -> Screen {
        return Screen(
            child: Container(
                children: [
                    Text("Hello Beagle!")
                ]
            ).applyFlex(
                Flex(
                    justifyContent: .center,
                    alignItems: .center,
                    grow: 1
                )
            )
        )
    }
}
```


{{% alert color="info" %}}
Note que a **`Screen`** está sendo construída utilizando **`Flex`**. Para entender melhor esses componentes e suas propriedades, vá para a seção [**posicionamento de componentes**](../../features/layout-de-componentes/).
{{% /alert %}}

### Passo 2: Instanciar o **BeagleScreenViewController**

Agora, para conseguir visualizar a sua primeira tela construída utilizando o **Beagle**, tudo que você precisa fazer é:

Instanciar uma **`BeagleScreenViewController`** do tipo **`declarative`** que receberá a**`MyBeagleScreen`**.

```swift
let beagleViewController = Beagle.screen(
    .declarative(
        MyBeagleScreen.make()
    )
)
```

{{% alert color="info" %}}
Caso queira utilizar o tipo**`remote`**, veja [**como exibir uma tela Server-Driven UI**](../../tutoriais/exibindo-uma-tela.md).
{{% /alert %}}

Feito isso, basta apresentá-la onde preferir.

```swift
present(beagleViewController, animated: true, completion: nil)
```

{{% alert color="warning" %}}
Não esqueça de adicionar**`import Beagle`**. 
{{% /alert %}}

### Passo 3: Executar a aplicação

Por fim, execute a sua aplicação e, se tudo estiver certo, você deverá ver uma tela como esta:

![](/docs-beagle/hellobeagle_simulator.png)

{{% alert color="success" %}}
**Parabéns**, você criou sua primeira tela com **Beagle**🎉
{{% /alert %}}

## Próximos passos

Nesta seção, você viu como criar sua primeira tela declarativa utilizando o **Beagle**, em sua forma mais simples, sem entrar no conceito de server-driven UI.

👉Para entender melhor **como configurar o Beagle** e utilizá-lo aplicando o conceito de server-driven UI, veja como [**criar um projeto iOS do zero**](../new-project/case-ios/).
