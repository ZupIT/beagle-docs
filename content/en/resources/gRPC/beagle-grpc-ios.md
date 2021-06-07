---
title: Beagle gRPC for iOS
weight: 18
description: "This framework provides a client to communicate with Beagle using gRPC."
---

![Beagle gRPC available at CocoaPods](https://img.shields.io/cocoapods/v/BeagleGRPC?label=Beagle%20gRPC)

### Supported Platforms

Beagle gRPC's platform support is identical to the platform support of Beagle.
Note that Beagle gRPC uses [gRPC Swift](https://github.com/grpc/grpc-swift#readme) and requires Swift to be version 5.2 or higher.

### NetworkClientGRPC

This class implements the `NetworkClient` protocol using gRPC.
When creating your NetworkClientGRPC you have to provide the following parameters:

<table>
  <thead>
    <tr>
      <th style="text-align:left">Parameter</th>
      <th style="text-align:left">Description</th>
      <th style="text-align:left">Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">grpcAddress</td>
      <td style="text-align:left">
      Address of the gRPC server. The host and port specified here will be used to create the gRPC connection channel. The request URL must have this parameter as prefix or the request will be delegated to the <i>customHttpClient</i>.
      </td>
      <td style="text-align:left">&#x2713;</td>
    </tr>
    <tr>
      <td style="text-align:left">customHttpClient</td>
      <td style="text-align:left">
      A fallback NetworkClient to handle non gRPC requests.
      </td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">defaultCallOptions</td>
      <td style="text-align:left">
      Default values to be used in every gRPC request, for instance, set static headers or define request time limit. Check <a href="https://github.com/grpc/grpc-swift/blob/main/Sources/GRPC/CallOptions.swift" target="_blank">gRPC Swift</a> for all available options.
      </td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">interceptors</td>
      <td style="text-align:left">
      A factory providing interceptors for each RPC. Interceptors allow request and response parts to be observed, mutated or dropped as necessary.
      </td>
      <td style="text-align:left"></td>
    </tr>
  </tbody>
</table>

### How to use Beagle gRPC in your iOS project

{{% alert color="info" %}}
In this section is assumed that your gRPC server is running in the address `0.0.0.0` at the port `50051`.
Check the [Beagle gRPC Backend page]({{< ref path="/get-started/using-beagle-helpers/backend/beagle-grpc" lang="en" >}}) for more information on running your server.
{{% /alert %}}

Add the dependency to your Podfile

```ruby
pod 'BeagleGRPC'
```

After adding Beagle gRPC as a dependency in your project, you can create a `NetworkClientGRPC` and set it in your _Beagle.dependencies_.

```swift
import Beagle
import BeagleGRPC

let dependencies = BeagleDependencies()
Beagle.dependencies = dependencies

let baseUrl = "http://0.0.0.0:50051"
dependencies.networkClient = NetworkClientGRPC(
    grpcAddress: baseUrl,
    customHttpClient: nil
)
dependencies.urlBuilder = UrlBuilder(
  baseUrl: URL(string: baseUrl)
)
```

Now you are ready to connect to your gRPC server.

```swift
BeagleScreenViewController(.remote(.init(url: "/home")))
```
