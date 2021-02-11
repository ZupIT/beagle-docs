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

**Passo 2**: Primeiramente, nós iremos usar uma abordagem programática chamada _view code_, então precisamos apagar todas as referências à _main.storyboard_, que normalmente é o jeito em que o Xcode programa sua aplicação pra ser iniciada. Essas referências estão localizadas em:

* info.plist > Application Scene Manifest > Scene Configuration > Application Session Role > Item 0 (Default Configuration) > Storyboard Name
* info.plist > Main storyboard file base name
* yourProject.xcodeproj > General > Main Interface

Delete as três. A terceira basta apagar e confirmar.

**Passo 3**: Adicione o BeagleScaffold como uma dependência do seu projeto usando o gerenciador de pacotes CocoaPods:

- https://cocoapods.org/pods/BeagleScaffold

```ruby
target 'MinhaAplicacao' do
  pod 'BeagleScaffold'
end
```
Se você não é familiarizado com CocoaPods, dê uma olhada na [documentação](https://guides.cocoapods.org/) deles.

Também adicione a dependência do YogaKit no seu projeto via CocoaPods, mas aponte para o nosso repositório pois precisamos de algumas modificações que ainda não foram mergeadas no repositório oficial deles. Como abaixo: 

```ruby
pod 'YogaKit', :git => 'https://github.com/ZupIT/YogaKit'
```

O Beagle Scaffold possui implementações padrão de uma camada de Rede, Cache e Log para você, acopladas na lib [BeagleDefaults](https://docs.usebeagle.io/get-started/using-beagle-helpers/ios/beagle-defaults).

**Passo 4**: Para adicionar as configurações do Beagle na sua aplicação, chame a nossa função _start()_ da classe _BeagleConfig_, no método `scene` da classe **SceneDelegate**:

```swift
func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
    BeagleConfig.start()
    guard let _ = (scene as? UIWindowScene) else { return }
}
```

**Passo 5**: Nesse ultimo passo implementaremos a parte "view code" na classe `SceneDelegate` utilizando o método `scene`. <br>

Dê o nome `windowScene` para o `guard let` já criado para nós pelo Xcode:

```swift
guard let windowScene = (scene as? UIWindowScene) else { return }
```

Inicialize a variável `window` passando o `windowScene`.

```swift
window = UIWindow(windowScene: windowScene)
```

Importe o `BeagleScaffold`.

Atribua o nosso `BeagleScaffoldDemoViewController` ao `window.rootViewController` e chame a função `makeKeyAndVisible()`. Seu código deveria estar assim:

```swift
func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
    BeagleConfig.start()
    guard let windowScene = (scene as? UIWindowScene) else { return }
    window = UIWindow(windowScene: windowScene)
    window?.rootViewController = BeagleScaffoldDemoViewController
    window?.makeKeyAndVisible()
}
```

**Passo 6**: Rode seu projeto. Você deveria estar vendo uma tela de exemplo com todos os componentes do Beagle no seu simulador.

<hr>

##### Para saber mais sobre o Beagle: Por favor verifique nosso [Beagle](https://github.com/ZupIT/beagle) repositório.
##### Para saber mais sobre o  Beagle-Defaults: Por favor verifique sua documentação em [Beagle-Defaults]({{< ref path="/get-started/using-beagle-helpers/ios/beagle-defaults" lang="pt" >}}).