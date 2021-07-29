---
title: Beagle Navigation Controller customizada
weight: 149
description: >-
  Nesta seção, você encontra como usar o Beagle Navigation Controller para
  observar o estado da tela server-driven.
---

---

## Introdução

Beagle Navigation Controller é uma classe como uma `UINavigationController`, porém focada em observar o estado da tela server-driven para, por exemplo, saber quando ela inicia ou finaliza.

O `serverDrivenStateDidChange()` é o método que observa as mudanças de estado da tela.

A implementação padrão mostra uma `UIActivityIndicatorView` enquanto o estado da tela é de `loading` e caso um erro ocorra, você pode sobrescrever esse método para tratar o erro.

Caso queira preservar o loading e a tela de erro default do Beagle depois que esse método for sobrescrito, você deve implementar um `super` para representar a chamada a superclasse `BeagleNavigationController`, caso contrário, você deve personalizar o próprio loading e tela de erro. Ambas as implementações podem ser vistas nos exemplos abaixo.

## Parâmetros

- **State:** Novo estado que indica se a tela está carregando ou ocorreu algum erro.
- **ScreenController:** Controller que indica a mudança de estado.

Confira abaixo a classe BeagleNavigationController:

```swift
open class BeagleNavigationController: UINavigationController {

    private var errorView = BeagleErrorView(message: nil) { }

    open func serverDrivenStateDidChange(
        to state: ServerDrivenState,
        at screenController: BeagleController
    ) {
        switch state {
        case .started:
            view.showLoading(.whiteLarge)
        case .finished:
            view.hideLoading()
        case .error(let serverDrivenError, let retry):
            let message = getServerDrivenErrorMessage(from: serverDrivenError)
            guard let retry = retry else { return }
            if !view.subviews.contains(errorView) {
                errorView = BeagleErrorView(message: message, retry: retry)
                errorView.present(in: view)
            } else {
                errorView.addRetry(retry)
            }
        case .success:
            break
        }
    }
}

```

O ServerDrivenState é um enum que define as possibilidades de estados da tela. Veja essa estrutura abaixo:

```swift
public typealias BeagleRetry = () -> Void

public enum ServerDrivenState {
    case started
    case finished
    case success
    case error(ServerDrivenState.Error, BeagleRetry)
}

extension ServerDrivenState {
    public enum Error: Swift.Error {
        case remoteScreen(Request.Error)
        case action(Swift.Error)
        case lazyLoad(Request.Error)
        case submitForm(Request.Error)
        case webView(Swift.Error)
        case declarativeText
    }
}
```

## Examplos

## **Usando a implementação default para os estados de loading e erro**

Para preservar o comportamento dos estados de loading e manter a tela de erro default do Beagle depois que o método `serverDrivenStateDidChange` for sobrescrito, você deve implementar um `super` chamando o método `serverDrivenStateDidChange` para representar a chamada à superclasse **BeagleNavigationController**.

```swift
class CustomBeagleNavigationController: BeagleNavigationController {
    
    override func serverDrivenStateDidChange(
        to state: ServerDrivenState,
        at screenController: BeagleController
    ) {
        super.serverDrivenStateDidChange(to: state, at: screenController)
    }
}
```

## **Sobrescrevendo o estado de erro**

### **Passo 1: Criar uma classe que herda de BeagleNavigationController**

O primeiro passo é criar uma classe chamada de `CustomBeagleNavigationController` que irá conformar com o protocolo `BeagleNavigationController`. O método `serverDrivenStateDidChange` é substituído e o tratamento de erro é modificado.

```swift
class CustomBeagleNavigationController: BeagleNavigationController {

    private var errorView = ErrorView(message: nil) { }

    override func serverDrivenStateDidChange(
        to state: ServerDrivenState,
        at screenController: BeagleController
    ) {
        guard case let .error(serverDrivenError, retry) = state else { return }
        let message: String
        switch serverDrivenError {
        case .remoteScreen(let error), .lazyLoad(let error), .submitForm(let error):
            switch error {
            case .networkError(let messageError):
                message = messageError.localizedDescription
            case .decoding(let messageError):
                message = messageError.localizedDescription
            case .loadFromTextError, .urlBuilderError:
                message = error.localizedDescription
            }

        case .action(let error):
            message = error.localizedDescription

        default:
            message = "Unknow Error."
        }

        if !view.subviews.contains(errorView) {
            errorView = ErrorView(message: message, retry: retry)
            errorView.present(in: view)
        } else {
            errorView.addRetry(retry)
        }
    }
}
```

### **Passo 2: Registrar o CustomNavigationController**

```swift
let dependencies = BeagleDependencies()
dependencies.navigation.registerNavigationController(
    builder: CustomBeagleNavigationController.init,
    forId: "CustomBeagleNavigation"
)
Beagle.dependencies = dependencies
```

{{% alert color="info" %}}
É possível registrar quantas **BeagleNavigationController** você quiser.
{{% /alert %}}

### **Passo 3: Inicializar a BeagleScreenViewController com um controllerId**

Quando iniciar uma **BeagleScreenViewController**, você deve passar o parâmetro `controllerId` com o id escolhido para sua custom **BeagleNavigationController** e usar a controller desejada.

```swift
func screenController() -> UIViewController {
    let screen = Screen(
        child: Text()
    )

    return BeagleScreenViewController(
        .declarative(screen),
        controllerId: "CustomBeagleNavigation"
    )
}
```
