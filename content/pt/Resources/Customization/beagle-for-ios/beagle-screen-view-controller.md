---
title: Beagle Screen View Controller
weight: 147
description: "Nesta seção, você encontra informações da classe Beagle Screen View Controller"
---

---

## Introdução

`BeagleScreenViewController` é uma classe que **gerencia a hierarquia de exibição na aplicação** e possui o mesmo funcionamento de uma `UIViewController`.

## Como implementar essa classe?

Esse processo pode ser feito com seguintes passos:

1. Crie um objeto do tipo BeagleScreenViewController passando um screenType em sua inicialização, que nos permite inicializar de três formas:

**Remote:** Recebe a URL da sua tela ou componente server-driven. Pode-se configurar um fallback opcional, que seria uma tela no modo declarativo caso houvesse algum erro com sua tela server-driven. A configuração de header também pode ser feita através do parâmetro additionalData.

**Declarative:** Criar uma tela de modo declarativo.

**DeclarativeText:** Passa o json de uma tela.

Você pode encontrar o construtor da classe a seguir:

```swift
class BeagleScreenViewController {

    public convenience init(
        _ screenType: ScreenType,
          controllerId: String? = nil
         ) {
        self.init(
            viewModel: .init(screenType: screenType), controllerId: controllerId
        )
        self.navigationControllerId = controllerId
    }
}

public enum ScreenType {
    case remote(Remote)
    case declarative(Screen)
    case declarativeText(String)
}

```

Exemplos de inicialização utilizando o declarative, remote e o declarativeText:

```swift
// 1
let viewController = BeagleScreenViewController(
    .declarative(Home.screen())
    )

// 2
let viewController = BeagleScreenViewController(
    .remote( .init(
        url: "/home",
        fallback: nil))
    )

// 3
let viewController = BeagleScreenViewController(
    .remote(.init(
        url: "http://localhost:8080/home",
        fallback: Home().screen))
    )

// 4
let viewController = BeagleScreenViewController(
        .declarativeText(
            """
            {
                "_beagleComponent_": "beagle:text",
                "text": "Hello World!"
            }
            """
        )
    )

```

**1 :** O primeiro exemplo instancia o `BeagleScreenViewController` com um screenType do tipo declarative passando uma tela criada para o seu modo declarativo.

**2 :** O segundo exemplo `BeagleScreenViewController` foi instanciado com um screenType do tipo remote onde se passa uma URL relativa e um fallback nulo. Para usar essa URL você deve colocar primeiro uma URL base no `BeagleDependencies` do seu projeto.

**3 :** O terceiro `BeagleScreenViewController` foi instanciado com um screenType do tipo remote onde passa a URL absoluta e um fallback de uma tela no modo declarativo.

**4 :** O quarto exemplo instancia o `BeagleScreenViewController` com um screenType do tipo declarativeText passando um json.

{{% alert color="success" %}}

## Beagle Navigation Controller customizada

A BeagleNavigationController é uma classe do tipo UINavigationController, focada em observar os estados de uma tela server-driven para, por exemplo, saber quando ela se inicia ou finaliza.

[**Click para saber mais!**]({{< ref path="/resources/customization/beagle-for-ios/custom-beagle-navigation-controller/" lang="pt" >}})

{{% /alert %}}
