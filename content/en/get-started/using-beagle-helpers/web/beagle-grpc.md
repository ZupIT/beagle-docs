---
title: "Beagle Web gRPC"
weight: 1
description: >-
  In this section you will find all the info related to the client and the CLI of gRPC for Beagle Web (Angular and React).
---

## What is gRPC?
----------------

It is an open source framework to perform RPC (Remote call procedure) calls, through the HTTP2 protocol in a two-way streaming format, using Protobufs as interfaces between client and server.

Protobufs, or Protocol Buffers, are a structured data serialization mechanism created by Google, which aim to keep contracts always valid and consistent regarding the implementations that consume a gRPC service.

Proto files, in their content, are very similar to any interface we are used to on the daily basis, but with the .proto extension, where we define which objects and methods are likely to be used in the service's communication.

[Learn more...](https://grpc.io/)

## gRPC for Beagle Web
-----------------------

gRPC is a technology that makes use of the **HTTP 2** protocol, however, this technology is not compatible with the current Web structure, so the structure created uses a Client and a CLI, where the CLI is responsible for handling gRPC connections through a Proxy, written with Go, and the Client is responsible for handling all requests made by Beagle to the Proxy.

## Requirements
-------------

- [Git - CLI](https://git-scm.com/): Used internally as a proxy dependency. 
- [Go - CLI](https://golang.org/): Language which the proxy is written. 
- [Dep - CLI](https://github.com/golang/dep): Go's dependency manager, where it checks that everything is installed and working as expected. 
- [Protoc - CLI](https://github.com/protocolbuffers/protobuf): Used by protobufs and necessary for code generation through a `.proto` file. 

## Installation
-------------

To install the library, install it globally, for a better experience with the CLI, and then install it in your project using the following commands: 
```bash
npm install -g @zup-it/beagle-web-grpc
npm install --save-dev @zup-it/beagle-web-grpc
```

or if you use yarn:
```bash
yarn global add @zup-it/beagle-web-grpc
yarn add --dev @zup-it/beagle-web-grpc
```

## Getting Started
-------------

1. After installing the library, in the project and globally, create the configuration file in the project's root folder, using: `beagle-web-grpc init` and then configure the attributes according to your needs. 
2. Then import the gRPC Client:
   - **React:** ./src/beagle/beagle-service.ts
     ```typescript
     import { createBeagleUIService } from '@zup-it/beagle-react'
     import { usingBeagleGrpcClient } from '@zup-it/beagle-web-grpc'

     export default createBeagleUIService({
       baseUrl: 'grpc://',
       components: {},
       fetchData: usingBeagleGrpcClient({ proxyAddress: 'http://localhost:8081' })
     })
     ```
   - **Angular:** ./src/app/beagle.module.ts
     ```typescript
     import { BeagleModule } from '@zup-it/beagle-angular'
     import { usingBeagleGrpcClient } from '@zup-it/beagle-web-grpc'

     @BeagleModule({
       baseUrl: 'grpc://',
       module: {
         path: './beagle-components.module',
         name: 'BeagleComponentsModule',
       },
       components: {},
       fetchData: usingBeagleGrpcClient({ proxyAddress: 'http://localhost:8081' })
     })
     export class Beagle {}
     ```
3. Start your proxy running the following command on the root of the project: `beagle-web-grpc start-proxy` or `beagle-web-grpc spx` or `beagle-web-grpc start-proxy --mode your-mode`.
4. Use the Beagle Web as usually.

> **Observations**
> Make sure that your BFF Application is running.

## CLI
------

As gRPC is not compatible with the current structure of the Web, to support the technology, it is necessary to use a Proxy to establish the communication between the REST application and the gRPC Backend application, so we created a CLI (command-line interface), **beagle-web-grpc**, to facilitate the use of the proxy and provide all the necessary settings.

#### Available commands for **beagle-web-grpc**

| Command       | Alias      | Options     | Description                                                                                       |
| ------------- | ---------- | ----------- | ------------------------------------------------------------------------------------------------- |
| `init`        | `i`        |             | Creates the configuration file which define the settings to be used by the Beagle Web gRPC Proxy. |
| `start-proxy` | `spx`      | *-m, --mode <mode>*, set the mode to be used on the configuration file, the default mode is **development**     | Start the gRPC Proxy service, on the port defined in the configuration file, to handle requests between your gRPC server and your application using Beagle Web Frontend (IMPORTANT: You must have all requirements installed) . |

#### Configuration file *./beagle-grpc.config.json*

After running `beagle-web-grpc init` the file *./beagle-grpc.config.json* will be created where the command was executed, generating a file with this content:

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

##### Attributes of the configuration file *./beagle-grpc.config.json*

| Attribute               | Description                                                                   | 
| ----------------------- | ----------------------------------------------------------------------------- |
| `mode`                  | Defines the mode name for the settings to be used when running the gRPC Proxy |
| `grpcBackendAddress`    | Defines the address of the backend server that communicates using gRPC. Remembering that all requests that match this route will be redirected to the Proxy |
| `tlsCertificatePath`    | Set path to TLS Certificate location                                          |
| `tlsKeyPath`            | Set path to TLS Key location                                                  |
| `runProxyOnPort`        | Defines the Port on which the gRPC Proxy will run                             |

## Client
----------

The gRPC Client for Beagle Web is what redirects grpc requests to the proxy, the client is used through `BeagleService` in React and the `Beagle` module in Angular, using the `fetchData` property, which Beagle allows you to create custom HTTP requests, so the use goes like this: 

```typescript
import { usingBeagleGrpcClient } from '@zup-it/beagle-web-grpc'

// { ... } - your module or service code
{
  // { ... } - other attributes
  fetchData: usingBeagleGrpcClient({ proxyAddress: 'http://localhost:8081' })
}
```

The gRPC client has the following initialization options (`BeagleGrpcClientOptions`):

| Attribute             | Required?       | Default Value   | Description                                                                           |
| --------------------- | --------------- | --------------- | ------------------------------------------------------------------------------------- |
| `proxyAddress`        | Yes             |                 | Address where the Proxy will be running for the client to communicate with the proxy  |
| `redirectGrpcFrom`    | No              | `grpc://`       | If this attribute is informed, all requests that the url starts with the informed value will be redirected to the gRPC Proxy, otherwise they will be forwarded normally |
| `customHttpClient`    | No              | `undefined`     | If this attribute is informed, it will still work as a function to perform custom HTTP requests, however, only if the condition of being a gRPC request is not met  |

