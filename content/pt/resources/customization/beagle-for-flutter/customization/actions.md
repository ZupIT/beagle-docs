---
title: Ações Customizadas
weight: 3
description: >-
  Aqui você encontra informações sobre como criar e usar suas próprias ações no Beagle Flutter.
---

---

## Como criar ações customizadas?
Assim como componentes customizados, é bem simples criar ações customizadas no Beagle Flutter, você precisa declarar um mapa que siga a estrutura `Map<String, ActionHandler>` e passá-lo pelo método de inicialização `BeagleSdk.init`. Basicamente essa estrutura diz ao Beagle qual ação disparar quando dado identificador vier pelo JSON.

### Definição da chave String
A chave String do mapa é a propriedade `_beagleAction_` no JSON que identifica o tipo da ação. Você pode nomeá-la do jeito que quiser, desde que o prefixo seja ​​`custom:`. 

### Definição do valor ActionHandler
O valor ActionHandler do mapa recebe uma `BeagleAction`, uma `BeagleView`, um `BeagleUIElement` e um context como parâmetros, seguindo a estrutura `void Function({BeagleAction action, BeagleView view, BeagleUIElement element, BuildContext context})`. Esses parâmetros estão disponíveis porque eles provêem todas as informações necessárias para disparar um evento customizado, como o contexto e a ação vinda do JSON.

## Exemplo
Siga esses passos para aprender como criar e customizar suas próprias ações customizadas:

### Passo 1: Crie o identificador da ação
O primeiro passo para criar uma ação customizada com o Beagle Flutter, é definir o identificador. Aqui, vamos nomeá-lo de `custom:log`.

### Passo 2: Crie a ação
Agora crie sua ação independentemente do Beagle. Para esse exemplo, vamos usar a simples função abaixo:
```dart
void debug(String message) {
  debugPrint(message);
}
```

### Passo 3: Crie o mapa de ações customizadas
Com a ação e o identificador da ação prontos, é hora de criar a estrutura que vamos passar para o Beagle:
```dart
Map<String, ActionHandler> myCustomActions = {
  'custom:log': ({action, view, element, context}) {
    debug(action.getAttributeValue('message'));
  }
};
```

### Passo 4: Passe-os para o Beagle
Para o Beagle ser capaz de disparar sua ação, passe o mapa que você acabou de criar através do método de inicialização:
```dart
BeagleSdk.init(
  actions: myCustomActions,
);
```

É isso! Agora voce pode usar sua ação customizada com o Beagle Flutter!
