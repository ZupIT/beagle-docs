---
title: Primeiros Passos
weight: 120
description: Nessa seção, você vai aprender como criar um projeto iOS com o Beagle.
---

**Tópicos abordados**

* Criando um projeto iOS do zero
* Adicionando o Beagle ao seu projeto (funciona com projetos já existentes)
* Configurando o Beagle
* Outras customizações

**Requisitos**

* MacOS com Xcode 11+ instalado
* Swift Package Manager (já vem instalado com o Xcode), Cocoapods ou Carthage
* iOS 10.0+
* Swift 5.0+


## Criando um projeto iOS do zero

<br>

Nós vamos usar Xcode 11+ nesse exemplo, então se você ainda não instalou, é necessário fazer o download na AppStore.

**Passo 1:** Abra o seu Xcode e clique em _File -> New -> Project_.

**Passo 2:** Selecione a opção _App_ e clique em **'Next'**.

**Passo 3:** Nomeie o seu projeto, selecione a interface como _Storyboard_, linguagem _Swift_ e clique em **'Next'**.

**Passo 4:** Informe onde deseja salvar seu projeto e confirme.

## Adicionando o Beagle ao seu projeto

<br>

Você pode instalar o Beagle utilizando o SPM (Swift Package Manager), Cocoapods ou o Carthage. Escolha um e siga os passos abaixo:

<br>

Versão atual do Beagle: [![badge](https://img.shields.io/cocoapods/v/Beagle)](https://cocoapods.org/pods/Beagle)

{{< tabs id="T1" >}}
{{% tab name="Swift Package Manager" %}}

<br>

Aqui você precisará apenas do Xcode. Mais sobre Swift Package Manager: <https://swift.org/package-manager>

**Passo 1:** Clique em _File -> Swift Packages -> Add Package Dependency_.

**Passo 2:** Entre com a URL do pacote do Beagle: `https://github.com/ZupIT/beagle.git` e clique em **'Next'**.

**Passo 3:** Confirme a versão do Beagle, clique em **'Next'** e deixe o Xcode resolver o pacote.

**Passo 4:** Na última caixa de diálogo, atualize a coluna _Add to Target_ colocando o target que deveria importar o `Beagle`.

{{% alert color="success" %}}
Você conseguiu instalar o Beagle com sucesso utilizando o SPM!
{{% /alert %}}

<br>

### SPM com um pacote Package.swift já existente

<br>

**Passo 1 :** Adicione o Beagle no vetor `dependencies` e escolha a versão que você quiser, como a 1.8.0, por exemplo.
```swift
dependencies: [
  .package(name: "Beagle", url: "https://github.com/ZupIT/beagle.git", from: "${beagle.version}"}}),
]
```
**Passo 2:** Adicione o Beagle como uma dependência do target da sua aplicação:
```swift
targets: [
  .target(name: "MyApp", dependencies: ["Beagle"], path: "Sources")
]
```
{{% alert color="success" %}}
Agora o Beagle já faz parte do seu package.swift.
{{% /alert %}}

{{% /tab %}}

{{% tab name="Cocoapods" %}}

<br>

Você vai precisar do Cocoapods instalado e o Terminal.

**Passo 1:** Navegue até a pasta raiz do seu projeto e rode o comando `pod init` que irá criar um arquivo _Podfile_.

**Passo 2:** Edite seu _Podfile_ colocando o nome da pod do Beagle, como o código abaixo:
```ruby
target 'MyApp' do
  pod 'Beagle'
end
```

**Passo 3:** Rode o comando `pod install` e assim as dependências serão resolvidas em um Workspace.

**Passo 4:** Agora abra o Workspace criado e a partir de agora você sempre irá trabalhar por ele.

{{% alert color="success" %}}
Você instalou com sucesso o Beagle pelo Cocoapods!
{{% /alert %}}

{{% /tab %}}

{{% tab name="Carthage" %}}

<br>

Aqui, você precisa do Carthage instalado e do Terminal.

**Passo 1:** Navegue até a pasta raiz do seu projeto e execute o comando `touch Cartfile` para criar um arquivo _Cartfile_ para nós.

**Passo 2:** Abra o _Cartfile_ e coloque o link do nosso repositório da seguinte forma `github "ZupIT/beagle" ~> ${beagle.version}`, escolhendo a versão que você queira.

**Passo 3:** Agora você precisa checar a versão do seu Xcode e seguir os passos a seguir:

* Para Xcode 12+, você irá precisar do Carthage v0.37+. Assim você conseguirá rodar o comando `carthage udpate --use-xcframeworks`. Esse comando vai criar _xcframeworks_ pra gente. 

* Para Xcode abaixo do 12, apenas rode o comando `Carthage update` e ele vai criar os _xcframeworks_ pra gente.

**Passo 4:** Acesse a pasta raiz do seu projeto -> Carthage -> Build. Pegue a pasta _Beagle.xcframework_ e arraste-a até o _Xcode -> yourProject.xcodeproj -> Targets -> yourProject -> General -> Frameworks, Libraries e Embedded Content_.

**Passo 5:** Para rodar o Beagle, você também precisa do _YogaKit_. Você pode instalá-lo usando o SPM (Swift Package Manager).

1. A partir do menu File, navegue até _Swift Packages_ e selecione _Add Package Dependency_; 
2. Entre com a URL do pacote: `https://github.com/ZupIT/yoga.git`;
3. Confirme a versão do Beagle e deixe o Xcode resolver o pacote.

{{% alert color="success" %}}
Você conseguiu instalar o Beagle utilizando o Carthage com sucesso!
{{% /alert %}}
{{% /tab %}}
{{< /tabs >}}

## Configurando o Beagle

<br>

Depois da instalação, você precisa configurar o Beagle pra rodar na sua aplicação. Para isso, siga as instruções abaixo:

**Passo 1:** Crie uma classe `BeagleConfig`:

Essa classe contém a parte das configurações iniciais do Beagle. Agora você precisa implementar uma função estática `config`, e ela irá aplicar as demais configurações.

```swift
import Beagle
import Foundation

class BeagleConfig {
    static func config() {}
}
```

**Passo 2:** Nessa função, crie uma constante chamada `dependencies` do tipo `BeagleDependencies`.

Você vai atribuir a essa constante algumas configurações do projeto, por exemplo, a URL base que combinada com uma URL relativa irá trazer um JSON que descreve sua tela server-driven.

Para configurar uma URL base, por exemplo, veja o código abaixo: 

```swift
import Beagle
import Foundation

class BeagleConfig {
    static func config() {
        let dependencies = BeagleDependencies()
        dependencies.urlBuilder = UrlBuilder(
            baseUrl: URL(string: "http://localhost")
        )
        Beagle.dependencies = dependencies
    }
}
```

**Passo 3:** Agora, nós iremos configurar a classe _SceneDelegate_ para que possamos utilizá-la para inicializar nossa aplicação com o Beagle a partir de uma tela do BFF:

1. Dentro do _SceneDelegate.swift_ na função `scene`, chame a nossa função `BeagleConfig.config()`.

2. Nomeie o `guard let` que o Xcode já traz criado pra nós, com o nome `windowScene`.

3. Inicialize a variável `window` criada fora do escopo da função, utilizando nossa `windowScene`

4. Faça o `window.rootViewController` como a tela do BFF que você quer mostrar.

5. Agora chame a função `makeKeyAndVisible()` da variável `window`.

Seu código deveria estar mais ou menos assim:

```swift
import UIKit
import Beagle

class SceneDelegate: UIResponder, UIWindowSceneDelegate {

    var window: UIWindow?

    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        BeagleConfig.config()
        guard let windowScene = (scene as? UIWindowScene) else { return }
        window = UIWindow(windowScene: windowScene)
        window?.rootViewController = BeagleScreenViewController(.remote(.init(url: "/yourScreenRelativeURL")))
        window?.makeKeyAndVisible()
    }

}

```

{{% alert color="warning" %}}
É muito importante ressaltar que o Beagle não provê camadas padrão de Rede, Cache e Log. Mas sem a camada de Rede é impossível fazer requisições de JSONs.

Então é obrigatório que você crie uma camada de Rede para que o Beagle consiga se comunicar com um BFF através de requisições.
{{% /alert %}}

Você pode criar essas camadas usando esses tutoriais:

[**Camada de Rede customizada**]({{< ref path="/resources/customization/beagle-for-ios/network-layer" lang="en" >}})
<br>

[**Gerenciador de Cache customizado**]({{< ref path="/resources/cache/how-to-configure-cache" lang="en" >}})
<br>

[**Sistema de Log customizado**]({{< ref path="/resources/customization/beagle-for-ios/log-system" lang="en" >}})

<br>

Ou se você quiser pular essas configurações, você pode utilizar nossa biblioteca de apoio: [**Beagle Scaffold**]({{< ref path="/get-started/using-beagle-helpers/ios/beagle-scaffold" lang="en" >}}), que contém implementações padrão de camadas de Rede, Cache e Log.

Mas lembre-se que é muito importante customizar sua própria camada de Rede por questões de segurança.

## Outras customizações

<br>

* **Ações:** você pode criar ações customizadas que serão executadas pelos seus widgets de acordo com as interações dos usuários na sua aplicação
* **Animações de navegação:** Você pode customizar as animações de navegação das telas do Beagle.
* **Camada de Rede:** Você pode customizar a camada de rede para configurar a forma que o Beagle irá fazer as requisições.
* **Cache:** Você pode customizar o cache para salvar as telas server-driven do jeito que desejar.
* **Carregamento e tratamento de erros:** Você pode customizar o tratamento de erro e o loading das telas server-driven.
* **Deep Link handler:** Você pode configurar o Deep Link Handler para ter navegação de uma tela server-driven para uma tela nativa.
* **Image Downloader:** Você pode customizar a forma como as imagens serão baixadas para serem exibidas pelo Beagle.
* **Design System:** Você pode customizar seu design system para construir telas mais bonitas.
* **Serializador e Desserializador:** Você pode customizar a forma como o Beagle serializa e desserializa.
* **Log:** Você pode customizar a maneira como os logs gerados pelo Beagle serão exibidos.
* **Widget:** Você pode criar componentes específicos para seu projeto e utilizá-los na criação de telas server-driven.
* **Operações:** Você pode criar suas operações para manipular o Context de uma forma mais simples através do seu backend.
* **Analytics:** Você pode configurar um analytics para gerar reportes de telas e ações.
