---
title: Beagle gRPC para iOS
weight: 18
description: "Este framework fornece um cliente para comunicar com o Beagle usando gRPC."
---

![Beagle gRPC disponível no CocoaPods](https://img.shields.io/cocoapods/v/BeagleGRPC?label=Beagle%20gRPC)

### Plataformas Suportadas

As plataformas suportadas são as mesmas do Beagle.
O Beagle gRPC utiliza o [gRPC Swift](https://github.com/grpc/grpc-swift#readme) e depende do Swift versão 5.2 ou superior.

### NetworkClientGRPC

Esta classe implementa o protocolo `NetworkClient` utilizando gRPC.
Para um NetworkClientGRPC são necessários os seguintes parâmetros:

<table>
  <thead>
    <tr>
      <th style="text-align:left">Parâmetros</th>
      <th style="text-align:left">Descrição</th>
      <th style="text-align:left">Obrigatório</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">grpcAddress</td>
      <td style="text-align:left">
      Endereço do servidor gRPC. O host e a porta especificados aqui serão utilizados para criar o canal de comunicação gRPC. A URL das requisições devem ter este parâmetro como prefixo, caso contrario as requisições serão encaminhadas para o <i>customHttpClient</i>.
      </td>
      <td style="text-align:left">&#x2713;</td>
    </tr>
    <tr>
      <td style="text-align:left">customHttpClient</td>
      <td style="text-align:left">
      NetworkClient alternativo, utilizado para tratar as requisições que não são gRPC.
      </td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">defaultCallOptions</td>
      <td style="text-align:left">
      Valores padrões para todas as requisições gRPC, por exemplo, aqui você pode definir headers estáticos e o limite de tempo das requisições. Consulte o <a href="https://github.com/grpc/grpc-swift/blob/main/Sources/GRPC/CallOptions.swift" target="_blank">gRPC Swift</a> para ver todas as opções disponíveis.
      </td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">interceptors</td>
      <td style="text-align:left">
      Objeto responsável por criar interceptores para cada RPC. Interceptores permitem que requisições e respostas sejam observadas, modificadas ou descartadas se necessário.
      </td>
      <td style="text-align:left"></td>
    </tr>
  </tbody>
</table>

### Como utilizar o Beagle gRPC em seu projeto iOS

{{% alert color="info" %}}
Nesta seção assume-se que seu servidor gRPC rodando no endereço `0.0.0.0` na porta `50051`.
Consulte a página [Beagle gRPC Backend]({{< ref path="/backend/kotlin/support-libraries/beagle-grpc.md" lang="pt" >}}) para mais informações sobre como rodar seu servidor.
{{% /alert %}}

Adicione a dependência no seu Podfile

```ruby
pod 'BeagleGRPC'
```

Após adicionar o Beagle gRPC como dependência no seu projeto, instancie um `NetworkClientGRPC` e altere o _Beagle.dependencies_ para utilizá-lo.

```swift
import Beagle
import BeagleGRPC

let dependencies = BeagleDependencies()
let baseUrl = "http://0.0.0.0:50051"

dependencies.networkClient = NetworkClientGRPC(
    grpcAddress: baseUrl,
    customHttpClient: nil
)
dependencies.urlBuilder = UrlBuilder(
  baseUrl: URL(string: baseUrl)
)

BeagleConfigurator.setup(dependencies: dependencies)
```

Agora você está pronto para conectar ao seu servidor gRPC.

```swift
BeagleScreenViewController(.remote(.init(url: "/home")))
```
