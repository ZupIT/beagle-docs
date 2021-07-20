---
title: Ações Customizadas
weight: 3
description: >-
  Nessa seção, você encontrará informações sobre como criar e usar suas próprias ações no Beagle Flutter.
---

---

## Como criar ações customizadas?
É simples criar ações customizadas no Beagle Flutter, você precisa:
- Declarar um mapa que siga a estrutura `Map<String, ActionHandler>`;
- Passá-lo pelo método de inicialização `BeagleSdk.init`.

Essa estrutura diz ao Beagle qual ação disparar quando dado identificador vier por um JSON.

### Definição da chave String
A chave String do mapa é a propriedade `_beagleAction_` no JSON que identifica o tipo da ação. Você pode nomeá-la do jeito que quiser, desde que o prefixo seja ​​`custom:`. 

### Definição do valor ActionHandler
O valor `ActionHandler` do mapa recebe:
1. `BeagleAction`;
2. `BeagleView`;
3. `BeagleUIElement`;
4. `BuildContext`.

Ele segue a estrutura `void Function({BeagleAction action, BeagleView view, BeagleUIElement element, BuildContext context})`. Esses parâmetros estão disponíveis porque eles provêem todas as informações necessárias para disparar um evento customizado, como o contexto e a ação vinda do JSON.

## Exemplo
Siga esses passos para aprender como criar e customizar suas próprias ações customizadas:

### Passo 1: Crie o identificador da ação
Você tem que definir o identificador. Aqui, vamos nomeá-lo de `custom:log`.

### Passo 2: Crie a ação
Crie sua ação independentemente de implementação do Beagle. Para esse exemplo usamos uma simples função, veja abaixo:
```dart
void debug(String message) {
  debugPrint(message);
}
```

### Passo 3: Crie o mapa de ações customizadas
Crie a estrutura que será passada para o Beagle:
```dart
Map<String, ActionHandler> myCustomActions = {
  'custom:log': ({action, view, element, context}) {
    debug(action.getAttributeValue('message'));
  }
};
```

### Passo 4: Passe o mapa para o Beagle
Para o Beagle ser capaz de disparar sua ação, passe o mapa que você acabou de criar através do método de inicialização:
```dart
BeagleSdk.init(
  actions: myCustomActions,
);
```

É isso! Agora voce pode usar sua ação customizada com o Beagle Flutter!
