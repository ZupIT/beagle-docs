---
title: Beagle Theme
weight: 3
description: >-
 Aprenda nesta seção, como criar seu próprio tema customizado para os componentes Beagle Flutter.
---

---

{{% alert color="warning" %}}
Atenção: Este artigo demonstra o uso do styleId. Mesmo com nomes parecidos o styleId e o style são propriedades bem diferentes. O style usa propriedades pré-definidas pelo Beagle, que aplica mudanças no componente específico que foi adicionada. para aprender mais sobre a propriedade style, [nesta página]({{< ref path="/flutter/layout/styles" lang="pt" >}}).
{{% /alert %}}

# O que é o BeagleTheme

O `BeagleTheme` é uma classe de configuração para os componentes padrão do Beagle (package beagle_components). Ela é responsável por criar temas para os componentes "Button", "Text" e "Screen" (Barra de navegação) e também provê recursos de imagem local para o componente "Image".

Um tema é um conjunto de estilos que são acessados pela propriedade `styleId` do componente. Um botão com o `styleId` = "primary" por exemplo, vai aplicar o tema retornado pelo estilo `beagleTheme.buttonStyle('primary')`.

Os recursos de imagem local são strings com os caminhos para cada imagem que pode ser acessadas pela `server driven view` pelo parâmetro `mobileId` do componente de Imagem. Se por exemplo uma imagem retorna com o valor de `mobileId` = "logo", o caminho da imagem será buscado em `beagleTheme.image('logo')`.

## Como usar o BeagleTheme?

O BeagleTheme não é uma funcionalidade do "core" da biblioteca Beagle. mas sim, do pacote beagle_components. Por isso, diferente da maioria das opções ele não é configurado no BeagleService. O BeagleTheme deve ser passado aos componentes padrão atráves do widget `BeagleThemeProvider`.

É essencial que o `BeagleThemeProvider` fique no nível mais alto da hierarquia de componentes para prevenir casos em que a navegação possa torná-lo indisponível.

1. Crie uma classe que implemente a interface `BeagleTheme`
2. Adicione uma instancia da classe criado ao `BeagleThemeProvider`

Esses dois passos já configuram o BeagleTheme da sua aplicação

```dart
void main() {
  runApp(BeagleProvider(
    beagle: beagleService,
    child: BeagleThemeProvider(
      theme: MyTheme(),
      child: MyApp()
    ),
  ));
}
```

## Imagens locais
O método `image` recebe um identificador da imagem que vem do JSON (`mobileId`) e retorna o caminho correspondente da imagem local em "assets". Veja o exemplo abaixo:

```dart
class MyTheme extends BeagleTheme {
  final Map<String, String> imageMap = {
    'bus': 'images/bus.png',
    'car': 'images/car.png',
    'person': 'images/person.png',
  };

  @override
  String image(String id) {
    return imageMap[id] ?? '';
  }

  // ...
}
```

## Button style
O método `buttonStyle` recebe o `styleId` que vem do JSON e retorna o estilo correspondente em `ButtonStyle`. Veja o exemplo:

```dart
class MyTheme extends BeagleTheme {
  final Map<String, ButtonStyle> buttonStyles = {
    'primary': ButtonStyle(
      backgroundColor: MaterialStateProperty.all<Color>(Colors.green),
      foregroundColor: MaterialStateProperty.all(HexColor(Colors.black)),
    ),
    'secondary': ButtonStyle(
      backgroundColor: MaterialStateProperty.all<Color>(Colors.greenAccent),
      foregroundColor: MaterialStateProperty.all(HexColor(Colors.black)),
    ),
  };

  @override
  ButtonStyle buttonStyle(String id) {
    return buttonMap[id] ?? ButtonStyle();
  }

  // ...
}
```

## Text style

O método `textStyle` recebe o `styleId` que vem do JSON e retorna o valor correspondente em `TextStyle`. Veja o exemplo:

```dart
class MyTheme extends BeagleTheme {
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
    return textMap[id] ?? TextStyle();
  }

  // ...
}
```