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

```
target 'MinhaAplicacao' do
  pod 'BeagleScaffold'
end
```
Se você não é familiarizado com CocoaPods, dê uma olhada na [documentação](https://guides.cocoapods.org/) deles.

Também adicione a dependência do YogaKit no seu projeto via CocoaPods, mas aponte para o nosso repositório pois precisamos de algumas modificações que ainda não foram mergeadas no repositório oficial deles. Como abaixo: 

```
pod 'YogaKit', :git => 'https://github.com/ZupIT/YogaKit'
```

O Beagle Scaffold possui implementações padrão de uma camada de Rede, Cache e Log para você, acopladas na lib [BeagleDefaults](https://docs.usebeagle.io/get-started/using-beagle-helpers/ios/beagle-defaults).

**Passo 4**: Para adicionar as configurações do Beagle na sua aplicação, chame a nossa função _start()_ da classe _BeagleConfig_, no seu _appDelegate_:

```
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        
        BeagleConfig.start()
        
        return true
    }
```

**Passo 5**: Agora para o último passo antes de rodar a aplicação, nós vamos implementar a parte "view code". Adicione ao seu _appDelegate_ uma variável chamada _window_ do tipo _UIWindow?_. Inicialize-a, atribua ao _rootViewController_ dela o nosso _BeagleScaffoldDemoViewController_ e chame a função _makeKeyAndVisible()_. Como a seguir:

```
var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    
        BeagleConfig.start()
        
        window = UIWindow(frame: UIScreen.main.bounds)
        window?.rootViewController = BeagleScaffoldDemoViewController
        window?.makeKeyAndVisible()
        
        return true
    }
```


**Passo 6**: Rode seu projeto. Você deveria estar vendo uma tela de exemplo com todos os componentes do Beagle no seu simulador.

<hr>

##### Para saber mais sobre o Beagle: Por favor verifique nosso [Beagle](https://github.com/ZupIT/beagle) repositório.
##### Para saber mais sobre o  Beagle-Defaults: Por favor verifique sua documentação em [Beagle-Defaults](/pt/get-started/using-beagle-helpers/ios/beagle-defaults).