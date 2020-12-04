---
title: Customized Actions
weight: 163
description: You will find here which actions can be customized on Beagle for Web
---

---

## Introduction

It is possible to create customized actions with Beagle for your components. 

### Create an ActionHandler

**Step 1:** Create an interface with the required property  _`_beagleAction_`_ and  with other necessary values, like the example below, where two parameters were created: A and B.  

 __The customized action name is `_beagleAction_` 

```javascript
interface CustomAction {
  _beagleAction_: 'custom:myCustomAction',
  parameterA: string,
  parameterB: number
}
```

**Step 2:** Create the function  `ActionHandler` with the interface:

```javascript
import { ActionHandler } from '@zup-it/beagle-web'


export const customAction: ActionHandler<CustomAction> = ({ action }) => {

}
```

{{% alert color="warning" %}}
In the ActionHandler function, you can access the defined values like the example above:  `action.parameterA` or `action.parameterB.`
{{% /alert %}}

**Step 3:** Add the action name in the association file according to your framework: 

{{< tabs name="T75" >}}
{{% tab name="Angular" %}}
For Angular: Add beagle.module.ts

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
For React: add to your Beagle configuration file 

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

### Adding actions to JSON

Add the customized action to the JSON and add the defined parameters in the ActionHandler interface

See below an example with a button:

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
Pay attention to the class types when you add a customized action parameter, the example above was `string` and `number.` 
{{% /alert %}}
