---
title: Case Web
weight: 43
description: 'Nesta seção, você encontra informações para iniciar um projeto Web com Beagle.'
---

---

## Iniciando um projeto Web

### Pré-Requisitos

Para criar um projeto com Beagle para Web, confirme se você tem instalado os seguintes programas:

* Node 10.16 +
* Yarn ou npm

Para iniciar o projeto é preciso utilizar o Visual Studio Code. Caso ainda não o tenha instalado, você pode baixá-lo no [**site oficial da ferramenta**](https://code.visualstudio.com/). 

Após a instalação, siga os passos de acordo com o framework escolhido: 

{{< tabs id="T8" >}}
{{% tab name="Angular" %}}
**Passo 1:** Instale o [**Angular CLI**](https://cli.angular.io/), abra o terminal e use o comando abaixo:

```text
ng new caseAngular
```

Aguarde o CLI terminar a criação do projeto.

![](/assets%2F-M-Qy7jZbUpzGRP5GbCZ%2F-M9PRY_vOWaeZoXKLq2p%2F-M9PUdUA5t1QcYXL3XJ7%2Fimage.png?alt=media&token=a3869009-df72-4a8c-940a-e040aa47a77a)

**Passo 2:** entre na pasta do projeto gerado `cd caseAngular`, adicione o **Beagle Angular**  ao seu repositório com um dos comandos abaixo de acordo com seu gerenciador de pacotes:

```text
npm install --save @zup-it/beagle-angular
```

```text
yarn add @zup-it/beagle-angular
```

 Agora, aguarde a instalação.

![](/assets%2F-M-Qy7jZbUpzGRP5GbCZ%2F-M9PRY_vOWaeZoXKLq2p%2F-M9PYjULyS3UHn633rQT%2Fimage.png?alt=media&token=bec6af4b-c54e-47ae-b72e-bacd0132ba81)

**Passo 3:** digite um desses comandos e aperte o enter:

```text
yarn beagle init
```

```text
npx beagle init
```

* Na pergunta '**Would you like to use yarn or npm?'** Digite a opção que você escolheu para usar como gerenciador, no exemplo será o `yarn`, portanto digite `yarn`e aperte enter. 
* Na pergunta '**Path to the beagle module \(press enter to use default\)' -**  digite qual o caminho do módulo que será usado para o Beagle, como o projeto foi criado agora, não há módulos ainda, portanto aperte enter sem informar nada. 
* Na pergunta '**Path to the module with the components to use with beagle \(press enter to use default\)' -** digite qual o caminho do módulo que será usado para o Beagle, como o projeto foi criado agora, não há módulos ainda, portanto aperte enter sem informar nada. 
* Na pergunta '**What's the base url of the backend providing your beagle JSONs? \(press enter to use default\)' -** digite qual será a URL base do backend que será utilizada para resgatar os JSONs, aqui será usada o mockyio, então digite `https://www.mocky.io/v2/`e aperte enter. Aguarde a configuração terminar: 

![](/assets%2F-M-Qy7jZbUpzGRP5GbCZ%2F-M9PRY_vOWaeZoXKLq2p%2F-M9Par3gM73EiZtMPE5T%2Fimage.png?alt=media&token=fa081171-d619-4de9-b0f6-8b8173e7dffb)

* Foram criados dois arquivos em seu projeto `beagle-components.module.ts` e `beagle.module.ts`.
{{% /tab %}}

{{% tab name="React" %}}
**Passo 1:** Abra o terminal e digite um dos comandos abaixo:

```text
npx create-react-app case-react --template typescript
```

ou

```text
yarn create react-app case-react --template typescript
```

![](/image%20%2811%29.png)

**Passo 2:** acesse a pasta do projeto `cd case-react` e adicione o **Beagle React** ao seu repositório. No terminal digite:

```text
npm install --save @zup-it/beagle-react
```

ou

```text
yarn add @zup-it/beagle-react
```

e aguarde a instalação finalizar.
{{% /tab %}}
{{< /tabs >}}

## Configuração

Agora é hora de configurar os arquivos do Beagle dentro da sua aplicação, siga as instruções:

{{< tabs id="T9" >}}
{{% tab name="Angular" %}}
Abra o arquivo `app.module.ts` e importe o módulo Beagle que acabou de ser gerado:

```text
...
import { Beagle } from './beagle.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Beagle
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Abra o arquivo beagle.module.ts e coloque o caminho `baseUrl`

```text
import { BeagleModule } from '@zup-it/beagle-angular'
// import all the components you wish to use with Beagle.

@BeagleModule({
  baseUrl: 'http://usebeagle.io.s3-website-sa-east-1.amazonaws.com/start/',
  module: {
    path: './beagle-components.module',
    name: 'BeagleComponentsModule',
  },
  components: {
    // Associate every beagle component to your angular component.
  },
})
export class Beagle {}
```
{{% /tab %}}

{{% tab name="React" %}}
No caminho `/src` crie uma outra pasta com o nome **beagle** e dentro dela um novo arquivo chamado `beagle-service.ts`Sua estrutura deve estar parecida com a imagem a seguir:

![](/image%20%2863%29.png)

Agora, abra o arquivo criado `beagle-service.ts` e copie o código:

```text
import { createBeagleUIService } from '@zup-it/beagle-react'

export default createBeagleUIService({
  baseUrl: "http://usebeagle.io.s3-website-sa-east-1.amazonaws.com/start/",
  components: {}
})
```
{{% /tab %}}
{{< /tabs >}}

### Crie o JSON para ser renderizado

Para uma melhor experiência o JSON deve ser criado por meio de um BFF, como configurar um BFF você encontra [**aqui**](/pt/docs/get-started/installing-beagle/backend/),  neste exemplo usaremos o JSON que está disponibilizado na URL http://usebeagle.io.s3-website-sa-east-1.amazonaws.com/start/welcome:

{{% alert color="info" %}}
JSON utilizado como exemplo. 
{{% /alert %}}

```text
{
    "_beagleComponent_": "beagle:container",
    "children": [
        {
            "_beagleComponent_":"beagle:text",
            "text":"Hello Beagle"
        },
       {
            "_beagleComponent_":"beagle:text",
            "style":{
              "padding":{
                "top":{
                  "value":10,
                  "type": "REAL"
                }
              }
            },
            "text":"Beagle is a cross-platform framework which provides usage of the server Driven UI concept, natively in iOS, Android and Web applications. By using Beagle, your team could easily change application's layout and data by just changing backend code"
        }
    ]
}
```

### Renderizando os componentes

Agora é necessário adicionar na aplicação o local onde os componentes serão renderizados via `JSON`. A biblioteca Beagle fornece um componente com essa funcionalidade o Beagle remote view, siga os passos para configurar: 

{{< tabs id="T11" >}}
{{% tab name="Angular" %}}

Abra o arquivo `app.component.html` e substitua todo o conteúdo pelo código abaixo. No route adicione o caminho relativo ao JSON remoto, será usado o: /welcome.

```text
<beagle-remote-view route="/welcome"></beagle-remote-view>
```

`route` no código acima diz qual a rota será carregada.  A URL especificada aqui é relativa à `baseUrl` declarada na configuração.

{{% alert color="warning" %}}
O parâmetro `route` é válido apenas para a versão 1.3 ou superior. Para versões anteriores, `route` deve ser usado. `route`é um objeto e o valor equivalente  ao desse exemplo seria`{ path: '/welcome' }.`
{{% /alert %}}
{{% /tab %}}

{{% tab name="React" %}}
Abra o arquivo `App.tsx` onde o `JSON` será renderizado e altere para ficar como o exemplo a seguir:

```text
import React from 'react';
import './App.css';
import { BeagleProvider, BeagleRemoteView } from '@zup-it/beagle-react';
import BeagleService from './beagle/beagle-service';

function App() {
  return (
    <BeagleProvider value={BeagleService}>
      <BeagleRemoteView route={'/welcome'} />
    </BeagleProvider>
  );
}

export default App;
```

Neste passo é apontado onde você deseja renderizar o layout definido no arquivo JSON remoto. Veja aqui dois componentes fornecidos pela biblioteca Beagle:

`<BeagleProvider>` Recebe uma propriedade `value` com o `beagle-service` criado no passo anterior que contém as configurações iniciais

`<BeagleRemoteView>` Recebe uma propriedade `route` que é o caminho do nosso arquivo JSON, note aqui que adicionamos **' /welcome '** pois esse valor será concatenado com o `baseUrl` definido no arquivo `beagle-service.ts.`

{{% alert color="warning" %}}
`route` no `BeagleRemoteView` só é válido para as versões 1.3 e superior. Para versões anteriores, por favor, use `path.`
{{% /alert %}}
{{% /tab %}}
{{< /tabs >}}

## Testando a aplicação

Depois de finalizar a configuração básica do projeto, agora é preciso rodar um dos comandos abaixo para inicializar a aplicação:

{{< tabs id="T12" >}}
{{% tab name="Angular" %}}
Se você usa o **npm**:

```text
npm run serve
```

Se você usa o **yarn:**

```text
yarn serve
```
{{% /tab %}}

{{% tab name="React" %}}
Se você usa o **npm**:

```text
npm run start
```

Se você usa o **yarn:**

```text
yarn start
```
{{% /tab %}}
{{< /tabs >}}

Depois de finalizados os comando acesse no navegador o endereço da sua aplicação. Se uma tela com os componentes for renderizada tudo está funcionando corretamente.
