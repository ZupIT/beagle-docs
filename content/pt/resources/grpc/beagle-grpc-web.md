---
title: "Beagle gRPC para Web"
weight: 1
description: >-
  Nesta seção, você encontra todas as informações relacionadas a biblioteca e ao CLI de gRPC para Beagle Web (Angular e React).
---

## O que é gRPC?

---

É um framework open source para realizar chamadas RPC (Remote call procedure), através do protocolo HTTP2 em formato de two-way streaming, utilizando Protobufs como interfaces entre cliente e servidor.

Protobufs ou Protocol Buffers, são um mecanismo de serialization de dados estruturados criados pelo Google, onde visam manter os contratos sempre válidos e coerentes quanto às implementações que consomem aquele serviço gRPC.

Arquivos proto, em seu conteúdo, são bem parecidos com qualquer interface que estamos acostumados no dia-a-dia, porém com a extensão .proto, onde nele definimos quais são os objetos e métodos que são passíveis de serem usados na comunicação do serviço.

[Saiba mais...](https://grpc.io/)

## gRPC para Beagle Web

---

O gRPC é uma tecnologia que faz uso do protocolo **HTTP 2**, todavia, esta tecnologia não é compatível com a atual estrutura da Web, por isso a estrutura criada faz uso de um Cliente e um CLI, onde o CLI fica responsável por manipular as conexões gRPC através de um Proxy, em Go, e o Cliente fica responsável por manipular todas requisições feitas pelo Beagle para o Proxy.

## Requisitos

---

- [Git - CLI](https://git-scm.com/): Usado internamente para as dependências do proxy.
- [Go - CLI](https://golang.org/): Linguagem usada no proxy.
- [Dep - CLI](https://github.com/golang/dep): Controlador de dependências do Go, onde verifica se tudo está instalado como esperado.
- [Protoc - CLI](https://github.com/protocolbuffers/protobuf): Utilizado pelos protobufs e necessário para geração de código através de um arquivo `.proto`.

## Instalação

---

Para instalar a biblioteca, instale ela globalmente, para melhor experiência com o CLI e após instale a mesma em seu projeto com os seguintes comandos:

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

1. Após a instalação das bibliotecas, crie o arquivo de configurações na pasta raiz do projeto, utilizando: `beagle-web-grpc init` e configure os atributos conforme as suas necessidades.
2. Importe o cliente gRPC:

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

3. Inicie o Proxy gRPC utilizando: `beagle-web-grpc start-proxy` ou `beagle-web-grpc start-proxy --mode seu-modo-personalizado`.
4. Utilize o Beagle normalmente.

> **Observação**
> Tenha sua aplicação BFF rodando ao mesmo tempo.

## CLI

---

Como o gRPC não é compatível com a estrutura atual da Web, para que a tecnologia tenha suporte, se faz necessário o uso de um Proxy para fazer a comunicação entre REST e o Backend gRPC, por isso criamos um CLI (Command-line Interface), **beagle-web-grpc**, para que facilite o uso do proxy e provenha todas as configurações necessárias.

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

O Cliente gRPC para Beagle Web é o que faz o redirecionamento das requisições grpc para o proxy, o cliente é utilizado através do `BeagleService` no React e do módulo `Beagle` no Angular, se valendo da propriedade de `fetchData`, ao qual o Beagle permite criar requisições HTTP customizadas, então a utilização se dá desta maneira:

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
