---
title: Local images
weight: 192
description: >-
  You will find here information on how to register your local images.
---

---

Beagle components normally refer to images by an id, see the example below:

```json
{
  "_beagleComponent_": "beagle:image",
  "path": {
    "_beagleImagePath_": "local",
    "mobileId": "zup-logo"
  }
}
```

Above, the image component refers to `zup-logo`. For this to work, this id must be registered in
Beagle. To register images that can be used for beagle, you must provide a map in the configuration
at `beagle-service.ts`. See the example below:

```typescript
import zupLogo from '../assets/zup-logo.png'
// ...

export default createBeagleUIService({
  // ...
  localAssetsPath: {
    'zup-logo': zupLogo,
  },
})
```

The image must exist in your assets folder, in this case, located at `src/assets`. If Typescript
complains, you can create a `src/globals.d.ts` file with the following content:

```typescript
declare module '*.png'
```
