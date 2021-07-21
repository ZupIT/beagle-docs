---
title: WebView
weight: 190
description: >-
  You will find here information of how to set up the WebView component in Beagle React Native.
---

---

Beagle RN has an implementation of the webview default component, but since web views are not
native to React Native, we need an additional library: `react-native-webview`.

Since the lib `react-native-webview` needs to be natively linked to iOS and Android, we decided to
add it as a peer-dependency, meaning, if you do need the WebView component, you also need to add
this dependency to your `package.json`.

Yarn:
```bash
yarn add react-native-webview
```

NPM:
```bash
npm install react-native-webview
```
{{% alert color="warning" %}}
react-native-webview must be at version 11.6.2 or higher.
{{% /alert %}}