---
title: IOS
weight: 8
description: 'Nesta seção, você encontra o passo a passo da configuração do Beagle no iOS.'
---

---

## Requisitos

Antes de configurar o Beagle para o seu sistema iOS, é importante que você confirme as versões dos programas que estão  instalados na sua máquina. Para o Beagle funcionar, é necessário ter as seguintes versões: 

* **iOS 10.0+**
* **Xcode 11.0+**
* **Swift 5.0+**

## **Gerenciamento de dependências**

Hoje o Beagle está disponível para integração através do [**Carthage**](https://github.com/Carthage/Carthage) e [**CocoaPods**](https://cocoapods.org)

{{% alert color="info" %}}
Lembre de sempre usar a versão mais recente do Beagle e, principalmente, de checar se as diferentes plataformas estão integradas à essa mesma versão. Dessa forma, você garante que todas as ferramentas estão se comunicando corretamente.
{{% /alert %}}

## **Instalação com CocoaPods**

Para integrar o Beagle à sua aplicação através do **CocoaPods** você precisa adicionar o framework como dependência no seu `Podfile`.

Versão atual do Beagle:[![badge](https://img.shields.io/cocoapods/v/Beagle)](https://cocoapods.org/pods/Beagle)



Este processo pode ser feito da seguinte maneira:

```text
pod 'Beagle'
pod 'YogaKit', :git => 'https://github.com/ZupIT/YogaKit'
```

{{% alert color="warning" %}}
No caso do **YogaKit**, você precisa utilizar o nosso fork porque algumas modificações ainda não foram mergeadas no repositório do Facebook.
{{% /alert %}}

## **Instalação com Carthage**

### Passo 1: Integrar com sua aplicação

Para integrar o Beagle à sua aplicação através do **Carthage** você precisa adicinar o framework como dependência no seu `Cartfile`.

O processo pode ser feito da seguinte maneira:

```text
github "ZupIT/beagle" ~> 1.0.1-iOS
```

{{% alert color="warning" %}}
Depois de uma release importante, podemos lançar algumas versões com bug fixes específicas para o iOS, as quais estarão com a tag da versão seguida com o sufixo "-iOS" \(e.g: "1.0.1-iOS"\).
{{% /alert %}}

### Passo 2: Build nas dependências 

Depois de integrado, você deve seguir com o processo normal de build do Carthage nas suas dependências. O esperado é que você receba alguns **arquivos .framework** como resultado. 

No caso do Beagle, os arquivos obrigatórios para que a sua aplicação funcione são: 

* Beagle.framework
* BeagleSchema.framework
* YogaKit.framework

Outros frameworks são utilizados apenas em cenários de uso mais específicos.

## Próximos Passos

Nesta seção, você fez a **instalação inicial** do Beagle na sua aplicação!  
Para continuar a configurar o Beagle:

👉Para continuar conhecendo o Beagle, e testar se deu tudo certo com a instalação, vá para as **configurações iniciais** e [**crie seu primeiro Hello Beagle!**](/pt/primeiros-passos/usando-o-beagle/ios)

👉 Se quiser ir direto para prática, acesse nosso[ **tutorial para criar um projeto do zero**](/pt/primeiros-passos/criando-um-projeto-do-zero/case-ios/)
