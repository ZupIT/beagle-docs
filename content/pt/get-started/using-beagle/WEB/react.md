---
title: React
weight: 25
description: >-
  Nesta seção, você encontra o passo a passo inicial para usar a biblioteca
  Beagle no React.
---

---

## **Configurações de uso**

Depois que você terminar a instalação, é preciso **configurar o Beagle para o uso no framework do React.** Para isso, basta realizar os seguintes passos:

### **Passo 1: Configuração automática**

Execute um dos comandos abaixo para gerar os arquivos que serão usados pela biblioteca Beagle. É possível executar o comando de acordo com seu gerenciador de pacotes:

**yarn
```text
yarn beagle
```

**npm
```text
beagle
```

Feito isso, o Beagle irá retornar uma pergunta.

**Do you want to replace "app.tsx" content with the Beagle configuration (y or n)?**

**Você deseja substituir o conteúdo "app.tsx" pela configuração do Beagle?**  
Caso digite **"y"** a app.tsx do projeto será substituída por outra com a configuração do Beagle, caso digite **"n"** o arquivo não vai ser substituído e a configuração terá que ser feita manualmente.

Ao final deste processo, será gerado um novo arquivo em seu projeto:

- **beagle-service.ts**

### Passo 2: Criação do JSON de definição do layout

Para uma melhor experiencia o JSON deve ser criado por meio de um BFF, como configurar um BFF você encontra [**aqui**]({{< ref path="/get-started/installing-beagle/backend" lang="pt" >}}), neste exemplo usaremos o JSON que está disponibilizado na URL http://usebeagle.io.s3-website-sa-east-1.amazonaws.com/start/welcome:

{{% alert color="info" %}}
JSON utilizado como exemplo .
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
            "text":"Beagle is a cross-platform framework which provides usage of the server Driven UI concept,natively in iOS, Android and Web applications. By using Beagle, your team could easily change application's layout and data by just changing backend code"
        }
    ]
}
```

{{% alert color="info" %}}
A biblioteca Beagle já vem com diversos componentes pré-definidos e prontos para serem usados em seu projeto.

O código acima cria um JSON com dois desses componentes: container e text.
{{% /alert %}}

### Passo 3: Configuração do Beagle Service

Depois de criado o seu JSON, a sua estrutura deve estar parecida com a imagem a seguir:

![](/shared/image%20%2863%29.png)

Abra agora o arquivo criado `beagle-service.ts` e verifique se o código está igual ao abaixo:

```text
import { createBeagleUIService } from '@zup-it/beagle-react'

export default createBeagleUIService({
  baseUrl: "http://usebeagle.io.s3-website-sa-east-1.amazonaws.com/start/",
  components: {}
})
```

{{% alert color="info" %}}
**baseUrl:** URL base que fornece as visualizações (JSON) para o Beagle.
{{% /alert %}}

{{% alert color="info" %}}
**components:** São o mapa de componentes a serem usados ​​ao renderizar uma view.
{{% /alert %}}

Neste ponto da configuração podemos definir a baseUrl do servidor externo do Beagle.

{{% alert color="warning" %}}
É importante ressaltar que, para este exemplo, estamos usando o[ **typescript**](https://www.typescriptlang.org/) junto ao projeto. Caso você não tenha na sua máquina, será preciso instalar.
{{% /alert %}}

### Passo 4: Usando o BeagleRemoteView

Agora você precisa especificar, dentro da aplicação, o local em que os componentes serão renderizados. Para isso, a biblioteca do Beagle fornece o **BeagleRemoteView** e o **BeagleProvider**. Abra o arquivo do componente que você deseja renderizar o layout e altere para ficar como o exemplo a seguir, no route adicione o caminho relativo ao JSON remoto: /welcome.

{{% alert color="info" %}}
No exemplo alteramos a App.ts
{{% /alert %}}

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

1. `<BeagleProvider>`: Responsável por prover para nossa aplicação o `beagle-service` criado no passo anterior contendo as configurações iniciais. Este é especificado na propriedade `value`;
2. `<BeagleRemoteView>`: Responsável por renderizar o layout definido pelo JSON especificado pela propriedade `route`.

{{% alert color="info" %}}
Note aqui que adicionamos **' /welcome '** pois esse valor será associado ao `baseUrl` definido no arquivo `beagle-service.ts`
{{% /alert %}}

{{% alert color="warning" %}}
`route` no `BeagleRemoteView` só é válido para as versões 1.3 e superior. Para versões anteriores, por favor, use `path.`
{{% /alert %}}

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

![](/shared/image%20%2895%29.png)

{{% alert color="success" %}}
Parabéns, você criou sua primeira tela com Beagle!
{{% /alert %}}
