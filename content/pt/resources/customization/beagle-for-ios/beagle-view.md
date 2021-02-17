---
title: Beagle View
weight: 145
description: >-
  Nesta seção, você encontra informações sobre a Beagle View e como
  utilizá-la.
---

---

## Introdução

Beagle View é uma `UIView` que deve ser usada quando é necessário adicionar um componente do Beagle em uma tela nativa que possui outras `views` e usam `AutoLayout`.

 Com a `BeagleView` pode inicializar com o **component** ou **screenType**.

**Component:** Recebe um componente de modo declarativo.

**ScreenType.Remote:** Na inicialização de uma view remota recebe-se a URL da sua tela ou componente server-driven. A configuração dos estados da beagle view também pode ser feita através do parâmetro `beagleViewStateObserver`.

**ScreenType:** Permite inicializar de três formas:

* `Remote:` Recebe a URL da sua tela ou componente server-driven. Você pode configurar um fallback opcional, que seria uma tela no modo declarativo caso houvesse algum erro com a sua tela server-driven. A configuração de header também pode ser feita por meio do parâmetro additionalData.

* `Declarative:` Recebe uma tela de modo declarativo.

* `DeclarativeText:` Recebe o JSON de uma tela.

```swift
public class BeagleView: UIView {
    // MARK: - Initialization
    
    public convenience init(_ component: ServerDrivenComponent) {
        self.init(.declarative(component.toScreen()))
    }
    
    public convenience init(_ screenType: ScreenType) {
            self.init(viewModel: .init(screenType: screenType))
    }

    public convenience init(_ remote: ScreenType.Remote, beagleViewStateObserver: @escaping BeagleViewStateObserver) {
        self.init(viewModel: .init(screenType: .remote(remote), beagleViewStateObserver: beagleViewStateObserver))
    }
}

```

## Usando uma Beagle View

Segue abaixo um layout nativo que será usado para exemplificar o uso do `AutoLayout` junto com o Beagle:

### 1. Crie a BeagleViewViewController

Crie uma classe do tipo `UIViewController` como descrito abaixo.

```swift
class BeagleViewViewController: UIViewController {

    // MARK: Lifecycle
    override func viewDidLoad() {
        super.viewDidLoad()
    
    }
}
```

Agora, você irá criar três textos nativos do tipo `UILabel` e irá posicioná-los com o `AutoLayout`, como na função `setupLabels` abaixo.

```swift
private lazy var titleScreen = makeLabel(text: "I'm a native screen")

private lazy var loadingLabel = makeLabel(text: "Loading server-driven component in another BeagleView...")
        
private lazy var errorLabel = makeLabel(text: "Error loading!")

private func makeLabel(text: String) -> UILabel {
    let label = UILabel()
    label.text = text
    label.textAlignment = .center
    label.font = .systemFont(ofSize: 22, weight: .semibold)
    label.numberOfLines = 0
    label.backgroundColor = .lightGray
    label.translatesAutoresizingMaskIntoConstraints = false
    return label
}

private func setupLabels() {
    view.addSubview(titleScreen)
    titleScreen.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 5).isActive = true
    titleScreen.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -5).isActive = true
    if #available(iOS 11.0, *) {
        titleScreen.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 5).isActive = true
    } else {
        titleScreen.topAnchor.constraint(equalTo: view.topAnchor, constant: 5).isActive = true
    }

    view.addSubview(loadingLabel)
    loadingLabel.topAnchor.constraint(equalTo: titleScreen.bottomAnchor, constant: 30).isActive = true
    loadingLabel.centerXAnchor.constraint(equalTo: titleScreen.centerXAnchor).isActive = true

    view.addSubview(errorLabel)
    errorLabel.topAnchor.constraint(equalTo: titleScreen.bottomAnchor, constant: 30).isActive = true
    errorLabel.leadingAnchor.constraint(lessThanOrEqualTo: view.leadingAnchor).isActive = true
    errorLabel.trailingAnchor.constraint(lessThanOrEqualTo: view.trailingAnchor).isActive = true
    errorLabel.centerXAnchor.constraint(equalTo: titleScreen.centerXAnchor).isActive = true
}
```

### 2. Crie a BeagleView

Abaixo, têm-se dois exemplos de instanciação de uma `BeagleView`, uma a inicializando no modo **declarative** e outro no modo **Remote**.

* 1-> `BeagleView` declarativa com o componente de texto do Beagle, utilizando o `AutoLayout` com o método **setupDeclarative**.
* 2-> `BeagleView` remote passando uma URL, utilizando o `AutoLayout` com o método **setupRemote**.

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

### 3. Tratamento de erros

Você pode observar os estados e tratar os erros a partir do parâmetro beagleViewStateObserver na inicialização da BeagleView com o tipo ScreenType.Remote.

Abaixo temos um exemplo onde foi criada uma BeagleView que recebe os estados para poder tratá-los.

```swift
private lazy var beagleViewStateful = BeagleView(.init(url: "your URL")) { state in
    switch state {
    case .started:
        self.loadingLabel.isHidden = false
        self.errorLabel.isHidden = true
    case .error(var serverDrivenError, let retry):
        self.errorLabel.text = serverDrivenError.localizedDescription
        self.errorLabel.textColor = .red
        self.errorLabel.isHidden = false
    case .success:
        self.errorLabel.isHidden = true
    case .finished:
        self.loadingLabel.isHidden = true
    }
}

private func setupStatefulBeagleView() {
    view.addSubview(beagleViewStateful)
    beagleViewStateful.translatesAutoresizingMaskIntoConstraints = false
    beagleViewStateful.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 5).isActive = true
    beagleViewStateful.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -5).isActive = true
    beagleViewStateful.topAnchor.constraint(equalTo: beagleViewRemote.bottomAnchor, constant: 5).isActive = true
}
```

### 4. Exemplo Completo

Segue em exemplo a classe `BeagleViewViewController`completa.

```swift
import UIKit
import Beagle

class BeagleViewViewController: UIViewController {

    // MARK: Lifecycle
     override func viewDidLoad() {
        super.viewDidLoad()
        setupLabels()
        setupDeclarative()
        setupRemote()
        setupStatefulBeagleView()
    }
    
    // 1
    private lazy var beagleViewDeclarative = BeagleView(
        Text("I'm a beagle text")
    )

    // 2
    private lazy var beagleViewRemote = BeagleView(
        .remote(.init(url: "your URL"))
    )

    // 3
    private lazy var beagleViewStateful = BeagleView(.init(url: "your URL")) { state in
        switch state {
        case .started:
            self.loadingLabel.isHidden = false
            self.errorLabel.isHidden = true
        case .error(var serverDrivenError, let retry):
            self.errorLabel.text = serverDrivenError.localizedDescription
            self.errorLabel.textColor = .red
            self.errorLabel.isHidden = false
        case .success:
            self.errorLabel.isHidden = true
        case .finished:
            self.loadingLabel.isHidden = true
        }
    }
    private lazy var titleScreen = makeLabel(text: "I'm a native screen")

    private lazy var loadingLabel = makeLabel(text: "Loading server-driven component in another BeagleView...")
            
    private lazy var errorLabel = makeLabel(text: "Error loading!")

    private func makeLabel(text: String) -> UILabel {
        let label = UILabel()
        label.text = text
        label.textAlignment = .center
        label.font = .systemFont(ofSize: 22, weight: .semibold)
        label.numberOfLines = 0
        label.backgroundColor = .lightGray
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }

    private func setupLabels() {
        view.backgroundColor = .white
        view.addSubview(titleScreen)
        titleScreen.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 5).isActive = true
        titleScreen.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -5).isActive = true
        if #available(iOS 11.0, *) {
            titleScreen.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 5).isActive = true
        } else {
            titleScreen.topAnchor.constraint(equalTo: view.topAnchor, constant: 5).isActive = true
        }

        view.addSubview(loadingLabel)
        loadingLabel.topAnchor.constraint(equalTo: titleScreen.bottomAnchor, constant: 30).isActive = true
        loadingLabel.centerXAnchor.constraint(equalTo: titleScreen.centerXAnchor).isActive = true

        view.addSubview(errorLabel)
        errorLabel.topAnchor.constraint(equalTo: titleScreen.bottomAnchor, constant: 30).isActive = true
        errorLabel.leadingAnchor.constraint(lessThanOrEqualTo: view.leadingAnchor).isActive = true
        errorLabel.trailingAnchor.constraint(lessThanOrEqualTo: view.trailingAnchor).isActive = true
        errorLabel.centerXAnchor.constraint(equalTo: titleScreen.centerXAnchor).isActive = true
    }
    
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

    private func setupStatefulBeagleView() {
        view.addSubview(beagleViewStateful)
        beagleViewStateful.translatesAutoresizingMaskIntoConstraints = false
        beagleViewStateful.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 5).isActive = true
        beagleViewStateful.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -5).isActive = true
        beagleViewStateful.topAnchor.constraint(equalTo: beagleViewRemote.bottomAnchor, constant: 5).isActive = true
    }
    
}
```

Pronto, você já pode usar a `BeagleView`.
