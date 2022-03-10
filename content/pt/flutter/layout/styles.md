---
title: Styles
weight: 3
description: >-
  Nesta seção, você aprende como gerenciar os estilos no Beagle Flutter.
---

---

{{% alert color="warning" %}}
Atenção: este artigo explica a propriedade `style`. mesmo com nomes parecidos o `style` e `styleId` são propriedades bem diferentes. O styleId funciona em componentes específicos através de uma configuração feita nos componentes do pacote beagle_components. Aprenda mais sobre o `styleId` na seção [Beagle Theme]({{< ref path="/flutter/layout/theme" lang="en" >}}).
{{% /alert %}}

# Introdução

Estilos são propriedades declaradas na chave `style` na representação JSON do componente. Alguns exemplos de estilos são:

- backgroundColor
- borderColor
- borderWidth
- padding
- margin
- flex

Qualquer componente pode receber um estilo, no Beagle WEB essa implementação é feita com CSS, para Android e iOS é usada a biblioteca do Facebook [Yoga](https://yogalayout.com/). No Flutter cada propriedade é traduzida para seu widget equivalente em Flutter. Para entender melhor da uma olhada neste artigo [Beagle Flutter Theme - Saiba mais](https://gist.github.com/Tiagoperes/12f786e06ad80752afacaf80bc49bcf9).

Veja a lista completa de propriedades de estilo, [aqui]({{< ref path="/api/style" lang="pt" >}}).

# Propriedades não implementadas
Embora tenhamos suporte para a maioria das propriedades de estilo do Beagle, não foi possível implementar todas ainda. Veja abaixo a lista de propriedades que ainda precisam ser desenvolvidas:

- flex.basis;
- flex.grow;
- flex.selfAlign;
- flex.alignContent;
- flex.flexWrap;
- flex.shrink;
- The flex directions COLUMN_REVERSE and ROW_REVERSE;
- The values of start and end for margin and padding;
- positions can only have `REAL` values, not `PERCENT`.

Note aqui, que embora `flex.alignItems` esteja totalmente implementada, o valor padrão para Flutter é `start` ao invés de `stretch`. Para entender melhor este funcionamente, [veja o artigo](https://gist.github.com/Tiagoperes/12f786e06ad80752afacaf80bc49bcf9).

# Desabilitando estilos para componentes específicos
O Beagle adiciona estilos em componentes ao envolver cada um deles em um widget como Flex, Flexible, Stack, Positioned e Container. Alguns widgets talvez não precisam ou não possam receber estilos e este comportamento se torna indesejável. Para desabilitar a estilização em um componente, no ComponentBuilber é necessário sobrescrever o método `getStyleConfig` e retornar uma configuração com o valor de `enabled` falso.

```dart
class MyComponentBuilder extends ComponentBuilder {
  @override
  StyleConfig getStyleConfig() => StyleConfig.disabled();

  // ...
}
```

Por padrão, componentes sem um estilo declarado expandem-se para preencher todo o espaço disponível. Para desabilitar este comportamento, você pode alterar a propriedade `shoudExpand` para falso. Utilize está funcionalidade com cuidado pois ela pode gerar erros de layout no Flutter.

```dart
class MyComponentBuilder extends ComponentBuilder {
  @override
  StyleConfig getStyleConfig() => StyleConfig.disabled(shouldExpand: false);

  // ...
}
```

# Controlando "padding" e "decoration"

Alguns widgets tratam seus próprios estilos, por exemplo, adicionar "wrappers" não funciona. Veja o caso do botão, como usamos um widget do tipo `ElevatedButton`, adicionar "background color", "borders" e "padding" ao "wrapper" não vai funcionar. Ao invés disso, um objecto do tipo `ButtonStyle` deve ser criado baseado no estilo desejado e então passado ao `ElevatedButton`. Precisamos também desabilitar o comportamento padrão para padding e decorations ("backgroundcolor" e "border")

Para desabilitar o padding e decoration automáticos, mas manter todos os outros estilos, podemos implementar um método `getStyleConfig` do `ComponentBuilder` e retornar a configuração onde `` tem o valor de "true" mas `shouldDecorate` tem o valor de "false"

Basta então passá-lo para o widget através do `ComponentBuilder`. Veja como no trecho de código abaixo:

```dart
class _ButtonBuilder extends ComponentBuilder {
  @override
  StyleConfig? getStyleConfig() => StyleConfig.enabled(shouldDecorate: false);

  @override
  Widget buildForBeagle(element, _, __) {
    return BeagleButton(
    onPress: element.getAttributeValue('onPress'),
    text: element.getAttributeValue('text'),
    enabled: element.getAttributeValue('enabled'),
    styleId: element.getAttributeValue('styleId'),
    style: element.getStyle(),
  );
}}
```

`style` é do tipo `BeagleStyle`.

# Criando seus próprios containers

Através do pacote beagle_components, a biblioteca fornece um componente muito importante chamado `Container`, O container é responsável por manter e organizar multiplos componentes de acordo com as propriedades do flex (`style.flex`) providas.

Se você precisar criar um novo componente que respeite todas as propriedade de `style.flex`, é preciso extender a classe `Styled`. Isso é útil para criar um componente Card, por exemplo:

```dart
class Card extends Styled {
  Card({
    Key? key,
    BeagleStyle? style,
    List<Widget> children = const []
  }) : super(key: key, children: children, style: style);

  @override
  Widget build(BuildContext context) => Container(
    padding: EdgeInsets.all(15),
    decoration: BoxDecoration(
      color: Colors.white,
      borderRadius: BorderRadius.all(Radius.circular(10)),
      boxShadow: [BoxShadow(color: Color(0x0A000000), blurRadius: 1, spreadRadius: 2, offset: Offset(1, 1))],
    ),
    child: super.build(context),
  );
}
```

`Styled` é um `StatelessWidget`. Você pode usar as classes `StatefulStyled` e `StyledState` para criar componentes do tipo "Stateful" que funcionam como containers de layout.

Ao estender classes e usar mixins, você pode acabar desabilitando alguns métodos da super-classe. Se isso acontecer e você precisar chamar `StyledState`, prefira usar `super.build`, `super.initState` e `super.didUpdateWidget`, você pode usar `buildStyled`, `initStyled` e `updateStyled`.

# Uma abordagem diferente para estilos no Beagle Flutter

O Beagle define um conjunto de propriedades para manipular o estilo e o layout de um componente. Essas propriedades são as mesmas em todas as plataformas (iOS, Android, Web e Flutter), ou seja, o json gerado pelo backend é compatível com qualquer uma dessas plataformas.

Uma linguagem de estilo que funciona para todas as plataformas foi muito importante para iOS, Android e Web. Assim, usando o Yoga, implementamos um conjunto de recursos de layout com base no layout Flex da especificação CSS. Agora, se estamos usando o Flutter, ainda precisamos usar a mesma linguagem de estilo? Ninguém vai desenvolver um app para iOS e Flutter, por exemplo, seria uma loucura. Como todas as plataformas do aplicativo podem usar o Flutter, a linguagem de estilo poderia ser definida pelo próprio Flutter e não pelo Beagle, o que seria mais simples para desenvolvedores já familiarizados com os widgets do Flutter.

O Beagle Flutter é fornecido com o mecanismo de layout usado por todas as bibliotecas de interface do usuário do Beagle, portanto, ao usar nossos componentes padrão, a propriedade "style" pode ser usada e funciona. Dessa forma, é mais fácil reproduzir os exemplos, pois eles não são específicos da plataforma.

Embora os estilos Beagle funcionem na maioria das vezes, infelizmente, [alguns ajustes ainda são necessários](https://gist.github.com/Tiagoperes/12f786e06ad80752afacaf80bc49bcf9). Além disso, se você for usar apenas o Flutter para desenvolver o aplicativo e a plataforma não for realmente um problema, pode ser mais fácil se adaptar a um mecanismo de layout no backend que funcione mais como o próprio Flutter.

Em vez de usar "style", podemos expor os widgets de layout do Flutter como componentes orientados a servidor. Veja os exemplos abaixo:

```dart
final Map<String, ComponentBuilder Function()> defaultComponents = {
  'custom:flex': () => _FlexBuilder(),
  'custom:flexible': () => _FlexibleBuilder(),
  'custom:stack': () => _StackBuilder(),
  'custom:positioned': () => _PositionedBuilder(),
  'custom:container': () => _ContainerBuilder(),
};

class _FlexBuilder extends ComponentBuilder {
  @override
  Widget buildForBeagle(element, children, _) => Flex(
    direction: EnumUtils.fromString(Axis.values, element.getAttributeValue('direction')) ?? Axis.vertical,
    mainAxisAlignment: EnumUtils.fromString(MainAxisAlignment.values, element.getAttributeValue('mainAxisAlignment')) ?? MainAxisAlignment.start,
    crossAxisAlignment: EnumUtils.fromString(CrossAxisAlignment.values, element.getAttributeValue('crossAxisAlignment')) ?? CrossAxisAlignment.start,
    clipBehavior: EnumUtils.fromString(Clip.values, element.getAttributeValue('clipBehavior')) ?? Clip.none,
    mainAxisSize: EnumUtils.fromString(MainAxisSize.values, element.getAttributeValue('mainAxisSize')) ?? MainAxisSize.max,
    verticalDirection: EnumUtils.fromString(VerticalDirection.values, element.getAttributeValue('verticalDirection')) ?? VerticalDirection.down,
    textBaseline: EnumUtils.fromString(TextBaseline.values, element.getAttributeValue('textBaseline')) ?? TextBaseline.alphabetic,
    textDirection: EnumUtils.fromString(TextDirection.values, element.getAttributeValue('textDirection')) ?? TextDirection.ltr,
    children: children,
  );
}

class _FlexibleBuilder extends ComponentBuilder {
  @override
  Widget buildForBeagle(element, children, _) => Flexible(
    fit: EnumUtils.fromString(FlexFit.values, element.getAttributeValue('fit')) ?? FlexFit.loose,
    flex: element.getAttributeValue('flex'),
    child: children[0],
  );
}

class _StackBuilder extends ComponentBuilder {
  @override
  Widget buildForBeagle(element, children, _) {
    final alignment = element.getAttributeValue('alignment');
    final alignmentX = alignment?['x'];
    final alignmentY = alignment?['y'];
    return Stack(
      fit: EnumUtils.fromString(StackFit.values, element.getAttributeValue('fit')) ?? StackFit.loose,
      textDirection: EnumUtils.fromString(TextDirection.values, element.getAttributeValue('textDirection')) ?? TextDirection.ltr,
      clipBehavior: EnumUtils.fromString(Clip.values, element.getAttributeValue('clipBehavior')) ?? Clip.none,
      alignment: AlignmentDirectional(alignmentX ?? 0, alignmentY ?? 0),
      children: children,
    );
  }
}

class _PositionedBuilder extends ComponentBuilder {
  @override
  Widget buildForBeagle(element, children, _) => Positioned(
    width: element.getAttributeValue('width'),
    height: element.getAttributeValue('height'),
    top: element.getAttributeValue('top'),
    left: element.getAttributeValue('left'),
    bottom: element.getAttributeValue('bottom'),
    right: element.getAttributeValue('right'),
    child: children[0],
  );
}

class _PaddingBuilder extends ComponentBuilder {
  @override
  Widget buildForBeagle(element, children, _) => Padding(
    padding: element.getAttributeValue('padding'),
    child: children[0],
  );
}

class _ContainerBuilder extends ComponentBuilder {
  @override
  Widget buildForBeagle(element, children, _) => Container(
    // ...
  );
}
```

Acima temos um exemplo de como poderíamos ignorar o motor padrão de layout do Beagle e usar o nosso customizado, apenas expondo alguns componentes de layout do Flutter.

Para usar diferentes motores de layout, a primeira coisa que deve ser feita é desabilitar o moto padrão de layout do Beagle Flutter. Para isso, basta apenas mudar a opção `enableStyles` para o valor "false". mas tenha cuidado pois a maioria dos componentes padrão não funcionarão mais.

```dart
final beagleService = BeagleService(
  baseUrl: 'http://$localhost:8080',
  components: myCustomComponents,
  enableStyles: false,
  // ...
);
```