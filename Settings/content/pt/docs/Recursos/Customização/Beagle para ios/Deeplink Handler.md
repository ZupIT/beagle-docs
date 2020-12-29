---
title: Deeplink Handler
weight: 151
description: >-
  Nesta seção, você encontra informações sobre o deeplink handler do Beagle no iOS.
---

---

## Introdução

O Beagle realiza todas as suas navegações a partir da dependência **`deepLinkHandler`** presente no BeagleDependencies, ela é do tipo `DeepLinkScreenManaging`.

O protocolo `DeepLinkScreenManaging` possui um método chamado **getNativeScreen** que retorna um UIViewController a partir de um determinado `path` do tipo String. É possível passar dados adicionais através de um dicionário do tipo [String: String].

```swift
public protocol DeepLinkScreenManaging {
    func getNativeScreen(with path: String, data: [String: String]?) throws -> UIViewController
}
```

## **Exemplo**

Para utilizar o protocolo `DeepLinkScreenManaging`, veja as seções abaixo: 

### **Passo 1: Criar uma classe que herda de DeepLinkScreenManaging**

O primeiro passo é criar uma classe que iremos chamar de `DeeplinkManager` que irá conformar com o protocolo `DeepLinkScreenManaging`.

```swift
final class DeeplinkScreenManager: DeepLinkScreenManaging {
    
    func getNativeScreen(with path: String, data: [String: String]?) throws -> UIViewController {
    }
}
```

### **Passo 2: Crie o protocolo DeeplinkScreen**

Feito isso, criamos um protocolo chamado `DeeplinkScreen`, onde cada tela em que será necessário utilizar deeplink para navegação irá conformar com este protocolo.
O protocolo possui dois métodos principais:

- `init(path: String, data: [String: String]?)`: o método de inicialização quando necessário
- `func screenController() -> UIViewController`: o método no qual vamos retornar a UIViewController para qual iremos navegar

```swift

protocol DeeplinkScreen {
    init(path: String, data: [String: String]?)
    func screenController() -> UIViewController
}
```

### **Passo 3: Implemente a classe DeeplinkScreenManager**

Abaixo vemos o exemplo completo da classe criada que herda de `DeepLinkScreenManaging`. Nele, foi criado um dicionário que possui uma `String` como chave e um valor de `DeeplinkScreen.Type`. Um método subscript também foi criado para facilitar o acesso aos elementos do dicionário.

No método `getNativeScreen` verificamos se existe uma tela com o path passado e caso tenha, retornamos um `UIViewController` relacionado à ele. Caso contrário, lançamos um NSError.

```swift

final class DeeplinkScreenManager: DeepLinkScreenManaging {
    
    public static let shared = DeeplinkScreenManager()
    
    private var screens: [String: DeeplinkScreen.Type] = [:]
    
    public subscript(path: String) -> DeeplinkScreen.Type? {
        get {
            return screens[path]
        }
        set {
            screens[path] = newValue
        }
    }
    
    func getNativeScreen(with path: String, data: [String: String]?) throws -> UIViewController {
        guard let screenType = self[path] else {
            throw NSError(domain: "DeeplinkScreenManager", code: 1, userInfo: nil)
        }
        return screenType.init(path: path, data: data).screenController()
    }
}

```

### **Passo 4:  Atribuir as dependências**

No AppDelegate ou na classe de configurações do ambiente do Beagle, atribua a instância de `DeeplinkScreenManager` ao atributo `deepLinkHandler` presente no BeagleDependencies:

```swift

let dependencies = BeagleDependencies()
let deepLinkHandler = DeeplinkScreenManager.shared
deepLinkHandler["PathDaSuaScreen"] = SuaScreen.self
dependencies.deepLinkHandler = deepLinkHandler
Beagle.dependencies = dependencies

```

Pronto! Agora o Beagle utilizará a sua classe com todas as modificações e definições necessárias para realizar suas navegações de Deeplink.
