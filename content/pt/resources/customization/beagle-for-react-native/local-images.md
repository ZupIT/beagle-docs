---
title: Imagens locais
weight: 192
description: >-
  Aqui você encontra informações sobre como registrar imagens locais.
---

---

Os componentes do Beagle normalmente se referem a imagens por id, veja o exemplo abaixo:

```json
{
  "_beagleComponent_": "beagle:image",
  "path": {
    "_beagleImagePath_": "local",
    "mobileId": "zup-logo"
  }
}
```

Acima, a imagem à qual o componente se refere é `zup-logo`. Para isso funcionar, esse id precisa
ser registrado no Beagle. Para registrar imagens no Beagle, é necessário passar um mapa na
configuração (`beagle-service.ts`). Veja o exemplo abaixo:

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

A imagem precisa existir na pasta de assets, nesse caso, localizada em `src/assets`. Se o Typescript
reclamar, você pode criar o arquivo `src/globals.d.ts` com o seguinte conteúdo:

```typescript
declare module '*.png'
```
