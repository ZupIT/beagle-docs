---
title: Angular
description: >
  Nesta seção, você encontra o passo a passo inicial para usar a biblioteca Beagle no Angular.
---

---

## **Configurações de uso** 

Depois que você terminar a instalação, é preciso **configurar o Beagle para o uso no framework do Angular.** Para isso, basta realizar os seguintes passos:

### **Passo 1: Configuração automática**

Execute um dos comandos abaixo para gerar os arquivos que serão usados pela biblioteca Beagle. É possível executar o comando de acordo com seu gerenciador de pacotes:

```text
yarn beagle init
```

```text
npx beagle init
```

Feito isso, o Beagle irá retornar algumas perguntas. Para respondê-las, siga as orientações abaixo: 

**Pergunta 1: Would you like to use yarn or npm?** 

**Você gostaria de usar yarn ou npm?**   
Neste caso, digite a opção que irá utilizar como gerenciador. No nosso exemplo, usaremos o `yarn`, logo  digite `yarn`e aperte enter. 

**Pergunta 2: Path to the beagle module \(press enter to use default\)** 

**Caminho para o modulo do Beagle \(pressione enter para usar o default\)**   
Neste caso, digite qual o caminho do módulo que será usado para o beagle. Como estamos criamos o projeto do zero e não temos nenhum módulo, é só dar enter sem informar nada.

**Pergunta 3: Path to the module with the components to use with beagle \(press enter to use default\)**

**Caminho para usar o módulo com componentes para usar o Beagle \(pressione enter para usar default\)**   
Neste caso, digite qual o caminho do módulo que será usado para os components do beagle. Como ainda não temos nenhum módulo, é só dar enter sem informar nada.

**Pergunta 4:  What's the base url of the backend providing your beagle JSONs? \(press enter to use default\)**

**Qual a base url do backend que providencia o seu JSONs ao Beagle? \(pressione enter para usar o default\)**  
Neste caso, digite qual será a URL base do backend que será utilizada para resgatar os arquivos JSON. Para o nosso exemplo, usaremos um JSON, logo é só digitar: http://localhost:4200/assets

Ao final deste processo, serão gerados dois novos arquivos em seu projeto: 

* **beagle-components.module.ts**
* **beagle.module.ts.**

![](../../../.gitbook/assets/image%20%2815%29.png)

Abra o arquivo `app.module.ts` e, em seguida, importe o módulo Beagle que acabou de ser gerado:

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

Agora, você precisa criar um arquivo JSON que definirá os componentes que serão renderizados. Geralmente, esse arquivo seria obtido por um servidor externo, mas neste exemplo criaremos um arquivo local para ser acessado como teste.

No seu projeto angular, navegue até a pasta `src/assets` e crie um novo arquivo com o nome `payload.json`. Abra este novo arquivo que foi criado e copie o conteúdo abaixo:

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

Depois de criado o seu JSON, abra o arquivo `beagle.module.ts` gerado no passo anterior e adicione como baseUrl o caminho: http://localhost:4200/assets

```text
import { BeagleModule } from '@zup-it/beagle-angular'
// import all the components you wish to use with Beagle.

@BeagleModule({
  baseUrl: 'http://localhost:4200/assets',
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

Pronto, a configuração está finalizada agora vamos aprender como renderizar os componentes mapeados no JSON.

### Passo 3: Usando o beagle-remote-view

Depois de criado o JSON, você precisa especificar, dentro da aplicação, o local em que os componentes serão renderizados. Para realizar essa ação, a biblioteca do Beagle fornece o componente `<beagle-remote-view>`.

Abra o arquivo `app.component.html` e substitua todo o conteúdo pelo código a seguir:

```text
<beagle-remote-view route="/payload.json"></beagle-remote-view>
```

`route` no código acima diz qual a rota será carregada.  A URL especificada aqui é relativa à `baseUrl` declarada na configuração.

{% hint style="warning" %}
O parâmetro `route` é válido apenas para a versão 1.3 ou superior. Para versões anteriores, `loadParams` deve ser usado. `loadParams`é um objeto e o valor equivalente  ao desse exemplo seria`{ path: '/payload.json' }.`
{% endhint %}

## Exemplo 

### Testando a aplicação

Para testarmos se a nossa configuração funcionou, você precisa rodar um dos comandos abaixo para inicializar a aplicação.

{% hint style="danger" %}
Ao executar a aplicação, você **não** **deve utilizar o comando** **`ng serve`** porque ela será iniciada sem compilar os arquivos do Beagle. Para que o Beagle seja inicializado corretamente, é necessário utilizar um dos comandos abaixo de acordo com seu gerenciador de pacotes.
{% endhint %}

Caso utilize npm:

```text
npm run serve
```

Caso utilize yarn: 

```text
yarn serve
```

{% hint style="warning" %}
É importante deixar claro que o comando para reiniciar a aplicação é fundamental para que as alterações que você fez nos arquivos de configuração do Beagle funcionem.

Este processo também deve ser feito para qualquer alteração feita nas propriedades `@Input()` de seus componentes mapeados. A equipe Beagle está constantemente desenvolvendo soluções para melhorar isso.
{% endhint %}

Depois de finalizado o comando acesse a aplicação em: http://localhost:4200  
Você deverá ver a tela a seguir:

![](../../../.gitbook/assets/image%20%2896%29.png)



{% hint style="success" %}
Parabéns, você criou sua primeira tela com Beagle!
{% endhint %}
