---
title: WebView
weight: 190
description: >-
  Aqui você encontra informações dobre como configurar o componente de WebView no Beagle React
  Native.
---

---

O Beagle RN tem uma implementação do componente padrão WebView, mas como web views não são nativas
do React Native, precisamos de uma lib adicional: `react-native-webview`.

Como a lib `react-native-webview` precisa ser linkada nativamente com o iOS e Android, nós decidimos
incluí-la apenas como peer-dependency. Isso significa que, se você deseja usar o componente de
WebView na sua aplicação, é necessário adicionar também a dependência para `react-native-webview`.

Se você usa yarn:
```bash
yarn add react-native-webview
```

Se você usa npm:
```bash
npm install react-native-webview
```
{{% alert color="warning" %}}
O react-native-webview precisa estar na versão 11.6.2 ou acima.
{{% /alert %}}
