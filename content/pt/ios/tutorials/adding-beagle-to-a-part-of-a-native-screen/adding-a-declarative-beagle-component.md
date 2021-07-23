---
title: Adicionando um componente Beagle Declarativo
weight: 230
description: >-
  Esta seção descreve como adicionar um componente Declarativo do Beagle a uma
  tela nativa
---

---

## Passo 1: Criar a tela nativa

Nesse exemplo criamos a seguinte `UIViewController`:

```swift
class NativeViewController: UIViewController {

    private lazy var firstLabel = makeLabel(text: "I'm a native UILabel")
    
    private lazy var secondLabel = makeLabel(text: "Another native UILabel")

    private func makeLabel(text: String) -> UILabel {
        let label = UILabel()
        label.text = text
        label.textAlignment = .center
        label.font = .systemFont(ofSize: 25, weight: .semibold)
        label.backgroundColor = UIColor(hex: grayColor)
        return label
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        navigationItem.title = "Beagle Native"
        navigationItem.backBarButtonItem = UIBarButtonItem(
            title: nil, 
            style: .plain, 
            target: nil, 
            action: nil
        )
        setupView()
    }
    
    private func setupView() {
        view.backgroundColor = .white
        
        view.addSubview(firstLabel)
        firstLabel.centerXAnchor.constraint(equalTo: view.centerXAnchor).isActive = true
        firstLabel.topAnchor.constraint(equalTo: topLayoutGuide.bottomAnchor, constant: 50).isActive = true
        
        let layoutMargins = view.layoutMarginsGuide
        
        view.addSubview(secondLabel)
        secondLabel.centerXAnchor.constraint(equalTo: view.centerXAnchor).isActive = true
        secondLabel.topAnchor.constraint(equalTo: beagleView.bottomAnchor, constant: 30).isActive = true
        secondLabel.bottomAnchor.constraint(lessThanOrEqualTo: layoutMargins.bottomAnchor).isActive = true
    }

    private let grayColor = "#EEEEEE"
}
```

## Passo 2: Criar o componente declarativo

Para criar um componente declarativo do Beagle em forma de `UIView` utilizamos o componente **`BeagleView`**, ele pode ser declarado como os componentes nativos criados no passo anterior. Segue um exemplo abaixo com um `Container` que possui um texto e dois botões:

```swift
private lazy var beagleView = BeagleView(Container(
        widgetProperties: .init(style: Style()
            .backgroundColor(grayColor)
            .margin(.init(all: 20))
            .padding(.init(all: 10))
        )
    ) {
        Text(
            "These buttons are rendered by Beagle",
            widgetProperties: .init(style: .init(
                margin: .init(bottom: 10),
                flex: Flex().alignSelf(.center)
            ))
        )
        Button(
            text: "I'm a server-driven button",
            onPress: [
                Alert(
                    title: "Server-driven button", 
                    message: "I'm a server-driven button"
                )
            ]
        )
        Button(
            text: "Navigate to Navigator",
            onPress: [Navigate.openNativeRoute(.init(route: .navigateStep1Endpoint))]
        )
    })
```

## Passo 3: Adicionar o componente na tela

O BeagleView pode ser adicionado como a `UIView` , nesse exemplo foi usado o método `addSubview()` para adicionar este componente na tela.

Segue abaixo o método `setupView()` que é responsável por adicionar e ancorar os componentes da tela:

```swift
private func setupView() {
        view.backgroundColor = .white
        
        view.addSubview(firstLabel)
         irstLabel.centerXAnchor.constraint(equalTo: view.centerXAnchor).isActive = true
        firstLabel.topAnchor.constraint(equalTo: topLayoutGuide.bottomAnchor, constant: 50).isActive = true
        
        let layoutMargins = view.layoutMarginsGuide
        
        view.addSubview(beagleView)
        beagleView.translatesAutoresizingMaskIntoConstraints = false
        beagleView.topAnchor.constraint(equalTo: firstLabel.bottomAnchor, constant: 50).isActive = true
        beagleView.leadingAnchor.constraint(greaterThanOrEqualTo: layoutMargins.leadingAnchor).isActive = true
        beagleView.trailingAnchor.constraint(lessThanOrEqualTo: layoutMargins.trailingAnchor).isActive = true
        beagleView.centerXAnchor.constraint(equalTo: firstLabel.centerXAnchor).isActive = true
                
        view.addSubview(secondLabel)
        secondLabel.centerXAnchor.constraint(equalTo: view.centerXAnchor).isActive = true
        secondLabel.topAnchor.constraint(equalTo: beagleView.bottomAnchor, constant: 30).isActive = true
        secondLabel.bottomAnchor.constraint(lessThanOrEqualTo: layoutMargins.bottomAnchor).isActive = true
    }
```

E pronto. Basta inicializar a sua aplicação e a tela declarativa será renderizada nativamente.
