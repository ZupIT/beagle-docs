---
title: Carregamento e tratamento de erros
weight: 153
description: >-
  Nesta seção, você encontra informações de como customizar o comportamento do
  Beagle para casos de carregamento das telas e tratamento de erros.
---

---

## Introdução

Para customizar os comportamentos de carregamento e erro no Beagle iOS, você precisa criar seu próprio navigation controller. 

Ao cria-lo, você precisa seguir os seguintes passos:

1. Extender sua controller a partir da`BeagleNavigationController`
2. Alterar as dependências do Beagle para utilizá-lo. 

{{% alert color="info" %}}
O método `serverDrivenStateDidChange` deve ser sobrescrito para fazer a customização.
{{% /alert %}}

## Exemplo

### Criando o Beagle navigation controller

#### **Passo 1:** Criar um Beagle **navigation controller**:

```swift
import Beagle

class MyAppNavigationController: BeagleNavigationController {
    override func serverDrivenStateDidChange(
        to state: ServerDrivenState,
        at screenController: BeagleController
    ) {
        // TODO: Exibir carregamento e erros quando necessário.
    }
}
```

#### Passo 2: Configurar a dependência:

```bash
let dependencies = BeagleDependencies()
dependencies.navigation.registerNavigationController(
    builder: MyAppNavigationController.init, 
    forId: "MyAppNavigationController")
Beagle.dependencies = dependencies
```

É possível cadastrar mais de uma customização do `BeagleNavigationController`. Para escolher qual delas usar, o BFF precisa que você informe o `forId`.

{{% alert color="info" %}}
Faça a configuração do `navigationControllerType` com as demais configurações do Beagle para não sobrescrevê-las_._
{{% /alert %}}

### Configurando o Carregamento

Por padrão, a implementação no Beagle sempre retorna uma interface com fundo preto semitransparente. Você pode ver isso por meio do `UIActivityIndicatorView`. 

Se você quiser apresentar um carregamento específico da sua aplicação, verifique o estado da tela \(`state`\) e reaja apropriadamente. Veja no exemplo a seguir:

```swift
extension UIView {
    func showLoading() {
        // ...
    }
    func hideLoading() {
        // ...
    }
}

class MyAppNavigationController: BeagleNavigationController {
    override func serverDrivenStateDidChange(
        to state: ServerDrivenState,
        at screenController: BeagleController
    ) {
        switch state {
        case .loading(let loading):
            loading ? view.showLoading() : view.hideLoading()
        case .error:
            view.hideLoading()
        }
    }
}
```

Caso queira manter o estilo original de carregamento, basta executar a implementação padrão e seguir para o [**tratamento de erros**](/pt/docs/recursos/customização/beagle-para-ios/carregamento-e-tratamento-de-erros).

```swift
override func serverDrivenStateDidChange(
    to state: ServerDrivenState,
    at screenController: BeagleController
) {
    super.serverDrivenStateDidChange(to: state, at: screenController)
    // TODO: Tratar casos de erro
}
```

### Tratando os erros

Quando ocorre algum erro na aplicação, o Beagle altera o estado da tela  \(`state`\) para `ServerDrivenState.Error`. Nesse caso, você deve verificar qual foi tipo do erro e fazer a tratativa quando necessário. 

Os **possíveis erros** são:

* `remoteScreen(Request.Error)`: A requisição para carregar uma tela remota falhou. Veja abaixo quando isso ocorre.
* `lazyLoad(Request.Error)`: A requisição para carregar um [**componente Lazy**](/pt/docs/api/components/lazy) falhou. Veja abaixo quando isso ocorre.
* `action(Swift.Error)`: A execução de uma [**Action**](/pt/docs/api/actions) falhou.

**Erros em uma requisição** \(`Request.Error`\):

* `urlBuilderError`: A URL do recurso ou a [**baseURL**](/pt/docs/recursos/customização/beagle-para-ios/dependências-do-beagle#urlbuilder) é inválida.
* `networkError`: Não foi possível estabelecer a conexão ou um erro foi retornado pelo BFF.
* `decoding`: A resposta enviado pelo BFF é diferente do objeto esperado.

{{% alert color="info" %}}
O erro possui um bloco `retry` que permite executar novamente a ação que falhou.
{{% /alert %}}

Veja o exemplo de como exibir uma tela de erro quando o carregamento de uma tela falha:

```swift
class ErrorView: UIVIew {
    var retry: (() -> Void)?
    func present(in view: UIView) {
        // ...
    }
}

class MyAppNavigationController: BeagleNavigationController {
    override func serverDrivenStateDidChange(
        to state: ServerDrivenState,
        at screenController: BeagleController
    ) {
        super.serverDrivenStateDidChange(to: state, at: screenController)
        if case let .error(serverDrivenError, retry) = state,
           case .remoteScreen = serverDrivenError {
               let errorView = ErrorView()
               errorView.retry = retry
               errorView.present(in: view)
        }
    }
}
```
