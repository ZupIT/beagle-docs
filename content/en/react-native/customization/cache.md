---
title: Cache
weight: 189
description: >-
  You will find here information of how to persist cache in Beagle React Native.
---

---

By default, Beagle RN will only cache files temporally, i.e. as soon the app is closed, the cache
will be lost. To make a persistent cache, you must provide an implementation of the interface
`BeagleStorage`. Both `react-native/AsyncStorage` and `@react-native-async-storage/async-storage`
implement this interface. We don't use React Native's default implementation because it's
deprecated.

If you need to persist the cache, we recommend using `@react-native-async-storage/async-storage`. To
install it, follow the instructions
[here](https://react-native-async-storage.github.io/async-storage/docs/install/).

To use it with beagle, just add the following configuration to `src/beagle/beagle-service.ts`:

```typescript
import AsyncStorage from '@react-native-async-storage/async-storage'
// ...

export default createBeagleUIService({
  // ...
  customStorage: AsyncStorage,
})
```
