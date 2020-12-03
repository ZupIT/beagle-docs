---
title: Headers Padrões
weight: 162
description: Você encontrará aqui a descrição dos headers padrões e como desabilitados
---

---

O Beagle Web envia **dois tipos de headers** que são padrões para o Beagle:

1. **beagle-platform:** header utilizado que indica para o backend que a requisição partiu da Web. Desta forma, o valor enviado é sempre **WEB.** 
2. **beagle-hash**: header utilizado para o correto funcionamento do [**protocolo de cache de Beagle**](../../cache/#como-o-protocolo-de-cache-funciona). 

Por padrão, esses headers são sempre enviados, porém podem ser desabilitados pelo parâmetro `useBeagleHeaders` na config. 

Abaixo, você confere exemplos de como desabilitar o envio desses headers nas configs do Angular e React:



```text
@BeagleModule({
  baseUrl: 'http://localhost:4200/assets',
  module: {
    path: './beagle-components.module',
    name: 'BeagleComponentsModule',
  },
  components: {},
  useBeagleHeaders: false
})
export class Beagle { }
```



```text
export default createBeagleUIService({
  baseUrl: "",
  components: {},
  useBeagleHeaders: false
})
```



{{% alert color="info" %}}
Você deve manter os headers habilitados para o correto funcionamento do protocolo de cache do Beagle.
{{% /alert %}}
