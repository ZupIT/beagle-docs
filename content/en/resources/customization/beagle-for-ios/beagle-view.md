---
title: Beagle View
weight: 143
description: >-
  On this section, you find informations about Beagle View for iOS and how to
  use it.
---

---

## Introduction

Beagle View is an `UIView` that must be used when it is necessary to add a Beagle's component in a native screen that has other `views` and use `AutoLayout`.

It is possible to initialize a `BeagleView` with a Beagle **component** or **screenType**

**Component:** Receives a declarative component. 

**ScreenType.Remote:** Receives a URL with a server-driven component. This initialization allows you to configure BeagleView's states through `beagleViewStateObserver` parameter.

**ScreenType:** It's an enum that allows you to initialize BeagleView in three ways:

* `Remote:` Receives a URL with a server-driven component. If there is an error when loading your server-driven screen, an optional fallback view can be configured, which would be a screen built on the frontend.
You can also configure a header through `additionalData` parameter.

* `Declarative:` Receives a declarative screen (created on your frontend side on Swift).

* `Remote:` Receives a screen in a JSON format.

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

## Using Beagle View

Check out below a native layout to exemplify the use of `AutoLayout` together with Beagle:

### 1. Create a BeagleViewViewController

Create a class of type `UIViewController` as in the following example.

```swift
class BeagleViewViewController: UIViewController {

    // MARK: Lifecycle
    override func viewDidLoad() {
        super.viewDidLoad()
    
    }
}
```

Now, inside BeagleViewViewController class, three native UILabel texts will be created and positioned with AutoLayout, as you can see in the `setupLabels` function.

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

### 2. Create a BeagleView

See below two examples on how to instantiate a `BeagleView`, one starting with a **declarative** Beagle component and the other in a **remote** mode with a server-driven component.

* 1-> `BeagleView` declarative with Beagle text, using `AutoLayout` with the **setupDeclarative** method.
* 2-> `BeagleView` remote by passing a URL, using `AutoLayout` with the **setupRemote** method.

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

### 3. Error Handling

You can observe BeagleViews's states and deal with errors through the `beagleViewStateObserver` parameter at BeagleView startup with the `ScreenType.Remote` type.

Check out an example where a BeagleView was created and it receives BeagleView's states to treat them.

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

### 4. Complete Example

You can see a `BeagleViewViewController` class example below:

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