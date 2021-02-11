---
title: Animações de navegação
weight: 143
description: "Nesta seção, você encontra informações de animação da navegação entre telas."
---

---

## Introdução

No protocolo `BeagleNavigation` temos uma variável `defaultAnimation` que permite que você mude as animações de transição da sua aplicação, e também outra função que lida com os tipos de ações [**navigate**](/pt/api/actions/navigate/) e define os seus comportamentos.

Sugerimos que você use a implementação default, mas se necessário, é permitido que essa implementação seja substituída por uma classe que está de acordo com o protocolo acima.

## Protocolo e customização

No protocolo da `BeagleNavigation` temos uma variável `defaultAnimation` que determina como a animação de uma tela acontece quando ela é apresentada.

É permitido que as transições de Push e Pop de uma View Controller sejam alteradas usando as variáveis `pushTransition` e `popTransition`. É possível também mudar o `modalPresentationStyle` e `modalTransitionStyle` de uma view usando as variáveis abaixo:

```swift
public struct BeagleNavigatorAnimation {
    var pushTransition: Transition?
    var popTransition: Transition?
    var modalPresentationStyle: UIModalPresentationStyle?
    var modalTransitionStyle: UIModalTransitionStyle
}
```

Na estrutura abaixo, proporcionamos os tipos de [`CATransition`](https://developer.apple.com/documentation/quartzcore/catransition) , onde você pode fazer uma transição de estados de uma layer criando e adicionando um objecto de CATransition.

```swift
public struct Transition {
   var type: CATransitionType
   var subtype: CATransitionSubtype?
   var duration: Double
}
```

### **Exemplo**

Veja o exemplo abaixo onde o default das transições de `pushTransition` e `modalPresentationStyle` foi modificado:

```swift
let animation = BeagleNavigatorAnimation(
                   pushTransition: .init(
                       type: .fade,
                       subtype: .fromRight,
                       duration: 1.0),
                   modalPresentationStyle: .formSheet)

let dependencies = BeagleDependencies()
dependencies.navigation.defaultAnimation = animation

```

{{% alert color="warning" %}}
Esta configuração se aplica a todas as navegações da sua aplicação.
{{% /alert %}}
