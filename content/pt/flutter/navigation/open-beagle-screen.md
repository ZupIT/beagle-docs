---
title: Iniciando um fluxo Beagle
weight: 3
description: >-
  Nesta seção, você aprende como usar e para que serve a função openBeagleScreen.
---

---

# O que é?

O `openBeagleScreen` é a entrada para um fluxo server driven. Quando chamada uma nova página é adicionada ao navegador pai com a seguinte estrutura:

- RootNavigator
  - StackNavigator
    - screenBuilder result

Ambos `RootNavigator` e `StackNavigator` são iniciados pelo Beagle para tratar navegações dentro do fluxo "server driven". O resultado do `screenBuilder` é o Widget retornado pelo terceiro parâmetro passado ao `openBeagleScreen`. Se não possuir o terceiro parâmetro, então, o resultado padrão do `screenBuilder` é usado, que é um `BeagleWidget`. O BeagleWidget é responsável por apresentar o conteúdo "server driven".

Usamos dois navegadores (`RootNavigator` e `StackNavigator`) para que seja possível representar a estrutura de navegação do Beagle, que é composta de uma pilha de telas. Na implementação, o `RootNavigator` contém um `StackNavigator` para cada pilha e os `StackNavigators` contém as telas.

## Primeiro parâmetro: route (obrigatório)

O primeiro parâmetro do `openBeagleScreen` é o `BeagleRoute`. Um `BeagleRoute` pode ser uma `LocalView` ou uma `RemoteView`. Normalmente, apenas telas remotas são usadas, mas para testar alguns casos, é possível optar pela view local. `LocalView` é um JSON renderizado sem precisar de uma operação de requisição ao servidor.

### RemoteView
Uma `RemoteView` é instanciada com apenas um parâmetro obrigatório (url). Por exemplo, `RemoteView('/home')` faz uma requisição para o endereço `GET $baseUrl/home`.

Existem outros parâmetros adicionais para um `RemoteView`. Veja a lista: 

- **fallback:** árvore Beagle UI tree para renderizar em caso de erro.
- **shouldPrefetch:** diz ao ViewClient para carregar uma tela o mais rápido o possível e não esperar por ações     específicas. Não funciona ao usar com o `openBeagleScreen`.
- **httpAdditionalData:** usado para configurar opções adicionais a requisição. Um HttpAdditionalData contém:
  - **method:** o método HttpMethod, o padrão é GET.
  - **headers:** um mapa de "strings" com todos os "headers" para serem enviados na requisição.
  - **body:** o corpo da requisição. Apenas válido para requisições POST. O valor passado deve ser do tipo "serializable" 

### LocalView
O `LocalView` encapsula uma `BeagleUIElement`. Veja o exemplo abaixo:

```dart
final myLocalView = LocalView(BeagleUIElement({
  '_beagleComponent_': 'beagle:screen',
  'id': 'myLocalView',
  'child': {
    '_beagleComponent_': 'beagle:text',
    'text': 'Hello World'
  }
}))
```

## Segundo parâmetro: o context (obrigatório)

Como toda funcionalidade no Beagle Flutter, precisamos de um BuildContext para configurar tudo, apenas repasse o contexto recebido pelo método build

## Terceiro parâmetro: o screen builder (opcional)
O `screenBuilder`é uma função que diz ao Beagle como criar telas Beagle e o local ideal para implementar telas híbridas com e sem componentes server driven. Veja o exemplo:

```dart
Widget screenBuilder(BeagleWidget beagleWidget, BuildContext context) => Column(
  children: [
    myHeader,
    myMenu,
    beagleWidget,
    footer,
  ]
)

Widget build(BuildContext context) => ElevatedButton(
  onPressed: () => openBeagleScreen(route: RemoteView('/welcome'), context: context, screenBuilder),
  child: Text('Start beagle flow'),
);
```

No exemplo acima, ao invés de renderizar telas puramente "server driven", O Beagle irá renderizar UIs com conteúdos mistos do frontend e do backend. Foi renderizado, um componente "header", um "menu", os conteúdos "server-driven". Por fim, é renderizado um componente "footer".

Se não for passado, o Beagle irá usar um "screen builder" padrão: `Widget screenBuilder(BeagleWidget beagleWidget, BuildContext context) => beagleWidget;`

## Quarto parâmetro: o controllerId (optional)
O `controllerId` faz com que a primeira pilha de navegação não use o controlador de navegação padrão, mas sim aquele que corresponde ao id fornecido. Para saber mais sobre controladores de navegação, leia [artigo sobre controladores de navegação]({{< ref path="/flutter/navigation/navigation-controllers" lang="pt" >}}).


# Como funciona?
A função `openBeagleScreen` envia uma nova página para o navegador pai. Esta nova página contém um "RootNavigator" que é inicializado com um "StackNavigator". O "StackNavigator" é inicializado com uma página que contém o "BeagleWidget".

O navegador de pilha é responsável por chamar o serviço "ViewClient" com o "BeagleRoute" passado como parâmetro para a função `openBeagleScreen`. Quando o carregamento começa, o "StackNavigator" chama o método do controlador de navegação `onLoading`. O controlador de navegação padrão renderiza um "BeagleUITree" contendo um único componente chamado `custom:loading`. Quando o carregamento é bem-sucedido, o "StackNavigator" chama o método `onSuccess` do controlador de navegação. O controlador de navegação padrão apenas renderiza o "BeagleUIElement" que veio do "backend". Se ocorrer um erro, o "StackNavigator" chama `onError` no controlador de navegação. O controlador de navegação padrão renderiza um "BeagleUIElement" contendo o componente `custom:error`. Para obter mais informações sobre controladores de navegação, acesse este [link]({{< ref path="/flutter/navigation/navigation-controllers" lang="pt" >}}).

O navegador de pilha também é responsável por instanciar o "BeagleWidget". Cada página no "StackNavigator" deve ter um "BeagleWidget" diferente.

O "BeagleWidget" é o widget responsável por renderizar uma "server-driven UI". Ele contém uma referência a um "BeagleView", que é a estrutura principal do Beagle. O "BeagleView" armazena a árvore da interface do usuário do Beagle e é responsável por fazer alterações e renderizá-la novamente sempre que necessário. Para saber mais sobre o "BeagleView", consulte [este artigo]({{< ref path="/flutter/other/beagle-view" lang="pt" >}}).
