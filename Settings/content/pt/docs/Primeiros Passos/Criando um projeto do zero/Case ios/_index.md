---
title: Case ios
weight: 38
description: 'Nesta seção, você encontra informações para iniciar um projeto iOS com Beagle.'
---

---

## Iniciando um projeto iOS

Para criar um projeto iOS no Beagle, você primeiro precisa ter o Xcode instalado. Caso ainda não o tenha instalado ainda, faça o [**download na Mac App Store**](https://apps.apple.com/app/xcode/id497799835).

Antes de começar, você primeiro precisar criar um projeto no `Xcode`. Para isso, basta abrir o programa e nomear o seu projeto. Para este exemplo, colocaremos como **Beagle Sample.** 

![](/docs-beagle/captura-de-tela-2020-04-08-a-s-10.35.19.png)

Após criar o seu projeto, precisaremos adicionar as dependências. Para isso, usaremos o gerenciador `CocoaPods`.

{{% alert color="info" %}}
Se você tem alguma dúvida sobre como usar este gerenciador, sugerimos checar a [**documentação oficial do Cocoa Pods**](https://cocoapods.org/).
{{% /alert %}}

### Passo 1: Configurar o Cocoa Pods

Você usará o terminal para instalar o `CocoaPods,` para isto abra o terminal e digite _`sudo gem install cocoapods`_

```bash
sudo gem install cocoapods
```

Para configurá-lo, navegue até sua pasta pelo terminal e digite o comando: _`pod init`_ 

```swift
pod init
```

Depois, abra o folder do projeto usando o comando: _`open .`_

```swift
open .
```

Feito isso, você deve selecionar o arquivo _`podfile`_ assim como apresentado na imagem abaixo: 

![](https://lh3.googleusercontent.com/3zzsq_UBccpGCwaMfyYGC6KR9v4Dj4GD3LO311IOBocCIlj6N9kLiw8M6M6liCf3RnICjHpZL9Grw0JgylSSdp1jTkun-N8UYazKu7Wy0jkvBBohE6biktoz932oNFZpnf8hLrJK)

Abra o arquivo e adicione as seguintes dependências:


```swift
target 'Beagle Sample' do
    pod 'Beagle'        
    pod 'YogaKit', :git => 'https://github.com/ZupIT/YogaKit'
end
```


Abra novamente o terminal e digite o comando: _`pod install`_ para que as dependências sejam instaladas.

```swift
pod install
```

Depois da instalação, você deve abrir o arquivo que possui a extensão **`workspace.`** Neste exemplo, nós o chamaremos de `Beagle Sample.workspace`

![](/docs-beagle/captura-de-tela-2020-04-08-a-s-10.23.09.png)

### Passo 2: Configurar o Beagle

Agora que seu projeto está criado, você deve fazer as configurações do **Beagle**. Para isso, siga os passos abaixo: 

1. Crie uma classe chamada`BeagleConfig` . 

Esta classe será responsável por conter parte da configuração inicial do Beagle. Nela, implementaremos uma função estática **`config`** para aplicar essas configurações.

    2. Nesta função crie uma constante chamada **`dependency`** que deve ser do tipo**`BeagleDependencies`**. 

A esta constante serão atribuídas algumas configurações do projeto, como por exemplo, listar a URL base que lista o`JSON` a ser utilizado na construção de uma tela server-driven. Para configurar esta constante, use o exemplo abaixo:


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


Agora, vamos configurar a classe**`SceneDelegate`** para que possamos inicializar nossa aplicação com o Beagle a partir de uma tela via [**BFF**:](../../../principais-conceitos.md#backend-for-frontend)

* Crie a constante **`beagleScreen`**, que irá receber a tela server-driven. 
* O argumento `init URL` deve conter o endereço da [**URL relativa**](../../../features/urls.md#caminho-relativo) que será criada no backend \(BFF\). No nosso exemplo a chamaremos de "/screen"

Siga o exemplo abaixo: 

```swift
let beagleScreen = Beagle.screen(.remote(.init(url: "/screen")))
window = UIWindow(frame: UIScreen.main.bounds)
window?.windowScene = windowScene
window?.rootViewController = beagleScreen
window?.makeKeyAndVisible()
```

Ao final, a classe**`SceneDelegate`** deve ficar assim:

![](https://lh5.googleusercontent.com/JcpliGK0G3QJyLlZIDcwD8X7TZfO7QKEjCcVmWNjX0NHoS8gHl8XOZrSg6dfVntZkusNGmJxRWTa3Ps_xrhCQsIQPOzsFZ375uLqDx1qvuWJWeOnlnQkQy8EkcvMuWhJ6KU8tF-r)

### Passo 3: Configurar o Xcode

Inicialmente, as propriedades do Xcode estão configuradas para que sua aplicação seja iniciada via `main.storyboard`. No entanto, agora quem deve iniciar a aplicação é o Beagle e, para que isso ocorra, devemos mudar essas propriedades **apagando** **as** **referências** ligadas ao `main.storyboard`. 

Estas referências estão no main project file, na**`Info tab`**, e estão assim organizadas:

A primeira fica na sessão:   
_**Custom iOS Target Properties**_ _**&gt;   
`Main storyboard file base name`**_**.** 

A segunda fica na sessão:  
_**`Application Scene Manifest>`**_  
_**`Scene Configuration`&gt;**_   
_**`Application Session Role` &gt;  
`Item 0 (Default Configuration)`&gt;  
`Storyboard name`**_.

No GIF abaixo, você vê melhor como remover as referências:

![](/docs-beagle/main%20%282%29.gif)

Feito! O Beagle está configurado na sua aplicação iOS. Agora, tudo o que você precisa é [**configurar um backend**](../case-backend.md) para responder as requisições do seu aplicativo server-driven.

Feita essa configuração, inicie a sua aplicação e você terá sua primeira tela server-driven!   
Você verá a tela a seguir: 

![](/docs-beagle/captura_de_tela_2020-04-07_a-s_17-removebg-preview-2-.png)
