---
title: Componentes Customizados
weight: 3
description: >-
  Nessa seção você encontrará informações sobre como criar e usar seus próprios componentes no Beagle Flutter.
---

---

## Como criar widgets customizados?
Você precisa declarar um mapa que siga a estrutura `Map<String, ComponentBuilder>` e passá-lo pelo método de inicialização `BeagleSdk.init`.

Essa estrutura diz ao Beagle qual widget renderizar quando dado identificador vier pelo JSON.

### Definição da chave String
A chave String do mapa é a propriedade `_beagleComponent_` no JSON que identifica o tipo do widget. Você pode nomeá-lo do jeito que quiser, desde que o prefixo seja ​​`custom:`. 

### Definição do valor ComponentBuilder
O valor `ComponentBuilder` do mapa recebe por parâmetro:
- Um `BeagleUIElement`;
- Uma lista de widgets;
- Uma `BeagleView`.

Ele retorna um widget e segue a estrutura `Widget Function(BeagleUIElement element, List<Widget> children, BeagleView view)`.

Esses parâmetros estão disponíveis porque eles provêem todas as informações necessárias para construir um widget customizado, como o contexto e os filhos.

## Exemplo
Siga esses passos para aprender como criar e customizar seus próprios widgets customizados:

### Passo 1: Crie o identificador do componente
Defina o identificador, aqui vamos nomeá-lo de `custom:loading`.

### Passo 2: Crie o widget
Crie seu widget independentemente do Beagle. Para esse exemplo, vamos usar o simples widget abaixo:
```dart
final customLoading = Center(
  child: const Text('Meu carregando customizado.'),
);
```

### Passo 3: Crie o mapa de componentes customizados
Crie a estrutura que será passada para o Beagle, veja abaixo:
```dart
Map<String, ComponentBuilder> myCustomComponents = {
  'custom:loading': (element, children, view) {
    return customLoading;
  }
};
```

### Passo 4: Passe-os para o Beagle
Passe pelo método de inicialização o mapa que você criou, agora o Beagle é capaz de renderizar seu widget:
```dart
BeagleSdk.init(
  components: myCustomComponents,
);
```

É isso! Agora voce pode usar seu componente customizado com o Beagle Flutter!
