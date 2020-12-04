---
title: Beagle View
weight: 145
description: >-
  Nesta seção, você encontra informações do Beagle View para iOS e de como
  usá-lo.
---

---

## Introdução

Beagle View é uma `UIView` que deve ser usada quando é necessário adicionar um componente do Beagle em uma tela nativa que possui outras `views` e usam `AutoLayout`.

## Usando uma Beagle View

### Criando um AutoLayout

Segue abaixo um layout nativo que será usado para exemplificar o uso do `AutoLayout` junto com o Beagle:

```swift
struct AutoLayoutComponent: ServerDrivenComponent {
    var widgetProperties: WidgetProperties = WidgetProperties()
    
    func toView(renderer: BeagleRenderer) -> UIView {
        return AutoLayoutWrapper(view: AutoLayoutSample())
    }
}

class AutoLayoutSample: UIView {
    let constraintView: UIView
    let heightConstraint: NSLayoutConstraint
    
    override init(frame: CGRect) {
        let view = UIView()
        self.constraintView = view
        self.heightConstraint = view.heightAnchor.constraint(equalToConstant: 100)
        super.init(frame: frame)
        
        backgroundColor = .yellow
        layer.borderWidth = 1
        layer.borderColor = UIColor.black.cgColor
        
        view.backgroundColor = .cyan
        addSubview(view)
        
        translatesAutoresizingMaskIntoConstraints = false
    
        let label = UILabel()
        label.text = "AUTO"
        addSubview(label)
        label.translatesAutoresizingMaskIntoConstraints = false
        label.leadingAnchor.constraint(equalTo: leadingAnchor, constant: 5).isActive = true
        label.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -5).isActive = true
        label.topAnchor.constraint(equalTo: topAnchor, constant: 5).isActive = true
        
        view.translatesAutoresizingMaskIntoConstraints = false
        view.leadingAnchor.constraint(equalTo: leadingAnchor, constant: 5).isActive = true
        view.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -5).isActive = true
        view.topAnchor.constraint(equalTo: label.bottomAnchor, constant: 5).isActive = true
        view.widthAnchor.constraint(equalToConstant: 50).isActive = true
        heightConstraint.isActive = true
        
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}
```

### Criando uma BeagleView

Uma BeagleView pode ser criada como uma `UIView`. Segue um exemplo abaixo de uma `ViewController` com um container que possui um texto e um botão:

```swift
class CustomViewController: UIViewController {
    
    private lazy var beagleView = BeagleView(
        Container(
            widgetProperties: WidgetProperties(
                id: "container", 
                style: Style().backgroundColor("#D3D3D3")
                    .margin(EdgeValue(all: 5))
                    .padding(EdgeValue(all: 5))
                    .flex(Flex().flexWrap(.wrap)))
        ) {
            Text("YOGA")
            Button(
                text: "ADD", 
                onPress: [AddChildren(componentId: "container", value: [AutoLayoutComponent()])]
            )
            AutoLayoutComponent()
        }
    )
    
    override func viewDidLoad() {
        super.viewDidLoad()
        navigationItem.title = "BeagleView"
        setupView()
    }
    
    private func setupView() {
        view.backgroundColor = .white
        let margin = view.layoutMarginsGuide
        
        view.addSubview(beagleView)
        beagleView.translatesAutoresizingMaskIntoConstraints = false
        beagleView.topAnchor.constraint(equalTo: margin.topAnchor).isActive = true
        beagleView.leadingAnchor.constraint(equalTo: margin.leadingAnchor).isActive = true
        beagleView.trailingAnchor.constraint(lessThanOrEqualTo: margin.trailingAnchor).isActive = true
        beagleView.bottomAnchor.constraint(lessThanOrEqualTo: margin.bottomAnchor).isActive = true
    }
}
```

Note que no `onPress` do botão é chamado um método `AddChildren` que adiciona o layout nativo, ou seja, toda vez que o botão for clicado é adicionado uma `view` com o layout nativo.
