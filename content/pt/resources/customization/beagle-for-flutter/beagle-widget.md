---
title: BeagleWidget
weight: 2
description: >-
  Aqui você encontra informações sobre como usar o BeagleWidget no Beagle Flutter.
---

---

## O que é?
Um widget que mostra o conteúdo do Beagle. Este é o ponto de entrada para carregar telas server driven e componentes visuais server driven para sua aplicação Flutter. O `BeagleWidget` é um `StatefulWidget` que renderiza widgets através de um JSON local ou uma requisição HTTP.

Veja como a estrutura é representada:

<table>
  <thead>
    <tr>
      <th style="text-align:left">Atributo</th>
      <th style="text-align:left">Tipo</th>
      <th style="text-align:left">Obrigatório</th>
      <th style="text-align:left">Definição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">key</td>
      <td style="text-align:left">Key</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Identificador para Widgets, Elements e SemanticsNodes.</td>
    </tr>
    <tr>
      <td style="text-align:left">screenRequest</td>
      <td style="text-align:left"><strong>BeagleScreenRequest</strong></td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Provê a url, method, headers e body para a requisição.</td>
    </tr>
    <tr>
      <td style="text-align:left">screenJson</td>
      <td style="text-align:left">String</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Representa uma tela local para ser mostrada.</td>
    </tr>
    <tr>
      <td style="text-align:left">onCreateView</td>
      <td style="text-align:left"><strong>OnCreateViewListener</strong></td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Função que retorna o BeagleView atual.</td>
    </tr>
  </tbody>
</table>

### BeagleScreenRequest
Classe usada para fazer requisições no Beagle Flutter. Ela implementa o `BeagleNetworkOptions` que traz os atributos `method`, `headers` e `strategy`. Também, a classe `BeagleScreenRequest` tem as propriedades `url` e `body`. Vejamos sua estrutura:

<table>
  <thead>
    <tr>
      <th style="text-align:left">Atributo</th>
      <th style="text-align:left">Tipo</th>
      <th style="text-align:left">Obrigatório</th>
      <th style="text-align:left">Definição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">url</td>
      <td style="text-align:left">String</td>
      <td style="text-align:center">&#x2713;</td>
      <td style="text-align:left">Representa a URL relativa do servidor da requisição.</td>
    </tr>
    <tr>
      <td style="text-align:left">body</td>
      <td style="text-align:left">String</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Conteúdo que vai ser entregue pela requisição.</td>
    </tr>
    <tr>
      <td style="text-align:left">headers</td>
      <td style="text-align:left">Map&lt;String, String&gt;</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Headers para serem usados na requisição.</td>
    </tr>
    <tr>
      <td style="text-align:left">method</td>
      <td style="text-align:left">BeagleHttpMethod</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Método Http para indicar a ação desejada para ser perfomada por um dado recurso. Pode ser <code>put</code>, <code>get</code>, <code>post</code>, <code>delete</code>, <code>patch</code> e <code>head</code>.</td>
    </tr>
    <tr>
      <td style="text-align:left">strategy</td>
      <td style="text-align:left">BeagleNetworkStrategy</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Estratégia de cache aplicada para a requisição. Pode ser <code>beagleCacheOnly</code>, <code>beagleWithFallbackToCache</code>, <code>networkWithFallbackToCache</code>, <code>cacheWithFallbackToNetwork</code>, <code>cacheOnly</code>, <code>networkOnly</code> e <code>cacheFirst</code>.</td>
    </tr>
  </tbody>
</table>

### OnCreateViewListener
Função que segue a estrutura `void Function(BeagleView view)` e provê a atual `BeagleView` quando está disponível.

## Como usar?
Onde quiser mostrar um conteúdo server driven, posicione o `BeagleWidget` lá informando pelo menos um JSON local ou uma `BeagleScreenRequest` com a `url` do seu BFF. No próximo exemplo, colocamos o `BeagleWidget` no corpo do widget `Scaffold`:

```dart
Scaffold(
  appBar: AppBar(
    title: const Text('Beagle Sample'),
  ),
  body: BeagleWidget(
    screenRequest: BeagleScreenRequest('components'),
  ),
);
```

{{% alert color="warning" %}}
Atenção: é necessário chamar `BeagleSdk.init` passando pelo menos a propriedade `baseUrl` antes de usar o `BeagleWidget`.
{{% /alert %}}
