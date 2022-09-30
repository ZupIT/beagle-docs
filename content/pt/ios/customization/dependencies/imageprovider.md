---
title: ImageProvider
weight: 151
description: >-
  Nesta seção você encontrará informações sobre o ImageProvider seus métodos e como alterá-los
---

---

## **Introdução**

Você pode configurar a maneira com que uma imagem local é carregada pelo componente **Image** fornecendo uma classe que implementa essa lógica.

## **ImageProviderProtocol**

O protocolo **ImageProviderProtocol** consiste de apenas um método chamado **loadImageProvider(id:)** que será utilizado para recuperar uma imagem local.

```swift

public protocol ImageProviderProtocol {
    func loadImageProvider(id: String) -> UIImage?
}

```

O método fetchImage recebe um parâmetro:

- **id**: String id utilizada para identificar uma imagem local.

## **Implementação default**

No Beagle iOS, nós temos uma estrutura chamada **ImageProvider** que recupera a imagem local usando `UIImage(named: id, in: mainBundle)`, onde `mainBundle` é o bundle configurado no `BeagleDependencies`.

```swift

struct ImageProvider: ImageProviderProtocol {
    @Injected var mainBundle: BundleProtocol
    
    func loadImageProvider(id: String) -> UIImage? {
        return UIImage(named: id, in: self.mainBundle.bundle, compatibleWith: nil)
    }
}

```

## **Trocando a implementação default**

Para trocar a classe resonsável por carregar imagens locais no beagle siga os passos abaixo:

### **Passo 1: Implementar o `ImageImageProviderProtocol`**

Implemente o `ImageImageProviderProtocol` na classe (ou estrutura) que deseja utilizar, neste caso nós criamos uma estrutura `CustomImageProvider` que será usada como exemplo:

```swift

struct CustomImageProvider: ImageProviderProtocol {

    func loadImageProvider(id: String) -> UIImage? {
        // sua implementação
    }
}

```

### **Step 2: Atribuindo o dependencies**

No AppDelegate ou na sua classe de configuração do Beagle, atribua a instância do `CustomImageProvider` ao atributo `imageProvider` presente no `BeagleDependencies`:

```swift
let dependencies = BeagleDependencies()
dependencies.imageProvider = CustomImageProvider()
BeagleConfigurator.setup(dependencies: dependencies)
```

Pronto! O Beagle usará seu imageProvider com as modificações implementadas para recuperar suas imagens locais.
