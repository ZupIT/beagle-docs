---
title: React Native
weight: 12
description: >-
  Aqui você encontra informações sobre como instalar o Beagle React Native na sua aplicação 
---

---

## Introdução
Este guia considera que você você esteja familiarizado com o React Native. Se esse não é o caso,
por favor leia o [guia do React Native para instalação e criação de novos aplicativos](https://reactnative.dev/docs/environment-setup).

O Beagle está disponível para React Native, mas ainda não temos uma versão estável. O
desenvolvimento está incompleto e ainda precisamos implementar algumas features antes de lançar uma
versão final. Infelizmente, nosso time não é grande o suficiente para fazer do React Native uma
prioridade e, por conta disso, o desenvolvimento é relativamente lento. Nós decidimos lançar versões
betas, pois dessa maneira a comunidade pode começar a usar a biblioteca e até nos ajudar a
finalizá-la. [Aqui]({{< ref path="/resources/customization/beagle-for-react-native/development" lang="pt" >}})
você pode encontrar uma lista com tudo que deveria estar funcionando e o que ainda falta
implementar. Qualquer ajuda é bem-vinda!

## Versionamento
Todas as versões beta do Beagle RN (Beagle React Native) seguirão o padrão de nomenclatura  "0.x.y",
onde "x" representa a versão do Beagle Web Core usada. Como estamos usando a versão "1.7.0" do
Beagle Web Core, a versão atual do Beagle RN é 0.7.0. "y" será usado para lançar novas versões
que usam a mesma versão do Beagle Web Core.

## Compatibilidade
O Beagle RN Beta é garantido funcionar apenas nas versões mais recentes do React Native, i.e. versão
0.64.1 ou superior. É provavelmente possível suportar versões mais antigas, mas essa não é uma
prioridade por agora.

## Instalação
Na raiz do seu projeto React Native, instale com npm ou yarn.

Se você usa yarn:
```bash
yarn add @zup-it/beagle-react-native
```

Se você usa npm:
```bash
npm install @zup-it/beagle-react-native
```

{{% alert color="success" %}}
Parabéns! A biblioteca está instalada. Continue em:
[**como usar o Beagle React Native.**]({{< ref path="/get-started/using-beagle/react-native" lang="pt" >}})
{{% /alert %}}

## **Próximos passos**

Nesta seção você fez a **instalação inicial** do Beagle na sua aplicação!  
Para continuar configurando o Beagle:

👉 Leia em seguida
[**configuração incicial** ]({{< ref path="/get-started/using-beagle/react-native" lang="pt" >}})
para habilitar o Beagle no seu projeto React Native.
