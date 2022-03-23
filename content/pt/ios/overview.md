---
title: Visão Geral
weight: 1
type: overview
description: 'Aqui você encontrará informações sobre como configurar um projeto com o Beagle em aplicações iOS.'
---

---
Versão mais atual

![Cocoapods](https://img.shields.io/cocoapods/v/BeagleScaffold?label=Beagle-Scaffold)
![Cocoapods](https://img.shields.io/cocoapods/v/BeagleDefaults?label=Beagle-Defaults)
![Cocoapods](https://img.shields.io/cocoapods/v/Beagle?label=Beagle)

<hr>

Para começar a utilizar o beagle, você pode configurar um projeto do zero ou usar como auxilio as nossas bibliotecas (libs) de apoio:

## Configurando um projeto do Zero
{{% alert color="warning" %}}
Nessa opção você adicionará o Beagle a um projeto iOS e o configurará manualmente. Esse modo é indicado para usuarios mais experientes e que já tenham familiaridade com o Beagle. Mas é claro, nada impepede que esse seja o seu primeiro contato!

Vá para a seção [**Primeiros-Passos**]({{< ref path="/iOS/getting-started.md" lang="pt" >}}) para configurar o Beagle em uma aplicação iOS manualmente
{{% /alert %}}

## Utilizando uma biblioteca de apoio

{{% alert color="warning" %}}
![Cocoapods](https://img.shields.io/cocoapods/v/BeagleScaffold?label=Beagle-Scaffold)

Esta biblioteca irá definir quase todas as configurações necessárias para começar a usar o Beagle em seu projeto. Aconselhamos o uso dessas bibliotecas para pessoas que nunca usaram o Beagle antes. Vá para a seção [Beagle-Scaffold]({{< ref path="/ios/libs/beagle-scaffold.md" lang="pt" >}}) para configurar o Beagle em uma aplicação iOS.
{{% /alert %}}

{{% alert color="warning" %}}
![Cocoapods](https://img.shields.io/cocoapods/v/BeagleDefaults?label=Beagle-Defaults)

Esta biblioteca irá definir somente as classes que definem a camada de cliente de rede e Logger padrão que demonstram o contrato com o Beagle. Todas as outras configurações necessárias para o funcionamento do Beagle serão feitas manualmente<br>Todos essas clases também estão disponíveis na biblioteca Scaffold acima. Vá para a seção [Beagle-Defaults]({{< ref path="/ios/libs/beagle-defaults.md" lang="pt" >}}) para configurar o Beagle em uma aplicação iOS.
{{% /alert %}}