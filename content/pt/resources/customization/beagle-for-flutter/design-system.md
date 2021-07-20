---
title: Design System
weight: 3
description: >-
  Aqui você encontra informações sobre como criar e usar seu proprio design system no Beagle Flutter.
---

---

## Por que usar um Design System?
Para usar imagens e textos e botões com estilo, você precisa prover uma implementação de Design System para o Beagle Flutter. Você pode usá-lo em qualquer widget padrão. para aprender mais sobre como usar a biblioteca de componentes padrões, veja a [página de configuração]({{< ref path="/resources/customization/beagle-for-flutter/configuration" lang="pt" >}}).

## Como configurar Design System?
É simples criar seu próprio Sistema de Design. Você só precisa:
1. Crie uma classe que implemente o contrato `BeagleDesignSystem`;
2. Forneça imagens e estilos para cada método.

Veja mais detalhes de cada um deles a seguir:

### image
Este método tem a notação `String image(String id)`. Ele recebe um id de imagem que vem pelo JSON e retorna o recurso de imagem local correspondente. Veja o exemplo:
```dart
final Map<String, String> imageMap = {
  'bus': 'images/bus.png',
  'car': 'images/car.png',
  'person': 'images/person.png',
};

@override
String image(String id) {
  return imageMap[id];
}
```

### buttonStyle
Este método possui a notação `BeagleButtonStyle buttonStyle (String id)`. Ele recebe o id de estilo do botão que vem do JSON e retorna o `BeagleButtonStyle` correspondente. Veja abaixo:

```dart
final Map<String, BeagleButtonStyle> buttonMap = {
  'primaryButton': BeagleButtonStyle(
    androidButtonStyle: ButtonStyle(
      backgroundColor: MaterialStateProperty.all<Color>(Colors.green),
    ),
    iosButtonStyle: BeagleIosButtonStyle(
      color: Colors.green,
    ),
  ),
  'secondaryButton': BeagleButtonStyle(
    androidButtonStyle: ButtonStyle(
      backgroundColor: MaterialStateProperty.all<Color>(Colors.greenAccent),
    ),
    iosButtonStyle: BeagleIosButtonStyle(
      color: Colors.greenAccent,
    ),
  ),
};

@override
BeagleButtonStyle buttonStyle(String id) {
  return buttonMap[id];
}
```

### textStyle
Este método tem a notação `TextStyle textStyle(String id)`. Ele recebe o id do estilo do texto que vem pelo JSON e retorna o `TextStyle` correspondente. Segue uma implementação:
```dart
final Map<String, TextStyle> textMap = {
  'h1': TextStyle(
    fontSize: 22,
  ),
  'h2': TextStyle(
    fontSize: 18,
  ),
};

@override
TextStyle textStyle(String id) {
  return textMap[id];
}
```

## Exemplo completo
Aqui tem o exemplo completo de uma implementação de Design System do Beagle Flutter:
```dart
class MyDesignSystem extends BeagleDesignSystem {
  final Map<String, String> imageMap = {
    'bus': 'images/bus.png',
    'car': 'images/car.png',
    'person': 'images/person.png',
  };

  final Map<String, BeagleButtonStyle> buttonMap = {
    'primaryButton': BeagleButtonStyle(
      androidButtonStyle: ButtonStyle(
        backgroundColor: MaterialStateProperty.all<Color>(Colors.green),
      ),
      iosButtonStyle: BeagleIosButtonStyle(
        color: Colors.green,
      ),
    ),
    'secondaryButton': BeagleButtonStyle(
      androidButtonStyle: ButtonStyle(
        backgroundColor: MaterialStateProperty.all<Color>(Colors.greenAccent),
      ),
      iosButtonStyle: BeagleIosButtonStyle(
        color: Colors.greenAccent,
      ),
    ),
  };

  final Map<String, TextStyle> textMap = {
    'h1': TextStyle(
      fontSize: 22,
    ),
    'h2': TextStyle(
      fontSize: 18,
    ),
  };

  @override
  String image(String id) {
    return imageMap[id];
  }

  @override
  BeagleButtonStyle buttonStyle(String id) {
    return buttonMap[id];
  }

  @override
  TextStyle textStyle(String id) {
    return textMap[id];
  }
}
```

## Como usar um Design System?
Assim como qualquer configuração no Beagle Flutter, para usar sua implementação de Design System você precisa passá-la no método de inicialização `BeagleSdk.init`. Veja abaixo:
```dart
BeagleSdk.init(
  designSystem: MyDesignSystem(),
);
```

E é isso! Esta é toda a configuração necessária para criar e usar um design system customizado no Beagle Flutter.
