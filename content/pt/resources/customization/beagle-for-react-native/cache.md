---
title: Cache
weight: 189
description: >-
  Aqui você encontra informações de como persistir o cache no Beagle React Native.
---

---

Por padrão, o Beagle RN vai cachear as views temporiaramente, ou seja, até que o app seja fechado.
Para fazer com que o cache seja gravado no sistema de arquivos, é necessário providenciar uma
implementação da interface `BeagleCache`. Ambos `react-native/AsyncStorage` e
`@react-native-async-storage/async-storage` implementam essa interface. Nós não usamos o
AsyncStorage padrão do React Native, pois ele foi depreciado.

Se você precisa de um cache persistente, nós recomendamos os uso da biblioteca
`@react-native-async-storage/async-storage`. Para instalá-la, siga as instruções
[aqui](https://react-native-async-storage.github.io/async-storage/docs/install/).

Para usar o AsyncStorage com o Beagle, basta adicionar o seguinte à configuração do Beagle em
`src/beagle/beagle-service.ts`:

```typescript
import AsyncStorage from '@react-native-async-storage/async-storage'
// ...

export default createBeagleUIService({
  // ...
  customStorage: AsyncStorage,
})
```
