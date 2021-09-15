---
title: Visão Geral
weight: 3
type: overview
description: 'Aqui você encontrará informações sobre como configurar um projeto com o Beagle em aplicações Android.'
---

---

![Maven Central](https://img.shields.io/maven-central/v/br.com.zup.beagle/beagle-scaffold?color=green&label=Beagle-Scaffold)
![Maven Central](https://img.shields.io/maven-central/v/br.com.zup.beagle/beagle-defaults?color=green&label=Beagle-Defaults)
![Maven Central](https://img.shields.io/maven-central/v/br.com.zup.beagle/android?label=Beagle)

<hr>

Para utilizar o Beagle, você pode configurar um projeto do zero ou usar como auxílio as bibliotecas (libs) de apoio:

## Configurando um projeto do Zero 
{{% alert color="warning" %}}
Nessa opção você adiciona o Beagle a um projeto no Android e pode configurar manualmente. Esse modo é indicado para usuários mais experientes e que já tenham familiaridade com o Beagle. 

Vá para a seção [**Primeiros-Passos**]({{< ref path="/android/getting-started.md" lang="pt" >}}) para configurar o Beagle em uma aplicação Android manualmente
{{% /alert %}}

## Utilizando uma biblioteca de apoio

{{% alert color="warning" %}}
![Maven Central](https://img.shields.io/maven-central/v/br.com.zup.beagle/beagle-scaffold?color=green&label=Beagle-Scaffold)

Esta biblioteca define quase todas as configurações necessárias para começar a usar o Beagle em seu projeto. O uso dessas bibliotecas é recomendado para pessoas que nunca usaram o Beagle. Vá para a seção [Beagle-Scaffold]({{< ref path="/android/libs/beagle-scaffold.md" lang="pt" >}}) para configurar o Beagle em uma aplicação Android
{{% /alert %}}

{{% alert color="warning" %}}
![Maven Central](https://img.shields.io/maven-central/v/br.com.zup.beagle/beagle-defaults?color=green&label=Beagle-Defaults)

Esta biblioteca irá definir somente as classes que definem a camada de cliente HTTP HttpClient, Logger e Cache padrão que demonstram o contrato com o Beagle. Todas as outras configurações necessárias para o funcionamento do Beagle serão feitas manualmente<br>Todos essas clases também estão disponíveis na biblioteca Scaffold acima. Vá para a seção [Beagle-Defaults]({{< ref path="/android/libs/beagle-defaults.md" lang="pt" >}}) para configurar o Beagle em uma aplicação Android:
{{% /alert %}}
