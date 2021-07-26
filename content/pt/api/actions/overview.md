---
title: Visão Geral
weight: 10
type: overview
description: Descrição dos componentes do tipo Action e seus atributos
---

---

## O que é?

No Beagle, uma ação lida com os comportamentos \(funções\), que serão executadas em sua aplicação assim que um determinado evento for disparado. Essas ações podem ser padrão do próprio Beagle ou customizadas.

Qualquer evento no Beagle, deve ser associado a uma lista de ações. Veja abaixo um exemplo de componente de botão, que associa uma ação de alerta padrão ao seu evento de `onPress`:

```javascript
{
   "_beagleComponent_": "beagle:button",
   "text": "click to show alert",
   "onPress": [{
      "_beagleAction_": "beagle:alert",
      "title": "Hello",
      "message": "World"
   }]
}
```

Uma ação é um mapa chave/valor com pelo menos uma propriedade:`_beagleAction_`. O valor dela indica qual ação deve ser executada quando o evento for disparado. As demais propriedades especificam os parâmetros esperados pela ação indicada.

Existem diversas ações implementadas no Beagle por padrão e todas elas começam com prefixo "**beagle**:" e as ações customizadas possuem o prefixo "**custom**:".

Para saber como criar ações customizadas, dê uma olhada nesse tutorial de como criar novas actions para cada plataforma ([Android]({{< ref path="android/getting-started.md" >}}), [iOS]({{< ref path="ios/getting-started.md" >}}), [Flutter]({{< ref path="flutter/getting-started.md" >}}), [Web]({{< ref path="web/commons/creating-a-project-from-scratch.md" >}}), [React-Native]({{< ref path="react-native/react-native-installing.md" >}}))

## **Tipos de ações**

Abaixo, você encontra a descrição completa de cada ação disponível por padrão no Beagle:
