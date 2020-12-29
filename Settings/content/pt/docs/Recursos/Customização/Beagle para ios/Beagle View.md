---
title: Beagle View
weight: 145
description: >-
  Nesta seção, você encontra informações do Beagle View e de como
  usá-la.
---

---

## Introdução

Beagle View é uma `UIView` que deve ser usada quando é necessário adicionar um componente do Beagle em uma tela nativa que possui outras `views` e usam `AutoLayout`.

 Com a `BeagleView` pode inicializar com o **component** ou **screenType**.

**Component:** Recebe um componente de modo declarativo.

**ScreenType:** Permite inicializar de três formas:

* `Remote:` Recebe a URL da sua tela ou componente server-driven. Pode-se configurar um fallback opcional, que seria uma tela no modo declarativo caso houvesse algum erro com sua tela server-driven. A configuração de header também pode ser feita através do parâmetro additionalData.

* `Declarative:` Recebe uma tela de modo declarativo.

* `DeclarativeText:` Recebe o json de uma tela.

```swift
public class BeagleView: UIView {
    // MARK: - Initialization
    
    public convenience init(_ component: ServerDrivenComponent) {
        self.init(.declarative(component.toScreen()))
    }
    
    public convenience init(_ screenType: ScreenType) {
            self.init(viewModel: .init(screenType: screenType))
    }
    
}

```

## Usando uma Beagle View

Segue abaixo um layout nativo que será usado para exemplificar o uso do `AutoLayout` junto com o Beagle:

Começa criando um `UIViewController`.

```swift 
Class BeagleViewViewController: UIViewController {

    // MARK: Init
    required init(path: String, data: [String: String]?) {
        super.init(nibName: nil, bundle: nil)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
    
    }
}
```

Agora vamos criar um text nativo utilizando o `UILabel` e posicionar usando o `AutoLayout`.


```swift 
private lazy var titleScreen: UILabel = {
        let label = UILabel()
        label.text = "I'm a native screen"
        label.numberOfLines = 0
        label.textAlignment = .center
        label.font = .systemFont(ofSize: 25, weight: .bold)
        return label
}()

private func setupLabel() {
    view.addSubview(titleScreen)
    titleScreen.translatesAutoresizingMaskIntoConstraints = false
    titleScreen.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 5).isActive = true
    titleScreen.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -5).isActive = true
    if #available(iOS 11.0, *) {
        titleScreen.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 5).isActive = true
    } else {
        titleScreen.topAnchor.constraint(equalTo: view.topAnchor, constant: 5).isActive = true
    }
}
```

Agora colocamos dois exemplos de `BeagleView` um iniciando com o **declarative** e outro no modo **Remote**.

* 1-> `BeagleView` declarative com texto do Beagle, utilizando o `AutoLayout` com o metodo **setupDeclarative**.
* 2-> `BeagleView` remote passando uma URL, utilizando o `AutoLayout` com o metodo **setupRemote**.


```swift 
// 1   
private lazy var beagleViewDeclarative = BeagleView(
    Text("I'm a beagle text")
)

// 2 
private lazy var beagleViewRemote = BeagleView(
    .remote(.init(url: "your URL"))
)

private func setupDeclarative() {
    view.addSubview(beagleViewDeclarative)
    beagleViewDeclarative.translatesAutoresizingMaskIntoConstraints = false
    beagleViewDeclarative.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 5).isActive = true
    beagleViewDeclarative.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -5).isActive = true
    beagleViewDeclarative.topAnchor.constraint(equalTo: titleScreen.bottomAnchor, constant: 5).isActive = true
}

private func setupRemote() {
    view.addSubview(beagleViewRemote)
    beagleViewRemote.translatesAutoresizingMaskIntoConstraints = false
    beagleViewRemote.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 5).isActive = true
    beagleViewRemote.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -5).isActive = true
    beagleViewRemote.topAnchor.constraint(equalTo: beagleViewDeclarative.bottomAnchor, constant: 5).isActive = true
}
```

Segue em exemplo o `BeagleViewViewController`completo. 

```swift
import UIKit
import Beagle

class BeagleViewViewController: UIViewController {

    // MARK: Init
    required init(path: String, data: [String: String]?) {
        super.init(nibName: nil, bundle: nil)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupDeclarative()
        setupRemote()
        setupLabel()
    }
    
    // 1
    private lazy var beagleViewDeclarative = BeagleView(
        Text("I'm a beagle text")
    )

    // 2
    private lazy var beagleViewRemote = BeagleView(
        .remote(.init(url: "your URL"))
    )

    private lazy var titleScreen: UILabel = {
            let label = UILabel()
            label.text = "I'm a native screen"
            label.numberOfLines = 0
            label.textAlignment = .center
            label.font = .systemFont(ofSize: 25, weight: .bold)
            return label
    }()

    private func setupLabel() {
        view.addSubview(titleScreen)
        titleScreen.translatesAutoresizingMaskIntoConstraints = false
        titleScreen.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 5).isActive = true
        titleScreen.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -5).isActive = true
        if #available(iOS 11.0, *) {
            titleScreen.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 5).isActive = true
        } else {
            titleScreen.topAnchor.constraint(equalTo: view.topAnchor, constant: 5).isActive = true
        }
    }
    
    private func setupDeclarative() {
        view.addSubview(beagleViewDeclarative
)
        beagleViewDeclarative.translatesAutoresizingMaskIntoConstraints = false
        beagleViewDeclarative.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 5).isActive = true
        beagleViewDeclarative.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -5).isActive = true
        beagleViewDeclarative.topAnchor.constraint(equalTo: titleScreen.bottomAnchor, constant: 5).isActive = true
    }

    private func setupRemote() {
        view.addSubview(beagleViewRemote)
        beagleViewRemote.translatesAutoresizingMaskIntoConstraints = false
        beagleViewRemote.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 5).isActive = true
        beagleViewRemote.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -5).isActive = true
        beagleViewRemote.topAnchor.constraint(equalTo: beagleViewDeclarative.bottomAnchor, constant: 5).isActive = true
    }
    
}
```
Agora já pode usar a `BeagleView`.