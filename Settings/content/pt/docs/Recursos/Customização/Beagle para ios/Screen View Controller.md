---
title: Screen View Controller
weight: 135
description: 'Nesta seção, você encontra informações da classe Screen View Controller'
---

---

## Introdução

`BeagleScreenViewController` é uma classe que **gerencia a hierarquia de exibição na aplicação** e possui o mesmo funcionamento de uma `UIViewController`.

## Como implementar essa classe?

Você precisa criar um objeto `BeagleScreenViewController`  com um conjunto de atributos e parâmetros. 

Esse processo pode ser feito com seguintes passos: 

1. Crie um objeto `BeagleScreenViewModel` com o **screenType** remote que deve passar uma URL, um fallback opcional, ou um declarative que passa a tela para o modo declarativo.

Você pode encontrar os comandos a serem executados a seguir: 

```swift
 public class BeagleScreenViewModel {
 
  public enum ScreenType {
       case remote(String, fallback: Beagle.Screen?)
       case declarative(BeagleUI.Screen)
    }
    public init(screenType: 
       BeagleUI.BeagleScreenViewModel.ScreenType, 
       delegate: BeagleUI.BeagleScreenDelegate? = nil)
}

let viewController = BeagleScreenViewController(
      viewModel: viewModel)

```

Além dos comandos acima, há outros exemplos de inicialização utilizando o declarative e remote: 

```swift
//1 
let viewModel = BeagleScreenViewModel(screenType:
              .declarative(content: Home().screen))
                         
//2
let viewModel = BeagleScreenViewModel(screenType:
          .remote("/cash-withdrawal/home"),
                                 fallback: nil))
                                   
//3
let viewModel = BeagleScreenViewModel(
   screenType:.remote(
    "http://localhost:8090/cash-withdrawal/home"),
                            fallback: Home().screen))

```

Você pode instanciar o `BeagleScreenViewModel` com um screenType do tipo declarative passando uma tela criada para o seu modo declarativo.

Nesse exemplo, o `BeagleScreenViewModel` foi instanciado com um screenType do tipo remote onde se passa uma URL relativa e um fallback nulo. Para usar essa URL você deve colocar primeiro uma URL base no `BeagleDependencies` do seu projeto.  
  
O segundo `BeagleScreenViewModel` foi instanciado com um screenType do tipo remote onde passa a URL  absoluta e um fallback de uma tela no modo declarativo.

## Estados da tela

Para acompanhar o estado da tela temos o `enum` state:

```swift
 public enum State {
        //1
        case loading
        //2
        case success
        //3
        case failure(Beagle.Request.Error)
        //4
        case rendered
    }
```

1. O **estado loading** é executado enquanto a requisição não foi recebida ou a tela não foi renderizada e assim que as informações são recebidas e a tela é renderizada, o estado muda para sucesso e se der erro o estado muda para failure. 
2. O **estado de sucesso** é executado logo após que a verificação da requisição for concluída e a tela renderizada. 
3.  O **failure** é executado quando há algo errado na requisição ou na renderização da  tela, logo `BeagleUI.Request.Error` informa qual foi o erro. 
4. O **rendered** é utilizado logo após o sucesso, quando a tela é chamada para ser renderizada.

Quando tudo executa o `BeagleScreenViewModel` com o screenType do tipo declarative, o estado passa direto para sucesso pulando o loading.

No `BeagleScreenViewModel` há uma variável delegate que está relacionada ao `BeagleScreenDelegate`. Ao estender esse protocolo, caso ocorra algum erro de requisição ao implementar um screenType do tipo remote, ele cairá na função de erro desse protocolo. Onde o usuário pode complementar essa função com o erro.

```swift
public protocol BeagleScreenDelegate : AnyObject {

 typealias ViewModel = Beagle.BeagleScreenViewModel

    func beagleScreen(viewModel: Self.ViewModel,
                     didFailToLoadWithError error:
                              Beagle.Request.Error)
}
```

## Exemplo para implementar o protocolo `BeagleScreenDelegate`:

```swift
//1
let viewModel = BeagleScreenViewModel(screenType:
          .remote("/cash-withdrawal/home"),
                                 fallback: nil))
viewModel.delegate = self

//2
extension ViewController: BeagleScreenDelegate {
    func beagleScreen(viewModel: 
        ViewController.ViewModel, 
                didFailToLoadWithError error:  
                            Beagle.Request.Error) {
        print("didFailToLoadWithError: \(error)")
    }
}
```

1. Reutilizando o exemplo de instanciar o `BeagleScreenViewModel` você pode adicionar o **viewModel.delegate = self**, onde se acontecer algum erro de requisição você pode fazer uma tratativa. 
2. Ao implementar o protocolo `BeagleScreenViewModel` você pode complementar essa função, como no exemplo e a função irá mostrar o erro. 

A `BeagleScreenViewController`  trabalha com a customização de componentes na view: 

```swift
extension BeagleScreenViewController:
                    Beagle.BeagleContext {
    //1                
    public func register(action: Beagle.Action, 
                                 inView view: UIView)
    //2
    public func register(form: BeagleSchema.Form, 
                        formView: UIView, 
                        submitView: UIView, 
                        validatorHandler: 
                        Beagle.ValidatorProvider?)
    //3
    public func lazyLoad(url: String, 
                              initialState: UIView)
    //4
    public func doAction(_ action: Beagle.Action,
                                          sender: Any)
}
```
