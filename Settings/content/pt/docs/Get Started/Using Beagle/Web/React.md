---
title: React
description: >
  Nesta seção, você encontra o passo a passo inicial para usar a biblioteca
  Beagle no React.
---

---

## **Configurações de uso** 

Depois que você terminar a instalação, é preciso **configurar o Beagle para o uso no framework do React.** Para isso, basta realizar os seguintes passos:

### Passo 1: Criação do JSON de definição do layout

Dentro do seu projeto React na pasta `public`,  crie um arquivo chamado `payload.json` com o código abaixo. Este arquivo mapeará os componentes que serão renderizados pelo Beagle. Geralmente, ele seria retornado por um servidor externo, mas neste exemplo criaremos localmente no projeto.

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
            "text":"Beagle is a cross-platform framework which provides usage of the server Driven UI concept,natively in iOS, Android and Web applications. By using Beagle, your team could easily change application's layout and data by just changing backend code"
        }
    ]
}
```

{% hint style="info" %}
A biblioteca Beagle já vem com diversos componentes pré-definidos e prontos para serem usados em seu projeto.

O código acima cria um JSON com dois desses componentes: container e text.
{% endhint %}

### Passo 2: Configuração do Beagle Service

Depois de adicionar o arquivo `payload.json` no seu projeto, crie uma pasta no caminho `/src`com nome **beagle**. Dentro dela, adicione um novo arquivo com o nome `beagle-service.ts`. 

Feito isso, a sua estrutura deve estar parecida com a imagem a seguir:

![](../../../.gitbook/assets/image%20%2863%29.png)

Abra agora o arquivo criado`beagle-service.ts` e insira o código abaixo:

```text
import { createBeagleUIService } from '@zup-it/beagle-react'

export default createBeagleUIService({
  baseUrl: "",
  components: {}
})
```

Neste ponto da configuração podemos definir a baseUrl do servidor externo do Beagle. Para este exemplo, deixaremos esta propriedade sem valor pois usaremos um arquivo local \(`payload.json`\).

{% hint style="warning" %}
É importante ressaltar que, para este exemplo, estamos usando o[ **typescript**](https://www.typescriptlang.org/) junto ao projeto. Caso você não tenha na sua máquina, será preciso instalar.
{% endhint %}

### Passo 3: Usando o BeagleRemoteView

Agora você precisa especificar, dentro da aplicação, o local em que os componentes serão renderizados. Para isso, a biblioteca do Beagle fornece o **BeagleRemoteView** e o **BeagleProvider**. Abra o arquivo do componente que você deseja renderizar o layout e altere para ficar como o exemplo a seguir:

```text
import React from 'react';
import './App.css';
import { BeagleProvider, BeagleRemoteView } from '@zup-it/beagle-react';
import BeagleService from './beagle/beagle-service';

function App() {
  return (
    <BeagleProvider value={BeagleService}>
      <BeagleRemoteView route={'/payload.json'} />
    </BeagleProvider>
  );
}

export default App;
```

1. `<BeagleProvider>`: Responsável por prover para nossa aplicação o `beagle-service`  criado no passo anterior contendo as configurações iniciais. Este é especificado na propriedade `value`;
2. `<BeagleRemoteView>`: Responsável por renderizar o layout definido pelo JSON especificado pela propriedade `route`.

{% hint style="info" %}
Note aqui que adicionamos **' / '** pois esse valor será associado ao `baseUrl` definido no arquivo `beagle-service.ts`
{% endhint %}

{% hint style="warning" %}
`route` no `BeagleRemoteView` só é válido para as versões 1.3 e superior. Para versões anteriores, por favor, use `path.`
{% endhint %}

## Exemplo prático

### Testando o projeto

Para testarmos se a nossa configuração funcionou, você precisa executar um dos comandos abaixo para inicializar a aplicação: 

```text
yarn start
```

```text
npm run start
```

Depois de finalizar o comando, acesse: localhost:3000. Você deverá ver a tela a seguir:

![](../../../.gitbook/assets/image%20%2895%29.png)

{% hint style="success" %}
Parabéns, você criou sua primeira tela com Beagle!
{% endhint %}

---
