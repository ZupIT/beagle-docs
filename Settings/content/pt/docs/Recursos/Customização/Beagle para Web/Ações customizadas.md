---
title: Ações customizadas
weight: 166
description: >-
  Nesta seção, você encontra quais ações podem ser customizadas no framework do
  Beagle para Web.
---

---

É possível criar ações customizadas para o seus components com o Beagle.

### Criar um ActionHandler

**Passo 1:** Crie um interface com a propriedade obrigatória _`_beagleAction_`_ e outra com os  outros valores necessários, como no exemplo abaixo onde dois parâmetros foram criados: A e B.

O nome da ação customizada `_beagleAction_`

```javascript
interface CustomAction {
  _beagleAction_: 'custom:myCustomAction',
  parameterA: string,
  parameterB: number
}
```

**Passo 2:** Crie a função `ActionHandler` com a seguinte interface:

```javascript
import { ActionHandler } from '@zup-it/beagle-web'


export const customAction: ActionHandler<CustomAction> = ({ action }) => {

}
```

{{% alert color="warning" %}}
Na função ActionHandler, você pode acessar os valores definidos como no exemplo acima:`action.parameterA` e `action.parameterB.`
{{% /alert %}}

**Passo 3:** Adicione o nome da ação no arquivo de associação do seu framework. 

{{< tabs name="T76" >}}
{{% tab name="Angular" %}}
Para Angular: adicione beagle.module.ts

```javascript
@BeagleModule({
  ...
  customActions:{
    "custom:myCustomAction": customAction //nome do action handler
  }
})
export class Beagle {}
```
{{% /tab %}}

{{% tab name="React" %}}
Para React: adicione ao seu arquivo de configuração do Beagle 

```javascript
export default createBeagleUIService<any>({
    ...
    customActions:{
        "custom:myCustomAction": customAction //nome do action handler
      }
})

```
{{% /tab %}}
{{< /tabs >}}

### Adicione ações ao JSON 

Adicione a ação customizada ao JSON e adicione os parâmetros definidos na inteface do ActionHandler. 

Veja abaixo um exemplo com button: 

```text
{
    "_beagleComponent_": "beagle:button",
    "text": "Clique para ação customizada",
    "onPress": {
        "_beagleAction_": "custom:myCustomAction",
        "parameterA": "Beagle Web",
        "parameterB": 10
  }
}
```

{{% alert color="warning" %}}
Fique atento aos tipos de classe, quando você adicionar um parâmetro a ação cusomizada, o exemplo acima era uma `string` e`number.` 
{{% /alert %}}
