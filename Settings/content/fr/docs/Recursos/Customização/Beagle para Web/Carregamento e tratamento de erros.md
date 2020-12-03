---
title: Carregamento e tratamento de erros
<<<<<<< HEAD
weight: 156
description: Veja como alterar os componentes padrões de erro e carregamento.
=======
weight: 172
description: >-
  This a example for a description
>>>>>>> c5badf6233a50a40ff4638a92338d6a7f613e625
---

---

<<<<<<< HEAD
## Loading Component

A biblioteca do Beagle já possui por padrão um componente que é chamado quando ocorre o carregamento de uma tela. Se necessário, é possível trocá-lo por um customizado de acordo com a necessidade da sua aplicação.

Para criar um componente loading, siga os passos abaixo: 



No React:

**Passo 1:** Crie um componente que será o substituto. 

Veja o exemplo:

```text
import React, { FC } from 'react'

const CustomLoadingComponent: FC<any> = () => {
  return (
    <div>Carregando</div>
  )
}

export default CustomLoadingComponent
```

**Passo 2:** Adicione-o à lista de componentes do Beagle Service para substituir o componente padrão:

```text
import { createBeagleUIService } from '@zup-it/beagle-react'
import CustomLoadingComponent from '../components/CustomLoading'

export default createBeagleUIService<any>({
  baseUrl: "localhost:4000",
  components: {
    "custom:loading":CustomLoadingComponent
  }
})
```



No Angular

**Passo 1:** Crie um componente que será o substituto. 

Você pode usar o angular cli se preferir com o comando para gerar automaticamente o componente, veja:

```text
ng generate component components/custom-loading
```

**Passo 2:** Depois, abra o arquivo `beagle-components.module.ts` e adicione o componente a lista:

```text
import { NgModule } from '@angular/core'
import { CustomLoadingComponent } from './components/custom-loading/custom-loading.component';
// import all the components you're going to use with beagle

const components = [
  CustomLoadingComponent
];

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

**Passo 3:** Finalmente você pode substituir o componente padrão no arquivo `beagle.module.ts`

```text
import { BeagleModule } from '@zup-it/beagle-angular';
import { CustomLoadingComponent } from './components/custom-loading/custom-loading.component';
// import all the components you wish to use with Beagle.

@BeagleModule({
  baseUrl: 'http://mypath',
  module: {
    path: './beagle-components.module',
    name: 'BeagleComponentsModule',
  },
  components: {
    'custom:loading': CustomLoadingComponent
  }
})
export class Beagle { }

```

{{% alert color="warning" %}}
Os arquivos `beagle.module.ts` e `beagle-components.module.ts` são gerados automaticamente pela biblioteca no angular. Se você não encontrou [verifique sua instalação](../../../get-started/installing-beagle/)
{{% /alert %}}



## Error Component

O componente de erro padrão do Beagle é chamado quando ocorrem erros de conexão como, por exemplo,  um caminho para o servidor está inacessível. 

Para este componente a biblioteca expõe uma interface chamada `ErrorComponentParams`, por meio dela você tem acesso a lista de erros e a um método retry, responsável por refazer a requisição para o servidor.

### ErrorComponentParams

| Atributo | Tipo | Definição |
| :--- | :--- | :--- |
| retry | Método | Refaz a requisição para o servidor |

Usando essa interface você pode criar o componente, veja o exemplo de acordo com cada framework:



No React, é preciso criar um `Functional Component` que usa a interface `ErrorComponentParams`, note que ao usá-la você tem acesso à duas `props` errors e retry, que são respectivamente a lista de erros e o método `retry` ambos descritos na interface:

```text
import { ErrorComponentParams } from '@zup-it/beagle-react'
import React, { FC } from 'react'

const CustomErrorComponent: FC<ErrorComponentParams> = ({ retry }) => {

  return (
    <>
      <p>
        Unexpected Error!
      </p>
      <button onClick={retry}>Retry</button>
    </>
  )
}


export default CustomErrorComponent
```

Depois de criado basta adicioná-lo a lista de componentes do Beagle Service:

```text
import { createBeagleUIService } from '@zup-it/beagle-react'
import CustomErrorComponent from '../components/CustomError'

export default createBeagleUIService<any>({
  baseUrl: "localhost:4000",
  components: {
    "custom:error":CustomErrorComponent
  }
})
```



No Angular, crie primeiro um componente, se você preferir pode usar o angular cli para gerar automaticamente a estrutura inicial:

```text
ng g component components/custom-error
```

Abra o arquivo `controller` do componente que acabou de ser criado e adicione a interface `ErrorComponentParams`.  A interface nos da acesso a dois `@Inputs` errors e retry que são respectivamente a lista de erros e o método para refazer a requisição:

```text
import { Component, Input } from '@angular/core';
import { ErrorComponentParams } from '@zup-it/beagle-angular';

@Component({
  selector: 'app-custom-error',
  templateUrl: './custom-error.component.html',
  styleUrls: ['./custom-error.component.less']
})
export class CustomErrorComponent implements ErrorComponentParams {

  @Input() retry: () => void;

  handleRetry() {
    this.retry();
  }

}
```

Agora, adicione o componente criado a lista do arquivo `beagle-components.module.ts`

```text
import { NgModule } from '@angular/core';
import { CustomErrorComponent } from './components/custom-error/custom-error.component';
// import all the components you're going to use with beagle

const components = [
  CustomErrorComponent
];

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

Finalmente, substitua o componente padrão no arquivo `beagle.module.ts`

```text
import { CustomErrorComponent } from './components/custom-error/custom-error.component';
// import all the components you wish to use with Beagle.

@BeagleModule({
  baseUrl: 'http://localhost:4202/assets',
  module: {
    path: './beagle-components.module',
    name: 'BeagleComponentsModule',
  },
  components: {
    'custom:error': CustomErrorComponent
  }
})
export class Beagle { }
```

{{% alert color="warning" %}}
Os arquivos `beagle.module.ts` e `beagle-components.module.ts` são gerados automaticamente pela biblioteca no angular. Se você não os encontrou [**verifique sua instalação**](../../../get-started/installing-beagle/)**.**
{{% /alert %}}
=======
undefined
>>>>>>> c5badf6233a50a40ff4638a92338d6a7f613e625
