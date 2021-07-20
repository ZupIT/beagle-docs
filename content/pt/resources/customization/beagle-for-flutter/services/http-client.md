---
title: Cliente HTTP
weight: 189
description: >-
  Nesta seção, você terá informações sobre como configurar e usar o cliente HTTP no Beagle Flutter.
---

---

## Introdução
Define como uma requisição de serviço é configurada, para usá-lo, você precisa criar uma classe que implemente a classe abstrata `HttpClient`. O Beagle Flutter provê uma implementação padrão nomeada `DefaultHttpClient`. Aqui está o contrato:

```dart
abstract class HttpClient {
  Future<Response> sendRequest(BeagleRequest req);
}
```

No método **sendRequest**, você pode criar regras para sua camada de network. Você pode adicionar cabeçalhos, definir métodos da requisição, objetos de resposta, criptografar dados, etc.

Agora, vamos ver em detalhes o que é o parâmetro e retorno deste método:

### BeagleRequest
É a classe para configurar requisições HTTP.

| **Atributo** | **Tipo** | **Obrigatório** | **Definição** |
| :--- | :--- | :---: | :--- |
| url | String  | ✓ | Define o endpoint que retorna a tela ou componente que você deseja mostrar. |
| method | BeagleHttpMethod | | É um enum que define qual operação HTTP você deseja fazer. Funciona como uma requisição HTTP e é atribuido `get` por padrão. |
| headers | Map<String, String> | | É usado quando você precisa enviar dados via um cabeçalho HTTP.  |
| body | String | | É setado null por padrão e só é necessário implementar quando você precisa enviar uma mensagem HTTP como dados de corpo. |

#### BeagleHttpMethod
Método HTTP para indicar a ação desejada para buscar um dado recurso. É um `enum` e os valores são:

| Valor | Definição |
| :--- | :--- |
| get | O método `get` requisita a representação de um recurso específico. Requisições usando o método `get` devem retornar somente dados. |
| post | O método `post` é usado para enviar uma entidade à um específico recurso, frequentemente causando uma mudança no estado do recurso ou efeitos colaterais no servidor.  |
| put | O método `put` substitui todas as representações atuais do recurso alvo com os dados da requisição.  |
| delete | O método `delete` remove um recurso específico.  |
| head | O método `head` requisita uma resposta do mesmo modo que o método `get` faz, entretanto sem um corpo de resposta.  |
| patch | O método `patch` é usado para aplicar modificações parciais num recurso. |

### Response
É usado para retornar dados feitos por requisições.

| **Atributo** | **Tipo** | **Obrigatório** | **Definição** |
| :--- | :--- | :---: | :--- |
| status | int  | ✓ | Retorna o código de resposta recebido pelo servidor HTTP remoto. |
| body | String | ✓ | Corpo de resposta retornado pela requisição. |
| headers | Map<String, String> | ✓ | É usado quando você precisa enviar dados via um cabeçalho HTTP. |
| bodyBytes | Uint8List | ✓ | Retorna a mensagem de resposta recebido pelo servidor HTTP remoto. |

Ele tem um método `toJson` que retorna uma String com o `status`, `body` e `headers` encodados.

## Criar um cliente HTTP customizado
Para criar seu próprio cliente HTTP, você só precisa implementar o método `sendRequest`, aqui está a implementação padrão:

```dart
@override
Future<Response> sendRequest(BeagleRequest req) async {
  final uri = Uri.parse(req.url);
  final handlers = {
    BeagleHttpMethod.get: () => 
        http.get(uri, headers: req.headers),
    BeagleHttpMethod.post: () =>
        http.post(uri, headers: req.headers, body: req.body),
    BeagleHttpMethod.put: () =>
        http.put(uri, headers: req.headers, body: req.body),
    BeagleHttpMethod.patch: () =>
        http.patch(uri, headers: req.headers, body: req.body),
    BeagleHttpMethod.delete: () => 
        http.delete(uri, headers: req.headers),
  };
  final response = await handlers[req.method]();
  return Response(
    response.statusCode,
    response.body,
    response.headers,
    response.bodyBytes,
  );
}
```

## Use um cliente HTTP customizado
Para usar seu cliente HTTP, passe-o no método de inicialização do Beagle `BeagleSdk.init` assim como no exemplo abaixo:
```dart
BeagleSdk.init(
  httpClient: SeuClienteHttp(),
);
```
