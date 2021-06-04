---
title: Beagle Scaffold
weight: 16
description: 'Aqui você vai encontrar a biblioteca **Beagle-Scaffold** pra te ajudar a começar um projeto usando o Beagle para iOS. Ela contém quase todas as configurações necessárias pra fazer isso.'
---

---

![Cocoapods](https://img.shields.io/cocoapods/v/BeagleScaffold?label=Beagle-Scaffold)
![Cocoapods](https://img.shields.io/cocoapods/v/Beagle?label=Beagle)

**É recomendada para iniciantes.**

### Requisitos
<hr>

Antes de começar a configurar o Beagle para o seu sistema iOS, você vai precisar de um Macbook com Xcode e CocoaPods instalados.

### Primeiros Passos
<hr>

Esse tutorial vai configurar o Beagle desde o início.

**Passo 1**: Crie um novo projeto no Xcode.

**Passo 2**: Use o comando `pod init` no terminal para criar um arquivo Podfile na raiz do seu projeto, e adicione a dependência do Beagle Scaffold:

```ruby
target 'MinhaAplicacao' do
  pod 'BeagleScaffold'
end
```
Se você não é familiarizado com CocoaPods, dê uma olhada na [documentação](https://guides.cocoapods.org/) deles.

O Beagle Scaffold possui implementações padrão de uma camada de Rede, Cache e Log para você, acopladas na lib [BeagleDefaults](https://docs.usebeagle.io/get-started/using-beagle-helpers/ios/beagle-defaults).

**Passo 3**: Para adicionar as configurações do Beagle na sua aplicação, importe o `BeagleScaffold` e chame a nossa função _start()_ da classe _BeagleConfig_, no método `scene` da classe **SceneDelegate**:

```swift
func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
    BeagleConfig.start()
    guard let _ = (scene as? UIWindowScene) else { return }
}
```

**Passo 4**: Nesse último passo implementaremos a inicialização do projeto via View Code na classe `SceneDelegate` utilizando o método `scene`. <br>

Dê o nome `windowScene` para o `guard let` já criado para nós pelo Xcode:

```swift
guard let windowScene = (scene as? UIWindowScene) else { return }
```

Inicialize a variável `window` passando o `windowScene`.

```swift
window = UIWindow(windowScene: windowScene)
```

Atribua o nosso `BeagleScaffoldDemoViewController` ao `window.rootViewController` e chame a função `makeKeyAndVisible()`. Seu código deveria estar assim neste ponto:

```swift
func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
    BeagleConfig.start()
    guard let windowScene = (scene as? UIWindowScene) else { return }
    window = UIWindow(windowScene: windowScene)
    window?.rootViewController = BeagleScaffoldDemoViewController
    window?.makeKeyAndVisible()
}
```

**Passo 5**: Rode seu projeto. Você deveria estar vendo uma tela de exemplo com todos os componentes do Beagle no seu simulador.

<hr>

##### Para saber mais sobre o Beagle: Por favor verifique nosso [Beagle](https://github.com/ZupIT/beagle) repositório.
##### Para saber mais sobre o  Beagle-Defaults: Por favor verifique sua documentação em [Beagle-Defaults]({{< ref path="/get-started/using-beagle-helpers/ios/beagle-defaults" lang="pt" >}}).
