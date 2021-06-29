---
title: Widget Customizado com ServerDrivenComponent
weight: 159
description: Criando um widget customizado com ServerDrivenComponent
---

## Como criar? 

Siga os passos abaixo para criar componentes que recebem um `ServerDrivenComponent`.

**`ServerDrivenComponent:`** São todos os componentes default e registrados no Beagle. 

{{% alert color="info" %}}
Para saber mais sobre como criar um componente veja, [**Widget Customizado Simples**]({{< ref path="/resources/customization/beagle-for-ios/custom-widget/simple-custom-widget" lang="pt" >}}).
{{% /alert %}}

### Passo 1: Criar o componente Customizado

Veja abaixo a definição da classe do componente customizado **ContainerTitle** que recebe os parâmetros **title** e **child**.

**Parâmetros:**

**`title`**: Parâmetro do tipo `String`, representa o título do componente.

**`child`**: Parâmetro do tipo `UIView`, representa o view que o componente encapsula.


```swift
import Foundation
import UIKit

class ContainerTitle: UIView {
    
    // Class initialization.
    public init(title: String, child: UIView) {
        super.init(frame: .zero)
        setupView(child: child, title: title)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    // Adds the component to the hierarchy and the position to the Superview.
    private func setupView(child: UIView, title: String) {
        addSubview(label)
        label.text = title
        label.topAnchor.constraint(equalTo: topAnchor).isActive = true
        label.leadingAnchor.constraint(equalTo: leadingAnchor, constant: 10).isActive = true
        label.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -10).isActive = true
        
        addSubview(child)
        child.topAnchor.constraint(equalTo: label.bottomAnchor).isActive = true
        child.leadingAnchor.constraint(equalTo: leadingAnchor, constant: 10).isActive = true
        child.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -10).isActive = true
        child.bottomAnchor.constraint(equalTo: bottomAnchor, constant: -10).isActive = true
        child.backgroundColor = .systemOrange
    }

    // Creates component 'UILabel'
    private lazy var label: UILabel = {
        let label = UILabel()
        label.font = .systemFont(ofSize: 20, weight: .bold)
        label.backgroundColor = .orange
        label.textAlignment = .center
        label.textColor = .white
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
}
```


### Passo 2: Criar o Widget

Agora é o componente `ContainerTitle`, para trasformá-lo em um componente Beagle, adote o protocolo `Widget`, que é compatível com o `Decodable` e é responsável por decodificar as propriedades que seu widget expõem no backend.

1. Crie uma estrutura **ContainerTitleWidget** adotando protocolo `Widget`. A interface widget irá adicionar a property de **widgetProperties** e o método **toView**.

 * **widgetProperties:** A propriedade de aplicar estilo, id e acessibilidade.

 * **toView:** Método para retornar a view do componente criado.

2. A estrutura do `ContainerTitleWidget` com os parâmetros `title`, `child` e `widgetProperties` e o componente `ContainerTitle` criado no método `toView`.

3. Para exibir o componente recebido, utilize a `BeagleView`, logo a mesma retorna uma `UIView`. Para usar no meio do autoLayout é preciso desabilitar o `translatesAutoresizingMaskIntoConstraints` da view.

```swift
import Foundation
import UIKit
import Beagle

struct ContainerTitleWidget: Widget {
    
    // Class parameter.
    let title: String
    var child: ServerDrivenComponent
    var widgetProperties: WidgetProperties
    
    // toView method of interface the  widget.
    func toView(renderer: BeagleRenderer) -> UIView {
        
        // BeagleView declaration.
        let child = BeagleView(child)
        child.translatesAutoresizingMaskIntoConstraints = false
        
         // Custom component declaration.
        let containerTitle = ContainerTitle(title: title, child: child)
        
    }
}
```

Crie a parte de inicialização e decodificação do componente e você pode fazer isso de duas formas: 
1. Usando o `sourcery` gerador de código para a linguagem Swift.

2. Você pode fazer manualmente. 

**Sourcery:**

Para saber mais sobre como usar o `Sourcery`, acesse a seção [**Sourcery do Beagle**]({{< ref path="/resources/customization/beagle-for-ios/sourcery" lang="pt" >}})

**Manual:**

Manualmente, crie o init e a decodificação dos parâmetros **`title`** e **`widgetProperties`** da struct `BoxWidget`.
O widgetProperties tem a sua própria parte decodificação, então é preciso apenas passar o decoder para o objeto `WidgetProperties`.

```swift

    // Initialization part of the class.
    init(
        title: String,
        child: ServerDrivenComponent,
        widgetProperties: WidgetProperties = WidgetProperties()
    ) {
        self.title = title
        self.child = child
        self.widgetProperties = widgetProperties
    }
    
    // Enum with parameters for decoding.
    enum CodingKeys: String, CodingKey {
        case title
        case child
    }

    // Initialization for decoding
    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)

        title = try container.decode(String.self, forKey: .title)
        child = try container.decode(forKey: .child)
        widgetProperties = try WidgetProperties(from: decoder)
    }
```

Para integrar o componente ao beagle é preciso utilizar o `sizeThatFits` ou `AutoLayoutWrapper`. 

{{< tabs id="T0" >}}
{{% tab name="AutoLayoutWrapper" %}}


### AutoLayoutWrapper

**`AutoLayoutWrapper:`** O objeto calcula o tamanho levando em consideração as contraints do componente.
Para isso primeiro é preciso desabilitar o `translatesAutoresizingMaskIntoConstraints` da view do componente, e depois adicionar a view do componente dentro do `AutoLayoutWrapper`.

Fazendo as configurações com o `AutoLayoutWrapper`.

```swift 
    containerTitle.translatesAutoresizingMaskIntoConstraints = false
    let beagleWrapper = AutoLayoutWrapper(view: containerTitle)
```

Classe completa do Widget.

```swift
import Foundation
import UIKit
import Beagle

struct ContainerTitleWidget: Widget {
    
    // Class parameter.
    let title: String
    var child: ServerDrivenComponent
    var widgetProperties: WidgetProperties
    
    // Initialization part of the class.
    init(
        title: String,
        child: ServerDrivenComponent,
        widgetProperties: WidgetProperties = WidgetProperties()
    ) {
        self.title = title
        self.child = child
        self.widgetProperties = widgetProperties
    }
    
    // Enum with parameters for decoding.
    enum CodingKeys: String, CodingKey {
        case title
        case child
    }

    // Initialization for decoding
    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)

        title = try container.decode(String.self, forKey: .title)
        child = try container.decode(forKey: .child)
        widgetProperties = try WidgetProperties(from: decoder)
    }
    
    // toView method of interface the  widget.
    func toView(renderer: BeagleRenderer) -> UIView {

        // BeagleView declaration.
        let child = BeagleView(child)
        child.translatesAutoresizingMaskIntoConstraints = false
        
        // Custom component declaration.
        let containerTitle = ContainerTitle(title: title, child: child)
        
        // Setting the beagle wrapper.
        containerTitle.translatesAutoresizingMaskIntoConstraints = false
        let beagleWrapper = AutoLayoutWrapper(view: containerTitle)
        
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

A classe do componente customizado com `sizeThatFits` implementado.

```swift
import Foundation
import UIKit

class ContainerTitle: UIView {
    
    // Initialization part of the class.
    public init(title: String, child: UIView) {
        super.init(frame: .zero)
        setupView(child: child, title: title)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    // Implementation sizeThatFits
    override func sizeThatFits(_ size: CGSize) -> CGSize {
        systemLayoutSizeFitting(size)
    }

    // Method to add component to hierarchy and pass position.
    private func setupView(child: UIView, title: String) {
        addSubview(label)
        label.text = title
        label.topAnchor.constraint(equalTo: topAnchor).isActive = true
        label.leadingAnchor.constraint(equalTo: leadingAnchor, constant: 10).isActive = true
        label.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -10).isActive = true
        
        addSubview(child)
        child.topAnchor.constraint(equalTo: label.bottomAnchor).isActive = true
        child.leadingAnchor.constraint(equalTo: leadingAnchor, constant: 10).isActive = true
        child.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -10).isActive = true
        child.bottomAnchor.constraint(equalTo: bottomAnchor, constant: -10).isActive = true
        child.backgroundColor = .systemOrange
    }

    // Component `UILabel` created.
    private lazy var label: UILabel = {
        let label = UILabel()
        label.font = .systemFont(ofSize: 20, weight: .bold)
        label.backgroundColor = .orange
        label.textAlignment = .center
        label.textColor = .white
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
}
```

Classe completa do Widget.

```swift
import Foundation
import UIKit
import Beagle

struct ContainerTitleWidget: Widget {
    
    // Class parameter.
    let title: String
    var child: ServerDrivenComponent
    var widgetProperties: WidgetProperties
    
    // Initialization part of the class.
    init(
        title: String,
        child: ServerDrivenComponent,
        widgetProperties: WidgetProperties = WidgetProperties()
    ) {
        self.title = title
        self.child = child
        self.widgetProperties = widgetProperties
    }
    
    // Enum with parameters for decoding.
    enum CodingKeys: String, CodingKey {
        case title
        case child
    }

    // Initialization for decoding
    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)

        title = try container.decode(String.self, forKey: .title)
        child = try container.decode(forKey: .child)
        widgetProperties = try WidgetProperties(from: decoder)
    }
    
    // toView method of interface the  widget.
    func toView(renderer: BeagleRenderer) -> UIView {

        // BeagleView declaration.
        let child = BeagleView(child)
        child.translatesAutoresizingMaskIntoConstraints = false
        
        // Custom component declaration.
        let containerTitle = ContainerTitle(title: title, child: child)
        
        return beagleWcontainerTitlerapper
    }
}
```

{{% /tab %}}
  {{< /tabs >}}

### Passo 3: Registrar o Widget.

É obrigatório **registrá-lo no Beagle.** Dentro do arquivo de configuração do beagle utilize o `dependencies` para registar. 

{{% alert color="info" %}}
Para saber mais sobre o dependencies. [**Beagle Dependencies**]({{< ref path="/resources/customization/beagle-for-ios/beagles-dependencies" lang="pt" >}}).
{{% /alert %}}

O método `register` possui dois construtores, o primeiro passando apenas o `component` e segundo recebendo o `component` e `named`.

* **component:** Passa a classe do componente.

* **named:** Parâmetro para setar o nome do componente. Não é obrigatório passar. Um caso é quando o nome do componente é registrado diferente com que você criou no backend. Ele será usado na deserializações para encontrar seu componente.

**Maneiras de Registrar**
```swift
// 1
dependencies.decoder.register(component: ContainerTitleWidget.self)

// 2
dependencies.decoder.register(component: ContainerTitleWidget.self, named: "ContainerTitleWidgetComponent")
```

Após registrar o seu componente de customização, você pode usá-lo  via server-driven.

### Passo 4: Exibir o Componente.

Você pode usar o seu componente declarativamente assim como passá-lo por uma instância até o `BeagleScreenViewController` ou chamá-lo via método `toView()` para apresentar o`UIView` que aparece dentro do seu próprio view controller.

```swift
let beagleScreenViewController = Beagle.screen(
    .declarative(
        .init(child:
            ContainerTitleWidget(
                    title: "Title",
                    child: Container {
                        Text("Label 1")
                        Text("Label 2")
                    }
                )
        )
    )
)
```

{{% alert color="info" %}}
Para saber mais como exibir o Componente. [**Como exibir uma tela**]({{< ref path="/get-started/using-beagle/ios" lang="pt" >}}).
{{% /alert %}}

Exemplo renderizado:

![](/shared/custom-component-servendrivencomponent.png)

Se você usar componentes mais complexos que estejam no  `UIViews` ou outros componentes não mencionados, o processo seria parecido.
