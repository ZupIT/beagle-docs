---
title: Widgets customizados
<<<<<<< HEAD
weight: 147
description: >-
  Nesta seção, você encontra um exemplo de com criar um componente e  um widget
  customizado
=======
weight: 163
description: >-
  This a example for a description
>>>>>>> c5badf6233a50a40ff4638a92338d6a7f613e625
---

---

<<<<<<< HEAD
## Introdução

O Beagle já possui alguns widgets básicos que podem ser usados para alterar a sua aplicação UI através do backend. No entanto, você pode adicionar novos componentes para fazer as views da sua aplicação fiquem "visíveis" ao Beagle e que possam também ser usadas no backend. 

## Como criar componentes \(custom views\) e widgets?

### Passo 1: Criar o Widget

Segue abaixo um exemplo de um componente customizado que representa um UILabel:

```swift
struct MyCustomComponent: ServerDrivenComponent {
    let text: String

    func toView(renderer: BeagleRenderer) -> UIView {
        let label = UILabel(frame: .zero)
        label.text = text
        label.numberOfLines = 0
        return label
    }
}
```

Podemos ver que o `MyCustomComponent` é do tipo `ServerDrivenComponent`, que é um protocolo que conforma com `Decodable` e é responsável por decodificar as propriedades que seu widget expõem ao backend.

### Passo 2: Registrar o Widget

É obrigatório **registrá-lo no Beagle.** Dentro do arquivo de configuração utilize o método **`registerCustomComponent().`** O primeiro parâmetro é uma string que referencia como o seu BFF irá chama-lo e o segundo parâmetro é a classe criada do componente.

```swift
Beagle.registerCustomComponent(
    "MyCustomComponent",
    componentType: MyCustomComponent.self
)
```

Após registrar o seu componente de customização, você pode usá-lo  via server-driven.

### Passo 3: Exibir o Componente

Você pode usar o seu componente declarativamente assim como passá-lo por uma instância até o `BeagleScreenViewController` ou chamá-lo via método `toView()` para apresentar o`UIView` que aparece dentro do seu próprio view controller.

```swift
let beagleScreenViewController = Beagle.screen(
    .declarative(
        .init(child:
            MyCustomComponent(text: "Hello Beagle!")
        )
    )
)
```

Se você usar componentes mais complexos que estejam no  `UIViews` ou outros componentes não mencionados, o processo seria parecido, você apenas precisa providenciar um tipo de `ServerDrivenComponent` ou `Widget`.
=======
undefined
>>>>>>> c5badf6233a50a40ff4638a92338d6a7f613e625
