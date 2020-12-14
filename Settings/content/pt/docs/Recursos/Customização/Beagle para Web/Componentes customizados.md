---
title: Componentes customizados
weight: 170
description: >-
  Nesta seção, você encontra como customizar componentes no framework do Beagle
  para Web.
---

---

### Criar um componente customizado

O primeiro passo que você deve fazer é criar um componente comum. Para isso, crie um novo componente em seu projeto. 

{{< tabs name="T76" >}}
{{% tab name="Angular" %}}
Neste exemplo, o componente será criado com o nome `customText`. Basta utilizar o comando abaixo no seu terminal:

```text
ng generate component components/customText --skip-import
```
{{% /tab %}}

{{% tab name="React" %}}
Neste exemplo, será criado um componente chamado `CustomTextComponent` para renderizar um texto. Basta criar um novo arquivo chamado `CustomTextComponent.tsx` dentro da pasta `components` \(se esta pasta não existir basta criá-la dentro da pasta `src`\). 

No arquivo criado coloque o seguinte código:

```text
import React from 'react'

function CustomTextComponent() {
  return (
    <p>Beagle Web React</p>
  )
}

export default CustomTextComponent;
```
{{% /tab %}}
{{< /tabs >}}

Feito isso, adicione no arquivo de associações da biblioteca Beagle do seu projeto como indicado nos exemplos a seguir. 

{{< tabs name="T77" >}}
{{% tab name="Angular" %}}
Abra o arquivo `beagle-components.module.ts` e adicione o novo `CustomTextComponent` gerado na lista, como no exemplo abaixo:

```text
...
import { CustomTextComponent } from './components/custom-text/custom-text.component'
// import all the components you're going to use with beagle

const components = [
  CustomTextComponent
]

@NgModule({
  declarations: components,
  entryComponents: components,
  exports: components,
  imports: [
    // everything your components depend on
  ],
})
export class BeagleComponentsModule {}
```

No arquivo `beagle.module.ts` adicione seu novo componente na lista de associações

```text
import { BeagleModule } from '@zup-it/beagle-angular'
import { CustomTextComponent } from './components/custom-text/custom-text.component'
// import all the components you wish to use with Beagle.

@BeagleModule({
  baseUrl: 'http://localhost:4200/assets',
  module: {
    path: './beagle-components.module',
    name: 'BeagleComponentsModule',
  },
  components: {
    // Associate every beagle component to your angular component.
    "custom:text": CustomTextComponent
  },
})
export class Beagle {}
```

{{% alert color="warning" %}}
Se você não encontrou os arquivos `beagle-components.module.ts` ou `beagle.module.ts`, veja [**como configurar a biblioteca Beagle Web para o Angular**.](../../../../../get-started/usando-o-beagle/web/angular)
{{% /alert %}}
{{% /tab %}}

{{% tab name="React" %}}
Abra o arquivo de configuração da biblioteca Beagle em seu projeto \(se você seguiu o tutorial é o arquivo `beagle-service.ts`\) e adicione o seu componente a lista de associações. 

Caso você não tenha este arquivo em seu projeto, veja [**como configurar a biblioteca Beagle Web para o React**](../../../../get-started/usando-o-beagle/web/react).

```text
import { createBeagleUIService } from '@zup-it/beagle-react'
import CustomTextComponent from '../components/CustomTextComponent'

export default createBeagleUIService<any>({
  baseUrl: '',
  components: {
    'custom:text': CustomTextComponent
  }
})

```
{{% /tab %}}
{{< /tabs >}}

Observe que, no passo acima, a palavra **custom** foi adicionada para identificar os componentes. Isto fará com que a biblioteca Beagle entenda que este componente não faz parte da lista de componentes pré-definidos. 

### Adicionando propriedades ao componente

Para adicionar propriedades ao componente criado, siga os seguintes passos: 

{{< tabs name="T78" >}}
{{% tab name="Angular" %}}
Abra o arquivo `custom-text.component.ts` e adicione um `@Input`, como no código abaixo: 

```text
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-text',
  templateUrl: './custom-text.component.html',
  styleUrls: ['./custom-text.component.less']
})
export class CustomTextComponent implements OnInit {
  @Input() myCustomText: string

  constructor() { }

  ngOnInit(): void {
  }

}

```

Feito isso, adicione a referência ao arquivo `custom-text.component.html`

```text
<div>
    <h1>{{myCustomText}}</h1>
</div>
```

{{% alert color="danger" %}}
Se você estiver com o projeto rodando, é necessário reiniciá-lo com um dos comandos:`yarn serve` ou `npm run serve`
{{% /alert %}}
{{% /tab %}}

{{% tab name="React" %}}
No React, todos os atributos definidos no JSON podem ser acessados através de props, veja o exemplo

```text
import React from 'react'

interface CustomText {
  myCustomText: string
}


function CustomTextComponent(props: CustomText) {
  return (
    <p>{props.myCustomText}</p>
  )
}

export default CustomTextComponent;
```
{{% /tab %}}
{{< /tabs >}}

### Criando o JSON

Podemos agora adicionar o nosso componente ao arquivo JSON.  Se você seguiu o tutorial, abra o arquivo `payload.json` e o substitua com o conteúdo abaixo, caso contrário, apenas substitua a fonte de onde o seu JSON foi guardado ou gerado. 

```text
{
  "_beagleComponent_": "beagle:container",
  "children": [
    {
      "_beagleComponent_": "custom:text",
      "myCustomText": "Beagle Web is Awesome"
    }
  ]
}
```

{{% alert color="success" %}}
Parabéns, você criou seu primeiro componente customizado no Beagle!

Lembrando que este componente recebe propriedades e é renderizado pela biblioteca Beagle.
{{% /alert %}}
