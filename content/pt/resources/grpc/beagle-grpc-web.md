---
title: "Beagle gRPC para Web"
weight: 1
description: >-
  Nesta seção, você encontra todas as informações relacionadas a biblioteca e ao CLI de gRPC para Beagle Web (Angular e React).
---

## O que é gRPC?

---

É um framework open source que realiza chamadas RPC (Remote call procedure) por meio do protocolo HTTP2 em formato de two-way streaming, utilizando Protobufs como interfaces entre cliente e servidor.

- Protobufs ou Protocol Buffers: São mecanismos de serialização de dados estruturados criados pelo Google, que visam manter os contratos sempre válidos e coerentes quanto às implementações que consomem aquele serviço gRPC.

- Arquivos proto:  São bem parecidos com qualquer interface que você está acostumado no dia-a-dia, em seu conteúdo. Porém com a extensão .proto, onde nele você define quais são os objetos e métodos que podem ser usados na comunicação do serviço.

[Saiba mais...](https://grpc.io/)

## gRPC para Beagle Web

---

O gRPC é uma tecnologia que utiliza o protocolo **HTTP 2**, no entanto essa tecnologia não é compatível com a atual estrutura da Web. Por isso, a estrutura criada faz uso de um Cliente e um CLI:
- O CLI fica responsável por manipular as conexões gRPC através de um Proxy em Go; 
- O Cliente fica responsável por manipular todas requisições feitas pelo Beagle para o Proxy.

## Requisitos

---

- [Git - CLI](https://git-scm.com/): Usado internamente para as dependências do proxy.
- [Go - CLI](https://golang.org/): Linguagem usada no proxy.
- [Dep - CLI](https://github.com/golang/dep): Controlador de dependências do Go, onde verifica se tudo está instalado como esperado.
- [Protoc - CLI](https://github.com/protocolbuffers/protobuf): Utilizado pelos protobufs e necessário para geração de código através de um arquivo `.proto`.

## Instalação

---

Instale a biblioteca globalmente. Para melhorar a experiência com o CLI, instale a mesma em seu projeto com os seguintes comandos:

```bash
npm install -g @zup-it/beagle-web-grpc
npm install --save-dev @zup-it/beagle-web-grpc
```

ou se você utiliza yarn:

```bash
yarn global add @zup-it/beagle-web-grpc
yarn add --dev @zup-it/beagle-web-grpc
```

## Utilização

---
Para começar a utilizar, siga os passos abaixo:

**Passo 1.** Após a instalação das bibliotecas, crie o arquivo de configurações na pasta raiz do projeto, utilizando **`beagle-web-grpc init`** e configure os atributos com o que você precisa.
**Passo 2.** Importe o cliente gRPC, veja abaixo:

   - **React:** ./src/beagle/beagle-service.ts

     ```typescript
     import { createBeagleUIService } from "@zup-it/beagle-react";
     import { usingBeagleGrpcClient } from "@zup-it/beagle-web-grpc";

     export default createBeagleUIService({
       baseUrl: "grpc://",
       components: {},
       fetchData: usingBeagleGrpcClient({
         proxyAddress: "http://localhost:8081",
       }),
     });
     ```

   - **Angular:** ./src/app/beagle.module.ts

     ```typescript
     import { BeagleModule } from "@zup-it/beagle-angular";
     import { usingBeagleGrpcClient } from "@zup-it/beagle-web-grpc";

     @BeagleModule({
       baseUrl: "grpc://",
       module: {
         path: "./beagle-components.module",
         name: "BeagleComponentsModule",
       },
       components: {},
       fetchData: usingBeagleGrpcClient({
         proxyAddress: "http://localhost:8081",
       }),
     })
     export class Beagle {}
     ```

**Passo 3.** Inicie o Proxy gRPC utilizando: **`beagle-web-grpc start-proxy`** ou **`beagle-web-grpc start-proxy --mode seu-modo-personalizado`**.
**Passo 4.** Utilize o Beagle normalmente.

> **Observação**
> Tenha sua aplicação BFF rodando ao mesmo tempo.

## CLI

---

O gRPC não é compatível com a estrutura atual da Web, para que a tecnologia tenha suporte, você precisa usar um Proxy para fazer a comunicação entre REST e o Backend gRPC. 
Por isso o time do Beagle criou um CLI (Command-line Interface), **beagle-web-grpc**, para facilitar o uso do proxy e  adicionar todas as configurações necessárias.

#### Comandos disponíveis para **beagle-web-grpc**

| Comando       | Apelido | Opções                                                                                                     | Descrição                                                                                                                                                                                                                                         |
| ------------- | ------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `init`        | `i`     |                                                                                                            | Cria o arquivo de configuração para suporte a gRPC no Beagle Web gRPC Proxy.                                                                                                                                                                      |
| `start-proxy` | `spx`   | _-m, --mode <mode>_, define o modo de configuração a ser usado pelo Proxy, o modo padrão é **development** | Inicia o serviço do Proxy gRPC, na porta definida no arquivo de configuração, para manipular requisições entre o seu servidor gRPC e sua aplicação utilizando Beagle Web Frontend (IMPORTANTE: Você deve possuir todos os requisitos instalados). |

#### Arquivo de configuração _./beagle-grpc.config.json_

Após rodar `beagle-web-grpc init` o arquivo _./beagle-grpc.config.json_ vai ser criado no diretório em que o comando foi executado, com a seguinte estrutura base:

```json
{
  "configs": [
    {
      "mode": "development",
      "grpcBackendAddress": "localhost:50051",
      "tlsCertificatePath": "",
      "tlsKeyPath": "",
      "runProxyOnPort": 8081
    },
    {
      "mode": "production",
      "grpcBackendAddress": "https://my-grpc.backend.com/address",
      "tlsCertificatePath": "",
      "tlsKeyPath": "",
      "runProxyOnPort": 8081
    }
  ]
}
```

##### Atributos do arquivo de configurações _./beagle-grpc.config.json_

| Atributo             | Descrição                                                                                                                                                              |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mode`               | Define o nome do modo para as configurações a serem utilizadas na execução do Proxy gRPC                                                                               |
| `grpcBackendAddress` | Define o endereço do servidor backend que se comunica utilizando gRPC. Lembrando que todas as requisições que baterem com esta rota, serão redirecionadas para o Proxy |
| `tlsCertificatePath` | Define o caminho para o local do Certificado TLS                                                                                                                       |
| `tlsKeyPath`         | Define o caminho para o local da Chave TLS                                                                                                                             |
| `runProxyOnPort`     | Define a Porta em que o Proxy gRPC será executado                                                                                                                      |

## Cliente

---

O Cliente gRPC para Beagle Web faz o redirecionamento das requisições gRPC para o proxy. O cliente é utilizado por meio do `BeagleService` no React e do módulo `Beagle` no Angular. 
Se valendo da propriedade de `fetchData` em que o Beagle permite criar requisições HTTP customizadas, veja abaixo como a utilização será:

```typescript
import { usingBeagleGrpcClient } from "@zup-it/beagle-web-grpc";

// { ... } - seu código do serviço ou módulo
{
  // { ... } - demais atributos
  fetchData: usingBeagleGrpcClient({ proxyAddress: "http://localhost:8081" });
}
```

O Cliente gRPC possui as seguintes opções (`BeagleGrpcClientOptions`) de inicialização:

| Atributo           | Obrigatório? | Valor Padrão | Descrição                                                                                                                                                                                        |
| ------------------ | ------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `proxyAddress`     | Sim          |              | Endereço que o Proxy estará rodando para que o cliente faça a comunicação com o proxy                                                                                                            |
| `redirectGrpcFrom` | Não          | `grpc://`    | Caso este atributo esteja informado, todas as requisições que iniciarem com o valor informado, serão redirecionadas para o Proxy gRPC, senão elas serão encaminhadas normalmente                 |
| `customHttpClient` | Não          | `undefined`  | Caso este atributo esteja informado, ele ainda funcionará como função para realizar as requisições HTTP customizadas, todavia, somente se o critério de ser uma requisição gRPC não for atendido |
