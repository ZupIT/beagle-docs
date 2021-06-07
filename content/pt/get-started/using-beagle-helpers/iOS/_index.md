---
title: iOS
weight: 15
description: 'Aqui você encontrará bibliotecas que irão te ajudar quando quiser começar um projeto usando o Beagle para iOS. Essas bibliotecas irão facilitar muito as configurações iniciais do Beagle em um projeto, pulando algumas etapas e começando os estudos mais rapidamente.'
---

---

![Cocoapods](https://img.shields.io/cocoapods/v/BeagleScaffold?label=Beagle-Scaffold)
![Cocoapods](https://img.shields.io/cocoapods/v/BeagleDefaults?label=Beagle-Defaults)
![Cocoapods](https://img.shields.io/cocoapods/v/BeagleGRPC?label=Beagle%20gRPC)
![Cocoapods](https://img.shields.io/cocoapods/v/Beagle?label=Beagle)

### Primeiros Passos
<hr>

Pra começar a usar o Beagle agora, você pode usar as bibliotecas abaixo:

* [Beagle-Scaffold](https://github.com/ZupIT/beagle-helpers/tree/main/iOS/beagle-scaffold):
Essa biblioteca vai conter quase todas as configurações necessárias pra começar a usar o Beagle no seu projeto. Nós aconselhamos o uso dessa biblioteca apenas pra usuários que nunca usaram o Beagle antes.

* [Beagle-Defaults](https://github.com/ZupIT/beagle-helpers/tree/main/iOS/beagle-defaults):
Essa biblioteca já é mais indicada pra usuários de Beagle mais experientes e vai conter apenas algumas classes com configurações necessárias pra usar o Beagle em uma aplicação. Dentre essas configurações temos uma camada padrão de Rede, Log e Cache. Todas elas também estão disponíveis na biblioteca Scaffold acima.

{{% alert color="warning" %}}
Se você deseja usar o Beagle para um aplicativo em produção, recomendamos que você configure um projeto
 do zero usando nossa
 [**documentação**]({{< ref path="/get-started/creating-a-project-from-scratch/case-ios/" lang="pt" >}})
{{% /alert %}}