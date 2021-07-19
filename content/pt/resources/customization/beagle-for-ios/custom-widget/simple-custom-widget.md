---
title: Widget Customizado Simples
weight: 159
description: Nesta seção, você encontra como criar e utilizar um widget no Beagle.
---

## Introdução

O Beagle já possui alguns widgets básicos que podem ser usados para alterar a sua aplicação UI por meio do backend. No entanto, você pode adicionar novos componentes para fazer com que as views da sua aplicação sejam "visíveis" ao Beagle e que possam também ser usadas no backend. 

### Passo 1: Criar o componente nativo

Veja abaixo a definição da classe do componente Box:

```swift
import Foundation
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


### Passo 2: Criar o Widget

Para transformar o componente `Box` em um componente Beagle, adote o protocolo  Widget`. Esse protocolo é de acordo com com o `Decodable` e é responsável por decodificar as propriedades que seu widget expõem ao backend.

1. Crie uma struct BoxWidget com protocolo `Widget`;
2. A interface widget irá adicionar a property de **widgetProperties** e o método **toView**.

 * **widgetProperties:** A propriedade de aplicar estilo, id e acessibilidade.

 * **toView:** Método para retornar a view do componente criado.

Agora tem a estrutura do `BoxWidget` com os parâmetros `title` e `widgetProperties` e o componente `Box` criado no método `toView`.

```swift
import Foundation
import UIKit
import Beagle

struct BoxWidget: Widget {

    // Class parameter.
    let title: String
    var widgetProperties: WidgetProperties
    
    // toView method of interface the  widget.
    func toView(renderer: BeagleRenderer) -> UIView {
        let boxComponent = Box(title: title)

    }
}
```

Crie a parte de inicialização e decodificação do componente, tem duas maneiras possíveis usando o `sourcery`:
1. Com o gerador de código para a linguagem Swift;
2.  Manualmente.

**Sourcery:**

Para usar o `Sourcery`, veja mais informações na seção [**Sourcery**]({{< ref path="/resources/customization/beagle-for-ios/sourcery" lang="pt" >}})

**Manual:**

Para fazer manualmente: 
1. Crie o init e a decodificação dos parâmetros `title` e `widgetProperties` da struct `BoxWidget`.
2. O widgetProperties tem sua própria parte decodificação, passe o decoder para o objeto `WidgetProperties`.

```swift

// Initialization part of the class.
public init(
    title: String,
    widgetProperties: WidgetProperties = WidgetProperties()
) {
    self.title = title
    self.widgetProperties = widgetProperties
}

// Enum with parameters for decoding.
enum CodingKeys: String, CodingKey {
    case title
}

// Initialization for decoding
public init(from decoder: Decoder) throws {
    let container = try decoder.container(keyedBy: CodingKeys.self)

    title = try container.decode(String.self, forKey: .title)
    widgetProperties = try WidgetProperties(from: decoder)
}
```

Integre o componente ao Beagle usando o `sizeThatFits` ou `AutoLayoutWrapper`. 

{{< tabs id="T0" >}}
{{% tab name="AutoLayoutWrapper" %}}


### AutoLayoutWrapper

**`AutoLayoutWrapper:`** O objeto calcula o tamanho levando em consideração as restrições do componente.
Para isso:
1. Desabilite o `translatesAutoresizingMaskIntoConstraints` da view do componente;
2. Adicione a view do componente dentro do `AutoLayoutWrapper`.
3. Faça as configurações com o `AutoLayoutWrapper`:

Fazendo as configurações com o `AutoLayoutWrapper`.

```swift 
boxComponent.translatesAutoresizingMaskIntoConstraints = false
let beagleWrapper = AutoLayoutWrapper(view: boxComponent)
```

Veja a classe completa do Widget:

```swift
import Foundation
import UIKit
import Beagle

struct BoxWidget: Widget {

    // Class parameter.
    let title: String
    var widgetProperties: WidgetProperties
    
    // Initialization part of the class.
    public init(
        title: String,
        widgetProperties: WidgetProperties = WidgetProperties()
    ) {
        self.title = title
        self.widgetProperties = widgetProperties
    }

    // Enum with parameters for decoding.
    enum CodingKeys: String, CodingKey {
        case title
    }

    // Initialization for decoding
    public init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)

        title = try container.decode(String.self, forKey: .title)
        widgetProperties = try WidgetProperties(from: decoder)
    }
    
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

**`sizeThatFits:`** Método para implementar a lógica de tamanho usado na classe do componente customizado.


```swift
override func sizeThatFits(_ size: CGSize) -> CGSize {
    systemLayoutSizeFitting(size)
}
```

A classe do componente customizado com `sizeThatFits` implementado.

```swift
import Foundation
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

    // Implementation sizeThatFits
    override func sizeThatFits(_ size: CGSize) -> CGSize {
        systemLayoutSizeFitting(size)
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

Classe completa do Widget.

```swift
import Foundation
import UIKit
import Beagle

struct BoxWidget: Widget {

    // Class parameter.
    let title: String
    var widgetProperties: WidgetProperties
    
    // Initialization part of the class.
    public init(
        title: String,
        widgetProperties: WidgetProperties = WidgetProperties()
    ) {
        self.title = title
        self.widgetProperties = widgetProperties
    }

    // Enum with parameters for decoding.
    enum CodingKeys: String, CodingKey {
        case title
    }

    // Initialization for decoding
    public init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)

        title = try container.decode(String.self, forKey: .title)
        widgetProperties = try WidgetProperties(from: decoder)
    }
    
    // toView method of interface the  widget.
    func toView(renderer: BeagleRenderer) -> UIView {

        // Native component declaration.
        let boxComponent = Box(title: title)
        
        // Returning BeagleWrapper and component.
        return boxComponent
    }
}
```

{{% /tab %}}
  {{< /tabs >}}

### Passo 3: Registrar o Widget

É obrigatório **registrar o Widget no Beagle.** Dentro do arquivo de configuração utilize o **`dependencies`** para registar. 

{{% alert color="info" %}}
Para saber mais sobre o dependencies. [**Beagle Dependencies**]({{< ref path="/resources/customization/beagle-for-ios/beagles-dependencies" lang="pt" >}}).
{{% /alert %}}

O método `register` possui dois construtores, o primeiro passando apenas o `component` e segundo recebendo o `component` e `named`.

* **component:** Passa a classe do componente.

* **named:** Parâmetro para setar o nome do componente. Não é obrigatório passar. Um caso é quando o nome do componente é registrado diferente com que você criou no backend. Ele será usado na deserializações para encontrar seu componente.

**Maneiras de Registrar**
```swift
// 1
dependencies.decoder.register(component: BoxWidget.self)

// 2
dependencies.decoder.register(component: BoxWidget.self, named: "BoxWidgetComponent")
```

Após registrar o seu componente de customização, você pode usá-lo  via server-driven.

### Passo 4: Exibir o Componente

Você pode usar o seu componente declarativamente, passá-lo por uma instância até o `BeagleScreenViewController` ou chamá-lo via método `toView()` para apresentar o`UIView` que aparece dentro do seu próprio view controller.

```swift
let beagleScreenViewController = Beagle.screen(
    .declarative(
        .init(child:
            BoxWidget(title: "Title my box!")
        )
    )
)
```

{{% alert color="info" %}}
Para saber mais como exibir o Componente. [**Como exibir uma tela**]({{< ref path="/get-started/using-beagle/ios" lang="pt" >}}).
{{% /alert %}}

Exemplo renderizado:

![](/shared/custom-component-box-ios.png)

Se você usar componentes mais complexos no  `UIViews` ou outros componentes não mencionados, o processo é parecido.
