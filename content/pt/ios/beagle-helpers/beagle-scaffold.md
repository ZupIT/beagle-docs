---
title: Beagle Scaffold
weight: 16
description: 'Aqui você encontrará a biblioteca ** Beagle Scaffold ** que o ajudará a iniciar um projeto usando o Beagle no iOS. Possui quase todas as configurações necessárias para isso.
'
---

---

![Cocoapods](https://img.shields.io/cocoapods/v/BeagleScaffold?label=Beagle-Scaffold)
![Cocoapods](https://img.shields.io/cocoapods/v/Beagle?label=Beagle)

**Tópicos abordados**
<hr>

* O que é?
* Instalação
* Configurações
* Customizações
* Outras customizações possíveis

**Requisitos**
<hr>

* MacOS com Xcode 11+
* Cocoapods

{{% alert color="warning" %}}
Recomendado para iniciantes.
{{% /alert %}}

### O que é?
<hr>

Beagle Scaffold é uma estrutura de suporte que tem implementações padrão de uma camada de rede, cache e logger para você, incorporados em [BeagleDefaults] (https://docs.usebeagle.io/get-started/using-beagle-helpers/ios/beagle-defaults) para que você possa começar a usar o Beagle mais rápido.

### Instalação
<hr>

**Passo 1**: Crie um projeto novo no Xcode.

**Passo 2**: No seu terminal, rode o comando `pod init` para criar um Podfile e adicione o Beagle Scaffold como uma dependência do seu projeto. Como a seguir:

```ruby
target 'MyApp' do
  pod 'BeagleScaffold'
end
```

Se você não é familiarizado com o Cocoapods, dê uma checada na [documentação](https://guides.cocoapods.org/) deles. 

**Passo 3:** Rode o comando `pod install` para instalar o Beagle Scaffold no seu app. Esse comando vai gerar um Workspace. A partir de agora você vai usar apenas o Workspace.

{{% alert color="success" %}}
Você instalou com sucesso o Beagle Scaffold no seu app!
{{% /alert %}}

### Configurações
<hr>

**Passo 1:** Para começar a configurar o Beagle em nosso aplicativo, precisamos ir para o arquivo SceneDelegate, importar a lib `BeagleScaffold` e chamar nossa função chamada `start` da classe do Beagle Scaffold `BeagleConfig`, dentro do método `scene`:


```swift
func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {

    BeagleConfig.start()
    guard let _ = (scene as? UIWindowScene) else { return }
}
```

**Passo 2:** Agora nós precisamos fazer a inicialização do nosso projeto usando uma abordagem View Code:

1. Ainda no método `scene`, dê o nome `windowScene` para o `guard let` já criado para nós pelo Xcode:

```swift
guard let windowScene = (scene as? UIWindowScene) else { return }
```

2. Inicialize a variável `window` criada fora do escopo da função, usando a nossa `windowScene`:

```swift
window = UIWindow(windowScene: windowScene)
```

3. Faça o `window?.rootViewController` o nosso `BeagleScaffoldDemoViewController` e chame o método `makeKeyAndVisible`. Seu código deveria estar assim:

```swift
func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
    BeagleConfig.start()
    guard let windowScene = (scene as? UIWindowScene) else { return }
    window = UIWindow(windowScene: windowScene)
    window?.rootViewController = BeagleScaffoldDemoViewController
    window?.makeKeyAndVisible()
}
```

**Passo 3:** Rode o seu projeto e você deve ver uma tela com todos os componentes do Beagle no seu simulador.

### Customizações
<hr>

Nessa seção você vai aprender como customizar o seu Beagle Scaffold. 
Começe com o mais comum, a mudança da Url base. Isso vai acontecer quando você tentar renderizar a sua primeira tela server driven, que é logo após a tela demo do Beagle Scaffold.

**Passo 1:** Crie um novo arquivo, chamado `BeagleConfigurations.swift`.

1. Importe o Beagle e o BeagleScaffold;
2. Crie uma função estática `setup`;
3. Dentro da função `setup`, instancie a variável `dependencies` que é uma `BeagleDependencies`;
4. Mude a propriedade `urlBuilder` da nossa variável para a sua Url base. Nesse exemplo foi utilizado uma url localhost, como `http://localhost:8080`.
5. Agora você precisa notificar o Beagle que você mudou essa propriedade. Para fazer isso passe sua variável `dependencies` como um parâmetro para o método `start` da classe `BeagleConfig` do BeagleScaffold.

Sua classe `BeagleConfigurations` deve estar como o exemplo abaixo: 

```swift
import Foundation
import Beagle
import BeagleScaffold

struct BeagleConfigurations {
    
    static func setup() {
        let dependencies = BeagleDependencies()
        dependencies.urlBuilder = UrlBuilder(baseUrl: URL(string: "http://localhost:8080"))
        BeagleConfig.start(dependencies: dependencies)
    }
    
}
```
**Passo 2:** Mude a classe `SceneDelegate`. Dentro do método `scene`, você não vai mais chamar o método `BeagleConfig.start()`, mas o `BeagleConfigurations.setup()`. Você pode ver a sua tela passando um endereço para o seu `BeagleScreenViewController`, mas você precisa importar o Beagle antes. 
Você pode usar essa controladora como a sua nova `window?.rootViewController`. Veja o exemplo abaixo: 

```swift
func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        BeagleConfigurations.setup()
        guard let windowScene = (scene as? UIWindowScene) else { return }
        window = UIWindow(windowScene: windowScene)
        window?.rootViewController = BeagleScreenViewController(.remote(.init(url: "/yourEndpoint")))
    }
```

**Passo 3:** Como o seu endereço provavelmente não vai ser uma conexão segura, você precisa permitir essa conexão. Para isso, siga: 

1. Vá no seu arquivo `info.plist`;
2. Crie a propriedade `App Transport Security Settings` clicando no ícone `+` no nível de `Information Property List`;
3. Abra o nível `App Transport Security Settings` clicando no ícone `>`, 
4. Crie a propriedade `Allow Arbitrary Loads` e a defina para `YES`.

{{% alert color="success" %}}
Agora você já consegue ver a sua própria tela server-driven! 
{{% /alert %}}

### Outras possíveis customizações

O Beagle Scaffold é uma biblioteca de apoio para novos usuários do Beagle, ajudando-os a renderizar uma tela server driven o mais rápido possível.

Você pode customizar o Beagle Scaffold da maneira que precisar. Você consegue alterar a url base do app e depois passar um novo endpoint para renderizar a sua tela ao invés da tela demo do Beagle Scaffold.
Você pode customizar qualquer propriedade do Beagle dentro das Beagle Dependencies.

Existe um conjunto de propriedades que você deve customizar, como o cliente de rede, o gerenciador de cache e o sistema de log. Se o seu app ir para produção, é essencial determinar os níveis de segurança, o gerenciamento de cache e quais informações pretende logar.

Você pode criar um exemplo dessas camadas usando estes tutoriais:

[**Camada de Rede Customizada**]({{< ref path="/resources/customization/beagle-for-ios/network-layer" lang="en" >}})
<br>

[**Gerenciador de Cache Customizado**]({{< ref path="/resources/cache/how-to-configure-cache" lang="en" >}})
<br>

[**Sistema de Log Customizado**]({{< ref path="/resources/customization/beagle-for-ios/log-system" lang="en" >}})

<br>
<hr>

##### Para mais informações sobre Beagle, acesse o repositório [Beagle](https://github.com/ZupIT/beagle).
##### Para saber mais sobre Beagle-Defaults, veja a seção [Beagle-Default]({{< ref path="/get-started/using-beagle-helpers/ios/beagle-defaults" lang="en" >}}).
