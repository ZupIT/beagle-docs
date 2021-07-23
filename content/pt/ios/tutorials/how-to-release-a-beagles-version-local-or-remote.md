---
title: Como gerar uma versão do Beagle local ou remota
weight: 220
description: >-
  Nesta seção, você encontra como gerar versões locais do Beagle ou versões
  remotas para o seu repositório quando necessário.
---

---

## Publicando em um repositório remoto

### Usando o CocoaPods

No arquivo `podfile` , assim como qualquer outra dependência, coloque o Beagle e aponte o endereço do seu repositório , como no exemplo a baixo:

```text
pod 'Beagle', :git => 'https://github.com/profile/myrepo'
```

Depois de configurado o `podfile` execute o seguinte comando para baixar do seu repositório:

```text
pod install
```

### Usando o Carthage

No arquivo `Cartfile`, adicione o repositório da sua versão do Beagle:

```text
github “YourUser/YourRepository”
```

## Publicando em um repositório local

### Usando o CocoaPods

Abra o terminal e vá para a pasta raiz do Beagle e digite o seguinte comando:

```text
pod spec create MyBeagle
```

`E MyBeagle.podspec` será criado. Agora abra esse arquivo com um editor de texto e siga como o exemplo abaixo:

```swift
Pod::Spec.new do |spec|

spec.name = "MyBeagle"
spec.version = "1.0.0"
spec.summary = "A short description"
spec.description = "Complete description"

spec.platform = :ios, "12.2"

spec.source = { :path => '.' }
```

Em seguida execute o seguinte comando no terminal com a pasta raiz do projeto:

```text
pod install
```

### Usando o Carthage

No arquivo `Cartfile`, adicione o diretório da sua versão do Beagle da seguinte forma:

```text
git "file:////Users/beagle" "master"
```

{{% alert color="warning" %}}
Importante que você adicione o caminho completo do diretório com a sua versão do Beagle para que essa chamada funcione corretamente. 
{{% /alert %}}