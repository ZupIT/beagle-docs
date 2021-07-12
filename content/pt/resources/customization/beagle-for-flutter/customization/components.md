---
title: Componentes Customizados
weight: 2
description: >-
  Aqui você encontra informações sobre como criar e usar seus próprios componentes no Beagle Flutter.
---

---

## Como criar widgets customizados?
É bem simples criar componentes customizados no Beagle Flutter, você só precisa declarar um mapa que siga a estrutura `Map<String, ComponentBuilder>` e passá-lo pelo método de inicialização `BeagleSdk.init`. Basicamente essa estrutura diz ao Beagle qual widget renderizar quando dado identificador vier pelo JSON.

### Definição da chave String
A chave String do mapa é a propriedade `_beagleComponent_` no JSON que identifica o tipo do widget. Você pode nomeá-lo do jeito que quiser, desde que o prefixo seja ​​`custom:`. 

### Definição do valor ComponentBuilder
O valor ComponentBuilder do mapa recebe um `BeagleUIElement`, uma lista de widgets e uma `BeagleView` como parâmetros e retorna um widget, seguindo a estrutura `Widget Function(BeagleUIElement element, List<Widget> children, BeagleView view)`. Esses parâmetros estão disponíveis porque eles provêem todas as informações necessárias para construir um widget customizado, como o contexto e os filhos.

## Exemplo
Siga esses passos para aprender como criar e customizar seus próprios widgets customizados:

### Passo 1: Crie o identificador do componente
O primeiro passo para criar um componente customizado com o Beagle Flutter, é definir o identificador. Aqui, vamos nomeá-lo de `custom:loading`.

### Passo 2: Crie o widget
Agora crie seu widget independentemente do Beagle. Para esse exemplo, vamos usar o simples widget abaixo:
```dart
final customLoading = Center(
  child: const Text('Meu carregando customizado.'),
);
```

### Passo 3: Crie o mapa de componentes customizados
Com o widget e o identificador do widget prontos, é hora de criar a estrutura que vamos passar para o Beagle:
```dart
Map<String, ComponentBuilder> myCustomComponents = {
  'custom:loading': (element, children, view) {
    return customLoading;
  }
};
```

### Passo 4: Passe-os para o Beagle
Para o Beagle ser capaz de renderizar seu widget, passe o mapa que você acabou de criar através do método de inicialização:
```dart
BeagleSdk.init(
  components: myCustomComponents,
);
```

É isso! Agora voce pode usar seu componente customizado com o Beagle Flutter!
