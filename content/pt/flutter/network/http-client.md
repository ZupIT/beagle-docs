---
title: HTTP client
weight: 3
description: >-
  Nesta seção, você encontra mais informações sobre como configurar um cliente HTTP no Beagle Flutter.
---

---

# Introdução
O "HttpClient" é responsável por enviar todas as requisições feitas pelo Beagle. O Beagle já tem uma implementação padrão deste serviço. Se você precisar mudar este comportamento, é necessário implementar seu próprio HttpClient usando a interface a seguir:

```dart
abstract class HttpClient {
  Future<Response> sendRequest(BeagleRequest req);
}
```

No método **sendRequest**, você cria regras para a camada de redes. Pode adicionar "headers", mudar o método de requisição, adicionar o corpo da requisição, resposta, colocar criptografia, etc.

O `sendRequest` recebe um parâmetro único do tipo `BeagleRequest` e retorna um objeto do tipo `Response`. Veja abaixo o que cada um destes faz:

# BeagleRequest
É a classe para configurar as requisições HTTP.

| **Attribute** | **Type** | **Required** | **Definition** |
| :--- | :--- | :---: | :--- |
| url | String  | ✓ | O endpoint que retorna a tela "server-driven". |
| method | BeagleHttpMethod | | Classe enum que define a [Operação HTTP](https://www.restapitutorial.com/lessons/httpmethods.html). O valor padrão é `GET`. |
| headers | Map<String, String> | | Usado ao enviar dados por HTTP headers. |
| body | String | | Usado para enviar mensagens HTTP como corpo da requisição. |

# Resposta
É usado para acessar a resposta da requisição.

| **Attribute** | **Type** | **Required** | **Definition** |
| :--- | :--- | :---: | :--- |
| status | int  | ✓ | Código do status da resposta. |
| body | String | ✓ | Corpo da resposta. |
| headers | Map<String, String> | ✓ | "Headers" da resposta. |
| bodyBytes | Uint8List | ✓ | Corpo, em bytes, da requisição. |

A resposta também possui um método `toJson` que retorna uma String com o `status`, `corpo` e `headers` codificado.

# Criar um HTTP client customizado
Veja abaixo um examplo de customização do `HttpClient` que adiciona um header `platform` para toda requisição `GET`.

```dart
import 'dart:async';
import 'package:beagle/beagle.dart';
import 'dart:io';
import 'package:http/http.dart' as http;

class MyHttpClient implements HttpClient {
  const MyHttpClient();
  @override
  Future<Response> sendRequest(BeagleRequest req) async {
    final uri = Uri.parse(req.url);
    final handlers = {
      BeagleHttpMethod.get: () => http.get(uri, headers: {...req.headers, 'platform': Platform.operatingSystem}),
      BeagleHttpMethod.post: () => http.post(uri, headers: req.headers, body: req.body),
      BeagleHttpMethod.put: () => http.put(uri, headers: req.headers, body: req.body),
      BeagleHttpMethod.patch: () => http.patch(uri, headers: req.headers, body: req.body),
      BeagleHttpMethod.delete: () => http.delete(uri, headers: req.headers),
    };
    final response = await handlers[req.method]!();
    return Response(response.statusCode, response.body, response.headers, response.bodyBytes);
  }
}
```
Este exemplo mostra de forma simplificada como implementar essa funcionalidade. Seria mais simples em alguns casos extender o `DefaultHttpClient`, que já contém a maioria das implementações. Mesmo assim, na maioria dos casos, toda a implementação deve ser feita para cobrir cada caso de uso específico quando necessário.

# Use um HTTP client customizado
Para usar seu novo "client", passe para o BeagleService na inicialização `BeagleSdk.init`. Veja o exemplo abaixo:

```dart
final beagleService = BeagleService(
  httpClient: const MyHttpClient(),
  // ...
);
```
