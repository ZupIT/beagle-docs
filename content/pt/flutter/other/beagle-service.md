---
title: BeagleService
weight: 2
description: Nesta seção, você encontra informações sobre como configurar o Beagle Flutter pelo Beagle Service. Também aprende como acessar a referência do BeagleService atual.
---

---

# Introdução
A classe BeagleService é o ponto de entrada do Beagle Flutter e onde é feita toda sua configuração. Por padrão, a implementação básica já vem com alguns parâmetros definidos, então não é necessário definí-los.

# O que é configurável?
As configurações suportadas pelo BeagleService no Beagle Flutter são as seguintes:

1. baseUrl (obrigatório)
2. components (obrigatório)
3. actions
4. operations
5. environment
6. httpClient
7. viewClient
8. imageDownloader
9. navigationControllers and defaultNavigationController
10. logger
11. urlBuilder
12. analyticsProvider
13. enableStyles

Na continuação desta documentação você aprende sobre cada uma delas

## 1. baseUrl
Informa a URL base a ser usada ao buscar visualizações do backend. Sempre que uma URL relativa é fornecida, ela é anexada à URL base para formar o endereço completo. O Beagle considera todos os caminhos que começam com "/" como relativos, todos os outros são considerados absolutos e não usam a URL base.

No exemplo abaixo a URL resultante será `https://usebeagle.io/start/welcome`:

```dart
final beagleService = BeagleService(
  baseUrl: 'https://usebeagle.io/start',
  // ...
);

void main() {
  runApp(BeagleProvider(
    beagle: beagleService,
    child: ElevatedButton(
      onPressed: () => openBeagleScreen(route: RemoteView('/welcome'), context: context),
      child: Text('Start beagle flow'),
    ),
  ));
}
```

## 2. components
Fornece o mapa de componentes para o aplicativo. O Beagle Flutter, diferente das outras libs do Beagle, não vem com componentes. Por esta razão, esta propriedade é necessária, o Beagle não pode funcionar sem um conjunto básico de componentes.

Os componentes padrão do Beagle podem ser importados do pacote "beagle_components":

```dart
import 'package:beagle_components/beagle_components.dart';

final beagleService = BeagleService(
  components: defaultComponents,
  // ...
);
```

Para criar seus próprios componentes [veja o artigo]({{< ref path="/flutter/extensions/components" lang="pt" >}}).

## 3. actions
Este é o mapa de ações. O Beagle já fornece um conjunto de ações padrão, portanto, este parâmetro é opcional. Se você estiver usando uma biblioteca de componentes, como "beagle_components", é importante mapear suas ações no Beagle.

```dart
import 'package:beagle_components/beagle_components.dart';

final beagleService = BeagleService(
  components: defaultComponents,
  actions: defaultActions,
  // ...
);
```

Para criar suas próprias ações, veja o [artigo sobre ações]({{< ref path="/flutter/extensions/actions" lang="pt" >}}).

## 4. operations
O Beagle tem um conjunto de funções simples chamadas operações. Essas funções podem ser chamadas de dentro de uma expressão, no JSON. por exemplo. `@{sum(1, 2)}` resultará em `3`. [Veja aqui]({{< ref path="/api/operations/overview" lang="pt" >}}) uma lista de todas as operações disponíveis.

A propriedade `operations` no BeagleService pode ser usada para estender esse conjunto de funções. É um mapa de strings para funções, onde a chave é o nome da operação e o valor é a própria função. Para saber mais, consulte este [artigo]({{< ref path="/flutter/extensions/operations" lang="pt" >}}).

## 5. environment
Este atributo informa ao Beagle sobre o status de compilação atual da aplicação. Esta propriedade é usada pelo `BeagleUndefinedWidget`, que:
- mostra um texto com a descrição de `Componente Indefinido` quando o `environment` é `BeagleEnvironment.debug`;
- mostra um `SizedBox.shrink` quando o `environment` é `BeagleEnvironment.production`.

O valor padrão para `environment` é `BeagleEnvironment.debug

## 6. httpClient
O serviço usado pelo Beagle para fazer requisições ao servidor. Toda requisição feita pelo Beagle passará pelo HttpClient. Ele tem uma implementação padrão que simplesmente faz as solicitações conforme elas vêm dos JSONs. Se você precisar de um comportamento mais complexo, como autenticação ou cabeçalhos adicionais, basta susbtituir a implementação padrão.

O httpClient deve implementar a interface `HttpClient`, que possui o seguinte método único:

```dart
Future<Response> sendRequest(BeagleRequest req);
```

Onde `Response` é um objeto contendo: `int status`, `String body`, `Map<String, String> headers` e `Uint8List bodyBytes`.
E `BeagleRequest` é um objeto contendo: `String url`, `BeagleHttpMethod method`, `Map<String, String> headers` e `String body`.

Para obter mais informações sobre o HttpClient e como criar sua própria versão, consulte [este artigo]({{< ref path="/flutter/network/http-client" lang="pt" >}}).

## 7. viewClient
O viewClient é responsável por buscar e entregar páginas "server-driven". Ele possui um único método `fetch` e a implementação padrão cria as requisições e as envia para o HttpClient, transformando a resposta em um `BeagleUIElement`. A implementação padrão do ViewClient também processa qualquer `preFetch` nas ações de navegação do JSON.

Um bom exemplo de uma situação em que o viewClient precisa ser substituído é um sistema de cache. Essa nova implementação do ViewClient armazenaria as visualizações em memória local e verificaria se elas existem antes de enviar a solicitação para o HttpClient.

Para obter mais informações sobre como criar um ViewClient personalizado, consulte [este artigo]({{< ref path="/flutter/network/view-client" lang="pt" >}}).

## 8. imageDownload
er
Muito parecido com o ViewClient, o ImageDownloader também é responsável por fazer solicitações para o HttpClient e processar suas respostas, a única diferença é que o ViewClient faz isso para "telas server-driven" (JSONs) e o ImageDownloader faz isso para imagens.

O ImageDownloader padrão é muito simples, apenas faz a requisição, passa para o HttpClient e transforma a resposta em um `Uint8List`. Uma aplicação interessante de um ImageDownloader personalizado seria o cache. O ImageDownloader personalizado salvaria as imagens em memória local e usaria o valor armazenado em vez de fazer a solicitação ao HttpClient sempre que possível.

Para obter mais informações sobre como personalizar o ImageDownloader, leia o [artigo relacionado]({{< ref path="/flutter/network/image-downloader" lang="pt" >}}).

## 9. navigationControllers and defaultNavigationController
Os `Navigation Controllers` são responsáveis ​​por implementar o comportamento dos eventos de carregamento, erro e sucesso da navegação entre as páginas Beagle.

Se não estiver definido, o Beagle usará o `DefaultNavigationController`, que implementa o seguinte comportamento:

- **onLoading**: renderiza uma árvore de UI do Beagle com um único componente chamado `custom:loading`.
- **onError**: renderiza uma árvore UI do Beagle com um único componente chamado `custom:error`.
- **onSuccess**: renderiza uma árvore UI do do Beagle com a árvore UI retornada do backend.

Esse comportamento pode ser personalizado implementando seu próprio NavigationController. Você pode ter vários Navigation Controllers em um único aplicativo, um para cada seção, por exemplo. O Beagle, do backend, pode dizer qual NavigationController deve ser usado para o próximo conjunto de telas que serão carregadas.

Para saber mais sobre Navigation Controllers e como configurá-los, leia [este artigo]({{< ref path="/flutter/navigation/navigation-controllers" lang="pt" >}}).

## 10. logger
O Beagle produz muitos logs, mas como eles serão exibidos depende de você. O mecanismo de registro padrão (`DefaultLogger`) imprime todas as mensagens no console com o nome "BeagleSDK" usando o método `log` de `dart:developer`.

O comportamento de registro pode ser alterado implementando a interface `BeagleLogger` e passando-a para o `BeagleService`. A interface possui quatro métodos: `warning`, `error`, `errorWithException` e `info`, que representam todos os níveis de logs criados pelo Beagle.

Para saber mais sobre o registro e como personalizá-lo, leia o [artigo]({{< ref path="/flutter/other/logger" lang="pt" >}}).

## 11. urlBuilder
Com o urlBuilder, você pode alterar a lógica padrão do Beagle ao criar URLs a partir de um caminho:

```dart
String build(String path) {
  // ...
}
```

O comportamento padrão do Beagle é verificar se o caminho começa com "/". Se sim, é considerado relativo e retornado o `baseUrl` anexado com o caminho (`"$baseUrl$path"`). Caso contrário, é retornado o caminho, sem combiná-lo com o `baseUrl`.

Esse comportamento é bom para a maioria das aplicações, mas se você precisar de algo diferente, basta estender a classe `UrlBuilder` e fornecer sua implementação para o BeagleService.

## 12. analyticsProvider
O `analyticsProvider` deve ser definido sempre que você quiser adicionar recursos de análise com base nas interações do usuário com os componentes Beagle.

Existem dois tipos de registros gerados pelo Beagle: registros de tela e registros de ação. Para saber mais sobre eles e como configurar o "analytics", consulte [este artigo]({{< ref path="/flutter/other/analytics" lang="pt" >}}).

## 13. enableStyles
Esta é uma opção booleana para habilitar ou desabilitar a aplicação automática de estilos do Beagle. O valor precisa ser "true" para que o atributo "style", do Beagle, funcione corretamente. Também deve ser "true" se você precisar que todos os componentes da biblioteca beagle_components funcionem.

Definir o valor de `enableStyles` como "false" é útil quando o aplicativo desenvolverá todos os seus componentes e mecanismo de layout. Para saber mais sobre isso, consulte [este artigo]({{< ref path="/flutter/layout/styles" lang="pt" >}}).

# Fornecendo um BeagleService a aplicação
Depois de instanciar um BeagleService, é preciso adicioná-lo as configurações de inicialização da aplicação `BeagleProvider`. Veja o exemplo no código a seguir:

```dart
import 'package:beagle/beagle.dart';

final beagleService = BeagleService(
  // ...
)

void main() {
  runApp(BeagleProvider(
    beagle: beagleService,
    child: // ...
  ));
}
```

É recomendado declarar o BeagleProvider o quanto antes o possível na hierarquia de componentes da aplicação Tenha cuidado para não colocá-lo dentro de um navegador, pois pode torná-lo indisponível quando houverem mudanças na tela.

# Acessando o BeagleService a partir de um widget

O BeagleService contém uma referência a todos os outros serviços que podem ser necessários para qualquer módulo do Beagle, incluindo o ViewClient, o Logger e o HttpClient. Para acessá-lo de dentro de um widget, você pode usar o mixin `BeagleConsumer`.

O `BeagleConsumer` deve ser aplicado a um StatefulWidget. É importante usar um StatefulWidget ao usar o BeagleService para que o Flutter não precise procurá-lo em cada renderização. Mas se você realmente precisa usá-lo em um Widget comum, você pode chamar o método utilitário `findBeagleService`.

Veja abaixo a implementação do LazyComponent, que utiliza a view client:

```dart
class BeagleLazyComponent extends StatefulWidget {
  const BeagleLazyComponent({
    Key? key,
    required this.path,
    required this.beagleId,
    required this.view,
    this.initialState,
    this.child,
  }) : super(key: key);

  // ...

  @override
  _BeagleLazyComponent createState() => _BeagleLazyComponent();
}

class _BeagleLazyComponent extends State<BeagleLazyComponent> with AfterLayoutMixin<BeagleLazyComponent>, BeagleConsumer {
  Future<void> _fetchLazyView() async {
    try {
      final component = await beagle.viewClient.fetch(RemoteView(widget.path));
      widget.view.getRenderer().doFullRender(component, widget.beagleId, TreeUpdateMode.replace);
    } catch (err) {
      beagle.logger.error('BeagleLazyComponent: error: $err');
    }
  }

  @override
  void afterFirstLayout(BuildContext context) {
    if (widget.initialState != null) {
      widget.view.getRenderer().doFullRender(widget.initialState!, widget.beagleId, TreeUpdateMode.replace);
    }
    _fetchLazyView();
  }

  @override
  Widget buildBeagleWidget(BuildContext context) {
    return widget.child ?? Container();
  }
}
```

Veja que assim que usamos o mixin `BeagleConsumer`, temos acesso à variável `beagle`, que é a referência ao BeagleService atual.

É importante notar que o `beagle` só está disponível durante e depois do estado de inicialização, ou seja, não pode ser usado no construtor.

Quando um BeagleConsumer não é descendente de um BeagleProvider, uma exceção é lançada.

# Acessando o BeagleService a partir de uma action handler

O BeagleService pode ser acessado a partir do `BuildContext`, desde que o contexto seja descendente de um `BeagleProvider`. A função que encontra o `BeagleService` dado um `BuildContext` é a `findBeagleService`. Veja o exemplo abaixo de uma ação que registra uma mensagem.

```dart
import 'package:beagle/beagle.dart';

final Map<String, ActionHandler> actions = {
  'custom:log': ({required action, required element, required view, required context}) {
    findBeagleService(context).logger.info(action.getAttributeValue('message'));
  },
  // ...
}
```
