---
title: Usando o Beagle Angular
weight: 23
description: >-
  Nesta seção, você encontra o passo a passo inicial para usar a biblioteca
  Beagle no Angular.
---

---

## **Configurações de uso**

Depois que você terminar a instalação, é preciso **configurar o projeto Angular para utlizar o Beagle.** Para isso, basta realizar os seguintes passos:

### **Passo 1: Configuração automática**

Execute um dos comandos abaixo para gerar os arquivos que serão usados pela biblioteca Beagle. É possível executar o comando de acordo com seu gerenciador de pacotes:

```text
yarn beagle init
```

```text
npx beagle init
```

Feito isso, o Beagle irá retornar uma pergunta:

**Would you like to use yarn or npm?**(**Você gostaria de usar yarn ou npm?**)
 
Neste caso, digite a opção que irá utilizar como gerenciador. No nosso exemplo, usaremos o `yarn`, logo digite `yarn`e aperte enter.

Ao final deste processo, serão gerados dois novos arquivos em seu projeto:

- **beagle-components.module.ts**
- **beagle.module.ts.**

![](/shared/image%20%2815%29.png)

Abra o arquivo `app.module.ts` e, em seguida, importe o módulo Beagle que acabou de ser gerado `import { Beagle } from './beagle.module';` e adicione dentro de `imports`:

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

### Passo 2: Criação do JSON de definição do layout

Agora, você precisa criar um arquivo JSON que definirá os componentes que serão renderizados.

Para uma melhor experiência o JSON deve ser criado por meio de um BFF, como configurar um BFF você encontra [**aqui**]({{< ref path="/backend/get-started/creating-a-project-from-scratch" lang="pt" >}}), neste exemplo usaremos o JSON que está disponibilizado na URL http://usebeagle.io.s3-website-sa-east-1.amazonaws.com/start/welcome:

{{% alert color="info" %}}
Caso queira criar seu próprio BFF, você pode seguir a configuração do backend. Veja como fazer isso nas [**configurações de uso para backend**]({{< ref path="/backend/get-started/creating-a-project-from-scratch" lang="pt" >}}).
{{% /alert %}}

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
            "text":"Beagle is a cross-platform framework which provides usage of the server Driven UI concept,natively in iOS, Android and Web applications. By using Beagle, your team could easily change application's layout and data by just changing backend code"
        }
    ]
}
```

{{% alert color="info" %}}
A biblioteca Beagle já vem com diversos componentes pré-definidos e prontos para serem usados em seu projeto.

O código acima cria um JSON com dois desses componentes: container e text.
{{% /alert %}}

Depois de criado o seu JSON, abra o arquivo `beagle.module.ts` gerado no passo anterior, na baseUrl insira o caminho do JSON remoto, usaremos o caminho: http://usebeagle.io.s3-website-sa-east-1.amazonaws.com/start/.

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

{{% alert color="info" %}}
**baseUrl:** URL base que fornece as visualizações (JSON) para o Beagle.
{{% /alert %}}

{{% alert color="info" %}}
**components:** São o mapa de componentes a serem usados ​​ao renderizar uma view.
{{% /alert %}}

Pronto, a configuração está finalizada agora vamos aprender como renderizar os componentes mapeados no JSON.

### Passo 3: Usando o beagle-remote-view

Depois de criado o JSON, você precisa especificar, dentro da aplicação, o local em que os componentes serão renderizados. Para realizar essa ação, a biblioteca do Beagle fornece o componente `<beagle-remote-view>`.

Abra o arquivo `app.component.html` e substitua todo o conteúdo pelo código a seguir, no route adicione o caminho relativo ao JSON remoto: /welcome.

```text
<beagle-remote-view route="/welcome"></beagle-remote-view>
```

`route` no código acima diz qual a rota será carregada. A URL especificada aqui é relativa à `baseUrl` declarada na configuração.

Para mais detalhes sobre o `BeagleRemoteView`, leia [este artigo]({{< ref path="/web/commons/beagle-remote-view" lang="pt" >}}).

## Exemplo

### Testando a aplicação

Para testarmos se a nossa configuração funcionou, você precisa rodar um dos comandos abaixo para inicializar a aplicação.

{{% alert color="danger" %}}
Ao executar a aplicação, você **não** **deve utilizar o comando** **`ng serve`** porque ela será iniciada sem compilar os arquivos do Beagle. Para que o Beagle seja inicializado corretamente, é necessário utilizar um dos comandos abaixo de acordo com seu gerenciador de pacotes.
{{% /alert %}}

Caso utilize npm:

```text
npm run serve
```

Caso utilize yarn:

```text
yarn serve
```

{{% alert color="warning" %}}
É importante deixar claro que deve-se reiniciar a aplicação sempre que se altera os arquivos de configuração do Beagle.

Este processo também deve ser feito para qualquer alteração feita nas propriedades `@Input()` de seus componentes mapeados.
{{% /alert %}}

Depois de finalizado o comando acesse a aplicação em: http://localhost:4200  
Você deverá ver a tela a seguir:

![](/shared/image%20%2896%29.png)

{{% alert color="success" %}}
Parabéns, você criou sua primeira tela com Beagle!
{{% /alert %}}
