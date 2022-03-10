---
title: Navigation controllers
weight: 3
description: >-
  Nesta seção você aprende como controlar e tratar as respostas de navegação.
---

---

# Introdução
Os controles de navegação são responsáveis por implementar o comportamento de eventos de carregamento, erro e sucesso das navegações entre páginas Beagle.

Se não for implementada será usado o `DefaultNavigationController` que implementa as seguintes funções:

- **onLoading**: renderiza uma árvore Beagle UI com um único componente `custom:loading`.
- **onError**: renderiza uma árvore Beagle UI com um único componente `custom:error`.
- **onSuccess**: renderiza uma árvore Beagle UI com a árvore de resposta do sucesso da requisição ao backend.

Todos esses comportamentos podem ser personalizados implementando um `NavigationController` customizado. Você pode ter vários controladores de navegação em um único aplicativo, um para cada seção, se desejar. O framework Beagle presente em seu Frontend consegue definir qual `NavigationController` deve ser chamado para cada conjunto de telas que vem de um Backend.

Ao navegar para um novo Stack (usando, por exemplo, ações como PushStack, ResetStack ou ResetApplication), o backend pode fornecer um `controllerId` para a ação de navegação que está sendo acionada (você só listará uma Id se quiser usar um controlador de navegação personalizado (`custom NavigationController`)).

O Beagle usará este id para encontrar o `NavigationController` correspondente no Front end de sua aplicação. Dessa forma, você poderá ter uma pilha inteira de telas com um feedback de carregamento diferente.

# A interface NavigationController

## onLoading
Chamado quando o Beagle esta prestes a carregar uma nova view. Recebe os seguintes parâmetros:

- `BeagleView view`: a [BeagleView]({{< ref path="/flutter/other/beagle-view" lang="en" >}}) que renderiza a página server driven.
- `BuildContext context`: o "build context" atual.
- `Function completeNavigation`: uma função para completar a navegação. por exemplo, para adicionar a nova página ao "navigator" com o `BeagleWidget`. Você precisa chamá-la assim que for renderizada uma Beagle JSON.

- `Function completeNavigation`: uma função para completar a navegação, ou seja, para finalmente enviar a nova página para o navegador com o `BeagleWidget`. Você precisa chamá-lo assim que quiser renderizar um Beagle JSON. Por exemplo, se seu feedback de carregamento é para renderizar um componente beagle, você deve chamar completeNavigation de dentro do método `onLoading`. Se você renderizar uma interface do usuário do Beagle apenas no evento de sucesso, não precisará chamar `completeNavigation` porque ele é chamado automaticamente após `onSuccess`.

## onError
Chamada sempre que acontecer um erro enquanto é carregada uma nova "view". Recebe os mesmo parâmetros de `onLoading` além de:

- `dynamic error`:o erro recebido ao ser feita a requisição.
- `StackTrace stackTrace`: a pilha de erros relacionada ao erro da requisição.
- `Future<void> Function() retry`: uma função, que quando chamada tenta refazer a requisição.

## onSuccess

Chamado sempre que uma "view" é carregada com sucesso. Para renderizar a "view", este método deve chamar `beagleView.getRenderer().doFullRenderer(screen)`. Isso renderiza a tela do servidor para o `BeagleView` atual. Com exceção de `completeNavigation`, que será chamado de qualquer maneira pelo Beagle, o método `onSuccess` aceita os mesmos parâmetros que o `onLoading` além de:

- `BeagleUIElement screen`: a server driven view recuperada do [ViewClient]({{< ref path="/flutter/network/view-client" lang="pt" >}}).

# Examplo

```dart
import 'package:flutter/material.dart';

class InYourFaceNavigationController implements NavigationController {
  @override
  void onError({
    required BeagleView view,
    required BuildContext context,
    required dynamic error,
    required StackTrace stackTrace,
    required RetryFunction retry,
    required Function completeNavigation,
  }) {
    // removes the loading pop-up
    Navigator.of(context).pop();
    return showDialog<void>(
      context: context,
      barrierDismissible: false,
      builder: (BuildContext context) {
        return AlertDialog(
          title: const Text('AlertDialog Title'),
          content: SingleChildScrollView(
            child: ListBody(
              children: const <Widget>[
                Text('A nasty error happened!'),
                Text('Click the button to retry'),
              ],
            ),
          ),
          actions: <Widget>[
            TextButton(
              child: const Text('Cancel'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
            TextButton(
              child: const Text('Retry'),
              onPressed: () {
                Navigator.of(context).pop();
                retry();
              },
            ),
          ],
        );
      },
    );
  }

  @override
  void onLoading({
    required BeagleView view,
    required BuildContext context,
    required Function completeNavigation,
  }) {
    return showDialog<void>(
      context: context,
      barrierDismissible: false,
      builder: (BuildContext context) {
        return AlertDialog(
          title: const Text('AlertDialog Title'),
          content: SingleChildScrollView(
            child: ListBody(
              children: const <Widget>[
                Text('Wait until the page loads.'),
              ],
            ),
          ),
        );
      },
    );
  }

  @override
  void onSuccess({
    required BeagleView view,
    required BuildContext context,
    required BeagleUIElement screen,
  }) {
    // removes the loading pop-up
    Navigator.of(context).pop();
    view.getRenderer().doFullRender(screen);
  }
}
```

Este é um controlador de navegação simples com o único objetivo de demonstrar esse recurso.
- Mostra uma caixa de diálogo sempre que uma página começa a carregar. Se ocorrer um erro.
- mostra uma caixa de diálogo de erro, que oferece a opção de tentar novamente.
- Quando a página é carregada com sucesso, ela renderiza a página.

O único parâmetro não intuitivo no NavigationController é o `completeNavigation`.

{{% alert color="success" %}}
Você pode ignorar isso se não pretender mostrar uma IU do Beagle antes do evento de sucesso.
{{% /alert %}}
Por padrão, se você não chamar a função `completeNavigation`, a navegação ocorrerá após o evento de sucesso. Mas, os controladores de navegação, como o padrão, usam a Estrutura Beagle para renderizar o feedback.
O `Default NavigationController` renderiza o componente `custom:loading` Beagle sempre que um evento de carregamento acontece e é por isso que ele precisa chamar a função `completeNavigation` dentro do método `onLoading`. Dessa forma, o Beagle pode renderizar corretamente o componente.

## Registrando os controladores de navegação
1. Você deve criar um mapa para lidar com todos os `controladores de navegação` que podem ser usados ​​pelo backend, onde as chaves são os *IDs do controlador* e os valores são instâncias de `NavigationController`.

2. Neste mapa você pode também definir um outro navegador que queira que seja usado como padrão. Para tal basta a propriedade `defaultNavigationController`. O controlador de navegação padrão é usado sempre que nenhum ``controllerId`` for fornecido ou sempre que nenhum controlador correspondente ao id fornecido for encontrado.

Se você tiver três controladores de navegação: `inYourFace`, `secured` e `public`. `inYourFace` é o padrão, enquanto `secured` e `public` serão usados ​​em seções específicas do aplicativo e referenciados via controllerIds, definidos em sua tela no backend. A configuração ficaria da seguinte forma:

```dart
final beagleService = BeagleService(
  defaultNavigationController: InYourFaceNavigationController(),
  navigationControllers: {
    'secured': SecuredNavigationController(),
    'public': PublicNavigationController(),
  },
  // ...
);
```
