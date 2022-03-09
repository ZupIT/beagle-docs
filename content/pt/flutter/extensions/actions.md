---
title: Ações customizadas
weight: 3
description: >-
  Aqui você encontra detalhes de como criar e usar ações customizadas no Beagle Flutter.
---

---

## Como criar uma ação customizada?

1. Declare um mapa do tipo `Map<String, ActionHandler>`;
2. Adicione o mapa criado na criação da intância do BeagleService

Esta estrutura serve para dizer ao Beagle qual ação correta iniciar a partir de um identificador.

### As chaves em um mapa de ações
A chave representa o nome da ação e deve ser equivalente a propriedade `_beagleAction_` do JSON. A única restrição para criação do nome é utilizar o prefixo "custom"

### Os valores do mapa de ações (Action handlers)
Um Action handler é a funcção que recebe os seguintes parâmetros:

- action (BeagleAction): A ação que permite acesso as propriedades vindas do JSON
- view (BeagleView): A BeagleView é quem iniciou a ação, pode ser útil no caso de necessidade de iniciar novas renderizações mas é raramente usada em ações mais simples.
- element (BeagleUIElement): O nó da árvore ao qual a ação pertence
- context (BuildContext): O BuildContext do BeagleWidget pai.

O parâmetro mais importante é a ação e a maioria dos action handlers vão precisar apenas dela para funcionar. Veja um exemplo de uma ação que mostra uma mensagem no console de logs.

```dart
final Map<String, ActionHandler> myActions = {
  'custom:log': ({required action, required element, required view, required context}) {
    log(action.getAttributeValue('message'));
  },
};

final beagleService = BeagleService(
  baseUrl: 'http://myBFF.com',
  components: defaultComponents,
  actions: {...myActions, ...defaultActions},
);
```

É isso! Agora vocÊ já sabe como usar ações customizadas com o Beagle Flutter.
