---
title: WEB
weight: 10
description: >-
  Nesta seção, você encontra o passo a passo da instalação do Beagle na sua
  aplicação web, seja para Angular ou React.
---

---

## Introdução

Ao contrário das configurações para aplicações mobile, o Beagle para Web não exige requisitos prévios. Basta apenas seguir com os procedimentos de instalação de acordo com o framework que estiver utilizando: 

* [**Angular** ](beagle-web.md#angular)
* [**React** ](beagle-web.md#react)

## Angular

Versão atual do Beagle Angular:[![badge](https://img.shields.io/npm/v/@zup-it/beagle-angular?logo=Angular)](https://github.com/ZupIT/beagle-web-angular)

### Passo 1: Instalar a biblioteca Beagle

Para seguir com o processo de instalação, navegue até a raiz do seu projeto angular e execute um dos comandos abaixo de acordo com o gerenciador de pacotes de sua preferência.

Caso utilize o[ **Yarn**](https://yarnpkg.com/):

```text
yarn add @zup-it/beagle-angular
```

Caso utilize o [**npm**](https://www.npmjs.com/):

```text
npm install --save @zup-it/beagle-angular
```

### Passo 2: Verificar a instalação

Para confirmar se o processo funcionou, basta executar um dos comandos abaixo: 

```text
yarn beagle help
```

```text
npx beagle help
```

Se os comandos do Beagle forem listados como na imagem abaixo, isso significa que a instalação ocorreu corretamente.

![](/docs-beagle/image%20%2814%29.png)

{{% alert color="success" %}}
Parabéns, a sua biblioteca está instalada! Veja agora [**como usar o Beagle no Angular**](../usando-beagle/web/angular.md)**.**
{{% /alert %}}

## React

Versão atual do Beagle React:[![badge](https://img.shields.io/npm/v/@zup-it/beagle-react?logo=React)](https://github.com/ZupIT/beagle-web-react)

### Passo 1: Instalando a biblioteca Beagle

Para seguir com o processo de instalação, navegue até a raiz do seu projeto e execute um dos comandos abaixo de acordo com o gerenciador de pacotes de sua preferência.

Caso utilize o[ **Yarn**](https://yarnpkg.com/):

```text
yarn add @zup-it/beagle-react
```

Caso utilize o [**npm**](https://www.npmjs.com/):

```text
npm install --save @zup-it/beagle-react
```

{{% alert color="success" %}}
Parabéns, a sua biblioteca está instalada! Veja agora [**como usar Beagle no React.**](../usando-beagle/web/react.md)
{{% /alert %}}

## Próximos Passos

Nesta seção, você fez a **instalação inicial** do Beagle na sua aplicação!  
Para continuar a configurar o Beagle:

👉Vá para as [**configurações iniciais**](../usando-beagle/web/) para habilitar uso do Beagle no seu projeto Web

👉 Se quiser ir direto para prática, acesse nosso[ **tutorial para criar um projeto do zero**](../criando-projeto-do-zero/case-web.md)
