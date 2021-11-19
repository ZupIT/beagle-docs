---
title: Widget Customizado
weight: 3
description: Aqui voce aprenderá como criar e utilizar um widget no Beagle
---

**Requisitos:**
 - Ter um projeto já configurado com o Beagle.

## Introdução

O Beagle já possui alguns widgets básicos que podem ser usados para alterar a sua aplicação UI através do backend. No entanto, você pode adicionar novos componentes para fazer as views da sua aplicação fiquem "visíveis" ao Beagle e que possam também ser usadas no backend. 

{{% alert color="info" %}}
Para saber mais [**Widgets padrões do Beagle**]({{< ref path="/api/components/overview" lang="pt" >}}).
{{% /alert %}}

### Passo 1: Criar o componente customizado.

Abaixo temos a definição da classe do componente Box. Criada com view code em swift e possui um parâmetro title, e um evento de tap.

```swift
import UIKit

class Box: UIView {
    
    // Class parameter.
    private var title: String
    
    // Initialization part of the class.
    public init(title: String) {
        self.title = title
        super.init(frame: .zero)
        setupView()
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    // Method to add component to hierarchy and pass position.
    private func setupView() {
        addSubview(label)
        
        label.text = title
        label.topAnchor.constraint(equalTo: topAnchor).isActive = true
        label.leadingAnchor.constraint(equalTo: leadingAnchor).isActive = true
        label.trailingAnchor.constraint(equalTo: trailingAnchor).isActive = true
        label.bottomAnchor.constraint(equalTo: bottomAnchor).isActive = true
    }
    
    // Component `UILabel` created.
    private lazy var label: UILabel = {
        let label = UILabel()
        label.font = .systemFont(ofSize: 20, weight: .bold)
        label.backgroundColor = .red
        label.textAlignment = .center
        label.textColor = .white
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
}
```


### Passo 2: Criar o Widget.

Para fazer seu componente ser visivel para o beagle basta criar uma struct e implementar a interface `Widget` que é um protocolo que conforma com `Codable`, sendo assim responsavel por decodificar e codificar as propriedades que o widget expõem ao backend, para conformar com o protocolo é preciso adicionar as propriedades `id: String?`, `style: Style?`, `accessibility: Accessibility?` e implementar o método **toView**.

Agora com o componente `Box` crie uma struct BoxWidget adotando protocolo `Widget`.

 * **id:** Identificador do componente

 * **style:** Atributos de estilização do componente.

 * **accessibility:** Atributos de acessibilidade do componente.

 * **toView:** Método que retorna a view do componente criado.

Temos a estrutura da struct `BoxWidget` com os parâmetros `title`, `widgetProperties`, `style`, `accessibility`, no método **toView** o componente `Box` estanciado passando o parâmetro `title`.

```swift
import Foundation
import UIKit
import Beagle

struct BoxWidget: Widget {

    // Class parameter.
    let title: String
    
    public var id: String?
    public var style: Style?
    public var accessibility: Accessibility?
    
    // toView method of interface the widget.
    func toView(renderer: BeagleRenderer) -> UIView {
        let boxComponent = Box(title: title)

        return boxComponent
    }
}
```

Para integrar o componente ao beagle é preciso utilizar o `sizeThatFits` ou `AutoLayoutWrapper`. 

{{< tabs id="T1" >}}
{{% tab name="AutoLayoutWrapper" %}}

### AutoLayoutWrapper

**`AutoLayoutWrapper:`** O objeto calcula o tamanho levando em consideração as contraints do componente.
Para isso basta adicionar a view do componente dentro do `AutoLayoutWrapper`.

Fazendo as configurações com o `AutoLayoutWrapper`.

```swift 
let beagleWrapper = AutoLayoutWrapper(view: boxComponent)
```

Abaixo a struct completa do Widget com os passos:

* Adotar a interface `Widget`.
* Instanciar o componente Box.
* Usar o `AutoLayoutWrapper` na struct do BoxWidget.

```swift
import Foundation
import UIKit
import Beagle

struct BoxWidget: Widget {

    // Class parameter.
    let title: String
    
    public var id: String?
    public var style: Style?
    public var accessibility: Accessibility?

    // toView method of interface the  widget.
    func toView(renderer: BeagleRenderer) -> UIView {

        // Native component declaration.
        let boxComponent = Box(title: title)

        // Setting the beagle wrapper.
        boxComponent.translatesAutoresizingMaskIntoConstraints = false
        let beagleWrapper = AutoLayoutWrapper(view: boxComponent)
        
        // Returning BeagleWrapper and component.
        return beagleWrapper
    }
}
```

{{% /tab %}}
{{% tab name="SizeThatFits" %}}

### SizeThatFits

**`sizeThatFits:`** Método para implementar sua lógica de tamanho, usado na classe do componente customizado.


```swift
override func sizeThatFits(_ size: CGSize) -> CGSize {
    systemLayoutSizeFitting(size)
}
```

{{% /tab %}}
{{< /tabs >}}

### Passo 3: Registrar o Widget.

Por fim precisamos registrar nosso widget customizado no Beagle.

Logo, para **registrá-lo no Beagle.** basta chamar a função de registro do Coder (Dependência publica do Beagle) durante o processo de configuração do ambiente do Beagle.

{{% alert color="info" %}}
Para saber mais sobre o dependencies. [**Beagle Dependencies**]({{< ref path="" lang="pt" >}}).
{{% /alert %}}

O método `register` pode ser chamado passando somente o tipo do componente, ou também um nome customizado para identifica-lo.

* **type:** Tipo do component.

* **named:** Parâmetro para setar o nome do componente. Não é obrigatório passar. Um caso é quando o nome do componente é registrado diferente com que você criou no backend. Ele será usado na deserialização para encontrar seu componente.

**Maneiras de Registrar**
```swift
// 1º maneira.
coder.register(type: BoxWidget.self)
```

```swift
// 2º maneira.
coder.register(type: BoxWidget.self, named: "BoxWidgetComponent")
```

{{% alert color="warning" %}}
Após registrar, não esqueça que para usar seu componente no backend ele tambem tem que ser registrado no seu BFF(Backend for Frontend).

Caso queira entender sobre BFF [**click aqui**]({{< ref path="" lang="pt" >}})
{{% /alert %}}

Exemplo renderizado:

![](/shared/custom-component-box-ios.png)

## Casos especiais

### Componentes que expõe eventos

Em casos em que o componente customizado contém eventos de interação com o usuario basta expor esses eventos no Widget do componente. Então suponhamos que o BoxComponent agora tem que lidar com um evento de touch:

```swift
import Foundation
import UIKit
import Beagle

struct BoxWidget: Widget {

    // Class parameter.
    let title: String
    @AutoCodable
    let onTouch: [Action]?
    
    public var id: String?
    public var style: Style?
    public var accessibility: Accessibility?
    
    // toView method of interface the widget.
    func toView(renderer: BeagleRenderer) -> UIView {
        let boxComponent = Box(title: title)
        boxComponent.onTouch = {
            renderer.controller?.execute(actions: onTouch, event: "onTouch", origin: boxComponent)
        }

        return boxComponent
    }
}
```

Passo 1: adicionamos o atributo `let onTouch: [Action]?` que consiste em uma lista de ações que serão executadas a partir do evento de touch.

Passo 2: supondo que o componente nativo ultilize closures para tratar eventos, então atribuimos uma closure para o evento `onTouch` que chama o método `execute` passando a lista de ações: `renderer.controller?.execute(actions: onTouch, event: "onTouch", origin: boxComponent)`

{{% alert color="warning" %}}
Ultilize a anotação `@AutoCodable` nas propriedades do tipo `Action` ou `ServerDrivenComponent` (sejam elas listas ou opcionais), para que o swift consiga sintetizar o inicializador `init(from decoder: Decoder)`.

Em termos técnicos, o `AutoCodable` é um property wrapper que implementa a lógica de serialização e deserialização polimórfica dos tipos genéricos do Beagle, dessa forma, não precisamos implementar o `init(from decoder: Decoder)`, uma vez que, agora o Swift consegue sintetiza-lo, já que todas as propriedades do nosso widget conformam com Codable.
{{% /alert %}}

### Componentes que encapsulam outros componentes

Em casos em que nosso componente customizado recebe outro componente para adiciona-lo como subview filha, basta adicionar um atributo no nosso widget que corresponde a esse componente filho.

Então supondo que nosso component Box agora receba uma `UIView` que será adicionada em sua hierarquia de views:

```
struct BoxWidget: Widget {

    // Class parameter.
    let title: String
    @AutoCodable
    let child: ServerDrivenComponent
    
    public var id: String?
    public var style: Style?
    public var accessibility: Accessibility?
    
    // toView method of interface the widget.
    func toView(renderer: BeagleRenderer) -> UIView {
        let child: UIView = BeagleView(child)
        child.translatesAutoresizingMaskIntoConstraints = false

        let boxComponent = Box(title: title, child: child)

        return boxComponent
    }
}
```

Passo 1: adicionamos o atributo `let child: ServerDrivenComponent` que será o componente Server Driven.

Passo 2: transformamos o componente server driven em uma UIView, a partir da classe BeagleView: `let child: UIView = BeagleView(child)`

Passo 3: agora que temos a UIView passamos ela no inicializador do componente Box: `Box(title: title, child: child)`